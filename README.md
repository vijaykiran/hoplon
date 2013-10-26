<img src="https://raw.github.com/tailrecursion/hoplon/master/img/Hoplite.jpg">

# Hoplon

Hoplon is a set of tools and libraries for making web applications. Hoplon
provides a compiler for web application frontend development, and includes
the following libraries as dependencies to complete the stack:

* [Javelin][1]: a spreadsheet-like dataflow library for managing client
  state. Hoplon tightly integrates with Javelin to reactively bind DOM
  elements to the underlying Javelin cell graph.
* [Castra][2]: a full-featured RPC library for Clojure and
  ClojureScript, providing the serverside environment.
* [Cljson][3]: an efficient method for transferring Clojure/ClojureScript
  data between client and server. Castra uses cljson as the underlying
  transport protocol.

### Example

```xml
<script type="text/hoplon">
  ;; Page declaration specifies output file path.
  (page index.html)
  
  ;; definitions in this file are optional
  (defn my-list [& items]
    ((div :class "my-list")
       (into ul (map #(li (div :class "my-list-item" %)) items))))

  (def clicks (cell 0))
</script>
    
<html>
  <head>
    <title>example page</title>
  </head>
  <body>
    <with-frp>
      <h1>Hello, Hoplon</h1>
      
      <!-- an HTML syntax call to the my-list function -->
      <my-list>
        <span>first thing</span>
        <span>second thing</span>
      </my-list>

      <!-- using FRP to link DOM and Javelin cells -->
      <p>You've clicked ~{clicks} times, so far.</p>
      <button on-click="#(swap! clicks inc)">click me</button>
    </with-frp>
  </body>
</html>
```

Or, equivalently:

```clojure
(page index.html)

(defn my-list [& items]
  ((div :class "my-list")
     (into ul (map #(li (div :class "my-list-item" %)) items))))

(def clicks (cell 0))

(html
  (head
    (title "example page"))
  (body
    (with-frp
      (h1 "Hello, Hoplon")

      (my-list
        (span "first thing")
        (span "second thing"))

      (p "You've clicked ~{clicks} times, so far.")
      (button :on-click [#(swap! clicks inc)] "click me"))))
```

### Demos

* [Hoplon demo applications repository][5]

### Dependency

Artifacts are published on [Clojars][4]. 

```clojure
[tailrecursion/hoplon "3.0.2"]
```

```xml
<dependency>
  <groupId>tailrecursion</groupId>
  <artifactId>hoplon</artifactId>
  <version>3.0.2</version>
</dependency>
```

### Documentation

* [Getting Started][9]
* ~~[Configuration][9]~~
* ~~[API Documentation][9]~~
* [Design Document][6]

## Getting Started

Hoplon web application frontends are built from source files by the Hoplon
compiler. The Hoplon compiler compiles source files with the `.html.hl` and
`.cljs.hl` extensions, emitting static HTML pages and ClojureScript source
files. The ClojureScript sources are then compiled into a `main.js` file that
is loaded from the HTML pages. The resulting output files can then be served
from a web server's document root.

#### Hoplon Source File Extensions

Hoplon pages can be written using either the familiar HTML markup or the
Clojure [s-expression][12] syntax. Use the file extension to indicate which
syntax the source file contains:

* `.html.hl`: HTML markup syntax
* `.cljs.hl`: [s-expression][12] syntax

### Building a Hoplon Application

Hoplon applications are built using the [boot][11] build tool. The following
`boot.edn` file is a good starting point:

```clojure
{:project       my-hoplon-project
 :version       "0.1.0-SNAPSHOT"
 :dependencies  [[org.clojure/clojurescript "0.0-1859"]
                 [tailrecursion/boot.task "0.1.1"]
                 [tailrecursion/hoplon "3.0.2"]]
 :require-tasks #{[tailrecursion.boot.task :refer :all]
                  [tailrecursion.hoplon.boot :refer :all]}
 :src-paths     #{"src/html" "src/clj" "src/cljs"}
 :src-static    #{"resources/static"}
 :public        "resources/public"}
```

When the project is built, HTML and JavaScript files will be created and put
in the `resources/public` directory.

```bash
# build once and exit
$ boot hoplon

# watch source paths for changes and rebuild as necessary
$ boot watch hoplon
```

#### Compiler Source Directories

For the purposes of this document (as specified in the `boot.edn` file above)
the project paths are organized as follows:

| Directory           | Contents                                              |
|---------------------|-------------------------------------------------------|
| _src/html_          | Hoplon source files.                                  |
| _src/cljs_          | ClojureScript library source files.                   |
| _src/clj_           | Clojure source files.                                 |
| _resources/static_  | Static content (CSS files, images, etc.), organized in directories reflecting the application's HTML page structure. |
| _resources/public_  | Compiled HTML and JavaScript files, with static content overlayed. |

This particular directory structure was chosen simply as an example. In practice
the source paths directory structure is completely arbitrary. Source files can
be organized in any way that makes sense for the project. Static files, of
course, need to have a directory structure that mirrors the desired output
directory structure.

#### Library And Package Management

Hoplon projects can depend on maven artifacts, specified in the `:dependencies`
key of the project _boot.edn_ file. These jar files may contain any of the
following:

* Clojure namespaces (ClojureScript macros are written in Clojure).
* ClojureScript namespaces to be used in the project.
* Raw JavaScript source files to be prepended (in dependency order) to the
  _main.js_ output file.
* Google Closure Compiler ready JavaScript source and extern files.

Note that JavaScript dependency jar files must be prepared a certain way,
described [here](#).

### Hello World

The simplest example application looks almost exactly like a standard HTML web
page, with the exception of an unfamiliar script tag containing a [page
declaration][7]. This bit of code tells the Hoplon compiler where to put the
output file it will produce. The rest of the file is a normal web page, written
in the normal HTML syntax. The compiled page, _index.html_, when viewed in the
browser will be a page with a red heading of "Hello world", as one would expect. 

```html
<script type="text/hoplon">
  (page index.html)
</script>   

<html>
  <head></head>
  <body>
    <h1 id="main" style="color:red">Hello world</h1>
  </body>
</html>
```

### S-Expression Syntax

Since HTML markup is a tree structure it can be expressed as
[s-expressions][12].  For example, the HTML markup
`<form><input><input></form>` is syntactically equivalent to the s-expression
`(form (input) (input))`. With that in mind, the Hello World example can be
translated into s-expression syntax. The formal rules of s-expr as HTML syntax
are presented in the next section, but here it is:

```clojure
(page index.html)

(html
  (head)
  (body
    (h1 :id "main" :style "color:red" "Hello world")))
```

In general, Hoplon programs can be represented equivalently in either HTML or
ClojureScript syntax. This is an important point for designers and developers
who rely on development tools to maximize productivity.

#### ClojureScript As HTML

The equivalence of HTML and ClojureScript syntax is interesting and can be used
to generate HTML, like [Hiccup][18] does. What Hoplon provides goes farther and
includes semantic equivalence, as well. This is accomplished by the Hoplon
ClojureScript runtime environment and its extensions to the JavaScript DOM
objects.

In HTML there are three types of primitives:

* element nodes
* text nodes
* attribute nodes

The syntax and semantics of HTML can be added to the ClojureScript environment
by extending the the native DOM types:

* applying a native DOM element as a function with other elements as arguments
  appends the arguments as children of the element and returns the element
* applying a native DOM element to a ClojureScript map appends the map's keys
  and values to the element as attribute node names and values
* the special `$text` function takes one argument (a string) and creates a text
  node with the string as its text content

#### Canonical Form

In the canonical ClojureScript as HTML form, elements are lists enclosed in
parentheses: the tag name is in function position, a map of attributes is the
first argument, and any remaining arguments are element or text nodes. Text
nodes are created by the `$text` function which accepts a single string
argument.

```clojure
;; An element with no attributes or children.
(div {})
;;=> #<function HTMLDivElement() { [native code] }>

;; An element with a child who has a text node.
(div {} (span {} ($text "hello")))
;;=> #<function HTMLDivElement() { [native code] }>

(.-firstChild (div {} (span {} ($text "hello"))))
;;=> #<function HTMLSpanElement() { [native code] }>

(.. (div {} (span {} ($text "hello"))) -firstChild -textContent)
;;=> "hello"

;; An element with attributes.
(div {:foo "bar"} ($text "hello"))
;;=> #<function HTMLDivElement() { [native code] }>

(. (div {:foo "bar"} ($text "hello")) (getAttribute "foo"))
;;=> "bar"

;; Further combinations are possible.
(def myelem (div {} (p {} ($text "line 1"))))
;;=> #'user/myelem

(.. myelem -lastChild -textContent)
;;=> "line 1"

(myelem {} (p {} ($text "line 2")))
;;=> #<function HTMLDivElement() { [native code] }>

(.. myelem -lastChild -textContent)
;;=> "line 2"

(myelem {:foo "bar"} (p {} ($text "line 3")))
;;=> #<function HTMLDivElement() { [native code] }>

(. myelem (getAttribute "foo"))
;;=> "bar"

(.. myelem -lastChild -textContent)
;;=> "line 3"
```

#### With Syntactic Sugar

Writing large HTML pages like this would be rather tedious. The ClojureScript
semantics can be relaxed a bit, though, to reduce line noise and eliminate
redundant punctuation when the intent is clear. Hoplon provides a literal
representation of HTML as code and vice versa, so it is possible to use macros
to perform these kinds of syntax transformations. The `html` macro transforms
this more friendly syntax to the strict canonical form:

```clojure
(html

  ;; Elements with no attributes. Attribute maps may be omitted.
  (div (hl))

  ;; Parentheses can be omitted when element has no attributes or children.
  (div hl)

  ;; Bare strings can be used in place of $text expressions.
  (div
    (p "Paragraph 1")
    (p "Paragraph 2"))

  ;; An element with attributes. Key/value pairs may be provided inline.
  (div :foo "bar" "hello")

  ;; Inline attributes with Scheme-like indenting
  (div
    :id "main"
    :class "component-wrapper"
    (form
      :action "foo.php"
      (label
        :for "first-name"
        "First Name")
      (input
        :type "text"
        :id "first-name"
        :name "first-name")
      (br)
      (label
        :for "last-name"
        "Last Name")
      (input
        :type "text"
        :id "last-name"
        :name "last-name"))))

;; etc, etc.
```

This transformation is automatically applied by the compiler to the last form
on the page (the html document). The `html` macro is used mainly from inside
functions that contain markup or from external libraries that aren't compiled
by the Hoplon compiler.

#### With Imagination

You can write your own macro to do even stranger transformations. All it has to
do is emit the canonical form. Consider the imaginary `htmlish` macro that
performs the following transformation (we like how weird it is, at least):

```clojure
(htmlish
  <div id="main" class="component">
    <h1> "Hello, world!" </h1>
    <p> "This is a weird lil macro." </p>
  </div>)
```

And we come full circle&mdash;the magic of macros.

### The Markup Is A Program

This ability to transform the markup is powerful because of the semantic
and syntactic equivalence between HTML and ClojureScript in Hoplon. But
syntactic sugar is most useful in combination with evaluation. When the
markup forms expressions which are evaluated in the DOM, new forms are
possible. Consider the following variation of an example seen above:

```clojure
(html
  ((div :id "main" :class "component-wrapper")
     ((form :action "foo.php")
        (label :for "first-name" "First Name")
        (input :type "text" :id "first-name" :name "first-name")
        (br)
        (label :for "last-name" "Last Name")
        (input :type "text" :id "last-name" :name "last-name"))))
```

This is more than mere syntactic sugar. Here is the full power of Lisp&mdash;a
program that evaluates to an HTML document. This suggests the possibility of
producing HTML documents by evaluating programs written in HTML markup (or
equivalent s-expressions) _in the client_, which is exactly what happens when a
page in a Hoplon application is loaded.

#### Hoplon Pages

Web applications are necessarily organized into "pages". Each page is a single
HTML file that resides on a server or, in the bad old days, was generated
dynamically for each request. Hoplon applications are also organized this way.

A typical page might look like this:

```clojure
(page examples/sexp.html)

(defn fancyitem [heading body]
  (li
    (h2 heading)
    (p body)))
    
(html
  (head
    (title "Hello Functions"))
  (body
    (h1 "Hello Functions")
    (ul
      (fancyitem (span "Item 1") (span "This is the first item."))
      (fancyitem (span "Item 2") (span "This is the second item.")))))
```

The page can be divided into three main parts, from top to bottom:

* the page declaration
* definitions and initialization code
* the page markup

The first form in the file must always be the page declaration, and the last
form must always be the page markup. In between may be a number of ClojureScript
expressions that might define vars needed elsewhere in the page, run setup or
initialization code, talk to the server, or anything else required to make the
page go.

#### Page Declaration

Each Hoplon source file must have a page declaration as its first form. The
page declaration

* determines the path of the output file relative to the webserver document
  root.
* declares a ClojureScript namespace for the page (the namespace name is
  obtained by [munging][17] the output file path).
* automatically adds `:require` and `:require-macros` clauses to refer all
  names and macros from the `tailrecursion.hoplon` and `tailrecursion.javelin`
  namespaces.
* may contain `:refer-clojure`, `:require` and/or `:require-macros` clauses.

For example:

```clojure
(page examples/lesson1/fractions.html
  ;;  ^ REQUIRED output file path

  ;;  v OPTIONAL (:refer-clojure ...) clause
  (:refer-clojure :exclude [nth name])

  ;;  v OPTIONAL (:require ...) clause
  (:require
    [needful.core :as needful :refer [nth name]]
    [acme.widgets :as widgets :refer [stethescope binoculars]]
    [enemy.plans  :as plans   :refer [attack! destroy! show-no-mercy!]])

  ;;  v OPTIONAL (:require-macros ...) clause
  (:require-macros
    [acme.super-transform :refer [uberdef]]))
```

#### Definitions And Initialization

Any ClojureScript expressions in the file between the page declaration and the
page markup are evaluated when the page has loaded and the DOM is ready, but
before the page markup is evaluated.

#### Page Markup

The last form in a Hoplon source file must always be the page markup. This is
a HTML document with a `html` element containing exactly one `head` followed
by one `body`. This markup is static and not evaluated, as such. Any markup
inside the body, however, is evaluated as ClojureScript expressions when the
page loads, and the result of this evaluation is appended into the page's
empty `body`.

### Dataflow / Reactive Programming

An example of how macros can be used to advantage is the `with-frp` macro that
ships with Hoplon. It ties the `Cell` reference type from [Javelin][14] to the
DOM such that DOM elements update reactively when the underlying [Javelin][14]
cells change and [Javelin][14] cells are updated in response to user input
(events).  Consider the following program:

```clojure
(page examples/frp.html)

(defc clicks 0)

(html
  (head
    (title "Reactive Attributes: Example 1"))
  (body
    (with-frp
      ;; underlying cells wired to DOM using the :do-text attribute
      (p :do-text [(format "You've clicked %s times, so far." clicks)])

      ;; underlying cells wired to DOM using interpolated text node
      (p "If you click again you'll have clicked ~(inc clicks) times.")

      ;; user input (click event) wired to change underlying cells
      (button :on-click [#(swap! clicks inc)] "click me"))))
```

Clicking on the "click me" button causes the paragraph element to update, its
text reflecting the number of times the user has clicked so far. Note that the
paragraph's text updates _reactively_ according to a _formula_&mdash;its text
is updated automatically whenever the value in the `clicks` cell changes.

#### Reactive Attributes

In the example above the DOM was wired up to the underlying [Javelin][14] cells
via the `:on-click` and `:do-text` attributes on DOM elements. In general,
reactive attributes are divided into two categories: **input** and **output**.

##### Input Attributes
  * start with the prefix `on-`.
  * connect DOM events (click, keypress, mouseover, etc.) to cell values via a
    callback function.
  
##### Output Attributes
  * start with the prefix `do-`.
  * link the state of DOM elements to the state of the underlying [Javelin][14]
    cells via formulas.
  * are extended by providing a method for the `#'tailrecursion.hoplon/do!`
    multimethod. Examples [here][15].

| Attribute                 | Description |
|---------------------------|-------------|
| `:loop [looper i & args]` | See the [thing-looper][16] section below. |
| `:on-<event> [callback]`  | Adds handler `callback` to be called when _event_ is triggered on the element. All events are supported, including the standard ones: _change_, _click_, _dblclick_, _error_, _focus_, _focusin_, _focusout_, _hover_, _keydown_, _keypress_, _keyup_, _load_, _mousedown_, _mouseenter_, _mouseleave_, _mousemove_, _mouseout_, _mouseover_, _mouseup_, _ready_, _scroll_, _select_, _submit_, and _unload_. The callback must be a function of one argument: the browser event object. |
| `:do-value [expr]`        | Sets the `value` of the element to the value of the formula `expr`. The special values `true` and `false` will check or uncheck checkboxes. |
| `:do-attr [attr expr]`    | Sets the attribute `attr` to the value of the formula `expr`. The special values `true` and `false` add or remove the attribute. |
| `:do-class [class expr]`  | Adds or removes the CSS class `class` depending on whether the value of the formula `expr` is truthy or falsy. |
| `:do-css [prop expr]`     | Sets the css property `prop` to the value of the formula `expr`. |
| `:do-toggle [expr]`       | Toggles visibility of the element according to the truthiness of the value of the formula `expr`. |
| `:do-slide-toggle [expr]` | Toggles visibility of the element according to the truthiness of the value of the formula `expr` using a sliding animation. |
| `:do-fade-toggle [expr]`  | Toggles visibility of the element according to the truthiness of the value of the formula `expr` using a fading animation. |
| `:do-focus [expr]`        | Triggers the `focus` event on the element when the value of the formula `expr` changes to a truthy value. |
| `:do-select [expr]`       | Triggers the `select` event on the element when the value of the formula `expr` changes to a truthy value. |
| `:do-focus-select [expr]` | Triggers the `focus` and `select` events on the element when the value of the formula `expr` changes to a truthy value. |
| `:do-text [expr]`         | Sets the element's text to the value of `expr`. |

#### Thing Looper

Most applications have some DOM structure that is repeated a number of times,
once for each item in an array. This could be a list of to-do items which would
be inserted into an ordered list, for example. The thing-looper mechanism is
provided to accomplish this in a way that avoids coupling between application
state and DOM.

For example:

```clojure
(page examples/looper.html)

(defc people
  [{:first "bob" :last "smith"}
   {:first "joe" :last "blow"}])

(def loop-people
  (thing-looper
    people
    (fn [people i person]
      [(cell= (:first person))
       (cell= (:last person))])))

(html
  (head
    (title "looping"))
  (body
    (h1 "people")
    ((ul :loop [loop-people i first last])
       (li "~{last}, ~{first}"))))
```

As can be seen in the example above, the thing looper mechanism consists of two
parts: the looper definition and the loop template, denoted by the `:loop`
attribute. The different parts can be in different files, even. For instance,
the looper definition can be in a library that is shared by multiple frontends,
each one requiring the library and having its own loop template.

##### Looper Definition
* fn takes three arguments:
  * the cell containing the items
  * the index of the current item
  * a cell containing the current item
* fn returns a vector of cells which will be passed as arguments to the `:loop`
  template.

##### Loop Template
* the container, denoted by the `:loop` attribute which takes the following
  arguments
  * the looper to loop over
  * a binding for the index of the current item (an int, not a cell)
  * bindings for the cells provided by the looper fn
  * auto-gensym bindings
      * name must end with `#`, like `foo#`
      * are bound to a unique string, for use as element ids
* one child: a template inside of which the bindings in the `:loop` argument can
  be referenced.

Note that the templates are fully reactive: swapping the `people` cell will
cause the `li` elements in the list to update as necessary, automatically.

```clojure
(swap! people assoc-in [0 :last] "jones")
```

The list updates itself, with the first name in the list now reading
"jones, bob" instead of "smith, bob".

#### The N-Things Problem

FIXME

## License

```
Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.

The use and distribution terms for this software are covered by the Eclipse
Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php) which can
be found in the file epl-v10.html at the root of this distribution. By using
this software in any fashion, you are agreeing to be bound by the terms of
this license. You must not remove this notice, or any other, from this software.
```

[1]: https://github.com/tailrecursion/javelin
[2]: https://github.com/tailrecursion/castra
[3]: https://github.com/tailrecursion/cljson
[4]: https://clojars.org/tailrecursion/hoplon
[5]: https://github.com/tailrecursion/hoplon-demos
[6]: doc/Design.md
[7]: #page-declaration
[9]: #getting-started

[11]: https://github.com/tailrecursion/boot
[12]: http://en.wikipedia.org/wiki/S-expression
[13]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list
[14]: https://github.com/tailrecursion/javelin
[15]: https://github.com/tailrecursion/hoplon/blob/master/src/tailrecursion/hoplon.cljs
[16]: #thing-looper
[17]: http://clojuredocs.org/clojure_core/clojure.core/munge
[18]: https://github.com/weavejester/hiccup
[19]: https://github.com/tailrecursion/hoplon/blob/master/doc/Design.md
