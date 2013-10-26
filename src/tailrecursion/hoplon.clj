;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns tailrecursion.hoplon
  (:refer-clojure :exclude [subs name read-string])
  (:require
    [clojure.walk         :as walk    :refer [postwalk]]
    [clojure.string       :as string  :refer [blank? split]]
    [clojure.set          :as s       :refer [union intersection]]
    [cljs.analyzer        :as a]
    [clojure.core.strint  :as i]))

(defn subs [& args] (try (apply clojure.core/subs args) (catch Throwable _)))
(defn name [& args] (try (apply clojure.core/name args) (catch Throwable _)))
(defn read-string [s] (when (and (string? s) (not (blank? s))) (clojure.core/read-string s)))

(defn add-doc [docstring pair]
  (if (string? docstring) (list (first pair) docstring (last pair)) pair))

(defn do-def [docstring bindings values]
  (->> (macroexpand `(let [~bindings ~values]))
       (second)
       (partition 2)
       (map (partial add-doc docstring)) 
       (map #(cons 'def %))
       (list* 'do)))
      
(defmacro def-values
  "Destructuring def, similar to scheme's define-values."
  ([bindings values] 
   (do-def nil bindings values))
  ([docstring bindings values]
   (do-def docstring bindings values)))

(create-ns 'js)
(create-ns 'tailrecursion.javelin)

(declare walk)

(defn listy? [x]
  (or (list? x)
      (= clojure.lang.LazySeq (type x))
      (= clojure.lang.Cons (type x)))) 

(defn sub-id [x]
  (let [k?s? #(or (keyword? %) (symbol? %))
        u*   'clojure.core/unquote
        us*  'clojure.core/unquote-splicing
        u?   #(and (listy? %) (= u* (first %)) (k?s? (second %)))
        us?  #(and (listy? %) (= us* (first %)) (k?s? (second %)))] 
    (cond (u? x)  (if (keyword? (second x))
                    `(do! (js/jQuery ~(str "#" (name (second x)))) :value)
                    `(do! (js/jQuery (str "#" ~(second x))) :value)) 
          (us? x) (if (keyword? (second x))
                    `(js/jQuery ~(str "#" (name (second x))))
                    `(js/jQuery (str "#" ~(second x)))) 
          :else x)))

(defn prep-attrval [x]
  (->> (cond (string? x) (read-string (str "[" x "]"))
            (vector? x) x
            :else       [])
      (postwalk sub-id)))

(defn prep-attr [attr]
  (let [k* #(-> % name (subs 3) keyword)]
    (loop [ret {:do (prep-attrval (:do attr))} 
           [[k v] & more :as more?] (seq (dissoc attr :do))]
      (let [add #(update-in ret [:do] conj `(~% ~(k* k) ~@(prep-attrval v)))]
        (if-not more?
          (if (empty? (:do ret)) (dissoc ret :do) ret) 
          (case (-> k name (subs 0 3))
            "do-" (recur (add 'do!) more)
            "on-" (recur (add 'on!) more)
            (recur (assoc ret k v) more)))))))

(defn parse-e [[tag & [head & tail :as args]] & {:keys [prep?]}]
  (let [prep (if-not (= prep? false) prep-attr identity)
        kw1? (comp keyword? first)
        mkkw #(->> (partition 2 %) (take-while kw1?) (map vec))
        drkw #(->> (partition 2 2 [] %) (drop-while kw1?) (mapcat identity))]
    (cond (map?     head) [tag (prep head) tail]
          (keyword? head) [tag (prep (into {} (mkkw args))) (drkw args)]
          :else           [tag {} args])))

(defn walk-loop [[looper & args] [tag attr [tpl :as kids]]]
  (if-not looper
    `(~tag ~attr ~@kids)
    (let [cntnr `(~tag ~attr)
          gsym? #(and (symbol? %) (= \# (last (name %))))
          mksym (fn [& _] (gensym "hl-auto-"))
          gsyms (into {} (map (juxt identity mksym) (filter gsym? args)))
          sym*  '(str (gensym "hl-auto-")) 
          args  (remove gsym? args)]
      `(~looper
         (fn [~@args]
           (let [~@(interleave (vals gsyms) (repeat sym*))]
             ~(postwalk #(get gsyms % %) tpl))) 
         ~cntnr))))

(defn walk-do [d form]
  (if-not d
    form
    (let [{ons "on!" dos "do!"} (group-by (comp name first) d)]
      `(let [f# ~form]
         (doto f# ~@ons)
         (tailrecursion.javelin/deref*
           (tailrecursion.javelin/cell= (doto f# ~@dos)))))))

(defn walk-list [form]
  (let [[tag attr kids] (parse-e form)
        [d l] ((juxt :do :loop) attr)
        attr (dissoc attr :do :loop)]
    (-> [tag attr (map walk kids)]
      ((partial walk-loop l))
      ((partial walk-do d)))))

(defn terpol8 [s]
  (let [parts (remove #(= "" %) (#'i/interpolate s))]
    (if (every? string? parts) s `(str ~@parts))))

(defn walk-text [[_ text :as form]]
  (let [i (terpol8 text)]
    (if-not (listy? i)
      form
      `(let [t# ~form]
         (tailrecursion.javelin/cell= (set! (.-nodeValue t#) ~i))
         t#))))

(defn $text? [x] (or (= '$text x) (= 'tailrecursion.hoplon/$text x)))

(defn walk [form]
  (cond ($text? (first form)) (walk-text form)
        (listy? form)         (walk-list form)
        :else                 form))

(defn norm [form]
  (cond
    (string? form)
      `($text ~form)
    (symbol? form)
      `(~form {})
    (and (listy? form) ($text? (first form)))
      form
    (listy? form)
      (let [parse-node  #(parse-e % :prep? false)
            [tag a  k]  (parse-node form)
            [tag a* k*] (if (listy? tag) (parse-node (norm tag)) [tag nil nil])
            [attr kids] [(merge a* a) (concat (map norm k*) (map norm k))]]
        `(~tag ~attr ~@kids))))

(defmacro with-frp [& forms]
  `(spliced ~@(map (comp walk norm) forms)))
