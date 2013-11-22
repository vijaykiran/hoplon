/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
function aa() {
  return function(a) {
    return a
  }
}
function b(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var d, fa = this;
function e(a) {
  var c = typeof a;
  if("object" == c) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return c
      }
      var f = Object.prototype.toString.call(a);
      if("[object Window]" == f) {
        return"object"
      }
      if("[object Array]" == f || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == f || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == c && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return c
}
var ha = "closure_uid_" + (1E9 * Math.random() >>> 0), ia = 0;
function ra(a) {
  for(var c = 0, f = 0;f < a.length;++f) {
    c = 31 * c + a.charCodeAt(f), c %= 4294967296
  }
  return c
}
;function sa(a, c) {
  null != a && this.append.apply(this, arguments)
}
sa.prototype.Aa = "";
sa.prototype.append = function(a, c, f) {
  this.Aa += a;
  if(null != c) {
    for(var g = 1;g < arguments.length;g++) {
      this.Aa += arguments[g]
    }
  }
  return this
};
sa.prototype.toString = b("Aa");
var ta;
function m(a) {
  return null != a && !1 !== a
}
function ua(a) {
  return m(a) ? !1 : !0
}
function r(a, c) {
  return a[e(null == c ? null : c)] ? !0 : a._ ? !0 : t ? !1 : null
}
function wa(a) {
  return null == a ? null : a.constructor
}
function v(a, c) {
  var f = wa(c), f = m(m(f) ? f.Ub : f) ? f.Sb : e(c);
  return Error(["No protocol method ", a, " defined for type ", f, ": ", c].join(""))
}
function xa(a) {
  var c = a.Sb;
  return m(c) ? c : "" + w(a)
}
function Aa(a) {
  return Array.prototype.slice.call(arguments)
}
var Ba = {}, Ca = {};
function Da(a) {
  if(a ? a.F : a) {
    return a.F(a)
  }
  var c;
  c = Da[e(null == a ? null : a)];
  if(!c && (c = Da._, !c)) {
    throw v("ICounted.-count", a);
  }
  return c.call(null, a)
}
var Ea = {};
function Ha(a, c) {
  if(a ? a.A : a) {
    return a.A(a, c)
  }
  var f;
  f = Ha[e(null == a ? null : a)];
  if(!f && (f = Ha._, !f)) {
    throw v("ICollection.-conj", a);
  }
  return f.call(null, a, c)
}
var Ia = {}, x = function() {
  function a(a, c, f) {
    if(a ? a.L : a) {
      return a.L(a, c, f)
    }
    var l;
    l = x[e(null == a ? null : a)];
    if(!l && (l = x._, !l)) {
      throw v("IIndexed.-nth", a);
    }
    return l.call(null, a, c, f)
  }
  function c(a, c) {
    if(a ? a.p : a) {
      return a.p(a, c)
    }
    var f;
    f = x[e(null == a ? null : a)];
    if(!f && (f = x._, !f)) {
      throw v("IIndexed.-nth", a);
    }
    return f.call(null, a, c)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), Ja = {};
function mb(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var c;
  c = mb[e(null == a ? null : a)];
  if(!c && (c = mb._, !c)) {
    throw v("ISeq.-first", a);
  }
  return c.call(null, a)
}
function nb(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var c;
  c = nb[e(null == a ? null : a)];
  if(!c && (c = nb._, !c)) {
    throw v("ISeq.-rest", a);
  }
  return c.call(null, a)
}
var ob = {}, pb = {}, qb = function() {
  function a(a, c, f) {
    if(a ? a.u : a) {
      return a.u(a, c, f)
    }
    var l;
    l = qb[e(null == a ? null : a)];
    if(!l && (l = qb._, !l)) {
      throw v("ILookup.-lookup", a);
    }
    return l.call(null, a, c, f)
  }
  function c(a, c) {
    if(a ? a.J : a) {
      return a.J(a, c)
    }
    var f;
    f = qb[e(null == a ? null : a)];
    if(!f && (f = qb._, !f)) {
      throw v("ILookup.-lookup", a);
    }
    return f.call(null, a, c)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}();
function vb(a, c) {
  if(a ? a.Ga : a) {
    return a.Ga(a, c)
  }
  var f;
  f = vb[e(null == a ? null : a)];
  if(!f && (f = vb._, !f)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return f.call(null, a, c)
}
function wc(a, c, f) {
  if(a ? a.W : a) {
    return a.W(a, c, f)
  }
  var g;
  g = wc[e(null == a ? null : a)];
  if(!g && (g = wc._, !g)) {
    throw v("IAssociative.-assoc", a);
  }
  return g.call(null, a, c, f)
}
var yc = {};
function zc(a, c) {
  if(a ? a.Ia : a) {
    return a.Ia(a, c)
  }
  var f;
  f = zc[e(null == a ? null : a)];
  if(!f && (f = zc._, !f)) {
    throw v("IMap.-dissoc", a);
  }
  return f.call(null, a, c)
}
var Ac = {};
function Bc(a) {
  if(a ? a.Ja : a) {
    return a.Ja(a)
  }
  var c;
  c = Bc[e(null == a ? null : a)];
  if(!c && (c = Bc._, !c)) {
    throw v("IMapEntry.-key", a);
  }
  return c.call(null, a)
}
function Jc(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var c;
  c = Jc[e(null == a ? null : a)];
  if(!c && (c = Jc._, !c)) {
    throw v("IMapEntry.-val", a);
  }
  return c.call(null, a)
}
var Lc = {};
function Mc(a, c) {
  if(a ? a.Qb : a) {
    return a.Qb(0, c)
  }
  var f;
  f = Mc[e(null == a ? null : a)];
  if(!f && (f = Mc._, !f)) {
    throw v("ISet.-disjoin", a);
  }
  return f.call(null, a, c)
}
function Nc(a) {
  if(a ? a.ma : a) {
    return a.ma(a)
  }
  var c;
  c = Nc[e(null == a ? null : a)];
  if(!c && (c = Nc._, !c)) {
    throw v("IStack.-peek", a);
  }
  return c.call(null, a)
}
function Oc(a) {
  if(a ? a.na : a) {
    return a.na(a)
  }
  var c;
  c = Oc[e(null == a ? null : a)];
  if(!c && (c = Oc._, !c)) {
    throw v("IStack.-pop", a);
  }
  return c.call(null, a)
}
var Sc = {};
function Tc(a, c, f) {
  if(a ? a.Na : a) {
    return a.Na(a, c, f)
  }
  var g;
  g = Tc[e(null == a ? null : a)];
  if(!g && (g = Tc._, !g)) {
    throw v("IVector.-assoc-n", a);
  }
  return g.call(null, a, c, f)
}
function Zc(a) {
  if(a ? a.bb : a) {
    return a.bb(a)
  }
  var c;
  c = Zc[e(null == a ? null : a)];
  if(!c && (c = Zc._, !c)) {
    throw v("IDeref.-deref", a);
  }
  return c.call(null, a)
}
var $c = {};
function bd(a) {
  if(a ? a.B : a) {
    return a.B(a)
  }
  var c;
  c = bd[e(null == a ? null : a)];
  if(!c && (c = bd._, !c)) {
    throw v("IMeta.-meta", a);
  }
  return c.call(null, a)
}
var cd = {};
function dd(a, c) {
  if(a ? a.D : a) {
    return a.D(a, c)
  }
  var f;
  f = dd[e(null == a ? null : a)];
  if(!f && (f = dd._, !f)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return f.call(null, a, c)
}
var ed = {}, hd = function() {
  function a(a, c, f) {
    if(a ? a.O : a) {
      return a.O(a, c, f)
    }
    var l;
    l = hd[e(null == a ? null : a)];
    if(!l && (l = hd._, !l)) {
      throw v("IReduce.-reduce", a);
    }
    return l.call(null, a, c, f)
  }
  function c(a, c) {
    if(a ? a.N : a) {
      return a.N(a, c)
    }
    var f;
    f = hd[e(null == a ? null : a)];
    if(!f && (f = hd._, !f)) {
      throw v("IReduce.-reduce", a);
    }
    return f.call(null, a, c)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}();
function ld(a, c) {
  if(a ? a.s : a) {
    return a.s(a, c)
  }
  var f;
  f = ld[e(null == a ? null : a)];
  if(!f && (f = ld._, !f)) {
    throw v("IEquiv.-equiv", a);
  }
  return f.call(null, a, c)
}
function md(a) {
  if(a ? a.t : a) {
    return a.t(a)
  }
  var c;
  c = md[e(null == a ? null : a)];
  if(!c && (c = md._, !c)) {
    throw v("IHash.-hash", a);
  }
  return c.call(null, a)
}
var nd = {};
function od(a) {
  if(a ? a.v : a) {
    return a.v(a)
  }
  var c;
  c = od[e(null == a ? null : a)];
  if(!c && (c = od._, !c)) {
    throw v("ISeqable.-seq", a);
  }
  return c.call(null, a)
}
var pd = {}, qd = {};
function sd(a) {
  if(a ? a.Ka : a) {
    return a.Ka(a)
  }
  var c;
  c = sd[e(null == a ? null : a)];
  if(!c && (c = sd._, !c)) {
    throw v("IReversible.-rseq", a);
  }
  return c.call(null, a)
}
function td(a, c) {
  if(a ? a.yb : a) {
    return a.yb(a, c)
  }
  var f;
  f = td[e(null == a ? null : a)];
  if(!f && (f = td._, !f)) {
    throw v("ISorted.-sorted-seq", a);
  }
  return f.call(null, a, c)
}
function ud(a, c, f) {
  if(a ? a.zb : a) {
    return a.zb(a, c, f)
  }
  var g;
  g = ud[e(null == a ? null : a)];
  if(!g && (g = ud._, !g)) {
    throw v("ISorted.-sorted-seq-from", a);
  }
  return g.call(null, a, c, f)
}
function vd(a, c) {
  if(a ? a.xb : a) {
    return a.xb(a, c)
  }
  var f;
  f = vd[e(null == a ? null : a)];
  if(!f && (f = vd._, !f)) {
    throw v("ISorted.-entry-key", a);
  }
  return f.call(null, a, c)
}
function wd(a) {
  if(a ? a.wb : a) {
    return a.wb(a)
  }
  var c;
  c = wd[e(null == a ? null : a)];
  if(!c && (c = wd._, !c)) {
    throw v("ISorted.-comparator", a);
  }
  return c.call(null, a)
}
function xd(a, c) {
  if(a ? a.Rb : a) {
    return a.Rb(0, c)
  }
  var f;
  f = xd[e(null == a ? null : a)];
  if(!f && (f = xd._, !f)) {
    throw v("IWriter.-write", a);
  }
  return f.call(null, a, c)
}
function yd(a) {
  if(a ? a.dc : a) {
    return null
  }
  var c;
  c = yd[e(null == a ? null : a)];
  if(!c && (c = yd._, !c)) {
    throw v("IWriter.-flush", a);
  }
  return c.call(null, a)
}
var zd = {};
function Ad(a, c, f) {
  if(a ? a.q : a) {
    return a.q(a, c, f)
  }
  var g;
  g = Ad[e(null == a ? null : a)];
  if(!g && (g = Ad._, !g)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return g.call(null, a, c, f)
}
function Bd(a, c, f) {
  if(a ? a.Bb : a) {
    return a.Bb(a, c, f)
  }
  var g;
  g = Bd[e(null == a ? null : a)];
  if(!g && (g = Bd._, !g)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return g.call(null, a, c, f)
}
function Cd(a, c, f) {
  if(a ? a.Ab : a) {
    return a.Ab(a, c, f)
  }
  var g;
  g = Cd[e(null == a ? null : a)];
  if(!g && (g = Cd._, !g)) {
    throw v("IWatchable.-add-watch", a);
  }
  return g.call(null, a, c, f)
}
function Fd(a) {
  if(a ? a.Ha : a) {
    return a.Ha(a)
  }
  var c;
  c = Fd[e(null == a ? null : a)];
  if(!c && (c = Fd._, !c)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return c.call(null, a)
}
function Gd(a, c) {
  if(a ? a.Da : a) {
    return a.Da(a, c)
  }
  var f;
  f = Gd[e(null == a ? null : a)];
  if(!f && (f = Gd._, !f)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return f.call(null, a, c)
}
function Md(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var c;
  c = Md[e(null == a ? null : a)];
  if(!c && (c = Md._, !c)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return c.call(null, a)
}
function Nd(a, c, f) {
  if(a ? a.Ca : a) {
    return a.Ca(a, c, f)
  }
  var g;
  g = Nd[e(null == a ? null : a)];
  if(!g && (g = Nd._, !g)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return g.call(null, a, c, f)
}
function Od(a) {
  if(a ? a.Ib : a) {
    return a.Ib()
  }
  var c;
  c = Od[e(null == a ? null : a)];
  if(!c && (c = Od._, !c)) {
    throw v("IChunk.-drop-first", a);
  }
  return c.call(null, a)
}
function Pd(a) {
  if(a ? a.ab : a) {
    return a.ab(a)
  }
  var c;
  c = Pd[e(null == a ? null : a)];
  if(!c && (c = Pd._, !c)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return c.call(null, a)
}
function Qd(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var c;
  c = Qd[e(null == a ? null : a)];
  if(!c && (c = Qd._, !c)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return c.call(null, a)
}
function Rd(a) {
  this.kc = a;
  this.o = 0;
  this.j = 1073741824
}
Rd.prototype.Rb = function(a, c) {
  return this.kc.append(c)
};
Rd.prototype.dc = ba(null);
function Sd(a) {
  var c = new sa, f = new Rd(c);
  a.q(a, f, y([Td, !0, Ud, !0, Vd, !1, Wd, !1], !0));
  yd(f);
  return"" + w(c)
}
function Xd(a, c, f, g, h) {
  this.xa = a;
  this.name = c;
  this.ya = f;
  this.va = g;
  this.ca = h;
  this.j = 2154168321;
  this.o = 4096
}
d = Xd.prototype;
d.q = function(a, c) {
  return xd(c, this.ya)
};
d.t = function(a) {
  var c = this.va;
  return null != c ? c : this.va = a = Yd.a ? Yd.a(Zd.b ? Zd.b(a.xa) : Zd.call(null, a.xa), Zd.b ? Zd.b(a.name) : Zd.call(null, a.name)) : Yd.call(null, Zd.b ? Zd.b(a.xa) : Zd.call(null, a.xa), Zd.b ? Zd.b(a.name) : Zd.call(null, a.name))
};
d.D = function(a, c) {
  return new Xd(this.xa, this.name, this.ya, this.va, c)
};
d.B = b("ca");
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return qb.c(f, this, null);
      case 3:
        return qb.c(f, this, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.s = function(a, c) {
  return c instanceof Xd ? this.ya === c.ya : !1
};
d.toString = b("ya");
var $d = function() {
  function a(a, c) {
    var f = null != a ? [w(a), w("/"), w(c)].join("") : c;
    return new Xd(a, c, f, null, null)
  }
  function c(a) {
    return a instanceof Xd ? a : f.a(null, a)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}();
function z(a) {
  if(null == a) {
    return null
  }
  var c;
  c = a ? ((c = a.j & 8388608) ? c : a.tc) ? !0 : !1 : !1;
  if(c) {
    return a.v(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new ae(a, 0)
  }
  if(r(nd, a)) {
    return od(a)
  }
  if(t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null
}
function B(a) {
  if(null == a) {
    return null
  }
  var c;
  c = a ? ((c = a.j & 64) ? c : a.La) ? !0 : !1 : !1;
  if(c) {
    return a.P(a)
  }
  a = z(a);
  return null == a ? null : mb(a)
}
function C(a) {
  if(null != a) {
    var c;
    c = a ? ((c = a.j & 64) ? c : a.La) ? !0 : !1 : !1;
    if(c) {
      return a.R(a)
    }
    a = z(a);
    return null != a ? nb(a) : be
  }
  return be
}
function G(a) {
  if(null == a) {
    a = null
  }else {
    var c;
    c = a ? ((c = a.j & 128) ? c : a.Pb) ? !0 : !1 : !1;
    a = c ? a.aa(a) : z(C(a))
  }
  return a
}
var I = function() {
  function a(a, c) {
    var f = a === c;
    return f ? f : ld(a, c)
  }
  var c = null, f = function() {
    function a(c, g, n) {
      var p = null;
      2 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, g, p)
    }
    function f(a, g, h) {
      for(;;) {
        if(m(c.a(a, g))) {
          if(G(h)) {
            a = g, g = B(h), h = G(h)
          }else {
            return c.a(g, B(h))
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = B(a);
      a = G(a);
      var g = B(a);
      a = C(a);
      return f(c, g, a)
    };
    a.d = f;
    return a
  }(), c = function(c, h, k) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, c, h);
      default:
        return f.d(c, h, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 2;
  c.f = f.f;
  c.b = ba(!0);
  c.a = a;
  c.d = f.d;
  return c
}();
md["null"] = ba(0);
ob["null"] = !0;
Lc["null"] = !0;
Mc["null"] = ba(null);
Ca["null"] = !0;
Da["null"] = ba(0);
Nc["null"] = ba(null);
Oc["null"] = ba(null);
ld["null"] = function(a, c) {
  return null == c
};
cd["null"] = !0;
dd["null"] = ba(null);
$c["null"] = !0;
bd["null"] = ba(null);
yc["null"] = !0;
zc["null"] = ba(null);
Date.prototype.s = function(a, c) {
  var f = c instanceof Date;
  return f ? a.toString() === c.toString() : f
};
md.number = function(a) {
  return Math.floor(a) % 2147483647
};
ld.number = function(a, c) {
  return a === c
};
md["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
$c["function"] = !0;
bd["function"] = ba(null);
Ba["function"] = !0;
md._ = function(a) {
  return a[ha] || (a[ha] = ++ia)
};
function ce(a) {
  return a + 1
}
var de = function() {
  function a(a, c, f, g) {
    for(var p = Da(a);;) {
      if(g < p) {
        f = c.a ? c.a(f, x.a(a, g)) : c.call(null, f, x.a(a, g)), g += 1
      }else {
        return f
      }
    }
  }
  function c(a, c, f) {
    for(var g = Da(a), p = 0;;) {
      if(p < g) {
        f = c.a ? c.a(f, x.a(a, p)) : c.call(null, f, x.a(a, p)), p += 1
      }else {
        return f
      }
    }
  }
  function f(a, c) {
    var f = Da(a);
    if(0 === f) {
      return c.g ? c.g() : c.call(null)
    }
    for(var g = x.a(a, 0), p = 1;;) {
      if(p < f) {
        g = c.a ? c.a(g, x.a(a, p)) : c.call(null, g, x.a(a, p)), p += 1
      }else {
        return g
      }
    }
  }
  var g = null, g = function(g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return f.call(this, g, k);
      case 3:
        return c.call(this, g, k, l);
      case 4:
        return a.call(this, g, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.a = f;
  g.c = c;
  g.m = a;
  return g
}(), ee = function() {
  function a(a, c, f, g) {
    for(var p = a.length;;) {
      if(g < p) {
        f = c.a ? c.a(f, a[g]) : c.call(null, f, a[g]), g += 1
      }else {
        return f
      }
    }
  }
  function c(a, c, f) {
    for(var g = a.length, p = 0;;) {
      if(p < g) {
        f = c.a ? c.a(f, a[p]) : c.call(null, f, a[p]), p += 1
      }else {
        return f
      }
    }
  }
  function f(a, c) {
    var f = a.length;
    if(0 === a.length) {
      return c.g ? c.g() : c.call(null)
    }
    for(var g = a[0], p = 1;;) {
      if(p < f) {
        g = c.a ? c.a(g, a[p]) : c.call(null, g, a[p]), p += 1
      }else {
        return g
      }
    }
  }
  var g = null, g = function(g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return f.call(this, g, k);
      case 3:
        return c.call(this, g, k, l);
      case 4:
        return a.call(this, g, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.a = f;
  g.c = c;
  g.m = a;
  return g
}();
function fe(a) {
  if(a) {
    var c = a.j & 2;
    a = (c ? c : a.Yb) ? !0 : a.j ? !1 : r(Ca, a)
  }else {
    a = r(Ca, a)
  }
  return a
}
function ge(a) {
  if(a) {
    var c = a.j & 16;
    a = (c ? c : a.Mb) ? !0 : a.j ? !1 : r(Ia, a)
  }else {
    a = r(Ia, a)
  }
  return a
}
function ae(a, c) {
  this.e = a;
  this.n = c;
  this.o = 0;
  this.j = 166199550
}
d = ae.prototype;
d.t = function(a) {
  return me.b ? me.b(a) : me.call(null, a)
};
d.aa = function() {
  return this.n + 1 < this.e.length ? new ae(this.e, this.n + 1) : null
};
d.A = function(a, c) {
  return J.a ? J.a(c, a) : J.call(null, c, a)
};
d.Ka = function(a) {
  var c = a.F(a);
  return 0 < c ? new ne(a, c - 1, null) : be
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return ee.m(this.e, c, this.e[this.n], this.n + 1)
};
d.O = function(a, c, f) {
  return ee.m(this.e, c, f, this.n)
};
d.v = aa();
d.F = function() {
  return this.e.length - this.n
};
d.P = function() {
  return this.e[this.n]
};
d.R = function() {
  return this.n + 1 < this.e.length ? new ae(this.e, this.n + 1) : oe.g ? oe.g() : oe.call(null)
};
d.s = function(a, c) {
  return pe.a ? pe.a(a, c) : pe.call(null, a, c)
};
d.p = function(a, c) {
  var f = c + this.n;
  return f < this.e.length ? this.e[f] : null
};
d.L = function(a, c, f) {
  a = c + this.n;
  return a < this.e.length ? this.e[a] : f
};
d.G = function() {
  return be
};
var qe = function() {
  function a(a, c) {
    return c < a.length ? new ae(a, c) : null
  }
  function c(a) {
    return f.a(a, 0)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}(), H = function() {
  function a(a, c) {
    return qe.a(a, c)
  }
  function c(a) {
    return qe.a(a, 0)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}();
function ne(a, c, f) {
  this.$a = a;
  this.n = c;
  this.i = f;
  this.o = 0;
  this.j = 32374862
}
d = ne.prototype;
d.t = function(a) {
  return me.b ? me.b(a) : me.call(null, a)
};
d.A = function(a, c) {
  return J.a ? J.a(c, a) : J.call(null, c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a ? re.a(c, a) : re.call(null, c, a)
};
d.O = function(a, c, f) {
  return re.c ? re.c(c, f, a) : re.call(null, c, f, a)
};
d.v = aa();
d.F = function() {
  return this.n + 1
};
d.P = function() {
  return x.a(this.$a, this.n)
};
d.R = function() {
  return 0 < this.n ? new ne(this.$a, this.n - 1, null) : be
};
d.s = function(a, c) {
  return pe.a ? pe.a(a, c) : pe.call(null, a, c)
};
d.D = function(a, c) {
  return new ne(this.$a, this.n, c)
};
d.B = b("i");
d.G = function() {
  return se.a ? se.a(be, this.i) : se.call(null, be, this.i)
};
function te(a) {
  return B(G(a))
}
ld._ = function(a, c) {
  return a === c
};
var ue = function() {
  function a(a, c) {
    return null != a ? Ha(a, c) : oe.b ? oe.b(c) : oe.call(null, c)
  }
  var c = null, f = function() {
    function a(c, g, n) {
      var p = null;
      2 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return f.call(this, c, g, p)
    }
    function f(a, g, h) {
      for(;;) {
        if(m(h)) {
          a = c.a(a, g), g = B(h), h = G(h)
        }else {
          return c.a(a, g)
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = B(a);
      a = G(a);
      var g = B(a);
      a = C(a);
      return f(c, g, a)
    };
    a.d = f;
    return a
  }(), c = function(c, h, k) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, h);
      default:
        return f.d(c, h, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 2;
  c.f = f.f;
  c.a = a;
  c.d = f.d;
  return c
}();
function L(a) {
  if(null != a) {
    var c;
    c = a ? ((c = a.j & 2) ? c : a.Yb) ? !0 : !1 : !1;
    if(c) {
      a = a.F(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(r(Ca, a)) {
            a = Da(a)
          }else {
            if(t) {
              a: {
                a = z(a);
                for(c = 0;;) {
                  if(fe(a)) {
                    a = c + Da(a);
                    break a
                  }
                  a = G(a);
                  c += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var ve = function() {
  function a(a, c, f) {
    for(;;) {
      if(null == a) {
        return f
      }
      if(0 === c) {
        return z(a) ? B(a) : f
      }
      if(ge(a)) {
        return x.c(a, c, f)
      }
      if(z(a)) {
        a = G(a), c -= 1
      }else {
        return t ? f : null
      }
    }
  }
  function c(a, c) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === c) {
        if(z(a)) {
          return B(a)
        }
        throw Error("Index out of bounds");
      }
      if(ge(a)) {
        return x.a(a, c)
      }
      if(z(a)) {
        var f = G(a), l = c - 1;
        a = f;
        c = l
      }else {
        if(t) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), M = function() {
  function a(a, c, f) {
    if(null != a) {
      if(function() {
        var c;
        c = a ? ((c = a.j & 16) ? c : a.Mb) ? !0 : !1 : !1;
        return c
      }()) {
        return a.L(a, Math.floor(c), f)
      }
      if(a instanceof Array || "string" === typeof a) {
        return c < a.length ? a[c] : f
      }
      if(r(Ia, a)) {
        return x.a(a, c)
      }
      if(t) {
        if(function() {
          var c;
          c = a ? ((c = a.j & 64) ? c : a.La) ? !0 : a.j ? !1 : r(Ja, a) : r(Ja, a);
          return c
        }()) {
          return ve.c(a, Math.floor(c), f)
        }
        throw Error([w("nth not supported on this type "), w(xa(wa(a)))].join(""));
      }
      return null
    }
    return f
  }
  function c(a, c) {
    if(null == a) {
      return null
    }
    if(function() {
      var c;
      c = a ? ((c = a.j & 16) ? c : a.Mb) ? !0 : !1 : !1;
      return c
    }()) {
      return a.p(a, Math.floor(c))
    }
    if(a instanceof Array || "string" === typeof a) {
      return c < a.length ? a[c] : null
    }
    if(r(Ia, a)) {
      return x.a(a, c)
    }
    if(t) {
      if(function() {
        var c;
        c = a ? ((c = a.j & 64) ? c : a.La) ? !0 : a.j ? !1 : r(Ja, a) : r(Ja, a);
        return c
      }()) {
        return ve.a(a, Math.floor(c))
      }
      throw Error([w("nth not supported on this type "), w(xa(wa(a)))].join(""));
    }
    return null
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), we = function() {
  function a(a, c, f) {
    if(null != a) {
      var l;
      l = a ? ((l = a.j & 256) ? l : a.vb) ? !0 : !1 : !1;
      a = l ? a.u(a, c, f) : a instanceof Array ? c < a.length ? a[c] : f : "string" === typeof a ? c < a.length ? a[c] : f : r(pb, a) ? qb.c(a, c, f) : t ? f : null
    }else {
      a = f
    }
    return a
  }
  function c(a, c) {
    var f;
    null == a ? f = null : (f = a ? ((f = a.j & 256) ? f : a.vb) ? !0 : !1 : !1, f = f ? a.J(a, c) : a instanceof Array ? c < a.length ? a[c] : null : "string" === typeof a ? c < a.length ? a[c] : null : r(pb, a) ? qb.a(a, c) : null);
    return f
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), ye = function() {
  function a(a, c, f) {
    return null != a ? wc(a, c, f) : xe.a ? xe.a(c, f) : xe.call(null, c, f)
  }
  var c = null, f = function() {
    function a(c, g, n, p) {
      var q = null;
      3 < arguments.length && (q = H(Array.prototype.slice.call(arguments, 3), 0));
      return f.call(this, c, g, n, q)
    }
    function f(a, g, h, p) {
      for(;;) {
        if(a = c.c(a, g, h), m(p)) {
          g = B(p), h = te(p), p = G(G(p))
        }else {
          return a
        }
      }
    }
    a.k = 3;
    a.f = function(a) {
      var c = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var p = B(a);
      a = C(a);
      return f(c, g, p, a)
    };
    a.d = f;
    return a
  }(), c = function(c, h, k, l) {
    switch(arguments.length) {
      case 3:
        return a.call(this, c, h, k);
      default:
        return f.d(c, h, k, H(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.f = f.f;
  c.c = a;
  c.d = f.d;
  return c
}(), ze = function() {
  var a = null, c = function() {
    function c(a, f, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return g.call(this, a, f, n)
    }
    function g(c, f, g) {
      for(;;) {
        if(c = a.a(c, f), m(g)) {
          f = B(g), g = G(g)
        }else {
          return c
        }
      }
    }
    c.k = 2;
    c.f = function(a) {
      var c = B(a);
      a = G(a);
      var f = B(a);
      a = C(a);
      return g(c, f, a)
    };
    c.d = g;
    return c
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return zc(a, g);
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = aa();
  a.a = function(a, c) {
    return zc(a, c)
  };
  a.d = c.d;
  return a
}();
function Ae(a) {
  var c = "function" == e(a);
  return c ? c : a ? m(m(null) ? null : a.Xb) ? !0 : a.Tb ? !1 : r(Ba, a) : r(Ba, a)
}
var se = function Be(c, f) {
  return function() {
    var f = Ae(c);
    f && (f = c ? ((f = c.j & 262144) ? f : c.xc) ? !0 : c.j ? !1 : r(cd, c) : r(cd, c), f = !f);
    return f
  }() ? Be(function() {
    "undefined" === typeof ta && (ta = {}, ta = function(c, f, k, l) {
      this.i = c;
      this.Cb = f;
      this.mc = k;
      this.ic = l;
      this.o = 0;
      this.j = 393217
    }, ta.Ub = !0, ta.Sb = "cljs.core/t12983", ta.ec = function(c) {
      return xd(c, "cljs.core/t12983")
    }, ta.prototype.call = function() {
      function c(g, l) {
        g = this;
        var n = null;
        1 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, g, n)
      }
      function f(c, g) {
        return N.a ? N.a(c.Cb, g) : N.call(null, c.Cb, g)
      }
      c.k = 1;
      c.f = function(c) {
        var g = B(c);
        c = C(c);
        return f(g, c)
      };
      c.d = f;
      return c
    }(), ta.prototype.apply = function(c, f) {
      c = this;
      return c.call.apply(c, [c].concat(f.slice()))
    }, ta.prototype.Xb = !0, ta.prototype.B = b("ic"), ta.prototype.D = function(c, f) {
      return new ta(this.i, this.Cb, this.mc, f)
    });
    return new ta(f, c, Be, null)
  }(), f) : dd(c, f)
};
function Ce(a) {
  var c;
  c = a ? ((c = a.j & 131072) ? c : a.bc) ? !0 : a.j ? !1 : r($c, a) : r($c, a);
  return c ? bd(a) : null
}
var De = function() {
  var a = null, c = function() {
    function c(a, f, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return g.call(this, a, f, n)
    }
    function g(c, f, g) {
      for(;;) {
        if(c = a.a(c, f), m(g)) {
          f = B(g), g = G(g)
        }else {
          return c
        }
      }
    }
    c.k = 2;
    c.f = function(a) {
      var c = B(a);
      a = G(a);
      var f = B(a);
      a = C(a);
      return g(c, f, a)
    };
    c.d = g;
    return c
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Mc(a, g);
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = aa();
  a.a = function(a, c) {
    return Mc(a, c)
  };
  a.d = c.d;
  return a
}(), Ee = {}, Fe = 0, Zd = function() {
  function a(a, c) {
    var f = "string" == typeof a;
    (f ? c : f) ? (255 < Fe && (Ee = {}, Fe = 0), f = Ee[a], "number" !== typeof f && (f = ra(a), Ee[a] = f, Fe += 1)) : f = md(a);
    return f
  }
  function c(a) {
    return f.a(a, !0)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}();
function Ge(a) {
  var c = null == a;
  return c ? c : ua(z(a))
}
function He(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var c = a.j & 4096;
      a = (c ? c : a.vc) ? !0 : a.j ? !1 : r(Lc, a)
    }else {
      a = r(Lc, a)
    }
  }
  return a
}
function Ie(a) {
  if(a) {
    var c = a.j & 16777216;
    a = (c ? c : a.uc) ? !0 : a.j ? !1 : r(pd, a)
  }else {
    a = r(pd, a)
  }
  return a
}
function Je(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var c = a.j & 1024;
      a = (c ? c : a.qc) ? !0 : a.j ? !1 : r(yc, a)
    }else {
      a = r(yc, a)
    }
  }
  return a
}
function Ke(a) {
  if(a) {
    var c = a.j & 16384;
    a = (c ? c : a.wc) ? !0 : a.j ? !1 : r(Sc, a)
  }else {
    a = r(Sc, a)
  }
  return a
}
function Le(a) {
  if(a) {
    var c = a.o & 512;
    a = (c ? c : a.nc) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function Me(a, c, f, g, h) {
  for(;0 !== h;) {
    f[g] = a[c], g += 1, h -= 1, c += 1
  }
}
var Ne = {};
function Oe(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var c = a.j & 64;
      a = (c ? c : a.La) ? !0 : a.j ? !1 : r(Ja, a)
    }else {
      a = r(Ja, a)
    }
  }
  return a
}
function Pe(a) {
  return m(a) ? !0 : !1
}
function Qe(a, c) {
  return we.c(a, c, Ne) === Ne ? !1 : !0
}
function Re(a, c) {
  if(a === c) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == c) {
    return 1
  }
  if(wa(a) === wa(c)) {
    var f;
    f = a ? ((f = a.o & 2048) ? f : a.Kb) ? !0 : !1 : !1;
    return f ? a.Lb(a, c) : a > c ? 1 : a < c ? -1 : 0
  }
  if(t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Se = function() {
  function a(a, c, f, l) {
    for(;;) {
      var n = Re(M.a(a, l), M.a(c, l)), p = 0 === n;
      if(p ? l + 1 < f : p) {
        l += 1
      }else {
        return n
      }
    }
  }
  function c(a, c) {
    var k = L(a), l = L(c);
    return k < l ? -1 : k > l ? 1 : t ? f.m(a, c, k, 0) : null
  }
  var f = null, f = function(f, h, k, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 4:
        return a.call(this, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.m = a;
  return f
}(), re = function() {
  function a(a, c, f) {
    for(f = z(f);;) {
      if(f) {
        c = a.a ? a.a(c, B(f)) : a.call(null, c, B(f)), f = G(f)
      }else {
        return c
      }
    }
  }
  function c(a, c) {
    var f = z(c);
    return f ? Te.c ? Te.c(a, B(f), G(f)) : Te.call(null, a, B(f), G(f)) : a.g ? a.g() : a.call(null)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), Te = function() {
  function a(a, c, f) {
    var l;
    l = f ? ((l = f.j & 524288) ? l : f.cc) ? !0 : !1 : !1;
    return l ? f.O(f, a, c) : f instanceof Array ? ee.c(f, a, c) : "string" === typeof f ? ee.c(f, a, c) : r(ed, f) ? hd.c(f, a, c) : t ? re.c(a, c, f) : null
  }
  function c(a, c) {
    var f;
    f = c ? ((f = c.j & 524288) ? f : c.cc) ? !0 : !1 : !1;
    return f ? c.N(c, a) : c instanceof Array ? ee.a(c, a) : "string" === typeof c ? ee.a(c, a) : r(ed, c) ? hd.a(c, a) : t ? re.a(a, c) : null
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), Ue = function() {
  var a = null, c = function() {
    function a(f, k, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, k, n)
    }
    function c(a, f, g) {
      for(;;) {
        if(a < f) {
          if(G(g)) {
            a = f, f = B(g), g = G(g)
          }else {
            return f < B(g)
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, l, a)
    };
    a.d = c;
    return a
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < g;
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = ba(!0);
  a.a = function(a, c) {
    return a < c
  };
  a.d = c.d;
  return a
}(), Ve = function() {
  var a = null, c = function() {
    function a(f, k, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, k, n)
    }
    function c(a, f, g) {
      for(;;) {
        if(a <= f) {
          if(G(g)) {
            a = f, f = B(g), g = G(g)
          }else {
            return f <= B(g)
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, l, a)
    };
    a.d = c;
    return a
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= g;
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = ba(!0);
  a.a = function(a, c) {
    return a <= c
  };
  a.d = c.d;
  return a
}(), We = function() {
  var a = null, c = function() {
    function a(f, k, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, k, n)
    }
    function c(a, f, g) {
      for(;;) {
        if(a > f) {
          if(G(g)) {
            a = f, f = B(g), g = G(g)
          }else {
            return f > B(g)
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, l, a)
    };
    a.d = c;
    return a
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > g;
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = ba(!0);
  a.a = function(a, c) {
    return a > c
  };
  a.d = c.d;
  return a
}(), Xe = function() {
  var a = null, c = function() {
    function a(f, k, l) {
      var n = null;
      2 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, k, n)
    }
    function c(a, f, g) {
      for(;;) {
        if(a >= f) {
          if(G(g)) {
            a = f, f = B(g), g = G(g)
          }else {
            return f >= B(g)
          }
        }else {
          return!1
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, l, a)
    };
    a.d = c;
    return a
  }(), a = function(a, g, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= g;
      default:
        return c.d(a, g, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = c.f;
  a.b = ba(!0);
  a.a = function(a, c) {
    return a >= c
  };
  a.d = c.d;
  return a
}();
function Ye(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a)
}
function Ze(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function nf(a) {
  var c = 1;
  for(a = z(a);;) {
    var f = a;
    if(m(f ? 0 < c : f)) {
      c -= 1, a = G(a)
    }else {
      return a
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var c = null, f = function() {
    function a(c, g) {
      var n = null;
      1 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 1), 0));
      return f.call(this, c, n)
    }
    function f(a, g) {
      return function(a, f) {
        for(;;) {
          if(m(f)) {
            var g = a.append(c.b(B(f))), h = G(f);
            a = g;
            f = h
          }else {
            return a.toString()
          }
        }
      }.call(null, new sa(c.b(a)), g)
    }
    a.k = 1;
    a.f = function(a) {
      var c = B(a);
      a = C(a);
      return f(c, a)
    };
    a.d = f;
    return a
  }(), c = function(c, h) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, c);
      default:
        return f.d(c, H(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 1;
  c.f = f.f;
  c.g = ba("");
  c.b = a;
  c.d = f.d;
  return c
}(), of = function() {
  var a = null, a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return a.substring(f);
      case 3:
        return a.substring(f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, f) {
    return a.substring(f)
  };
  a.c = function(a, f, g) {
    return a.substring(f, g)
  };
  return a
}();
function pe(a, c) {
  return Pe(Ie(c) ? function() {
    for(var f = z(a), g = z(c);;) {
      if(null == f) {
        return null == g
      }
      if(null == g) {
        return!1
      }
      if(I.a(B(f), B(g))) {
        f = G(f), g = G(g)
      }else {
        return t ? !1 : null
      }
    }
  }() : null)
}
function Yd(a, c) {
  return a ^ c + 2654435769 + (a << 6) + (a >> 2)
}
function me(a) {
  return Te.c(function(a, f) {
    return Yd(a, Zd.a(f, !1))
  }, Zd.a(B(a), !1), G(a))
}
function pf(a) {
  var c = 0;
  for(a = z(a);;) {
    if(a) {
      var f = B(a), c = (c + (Zd.b(qf.b ? qf.b(f) : qf.call(null, f)) ^ Zd.b(rf.b ? rf.b(f) : rf.call(null, f)))) % 4503599627370496;
      a = G(a)
    }else {
      return c
    }
  }
}
function sf(a, c, f, g, h) {
  this.i = a;
  this.first = c;
  this.qa = f;
  this.count = g;
  this.l = h;
  this.o = 0;
  this.j = 65937646
}
d = sf.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.aa = function() {
  return 1 === this.count ? null : this.qa
};
d.A = function(a, c) {
  return new sf(this.i, c, a, this.count + 1, null)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.F = b("count");
d.ma = b("first");
d.na = function(a) {
  return a.R(a)
};
d.P = b("first");
d.R = function() {
  return 1 === this.count ? be : this.qa
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new sf(c, this.first, this.qa, this.count, this.l)
};
d.B = b("i");
d.G = function() {
  return be
};
function tf(a) {
  this.i = a;
  this.o = 0;
  this.j = 65937614
}
d = tf.prototype;
d.t = ba(0);
d.aa = ba(null);
d.A = function(a, c) {
  return new sf(this.i, c, null, 1, null)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = ba(null);
d.F = ba(0);
d.ma = ba(null);
d.na = function() {
  throw Error("Can't pop empty list");
};
d.P = ba(null);
d.R = function() {
  return be
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new tf(c)
};
d.B = b("i");
d.G = aa();
var be = new tf(null);
function uf(a) {
  return sd(a)
}
function vf(a) {
  var c;
  c = a ? ((c = a.j & 134217728) ? c : a.sc) ? !0 : a.j ? !1 : r(qd, a) : r(qd, a);
  return c ? sd(a) : Te.c(ue, be, a)
}
var oe = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c;
    if(a instanceof ae) {
      c = a.e
    }else {
      a: {
        for(c = [];;) {
          if(null != a) {
            c.push(a.P(a)), a = a.aa(a)
          }else {
            break a
          }
        }
        c = void 0
      }
    }
    a = c.length;
    for(var h = be;;) {
      if(0 < a) {
        var k = a - 1, h = h.A(h, c[a - 1]);
        a = k
      }else {
        return h
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
function wf(a, c, f, g) {
  this.i = a;
  this.first = c;
  this.qa = f;
  this.l = g;
  this.o = 0;
  this.j = 65929452
}
d = wf.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.aa = function() {
  return null == this.qa ? null : z(this.qa)
};
d.A = function(a, c) {
  return new wf(null, c, a, this.l)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.P = b("first");
d.R = function() {
  return null == this.qa ? be : this.qa
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new wf(c, this.first, this.qa, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
function J(a, c) {
  var f = null == c;
  f || (f = c ? ((f = c.j & 64) ? f : c.La) ? !0 : !1 : !1);
  return f ? new wf(null, a, c, null) : new wf(null, a, z(c), null)
}
md.string = function(a) {
  return ra(a)
};
function O(a, c, f, g) {
  this.xa = a;
  this.name = c;
  this.sa = f;
  this.va = g;
  this.j = 2153775105;
  this.o = 4096
}
d = O.prototype;
d.q = function(a, c) {
  return xd(c, [w(":"), w(this.sa)].join(""))
};
d.t = function() {
  null == this.va && (this.va = Yd(Zd.b(this.xa), Zd.b(this.name)) + 2654435769);
  return this.va
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        var h;
        null == f ? h = null : (h = f ? ((h = f.j & 256) ? h : f.vb) ? !0 : f.j ? !1 : r(pb, f) : r(pb, f), h = h ? qb.c(f, this, null) : null);
        return h;
      case 3:
        return null == f ? h = g : (h = f ? ((h = f.j & 256) ? h : f.vb) ? !0 : f.j ? !1 : r(pb, f) : r(pb, f), h = h ? qb.c(f, this, g) : g), h
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.s = function(a, c) {
  return c instanceof O ? this.sa === c.sa : !1
};
d.toString = function() {
  return[w(":"), w(this.sa)].join("")
};
function xf(a) {
  return a instanceof O
}
var zf = function() {
  function a(a, c) {
    return new O(a, c, [w(m(a) ? [w(a), w("/")].join("") : null), w(c)].join(""), null)
  }
  function c(a) {
    return a instanceof O ? a : a instanceof Xd ? new O(null, yf.b ? yf.b(a) : yf.call(null, a), yf.b ? yf.b(a) : yf.call(null, a), null) : t ? new O(null, a, a, null) : null
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}();
function Af(a, c, f, g) {
  this.i = a;
  this.fn = c;
  this.H = f;
  this.l = g;
  this.o = 0;
  this.j = 32374988
}
d = Af.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.aa = function(a) {
  a.v(a);
  return null == this.H ? null : G(this.H)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
function Bf(a) {
  null != a.fn && (a.H = a.fn.g ? a.fn.g() : a.fn.call(null), a.fn = null);
  return a.H
}
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = function(a) {
  Bf(a);
  if(null == this.H) {
    return null
  }
  for(a = this.H;;) {
    if(a instanceof Af) {
      a = Bf(a)
    }else {
      return this.H = a, z(this.H)
    }
  }
};
d.P = function(a) {
  a.v(a);
  return null == this.H ? null : B(this.H)
};
d.R = function(a) {
  a.v(a);
  return null != this.H ? C(this.H) : be
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Af(c, this.fn, this.H, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
function Cf(a, c) {
  this.Za = a;
  this.end = c;
  this.o = 0;
  this.j = 2
}
Cf.prototype.F = b("end");
Cf.prototype.add = function(a) {
  this.Za[this.end] = a;
  return this.end += 1
};
Cf.prototype.S = function() {
  var a = new Df(this.Za, 0, this.end);
  this.Za = null;
  return a
};
function Ef(a) {
  return new Cf(Array(a), 0)
}
function Df(a, c, f) {
  this.e = a;
  this.off = c;
  this.end = f;
  this.o = 0;
  this.j = 524306
}
d = Df.prototype;
d.N = function(a, c) {
  return ee.m(this.e, c, this.e[this.off], this.off + 1)
};
d.O = function(a, c, f) {
  return ee.m(this.e, c, f, this.off)
};
d.Ib = function() {
  if(this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Df(this.e, this.off + 1, this.end)
};
d.p = function(a, c) {
  return this.e[this.off + c]
};
d.L = function(a, c, f) {
  return((a = 0 <= c) ? c < this.end - this.off : a) ? this.e[this.off + c] : f
};
d.F = function() {
  return this.end - this.off
};
var Ff = function() {
  function a(a, c, f) {
    return new Df(a, c, f)
  }
  function c(a, c) {
    return new Df(a, c, a.length)
  }
  function f(a) {
    return new Df(a, 0, a.length)
  }
  var g = null, g = function(g, k, l) {
    switch(arguments.length) {
      case 1:
        return f.call(this, g);
      case 2:
        return c.call(this, g, k);
      case 3:
        return a.call(this, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.b = f;
  g.a = c;
  g.c = a;
  return g
}();
function Gf(a, c, f, g) {
  this.S = a;
  this.ia = c;
  this.i = f;
  this.l = g;
  this.j = 31850732;
  this.o = 1536
}
d = Gf.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.aa = function() {
  if(1 < Da(this.S)) {
    return new Gf(Od(this.S), this.ia, this.i, null)
  }
  var a = od(this.ia);
  return null == a ? null : a
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.v = aa();
d.P = function() {
  return x.a(this.S, 0)
};
d.R = function() {
  return 1 < Da(this.S) ? new Gf(Od(this.S), this.ia, this.i, null) : null == this.ia ? be : this.ia
};
d.Jb = function() {
  return null == this.ia ? null : this.ia
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Gf(this.S, this.ia, c, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
d.ab = b("S");
d.Va = function() {
  return null == this.ia ? be : this.ia
};
function Hf(a, c) {
  return 0 === Da(a) ? c : new Gf(a, c, null, null)
}
function If(a) {
  for(var c = [];;) {
    if(z(a)) {
      c.push(B(a)), a = G(a)
    }else {
      return c
    }
  }
}
function Jf(a, c) {
  if(fe(a)) {
    return L(a)
  }
  for(var f = a, g = c, h = 0;;) {
    var k;
    k = (k = 0 < g) ? z(f) : k;
    if(m(k)) {
      f = G(f), g -= 1, h += 1
    }else {
      return h
    }
  }
}
var Lf = function Kf(c) {
  return null == c ? null : null == G(c) ? z(B(c)) : t ? J(B(c), Kf(G(c))) : null
}, Mf = function() {
  function a(a, c) {
    return new Af(null, function() {
      var f = z(a);
      return f ? Le(f) ? Hf(Pd(f), g.a(Qd(f), c)) : J(B(f), g.a(C(f), c)) : c
    }, null, null)
  }
  function c(a) {
    return new Af(null, function() {
      return a
    }, null, null)
  }
  function f() {
    return new Af(null, ba(null), null, null)
  }
  var g = null, h = function() {
    function a(f, g, h) {
      var k = null;
      2 < arguments.length && (k = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, g, k)
    }
    function c(a, f, h) {
      return function u(a, c) {
        return new Af(null, function() {
          var f = z(a);
          return f ? Le(f) ? Hf(Pd(f), u(Qd(f), c)) : J(B(f), u(C(f), c)) : m(c) ? u(B(c), G(c)) : null
        }, null, null)
      }(g.a(a, f), h)
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = C(a);
      return c(f, g, a)
    };
    a.d = c;
    return a
  }(), g = function(g, l, n) {
    switch(arguments.length) {
      case 0:
        return f.call(this);
      case 1:
        return c.call(this, g);
      case 2:
        return a.call(this, g, l);
      default:
        return h.d(g, l, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.k = 2;
  g.f = h.f;
  g.g = f;
  g.b = c;
  g.a = a;
  g.d = h.d;
  return g
}(), Nf = function() {
  function a(a, c, f, g) {
    return J(a, J(c, J(f, g)))
  }
  function c(a, c, f) {
    return J(a, J(c, f))
  }
  var f = null, g = function() {
    function a(f, g, h, q, s) {
      var u = null;
      4 < arguments.length && (u = H(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, f, g, h, q, u)
    }
    function c(a, f, g, h, k) {
      return J(a, J(f, J(g, J(h, Lf(k)))))
    }
    a.k = 4;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = G(a);
      var s = B(a);
      a = C(a);
      return c(f, g, h, s, a)
    };
    a.d = c;
    return a
  }(), f = function(f, k, l, n, p) {
    switch(arguments.length) {
      case 1:
        return z(f);
      case 2:
        return J(f, k);
      case 3:
        return c.call(this, f, k, l);
      case 4:
        return a.call(this, f, k, l, n);
      default:
        return g.d(f, k, l, n, H(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.k = 4;
  f.f = g.f;
  f.b = function(a) {
    return z(a)
  };
  f.a = function(a, c) {
    return J(a, c)
  };
  f.c = c;
  f.m = a;
  f.d = g.d;
  return f
}();
function Of(a, c, f) {
  var g = z(f);
  if(0 === c) {
    return a.g ? a.g() : a.call(null)
  }
  f = mb(g);
  var h = nb(g);
  if(1 === c) {
    return a.b ? a.b(f) : a.b ? a.b(f) : a.call(null, f)
  }
  var g = mb(h), k = nb(h);
  if(2 === c) {
    return a.a ? a.a(f, g) : a.a ? a.a(f, g) : a.call(null, f, g)
  }
  var h = mb(k), l = nb(k);
  if(3 === c) {
    return a.c ? a.c(f, g, h) : a.c ? a.c(f, g, h) : a.call(null, f, g, h)
  }
  var k = mb(l), n = nb(l);
  if(4 === c) {
    return a.m ? a.m(f, g, h, k) : a.m ? a.m(f, g, h, k) : a.call(null, f, g, h, k)
  }
  l = mb(n);
  n = nb(n);
  if(5 === c) {
    return a.w ? a.w(f, g, h, k, l) : a.w ? a.w(f, g, h, k, l) : a.call(null, f, g, h, k, l)
  }
  a = mb(n);
  var p = nb(n);
  if(6 === c) {
    return a.T ? a.T(f, g, h, k, l, a) : a.T ? a.T(f, g, h, k, l, a) : a.call(null, f, g, h, k, l, a)
  }
  var n = mb(p), q = nb(p);
  if(7 === c) {
    return a.Ba ? a.Ba(f, g, h, k, l, a, n) : a.Ba ? a.Ba(f, g, h, k, l, a, n) : a.call(null, f, g, h, k, l, a, n)
  }
  var p = mb(q), s = nb(q);
  if(8 === c) {
    return a.tb ? a.tb(f, g, h, k, l, a, n, p) : a.tb ? a.tb(f, g, h, k, l, a, n, p) : a.call(null, f, g, h, k, l, a, n, p)
  }
  var q = mb(s), u = nb(s);
  if(9 === c) {
    return a.ub ? a.ub(f, g, h, k, l, a, n, p, q) : a.ub ? a.ub(f, g, h, k, l, a, n, p, q) : a.call(null, f, g, h, k, l, a, n, p, q)
  }
  var s = mb(u), A = nb(u);
  if(10 === c) {
    return a.cb ? a.cb(f, g, h, k, l, a, n, p, q, s) : a.cb ? a.cb(f, g, h, k, l, a, n, p, q, s) : a.call(null, f, g, h, k, l, a, n, p, q, s)
  }
  var u = mb(A), E = nb(A);
  if(11 === c) {
    return a.fb ? a.fb(f, g, h, k, l, a, n, p, q, s, u) : a.fb ? a.fb(f, g, h, k, l, a, n, p, q, s, u) : a.call(null, f, g, h, k, l, a, n, p, q, s, u)
  }
  var A = mb(E), F = nb(E);
  if(12 === c) {
    return a.ib ? a.ib(f, g, h, k, l, a, n, p, q, s, u, A) : a.ib ? a.ib(f, g, h, k, l, a, n, p, q, s, u, A) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A)
  }
  var E = mb(F), K = nb(F);
  if(13 === c) {
    return a.jb ? a.jb(f, g, h, k, l, a, n, p, q, s, u, A, E) : a.jb ? a.jb(f, g, h, k, l, a, n, p, q, s, u, A, E) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E)
  }
  var F = mb(K), U = nb(K);
  if(14 === c) {
    return a.kb ? a.kb(f, g, h, k, l, a, n, p, q, s, u, A, E, F) : a.kb ? a.kb(f, g, h, k, l, a, n, p, q, s, u, A, E, F) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F)
  }
  var K = mb(U), T = nb(U);
  if(15 === c) {
    return a.lb ? a.lb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K) : a.lb ? a.lb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K)
  }
  var U = mb(T), Z = nb(T);
  if(16 === c) {
    return a.mb ? a.mb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U) : a.mb ? a.mb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U)
  }
  var T = mb(Z), ea = nb(Z);
  if(17 === c) {
    return a.nb ? a.nb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T) : a.nb ? a.nb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T)
  }
  var Z = mb(ea), ga = nb(ea);
  if(18 === c) {
    return a.ob ? a.ob(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z) : a.ob ? a.ob(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z)
  }
  ea = mb(ga);
  ga = nb(ga);
  if(19 === c) {
    return a.pb ? a.pb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea) : a.pb ? a.pb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea)
  }
  var ca = mb(ga);
  nb(ga);
  if(20 === c) {
    return a.qb ? a.qb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ca) : a.qb ? a.qb(f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ca) : a.call(null, f, g, h, k, l, a, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ca)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var N = function() {
  function a(a, c, f, g, h) {
    c = Nf.m(c, f, g, h);
    f = a.k;
    return a.f ? (g = Jf(c, f + 1), g <= f ? Of(a, g, c) : a.f(c)) : a.apply(a, If(c))
  }
  function c(a, c, f, g) {
    c = Nf.c(c, f, g);
    f = a.k;
    return a.f ? (g = Jf(c, f + 1), g <= f ? Of(a, g, c) : a.f(c)) : a.apply(a, If(c))
  }
  function f(a, c, f) {
    c = Nf.a(c, f);
    f = a.k;
    if(a.f) {
      var g = Jf(c, f + 1);
      return g <= f ? Of(a, g, c) : a.f(c)
    }
    return a.apply(a, If(c))
  }
  function g(a, c) {
    var f = a.k;
    if(a.f) {
      var g = Jf(c, f + 1);
      return g <= f ? Of(a, g, c) : a.f(c)
    }
    return a.apply(a, If(c))
  }
  var h = null, k = function() {
    function a(f, g, h, k, l, E) {
      var F = null;
      5 < arguments.length && (F = H(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, f, g, h, k, l, F)
    }
    function c(a, f, g, h, k, l) {
      f = J(f, J(g, J(h, J(k, Lf(l)))));
      g = a.k;
      return a.f ? (h = Jf(f, g + 1), h <= g ? Of(a, h, f) : a.f(f)) : a.apply(a, If(f))
    }
    a.k = 5;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = G(a);
      var k = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, g, h, k, l, a)
    };
    a.d = c;
    return a
  }(), h = function(h, n, p, q, s, u) {
    switch(arguments.length) {
      case 2:
        return g.call(this, h, n);
      case 3:
        return f.call(this, h, n, p);
      case 4:
        return c.call(this, h, n, p, q);
      case 5:
        return a.call(this, h, n, p, q, s);
      default:
        return k.d(h, n, p, q, s, H(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.k = 5;
  h.f = k.f;
  h.a = g;
  h.c = f;
  h.m = c;
  h.w = a;
  h.d = k.d;
  return h
}(), Pf = function() {
  function a(a, c) {
    return!I.a(a, c)
  }
  var c = null, f = function() {
    function a(f, g, n) {
      var p = null;
      2 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, g, p)
    }
    function c(a, f, g) {
      return ua(N.m(I, a, f, g))
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = C(a);
      return c(f, g, a)
    };
    a.d = c;
    return a
  }(), c = function(c, h, k) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, c, h);
      default:
        return f.d(c, h, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 2;
  c.f = f.f;
  c.b = ba(!1);
  c.a = a;
  c.d = f.d;
  return c
}();
function Qf(a, c) {
  for(;;) {
    if(null == z(c)) {
      return!0
    }
    if(m(a.b ? a.b(B(c)) : a.call(null, B(c)))) {
      var f = a, g = G(c);
      a = f;
      c = g
    }else {
      return t ? !1 : null
    }
  }
}
function Rf(a) {
  return a
}
var Sf = function() {
  function a(a, c, f) {
    return function() {
      var g = null, p = function() {
        function g(a, c, f, h) {
          var k = null;
          3 < arguments.length && (k = H(Array.prototype.slice.call(arguments, 3), 0));
          return n.call(this, a, c, f, k)
        }
        function n(g, p, q, s) {
          return a.b ? a.b(c.b ? c.b(N.w(f, g, p, q, s)) : c.call(null, N.w(f, g, p, q, s))) : a.call(null, c.b ? c.b(N.w(f, g, p, q, s)) : c.call(null, N.w(f, g, p, q, s)))
        }
        g.k = 3;
        g.f = function(a) {
          var c = B(a);
          a = G(a);
          var f = B(a);
          a = G(a);
          var g = B(a);
          a = C(a);
          return n(c, f, g, a)
        };
        g.d = n;
        return g
      }(), g = function(g, n, u, A) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(c.b ? c.b(f.g ? f.g() : f.call(null)) : c.call(null, f.g ? f.g() : f.call(null))) : a.call(null, c.b ? c.b(f.g ? f.g() : f.call(null)) : c.call(null, f.g ? f.g() : f.call(null)));
          case 1:
            return a.b ? a.b(c.b ? c.b(f.b ? f.b(g) : f.call(null, g)) : c.call(null, f.b ? f.b(g) : f.call(null, g))) : a.call(null, c.b ? c.b(f.b ? f.b(g) : f.call(null, g)) : c.call(null, f.b ? f.b(g) : f.call(null, g)));
          case 2:
            return a.b ? a.b(c.b ? c.b(f.a ? f.a(g, n) : f.call(null, g, n)) : c.call(null, f.a ? f.a(g, n) : f.call(null, g, n))) : a.call(null, c.b ? c.b(f.a ? f.a(g, n) : f.call(null, g, n)) : c.call(null, f.a ? f.a(g, n) : f.call(null, g, n)));
          case 3:
            return a.b ? a.b(c.b ? c.b(f.c ? f.c(g, n, u) : f.call(null, g, n, u)) : c.call(null, f.c ? f.c(g, n, u) : f.call(null, g, n, u))) : a.call(null, c.b ? c.b(f.c ? f.c(g, n, u) : f.call(null, g, n, u)) : c.call(null, f.c ? f.c(g, n, u) : f.call(null, g, n, u)));
          default:
            return p.d(g, n, u, H(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.k = 3;
      g.f = p.f;
      return g
    }()
  }
  function c(a, c) {
    return function() {
      var f = null, g = function() {
        function f(a, c, h, k) {
          var l = null;
          3 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 3), 0));
          return g.call(this, a, c, h, l)
        }
        function g(f, l, n, p) {
          return a.b ? a.b(N.w(c, f, l, n, p)) : a.call(null, N.w(c, f, l, n, p))
        }
        f.k = 3;
        f.f = function(a) {
          var c = B(a);
          a = G(a);
          var f = B(a);
          a = G(a);
          var h = B(a);
          a = C(a);
          return g(c, f, h, a)
        };
        f.d = g;
        return f
      }(), f = function(f, l, s, u) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(c.g ? c.g() : c.call(null)) : a.call(null, c.g ? c.g() : c.call(null));
          case 1:
            return a.b ? a.b(c.b ? c.b(f) : c.call(null, f)) : a.call(null, c.b ? c.b(f) : c.call(null, f));
          case 2:
            return a.b ? a.b(c.a ? c.a(f, l) : c.call(null, f, l)) : a.call(null, c.a ? c.a(f, l) : c.call(null, f, l));
          case 3:
            return a.b ? a.b(c.c ? c.c(f, l, s) : c.call(null, f, l, s)) : a.call(null, c.c ? c.c(f, l, s) : c.call(null, f, l, s));
          default:
            return g.d(f, l, s, H(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.k = 3;
      f.f = g.f;
      return f
    }()
  }
  var f = null, g = function() {
    function a(f, g, h, q) {
      var s = null;
      3 < arguments.length && (s = H(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, f, g, h, s)
    }
    function c(a, f, g, h) {
      var k = vf(Nf.m(a, f, g, h));
      return function() {
        function a(f) {
          var g = null;
          0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
          return c.call(this, g)
        }
        function c(a) {
          a = N.a(B(k), a);
          for(var f = G(k);;) {
            if(f) {
              a = B(f).call(null, a), f = G(f)
            }else {
              return a
            }
          }
        }
        a.k = 0;
        a.f = function(a) {
          a = z(a);
          return c(a)
        };
        a.d = c;
        return a
      }()
    }
    a.k = 3;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = C(a);
      return c(f, g, h, a)
    };
    a.d = c;
    return a
  }(), f = function(f, k, l, n) {
    switch(arguments.length) {
      case 0:
        return Rf;
      case 1:
        return f;
      case 2:
        return c.call(this, f, k);
      case 3:
        return a.call(this, f, k, l);
      default:
        return g.d(f, k, l, H(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.k = 3;
  f.f = g.f;
  f.g = function() {
    return Rf
  };
  f.b = aa();
  f.a = c;
  f.c = a;
  f.d = g.d;
  return f
}(), Tf = function() {
  function a(a, c, f, g) {
    return function() {
      function h(a) {
        var c = null;
        0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
        return s.call(this, c)
      }
      function s(h) {
        return N.w(a, c, f, g, h)
      }
      h.k = 0;
      h.f = function(a) {
        a = z(a);
        return s(a)
      };
      h.d = s;
      return h
    }()
  }
  function c(a, c, f) {
    return function() {
      function g(a) {
        var c = null;
        0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
        return h.call(this, c)
      }
      function h(g) {
        return N.m(a, c, f, g)
      }
      g.k = 0;
      g.f = function(a) {
        a = z(a);
        return h(a)
      };
      g.d = h;
      return g
    }()
  }
  function f(a, c) {
    return function() {
      function f(a) {
        var c = null;
        0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
        return g.call(this, c)
      }
      function g(f) {
        return N.c(a, c, f)
      }
      f.k = 0;
      f.f = function(a) {
        a = z(a);
        return g(a)
      };
      f.d = g;
      return f
    }()
  }
  var g = null, h = function() {
    function a(f, g, h, k, u) {
      var A = null;
      4 < arguments.length && (A = H(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, f, g, h, k, A)
    }
    function c(a, f, g, h, k) {
      return function() {
        function c(a) {
          var f = null;
          0 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 0), 0));
          return l.call(this, f)
        }
        function l(c) {
          return N.w(a, f, g, h, Mf.a(k, c))
        }
        c.k = 0;
        c.f = function(a) {
          a = z(a);
          return l(a)
        };
        c.d = l;
        return c
      }()
    }
    a.k = 4;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = G(a);
      var k = B(a);
      a = C(a);
      return c(f, g, h, k, a)
    };
    a.d = c;
    return a
  }(), g = function(g, l, n, p, q) {
    switch(arguments.length) {
      case 1:
        return g;
      case 2:
        return f.call(this, g, l);
      case 3:
        return c.call(this, g, l, n);
      case 4:
        return a.call(this, g, l, n, p);
      default:
        return h.d(g, l, n, p, H(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.k = 4;
  g.f = h.f;
  g.b = aa();
  g.a = f;
  g.c = c;
  g.m = a;
  g.d = h.d;
  return g
}(), Vf = function Uf(c, f) {
  return new Af(null, function() {
    var g = z(f);
    if(g) {
      if(Le(g)) {
        for(var h = Pd(g), k = L(h), l = Ef(k), n = 0;;) {
          if(n < k) {
            var p = c.b ? c.b(x.a(h, n)) : c.call(null, x.a(h, n));
            null != p && l.add(p);
            n += 1
          }else {
            break
          }
        }
        return Hf(l.S(), Uf(c, Qd(g)))
      }
      h = c.b ? c.b(B(g)) : c.call(null, B(g));
      return null == h ? Uf(c, C(g)) : J(h, Uf(c, C(g)))
    }
    return null
  }, null, null)
}, Wf = function() {
  function a(a, c, f, h) {
    return new Af(null, function() {
      var q = z(c), s = z(f), u = z(h);
      return(q ? s ? u : s : q) ? J(a.c ? a.c(B(q), B(s), B(u)) : a.call(null, B(q), B(s), B(u)), g.m(a, C(q), C(s), C(u))) : null
    }, null, null)
  }
  function c(a, c, f) {
    return new Af(null, function() {
      var h = z(c), q = z(f);
      return(h ? q : h) ? J(a.a ? a.a(B(h), B(q)) : a.call(null, B(h), B(q)), g.c(a, C(h), C(q))) : null
    }, null, null)
  }
  function f(a, c) {
    return new Af(null, function() {
      var f = z(c);
      if(f) {
        if(Le(f)) {
          for(var h = Pd(f), q = L(h), s = Ef(q), u = 0;;) {
            if(u < q) {
              var A = a.b ? a.b(x.a(h, u)) : a.call(null, x.a(h, u));
              s.add(A);
              u += 1
            }else {
              break
            }
          }
          return Hf(s.S(), g.a(a, Qd(f)))
        }
        return J(a.b ? a.b(B(f)) : a.call(null, B(f)), g.a(a, C(f)))
      }
      return null
    }, null, null)
  }
  var g = null, h = function() {
    function a(f, g, h, k, u) {
      var A = null;
      4 < arguments.length && (A = H(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, f, g, h, k, A)
    }
    function c(a, f, h, k, l) {
      return g.a(function(c) {
        return N.a(a, c)
      }, function E(a) {
        return new Af(null, function() {
          var c = g.a(z, a);
          return Qf(Rf, c) ? J(g.a(B, c), E(g.a(C, c))) : null
        }, null, null)
      }(ue.d(l, k, H([h, f], 0))))
    }
    a.k = 4;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = G(a);
      var k = B(a);
      a = C(a);
      return c(f, g, h, k, a)
    };
    a.d = c;
    return a
  }(), g = function(g, l, n, p, q) {
    switch(arguments.length) {
      case 2:
        return f.call(this, g, l);
      case 3:
        return c.call(this, g, l, n);
      case 4:
        return a.call(this, g, l, n, p);
      default:
        return h.d(g, l, n, p, H(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.k = 4;
  g.f = h.f;
  g.a = f;
  g.c = c;
  g.m = a;
  g.d = h.d;
  return g
}(), Yf = function Xf(c, f) {
  return new Af(null, function() {
    if(0 < c) {
      var g = z(f);
      return g ? J(B(g), Xf(c - 1, C(g))) : null
    }
    return null
  }, null, null)
};
function Zf(a, c) {
  return new Af(null, function() {
    var f;
    a: {
      f = a;
      for(var g = c;;) {
        var g = z(g), h = 0 < f;
        if(m(h ? g : h)) {
          f -= 1, g = C(g)
        }else {
          f = g;
          break a
        }
      }
      f = void 0
    }
    return f
  }, null, null)
}
function $f(a, c) {
  return new Af(null, function() {
    var f;
    a: {
      f = a;
      for(var g = c;;) {
        var g = z(g), h;
        h = (h = g) ? f.b ? f.b(B(g)) : f.call(null, B(g)) : h;
        if(m(h)) {
          g = C(g)
        }else {
          f = g;
          break a
        }
      }
      f = void 0
    }
    return f
  }, null, null)
}
function ag(a) {
  return function f(a, h) {
    return new Af(null, function() {
      var k = z(a);
      return k ? J(B(k), f(C(k), h)) : z(h) ? f(B(h), C(h)) : null
    }, null, null)
  }(null, a)
}
var cg = function() {
  function a(a, c) {
    return ag(Wf.a(a, c))
  }
  var c = null, f = function() {
    function a(f, g, n) {
      var p = null;
      2 < arguments.length && (p = H(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, f, g, p)
    }
    function c(a, f, g) {
      return ag(N.m(Wf, a, f, g))
    }
    a.k = 2;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = C(a);
      return c(f, g, a)
    };
    a.d = c;
    return a
  }(), c = function(c, h, k) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, h);
      default:
        return f.d(c, h, H(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 2;
  c.f = f.f;
  c.a = a;
  c.d = f.d;
  return c
}(), eg = function dg(c, f) {
  return new Af(null, function() {
    var g = z(f);
    if(g) {
      if(Le(g)) {
        for(var h = Pd(g), k = L(h), l = Ef(k), n = 0;;) {
          if(n < k) {
            if(m(c.b ? c.b(x.a(h, n)) : c.call(null, x.a(h, n)))) {
              var p = x.a(h, n);
              l.add(p)
            }
            n += 1
          }else {
            break
          }
        }
        return Hf(l.S(), dg(c, Qd(g)))
      }
      h = B(g);
      g = C(g);
      return m(c.b ? c.b(h) : c.call(null, h)) ? J(h, dg(c, g)) : dg(c, g)
    }
    return null
  }, null, null)
};
function fg(a, c) {
  var f;
  null != a ? (f = a ? ((f = a.o & 4) ? f : a.pc) ? !0 : !1 : !1, f ? (f = Te.c(Gd, Fd(a), c), f = Md(f)) : f = Te.c(Ha, a, c)) : f = Te.c(ue, be, c);
  return f
}
var gg = function() {
  function a(a, c, f, n) {
    return new Af(null, function() {
      var p = z(n);
      if(p) {
        var q = Yf(a, p);
        return a === L(q) ? J(q, g.m(a, c, f, Zf(c, p))) : oe.d(H([Yf(a, Mf.a(q, f))], 0))
      }
      return null
    }, null, null)
  }
  function c(a, c, f) {
    return new Af(null, function() {
      var n = z(f);
      if(n) {
        var p = Yf(a, n);
        return a === L(p) ? J(p, g.c(a, c, Zf(c, n))) : null
      }
      return null
    }, null, null)
  }
  function f(a, c) {
    return g.c(a, a, c)
  }
  var g = null, g = function(g, k, l, n) {
    switch(arguments.length) {
      case 2:
        return f.call(this, g, k);
      case 3:
        return c.call(this, g, k, l);
      case 4:
        return a.call(this, g, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.a = f;
  g.c = c;
  g.m = a;
  return g
}();
function hg(a, c) {
  this.r = a;
  this.e = c
}
function ig(a) {
  return new hg(a.r, a.e.slice())
}
function jg(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function kg(a, c, f) {
  for(;;) {
    if(0 === c) {
      return f
    }
    var g = new hg(a, Array(32));
    g.e[0] = f;
    f = g;
    c -= 5
  }
}
var mg = function lg(c, f, g, h) {
  var k = ig(g), l = c.h - 1 >>> f & 31;
  5 === f ? k.e[l] = h : (g = g.e[l], c = null != g ? lg(c, f - 5, g, h) : kg(null, f - 5, h), k.e[l] = c);
  return k
};
function ng(a, c) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(c)].join(""));
}
function og(a, c) {
  var f = 0 <= c;
  if(f ? c < a.h : f) {
    if(c >= jg(a)) {
      return a.U
    }
    for(var f = a.root, g = a.shift;;) {
      if(0 < g) {
        var h = g - 5, f = f.e[c >>> g & 31], g = h
      }else {
        return f.e
      }
    }
  }else {
    return ng(c, a.h)
  }
}
var qg = function pg(c, f, g, h, k) {
  var l = ig(g);
  if(0 === f) {
    l.e[h & 31] = k
  }else {
    var n = h >>> f & 31;
    c = pg(c, f - 5, g.e[n], h, k);
    l.e[n] = c
  }
  return l
}, sg = function rg(c, f, g) {
  var h = c.h - 2 >>> f & 31;
  if(5 < f) {
    c = rg(c, f - 5, g.e[h]);
    if((f = null == c) ? 0 === h : f) {
      return null
    }
    g = ig(g);
    g.e[h] = c;
    return g
  }
  return 0 === h ? null : t ? (g = ig(g), g.e[h] = null, g) : null
};
function tg(a, c, f, g, h, k) {
  this.i = a;
  this.h = c;
  this.shift = f;
  this.root = g;
  this.U = h;
  this.l = k;
  this.o = 4;
  this.j = 167668511
}
d = tg.prototype;
d.Ha = function() {
  return new ug(this.h, this.shift, vg.b ? vg.b(this.root) : vg.call(null, this.root), wg.b ? wg.b(this.U) : wg.call(null, this.U))
};
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.J = function(a, c) {
  return a.L(a, c, null)
};
d.u = function(a, c, f) {
  return a.L(a, c, f)
};
d.W = function(a, c, f) {
  var g = 0 <= c;
  if(g ? c < this.h : g) {
    return jg(a) <= c ? (a = this.U.slice(), a[c & 31] = f, new tg(this.i, this.h, this.shift, this.root, a, null)) : new tg(this.i, this.h, this.shift, qg(a, this.shift, this.root, c, f), this.U, null)
  }
  if(c === this.h) {
    return a.A(a, f)
  }
  if(t) {
    throw Error([w("Index "), w(c), w(" out of bounds  [0,"), w(this.h), w("]")].join(""));
  }
  return null
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.p(this, f);
      case 3:
        return this.L(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  if(32 > this.h - jg(a)) {
    var f = this.U.slice();
    f.push(c);
    return new tg(this.i, this.h + 1, this.shift, this.root, f, null)
  }
  var g = this.h >>> 5 > 1 << this.shift, f = g ? this.shift + 5 : this.shift;
  if(g) {
    g = new hg(null, Array(32));
    g.e[0] = this.root;
    var h = kg(null, this.shift, new hg(null, this.U));
    g.e[1] = h
  }else {
    g = mg(a, this.shift, this.root, new hg(null, this.U))
  }
  return new tg(this.i, this.h + 1, f, g, [c], null)
};
d.Ka = function(a) {
  return 0 < this.h ? new ne(a, this.h - 1, null) : be
};
d.Ja = function(a) {
  return a.p(a, 0)
};
d.Wa = function(a) {
  return a.p(a, 1)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return de.a(a, c)
};
d.O = function(a, c, f) {
  return de.c(a, c, f)
};
d.v = function(a) {
  return 0 === this.h ? null : 32 > this.h ? H.b(this.U) : t ? xg.c ? xg.c(a, 0, 0) : xg.call(null, a, 0, 0) : null
};
d.F = b("h");
d.ma = function(a) {
  return 0 < this.h ? a.p(a, this.h - 1) : null
};
d.na = function(a) {
  if(0 === this.h) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.h) {
    return dd(Ag, this.i)
  }
  if(1 < this.h - jg(a)) {
    return new tg(this.i, this.h - 1, this.shift, this.root, this.U.slice(0, -1), null)
  }
  if(t) {
    var c = og(a, this.h - 2);
    a = sg(a, this.shift, this.root);
    a = null == a ? Bg : a;
    var f = this.h - 1, g = 5 < this.shift;
    return(g ? null == a.e[1] : g) ? new tg(this.i, f, this.shift - 5, a.e[0], c, null) : new tg(this.i, f, this.shift, a, c, null)
  }
  return null
};
d.Na = function(a, c, f) {
  return a.W(a, c, f)
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new tg(c, this.h, this.shift, this.root, this.U, this.l)
};
d.B = b("i");
d.p = function(a, c) {
  return og(a, c)[c & 31]
};
d.L = function(a, c, f) {
  var g = 0 <= c;
  return(g ? c < this.h : g) ? a.p(a, c) : f
};
d.G = function() {
  return se(Ag, this.i)
};
var Bg = new hg(null, Array(32)), Ag = new tg(null, 0, 5, Bg, [], 0);
function Cg(a) {
  var c = a.length;
  if(32 > c) {
    return new tg(null, c, 5, Bg, a, null)
  }
  for(var f = a.slice(0, 32), g = 32, h = Fd(new tg(null, 32, 5, Bg, f, null));;) {
    if(g < c) {
      f = g + 1, h = Gd(h, a[g]), g = f
    }else {
      return Md(h)
    }
  }
}
function Dg(a) {
  return Md(Te.c(Gd, Fd(Ag), a))
}
var Eg = function() {
  function a(a) {
    var f = null;
    0 < arguments.length && (f = H(Array.prototype.slice.call(arguments, 0), 0));
    return Dg(f)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return Dg(a)
  };
  a.d = function(a) {
    return Dg(a)
  };
  return a
}();
function Fg(a, c, f, g, h, k) {
  this.M = a;
  this.ba = c;
  this.n = f;
  this.off = g;
  this.i = h;
  this.l = k;
  this.j = 32243948;
  this.o = 1536
}
d = Fg.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.aa = function(a) {
  return this.off + 1 < this.ba.length ? (a = xg.m ? xg.m(this.M, this.ba, this.n, this.off + 1) : xg.call(null, this.M, this.ba, this.n, this.off + 1), null == a ? null : a) : a.Jb(a)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return de.a(Gg.c ? Gg.c(this.M, this.n + this.off, L(this.M)) : Gg.call(null, this.M, this.n + this.off, L(this.M)), c)
};
d.O = function(a, c, f) {
  return de.c(Gg.c ? Gg.c(this.M, this.n + this.off, L(this.M)) : Gg.call(null, this.M, this.n + this.off, L(this.M)), c, f)
};
d.v = aa();
d.P = function() {
  return this.ba[this.off]
};
d.R = function(a) {
  return this.off + 1 < this.ba.length ? (a = xg.m ? xg.m(this.M, this.ba, this.n, this.off + 1) : xg.call(null, this.M, this.ba, this.n, this.off + 1), null == a ? be : a) : a.Va(a)
};
d.Jb = function() {
  var a = this.ba.length, a = this.n + a < Da(this.M) ? xg.c ? xg.c(this.M, this.n + a, 0) : xg.call(null, this.M, this.n + a, 0) : null;
  return null == a ? null : a
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return xg.w ? xg.w(this.M, this.ba, this.n, this.off, c) : xg.call(null, this.M, this.ba, this.n, this.off, c)
};
d.G = function() {
  return se(Ag, this.i)
};
d.ab = function() {
  return Ff.a(this.ba, this.off)
};
d.Va = function() {
  var a = this.ba.length, a = this.n + a < Da(this.M) ? xg.c ? xg.c(this.M, this.n + a, 0) : xg.call(null, this.M, this.n + a, 0) : null;
  return null == a ? be : a
};
var xg = function() {
  function a(a, c, f, g, p) {
    return new Fg(a, c, f, g, p, null)
  }
  function c(a, c, f, g) {
    return new Fg(a, c, f, g, null, null)
  }
  function f(a, c, f) {
    return new Fg(a, og(a, c), c, f, null, null)
  }
  var g = null, g = function(g, k, l, n, p) {
    switch(arguments.length) {
      case 3:
        return f.call(this, g, k, l);
      case 4:
        return c.call(this, g, k, l, n);
      case 5:
        return a.call(this, g, k, l, n, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  g.c = f;
  g.m = c;
  g.w = a;
  return g
}();
function Hg(a, c, f, g, h) {
  this.i = a;
  this.$ = c;
  this.start = f;
  this.end = g;
  this.l = h;
  this.o = 0;
  this.j = 32400159
}
d = Hg.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.J = function(a, c) {
  return a.L(a, c, null)
};
d.u = function(a, c, f) {
  return a.L(a, c, f)
};
d.W = function(a, c, f) {
  var g = this, h = g.start + c;
  return Ig.w ? Ig.w(g.i, ye.c(g.$, h, f), g.start, function() {
    var a = g.end, c = h + 1;
    return a > c ? a : c
  }(), null) : Ig.call(null, g.i, ye.c(g.$, h, f), g.start, function() {
    var a = g.end, c = h + 1;
    return a > c ? a : c
  }(), null)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.p(this, f);
      case 3:
        return this.L(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Ig.w ? Ig.w(this.i, Tc(this.$, this.end, c), this.start, this.end + 1, null) : Ig.call(null, this.i, Tc(this.$, this.end, c), this.start, this.end + 1, null)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return de.a(a, c)
};
d.O = function(a, c, f) {
  return de.c(a, c, f)
};
d.v = function() {
  var a = this;
  return function f(g) {
    return g === a.end ? null : J(x.a(a.$, g), new Af(null, function() {
      return f(g + 1)
    }, null, null))
  }(a.start)
};
d.F = function() {
  return this.end - this.start
};
d.ma = function() {
  return x.a(this.$, this.end - 1)
};
d.na = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Ig.w ? Ig.w(this.i, this.$, this.start, this.end - 1, null) : Ig.call(null, this.i, this.$, this.start, this.end - 1, null)
};
d.Na = function(a, c, f) {
  return a.W(a, c, f)
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return Ig.w ? Ig.w(c, this.$, this.start, this.end, this.l) : Ig.call(null, c, this.$, this.start, this.end, this.l)
};
d.B = b("i");
d.p = function(a, c) {
  var f = 0 > c;
  return(f ? f : this.end <= this.start + c) ? ng(c, this.end - this.start) : x.a(this.$, this.start + c)
};
d.L = function(a, c, f) {
  return((a = 0 > c) ? a : this.end <= this.start + c) ? f : x.c(this.$, this.start + c, f)
};
d.G = function() {
  return se(Ag, this.i)
};
function Ig(a, c, f, g, h) {
  for(;;) {
    if(c instanceof Hg) {
      var k = c.start + f, l = c.start + g;
      c = c.$;
      f = k;
      g = l
    }else {
      var n = L(c);
      if(function() {
        var a = 0 > f;
        return a || (a = 0 > g) ? a : (a = f > n) ? a : g > n
      }()) {
        throw Error("Index out of bounds");
      }
      return new Hg(a, c, f, g, h)
    }
  }
}
var Gg = function() {
  function a(a, c, f) {
    return Ig(null, a, c, f, null)
  }
  function c(a, c) {
    return f.c(a, c, L(a))
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}();
function vg(a) {
  return new hg({}, a.e.slice())
}
function wg(a) {
  var c = Array(32);
  Me(a, 0, c, 0, a.length);
  return c
}
var Kg = function Jg(c, f, g, h) {
  g = c.root.r === g.r ? g : new hg(c.root.r, g.e.slice());
  var k = c.h - 1 >>> f & 31;
  if(5 === f) {
    c = h
  }else {
    var l = g.e[k];
    c = null != l ? Jg(c, f - 5, l, h) : kg(c.root.r, f - 5, h)
  }
  g.e[k] = c;
  return g
};
function ug(a, c, f, g) {
  this.h = a;
  this.shift = c;
  this.root = f;
  this.U = g;
  this.j = 275;
  this.o = 88
}
d = ug.prototype;
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.J = function(a, c) {
  return a.L(a, c, null)
};
d.u = function(a, c, f) {
  return a.L(a, c, f)
};
d.p = function(a, c) {
  if(this.root.r) {
    return og(a, c)[c & 31]
  }
  throw Error("nth after persistent!");
};
d.L = function(a, c, f) {
  var g = 0 <= c;
  return(g ? c < this.h : g) ? a.p(a, c) : f
};
d.F = function() {
  if(this.root.r) {
    return this.h
  }
  throw Error("count after persistent!");
};
function Lg(a, c, f, g) {
  if(a.root.r) {
    if(function() {
      var c = 0 <= f;
      return c ? f < a.h : c
    }()) {
      if(jg(c) <= f) {
        a.U[f & 31] = g
      }else {
        var h = function l(c, h) {
          var q = a.root.r === h.r ? h : new hg(a.root.r, h.e.slice());
          if(0 === c) {
            q.e[f & 31] = g
          }else {
            var s = f >>> c & 31, u = l(c - 5, q.e[s]);
            q.e[s] = u
          }
          return q
        }.call(null, a.shift, a.root);
        a.root = h
      }
      return c
    }
    if(f === a.h) {
      return c.Da(c, g)
    }
    if(t) {
      throw Error([w("Index "), w(f), w(" out of bounds for TransientVector of length"), w(a.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
d.Ca = function(a, c, f) {
  return Lg(a, a, c, f)
};
d.Da = function(a, c) {
  if(this.root.r) {
    if(32 > this.h - jg(a)) {
      this.U[this.h & 31] = c
    }else {
      var f = new hg(this.root.r, this.U), g = Array(32);
      g[0] = c;
      this.U = g;
      if(this.h >>> 5 > 1 << this.shift) {
        var g = Array(32), h = this.shift + 5;
        g[0] = this.root;
        g[1] = kg(this.root.r, this.shift, f);
        this.root = new hg(this.root.r, g);
        this.shift = h
      }else {
        this.root = Kg(a, this.shift, this.root, f)
      }
    }
    this.h += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
d.Ma = function(a) {
  if(this.root.r) {
    this.root.r = null;
    a = this.h - jg(a);
    var c = Array(a);
    Me(this.U, 0, c, 0, a);
    return new tg(null, this.h, this.shift, this.root, c, null)
  }
  throw Error("persistent! called twice");
};
function Mg(a, c, f, g) {
  this.i = a;
  this.Y = c;
  this.ka = f;
  this.l = g;
  this.o = 0;
  this.j = 31850572
}
d = Mg.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.v = aa();
d.P = function() {
  return B(this.Y)
};
d.R = function(a) {
  var c = G(this.Y);
  return c ? new Mg(this.i, c, this.ka, null) : null == this.ka ? a.G(a) : new Mg(this.i, this.ka, null, null)
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Mg(c, this.Y, this.ka, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
function Ng(a, c, f, g, h) {
  this.i = a;
  this.count = c;
  this.Y = f;
  this.ka = g;
  this.l = h;
  this.o = 0;
  this.j = 31858766
}
d = Ng.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.A = function(a, c) {
  var f;
  m(this.Y) ? (f = this.ka, f = new Ng(this.i, this.count + 1, this.Y, ue.a(m(f) ? f : Ag, c), null)) : f = new Ng(this.i, this.count + 1, ue.a(this.Y, c), Ag, null);
  return f
};
d.toString = function() {
  return Sd(this)
};
d.v = function() {
  var a = z(this.ka), c = this.Y;
  return m(m(c) ? c : a) ? new Mg(null, this.Y, z(a), null) : null
};
d.F = b("count");
d.ma = function() {
  return B(this.Y)
};
d.na = function(a) {
  return m(this.Y) ? (a = G(this.Y)) ? new Ng(this.i, this.count - 1, a, this.ka, null) : new Ng(this.i, this.count - 1, z(this.ka), Ag, null) : a
};
d.P = function() {
  return B(this.Y)
};
d.R = function(a) {
  return C(z(a))
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Ng(c, this.count, this.Y, this.ka, this.l)
};
d.B = b("i");
d.G = function() {
  return Og
};
var Og = new Ng(null, 0, null, Ag, 0);
function Pg() {
  this.o = 0;
  this.j = 2097152
}
Pg.prototype.s = ba(!1);
var Qg = new Pg;
function Rg(a, c) {
  return Pe(Je(c) ? L(a) === L(c) ? Qf(Rf, Wf.a(function(a) {
    return I.a(we.c(c, B(a), Qg), te(a))
  }, a)) : null : null)
}
function Sg(a, c) {
  var f = a.e;
  if(c instanceof O) {
    a: {
      for(var g = f.length, h = c.sa, k = 0;;) {
        if(g <= k) {
          f = -1;
          break a
        }
        var l = f[k], n = l instanceof O;
        if(n ? h === l.sa : n) {
          f = k;
          break a
        }
        if(t) {
          k += 2
        }else {
          f = null;
          break a
        }
      }
      f = void 0
    }
  }else {
    if((g = "string" == typeof c) ? g : "number" === typeof c) {
      a: {
        g = f.length;
        for(h = 0;;) {
          if(g <= h) {
            f = -1;
            break a
          }
          if(c === f[h]) {
            f = h;
            break a
          }
          if(t) {
            h += 2
          }else {
            f = null;
            break a
          }
        }
        f = void 0
      }
    }else {
      if(c instanceof Xd) {
        a: {
          g = f.length;
          h = c.ya;
          for(k = 0;;) {
            if(g <= k) {
              f = -1;
              break a
            }
            l = f[k];
            if((n = l instanceof Xd) ? h === l.ya : n) {
              f = k;
              break a
            }
            if(t) {
              k += 2
            }else {
              f = null;
              break a
            }
          }
          f = void 0
        }
      }else {
        if(null == c) {
          a: {
            g = f.length;
            for(h = 0;;) {
              if(g <= h) {
                f = -1;
                break a
              }
              if(null == f[h]) {
                f = h;
                break a
              }
              if(t) {
                h += 2
              }else {
                f = null;
                break a
              }
            }
            f = void 0
          }
        }else {
          if(t) {
            a: {
              g = f.length;
              for(h = 0;;) {
                if(g <= h) {
                  f = -1;
                  break a
                }
                if(I.a(c, f[h])) {
                  f = h;
                  break a
                }
                if(t) {
                  h += 2
                }else {
                  f = null;
                  break a
                }
              }
              f = void 0
            }
          }else {
            f = null
          }
        }
      }
    }
  }
  return f
}
function Tg(a, c, f) {
  this.e = a;
  this.n = c;
  this.ca = f;
  this.o = 0;
  this.j = 32374990
}
d = Tg.prototype;
d.t = function(a) {
  return me(a)
};
d.aa = function() {
  return this.n < this.e.length - 2 ? new Tg(this.e, this.n + 2, this.ca) : null
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.F = function() {
  return(this.e.length - this.n) / 2
};
d.P = function() {
  return Cg([this.e[this.n], this.e[this.n + 1]])
};
d.R = function() {
  return this.n < this.e.length - 2 ? new Tg(this.e, this.n + 2, this.ca) : be
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Tg(this.e, this.n, c)
};
d.B = b("ca");
d.G = function() {
  return se(be, this.ca)
};
function Ug(a, c, f, g) {
  this.i = a;
  this.h = c;
  this.e = f;
  this.l = g;
  this.o = 4;
  this.j = 16123663
}
d = Ug.prototype;
d.Ha = function() {
  return new Vg({}, this.e.length, this.e.slice())
};
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = pf(a)
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  a = Sg(a, c);
  return-1 === a ? f : this.e[a + 1]
};
d.W = function(a, c, f) {
  var g = Sg(a, c);
  if(-1 === g) {
    if(this.h < Wg) {
      g = a.e;
      a = g.length;
      for(var h = Array(a + 2), k = 0;;) {
        if(k < a) {
          h[k] = g[k], k += 1
        }else {
          break
        }
      }
      h[a] = c;
      h[a + 1] = f;
      return new Ug(this.i, this.h + 1, h, null)
    }
    return dd(wc(fg(Xg, a), c, f), this.i)
  }
  return f === this.e[g + 1] ? a : t ? (c = this.e.slice(), c[g + 1] = f, new Ug(this.i, this.h, c, null)) : null
};
d.Ga = function(a, c) {
  return-1 !== Sg(a, c)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Ke(c) ? a.W(a, x.a(c, 0), x.a(c, 1)) : Te.c(Ha, a, c)
};
d.toString = function() {
  return Sd(this)
};
d.v = function() {
  return 0 <= this.e.length - 2 ? new Tg(this.e, 0, null) : null
};
d.F = b("h");
d.s = function(a, c) {
  return Rg(a, c)
};
d.D = function(a, c) {
  return new Ug(c, this.h, this.e, this.l)
};
d.B = b("i");
d.G = function() {
  return dd(Yg, this.i)
};
d.Ia = function(a, c) {
  if(0 <= Sg(a, c)) {
    var f = this.e.length, g = f - 2;
    if(0 === g) {
      return a.G(a)
    }
    for(var g = Array(g), h = 0, k = 0;;) {
      if(h >= f) {
        return new Ug(this.i, this.h - 1, g, null)
      }
      if(I.a(c, this.e[h])) {
        h += 2
      }else {
        if(t) {
          g[k] = this.e[h], g[k + 1] = this.e[h + 1], k += 2, h += 2
        }else {
          return null
        }
      }
    }
  }else {
    return a
  }
};
var Yg = new Ug(null, 0, [], null), Wg = 8;
function y(a, c) {
  var f = c ? a : a.slice();
  return new Ug(null, f.length / 2, f, null)
}
function Vg(a, c, f) {
  this.Ea = a;
  this.pa = c;
  this.e = f;
  this.o = 56;
  this.j = 258
}
d = Vg.prototype;
d.Ca = function(a, c, f) {
  if(m(this.Ea)) {
    var g = Sg(a, c);
    if(-1 === g) {
      if(this.pa + 2 <= 2 * Wg) {
        return this.pa += 2, this.e.push(c), this.e.push(f), a
      }
      a = Zg.a ? Zg.a(this.pa, this.e) : Zg.call(null, this.pa, this.e);
      return Nd(a, c, f)
    }
    f !== this.e[g + 1] && (this.e[g + 1] = f);
    return a
  }
  throw Error("assoc! after persistent!");
};
d.Da = function(a, c) {
  if(m(this.Ea)) {
    var f;
    f = c ? ((f = c.j & 2048) ? f : c.ac) ? !0 : c.j ? !1 : r(Ac, c) : r(Ac, c);
    if(f) {
      return a.Ca(a, qf.b ? qf.b(c) : qf.call(null, c), rf.b ? rf.b(c) : rf.call(null, c))
    }
    f = z(c);
    for(var g = a;;) {
      var h = B(f);
      if(m(h)) {
        f = G(f), g = g.Ca(g, qf.b ? qf.b(h) : qf.call(null, h), rf.b ? rf.b(h) : rf.call(null, h))
      }else {
        return g
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
d.Ma = function() {
  if(m(this.Ea)) {
    return this.Ea = !1, new Ug(null, Ye((this.pa - this.pa % 2) / 2), this.e, null)
  }
  throw Error("persistent! called twice");
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  if(m(this.Ea)) {
    return a = Sg(a, c), -1 === a ? f : this.e[a + 1]
  }
  throw Error("lookup after persistent!");
};
d.F = function() {
  if(m(this.Ea)) {
    return Ye((this.pa - this.pa % 2) / 2)
  }
  throw Error("count after persistent!");
};
function Zg(a, c) {
  for(var f = Fd(Xg), g = 0;;) {
    if(g < a) {
      f = Nd(f, c[g], c[g + 1]), g += 2
    }else {
      return f
    }
  }
}
function $g() {
  this.val = !1
}
function ah(a, c) {
  var f;
  a === c ? f = !0 : (f = a === c ? !0 : ((f = a instanceof O) ? c instanceof O : f) ? a.sa === c.sa : !1, f = f ? !0 : t ? I.a(a, c) : null);
  return f
}
var bh = function() {
  function a(a, c, f, l, n) {
    a = a.slice();
    a[c] = f;
    a[l] = n;
    return a
  }
  function c(a, c, f) {
    a = a.slice();
    a[c] = f;
    return a
  }
  var f = null, f = function(f, h, k, l, n) {
    switch(arguments.length) {
      case 3:
        return c.call(this, f, h, k);
      case 5:
        return a.call(this, f, h, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = c;
  f.w = a;
  return f
}();
function ch(a, c) {
  var f = Array(a.length - 2);
  Me(a, 0, f, 0, 2 * c);
  Me(a, 2 * (c + 1), f, 2 * c, f.length - 2 * c);
  return f
}
var dh = function() {
  function a(a, c, f, l, n, p) {
    a = a.Fa(c);
    a.e[f] = l;
    a.e[n] = p;
    return a
  }
  function c(a, c, f, l) {
    a = a.Fa(c);
    a.e[f] = l;
    return a
  }
  var f = null, f = function(f, h, k, l, n, p) {
    switch(arguments.length) {
      case 4:
        return c.call(this, f, h, k, l);
      case 6:
        return a.call(this, f, h, k, l, n, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.m = c;
  f.T = a;
  return f
}();
function eh(a, c, f) {
  this.r = a;
  this.C = c;
  this.e = f
}
d = eh.prototype;
d.ea = function(a, c, f, g, h, k) {
  var l = 1 << (f >>> c & 31), n = Ze(this.C & l - 1);
  if(0 === (this.C & l)) {
    var p = Ze(this.C);
    if(2 * p < this.e.length) {
      a = this.Fa(a);
      c = a.e;
      k.val = !0;
      a: {
        for(f = 2 * (p - n), k = 2 * n + (f - 1), p = 2 * (n + 1) + (f - 1);;) {
          if(0 === f) {
            break a
          }
          c[p] = c[k];
          p -= 1;
          f -= 1;
          k -= 1
        }
      }
      c[2 * n] = g;
      c[2 * n + 1] = h;
      a.C |= l;
      return a
    }
    if(16 <= p) {
      n = Array(32);
      n[f >>> c & 31] = fh.ea(a, c + 5, f, g, h, k);
      for(h = g = 0;;) {
        if(32 > g) {
          0 !== (this.C >>> g & 1) && (n[g] = null != this.e[h] ? fh.ea(a, c + 5, Zd.b(this.e[h]), this.e[h], this.e[h + 1], k) : this.e[h + 1], h += 2), g += 1
        }else {
          break
        }
      }
      return new gh(a, p + 1, n)
    }
    return t ? (c = Array(2 * (p + 4)), Me(this.e, 0, c, 0, 2 * n), c[2 * n] = g, c[2 * n + 1] = h, Me(this.e, 2 * n, c, 2 * (n + 1), 2 * (p - n)), k.val = !0, a = this.Fa(a), a.e = c, a.C |= l, a) : null
  }
  p = this.e[2 * n];
  l = this.e[2 * n + 1];
  return null == p ? (p = l.ea(a, c + 5, f, g, h, k), p === l ? this : dh.m(this, a, 2 * n + 1, p)) : ah(g, p) ? h === l ? this : dh.m(this, a, 2 * n + 1, h) : t ? (k.val = !0, dh.T(this, a, 2 * n, null, 2 * n + 1, hh.Ba ? hh.Ba(a, c + 5, p, l, f, g, h) : hh.call(null, a, c + 5, p, l, f, g, h))) : null
};
d.Oa = function() {
  return ih.b ? ih.b(this.e) : ih.call(null, this.e)
};
d.Fa = function(a) {
  if(a === this.r) {
    return this
  }
  var c = Ze(this.C), f = Array(0 > c ? 4 : 2 * (c + 1));
  Me(this.e, 0, f, 0, 2 * c);
  return new eh(a, this.C, f)
};
d.Pa = function(a, c, f) {
  var g = 1 << (c >>> a & 31);
  if(0 === (this.C & g)) {
    return this
  }
  var h = Ze(this.C & g - 1), k = this.e[2 * h], l = this.e[2 * h + 1];
  return null == k ? (a = l.Pa(a + 5, c, f), a === l ? this : null != a ? new eh(null, this.C, bh.c(this.e, 2 * h + 1, a)) : this.C === g ? null : t ? new eh(null, this.C ^ g, ch(this.e, h)) : null) : ah(f, k) ? new eh(null, this.C ^ g, ch(this.e, h)) : t ? this : null
};
d.da = function(a, c, f, g, h) {
  var k = 1 << (c >>> a & 31), l = Ze(this.C & k - 1);
  if(0 === (this.C & k)) {
    var n = Ze(this.C);
    if(16 <= n) {
      l = Array(32);
      l[c >>> a & 31] = fh.da(a + 5, c, f, g, h);
      for(g = f = 0;;) {
        if(32 > f) {
          0 !== (this.C >>> f & 1) && (l[f] = null != this.e[g] ? fh.da(a + 5, Zd.b(this.e[g]), this.e[g], this.e[g + 1], h) : this.e[g + 1], g += 2), f += 1
        }else {
          break
        }
      }
      return new gh(null, n + 1, l)
    }
    a = Array(2 * (n + 1));
    Me(this.e, 0, a, 0, 2 * l);
    a[2 * l] = f;
    a[2 * l + 1] = g;
    Me(this.e, 2 * l, a, 2 * (l + 1), 2 * (n - l));
    h.val = !0;
    return new eh(null, this.C | k, a)
  }
  n = this.e[2 * l];
  k = this.e[2 * l + 1];
  return null == n ? (n = k.da(a + 5, c, f, g, h), n === k ? this : new eh(null, this.C, bh.c(this.e, 2 * l + 1, n))) : ah(f, n) ? g === k ? this : new eh(null, this.C, bh.c(this.e, 2 * l + 1, g)) : t ? (h.val = !0, new eh(null, this.C, bh.w(this.e, 2 * l, null, 2 * l + 1, hh.T ? hh.T(a + 5, n, k, c, f, g) : hh.call(null, a + 5, n, k, c, f, g)))) : null
};
d.ta = function(a, c, f, g) {
  var h = 1 << (c >>> a & 31);
  if(0 === (this.C & h)) {
    return g
  }
  var k = Ze(this.C & h - 1), h = this.e[2 * k], k = this.e[2 * k + 1];
  return null == h ? k.ta(a + 5, c, f, g) : ah(f, h) ? k : t ? g : null
};
var fh = new eh(null, 0, []);
function gh(a, c, f) {
  this.r = a;
  this.h = c;
  this.e = f
}
d = gh.prototype;
d.ea = function(a, c, f, g, h, k) {
  var l = f >>> c & 31, n = this.e[l];
  if(null == n) {
    return a = dh.m(this, a, l, fh.ea(a, c + 5, f, g, h, k)), a.h += 1, a
  }
  c = n.ea(a, c + 5, f, g, h, k);
  return c === n ? this : dh.m(this, a, l, c)
};
d.Oa = function() {
  return jh.b ? jh.b(this.e) : jh.call(null, this.e)
};
d.Fa = function(a) {
  return a === this.r ? this : new gh(a, this.h, this.e.slice())
};
d.Pa = function(a, c, f) {
  var g = c >>> a & 31, h = this.e[g];
  if(null != h) {
    a = h.Pa(a + 5, c, f);
    if(a === h) {
      g = this
    }else {
      if(null == a) {
        if(8 >= this.h) {
          a: {
            h = this.e;
            a = 2 * (this.h - 1);
            c = Array(a);
            f = 0;
            for(var k = 1, l = 0;;) {
              if(f < a) {
                var n = f !== g;
                if(n ? null != h[f] : n) {
                  c[k] = h[f], k += 2, l |= 1 << f
                }
                f += 1
              }else {
                g = new eh(null, l, c);
                break a
              }
            }
            g = void 0
          }
        }else {
          g = new gh(null, this.h - 1, bh.c(this.e, g, a))
        }
      }else {
        g = t ? new gh(null, this.h, bh.c(this.e, g, a)) : null
      }
    }
    return g
  }
  return this
};
d.da = function(a, c, f, g, h) {
  var k = c >>> a & 31, l = this.e[k];
  if(null == l) {
    return new gh(null, this.h + 1, bh.c(this.e, k, fh.da(a + 5, c, f, g, h)))
  }
  a = l.da(a + 5, c, f, g, h);
  return a === l ? this : new gh(null, this.h, bh.c(this.e, k, a))
};
d.ta = function(a, c, f, g) {
  var h = this.e[c >>> a & 31];
  return null != h ? h.ta(a + 5, c, f, g) : g
};
function kh(a, c, f) {
  c *= 2;
  for(var g = 0;;) {
    if(g < c) {
      if(ah(f, a[g])) {
        return g
      }
      g += 2
    }else {
      return-1
    }
  }
}
function lh(a, c, f, g) {
  this.r = a;
  this.oa = c;
  this.h = f;
  this.e = g
}
d = lh.prototype;
d.ea = function(a, c, f, g, h, k) {
  if(f === this.oa) {
    c = kh(this.e, this.h, g);
    if(-1 === c) {
      if(this.e.length > 2 * this.h) {
        return a = dh.T(this, a, 2 * this.h, g, 2 * this.h + 1, h), k.val = !0, a.h += 1, a
      }
      f = this.e.length;
      c = Array(f + 2);
      Me(this.e, 0, c, 0, f);
      c[f] = g;
      c[f + 1] = h;
      k.val = !0;
      k = this.h + 1;
      a === this.r ? (this.e = c, this.h = k, a = this) : a = new lh(this.r, this.oa, k, c);
      return a
    }
    return this.e[c + 1] === h ? this : dh.m(this, a, c + 1, h)
  }
  return(new eh(a, 1 << (this.oa >>> c & 31), [null, this, null, null])).ea(a, c, f, g, h, k)
};
d.Oa = function() {
  return ih.b ? ih.b(this.e) : ih.call(null, this.e)
};
d.Fa = function(a) {
  if(a === this.r) {
    return this
  }
  var c = Array(2 * (this.h + 1));
  Me(this.e, 0, c, 0, 2 * this.h);
  return new lh(a, this.oa, this.h, c)
};
d.Pa = function(a, c, f) {
  a = kh(this.e, this.h, f);
  return-1 === a ? this : 1 === this.h ? null : t ? new lh(null, this.oa, this.h - 1, ch(this.e, Ye((a - a % 2) / 2))) : null
};
d.da = function(a, c, f, g, h) {
  return c === this.oa ? (a = kh(this.e, this.h, f), -1 === a ? (a = this.e.length, c = Array(a + 2), Me(this.e, 0, c, 0, a), c[a] = f, c[a + 1] = g, h.val = !0, new lh(null, this.oa, this.h + 1, c)) : I.a(this.e[a], g) ? this : new lh(null, this.oa, this.h, bh.c(this.e, a + 1, g))) : (new eh(null, 1 << (this.oa >>> a & 31), [null, this])).da(a, c, f, g, h)
};
d.ta = function(a, c, f, g) {
  a = kh(this.e, this.h, f);
  return 0 > a ? g : ah(f, this.e[a]) ? this.e[a + 1] : t ? g : null
};
var hh = function() {
  function a(a, c, f, l, n, p, q) {
    var s = Zd.b(f);
    if(s === n) {
      return new lh(null, s, 2, [f, l, p, q])
    }
    var u = new $g;
    return fh.ea(a, c, s, f, l, u).ea(a, c, n, p, q, u)
  }
  function c(a, c, f, l, n, p) {
    var q = Zd.b(c);
    if(q === l) {
      return new lh(null, q, 2, [c, f, n, p])
    }
    var s = new $g;
    return fh.da(a, q, c, f, s).da(a, l, n, p, s)
  }
  var f = null, f = function(f, h, k, l, n, p, q) {
    switch(arguments.length) {
      case 6:
        return c.call(this, f, h, k, l, n, p);
      case 7:
        return a.call(this, f, h, k, l, n, p, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.T = c;
  f.Ba = a;
  return f
}();
function mh(a, c, f, g, h) {
  this.i = a;
  this.ga = c;
  this.n = f;
  this.H = g;
  this.l = h;
  this.o = 0;
  this.j = 32374860
}
d = mh.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.P = function() {
  return null == this.H ? Cg([this.ga[this.n], this.ga[this.n + 1]]) : B(this.H)
};
d.R = function() {
  return null == this.H ? ih.c ? ih.c(this.ga, this.n + 2, null) : ih.call(null, this.ga, this.n + 2, null) : ih.c ? ih.c(this.ga, this.n, G(this.H)) : ih.call(null, this.ga, this.n, G(this.H))
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new mh(c, this.ga, this.n, this.H, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
var ih = function() {
  function a(a, c, f) {
    if(null == f) {
      for(f = a.length;;) {
        if(c < f) {
          if(null != a[c]) {
            return new mh(null, a, c, null, null)
          }
          var l = a[c + 1];
          if(m(l) && (l = l.Oa(), m(l))) {
            return new mh(null, a, c + 2, l, null)
          }
          c += 2
        }else {
          return null
        }
      }
    }else {
      return new mh(null, a, c, f, null)
    }
  }
  function c(a) {
    return f.c(a, 0, null)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.c = a;
  return f
}();
function nh(a, c, f, g, h) {
  this.i = a;
  this.ga = c;
  this.n = f;
  this.H = g;
  this.l = h;
  this.o = 0;
  this.j = 32374860
}
d = nh.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.P = function() {
  return B(this.H)
};
d.R = function() {
  return jh.m ? jh.m(null, this.ga, this.n, G(this.H)) : jh.call(null, null, this.ga, this.n, G(this.H))
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new nh(c, this.ga, this.n, this.H, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
var jh = function() {
  function a(a, c, f, l) {
    if(null == l) {
      for(l = c.length;;) {
        if(f < l) {
          var n = c[f];
          if(m(n) && (n = n.Oa(), m(n))) {
            return new nh(a, c, f + 1, n, null)
          }
          f += 1
        }else {
          return null
        }
      }
    }else {
      return new nh(a, c, f, l, null)
    }
  }
  function c(a) {
    return f.m(null, a, 0, null)
  }
  var f = null, f = function(f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 4:
        return a.call(this, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.m = a;
  return f
}();
function oh(a, c, f, g, h, k) {
  this.i = a;
  this.h = c;
  this.root = f;
  this.V = g;
  this.Z = h;
  this.l = k;
  this.o = 4;
  this.j = 16123663
}
d = oh.prototype;
d.Ha = function() {
  return new ph({}, this.root, this.h, this.V, this.Z)
};
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = pf(a)
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  return null == c ? this.V ? this.Z : f : null == this.root ? f : t ? this.root.ta(0, Zd.b(c), c, f) : null
};
d.W = function(a, c, f) {
  if(null == c) {
    var g = this.V;
    return(g ? f === this.Z : g) ? a : new oh(this.i, this.V ? this.h : this.h + 1, this.root, !0, f, null)
  }
  g = new $g;
  f = (null == this.root ? fh : this.root).da(0, Zd.b(c), c, f, g);
  return f === this.root ? a : new oh(this.i, g.val ? this.h + 1 : this.h, f, this.V, this.Z, null)
};
d.Ga = function(a, c) {
  return null == c ? this.V : null == this.root ? !1 : t ? this.root.ta(0, Zd.b(c), c, Ne) !== Ne : null
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Ke(c) ? a.W(a, x.a(c, 0), x.a(c, 1)) : Te.c(Ha, a, c)
};
d.toString = function() {
  return Sd(this)
};
d.v = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.Oa() : null;
    return this.V ? J(Cg([null, this.Z]), a) : a
  }
  return null
};
d.F = b("h");
d.s = function(a, c) {
  return Rg(a, c)
};
d.D = function(a, c) {
  return new oh(c, this.h, this.root, this.V, this.Z, this.l)
};
d.B = b("i");
d.G = function() {
  return dd(Xg, this.i)
};
d.Ia = function(a, c) {
  if(null == c) {
    return this.V ? new oh(this.i, this.h - 1, this.root, !1, null, null) : a
  }
  if(null == this.root) {
    return a
  }
  if(t) {
    var f = this.root.Pa(0, Zd.b(c), c);
    return f === this.root ? a : new oh(this.i, this.h - 1, f, this.V, this.Z, null)
  }
  return null
};
var Xg = new oh(null, 0, null, !1, null, 0);
function ph(a, c, f, g, h) {
  this.r = a;
  this.root = c;
  this.count = f;
  this.V = g;
  this.Z = h;
  this.o = 56;
  this.j = 258
}
d = ph.prototype;
d.Ca = function(a, c, f) {
  return qh(a, c, f)
};
d.Da = function(a, c) {
  var f;
  a: {
    if(a.r) {
      f = c ? ((f = c.j & 2048) ? f : c.ac) ? !0 : c.j ? !1 : r(Ac, c) : r(Ac, c);
      if(f) {
        f = qh(a, qf.b ? qf.b(c) : qf.call(null, c), rf.b ? rf.b(c) : rf.call(null, c));
        break a
      }
      f = z(c);
      for(var g = a;;) {
        var h = B(f);
        if(m(h)) {
          f = G(f), g = qh(g, qf.b ? qf.b(h) : qf.call(null, h), rf.b ? rf.b(h) : rf.call(null, h))
        }else {
          f = g;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    f = void 0
  }
  return f
};
d.Ma = function(a) {
  if(a.r) {
    a.r = null, a = new oh(null, a.count, a.root, a.V, a.Z, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
d.J = function(a, c) {
  return null == c ? this.V ? this.Z : null : null == this.root ? null : this.root.ta(0, Zd.b(c), c)
};
d.u = function(a, c, f) {
  return null == c ? this.V ? this.Z : f : null == this.root ? f : this.root.ta(0, Zd.b(c), c, f)
};
d.F = function() {
  if(this.r) {
    return this.count
  }
  throw Error("count after persistent!");
};
function qh(a, c, f) {
  if(a.r) {
    if(null == c) {
      a.Z !== f && (a.Z = f), a.V || (a.count += 1, a.V = !0)
    }else {
      var g = new $g;
      c = (null == a.root ? fh : a.root).ea(a.r, 0, Zd.b(c), c, f, g);
      c !== a.root && (a.root = c);
      g.val && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
function rh(a, c, f) {
  for(var g = c;;) {
    if(null != a) {
      c = f ? a.left : a.right, g = ue.a(g, a), a = c
    }else {
      return g
    }
  }
}
function sh(a, c, f, g, h) {
  this.i = a;
  this.stack = c;
  this.Ta = f;
  this.h = g;
  this.l = h;
  this.o = 0;
  this.j = 32374862
}
d = sh.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.F = function(a) {
  return 0 > this.h ? L(G(a)) + 1 : this.h
};
d.P = function() {
  return Nc(this.stack)
};
d.R = function() {
  var a = B(this.stack), a = rh(this.Ta ? a.right : a.left, G(this.stack), this.Ta);
  return null != a ? new sh(null, a, this.Ta, this.h - 1, null) : be
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new sh(c, this.stack, this.Ta, this.h, this.l)
};
d.B = b("i");
d.G = function() {
  return se(be, this.i)
};
function th(a, c, f, g) {
  return f instanceof P ? f.left instanceof P ? new P(f.key, f.val, f.left.la(), new uh(a, c, f.right, g, null), null) : f.right instanceof P ? new P(f.right.key, f.right.val, new uh(f.key, f.val, f.left, f.right.left, null), new uh(a, c, f.right.right, g, null), null) : t ? new uh(a, c, f, g, null) : null : new uh(a, c, f, g, null)
}
function vh(a, c, f, g) {
  return g instanceof P ? g.right instanceof P ? new P(g.key, g.val, new uh(a, c, f, g.left, null), g.right.la(), null) : g.left instanceof P ? new P(g.left.key, g.left.val, new uh(a, c, f, g.left.left, null), new uh(g.key, g.val, g.left.right, g.right, null), null) : t ? new uh(a, c, f, g, null) : null : new uh(a, c, f, g, null)
}
function wh(a, c, f, g) {
  if(f instanceof P) {
    return new P(a, c, f.la(), g, null)
  }
  if(g instanceof uh) {
    return vh(a, c, f, g.Ra())
  }
  var h = g instanceof P;
  if(h ? g.left instanceof uh : h) {
    return new P(g.left.key, g.left.val, new uh(a, c, f, g.left.left, null), vh(g.key, g.val, g.left.right, g.right.Ra()), null)
  }
  if(t) {
    throw Error("red-black tree invariant violation");
  }
  return null
}
function zh(a, c, f, g) {
  if(g instanceof P) {
    return new P(a, c, f, g.la(), null)
  }
  if(f instanceof uh) {
    return th(a, c, f.Ra(), g)
  }
  var h = f instanceof P;
  if(h ? f.right instanceof uh : h) {
    return new P(f.right.key, f.right.val, th(f.key, f.val, f.left.Ra(), f.right.left), new uh(a, c, f.right.right, g, null), null)
  }
  if(t) {
    throw Error("red-black tree invariant violation");
  }
  return null
}
function uh(a, c, f, g, h) {
  this.key = a;
  this.val = c;
  this.left = f;
  this.right = g;
  this.l = h;
  this.o = 0;
  this.j = 32402207
}
d = uh.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.J = function(a, c) {
  return a.L(a, c, null)
};
d.u = function(a, c, f) {
  return a.L(a, c, f)
};
d.W = function(a, c, f) {
  return ye.c(Cg([this.key, this.val]), c, f)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Cg([this.key, this.val, c])
};
d.Ja = b("key");
d.Wa = b("val");
d.Fb = function(a) {
  return a.Hb(this)
};
d.Ra = function() {
  return new P(this.key, this.val, this.left, this.right, null)
};
d.replace = function(a, c, f, g) {
  return new uh(a, c, f, g, null)
};
d.Eb = function(a) {
  return a.Gb(this)
};
d.Gb = function(a) {
  return new uh(a.key, a.val, this, a.right, null)
};
d.Hb = function(a) {
  return new uh(a.key, a.val, a.left, this, null)
};
d.la = function() {
  return this
};
d.N = function(a, c) {
  return de.a(a, c)
};
d.O = function(a, c, f) {
  return de.c(a, c, f)
};
d.v = function() {
  return oe.d(H([this.key, this.val], 0))
};
d.F = ba(2);
d.ma = b("val");
d.na = function() {
  return Cg([this.key])
};
d.Na = function(a, c, f) {
  return Tc(Cg([this.key, this.val]), c, f)
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return se(Cg([this.key, this.val]), c)
};
d.B = ba(null);
d.p = function(a, c) {
  return 0 === c ? this.key : 1 === c ? this.val : null
};
d.L = function(a, c, f) {
  return 0 === c ? this.key : 1 === c ? this.val : t ? f : null
};
d.G = function() {
  return Ag
};
function P(a, c, f, g, h) {
  this.key = a;
  this.val = c;
  this.left = f;
  this.right = g;
  this.l = h;
  this.o = 0;
  this.j = 32402207
}
d = P.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = me(a)
};
d.J = function(a, c) {
  return a.L(a, c, null)
};
d.u = function(a, c, f) {
  return a.L(a, c, f)
};
d.W = function(a, c, f) {
  return ye.c(Cg([this.key, this.val]), c, f)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Cg([this.key, this.val, c])
};
d.Ja = b("key");
d.Wa = b("val");
d.Fb = function(a) {
  return new P(this.key, this.val, this.left, a, null)
};
d.Ra = function() {
  throw Error("red-black tree invariant violation");
};
d.replace = function(a, c, f, g) {
  return new P(a, c, f, g, null)
};
d.Eb = function(a) {
  return new P(this.key, this.val, a, this.right, null)
};
d.Gb = function(a) {
  return this.left instanceof P ? new P(this.key, this.val, this.left.la(), new uh(a.key, a.val, this.right, a.right, null), null) : this.right instanceof P ? new P(this.right.key, this.right.val, new uh(this.key, this.val, this.left, this.right.left, null), new uh(a.key, a.val, this.right.right, a.right, null), null) : t ? new uh(a.key, a.val, this, a.right, null) : null
};
d.Hb = function(a) {
  return this.right instanceof P ? new P(this.key, this.val, new uh(a.key, a.val, a.left, this.left, null), this.right.la(), null) : this.left instanceof P ? new P(this.left.key, this.left.val, new uh(a.key, a.val, a.left, this.left.left, null), new uh(this.key, this.val, this.left.right, this.right, null), null) : t ? new uh(a.key, a.val, a.left, this, null) : null
};
d.la = function() {
  return new uh(this.key, this.val, this.left, this.right, null)
};
d.N = function(a, c) {
  return de.a(a, c)
};
d.O = function(a, c, f) {
  return de.c(a, c, f)
};
d.v = function() {
  return oe.d(H([this.key, this.val], 0))
};
d.F = ba(2);
d.ma = b("val");
d.na = function() {
  return Cg([this.key])
};
d.Na = function(a, c, f) {
  return Tc(Cg([this.key, this.val]), c, f)
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return se(Cg([this.key, this.val]), c)
};
d.B = ba(null);
d.p = function(a, c) {
  return 0 === c ? this.key : 1 === c ? this.val : null
};
d.L = function(a, c, f) {
  return 0 === c ? this.key : 1 === c ? this.val : t ? f : null
};
d.G = function() {
  return Ag
};
var Bh = function Ah(c, f, g, h, k) {
  if(null == f) {
    return new P(g, h, null, null, null)
  }
  var l = c.a ? c.a(g, f.key) : c.call(null, g, f.key);
  return 0 === l ? (k[0] = f, null) : 0 > l ? (c = Ah(c, f.left, g, h, k), null != c ? f.Eb(c) : null) : t ? (c = Ah(c, f.right, g, h, k), null != c ? f.Fb(c) : null) : null
}, Dh = function Ch(c, f) {
  if(null == c) {
    return f
  }
  if(null == f) {
    return c
  }
  if(c instanceof P) {
    if(f instanceof P) {
      var g = Ch(c.right, f.left);
      return g instanceof P ? new P(g.key, g.val, new P(c.key, c.val, c.left, g.left, null), new P(f.key, f.val, g.right, f.right, null), null) : new P(c.key, c.val, c.left, new P(f.key, f.val, g, f.right, null), null)
    }
    return new P(c.key, c.val, c.left, Ch(c.right, f), null)
  }
  return f instanceof P ? new P(f.key, f.val, Ch(c, f.left), f.right, null) : t ? (g = Ch(c.right, f.left), g instanceof P ? new P(g.key, g.val, new uh(c.key, c.val, c.left, g.left, null), new uh(f.key, f.val, g.right, f.right, null), null) : wh(c.key, c.val, c.left, new uh(f.key, f.val, g, f.right, null))) : null
}, Fh = function Eh(c, f, g, h) {
  if(null != f) {
    var k = c.a ? c.a(g, f.key) : c.call(null, g, f.key);
    if(0 === k) {
      return h[0] = f, Dh(f.left, f.right)
    }
    if(0 > k) {
      var l = Eh(c, f.left, g, h);
      return function() {
        var c = null != l;
        return c ? c : null != h[0]
      }() ? f.left instanceof uh ? wh(f.key, f.val, l, f.right) : new P(f.key, f.val, l, f.right, null) : null
    }
    if(t) {
      return l = Eh(c, f.right, g, h), function() {
        var c = null != l;
        return c ? c : null != h[0]
      }() ? f.right instanceof uh ? zh(f.key, f.val, f.left, l) : new P(f.key, f.val, f.left, l, null) : null
    }
  }
  return null
}, Hh = function Gh(c, f, g, h) {
  var k = f.key, l = c.a ? c.a(g, k) : c.call(null, g, k);
  return 0 === l ? f.replace(k, h, f.left, f.right) : 0 > l ? f.replace(k, f.val, Gh(c, f.left, g, h), f.right) : t ? f.replace(k, f.val, f.left, Gh(c, f.right, g, h)) : null
};
function Ih(a, c, f, g, h) {
  this.X = a;
  this.ra = c;
  this.h = f;
  this.i = g;
  this.l = h;
  this.o = 0;
  this.j = 418776847
}
d = Ih.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = pf(a)
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  a = Jh(a, c);
  return null != a ? a.val : f
};
d.W = function(a, c, f) {
  var g = [null], h = Bh(this.X, this.ra, c, f, g);
  return null == h ? (g = M.a(g, 0), I.a(f, g.val) ? a : new Ih(this.X, Hh(this.X, this.ra, c, f), this.h, this.i, null)) : new Ih(this.X, h.la(), this.h + 1, this.i, null)
};
d.Ga = function(a, c) {
  return null != Jh(a, c)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return Ke(c) ? a.W(a, x.a(c, 0), x.a(c, 1)) : Te.c(Ha, a, c)
};
d.Ka = function() {
  return 0 < this.h ? new sh(null, rh(this.ra, null, !1), !1, this.h, null) : null
};
function Jh(a, c) {
  for(var f = a.ra;;) {
    if(null != f) {
      var g = a.X.a ? a.X.a(c, f.key) : a.X.call(null, c, f.key);
      if(0 === g) {
        return f
      }
      if(0 > g) {
        f = f.left
      }else {
        if(t) {
          f = f.right
        }else {
          return null
        }
      }
    }else {
      return null
    }
  }
}
d.yb = function(a, c) {
  return 0 < this.h ? new sh(null, rh(this.ra, null, c), c, this.h, null) : null
};
d.zb = function(a, c, f) {
  if(0 < this.h) {
    a = null;
    for(var g = this.ra;;) {
      if(null != g) {
        var h = this.X.a ? this.X.a(c, g.key) : this.X.call(null, c, g.key);
        if(0 === h) {
          return new sh(null, ue.a(a, g), f, -1, null)
        }
        if(m(f)) {
          0 > h ? (a = ue.a(a, g), g = g.left) : g = g.right
        }else {
          if(t) {
            0 < h ? (a = ue.a(a, g), g = g.right) : g = g.left
          }else {
            return null
          }
        }
      }else {
        return null == a ? null : new sh(null, a, f, -1, null)
      }
    }
  }else {
    return null
  }
};
d.xb = function(a, c) {
  return qf.b ? qf.b(c) : qf.call(null, c)
};
d.wb = b("X");
d.v = function() {
  return 0 < this.h ? new sh(null, rh(this.ra, null, !0), !0, this.h, null) : null
};
d.F = b("h");
d.s = function(a, c) {
  return Rg(a, c)
};
d.D = function(a, c) {
  return new Ih(this.X, this.ra, this.h, c, this.l)
};
d.B = b("i");
d.G = function() {
  return se(Kh, this.i)
};
d.Ia = function(a, c) {
  var f = [null], g = Fh(this.X, this.ra, c, f);
  return null == g ? null == M.a(f, 0) ? a : new Ih(this.X, null, 0, this.i, null) : new Ih(this.X, g.la(), this.h - 1, this.i, null)
};
var Kh = new Ih(Re, null, 0, null, 0), xe = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    for(var c = z(a), h = Fd(Xg);;) {
      if(c) {
        a = G(G(c));
        var k = B(c), c = te(c), h = Nd(h, k, c), c = a
      }else {
        return Md(h)
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Lh = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    a = z(a);
    for(var c = Kh;;) {
      if(a) {
        var h = G(G(a)), c = ye.c(c, B(a), te(a));
        a = h
      }else {
        return c
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
function Mh(a, c) {
  this.fa = a;
  this.ca = c;
  this.o = 0;
  this.j = 32374988
}
d = Mh.prototype;
d.t = function(a) {
  return me(a)
};
d.aa = function() {
  var a = this.fa;
  if(a) {
    var c = a.j & 128, a = (c ? c : a.Pb) ? !0 : a.j ? !1 : r(ob, a)
  }else {
    a = r(ob, a)
  }
  a = a ? this.fa.aa(this.fa) : G(this.fa);
  return null == a ? null : new Mh(a, this.ca)
};
d.A = function(a, c) {
  return J(c, a)
};
d.toString = function() {
  return Sd(this)
};
d.N = function(a, c) {
  return re.a(c, a)
};
d.O = function(a, c, f) {
  return re.c(c, f, a)
};
d.v = aa();
d.P = function() {
  var a = this.fa.P(this.fa);
  return a.Ja(a)
};
d.R = function() {
  var a = this.fa;
  if(a) {
    var c = a.j & 128, a = (c ? c : a.Pb) ? !0 : a.j ? !1 : r(ob, a)
  }else {
    a = r(ob, a)
  }
  a = a ? this.fa.aa(this.fa) : G(this.fa);
  return null != a ? new Mh(a, this.ca) : be
};
d.s = function(a, c) {
  return pe(a, c)
};
d.D = function(a, c) {
  return new Mh(this.fa, c)
};
d.B = b("ca");
d.G = function() {
  return se(be, this.ca)
};
function qf(a) {
  return Bc(a)
}
function rf(a) {
  return Jc(a)
}
function Nh(a, c, f) {
  this.i = a;
  this.wa = c;
  this.l = f;
  this.o = 4;
  this.j = 15077647
}
d = Nh.prototype;
d.Ha = function() {
  return new Oh(Fd(this.wa))
};
d.t = function(a) {
  var c = this.l;
  if(null != c) {
    return c
  }
  a: {
    c = 0;
    for(a = z(a);;) {
      if(a) {
        var f = B(a), c = (c + Zd.b(f)) % 4503599627370496;
        a = G(a)
      }else {
        break a
      }
    }
    c = void 0
  }
  return this.l = c
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  return m(vb(this.wa, c)) ? c : f
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.A = function(a, c) {
  return new Nh(this.i, ye.c(this.wa, c, null), null)
};
d.toString = function() {
  return Sd(this)
};
d.v = function() {
  var a = z(this.wa);
  return a ? new Mh(a, null) : null
};
d.Qb = function(a, c) {
  return new Nh(this.i, zc(this.wa, c), null)
};
d.F = function() {
  return Da(this.wa)
};
d.s = function(a, c) {
  var f = He(c);
  return f ? (f = L(a) === L(c)) ? Qf(function(c) {
    return Qe(a, c)
  }, c) : f : f
};
d.D = function(a, c) {
  return new Nh(c, this.wa, this.l)
};
d.B = b("i");
d.G = function() {
  return se(Ph, this.i)
};
var Ph = new Nh(null, Yg, 0);
function Qh(a) {
  var c = a.length;
  if(c / 2 <= Wg) {
    return new Nh(null, y.a ? y.a(a, !0) : y.call(null, a, !0), null)
  }
  for(var f = 0, g = Fd(Ph);;) {
    if(f < c) {
      var h = f + 2, g = Gd(g, a[f]), f = h
    }else {
      return Md(g)
    }
  }
}
function Oh(a) {
  this.za = a;
  this.j = 259;
  this.o = 136
}
d = Oh.prototype;
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return qb.c(this.za, f, Ne) === Ne ? null : f;
      case 3:
        return qb.c(this.za, f, Ne) === Ne ? g : f
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.J = function(a, c) {
  return a.u(a, c, null)
};
d.u = function(a, c, f) {
  return qb.c(this.za, c, Ne) === Ne ? f : c
};
d.F = function() {
  return L(this.za)
};
d.Da = function(a, c) {
  this.za = Nd(this.za, c, null);
  return a
};
d.Ma = function() {
  return new Nh(null, Md(this.za), null)
};
function yf(a) {
  var c;
  c = a ? ((c = a.o & 4096) ? c : a.rc) ? !0 : !1 : !1;
  if(c) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
var Sh = function Rh(c, f) {
  return new Af(null, function() {
    var g = z(f);
    return g ? m(c.b ? c.b(B(g)) : c.call(null, B(g))) ? J(B(g), Rh(c, C(g))) : null : null
  }, null, null)
};
function Th(a, c, f) {
  return function(g) {
    var h = wd(a);
    return c.a ? c.a(h.a ? h.a(vd(a, g), f) : h.call(null, vd(a, g), f), 0) : c.call(null, h.a ? h.a(vd(a, g), f) : h.call(null, vd(a, g), f), 0)
  }
}
var Uh = function() {
  function a(a, c, f, l, n) {
    var p = ud(a, f, !0);
    if(m(p)) {
      var q = M.c(p, 0, null);
      return Sh(Th(a, l, n), m(Th(a, c, f).call(null, q)) ? p : G(p))
    }
    return null
  }
  function c(a, c, f) {
    var l = Th(a, c, f);
    return m(Qh([We, null, Xe, null]).call(null, c)) ? (a = ud(a, f, !0), m(a) ? (c = M.c(a, 0, null), m(l.b ? l.b(c) : l.call(null, c)) ? a : G(a)) : null) : Sh(l, td(a, !0))
  }
  var f = null, f = function(f, h, k, l, n) {
    switch(arguments.length) {
      case 3:
        return c.call(this, f, h, k);
      case 5:
        return a.call(this, f, h, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = c;
  f.w = a;
  return f
}(), Vh = function() {
  function a(a, c, f, l, n) {
    var p = ud(a, n, !1);
    if(m(p)) {
      var q = M.c(p, 0, null);
      return Sh(Th(a, c, f), m(Th(a, l, n).call(null, q)) ? p : G(p))
    }
    return null
  }
  function c(a, c, f) {
    var l = Th(a, c, f);
    return m(Qh([Ue, null, Ve, null]).call(null, c)) ? (a = ud(a, f, !1), m(a) ? (c = M.c(a, 0, null), m(l.b ? l.b(c) : l.call(null, c)) ? a : G(a)) : null) : Sh(l, td(a, !1))
  }
  var f = null, f = function(f, h, k, l, n) {
    switch(arguments.length) {
      case 3:
        return c.call(this, f, h, k);
      case 5:
        return a.call(this, f, h, k, l, n)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.c = c;
  f.w = a;
  return f
}();
function Wh(a) {
  var c = Xh.exec(a);
  return I.a(B(c), a) ? 1 === L(c) ? B(c) : Dg(c) : null
}
function Yh(a, c) {
  var f = a.exec(c);
  return null == f ? null : 1 === L(f) ? B(f) : Dg(f)
}
function Zh(a) {
  a = Yh(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  M.c(a, 0, null);
  M.c(a, 1, null);
  M.c(a, 2, null)
}
function $h(a, c, f, g, h, k, l) {
  xd(a, f);
  z(l) && (c.c ? c.c(B(l), a, k) : c.call(null, B(l), a, k));
  f = z(G(l));
  l = null;
  for(var n = 0, p = 0;;) {
    if(p < n) {
      var q = l.p(l, p);
      xd(a, g);
      c.c ? c.c(q, a, k) : c.call(null, q, a, k);
      p += 1
    }else {
      if(f = z(f)) {
        l = f, Le(l) ? (f = Pd(l), p = Qd(l), l = f, n = L(f), f = p) : (f = B(l), xd(a, g), c.c ? c.c(f, a, k) : c.call(null, f, a, k), f = G(l), l = null, n = 0), p = 0
      }else {
        break
      }
    }
  }
  return xd(a, h)
}
var ai = function() {
  function a(a, g) {
    var h = null;
    1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, a, h)
  }
  function c(a, c) {
    for(var h = z(c), k = null, l = 0, n = 0;;) {
      if(n < l) {
        var p = k.p(k, n);
        xd(a, p);
        n += 1
      }else {
        if(h = z(h)) {
          k = h, Le(k) ? (h = Pd(k), l = Qd(k), k = h, p = L(h), h = l, l = p) : (p = B(k), xd(a, p), h = G(k), k = null, l = 0), n = 0
        }else {
          return null
        }
      }
    }
  }
  a.k = 1;
  a.f = function(a) {
    var g = B(a);
    a = C(a);
    return c(g, a)
  };
  a.d = c;
  return a
}(), bi = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function ci(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return bi[a]
  })), w('"')].join("")
}
var ei = function di(c, f, g) {
  if(null == c) {
    return xd(f, "nil")
  }
  if(void 0 === c) {
    return xd(f, "#\x3cundefined\x3e")
  }
  if(t) {
    m(function() {
      var f = we.a(g, Vd);
      return m(f) ? (f = c ? ((f = c.j & 131072) ? f : c.bc) ? !0 : c.j ? !1 : r($c, c) : r($c, c), m(f) ? Ce(c) : f) : f
    }()) && (xd(f, "^"), di(Ce(c), f, g), xd(f, " "));
    if(null == c) {
      return xd(f, "nil")
    }
    if(c.Ub) {
      return c.ec(f)
    }
    if(function() {
      var f;
      f = c ? ((f = c.j & 2147483648) ? f : c.I) ? !0 : !1 : !1;
      return f
    }()) {
      return c.q(c, f, g)
    }
    if(function() {
      var f = wa(c) === Boolean;
      return f ? f : "number" === typeof c
    }()) {
      return xd(f, "" + w(c))
    }
    if(c instanceof Array) {
      return $h(f, di, "#\x3cArray [", ", ", "]\x3e", g, c)
    }
    if("string" == typeof c) {
      return m(Ud.call(null, g)) ? xd(f, ci(c)) : xd(f, c)
    }
    if(Ae(c)) {
      return ai.d(f, H(["#\x3c", "" + w(c), "\x3e"], 0))
    }
    if(c instanceof Date) {
      var h = function(c, f) {
        for(var g = "" + w(c);;) {
          if(L(g) < f) {
            g = [w("0"), w(g)].join("")
          }else {
            return g
          }
        }
      };
      return ai.d(f, H(['#inst "', "" + w(c.getUTCFullYear()), "-", h(c.getUTCMonth() + 1, 2), "-", h(c.getUTCDate(), 2), "T", h(c.getUTCHours(), 2), ":", h(c.getUTCMinutes(), 2), ":", h(c.getUTCSeconds(), 2), ".", h(c.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return m(c instanceof RegExp) ? ai.d(f, H(['#"', c.source, '"'], 0)) : function() {
      var f;
      f = c ? ((f = c.j & 2147483648) ? f : c.I) ? !0 : c.j ? !1 : r(zd, c) : r(zd, c);
      return f
    }() ? Ad(c, f, g) : t ? ai.d(f, H(["#\x3c", "" + w(c), "\x3e"], 0)) : null
  }
  return null
}, fi = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = y([Td, !0, Ud, !0, Vd, !1, Wd, !1], !0);
    if(Ge(a)) {
      c = ""
    }else {
      var h = w, k = new sa, l = new Rd(k);
      a: {
        ei(B(a), l, c);
        a = z(G(a));
        for(var n = null, p = 0, q = 0;;) {
          if(q < p) {
            var s = n.p(n, q);
            xd(l, " ");
            ei(s, l, c);
            q += 1
          }else {
            if(a = z(a)) {
              n = a, Le(n) ? (a = Pd(n), p = Qd(n), n = a, s = L(a), a = p, p = s) : (s = B(n), xd(l, " "), ei(s, l, c), a = G(n), n = null, p = 0), q = 0
            }else {
              break a
            }
          }
        }
      }
      yd(l);
      c = "" + h(k)
    }
    return c
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
Mh.prototype.I = !0;
Mh.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
ae.prototype.I = !0;
ae.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
Hg.prototype.I = !0;
Hg.prototype.q = function(a, c, f) {
  return $h(c, ei, "[", " ", "]", f, a)
};
Gf.prototype.I = !0;
Gf.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
Ih.prototype.I = !0;
Ih.prototype.q = function(a, c, f) {
  return $h(c, function(a) {
    return $h(c, ei, "", " ", "", f, a)
  }, "{", ", ", "}", f, a)
};
Ug.prototype.I = !0;
Ug.prototype.q = function(a, c, f) {
  return $h(c, function(a) {
    return $h(c, ei, "", " ", "", f, a)
  }, "{", ", ", "}", f, a)
};
Ng.prototype.I = !0;
Ng.prototype.q = function(a, c, f) {
  return $h(c, ei, "#queue [", " ", "]", f, z(a))
};
Af.prototype.I = !0;
Af.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
ne.prototype.I = !0;
ne.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
mh.prototype.I = !0;
mh.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
P.prototype.I = !0;
P.prototype.q = function(a, c, f) {
  return $h(c, ei, "[", " ", "]", f, a)
};
Fg.prototype.I = !0;
Fg.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
oh.prototype.I = !0;
oh.prototype.q = function(a, c, f) {
  return $h(c, function(a) {
    return $h(c, ei, "", " ", "", f, a)
  }, "{", ", ", "}", f, a)
};
Nh.prototype.I = !0;
Nh.prototype.q = function(a, c, f) {
  return $h(c, ei, "#{", " ", "}", f, a)
};
tg.prototype.I = !0;
tg.prototype.q = function(a, c, f) {
  return $h(c, ei, "[", " ", "]", f, a)
};
sf.prototype.I = !0;
sf.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
Tg.prototype.I = !0;
Tg.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
tf.prototype.I = !0;
tf.prototype.q = function(a, c) {
  return xd(c, "()")
};
uh.prototype.I = !0;
uh.prototype.q = function(a, c, f) {
  return $h(c, ei, "[", " ", "]", f, a)
};
wf.prototype.I = !0;
wf.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
nh.prototype.I = !0;
nh.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
sh.prototype.I = !0;
sh.prototype.q = function(a, c, f) {
  return $h(c, ei, "(", " ", ")", f, a)
};
tg.prototype.Kb = !0;
tg.prototype.Lb = function(a, c) {
  return Se.a(a, c)
};
Hg.prototype.Kb = !0;
Hg.prototype.Lb = function(a, c) {
  return Se.a(a, c)
};
function gi(a, c, f, g) {
  this.state = a;
  this.i = c;
  this.lc = f;
  this.ua = g;
  this.j = 2153938944;
  this.o = 2
}
d = gi.prototype;
d.t = function(a) {
  return a[ha] || (a[ha] = ++ia)
};
d.Bb = function(a, c, f) {
  for(var g = z(this.ua), h = null, k = 0, l = 0;;) {
    if(l < k) {
      var n = h.p(h, l), p = M.c(n, 0, null), n = M.c(n, 1, null);
      n.m ? n.m(p, a, c, f) : n.call(null, p, a, c, f);
      l += 1
    }else {
      if(g = z(g)) {
        Le(g) ? (h = Pd(g), g = Qd(g), p = h, k = L(h), h = p) : (h = B(g), p = M.c(h, 0, null), n = M.c(h, 1, null), n.m ? n.m(p, a, c, f) : n.call(null, p, a, c, f), g = G(g), h = null, k = 0), l = 0
      }else {
        return null
      }
    }
  }
};
d.Ab = function(a, c, f) {
  return a.ua = ye.c(this.ua, c, f)
};
d.q = function(a, c, f) {
  xd(c, "#\x3cAtom: ");
  ei(this.state, c, f);
  return xd(c, "\x3e")
};
d.B = b("i");
d.bb = b("state");
d.s = function(a, c) {
  return a === c
};
var ii = function() {
  function a(a) {
    return new gi(a, null, null, null)
  }
  var c = null, f = function() {
    function a(f, g) {
      var n = null;
      1 < arguments.length && (n = H(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, f, n)
    }
    function c(a, f) {
      var g = Oe(f) ? N.a(xe, f) : f, h = we.a(g, hi), g = we.a(g, Vd);
      return new gi(a, g, h, null)
    }
    a.k = 1;
    a.f = function(a) {
      var f = B(a);
      a = C(a);
      return c(f, a)
    };
    a.d = c;
    return a
  }(), c = function(c, h) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      default:
        return f.d(c, H(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 1;
  c.f = f.f;
  c.b = a;
  c.d = f.d;
  return c
}();
function ji(a, c) {
  var f = a.lc;
  if(m(f) && !m(f.b ? f.b(c) : f.call(null, c))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(fi.d(H([oe(new Xd(null, "validate", "validate", 1233162959, null), new Xd(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  f = a.state;
  a.state = c;
  Bd(a, f, c);
  return c
}
var ki = function() {
  function a(a, c, f, g, h) {
    return ji(a, c.m ? c.m(a.state, f, g, h) : c.call(null, a.state, f, g, h))
  }
  function c(a, c, f, g) {
    return ji(a, c.c ? c.c(a.state, f, g) : c.call(null, a.state, f, g))
  }
  function f(a, c, f) {
    return ji(a, c.a ? c.a(a.state, f) : c.call(null, a.state, f))
  }
  function g(a, c) {
    return ji(a, c.b ? c.b(a.state) : c.call(null, a.state))
  }
  var h = null, k = function() {
    function a(f, g, h, k, l, E) {
      var F = null;
      5 < arguments.length && (F = H(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, f, g, h, k, l, F)
    }
    function c(a, f, g, h, k, l) {
      return ji(a, N.d(f, a.state, g, h, k, H([l], 0)))
    }
    a.k = 5;
    a.f = function(a) {
      var f = B(a);
      a = G(a);
      var g = B(a);
      a = G(a);
      var h = B(a);
      a = G(a);
      var k = B(a);
      a = G(a);
      var l = B(a);
      a = C(a);
      return c(f, g, h, k, l, a)
    };
    a.d = c;
    return a
  }(), h = function(h, n, p, q, s, u) {
    switch(arguments.length) {
      case 2:
        return g.call(this, h, n);
      case 3:
        return f.call(this, h, n, p);
      case 4:
        return c.call(this, h, n, p, q);
      case 5:
        return a.call(this, h, n, p, q, s);
      default:
        return k.d(h, n, p, q, s, H(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  h.k = 5;
  h.f = k.f;
  h.a = g;
  h.c = f;
  h.m = c;
  h.w = a;
  h.d = k.d;
  return h
}();
function li() {
  var a = mi();
  return Zc(a)
}
function ni(a, c, f) {
  Cd(a, c, f)
}
var oi = null, pi = function() {
  function a(a) {
    null == oi && (oi = ii.b(0));
    return $d.b([w(a), w(ki.a(oi, ce))].join(""))
  }
  function c() {
    return f.b("G__")
  }
  var f = null, f = function(f) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.g = c;
  f.b = a;
  return f
}(), qi = {};
function ri(a) {
  if(a ? a.$b : a) {
    return a.$b(a)
  }
  var c;
  c = ri[e(null == a ? null : a)];
  if(!c && (c = ri._, !c)) {
    throw v("IEncodeJS.-clj-\x3ejs", a);
  }
  return c.call(null, a)
}
function si(a) {
  return(a ? m(m(null) ? null : a.Zb) || (a.Tb ? 0 : r(qi, a)) : r(qi, a)) ? ri(a) : function() {
    var c = "string" === typeof a;
    return c || (c = "number" === typeof a) ? c : (c = a instanceof O) ? c : a instanceof Xd
  }() ? ti.b ? ti.b(a) : ti.call(null, a) : fi.d(H([a], 0))
}
var ti = function ui(c) {
  if(null == c) {
    return null
  }
  if(c ? m(m(null) ? null : c.Zb) || (c.Tb ? 0 : r(qi, c)) : r(qi, c)) {
    return ri(c)
  }
  if(c instanceof O) {
    return yf(c)
  }
  if(c instanceof Xd) {
    return"" + w(c)
  }
  if(Je(c)) {
    var f = {};
    c = z(c);
    for(var g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.p(g, k), n = M.c(l, 0, null), l = M.c(l, 1, null);
        f[si(n)] = ui(l);
        k += 1
      }else {
        if(c = z(c)) {
          Le(c) ? (h = Pd(c), c = Qd(c), g = h, h = L(h)) : (h = B(c), g = M.c(h, 0, null), h = M.c(h, 1, null), f[si(g)] = ui(h), c = G(c), g = null, h = 0), k = 0
        }else {
          break
        }
      }
    }
    return f
  }
  f = null == c ? !1 : c ? ((f = c.j & 8) ? f : c.oc) ? !0 : c.j ? !1 : r(Ea, c) : r(Ea, c);
  return f ? N.a(Aa, Wf.a(ui, c)) : t ? c : null
}, vi = null;
function mi() {
  null == vi && (vi = ii.b(y([wi, Yg, xi, Yg, yi, Yg], !0)));
  return vi
}
var zi = function() {
  function a(a, c, k) {
    var l = I.a(c, k);
    if(!l && !(l = Qe(yi.call(null, a).call(null, c), k)) && (l = Ke(k)) && (l = Ke(c))) {
      if(l = L(k) === L(c)) {
        for(var l = !0, n = 0;;) {
          var p = ua(l);
          if(p ? p : n === L(k)) {
            return l
          }
          l = f.c(a, c.b ? c.b(n) : c.call(null, n), k.b ? k.b(n) : k.call(null, n));
          n += 1
        }
      }else {
        return l
      }
    }else {
      return l
    }
  }
  function c(a, c) {
    return f.c(li(), a, c)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}(), Ai = function() {
  function a(a, c) {
    var f = we.a(wi.call(null, a), c);
    return z(f) ? f : null
  }
  function c(a) {
    return f.a(li(), a)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}();
function Bi(a, c, f, g) {
  ki.a(a, function() {
    return Zc(c)
  });
  ki.a(f, function() {
    return Zc(g)
  })
}
var Di = function Ci(c, f, g) {
  var h = Zc(g).call(null, c), h = m(m(h) ? h.b ? h.b(f) : h.call(null, f) : h) ? !0 : null;
  if(m(h)) {
    return h
  }
  h = function() {
    for(var h = Ai.b(f);;) {
      if(0 < L(h)) {
        Ci(c, B(h), g), h = C(h)
      }else {
        return null
      }
    }
  }();
  if(m(h)) {
    return h
  }
  h = function() {
    for(var h = Ai.b(c);;) {
      if(0 < L(h)) {
        Ci(B(h), f, g), h = C(h)
      }else {
        return null
      }
    }
  }();
  return m(h) ? h : !1
};
function Ei(a, c, f) {
  f = Di(a, c, f);
  return m(f) ? f : zi.a(a, c)
}
var Gi = function Fi(c, f, g, h, k, l, n) {
  var p = Te.c(function(h, l) {
    var n = M.c(l, 0, null);
    M.c(l, 1, null);
    if(zi.c(Zc(g), f, n)) {
      var p;
      p = (p = null == h) ? p : Ei(n, B(h), k);
      p = m(p) ? l : h;
      if(!m(Ei(B(p), n, k))) {
        throw Error([w("Multiple methods in multimethod '"), w(c), w("' match dispatch value: "), w(f), w(" -\x3e "), w(n), w(" and "), w(B(p)), w(", and neither is preferred")].join(""));
      }
      return p
    }
    return h
  }, null, Zc(h));
  if(m(p)) {
    if(I.a(Zc(n), Zc(g))) {
      return ki.m(l, ye, f, te(p)), te(p)
    }
    Bi(l, h, n, g);
    return Fi(c, f, g, h, k, l, n)
  }
  return null
};
function Hi(a, c) {
  if(a ? a.Ob : a) {
    return a.Ob(0, c)
  }
  var f;
  f = Hi[e(null == a ? null : a)];
  if(!f && (f = Hi._, !f)) {
    throw v("IMultiFn.-get-method", a);
  }
  return f.call(null, a, c)
}
function Ii(a, c) {
  if(a ? a.Nb : a) {
    return a.Nb(a, c)
  }
  var f;
  f = Ii[e(null == a ? null : a)];
  if(!f && (f = Ii._, !f)) {
    throw v("IMultiFn.-dispatch", a);
  }
  return f.call(null, a, c)
}
function Ji(a, c, f, g, h, k, l, n) {
  this.name = a;
  this.gc = c;
  this.fc = f;
  this.Xa = g;
  this.Qa = h;
  this.jc = k;
  this.Ya = l;
  this.Ua = n;
  this.j = 4194304;
  this.o = 256
}
d = Ji.prototype;
d.t = function(a) {
  return a[ha] || (a[ha] = ++ia)
};
function Ki(a, c) {
  var f = Li;
  ki.m(f.Qa, ye, a, c);
  Bi(f.Ya, f.Qa, f.Ua, f.Xa)
}
d.Ob = function(a, c) {
  I.a(Zc(this.Ua), Zc(this.Xa)) || Bi(this.Ya, this.Qa, this.Ua, this.Xa);
  var f = Zc(this.Ya).call(null, c);
  if(m(f)) {
    return f
  }
  f = Gi(this.name, c, this.Xa, this.Qa, this.jc, this.Ya, this.Ua);
  return m(f) ? f : Zc(this.Qa).call(null, this.fc)
};
d.Nb = function(a, c) {
  var f = this.name, g = N.a(this.gc, c), h = Hi(a, g);
  if(!m(h)) {
    throw Error([w("No method in multimethod '"), w(f), w("' for dispatch value: "), w(g)].join(""));
  }
  return N.a(h, c)
};
d.call = function() {
  function a(a, c) {
    var h = null;
    1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
    return Ii(this, h)
  }
  function c(a, c) {
    return Ii(this, c)
  }
  a.k = 1;
  a.f = function(a) {
    B(a);
    a = C(a);
    return c(0, a)
  };
  a.d = c;
  return a
}();
d.apply = function(a, c) {
  return Ii(this, c)
};
function Mi(a) {
  this.Db = a;
  this.o = 0;
  this.j = 2153775104
}
Mi.prototype.t = function(a) {
  return ra(fi.d(H([a], 0)))
};
Mi.prototype.q = function(a, c) {
  return xd(c, [w('#uuid "'), w(this.Db), w('"')].join(""))
};
Mi.prototype.s = function(a, c) {
  var f = c instanceof Mi;
  return f ? this.Db === c.Db : f
};
var Wd = new O(null, "dup", "dup"), Ni = new O(null, "do-css", "do-css"), Oi = new O(null, "href", "href"), xi = new O(null, "descendants", "descendants"), Pi = new O(null, "default", "default"), Qi = new O(null, "text", "text"), Ri = new O(null, "readonly", "readonly"), Si = new O(null, "do-value", "do-value"), Ti = new O(null, "focus-select", "focus-select"), Ui = new O(null, "scroll-to", "scroll-to"), Vi = new O("tailrecursion.javelin", "none", "tailrecursion.javelin/none"), Wi = new O(null, "on-change", 
"on-change"), Xi = new O(null, "content", "content"), Q = new O(null, "class", "class"), Yi = new O(null, "fade-toggle", "fade-toggle"), Zi = new O(null, "do-class", "do-class"), $i = new O(null, "name", "name"), wi = new O(null, "parents", "parents"), Td = new O(null, "flush-on-newline", "flush-on-newline"), aj = new O(null, "hierarchy", "hierarchy"), bj = new O(null, "style", "style"), cj = new O(null, "media", "media"), dj = new O(null, "max", "max"), ej = new O(null, "focus", "focus"), fj = new O(null, 
"title", "title"), gj = new O(null, "do-toggle", "do-toggle"), yi = new O(null, "ancestors", "ancestors"), hj = new O(null, "toggle", "toggle"), ij = new O(null, "css", "css"), jj = new O(null, "active", "active"), kj = new O(null, "type", "type"), t = new O(null, "else", "else"), Ud = new O(null, "readably", "readably"), lj = new O(null, "background-color", "background-color"), mj = new O(null, "do-scroll-to", "do-scroll-to"), hi = new O(null, "validator", "validator"), Vd = new O(null, "meta", 
"meta"), nj = new O(null, "min", "min"), oj = new O("tailrecursion.hoplon.util", "none", "tailrecursion.hoplon.util/none"), pj = new O("tailrecursion.javelin", "cell", "tailrecursion.javelin/cell"), qj = new O("tailrecursion.priority-map", "not-found", "tailrecursion.priority-map/not-found"), rj = new O(null, "scrollTop", "scrollTop"), sj = new O(null, "id", "id"), tj = new O(null, "value", "value"), uj = new O(null, "select", "select"), vj = new O(null, "attr", "attr"), wj = new O(null, "slide-toggle", 
"slide-toggle"), xj = new O(null, "on-click", "on-click"), yj = new O(null, "rel", "rel");
var zj = function() {
  function a(a, g) {
    var h = null;
    1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, 0, h)
  }
  function c(a, c) {
    throw Error(N.a(w, c));
  }
  a.k = 1;
  a.f = function(a) {
    B(a);
    a = C(a);
    return c(0, a)
  };
  a.d = c;
  return a
}();
Zh("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Zh("([-+]?[0-9]+)/([0-9]+)");
Zh("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Zh("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Zh("[0-9A-Fa-f]{2}");
Zh("[0-9A-Fa-f]{4}");
function Aj(a) {
  if(I.a(3, L(a))) {
    return a
  }
  if(3 < L(a)) {
    return of.c(a, 0, 3)
  }
  if(t) {
    for(a = new sa(a);;) {
      if(3 > a.Aa.length) {
        a = a.append("0")
      }else {
        return a.toString()
      }
    }
  }else {
    return null
  }
}
function Bj(a) {
  var c = 0 === (a % 4 + 4) % 4;
  return m(c) ? (c = ua(0 === (a % 100 + 100) % 100), m(c) ? c : 0 === (a % 400 + 400) % 400) : c
}
var Cj = function() {
  var a = Cg([null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]), c = Cg([null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  return function(f, g) {
    return we.a(m(g) ? c : a, f)
  }
}(), Xh = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Dj(a) {
  a = parseInt(a);
  return ua(isNaN(a)) ? a : null
}
function Ej(a, c, f, g) {
  var h = a <= c;
  (h ? c <= f : h) || zj.d(null, H([[w(g), w(" Failed:  "), w(a), w("\x3c\x3d"), w(c), w("\x3c\x3d"), w(f)].join("")], 0));
  return c
}
function Fj(a) {
  var c = Wh(a);
  M.c(c, 0, null);
  var f = M.c(c, 1, null), g = M.c(c, 2, null), h = M.c(c, 3, null), k = M.c(c, 4, null), l = M.c(c, 5, null), n = M.c(c, 6, null), p = M.c(c, 7, null), q = M.c(c, 8, null), s = M.c(c, 9, null), u = M.c(c, 10, null);
  if(ua(c)) {
    return zj.d(null, H([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0))
  }
  a = Dj(f);
  var c = function() {
    var a = Dj(g);
    return m(a) ? a : 1
  }(), f = function() {
    var a = Dj(h);
    return m(a) ? a : 1
  }(), A = function() {
    var a = Dj(k);
    return m(a) ? a : 0
  }(), E = function() {
    var a = Dj(l);
    return m(a) ? a : 0
  }(), F = function() {
    var a = Dj(n);
    return m(a) ? a : 0
  }(), K = function() {
    var a = Dj(Aj(p));
    return m(a) ? a : 0
  }(), q = (I.a(q, "-") ? -1 : 1) * (60 * function() {
    var a = Dj(s);
    return m(a) ? a : 0
  }() + function() {
    var a = Dj(u);
    return m(a) ? a : 0
  }());
  return Cg([a, Ej(1, c, 12, "timestamp month field must be in range 1..12"), Ej(1, f, Cj.a ? Cj.a(c, Bj(a)) : Cj.call(null, c, Bj(a)), "timestamp day field must be in range 1..last day in month"), Ej(0, A, 23, "timestamp hour field must be in range 0..23"), Ej(0, E, 59, "timestamp minute field must be in range 0..59"), Ej(0, F, I.a(E, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), Ej(0, K, 999, "timestamp millisecond field must be in range 0..999"), q])
}
var Gj = ii.b(y(["inst", function(a) {
  var c;
  if("string" === typeof a) {
    if(c = Fj(a), m(c)) {
      a = M.c(c, 0, null);
      var f = M.c(c, 1, null), g = M.c(c, 2, null), h = M.c(c, 3, null), k = M.c(c, 4, null), l = M.c(c, 5, null), n = M.c(c, 6, null);
      c = M.c(c, 7, null);
      c = new Date(Date.UTC(a, f - 1, g, h, k, l, n) - 6E4 * c)
    }else {
      c = zj.d(null, H([[w("Unrecognized date/time syntax: "), w(a)].join("")], 0))
    }
  }else {
    c = zj.d(null, H(["Instance literal expects a string for its timestamp."], 0))
  }
  return c
}, "uuid", function(a) {
  return"string" === typeof a ? new Mi(a) : zj.d(null, H(["UUID literal expects a string as its representation."], 0))
}, "queue", function(a) {
  return Ke(a) ? fg(Og, a) : zj.d(null, H(["Queue literal expects a vector for its elements."], 0))
}], !0));
ii.b(null);
function Hj(a, c, f, g) {
  this.K = a;
  this.Q = c;
  this.i = f;
  this.l = g;
  this.o = 0;
  this.j = 2565220111
}
d = Hj.prototype;
d.t = function(a) {
  var c = this.l;
  return null != c ? c : this.l = a = pf(a)
};
d.J = function(a, c) {
  return we.a(this.Q, c)
};
d.u = function(a, c, f) {
  return we.c(this.Q, c, f)
};
d.W = function(a, c, f) {
  var g = we.c(this.Q, c, null);
  if(m(g)) {
    if(I.a(g, f)) {
      return a
    }
    a = we.a(this.K, g);
    return I.a(L(a), 1) ? new Hj(ye.c(ze.a(this.K, g), f, ue.a(we.c(this.K, f, Ph), c)), ye.c(this.Q, c, f), this.i, null) : new Hj(ye.d(this.K, g, De.a(we.a(this.K, g), c), H([f, ue.a(we.c(this.K, f, Ph), c)], 0)), ye.c(this.Q, c, f), this.i, null)
  }
  return new Hj(ye.c(this.K, f, ue.a(we.c(this.K, f, Ph), c)), ye.c(this.Q, c, f), this.i, null)
};
d.Ga = function(a, c) {
  return Qe(this.Q, c)
};
d.call = function() {
  var a = null;
  return a = function(a, f, g) {
    switch(arguments.length) {
      case 2:
        return this.J(this, f);
      case 3:
        return this.u(this, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
d.apply = function(a, c) {
  a = this;
  return a.call.apply(a, [a].concat(c.slice()))
};
d.q = function(a, c, f) {
  return $h(c, function(a) {
    return $h(c, ei, "", " ", "", f, a)
  }, "#tailrecursion.priority-map {", ", ", "}", f, a)
};
d.A = function(a, c) {
  return Ke(c) ? a.W(a, x.a(c, 0), x.a(c, 1)) : Te.c(Ha, a, c)
};
d.Ka = function() {
  var a = this;
  return z(function() {
    return function f(a) {
      return new Af(null, function() {
        for(var h = a;;) {
          var k = z(h);
          if(k) {
            var l = k, n = B(l), p = M.c(n, 0, null), q = M.c(n, 1, null);
            if(k = z(function(a, f, g, h, k, l) {
              return function T(n) {
                return new Af(null, function(a, f, g) {
                  return function() {
                    for(;;) {
                      var a = z(n);
                      if(a) {
                        if(Le(a)) {
                          var f = Pd(a), h = L(f), k = Ef(h);
                          a: {
                            for(var l = 0;;) {
                              if(l < h) {
                                var p = x.a(f, l), p = Cg([p, g]);
                                k.add(p);
                                l += 1
                              }else {
                                f = !0;
                                break a
                              }
                            }
                            f = void 0
                          }
                          return f ? Hf(k.S(), T(Qd(a))) : Hf(k.S(), null)
                        }
                        k = B(a);
                        return J(Cg([k, g]), T(C(a)))
                      }
                      return null
                    }
                  }
                }(a, f, g, h, k, l), null, null)
              }
            }(h, n, p, q, l, k)(q))) {
              return Mf.a(k, f(C(h)))
            }
            h = C(h)
          }else {
            return null
          }
        }
      }, null, null)
    }(sd(a.K))
  }())
};
d.yb = function(a, c) {
  return(m(c) ? z : uf).call(null, a)
};
d.zb = function(a, c, f) {
  var g = m(f) ? Uh.c(this.K, Xe, c) : Vh.c(this.K, Ve, c);
  return z(function() {
    return function k(a) {
      return new Af(null, function() {
        for(var c = a;;) {
          var f = z(c);
          if(f) {
            var g = f, s = B(g), u = M.c(s, 0, null), A = M.c(s, 1, null);
            if(f = z(function(a, c, f, g, k, l) {
              return function ga(n) {
                return new Af(null, function(a, c, f) {
                  return function() {
                    for(;;) {
                      var a = z(n);
                      if(a) {
                        if(Le(a)) {
                          var c = Pd(a), g = L(c), k = Ef(g);
                          a: {
                            for(var l = 0;;) {
                              if(l < g) {
                                var p = x.a(c, l), p = Cg([p, f]);
                                k.add(p);
                                l += 1
                              }else {
                                c = !0;
                                break a
                              }
                            }
                            c = void 0
                          }
                          return c ? Hf(k.S(), ga(Qd(a))) : Hf(k.S(), null)
                        }
                        k = B(a);
                        return J(Cg([k, f]), ga(C(a)))
                      }
                      return null
                    }
                  }
                }(a, c, f, g, k, l), null, null)
              }
            }(c, s, u, A, g, f)(A))) {
              return Mf.a(f, k(C(c)))
            }
            c = C(c)
          }else {
            return null
          }
        }
      }, null, null)
    }(g)
  }())
};
d.xb = function(a, c) {
  return Jc(c)
};
d.wb = function() {
  return Re
};
d.v = function() {
  var a = this;
  return z(function() {
    return function f(a) {
      return new Af(null, function() {
        for(var h = a;;) {
          var k = z(h);
          if(k) {
            var l = k, n = B(l), p = M.c(n, 0, null), q = M.c(n, 1, null);
            if(k = z(function(a, f, g, h, k, l) {
              return function T(n) {
                return new Af(null, function(a, f, g) {
                  return function() {
                    for(;;) {
                      var a = z(n);
                      if(a) {
                        if(Le(a)) {
                          var f = Pd(a), h = L(f), k = Ef(h);
                          a: {
                            for(var l = 0;;) {
                              if(l < h) {
                                var p = x.a(f, l), p = Cg([p, g]);
                                k.add(p);
                                l += 1
                              }else {
                                f = !0;
                                break a
                              }
                            }
                            f = void 0
                          }
                          return f ? Hf(k.S(), T(Qd(a))) : Hf(k.S(), null)
                        }
                        k = B(a);
                        return J(Cg([k, g]), T(C(a)))
                      }
                      return null
                    }
                  }
                }(a, f, g, h, k, l), null, null)
              }
            }(h, n, p, q, l, k)(q))) {
              return Mf.a(k, f(C(h)))
            }
            h = C(h)
          }else {
            return null
          }
        }
      }, null, null)
    }(a.K)
  }())
};
d.F = function() {
  return L(this.Q)
};
d.ma = function() {
  if(0 === L(this.Q)) {
    return null
  }
  var a = B(this.K);
  return Cg([B(Jc(a)), Bc(a)])
};
d.na = function() {
  if(0 === L(this.Q)) {
    throw Error("Can't pop empty priority map");
  }
  var a = B(this.K), c = Jc(a), f = B(c), a = Bc(a);
  return I.a(L(c), 1) ? new Hj(ze.a(this.K, a), ze.a(this.Q, f), this.i, null) : new Hj(ye.c(this.K, a, De.a(c, f)), ze.a(this.Q, f), this.i, null)
};
d.s = function(a, c) {
  return ld(this.Q, c)
};
d.D = function(a, c) {
  return new Hj(this.K, this.Q, c, this.l)
};
d.B = b("i");
d.G = function() {
  return se(Ij, this.i)
};
d.Ia = function(a, c) {
  var f = this.Q.a ? this.Q.a(c, qj) : this.Q.call(null, c, qj);
  if(I.a(f, qj)) {
    return a
  }
  var g = this.K.b ? this.K.b(f) : this.K.call(null, f);
  return I.a(L(g), 1) ? new Hj(ze.a(this.K, f), ze.a(this.Q, c), this.i, null) : new Hj(ye.c(this.K, f, De.a(g, c)), ze.a(this.Q, c), this.i, null)
};
var Ij = new Hj(Lh(), Yg, Yg, null), Jj = "" + w("tailrecursion.priority-map");
we.a(Zc(Gj), Jj);
ki.m(Gj, ye, Jj, function(a) {
  return Je(a) ? fg(Ij, a) : zj.d(null, H(["Priority map literal expects a map for its elements."], 0))
});
var Kj = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    a = z(a);
    for(var c = Ij;;) {
      if(a) {
        var h = G(G(a)), c = ye.c(c, B(a), te(a));
        a = h
      }else {
        return c
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
function Lj(a, c) {
  var f = function h(c) {
    var f = Nc(c);
    return m(f) ? new Af(null, function() {
      return J(f, h(fg(Oc(c), m(Rf.b ? Rf.b(f) : Rf.call(null, f)) ? a.b ? a.b(f) : a.call(null, f) : null)))
    }, null, null) : null
  };
  return f.b ? f.b(ue.a(Og, c)) : f.call(null, ue.a(Og, c))
}
var Mj = ii.b(0);
function Nj() {
  return ki.a(Mj, ce)
}
function Oj(a) {
  return m(Pj.b ? Pj.b(a) : Pj.call(null, a)) ? Zc(a) : a
}
function Qj(a) {
  for(var c = Kj.d(H([a, a.ja], 0));;) {
    if(z(c)) {
      a = qf(Nc(c));
      var f = a.Wb.call(null), g = Pf.a(f, a.prev), h = function() {
        return function(a, c) {
          return ye.c(a, c, c.ja)
        }
      }(c, a, f, g), c = Oc(c), k = a.ha;
      g && (a.prev = f);
      c = g ? Te.c(h, c, k) : c
    }else {
      return null
    }
  }
}
function Rj(a) {
  var c = a.Sa;
  a.Sa = Ag;
  for(var c = z(eg(Pj, c)), f = null, g = 0, h = 0;;) {
    if(h < g) {
      var k = f.p(f, h);
      k.ha = De.a(k.ha, a);
      h += 1
    }else {
      if(c = z(c)) {
        f = c, Le(f) ? (c = Pd(f), g = Qd(f), f = c, k = L(c), c = g, g = k) : (k = B(f), k.ha = De.a(k.ha, a), c = G(f), f = null, g = 0), h = 0
      }else {
        break
      }
    }
  }
}
var Sj = function() {
  function a(a, g) {
    var h = null;
    1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, a, h)
  }
  function c(a, c) {
    var h = M.c(c, 0, null), k = M.c(c, 1, null);
    Rj(a);
    a.Sa = m(h) ? ue.a(Dg(k), h) : Dg(k);
    for(var k = z(eg(Pj, a.Sa)), l = null, n = 0, p = 0;;) {
      if(p < n) {
        var q = l.p(l, p);
        q.ha = ue.a(q.ha, a);
        if(q.ja > a.ja) {
          for(var q = z(Lj(function() {
            return function(a) {
              return a.ha
            }
          }(k, l, n, p, q), q)), s = null, u = 0, A = 0;;) {
            if(A < u) {
              s.p(s, A).ja = Nj(), A += 1
            }else {
              if(q = z(q)) {
                s = q, Le(s) ? (q = Pd(s), A = Qd(s), s = q, u = L(q), q = A) : (B(s).ja = Nj(), q = G(s), s = null, u = 0), A = 0
              }else {
                break
              }
            }
          }
        }
        p += 1
      }else {
        if(s = z(k)) {
          q = s;
          if(Le(q)) {
            k = Pd(q), p = Qd(q), l = k, n = L(k), k = p
          }else {
            u = B(q);
            u.ha = ue.a(u.ha, a);
            if(u.ja > a.ja) {
              for(k = z(Lj(function() {
                return function(a) {
                  return a.ha
                }
              }(k, l, n, p, u, q, s), u)), l = null, p = n = 0;;) {
                if(p < n) {
                  l.p(l, p).ja = Nj(), p += 1
                }else {
                  if(k = z(k)) {
                    l = k, Le(l) ? (k = Pd(l), p = Qd(l), l = k, n = L(k), k = p) : (B(l).ja = Nj(), k = G(l), l = null, n = 0), p = 0
                  }else {
                    break
                  }
                }
              }
            }
            k = G(q);
            l = null;
            n = 0
          }
          p = 0
        }else {
          break
        }
      }
    }
    k = function(c) {
      return function() {
        for(var g = a.state, h = c(a.Sa), k = z(ze.a(a.ua, pj)), l = null, n = 0, p = 0;;) {
          if(p < n) {
            var q = l.p(l, p), s = M.c(q, 0, null), q = M.c(q, 1, null);
            q.m ? q.m(s, a, g, h) : q.call(null, s, a, g, h);
            p += 1
          }else {
            if(k = z(k)) {
              Le(k) ? (n = Pd(k), k = Qd(k), l = n, n = L(n)) : (n = B(k), l = M.c(n, 0, null), n = M.c(n, 1, null), n.m ? n.m(l, a, g, h) : n.call(null, l, a, g, h), k = G(k), l = null, n = 0), p = 0
            }else {
              break
            }
          }
        }
        return a.state = h
      }
    }(function(a) {
      return N.a(Oj(Nc(a)), Wf.a(Oj, Oc(a)))
    });
    Cd(a, pj, m(h) ? function() {
      throw Error("formula cell can't be updated via swap! or reset!");
    } : function(a, c) {
      return Qj(c)
    });
    a.hc = m(h) ? !1 : !0;
    a.Wb = m(h) ? k : function() {
      return Zc(a)
    };
    Qj(a);
    return a
  }
  a.k = 1;
  a.f = function(a) {
    var g = B(a);
    a = C(a);
    return c(g, a)
  };
  a.d = c;
  return a
}();
function Tj(a, c, f, g, h, k, l, n, p) {
  this.i = a;
  this.state = c;
  this.ja = f;
  this.prev = g;
  this.Sa = h;
  this.ha = k;
  this.Wb = l;
  this.ua = n;
  this.hc = p;
  this.o = 2;
  this.j = 2147647488
}
d = Tj.prototype;
d.Bb = function(a, c, f) {
  for(var g = z(this.ua), h = null, k = 0, l = 0;;) {
    if(l < k) {
      var n = h.p(h, l), p = M.c(n, 0, null), n = M.c(n, 1, null);
      n.m ? n.m(p, a, c, f) : n.call(null, p, a, c, f);
      l += 1
    }else {
      if(g = z(g)) {
        Le(g) ? (h = Pd(g), g = Qd(g), p = h, k = L(h), h = p) : (h = B(g), p = M.c(h, 0, null), n = M.c(h, 1, null), n.m ? n.m(p, a, c, f) : n.call(null, p, a, c, f), g = G(g), h = null, k = 0), l = 0
      }else {
        return null
      }
    }
  }
};
d.Ab = function(a, c, f) {
  return a.ua = ye.c(this.ua, c, f)
};
d.bb = function(a) {
  return a.state
};
d.B = b("i");
d.q = function(a, c) {
  return ai.d(c, H(["#\x3cCell: ", fi.d(H([this.state], 0)), "\x3e"], 0))
};
function Uj(a) {
  return function() {
    function c(a) {
      var c = null;
      0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
      return f.call(this, c)
    }
    function f(c) {
      return Sj.d(Vj.b ? Vj.b(Vi) : Vj.call(null, Vi), H([a, c], 0))
    }
    c.k = 0;
    c.f = function(a) {
      a = z(a);
      return f(a)
    };
    c.d = f;
    return c
  }()
}
function Vj(a) {
  return Sj(new Tj(Yg, a, Nj(), a, Ag, Ph, null, Yg, null))
}
function Pj(a) {
  return I.a(wa(a), Tj) ? a : null
}
;var Wj, Xj, Yj, Zj;
function ak() {
  return fa.navigator ? fa.navigator.userAgent : null
}
Zj = Yj = Xj = Wj = !1;
var bk;
if(bk = ak()) {
  var ck = fa.navigator;
  Wj = 0 == bk.indexOf("Opera");
  Xj = !Wj && -1 != bk.indexOf("MSIE");
  Yj = !Wj && -1 != bk.indexOf("WebKit");
  Zj = !Wj && !Yj && "Gecko" == ck.product
}
var dk = Xj, ek = Zj, fk = Yj;
function gk() {
  var a = fa.document;
  return a ? a.documentMode : void 0
}
var hk;
a: {
  var ik = "", jk;
  if(Wj && fa.opera) {
    var kk = fa.opera.version, ik = "function" == typeof kk ? kk() : kk
  }else {
    if(ek ? jk = /rv\:([^\);]+)(\)|;)/ : dk ? jk = /MSIE\s+([^\);]+)(\)|;)/ : fk && (jk = /WebKit\/(\S+)/), jk) {
      var lk = jk.exec(ak()), ik = lk ? lk[1] : ""
    }
  }
  if(dk) {
    var mk = gk();
    if(mk > parseFloat(ik)) {
      hk = String(mk);
      break a
    }
  }
  hk = ik
}
var nk = {};
function Ek(a) {
  if(!nk[a]) {
    for(var c = 0, f = String(hk).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(f.length, g.length), k = 0;0 == c && k < h;k++) {
      var l = f[k] || "", n = g[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = p.exec(l) || ["", "", ""], u = q.exec(n) || ["", "", ""];
        if(0 == s[0].length && 0 == u[0].length) {
          break
        }
        c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0)
      }while(0 == c)
    }
    nk[a] = 0 <= c
  }
}
var Fk = fa.document, Gk = Fk && dk ? gk() || ("CSS1Compat" == Fk.compatMode ? parseInt(hk, 10) : 5) : void 0;
if(ek || dk) {
  var Hk;
  if(Hk = dk) {
    Hk = dk && 9 <= Gk
  }
  Hk || ek && Ek("1.9.1")
}
dk && Ek("9");
function Ik(a, c) {
  var f = 0 >= c;
  if(f ? f : c >= 2 + L(a)) {
    return ue.a(Dg(J("", Wf.a(w, z(a)))), "")
  }
  if(I.a ? I.a(1, c) : I.call(null, 1, c)) {
    return Eg.d(H([a], 0))
  }
  if(I.a ? I.a(2, c) : I.call(null, 2, c)) {
    return Eg.d(H(["", a], 0))
  }
  f = c - 2;
  return ue.a(Dg(J("", Gg.c(Dg(Wf.a(w, z(a))), 0, f))), of.a(a, f))
}
var Jk = function() {
  function a(a, c, f) {
    if(I.a("" + w(c), "/(?:)/")) {
      c = Ik(a, f)
    }else {
      if(1 > f) {
        c = Dg(("" + w(a)).split(c))
      }else {
        a: {
          for(var l = f, n = Ag;;) {
            if(I.a(l, 1)) {
              c = ue.a(n, a);
              break a
            }
            var p = Yh(c, a);
            if(m(p)) {
              var q = p, p = a.indexOf(q), q = a.substring(p + L(q)), l = l - 1, n = ue.a(n, a.substring(0, p));
              a = q
            }else {
              c = ue.a(n, a);
              break a
            }
          }
          c = void 0
        }
      }
    }
    if(I.a(0, f)) {
      a: {
        for(f = c;;) {
          if(I.a("", Nc(f))) {
            f = Oc(f)
          }else {
            break a
          }
        }
        f = void 0
      }
    }else {
      f = c
    }
    return f
  }
  function c(a, c) {
    return f.c(a, c, 0)
  }
  var f = null, f = function(f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = c;
  f.c = a;
  return f
}();
var Kk = ua(window.Node), Lk = ua(Kk) ? function(a) {
  return a instanceof Node
} : function(a) {
  try {
    return a.nodeType
  }catch(c) {
    if(c instanceof Error) {
      return null
    }
    if(t) {
      throw c;
    }
    return null
  }
}, Mk = ua(Kk) ? Ke : function(a) {
  try {
    return Ke(a)
  }catch(c) {
    if(c instanceof Error) {
      return null
    }
    if(t) {
      throw c;
    }
    return null
  }
}, Nk = function() {
  function a(a, c) {
    return window.setTimeout(a, c)
  }
  function c(a) {
    return f.a(a, 0)
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}(), Pk = function Ok(c) {
  return cg.a(function(c) {
    return m(Mk.b ? Mk.b(c) : Mk.call(null, c)) ? Ok(c) : Cg([c])
  }, c)
};
function Qk(a, c) {
  return Nk.b(function g() {
    return m(document.documentElement.contains(a)) ? c.g ? c.g() : c.call(null) : Nk.a(g, 20)
  })
}
function Rk(a) {
  var c = M.c(a, 0, null), f = nf(a), g = Sf.a(xf, B), h = function(a) {
    return function(c) {
      return Wf.a(Dg, Sh(a, gg.a(2, c)))
    }
  }(g), g = function(a) {
    return function(c) {
      return cg.a(Rf, $f(a, gg.m(2, 2, Ag, c)))
    }
  }(g, h);
  return Je(c) ? Cg([c, f]) : c instanceof O ? Cg([fg(Yg, h(a)), g(a)]) : t ? Cg([Yg, a]) : null
}
function Sk(a, c) {
  function f(a) {
    return a.substr(0, 3)
  }
  for(var g = function() {
    return function(a) {
      return zf.b(a.substr(3))
    }
  }(f), h = ii.b(Yg), k = ii.b(Yg), l = z(c), n = null, p = 0, q = 0;;) {
    if(q < p) {
      var s = n.p(n, q), u = M.c(s, 0, null), s = M.c(s, 1, null), A = yf(u), u = jQuery(a);
      if(I.a(A, "class")) {
        for(var s = z(Jk.a(s, / /)), A = null, E = 0, F = 0;;) {
          if(F < E) {
            var K = A.p(A, F);
            u.addClass(K);
            F += 1
          }else {
            if(s = z(s)) {
              A = s, Le(A) ? (s = Pd(A), F = Qd(A), A = s, E = L(s), s = F) : (s = B(A), u.addClass(s), s = G(A), A = null, E = 0), F = 0
            }else {
              break
            }
          }
        }
      }else {
        I.a(A, "css") ? u.css(ti(s)) : I.a("do-", f(A)) ? ki.m(h, ye, g(A), s) : I.a("on-", f(A)) ? ki.m(k, ye, g(A), s) : t && (I.a(!1, s) ? u.removeAttr(A) : I.a(!0, s) ? u.attr(A, A) : t && u.attr(A, "" + w(s)))
      }
      q += 1
    }else {
      if(l = z(l)) {
        if(Le(l)) {
          p = Pd(l), l = Qd(l), n = p, p = L(p)
        }else {
          p = B(l);
          n = M.c(p, 0, null);
          p = M.c(p, 1, null);
          q = yf(n);
          n = jQuery(a);
          if(I.a(q, "class")) {
            for(p = z(Jk.a(p, / /)), q = null, s = u = 0;;) {
              if(s < u) {
                A = q.p(q, s), n.addClass(A), s += 1
              }else {
                if(p = z(p)) {
                  q = p, Le(q) ? (p = Pd(q), s = Qd(q), q = p, u = L(p), p = s) : (p = B(q), n.addClass(p), p = G(q), q = null, u = 0), s = 0
                }else {
                  break
                }
              }
            }
          }else {
            I.a(q, "css") ? n.css(ti(p)) : I.a("do-", f(q)) ? ki.m(h, ye, g(q), p) : I.a("on-", f(q)) ? ki.m(k, ye, g(q), p) : t && (I.a(!1, p) ? n.removeAttr(q) : I.a(!0, p) ? n.attr(q, q) : t && n.attr(q, "" + w(p)))
          }
          l = G(l);
          n = null;
          p = 0
        }
        q = 0
      }else {
        break
      }
    }
  }
  z(Zc(k)) && Nk.b(function() {
    for(var c = z(Zc(k)), f = null, g = 0, h = 0;;) {
      if(h < g) {
        var l = f.p(f, h), n = M.c(l, 0, null), l = M.c(l, 1, null);
        Tk.c ? Tk.c(a, n, l) : Tk.call(null, a, n, l);
        h += 1
      }else {
        if(c = z(c)) {
          Le(c) ? (f = Pd(c), c = Qd(c), n = f, g = L(f), f = n) : (f = B(c), n = M.c(f, 0, null), l = M.c(f, 1, null), Tk.c ? Tk.c(a, n, l) : Tk.call(null, a, n, l), c = G(c), f = null, g = 0), h = 0
        }else {
          return null
        }
      }
    }
  });
  z(Zc(h)) && Nk.b(function() {
    for(var c = z(Zc(h)), f = null, g = 0, k = 0;;) {
      if(k < g) {
        var l = f.p(f, k), n = M.c(l, 0, null), p = M.c(l, 1, null);
        Li.c ? Li.c(a, n, Zc(p)) : Li.call(null, a, n, Zc(p));
        ni(p, pi.g(), function(c, f, g, h, k, l) {
          return function(c, f, g, h) {
            return Li.c ? Li.c(a, l, h) : Li.call(null, a, l, h)
          }
        }(c, f, g, k, l, n, p));
        k += 1
      }else {
        var q = z(c);
        if(q) {
          l = q;
          if(Le(l)) {
            c = Pd(l), k = Qd(l), f = c, g = L(c), c = k
          }else {
            var s = B(l), n = M.c(s, 0, null), p = M.c(s, 1, null);
            Li.c ? Li.c(a, n, Zc(p)) : Li.call(null, a, n, Zc(p));
            ni(p, pi.g(), function(c, f, g, h, k, l) {
              return function(c, f, g, h) {
                return Li.c ? Li.c(a, l, h) : Li.call(null, a, l, h)
              }
            }(c, f, g, k, s, n, p, l, q));
            c = G(l);
            f = null;
            g = 0
          }
          k = 0
        }else {
          return null
        }
      }
    }
  })
}
var Uk = ua(Kk) ? function(a, c) {
  return a.appendChild(c)
} : function(a, c) {
  try {
    return a.appendChild(c)
  }catch(f) {
    if(f instanceof Error) {
      return null
    }
    if(t) {
      throw f;
    }
    return null
  }
};
function Vk(a, c) {
  for(var f = z(Vf(function(a) {
    return"string" === typeof a ? Wk.b ? Wk.b(a) : Wk.call(null, a) : m(Lk.b ? Lk.b(a) : Lk.call(null, a)) ? a : null
  }, Pk(c))), g = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = g.p(g, k);
      Uk.a ? Uk.a(a, l) : Uk.call(null, a, l);
      k += 1
    }else {
      if(f = z(f)) {
        g = f, Le(g) ? (f = Pd(g), k = Qd(g), g = f, h = L(f), f = k) : (f = B(g), Uk.a ? Uk.a(a, f) : Uk.call(null, a, f), f = G(g), g = null, h = 0), k = 0
      }else {
        break
      }
    }
  }
}
Element.prototype.call = function() {
  function a(a, g) {
    var h = null;
    1 < arguments.length && (h = H(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, 0, h)
  }
  function c(a, c) {
    var h = Rk(c), k = M.c(h, 0, null), h = M.c(h, 1, null);
    m(this.Vb) ? this.Vb(k, h) : (Sk(this, k), Vk(this, h));
    return this
  }
  a.k = 1;
  a.f = function(a) {
    B(a);
    a = C(a);
    return c(0, a)
  };
  a.d = c;
  return a
}();
Element.prototype.apply = function(a, c) {
  return a.call.apply(a, [a].concat(c.slice()))
};
Element.prototype.I = !0;
Element.prototype.q = function(a, c) {
  return ai.d(c, H(["#\x3cElement: ", a.tagName, "\x3e"], 0))
};
function Xk(a) {
  return function() {
    function c(a) {
      var c = null;
      0 < arguments.length && (c = H(Array.prototype.slice.call(arguments, 0), 0));
      return f.call(this, c)
    }
    function f(c) {
      return N.a(document.createElement(a), c)
    }
    c.k = 0;
    c.f = function(a) {
      a = z(a);
      return f(a)
    };
    c.d = f;
    return c
  }()
}
var Yk = Xk("a"), Zk = Xk("b"), R = Xk("div"), $k = Xk("em"), al = Xk("footer"), bl = Xk("form"), cl = Xk("h1"), dl = Xk("h2"), el = Xk("h3"), fl = Xk("hr"), gl = Xk("input"), hl = Xk("label"), il = Xk("li"), jl = Xk("link"), kl = Xk("meta"), S = Xk("p"), ll = Xk("pre"), ml = Xk("small"), Y = Xk("span"), nl = Xk("title"), ol = Xk("ul");
function Wk(a) {
  return document.createTextNode(a)
}
var pl = ii.b(Ag);
Tf.c(ki, pl, ue);
function ql(a) {
  return Nk.b(function() {
    var c = jQuery("body");
    c.empty();
    for(var f = z(a), g = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = g.p(g, k);
        c.append(l);
        k += 1
      }else {
        if(f = z(f)) {
          g = f, Le(g) ? (f = Pd(g), k = Qd(g), g = f, h = L(f), f = k) : (f = B(g), c.append(f), f = G(g), g = null, h = 0), k = 0
        }else {
          break
        }
      }
    }
    c.on("submit", function(a) {
      return a.preventDefault()
    });
    c = z(Zc(pl));
    f = null;
    for(k = h = 0;;) {
      if(k < h) {
        g = f.p(f, k), g.g ? g.g() : g.call(null), k += 1
      }else {
        if(c = z(c)) {
          f = c, Le(f) ? (c = Pd(f), h = Qd(f), f = c, g = L(c), c = h, h = g) : (g = B(f), g.g ? g.g() : g.call(null), c = G(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  })
}
function rl(a) {
  return Li.a ? Li.a(document.getElementById(yf(a)), tj) : Li.call(null, document.getElementById(yf(a)), tj)
}
var sl = function() {
  function a(a, c) {
    return a.val("" + w(c)).trigger("change")
  }
  function c(a) {
    return a.val()
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}(), tl = function() {
  function a(a, c) {
    return a.prop("checked", Pe(c)).trigger("change")
  }
  function c(a) {
    return a.is(":checked")
  }
  var f = null, f = function(f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, f);
      case 2:
        return a.call(this, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.b = c;
  f.a = a;
  return f
}(), Li = function() {
  var a = ii.b(Yg), c = ii.b(Yg), f = ii.b(Yg), g = ii.b(Yg), h = we.c(Yg, aj, mi());
  return new Ji("do!", function() {
    function a(c, f, g) {
      2 < arguments.length && H(Array.prototype.slice.call(arguments, 2), 0);
      return f
    }
    a.k = 2;
    a.f = function(a) {
      B(a);
      a = G(a);
      var c = B(a);
      C(a);
      return c
    };
    a.d = function(a, c) {
      return c
    };
    return a
  }(), Pi, h, a, c, f, g)
}();
Ki(tj, function() {
  function a(a, g, h) {
    var k = null;
    2 < arguments.length && (k = H(Array.prototype.slice.call(arguments, 2), 0));
    return c.call(this, a, 0, k)
  }
  function c(a, c, h) {
    a = jQuery(a);
    return N.c(I.a("checkbox", a.attr("type")) ? tl : sl, a, h)
  }
  a.k = 2;
  a.f = function(a) {
    var g = B(a);
    a = G(a);
    B(a);
    a = C(a);
    return c(g, 0, a)
  };
  a.d = c;
  return a
}());
Ki(vj, function(a, c, f) {
  return a.b ? a.b(f) : a.call(null, f)
});
Ki(Q, function(a, c, f) {
  a = jQuery(a);
  f = z(f);
  for(var g = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = g.p(g, k);
      c = M.c(l, 0, null);
      l = M.c(l, 1, null);
      a.toggleClass(yf(c), Pe(l));
      k += 1
    }else {
      if(f = z(f)) {
        Le(f) ? (g = Pd(f), f = Qd(f), c = g, h = L(g), g = c) : (g = B(f), c = M.c(g, 0, null), l = M.c(g, 1, null), a.toggleClass(yf(c), Pe(l)), f = G(f), g = null, h = 0), k = 0
      }else {
        return null
      }
    }
  }
});
Ki(ij, function(a, c, f) {
  a = jQuery(a);
  f = z(f);
  for(var g = null, h = 0, k = 0;;) {
    if(k < h) {
      var l = g.p(g, k);
      c = M.c(l, 0, null);
      l = M.c(l, 1, null);
      a.css(yf(c), "" + w(l));
      k += 1
    }else {
      if(f = z(f)) {
        Le(f) ? (g = Pd(f), f = Qd(f), c = g, h = L(g), g = c) : (g = B(f), c = M.c(g, 0, null), l = M.c(g, 1, null), a.css(yf(c), "" + w(l)), f = G(f), g = null, h = 0), k = 0
      }else {
        return null
      }
    }
  }
});
Ki(hj, function(a, c, f) {
  return jQuery(a).toggle(Pe(f))
});
Ki(wj, function(a, c, f) {
  return m(f) ? jQuery(a).hide().slideDown("fast") : jQuery(a).slideUp("fast")
});
Ki(Yi, function(a, c, f) {
  return m(f) ? jQuery(a).hide().fadeIn("fast") : jQuery(a).fadeOut("fast")
});
Ki(ej, function(a, c, f) {
  return m(f) ? Nk.b(function() {
    return jQuery(a).focus()
  }) : Nk.b(function() {
    return jQuery(a).focusout()
  })
});
Ki(uj, function(a) {
  return jQuery(a).select()
});
Ki(Ti, function(a, c, f) {
  return m(f) ? (Li.c ? Li.c(a, ej, f) : Li.call(null, a, ej, f), Li.c ? Li.c(a, uj, f) : Li.call(null, a, uj, f)) : null
});
Ki(Qi, function(a, c, f) {
  return jQuery(a).text("" + w(f))
});
Ki(Ui, function(a, c, f) {
  return m(f) ? (c = jQuery("body"), a = jQuery(a), c.animate(ti(y([rj, a.offset().top], !0)))) : null
});
function Tk(a, c, f) {
  return Qk(a, function() {
    return jQuery(a).on(yf(c), f)
  })
}
;var ul = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "row") : R.call(null, Q, "row"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), vl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "col-md-2") : R.call(null, Q, "col-md-2"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), wl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "col-md-4") : R.call(null, Q, "col-md-4"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), xl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "col-md-6") : R.call(null, Q, "col-md-6"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), yl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "col-md-8") : R.call(null, Q, "col-md-8"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
var zl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    a = Rk(a);
    M.c(a, 0, null);
    a = M.c(a, 1, null);
    return kl.m ? kl.m($i, "viewport", Xi, B(a)) : kl.call(null, $i, "viewport", Xi, B(a))
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Al = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    a = Rk(a);
    M.c(a, 0, null);
    a = M.c(a, 1, null);
    return kl.m ? kl.m($i, "description", Xi, B(a)) : kl.call(null, $i, "description", Xi, B(a))
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
function Bl() {
  return Eg.c ? Eg.c(zl.b ? zl.b("width\x3ddevice-width, initial-scale\x3d1.0") : zl.call(null, "width\x3ddevice-width, initial-scale\x3d1.0"), jl.T ? jl.T(Oi, "css/bootstrap.min.css", yj, "stylesheet", cj, "screen") : jl.call(null, Oi, "css/bootstrap.min.css", yj, "stylesheet", cj, "screen"), jl.T ? jl.T(Oi, "css/starter-template.css", yj, "stylesheet", cj, "screen") : jl.call(null, Oi, "css/starter-template.css", yj, "stylesheet", cj, "screen")) : Eg.call(null, zl.b ? zl.b("width\x3ddevice-width, initial-scale\x3d1.0") : 
  zl.call(null, "width\x3ddevice-width, initial-scale\x3d1.0"), jl.T ? jl.T(Oi, "css/bootstrap.min.css", yj, "stylesheet", cj, "screen") : jl.call(null, Oi, "css/bootstrap.min.css", yj, "stylesheet", cj, "screen"), jl.T ? jl.T(Oi, "css/starter-template.css", yj, "stylesheet", cj, "screen") : jl.call(null, Oi, "css/starter-template.css", yj, "stylesheet", cj, "screen"))
}
var Cl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "container") : R.call(null, Q, "container"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Dl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.m ? R.m(Q, "jumbotron", bj, "background-color:#ffcc33") : R.call(null, Q, "jumbotron", bj, "background-color:#ffcc33"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
function El(a) {
  return of.a(a.href, a.href.indexOf("#"))
}
function Fl(a, c) {
  var f = El(a);
  return I.a(f, of.c(c, 0, L(f)))
}
var Gl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "navbar navbar-inverse") : R.call(null, Q, "navbar navbar-inverse"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Hl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "navbar-header") : R.call(null, Q, "navbar-header"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Il = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "collapse navbar-collapse") : R.call(null, Q, "collapse navbar-collapse"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Jl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(ol.a ? ol.a(Q, "nav navbar-nav") : ol.call(null, Q, "nav navbar-nav"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Kl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(Yk.a ? Yk.a(Q, "navbar-brand") : Yk.call(null, Q, "navbar-brand"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Ll = function() {
  function a(a, g, h) {
    var k = null;
    2 < arguments.length && (k = H(Array.prototype.slice.call(arguments, 2), 0));
    return c.call(this, a, g, k)
  }
  function c(a, c, h) {
    return Gl.d(H([Q, "navbar-fixed-top"], 0)).call(null, Cl.d(H([Hl.d(H([Kl.d(H([Oi, El(B(h)), c], 0))], 0)), Il.d(H([N.a(Jl(), Wf.a(function(c) {
      return il.c ? il.c(Zi, Uj(function(a, c, f) {
        return y([jj, c.a ? c.a(f, a) : c.call(null, f, a)], !0)
      }).call(null, a, Fl, c), c) : il.call(null, Zi, Uj(function(a, c, f) {
        return y([jj, c.a ? c.a(f, a) : c.call(null, f, a)], !0)
      }).call(null, a, Fl, c), c)
    }, h))], 0))], 0)))
  }
  a.k = 2;
  a.f = function(a) {
    var g = B(a);
    a = G(a);
    var h = B(a);
    a = C(a);
    return c(g, h, a)
  };
  a.d = c;
  return a
}();
var Ml = function() {
  function a(a, g, h, k) {
    var l = null;
    3 < arguments.length && (l = H(Array.prototype.slice.call(arguments, 3), 0));
    return c.call(this, a, g, h, l)
  }
  function c(a, c, h, k) {
    return fg(Cg([function() {
      return Eg.c ? Eg.c(Bl(), nl.b ? nl.b(c) : nl.call(null, c), Al.d(H([h], 0))) : Eg.call(null, Bl(), nl.b ? nl.b(c) : nl.call(null, c), Al.d(H([h], 0)))
    }, N.m(Ll, a, c, Wf.a(B, k))]), Wf.a(function(c) {
      var g = M.c(c, 0, null);
      c = M.c(c, 1, null);
      return c.a ? c.a(gj, Uj(function(a, c, f) {
        return f.a ? f.a(c, a) : f.call(null, c, a)
      }).call(null, a, g, Fl)) : c.call(null, gj, Uj(function(a, c, f) {
        return f.a ? f.a(c, a) : f.call(null, c, a)
      }).call(null, a, g, Fl))
    }, k))
  }
  a.k = 3;
  a.f = function(a) {
    var g = B(a);
    a = G(a);
    var h = B(a);
    a = G(a);
    var k = B(a);
    a = C(a);
    return c(g, h, k, a)
  };
  a.d = c;
  return a
}();
function Nl() {
  var a = Vj(window.location.hash);
  window.setInterval(function() {
    var c = window.location.hash;
    return ji(a, Ge(c) ? "#/home/" : c)
  }, 10);
  return a
}
ii.b(oj);
var Ol = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(Yk.a ? Yk.a(Q, "btn btn-large btn-primary") : Yk.call(null, Q, "btn btn-large btn-primary"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
var Pl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(ol.a ? ol.a(Q, "list-group") : ol.call(null, Q, "list-group"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Ql = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(il.a ? il.a(Q, "list-group-item") : il.call(null, Q, "list-group-item"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
var Rl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "panel panel-default") : R.call(null, Q, "panel panel-default"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}(), Sl = function() {
  function a(a) {
    var g = null;
    0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, g)
  }
  function c(a) {
    var c = Rk(a);
    a = M.c(c, 0, null);
    c = M.c(c, 1, null);
    return N.c(R.a ? R.a(Q, "panel-body") : R.call(null, Q, "panel-body"), a, c)
  }
  a.k = 0;
  a.f = function(a) {
    a = z(a);
    return c(a)
  };
  a.d = c;
  return a
}();
var Tl, Ul, Vl, Wl, Xl, Yl, Zl, $l, am, bm, cm, dm, em;
function fm() {
  Tl = Nl();
  Ul = Ml.d(Tl, "Bootstrap Test", "Hoplon demo testing Twitter Bootstrap library design.", H([Cg([Yk.c ? Yk.c(Oi, "#/home/", "Home") : Yk.call(null, Oi, "#/home/", "Home"), R.g ? R.g() : R.call(null)]), Cg([Yk.c ? Yk.c(Oi, "#/getting-started/", "Getting Started") : Yk.call(null, Oi, "#/getting-started/", "Getting Started"), Cl()]), Cg([Yk.c ? Yk.c(Oi, "#/about/", "About") : Yk.call(null, Oi, "#/about/", "About"), Cl()]), Cg([Yk.c ? Yk.c(Oi, "#/contact/", "Contact") : Yk.call(null, Oi, "#/contact/", 
  "Contact"), Cl()])], 0));
  M.c(Ul, 0, null);
  Vl = M.c(Ul, 1, null);
  Wl = M.c(Ul, 2, null);
  Xl = M.c(Ul, 3, null);
  Yl = M.c(Ul, 4, null);
  Zl = M.c(Ul, 5, null);
  $l = Vj(1);
  am = Vj(180);
  bm = Vj(800);
  cm = function() {
    function a(a) {
      var g = null;
      0 < arguments.length && (g = H(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, g)
    }
    function c(a) {
      var c = Rk(a);
      a = M.c(c, 0, null);
      var c = M.c(c, 1, null), h = Zk.g ? Zk.g() : Zk.call(null), k = ol.g ? ol.g() : ol.call(null), l = R.m ? R.m(Q, "my-list", h.g ? h.g() : h.call(null), k.g ? k.g() : k.call(null)) : R.call(null, Q, "my-list", h.g ? h.g() : h.call(null), k.g ? k.g() : k.call(null));
      l.Vb = function(a, c) {
        var f = Oe(a) ? N.a(xe, a) : a, g = we.a(f, fj);
        m(g) && (Li.c ? Li.c(h, Qi, g) : Li.call(null, h, Qi, g));
        Sk(l, ze.a(f, fj));
        return N.a(k, Wf.a(il, c))
      };
      return N.c(l, a, c)
    }
    a.k = 0;
    a.f = function(a) {
      a = z(a);
      return c(a)
    };
    a.d = c;
    return a
  }();
  dm = Uj(function(a, c) {
    var f = c / 100;
    return a / 10 / (f * f)
  }).call(null, bm, am);
  em = Uj(function(a) {
    return m(18.5 > a) ? Cg(["underweight", "orange"]) : m(25 > a) ? Cg(["normal", "inherit"]) : m(30 > a) ? Cg(["overweight", "orange"]) : t ? Cg(["obese", "red"]) : null
  }).call(null, dm);
  return ql(Cg([Vl.g ? Vl.g() : Vl.call(null), function() {
    var a = Wl.g ? Wl.g() : Wl.call(null), c = Dl(), f = Cl(), g = cl.b ? cl.b("Hoplon") : cl.call(null, "Hoplon"), h = f.b ? f.b(g) : f.call(null, g), k = S.b ? S.b("A simpler way to program the web.") : S.call(null, "A simpler way to program the web."), l = f.b ? f.b(k) : f.call(null, k), n = S.g ? S.g() : S.call(null), p = Ol.d(H([y([Oi, "#/getting-started/"], !0), "Get started \u00bb"], 0)), q = n.b ? n.b(p) : n.call(null, p), s = f.b ? f.b(n) : f.call(null, n), u = c.b ? c.b(f) : c.call(null, 
    f), A = a.b ? a.b(c) : a.call(null, c), E = Cl(), F = ul(), K = wl(), U = dl.b ? dl.b("Clojure, everywhere.") : dl.call(null, "Clojure, everywhere."), T = K.b ? K.b(U) : K.call(null, U), Z = S.b ? S.b("Write everything in Clojure and ClojureScript, clientside and\n               serverside. Even the page markup is ClojureScript that is\n               evaluated to produce the DOM. Pages can still be written using\n               the familiar HTML syntax if desired.") : S.call(null, "Write everything in Clojure and ClojureScript, clientside and\n               serverside. Even the page markup is ClojureScript that is\n               evaluated to produce the DOM. Pages can still be written using\n               the familiar HTML syntax if desired."), 
    ea = K.b ? K.b(Z) : K.call(null, Z), ga = F.b ? F.b(K) : F.call(null, K), ca = wl(), Ka = dl.b ? dl.b("Simplicity on the client.") : dl.call(null, "Simplicity on the client."), rb = ca.b ? ca.b(Ka) : ca.call(null, Ka), La = S.b ? S.b("Use a spreadsheet-like dataflow programming environment to\n               manage client state. Develop basic content-oriented pages and\n               complex thick-client applications without descending into\n               \u201ccallback hell\u201d.") : S.call(null, 
    "Use a spreadsheet-like dataflow programming environment to\n               manage client state. Develop basic content-oriented pages and\n               complex thick-client applications without descending into\n               \u201ccallback hell\u201d."), sb = ca.b ? ca.b(La) : ca.call(null, La), tb = F.b ? F.b(ca) : F.call(null, ca), ja = wl(), Ma = dl.b ? dl.b("Simplicity on the server.") : dl.call(null, "Simplicity on the server."), ub = ja.b ? ja.b(Ma) : ja.call(null, Ma), Na = S.b ? S.b("Decouple business logic from HTTP-related concerns while\n               satisfying complex, fine-grained authorization requirements\n               with transparent, performant transfer of Clojure data between\n               server and client.") : 
    S.call(null, "Decouple business logic from HTTP-related concerns while\n               satisfying complex, fine-grained authorization requirements\n               with transparent, performant transfer of Clojure data between\n               server and client."), wb = ja.b ? ja.b(Na) : ja.call(null, Na), xb = F.b ? F.b(ja) : F.call(null, ja), yb = E.b ? E.b(F) : E.call(null, F), Oa = fl.g ? fl.g() : fl.call(null), zb = E.b ? E.b(Oa) : E.call(null, Oa), ka = ul(), D = xl(), la = dl.g ? dl.g() : 
    dl.call(null), Ab = la.b ? la.b("Spreadsheets ") : la.call(null, "Spreadsheets "), Pa = ml.b ? ml.b("Client state made simple.") : ml.call(null, "Client state made simple."), Bb = la.b ? la.b(Pa) : la.call(null, Pa), Cb = D.b ? D.b(la) : D.call(null, la), Qa = S.b ? S.b("Remember how awesome spreadsheets are? You never think about\n               state when you\u2019re programming a spreadsheet. Instead, you focus\n               on values and the formulas that define the relationships between\n               them. When a new value is entered into a cell the rest of the \n               spreadsheet updates itself as necessary to maintain the\n               correctness of the formulas.") : 
    S.call(null, "Remember how awesome spreadsheets are? You never think about\n               state when you\u2019re programming a spreadsheet. Instead, you focus\n               on values and the formulas that define the relationships between\n               them. When a new value is entered into a cell the rest of the \n               spreadsheet updates itself as necessary to maintain the\n               correctness of the formulas."), Db = D.b ? D.b(Qa) : D.call(null, Qa), Ra = S.b ? S.b("After a spreadsheet is set up you can link its cells to charts\n               and forms to create a user interface that manages its own state,\n               automatically. User input flows from forms to input cells.\n               Formulas then recompute their values as necessary. These values\n               then flow to charts and graphs for the user to view.") : 
    S.call(null, "After a spreadsheet is set up you can link its cells to charts\n               and forms to create a user interface that manages its own state,\n               automatically. User input flows from forms to input cells.\n               Formulas then recompute their values as necessary. These values\n               then flow to charts and graphs for the user to view."), Eb = D.b ? D.b(Ra) : D.call(null, Ra), W = S.g ? S.g() : S.call(null), Fb = W.b ? W.b("Hoplon applies this crazy, futuristic technology to frontend\n               web development. Forgoing the clunky grid metaphor and names\n               like ") : 
    W.call(null, "Hoplon applies this crazy, futuristic technology to frontend\n               web development. Forgoing the clunky grid metaphor and names\n               like "), Sa = $k.b ? $k.b("A1") : $k.call(null, "A1"), Gb = W.b ? W.b(Sa) : W.call(null, Sa), Hb = W.b ? W.b(" and ") : W.call(null, " and "), Ta = $k.b ? $k.b("B27") : $k.call(null, "B27"), Ib = W.b ? W.b(Ta) : W.call(null, Ta), Jb = W.b ? W.b(", Hoplon provides a cell\n               reference type. These cells, like cells in a spreadsheet, are\n               either updated directly (input cells), or automatically in\n               accordance with a formula.") : 
    W.call(null, ", Hoplon provides a cell\n               reference type. These cells, like cells in a spreadsheet, are\n               either updated directly (input cells), or automatically in\n               accordance with a formula."), Kb = D.b ? D.b(W) : D.call(null, W), Ua = fl.g ? fl.g() : fl.call(null), Lb = D.b ? D.b(Ua) : D.call(null, Ua), ma = dl.g ? dl.g() : dl.call(null), Mb = ma.b ? ma.b("Charts and Forms ") : ma.call(null, "Charts and Forms "), Va = ml.b ? ml.b("Stateless, automatic UI.") : 
    ml.call(null, "Stateless, automatic UI."), Nb = ma.b ? ma.b(Va) : ma.call(null, Va), Ob = D.b ? D.b(ma) : D.call(null, ma), Wa = S.b ? S.b("The purpose of a program's user interface is to transmit input\n               from the user to the underlying state model and to present output\n               derived from the underlying state model to the user for viewing.") : S.call(null, "The purpose of a program's user interface is to transmit input\n               from the user to the underlying state model and to present output\n               derived from the underlying state model to the user for viewing."), 
    Pb = D.b ? D.b(Wa) : D.call(null, Wa), X = S.g ? S.g() : S.call(null), Qb = X.b ? X.b("In a web application the user interface is derived from the page\n               markup. User input consists entirely of DOM events: ") : X.call(null, "In a web application the user interface is derived from the page\n               markup. User input consists entirely of DOM events: "), Xa = $k.b ? $k.b("click") : $k.call(null, "click"), Rb = X.b ? X.b(Xa) : X.call(null, Xa), Sb = X.b ? X.b(", ") : X.call(null, 
    ", "), Ya = $k.b ? $k.b("change") : $k.call(null, "change"), Tb = X.b ? X.b(Ya) : X.call(null, Ya), Ub = X.b ? X.b(", etc. Output is presented to\n               the user by manipulating the properties of DOM elements: adding\n               or removing CSS classes, changing the content of text nodes, \n               etc.") : X.call(null, ", etc. Output is presented to\n               the user by manipulating the properties of DOM elements: adding\n               or removing CSS classes, changing the content of text nodes, \n               etc."), 
    Vb = D.b ? D.b(X) : D.call(null, X), Za = S.b ? S.b("Hoplon provides bindings that can be used to link DOM elements\n               to the underlying state model in the same way that charts and\n               forms are linked to cells in a spreadsheet. Once the structure\n               of the DOM and the linkages between the DOM and cells are\n               defined, the user interface manages itself.") : S.call(null, "Hoplon provides bindings that can be used to link DOM elements\n               to the underlying state model in the same way that charts and\n               forms are linked to cells in a spreadsheet. Once the structure\n               of the DOM and the linkages between the DOM and cells are\n               defined, the user interface manages itself."), 
    Wb = D.b ? D.b(Za) : D.call(null, Za), $a = fl.g ? fl.g() : fl.call(null), Xb = D.b ? D.b($a) : D.call(null, $a), na = dl.g ? dl.g() : dl.call(null), Yb = na.b ? na.b("Page Markup ") : na.call(null, "Page Markup "), ab = ml.b ? ml.b("The DOM is a program.") : ml.call(null, "The DOM is a program."), Zb = na.b ? na.b(ab) : na.call(null, ab), $b = D.b ? D.b(na) : D.call(null, na), bb = S.b ? S.b("Imagine a programming environment in which variables cannot\n               have names. Instead they have \u201cproperties\u201d and are stored in a\n               global tree structure. When the program wants to access a\n               variable it must walk the tree and find it by matching property\n               values. Everything is in the global scope, and everything is\n               mutable.") : 
    S.call(null, "Imagine a programming environment in which variables cannot\n               have names. Instead they have \u201cproperties\u201d and are stored in a\n               global tree structure. When the program wants to access a\n               variable it must walk the tree and find it by matching property\n               values. Everything is in the global scope, and everything is\n               mutable."), ac = D.b ? D.b(bb) : D.call(null, bb), cb = S.b ? S.b("Insane, you say? Unfortunately, this is the state of affairs\n               confronting the frontend developer working with page markup.") : 
    S.call(null, "Insane, you say? Unfortunately, this is the state of affairs\n               confronting the frontend developer working with page markup."), bc = D.b ? D.b(cb) : D.call(null, cb), db = S.b ? S.b("The markup is the literal representation of the DOM. However,\n               it completely lacks the most basic affordances of a useful\n               programming language. For example, there is no way to refer to\n               DOM elements or objects that exist in the page\u2019s JavaScript\n               environment in the markup, and there is no way to create \n               reusable components that can be instantiated there.") : 
    S.call(null, "The markup is the literal representation of the DOM. However,\n               it completely lacks the most basic affordances of a useful\n               programming language. For example, there is no way to refer to\n               DOM elements or objects that exist in the page\u2019s JavaScript\n               environment in the markup, and there is no way to create \n               reusable components that can be instantiated there."), cc = D.b ? D.b(db) : D.call(null, db), eb = 
    S.b ? S.b("The reason for this condition is that the markup is merely a\n               static, as-data specification. The evaluation model is\n               rudimentary\u2013\u2013wholly unsuited to building layered component\n               hierarchies.") : S.call(null, "The reason for this condition is that the markup is merely a\n               static, as-data specification. The evaluation model is\n               rudimentary\u2013\u2013wholly unsuited to building layered component\n               hierarchies."), 
    dc = D.b ? D.b(eb) : D.call(null, eb), da = S.g ? S.g() : S.call(null), ec = da.b ? da.b("Hoplon addresses these issues by extending the DOM evaluation\n               model. Hoplon pages are ClojureScript programs that run in the\n               browser; the page markup is a ClojureScript expression. Tags in\n               the markup are DOM elements and nested elements are applied to\n               them as arguments (DOM elements implement the ") : da.call(null, "Hoplon addresses these issues by extending the DOM evaluation\n               model. Hoplon pages are ClojureScript programs that run in the\n               browser; the page markup is a ClojureScript expression. Tags in\n               the markup are DOM elements and nested elements are applied to\n               them as arguments (DOM elements implement the "), 
    fb = $k.b ? $k.b("IFn") : $k.call(null, "IFn"), fc = da.b ? da.b(fb) : da.call(null, fb), gc = da.b ? da.b(" protocol). The syntactic correspondence between HTML markup\n               and ClojureScript s-expressions facilitates writing page markup\n               in either format, so integration with pre-existing dev tools is\n               as straightforward as possible.") : da.call(null, " protocol). The syntactic correspondence between HTML markup\n               and ClojureScript s-expressions facilitates writing page markup\n               in either format, so integration with pre-existing dev tools is\n               as straightforward as possible."), 
    hc = D.b ? D.b(da) : D.call(null, da), gb = fl.g ? fl.g() : fl.call(null), ic = D.b ? D.b(gb) : D.call(null, gb), oa = dl.g ? dl.g() : dl.call(null), jc = oa.b ? oa.b("Components ") : oa.call(null, "Components "), hb = ml.b ? ml.b("First-class custom DOM elements.") : ml.call(null, "First-class custom DOM elements."), kc = oa.b ? oa.b(hb) : oa.call(null, hb), lc = D.b ? D.b(oa) : D.call(null, oa), ib = S.b ? S.b("While there is no shortage of templating systems to create\n               blobs of DOM elements, there is no mechanism to create custom\n               elements that are composable in any meaningful way. And the\n               literal representation of these templates? Nothing. Forget about\n               it.") : 
    S.call(null, "While there is no shortage of templating systems to create\n               blobs of DOM elements, there is no mechanism to create custom\n               elements that are composable in any meaningful way. And the\n               literal representation of these templates? Nothing. Forget about\n               it."), mc = D.b ? D.b(ib) : D.call(null, ib), jb = S.b ? S.b("Hoplon provides facilities for creating real, first-class\n               components. That is to say, Hoplon components are first-class\n               citizens in the DOM world\u2013\u2013they are, essentially, user-defined\n               custom DOM elements. They have a literal representation in the\n               page markup and they implement the semantics of HTML: setting\n               attributes and appending children.") : 
    S.call(null, "Hoplon provides facilities for creating real, first-class\n               components. That is to say, Hoplon components are first-class\n               citizens in the DOM world\u2013\u2013they are, essentially, user-defined\n               custom DOM elements. They have a literal representation in the\n               page markup and they implement the semantics of HTML: setting\n               attributes and appending children."), nc = D.b ? D.b(jb) : D.call(null, jb), oc = ka.b ? 
    ka.b(D) : ka.call(null, D), pa = xl(), za = dl.g ? dl.g() : dl.call(null), kb = ml.b ? ml.b("Examples") : ml.call(null, "Examples"), pc = za.b ? za.b(kb) : za.call(null, kb), qc = pa.b ? pa.b(za) : pa.call(null, za), qa = Pl(), va = Ql.d(H([y([xj, function() {
      return function() {
        return ji($l, 1)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa)], !0)], 0)), lb = Yk.b ? Yk.b(y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 1) : a.call(null, c, 1)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va)).call(null, Pf, $l)], !0)) : Yk.call(null, y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 1) : a.call(null, c, 1)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va)).call(null, Pf, $l)], !0)), xc = el.a ? el.a(y([Q, "panel-title"], 
    !0), "BMI Calculator") : el.call(null, y([Q, "panel-title"], !0), "BMI Calculator"), Cc = lb.b ? lb.b(xc) : lb.call(null, xc), Dc = va.b ? va.b(lb) : va.call(null, lb), V = R.b ? R.b(y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 1) : a.call(null, c, 1)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc)).call(null, I, $l)], !0)) : R.call(null, 
    y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 1) : a.call(null, c, 1)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc)).call(null, I, $l)], !0)), Ec = el.a ? 
    el.a(y([Q, "panel-title"], !0), "BMI Calculator") : el.call(null, y([Q, "panel-title"], !0), "BMI Calculator"), Pc = V.b ? V.b(Ec) : V.call(null, Ec), Fc = fl.g ? fl.g() : fl.call(null), Qc = V.b ? V.b(Fc) : V.call(null, Fc), Gc = S.a ? S.a(y([Q, "text-muted"], !0), "The demo:") : S.call(null, y([Q, "text-muted"], !0), "The demo:"), Rc = V.b ? V.b(Gc) : V.call(null, Gc), rc = Rl(), sc = Sl(), tc = R.g ? R.g() : R.call(null), ya = bl.g ? bl.g() : bl.call(null), Fa = R.b ? R.b(y([Q, "form-group"], 
    !0)) : R.call(null, y([Q, "form-group"], !0)), uc = hl.g ? hl.g() : hl.call(null), Kc = function() {
      var Hd = document.createTextNode("");
      Uj(function() {
        return function(a, c) {
          return a.nodeValue = [w("Height ("), w(c), w(" cm)")].join("")
        }
      }(Hd, a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, 
      sc, tc, ya, Fa, uc)).call(null, Hd, am);
      return Hd
    }(), Uc = uc.b ? uc.b(Kc) : uc.call(null, Kc), Vc = Fa.b ? Fa.b(uc) : Fa.call(null, uc), Wc = gl.b ? gl.b(y([Wi, function() {
      return function() {
        return ji(am, rl("bmi-ht"))
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc), sj, "bmi-ht", Q, "form-control", kj, "range", nj, 0, dj, 250, tj, Zc(am)], !0)) : gl.call(null, y([Wi, function() {
      return function() {
        return ji(am, rl("bmi-ht"))
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc), sj, "bmi-ht", Q, "form-control", kj, "range", nj, 0, dj, 250, tj, Zc(am)], !0)), fd = Fa.b ? Fa.b(Wc) : Fa.call(null, Wc), gd = ya.b ? ya.b(Fa) : ya.call(null, Fa), vc = R.b ? R.b(y([Q, "form-group"], !0)) : R.call(null, y([Q, "form-group"], !0)), Hc = hl.g ? hl.g() : hl.call(null), ad = function() {
      var Hd = document.createTextNode("");
      Uj(function() {
        return function(a, c) {
          return c.nodeValue = [w("Weight ("), w((a / 10).toFixed(1)), w(" kg)")].join("")
        }
      }(Hd, a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, 
      sc, tc, ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc)).call(null, bm, Hd);
      return Hd
    }(), id = Hc.b ? Hc.b(ad) : Hc.call(null, ad), jd = vc.b ? vc.b(Hc) : vc.call(null, Hc), kd = gl.b ? gl.b(y([Wi, function() {
      return function() {
        return ji(bm, rl("bmi-wt"))
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd), sj, "bmi-wt", Q, "form-control", kj, "range", nj, 0, dj, 1500, tj, Zc(bm)], !0)) : gl.call(null, y([Wi, function() {
      return function() {
        return ji(bm, rl("bmi-wt"))
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd), sj, "bmi-wt", Q, "form-control", kj, "range", nj, 0, dj, 1500, tj, Zc(bm)], !0)), Dd = vc.b ? vc.b(kd) : vc.call(null, kd), Ed = ya.b ? ya.b(vc) : ya.call(null, vc), Ic = R.b ? R.b(y([Q, "form-group"], !0)) : R.call(null, y([Q, "form-group"], !0)), Xc = hl.g ? hl.g() : hl.call(null), rd = function() {
      var Hd = document.createTextNode("");
      Uj(function() {
        return function(a, c, f, g) {
          return c.nodeValue = [w("BMI "), w(a.toFixed(1)), w(" ("), w(f.b ? f.b(g) : f.call(null, g)), w(")")].join("")
        }
      }(Hd, a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, 
      sc, tc, ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc)).call(null, dm, Hd, B, em);
      return Hd
    }(), Id = Xc.b ? Xc.b(rd) : Xc.call(null, rd), Jd = Ic.b ? Ic.b(Xc) : Ic.call(null, Xc), he = gl.b ? gl.b(y([Ni, Uj(function() {
      return function(a, c) {
        return y([lj, a.b ? a.b(c) : a.call(null, c)], !0)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd)).call(null, te, em), Ri, !0, Q, "form-control", kj, "range", nj, 0, dj, 500, Si, Uj(function() {
      return function(a) {
        return 10 * a
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd)).call(null, dm)], !0)) : gl.call(null, y([Ni, Uj(function() {
      return function(a, c) {
        return y([lj, a.b ? a.b(c) : a.call(null, c)], !0)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd)).call(null, te, em), Ri, !0, Q, "form-control", kj, "range", nj, 0, dj, 500, Si, Uj(function() {
      return function(a) {
        return 10 * a
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd)).call(null, dm)], !0)), $e = Ic.b ? Ic.b(he) : Ic.call(null, he), af = ya.b ? ya.b(Ic) : ya.call(null, Ic), bf = tc.b ? tc.b(ya) : tc.call(null, ya), cf = sc.b ? sc.b(tc) : sc.call(null, tc), df = rc.b ? rc.b(sc) : rc.call(null, sc), ef = V.b ? V.b(rc) : V.call(null, rc), ie = S.a ? S.a(y([Q, "text-muted"], !0), "The cells:") : S.call(null, y([Q, "text-muted"], !0), "The cells:"), ff = V.b ? V.b(ie) : V.call(null, 
    ie), je = R.a ? R.a(y([Q, "highlight"], !0), ll.eb ? ll.eb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "180") : Y.call(null, y([Q, 
    "mi"], !0), "180"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, 
    "mi"], !0), "80") : Y.call(null, y([Q, "mi"], !0), "80"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, 
    "nf"], !0), "cell\x3d"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), "  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], 
    !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "100") : Y.call(null, y([Q, "mi"], !0), "100"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n          ", Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "wt") : Y.call(null, 
    y([Q, "nv"], !0), "wt"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "* ") : Y.call(null, y([Q, "nb"], !0), "* "), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, 
    "nb"], !0), "cond ") : Y.call(null, y([Q, "nb"], !0), "cond "), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "18.5") : Y.call(null, y([Q, "mf"], !0), "18.5"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, 
    "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"underweight"') : Y.call(null, y([Q, "s"], !0), '"underweight"'), "  ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, 
    "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "25.0") : Y.call(null, y([Q, "mf"], !0), "25.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"normal"') : Y.call(null, y([Q, "s"], !0), '"normal"'), "      ", 
    Y.a ? Y.a(y([Q, "s"], !0), '"inherit"') : Y.call(null, y([Q, "s"], !0), '"inherit"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "30.0") : Y.call(null, y([Q, "mf"], !0), "30.0"), Y.a ? Y.a(y([Q, 
    "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"overweight"') : Y.call(null, y([Q, "s"], !0), '"overweight"'), "   ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, 
    "ss"], !0), ":else") : Y.call(null, y([Q, "ss"], !0), ":else"), "        ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"obese"') : Y.call(null, y([Q, "s"], !0), '"obese"'), "           ", Y.a ? Y.a(y([Q, "s"], !0), '"red"') : Y.call(null, y([Q, "s"], !0), '"red"'), Y.a ? Y.a(y([Q, "p"], !0), "]))))") : Y.call(null, y([Q, "p"], !0), "]))))"), "\n") : ll.call(null, 
    Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "180") : Y.call(null, y([Q, "mi"], !0), "180"), Y.a ? Y.a(y([Q, "p"], !0), "))") : 
    Y.call(null, y([Q, "p"], !0), "))"), "\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "80") : Y.call(null, y([Q, "mi"], !0), "80"), 
    Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), "\n    ", Y.a ? Y.a(y([Q, "p"], 
    !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), "  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), 
    " ", Y.a ? Y.a(y([Q, "mi"], !0), "100") : Y.call(null, y([Q, "mi"], !0), "100"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n          ", Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "wt") : Y.call(null, y([Q, "nv"], !0), "wt"), " ", Y.a ? Y.a(y([Q, "p"], !0), 
    "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "* ") : Y.call(null, y([Q, "nb"], !0), "* "), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "cond ") : Y.call(null, y([Q, "nb"], !0), "cond "), 
    Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "18.5") : Y.call(null, y([Q, "mf"], !0), "18.5"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, 
    y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"underweight"') : Y.call(null, y([Q, "s"], !0), '"underweight"'), "  ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, 
    y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "25.0") : Y.call(null, y([Q, "mf"], !0), "25.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"normal"') : Y.call(null, y([Q, "s"], !0), '"normal"'), "      ", Y.a ? Y.a(y([Q, "s"], !0), '"inherit"') : Y.call(null, y([Q, "s"], !0), 
    '"inherit"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "30.0") : Y.call(null, y([Q, "mf"], !0), "30.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, 
    "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"overweight"') : Y.call(null, y([Q, "s"], !0), '"overweight"'), "   ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "ss"], !0), ":else") : Y.call(null, y([Q, "ss"], !0), ":else"), "        ", 
    Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"obese"') : Y.call(null, y([Q, "s"], !0), '"obese"'), "           ", Y.a ? Y.a(y([Q, "s"], !0), '"red"') : Y.call(null, y([Q, "s"], !0), '"red"'), Y.a ? Y.a(y([Q, "p"], !0), "]))))") : Y.call(null, y([Q, "p"], !0), "]))))"), "\n")) : R.call(null, y([Q, "highlight"], !0), ll.eb ? ll.eb(Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "180") : Y.call(null, y([Q, "mi"], !0), "180"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), 
    "\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "80") : Y.call(null, y([Q, "mi"], !0), "80"), Y.a ? Y.a(y([Q, "p"], !0), "))") : 
    Y.call(null, y([Q, "p"], !0), "))"), "\n\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], 
    !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), "  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "100") : 
    Y.call(null, y([Q, "mi"], !0), "100"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n          ", Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "wt") : Y.call(null, y([Q, "nv"], !0), "wt"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), 
    Y.a ? Y.a(y([Q, "nb"], !0), "* ") : Y.call(null, y([Q, "nb"], !0), "* "), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "cond ") : Y.call(null, y([Q, "nb"], !0), "cond "), Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "18.5") : Y.call(null, y([Q, "mf"], !0), "18.5"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", 
    Y.a ? Y.a(y([Q, "s"], !0), '"underweight"') : Y.call(null, y([Q, "s"], !0), '"underweight"'), "  ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), 
    " ", Y.a ? Y.a(y([Q, "mf"], !0), "25.0") : Y.call(null, y([Q, "mf"], !0), "25.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"normal"') : Y.call(null, y([Q, "s"], !0), '"normal"'), "      ", Y.a ? Y.a(y([Q, "s"], !0), '"inherit"') : Y.call(null, y([Q, "s"], !0), '"inherit"'), Y.a ? Y.a(y([Q, 
    "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "30.0") : Y.call(null, y([Q, "mf"], !0), "30.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, 
    y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"overweight"') : Y.call(null, y([Q, "s"], !0), '"overweight"'), "   ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "ss"], !0), ":else") : Y.call(null, y([Q, "ss"], !0), ":else"), "        ", Y.a ? Y.a(y([Q, "p"], !0), "[") : 
    Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"obese"') : Y.call(null, y([Q, "s"], !0), '"obese"'), "           ", Y.a ? Y.a(y([Q, "s"], !0), '"red"') : Y.call(null, y([Q, "s"], !0), '"red"'), Y.a ? Y.a(y([Q, "p"], !0), "]))))") : Y.call(null, y([Q, "p"], !0), "]))))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : 
    Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "180") : Y.call(null, y([Q, "mi"], !0), "180"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), 
    "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell") : Y.call(null, y([Q, "nf"], !0), "cell"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "80") : Y.call(null, y([Q, "mi"], !0), "80"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n\n", Y.a ? Y.a(y([Q, "p"], 
    !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "def ") : Y.call(null, y([Q, "k"], !0), "def "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, 
    "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), "  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "100") : Y.call(null, y([Q, "mi"], !0), "100"), Y.a ? Y.a(y([Q, "p"], 
    !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n          ", Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "/ ") : Y.call(null, y([Q, "nb"], !0), "/ "), Y.a ? Y.a(y([Q, "nv"], !0), "wt") : Y.call(null, y([Q, "nv"], !0), "wt"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "* ") : Y.call(null, y([Q, "nb"], 
    !0), "* "), Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "ht") : Y.call(null, y([Q, "nv"], !0), "ht"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "cond ") : Y.call(null, y([Q, "nb"], !0), "cond "), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), 
    "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "18.5") : Y.call(null, y([Q, "mf"], !0), "18.5"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"underweight"') : Y.call(null, y([Q, 
    "s"], !0), '"underweight"'), "  ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "25.0") : Y.call(null, y([Q, "mf"], 
    !0), "25.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"normal"') : Y.call(null, y([Q, "s"], !0), '"normal"'), "      ", Y.a ? Y.a(y([Q, "s"], !0), '"inherit"') : Y.call(null, y([Q, "s"], !0), '"inherit"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", 
    Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "\x3c ") : Y.call(null, y([Q, "nb"], !0), "\x3c "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mf"], !0), "30.0") : Y.call(null, y([Q, "mf"], !0), "30.0"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, 
    y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"overweight"') : Y.call(null, y([Q, "s"], !0), '"overweight"'), "   ", Y.a ? Y.a(y([Q, "s"], !0), '"orange"') : Y.call(null, y([Q, "s"], !0), '"orange"'), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n            ", Y.a ? Y.a(y([Q, "ss"], !0), ":else") : Y.call(null, y([Q, "ss"], !0), ":else"), "        ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : 
    Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"obese"') : Y.call(null, y([Q, "s"], !0), '"obese"'), "           ", Y.a ? Y.a(y([Q, "s"], !0), '"red"') : Y.call(null, y([Q, "s"], !0), '"red"'), Y.a ? Y.a(y([Q, "p"], !0), "]))))") : Y.call(null, y([Q, "p"], !0), "]))))"), "\n")), gf = V.b ? V.b(je) : V.call(null, je), ke = S.a ? S.a(y([Q, "text-muted"], !0), "The user interface:") : S.call(null, y([Q, "text-muted"], !0), "The user interface:"), hf = V.b ? V.b(ke) : V.call(null, 
    ke), le = R.a ? R.a(y([Q, "highlight"], !0), ll.gb ? ll.gb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "form") : Y.call(null, y([Q, "nf"], !0), "form"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, 
    "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Height (~{height} cm)"') : Y.call(null, y([Q, "s"], !0), '"Height (~{height} cm)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : 
    Y.call(null, y([Q, "s"], !0), '"bmi-h"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, 
    y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Weight (~{weight} kg)"') : Y.call(null, y([Q, "s"], !0), '"Weight (~{weight} kg)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, 
    y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, 
    y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], 
    !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", 
    Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"') : Y.call(null, y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, 
    "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-value") : Y.call(null, y([Q, "ss"], !0), ":do-value"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "first ") : Y.call(null, y([Q, "nb"], !0), "first "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], 
    !0), "bmi"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-css") : Y.call(null, y([Q, "ss"], !0), ":do-css"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "{") : Y.call(null, y([Q, "p"], !0), "{"), Y.a ? Y.a(y([Q, "ss"], !0), ":background-color") : Y.call(null, y([Q, "ss"], !0), 
    ":background-color"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "nth ") : Y.call(null, y([Q, "nb"], !0), "nth "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "2") : Y.call(null, y([Q, "mi"], !0), "2"), Y.a ? Y.a(y([Q, "p"], !0), ")})))") : Y.call(null, y([Q, "p"], !0), ")})))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), 
    Y.a ? Y.a(y([Q, "nf"], !0), "form") : Y.call(null, y([Q, "nf"], !0), "form"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Height (~{height} cm)"') : Y.call(null, y([Q, "s"], !0), '"Height (~{height} cm)"'), 
    Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", 
    Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, 
    "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : 
    Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Weight (~{weight} kg)"') : Y.call(null, y([Q, "s"], !0), '"Weight (~{weight} kg)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : 
    Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), 
    ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, 
    y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), 
    " ", Y.a ? Y.a(y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"') : Y.call(null, y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-value") : Y.call(null, y([Q, "ss"], !0), ":do-value"), " ", Y.a ? Y.a(y([Q, "p"], !0), 
    "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "first ") : Y.call(null, y([Q, "nb"], !0), "first "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-css") : Y.call(null, 
    y([Q, "ss"], !0), ":do-css"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "{") : Y.call(null, y([Q, "p"], !0), "{"), Y.a ? Y.a(y([Q, "ss"], !0), ":background-color") : Y.call(null, y([Q, "ss"], !0), ":background-color"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "nth ") : Y.call(null, y([Q, 
    "nb"], !0), "nth "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "2") : Y.call(null, y([Q, "mi"], !0), "2"), Y.a ? Y.a(y([Q, "p"], !0), ")})))") : Y.call(null, y([Q, "p"], !0), ")})))"), "\n")) : R.call(null, y([Q, "highlight"], !0), ll.gb ? ll.gb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "form") : Y.call(null, y([Q, "nf"], !0), "form"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Height (~{height} cm)"') : Y.call(null, y([Q, "s"], !0), '"Height (~{height} cm)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, 
    y([Q, "nv"], !0), "height"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, 
    "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? 
    Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Weight (~{weight} kg)"') : Y.call(null, y([Q, "s"], !0), '"Weight (~{weight} kg)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), 
    ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, 
    "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), 
    Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"') : Y.call(null, y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"'), 
    Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-value") : Y.call(null, y([Q, "ss"], !0), ":do-value"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? 
    Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "first ") : Y.call(null, y([Q, "nb"], !0), "first "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-css") : Y.call(null, y([Q, "ss"], !0), ":do-css"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : 
    Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "{") : Y.call(null, y([Q, "p"], !0), "{"), Y.a ? Y.a(y([Q, "ss"], !0), ":background-color") : Y.call(null, y([Q, "ss"], !0), ":background-color"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "nth ") : Y.call(null, y([Q, "nb"], !0), "nth "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "2") : Y.call(null, 
    y([Q, "mi"], !0), "2"), Y.a ? Y.a(y([Q, "p"], !0), ")})))") : Y.call(null, y([Q, "p"], !0), ")})))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "form") : Y.call(null, y([Q, "nf"], !0), "form"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), 
    "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Height (~{height} cm)"') : Y.call(null, y([Q, "s"], !0), '"Height (~{height} cm)"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, 
    "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, 
    y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "height") : Y.call(null, y([Q, "nv"], !0), "height"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-h"') : Y.call(null, y([Q, "s"], !0), '"bmi-h"'), 
    Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Weight (~{weight} kg)"') : Y.call(null, y([Q, "s"], !0), '"Weight (~{weight} kg)"'), 
    Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":id") : Y.call(null, y([Q, "ss"], !0), ":id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":value") : Y.call(null, y([Q, "ss"], !0), ":value"), " ", 
    Y.a ? Y.a(y([Q, "o"], !0), "@") : Y.call(null, y([Q, "o"], !0), "@"), Y.a ? Y.a(y([Q, "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":on-change") : Y.call(null, y([Q, "ss"], !0), ":on-change"), " ", Y.a ? Y.a(y([Q, "o"], !0), "#") : Y.call(null, y([Q, "o"], !0), "#"), Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "reset!") : Y.call(null, y([Q, "nf"], !0), "reset!"), " ", Y.a ? Y.a(y([Q, 
    "nv"], !0), "weight") : Y.call(null, y([Q, "nv"], !0), "weight"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "val-id") : Y.call(null, y([Q, "nf"], !0), "val-id"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"bmi-w"') : Y.call(null, y([Q, "s"], !0), '"bmi-w"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "label") : 
    Y.call(null, y([Q, "nf"], !0), "label"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "text") : Y.call(null, y([Q, "nf"], !0), "text"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"') : Y.call(null, y([Q, "s"], !0), '"BMI ~(first bmi) (~(second bmi))"'), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, 
    "nf"], !0), "input") : Y.call(null, y([Q, "nf"], !0), "input"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-value") : Y.call(null, y([Q, "ss"], !0), ":do-value"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "first ") : Y.call(null, y([Q, "nb"], !0), "first "), Y.a ? Y.a(y([Q, "nv"], 
    !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":do-css") : Y.call(null, y([Q, "ss"], !0), ":do-css"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "cell\x3d") : Y.call(null, y([Q, "nf"], !0), "cell\x3d"), " ", Y.a ? Y.a(y([Q, "p"], !0), "{") : Y.call(null, y([Q, "p"], !0), "{"), Y.a ? Y.a(y([Q, "ss"], !0), ":background-color") : 
    Y.call(null, y([Q, "ss"], !0), ":background-color"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "nth ") : Y.call(null, y([Q, "nb"], !0), "nth "), Y.a ? Y.a(y([Q, "nv"], !0), "bmi") : Y.call(null, y([Q, "nv"], !0), "bmi"), " ", Y.a ? Y.a(y([Q, "mi"], !0), "2") : Y.call(null, y([Q, "mi"], !0), "2"), Y.a ? Y.a(y([Q, "p"], !0), ")})))") : Y.call(null, y([Q, "p"], !0), ")})))"), "\n")), jf = V.b ? V.b(le) : V.call(null, le), kf = va.b ? va.b(V) : 
    va.call(null, V), lf = qa.b ? qa.b(va) : qa.call(null, va), Yc = Ql.d(H([y([xj, function() {
      return function() {
        return ji($l, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf)], !0)], 0)), bg = Yk.b ? Yk.b(y([Q, "topfix", mj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc)).call(null, I, $l)], !0)) : Yk.call(null, y([Q, "topfix", mj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc)).call(null, I, $l)], !0)), xh = Yc.b ? Yc.b(bg) : Yc.call(null, bg), mf = Yk.b ? Yk.b(y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc, bg, xh)).call(null, Pf, $l)], !0)) : Yk.call(null, y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc, bg, xh)).call(null, Pf, $l)], !0)), yh = el.a ? el.a(y([Q, "panel-title"], !0), "List Component") : el.call(null, y([Q, "panel-title"], !0), "List Component"), ok = mf.b ? mf.b(yh) : mf.call(null, yh), pk = Yc.b ? Yc.b(mf) : Yc.call(null, mf), Ga = R.b ? R.b(y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc, bg, xh, mf, yh, ok, pk)).call(null, I, $l)], !0)) : R.call(null, y([gj, Uj(function() {
      return function(a, c) {
        return a.a ? a.a(c, 2) : a.call(null, c, 2)
      }
    }(a, c, f, g, h, k, l, n, p, q, s, u, A, E, F, K, U, T, Z, ea, ga, ca, Ka, rb, La, sb, tb, ja, Ma, ub, Na, wb, xb, yb, Oa, zb, ka, D, la, Ab, Pa, Bb, Cb, Qa, Db, Ra, Eb, W, Fb, Sa, Gb, Hb, Ta, Ib, Jb, Kb, Ua, Lb, ma, Mb, Va, Nb, Ob, Wa, Pb, X, Qb, Xa, Rb, Sb, Ya, Tb, Ub, Vb, Za, Wb, $a, Xb, na, Yb, ab, Zb, $b, bb, ac, cb, bc, db, cc, eb, dc, da, ec, fb, fc, gc, hc, gb, ic, oa, jc, hb, kc, lc, ib, mc, jb, nc, oc, pa, za, kb, pc, qc, qa, va, lb, xc, Cc, Dc, V, Ec, Pc, Fc, Qc, Gc, Rc, rc, sc, tc, 
    ya, Fa, uc, Kc, Uc, Vc, Wc, fd, gd, vc, Hc, ad, id, jd, kd, Dd, Ed, Ic, Xc, rd, Id, Jd, he, $e, af, bf, cf, df, ef, ie, ff, je, gf, ke, hf, le, jf, kf, lf, Yc, bg, xh, mf, yh, ok, pk)).call(null, I, $l)], !0)), qk = el.a ? el.a(y([Q, "panel-title"], !0), "List Component") : el.call(null, y([Q, "panel-title"], !0), "List Component");
    Ga.b ? Ga.b(qk) : Ga.call(null, qk);
    var rk = fl.g ? fl.g() : fl.call(null);
    Ga.b ? Ga.b(rk) : Ga.call(null, rk);
    var sk = S.a ? S.a(y([Q, "text-muted"], !0), "The demo:") : S.call(null, y([Q, "text-muted"], !0), "The demo:");
    Ga.b ? Ga.b(sk) : Ga.call(null, sk);
    var yg = Rl(), zg = Sl(), Kd = R.g ? R.g() : R.call(null), tk = S.b ? S.b("See the list component below.") : S.call(null, "See the list component below.");
    Kd.b ? Kd.b(tk) : Kd.call(null, tk);
    var uk = fl.g ? fl.g() : fl.call(null);
    Kd.b ? Kd.b(uk) : Kd.call(null, uk);
    var Ld = cm.d(H([y([fj, "Items:"], !0)], 0)), vk = Y.b ? Y.b("item one") : Y.call(null, "item one");
    Ld.b ? Ld.b(vk) : Ld.call(null, vk);
    var wk = Y.b ? Y.b("item two") : Y.call(null, "item two");
    Ld.b ? Ld.b(wk) : Ld.call(null, wk);
    var xk = Y.b ? Y.b("item three") : Y.call(null, "item three");
    Ld.b ? Ld.b(xk) : Ld.call(null, xk);
    Kd.b ? Kd.b(Ld) : Kd.call(null, Ld);
    zg.b ? zg.b(Kd) : zg.call(null, Kd);
    yg.b ? yg.b(zg) : yg.call(null, zg);
    Ga.b ? Ga.b(yg) : Ga.call(null, yg);
    var yk = S.a ? S.a(y([Q, "text-muted"], !0), "The component constructor:") : S.call(null, y([Q, "text-muted"], !0), "The component constructor:");
    Ga.b ? Ga.b(yk) : Ga.call(null, yk);
    var zk = R.a ? R.a(y([Q, "highlight"], !0), ll.hb ? ll.hb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "defelem") : Y.call(null, y([Q, "nf"], !0), "defelem"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "my-list") : Y.call(null, y([Q, "nv"], !0), "my-list"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : 
    Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? 
    Y.a(y([Q, "nf"], !0), "b") : Y.call(null, y([Q, "nf"], !0), "b"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "ul") : Y.call(null, y([Q, "nf"], !0), "ul"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : 
    Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":class") : Y.call(null, y([Q, "ss"], !0), ":class"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"my-list"') : Y.call(null, y([Q, "s"], !0), '"my-list"'), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "head") : Y.call(null, y([Q, 
    "nf"], !0), "head"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "body") : Y.call(null, y([Q, "nf"], !0), "body"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "on-append!") : Y.call(null, y([Q, "nf"], !0), "on-append!"), " ", Y.a ? 
    Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "fn ") : Y.call(null, y([Q, "k"], !0), "fn "), Y.a ? Y.a(y([Q, "p"], !0), "[{") : Y.call(null, y([Q, "p"], !0), "[{"), Y.a ? Y.a(y([Q, "ss"], !0), ":keys") : Y.call(null, y([Q, "ss"], !0), ":keys"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, 
    y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":as") : Y.call(null, y([Q, "ss"], !0), ":as"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), Y.a ? Y.a(y([Q, "p"], !0), "}") : Y.call(null, y([Q, "p"], !0), "}"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n        ", 
    Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "when ") : Y.call(null, y([Q, "nb"], !0), "when "), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "do!") : Y.call(null, y([Q, "nf"], !0), "do!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "ss"], !0), 
    ":text") : Y.call(null, y([Q, "ss"], !0), ":text"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "add-attributes!") : Y.call(null, y([Q, "nf"], !0), "add-attributes!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, 
    "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "dissoc ") : Y.call(null, y([Q, "nb"], !0), "dissoc "), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : 
    Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "map ") : Y.call(null, y([Q, "nb"], !0), "map "), Y.a ? Y.a(y([Q, "nv"], !0), "li") : Y.call(null, y([Q, "nv"], !0), "li"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "))))") : Y.call(null, y([Q, "p"], 
    !0), "))))"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), 
    "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "defelem") : Y.call(null, y([Q, "nf"], !0), "defelem"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "my-list") : Y.call(null, y([Q, "nv"], !0), "my-list"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), 
    "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "b") : Y.call(null, 
    y([Q, "nf"], !0), "b"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "ul") : Y.call(null, y([Q, "nf"], !0), "ul"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), 
    " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":class") : Y.call(null, y([Q, "ss"], !0), ":class"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"my-list"') : Y.call(null, y([Q, "s"], !0), '"my-list"'), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "head") : Y.call(null, y([Q, "nf"], !0), "head"), Y.a ? Y.a(y([Q, 
    "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "body") : Y.call(null, y([Q, "nf"], !0), "body"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "on-append!") : Y.call(null, y([Q, "nf"], !0), "on-append!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, 
    y([Q, "nv"], !0), "this"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "fn ") : Y.call(null, y([Q, "k"], !0), "fn "), Y.a ? Y.a(y([Q, "p"], !0), "[{") : Y.call(null, y([Q, "p"], !0), "[{"), Y.a ? Y.a(y([Q, "ss"], !0), ":keys") : Y.call(null, y([Q, "ss"], !0), ":keys"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, 
    "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":as") : Y.call(null, y([Q, "ss"], !0), ":as"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), Y.a ? Y.a(y([Q, "p"], !0), "}") : Y.call(null, y([Q, "p"], !0), "}"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "when ") : Y.call(null, y([Q, "nb"], !0), "when "), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "do!") : Y.call(null, y([Q, "nf"], !0), "do!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":text") : Y.call(null, y([Q, "ss"], 
    !0), ":text"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "add-attributes!") : Y.call(null, y([Q, "nf"], !0), "add-attributes!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, 
    "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "dissoc ") : Y.call(null, y([Q, "nb"], !0), "dissoc "), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), 
    Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "map ") : Y.call(null, y([Q, "nb"], !0), "map "), Y.a ? Y.a(y([Q, "nv"], !0), "li") : Y.call(null, y([Q, "nv"], !0), "li"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "))))") : Y.call(null, y([Q, "p"], !0), "))))"), "\n    ", Y.a ? Y.a(y([Q, 
    "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n")) : R.call(null, y([Q, "highlight"], 
    !0), ll.hb ? ll.hb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "defelem") : Y.call(null, y([Q, "nf"], !0), "defelem"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "my-list") : Y.call(null, y([Q, "nv"], !0), "my-list"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), 
    Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "b") : Y.call(null, y([Q, 
    "nf"], !0), "b"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "ul") : Y.call(null, y([Q, "nf"], !0), "ul"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? 
    Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":class") : Y.call(null, y([Q, "ss"], !0), ":class"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"my-list"') : Y.call(null, y([Q, "s"], !0), '"my-list"'), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "head") : Y.call(null, y([Q, "nf"], !0), "head"), Y.a ? Y.a(y([Q, "p"], !0), 
    ")") : Y.call(null, y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "body") : Y.call(null, y([Q, "nf"], !0), "body"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "on-append!") : Y.call(null, y([Q, "nf"], !0), "on-append!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, 
    "nv"], !0), "this"), "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "fn ") : Y.call(null, y([Q, "k"], !0), "fn "), Y.a ? Y.a(y([Q, "p"], !0), "[{") : Y.call(null, y([Q, "p"], !0), "[{"), Y.a ? Y.a(y([Q, "ss"], !0), ":keys") : Y.call(null, y([Q, "ss"], !0), ":keys"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, 
    "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":as") : Y.call(null, y([Q, "ss"], !0), ":as"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), Y.a ? Y.a(y([Q, "p"], !0), "}") : Y.call(null, y([Q, "p"], !0), "}"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "when ") : Y.call(null, y([Q, "nb"], !0), "when "), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "do!") : Y.call(null, y([Q, "nf"], !0), "do!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":text") : Y.call(null, y([Q, "ss"], 
    !0), ":text"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "add-attributes!") : Y.call(null, y([Q, "nf"], !0), "add-attributes!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, 
    "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "dissoc ") : Y.call(null, y([Q, "nb"], !0), "dissoc "), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), 
    Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "map ") : Y.call(null, y([Q, "nb"], !0), "map "), Y.a ? Y.a(y([Q, "nv"], !0), "li") : Y.call(null, y([Q, "nv"], !0), "li"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "))))") : Y.call(null, y([Q, "p"], !0), "))))"), "\n    ", Y.a ? Y.a(y([Q, 
    "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, 
    "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "defelem") : Y.call(null, y([Q, "nf"], !0), "defelem"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "my-list") : Y.call(null, y([Q, "nv"], !0), "my-list"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), 
    "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "let ") : Y.call(null, y([Q, "k"], !0), "let "), Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "b") : Y.call(null, y([Q, "nf"], !0), "b"), Y.a ? 
    Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "ul") : Y.call(null, y([Q, "nf"], !0), "ul"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n        ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "p"], !0), 
    "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":class") : Y.call(null, y([Q, "ss"], !0), ":class"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"my-list"') : Y.call(null, y([Q, "s"], !0), '"my-list"'), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "head") : Y.call(null, y([Q, "nf"], !0), "head"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, 
    y([Q, "p"], !0), ")"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "body") : Y.call(null, y([Q, "nf"], !0), "body"), Y.a ? Y.a(y([Q, "p"], !0), "))]") : Y.call(null, y([Q, "p"], !0), "))]"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "on-append!") : Y.call(null, y([Q, "nf"], !0), "on-append!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), 
    "\n      ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "k"], !0), "fn ") : Y.call(null, y([Q, "k"], !0), "fn "), Y.a ? Y.a(y([Q, "p"], !0), "[{") : Y.call(null, y([Q, "p"], !0), "[{"), Y.a ? Y.a(y([Q, "ss"], !0), ":keys") : Y.call(null, y([Q, "ss"], !0), ":keys"), " ", Y.a ? Y.a(y([Q, "p"], !0), "[") : Y.call(null, y([Q, "p"], !0), "["), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "]") : 
    Y.call(null, y([Q, "p"], !0), "]"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":as") : Y.call(null, y([Q, "ss"], !0), ":as"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), Y.a ? Y.a(y([Q, "p"], !0), "}") : Y.call(null, y([Q, "p"], !0), "}"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "]") : Y.call(null, y([Q, "p"], !0), "]"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, 
    "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "when ") : Y.call(null, y([Q, "nb"], !0), "when "), Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "do!") : Y.call(null, y([Q, "nf"], !0), "do!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "head") : Y.call(null, y([Q, "nv"], !0), "head"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":text") : Y.call(null, y([Q, "ss"], !0), ":text"), " ", 
    Y.a ? Y.a(y([Q, "nv"], !0), "title") : Y.call(null, y([Q, "nv"], !0), "title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "add-attributes!") : Y.call(null, y([Q, "nf"], !0), "add-attributes!"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? 
    Y.a(y([Q, "nb"], !0), "dissoc ") : Y.call(null, y([Q, "nb"], !0), "dissoc "), Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), Y.a ? Y.a(y([Q, "p"], !0), "))") : Y.call(null, y([Q, "p"], !0), "))"), "\n        ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, 
    "nv"], !0), "body") : Y.call(null, y([Q, "nv"], !0), "body"), " ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "map ") : Y.call(null, y([Q, "nb"], !0), "map "), Y.a ? Y.a(y([Q, "nv"], !0), "li") : Y.call(null, y([Q, "nv"], !0), "li"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), "))))") : Y.call(null, y([Q, "p"], !0), "))))"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : 
    Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nb"], !0), "apply ") : Y.call(null, y([Q, "nb"], !0), "apply "), Y.a ? Y.a(y([Q, "nv"], !0), "this") : Y.call(null, y([Q, "nv"], !0), "this"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "attrs") : Y.call(null, y([Q, "nv"], !0), "attrs"), " ", Y.a ? Y.a(y([Q, "nv"], !0), "children") : Y.call(null, y([Q, "nv"], !0), "children"), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n"));
    Ga.b ? Ga.b(zk) : Ga.call(null, zk);
    var Ak = S.a ? S.a(y([Q, "text-muted"], !0), "The page markup:") : S.call(null, y([Q, "text-muted"], !0), "The page markup:");
    Ga.b ? Ga.b(Ak) : Ga.call(null, Ak);
    var Bk = R.a ? R.a(y([Q, "highlight"], !0), ll.rb ? ll.rb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "p") : Y.call(null, y([Q, "nf"], !0), "p"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"See the list component below."') : Y.call(null, y([Q, "s"], !0), '"See the list component below."'), Y.a ? Y.a(y([Q, 
    "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "hr") : Y.call(null, y([Q, "nf"], !0), "hr"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "my-list") : Y.call(null, y([Q, "nf"], !0), "my-list"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, 
    y([Q, "ss"], !0), ":title"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Items:"') : Y.call(null, y([Q, "s"], !0), '"Items:"'), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item one"') : Y.call(null, y([Q, "s"], !0), '"item one"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, 
    "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item two"') : Y.call(null, y([Q, "s"], !0), '"item two"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item three"') : Y.call(null, y([Q, "s"], !0), '"item three"'), 
    Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "p") : Y.call(null, y([Q, "nf"], !0), "p"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"See the list component below."') : Y.call(null, y([Q, "s"], !0), '"See the list component below."'), 
    Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "hr") : Y.call(null, y([Q, "nf"], !0), "hr"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "my-list") : Y.call(null, y([Q, "nf"], !0), "my-list"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : 
    Y.call(null, y([Q, "ss"], !0), ":title"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Items:"') : Y.call(null, y([Q, "s"], !0), '"Items:"'), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item one"') : Y.call(null, y([Q, "s"], !0), '"item one"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, 
    y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item two"') : Y.call(null, y([Q, "s"], !0), '"item two"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item three"') : Y.call(null, y([Q, "s"], 
    !0), '"item three"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n")) : R.call(null, y([Q, "highlight"], !0), ll.rb ? ll.rb(Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "p") : Y.call(null, y([Q, "nf"], !0), "p"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"See the list component below."') : 
    Y.call(null, y([Q, "s"], !0), '"See the list component below."'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "hr") : Y.call(null, y([Q, "nf"], !0), "hr"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "my-list") : Y.call(null, y([Q, "nf"], 
    !0), "my-list"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Items:"') : Y.call(null, y([Q, "s"], !0), '"Items:"'), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item one"') : Y.call(null, y([Q, "s"], !0), '"item one"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, 
    "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item two"') : Y.call(null, y([Q, "s"], !0), '"item two"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", 
    Y.a ? Y.a(y([Q, "s"], !0), '"item three"') : Y.call(null, y([Q, "s"], !0), '"item three"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "div") : Y.call(null, y([Q, "nf"], !0), "div"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "p") : Y.call(null, y([Q, "nf"], !0), "p"), " ", Y.a ? Y.a(y([Q, 
    "s"], !0), '"See the list component below."') : Y.call(null, y([Q, "s"], !0), '"See the list component below."'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "hr") : Y.call(null, y([Q, "nf"], !0), "hr"), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n  ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, 
    "nf"], !0), "my-list") : Y.call(null, y([Q, "nf"], !0), "my-list"), "\n    ", Y.a ? Y.a(y([Q, "ss"], !0), ":title") : Y.call(null, y([Q, "ss"], !0), ":title"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"Items:"') : Y.call(null, y([Q, "s"], !0), '"Items:"'), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item one"') : Y.call(null, y([Q, "s"], !0), '"item one"'), 
    Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item two"') : Y.call(null, y([Q, "s"], !0), '"item two"'), Y.a ? Y.a(y([Q, "p"], !0), ")") : Y.call(null, y([Q, "p"], !0), ")"), "\n    ", Y.a ? Y.a(y([Q, "p"], !0), "(") : Y.call(null, y([Q, "p"], !0), "("), Y.a ? Y.a(y([Q, "nf"], !0), 
    "span") : Y.call(null, y([Q, "nf"], !0), "span"), " ", Y.a ? Y.a(y([Q, "s"], !0), '"item three"') : Y.call(null, y([Q, "s"], !0), '"item three"'), Y.a ? Y.a(y([Q, "p"], !0), ")))") : Y.call(null, y([Q, "p"], !0), ")))"), "\n"));
    Ga.b ? Ga.b(Bk) : Ga.call(null, Bk);
    Yc.b ? Yc.b(Ga) : Yc.call(null, Ga);
    qa.b ? qa.b(Yc) : qa.call(null, Yc);
    pa.b ? pa.b(qa) : pa.call(null, qa);
    ka.b ? ka.b(pa) : ka.call(null, pa);
    E.b ? E.b(ka) : E.call(null, ka);
    var Ck = fl.g ? fl.g() : fl.call(null);
    E.b ? E.b(Ck) : E.call(null, Ck);
    var Dk = al.a ? al.a(y([bj, "padding:30px 0px;"], !0), "Copyright 100") : al.call(null, y([bj, "padding:30px 0px;"], !0), "Copyright 100");
    E.b ? E.b(Dk) : E.call(null, Dk);
    a.b ? a.b(E) : a.call(null, E);
    return a
  }(), function() {
    var a = Xl.g ? Xl.g() : Xl.call(null), c = ul(), f = vl();
    c.b ? c.b(f) : c.call(null, f);
    var f = yl(), g = R.b ? R.b(y([Q, "page-header"], !0)) : R.call(null, y([Q, "page-header"], !0)), h = cl.b ? cl.b("Hello World") : cl.call(null, "Hello World");
    g.b ? g.b(h) : g.call(null, h);
    f.b ? f.b(g) : f.call(null, g);
    g = S.b ? S.b("Hoplon is a set of libraries for making web pages.") : S.call(null, "Hoplon is a set of libraries for making web pages.");
    f.b ? f.b(g) : f.call(null, g);
    c.b ? c.b(f) : c.call(null, f);
    f = vl();
    c.b ? c.b(f) : c.call(null, f);
    a.b ? a.b(c) : a.call(null, c);
    c = ul();
    f = vl.d(H([y([bj, "text-align:right"], !0)], 0));
    g = S.g ? S.g() : S.call(null);
    h = Zk.b ? Zk.b("This is what the code does.") : Zk.call(null, "This is what the code does.");
    g.b ? g.b(h) : g.call(null, h);
    f.b ? f.b(g) : f.call(null, g);
    c.b ? c.b(f) : c.call(null, f);
    f = yl();
    g = R.b ? R.b(y([Q, "panel panel-default"], !0)) : R.call(null, y([Q, "panel panel-default"], !0));
    h = R.a ? R.a(y([Q, "panel-heading"], !0), "Example:") : R.call(null, y([Q, "panel-heading"], !0), "Example:");
    g.b ? g.b(h) : g.call(null, h);
    h = R.a ? R.a(y([Q, "panel-body"], !0), "Foo bar.") : R.call(null, y([Q, "panel-body"], !0), "Foo bar.");
    g.b ? g.b(h) : g.call(null, h);
    f.b ? f.b(g) : f.call(null, g);
    g = R.a ? R.a(y([Q, "highlight"], !0), ll.sb ? ll.sb(Y.a ? Y.a(y([Q, "nt"], !0), "\x3cscript") : Y.call(null, y([Q, "nt"], !0), "\x3cscript"), " ", Y.a ? Y.a(y([Q, "na"], !0), "type\x3d") : Y.call(null, y([Q, "na"], !0), "type\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"text/hoplon"') : Y.call(null, y([Q, "s"], !0), '"text/hoplon"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "\n  (page index.html)\n  \n  (defn my-list [", Y.a ? Y.a(y([Q, "err"], !0), "\x26") : Y.call(null, 
    y([Q, "err"], !0), "\x26"), ' items]\n    (div\n      :class "my-list"\n      (apply ul (map #(li (div :class "my-list-item" %)) items))))\n\n  (def clicks (cell 0))\n', Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/script\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/script\x3e"), "\n    \n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chtml\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chtml\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chead\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chead\x3e"), "\n    ", Y.a ? Y.a(y([Q, 
    "nt"], !0), "\x3ctitle\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ctitle\x3e"), "example page", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/title\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/title\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/head\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/head\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbody\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cbody\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ch1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ch1\x3e"), 
    "Hello, Hoplon", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/h1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/h1\x3e"), "\n    \n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cmy-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cmy-list\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "first thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "second thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/my-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/my-list\x3e"), "\n\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e"), "You've clicked ~{clicks} times, so far.", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e") : Y.call(null, 
    y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbutton") : Y.call(null, y([Q, "nt"], !0), "\x3cbutton"), " ", Y.a ? Y.a(y([Q, "na"], !0), "on-click\x3d") : Y.call(null, y([Q, "na"], !0), "on-click\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"') : Y.call(null, y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "click me", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/button\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3c/button\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/body\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/body\x3e"), "\n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/html\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/html\x3e"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "nt"], !0), "\x3cscript") : Y.call(null, y([Q, "nt"], !0), "\x3cscript"), " ", Y.a ? Y.a(y([Q, "na"], !0), "type\x3d") : Y.call(null, y([Q, "na"], !0), "type\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"text/hoplon"') : 
    Y.call(null, y([Q, "s"], !0), '"text/hoplon"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "\n  (page index.html)\n  \n  (defn my-list [", Y.a ? Y.a(y([Q, "err"], !0), "\x26") : Y.call(null, y([Q, "err"], !0), "\x26"), ' items]\n    (div\n      :class "my-list"\n      (apply ul (map #(li (div :class "my-list-item" %)) items))))\n\n  (def clicks (cell 0))\n', Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/script\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/script\x3e"), "\n    \n", 
    Y.a ? Y.a(y([Q, "nt"], !0), "\x3chtml\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chtml\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chead\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chead\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ctitle\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ctitle\x3e"), "example page", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/title\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/title\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/head\x3e") : Y.call(null, y([Q, "nt"], 
    !0), "\x3c/head\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbody\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cbody\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ch1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ch1\x3e"), "Hello, Hoplon", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/h1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/h1\x3e"), "\n    \n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cmy-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cmy-list\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "first thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "second thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/my-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/my-list\x3e"), "\n\n    ", 
    Y.a ? Y.a(y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e"), "You've clicked ~{clicks} times, so far.", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbutton") : Y.call(null, y([Q, "nt"], !0), "\x3cbutton"), " ", Y.a ? Y.a(y([Q, "na"], !0), "on-click\x3d") : Y.call(null, y([Q, "na"], !0), "on-click\x3d"), Y.a ? Y.a(y([Q, "s"], !0), 
    '"{{ #(swap! clicks inc) }}"') : Y.call(null, y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "click me", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/button\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/button\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/body\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/body\x3e"), "\n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/html\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/html\x3e"), "\n")) : 
    R.call(null, y([Q, "highlight"], !0), ll.sb ? ll.sb(Y.a ? Y.a(y([Q, "nt"], !0), "\x3cscript") : Y.call(null, y([Q, "nt"], !0), "\x3cscript"), " ", Y.a ? Y.a(y([Q, "na"], !0), "type\x3d") : Y.call(null, y([Q, "na"], !0), "type\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"text/hoplon"') : Y.call(null, y([Q, "s"], !0), '"text/hoplon"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "\n  (page index.html)\n  \n  (defn my-list [", Y.a ? Y.a(y([Q, "err"], !0), "\x26") : Y.call(null, 
    y([Q, "err"], !0), "\x26"), ' items]\n    (div\n      :class "my-list"\n      (apply ul (map #(li (div :class "my-list-item" %)) items))))\n\n  (def clicks (cell 0))\n', Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/script\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/script\x3e"), "\n    \n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chtml\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chtml\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chead\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chead\x3e"), "\n    ", Y.a ? Y.a(y([Q, 
    "nt"], !0), "\x3ctitle\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ctitle\x3e"), "example page", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/title\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/title\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/head\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/head\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbody\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cbody\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ch1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ch1\x3e"), 
    "Hello, Hoplon", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/h1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/h1\x3e"), "\n    \n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cmy-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cmy-list\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "first thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "second thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/my-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/my-list\x3e"), "\n\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e"), "You've clicked ~{clicks} times, so far.", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e") : Y.call(null, 
    y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbutton") : Y.call(null, y([Q, "nt"], !0), "\x3cbutton"), " ", Y.a ? Y.a(y([Q, "na"], !0), "on-click\x3d") : Y.call(null, y([Q, "na"], !0), "on-click\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"') : Y.call(null, y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "click me", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/button\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3c/button\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/body\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/body\x3e"), "\n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/html\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/html\x3e"), "\n") : ll.call(null, Y.a ? Y.a(y([Q, "nt"], !0), "\x3cscript") : Y.call(null, y([Q, "nt"], !0), "\x3cscript"), " ", Y.a ? Y.a(y([Q, "na"], !0), "type\x3d") : Y.call(null, y([Q, "na"], !0), "type\x3d"), Y.a ? Y.a(y([Q, "s"], !0), '"text/hoplon"') : 
    Y.call(null, y([Q, "s"], !0), '"text/hoplon"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "\n  (page index.html)\n  \n  (defn my-list [", Y.a ? Y.a(y([Q, "err"], !0), "\x26") : Y.call(null, y([Q, "err"], !0), "\x26"), ' items]\n    (div\n      :class "my-list"\n      (apply ul (map #(li (div :class "my-list-item" %)) items))))\n\n  (def clicks (cell 0))\n', Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/script\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/script\x3e"), "\n    \n", 
    Y.a ? Y.a(y([Q, "nt"], !0), "\x3chtml\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chtml\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3chead\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3chead\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ctitle\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ctitle\x3e"), "example page", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/title\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/title\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/head\x3e") : Y.call(null, y([Q, "nt"], 
    !0), "\x3c/head\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbody\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cbody\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3ch1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3ch1\x3e"), "Hello, Hoplon", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/h1\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/h1\x3e"), "\n    \n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cmy-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cmy-list\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : 
    Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "first thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n      ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cspan\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cspan\x3e"), "second thing", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/span\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/span\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/my-list\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/my-list\x3e"), "\n\n    ", 
    Y.a ? Y.a(y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3cp\x3e\x3ctext\x3e"), "You've clicked ~{clicks} times, so far.", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/text\x3e\x3c/p\x3e"), "\n    ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3cbutton") : Y.call(null, y([Q, "nt"], !0), "\x3cbutton"), " ", Y.a ? Y.a(y([Q, "na"], !0), "on-click\x3d") : Y.call(null, y([Q, "na"], !0), "on-click\x3d"), Y.a ? Y.a(y([Q, "s"], !0), 
    '"{{ #(swap! clicks inc) }}"') : Y.call(null, y([Q, "s"], !0), '"{{ #(swap! clicks inc) }}"'), Y.a ? Y.a(y([Q, "nt"], !0), "\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3e"), "click me", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/button\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/button\x3e"), "\n  ", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/body\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/body\x3e"), "\n", Y.a ? Y.a(y([Q, "nt"], !0), "\x3c/html\x3e") : Y.call(null, y([Q, "nt"], !0), "\x3c/html\x3e"), "\n"));
    f.b ? f.b(g) : f.call(null, g);
    g = fl.g ? fl.g() : fl.call(null);
    f.b ? f.b(g) : f.call(null, g);
    g = al.a ? al.a(y([bj, "padding:30px 0px;"], !0), "Copyright 100") : al.call(null, y([bj, "padding:30px 0px;"], !0), "Copyright 100");
    f.b ? f.b(g) : f.call(null, g);
    c.b ? c.b(f) : c.call(null, f);
    f = vl();
    g = S.b ? S.b("asdf") : S.call(null, "asdf");
    f.b ? f.b(g) : f.call(null, g);
    c.b ? c.b(f) : c.call(null, f);
    a.b ? a.b(c) : a.call(null, c);
    return a
  }(), function() {
    var a = Yl.g ? Yl.g() : Yl.call(null), c = cl.b ? cl.b("About") : cl.call(null, "About");
    a.b ? a.b(c) : a.call(null, c);
    c = S.b ? S.b("This is the about content.") : S.call(null, "This is the about content.");
    a.b ? a.b(c) : a.call(null, c);
    return a
  }(), function() {
    var a = Zl.g ? Zl.g() : Zl.call(null), c = cl.b ? cl.b("Contact") : cl.call(null, "Contact");
    a.b ? a.b(c) : a.call(null, c);
    c = S.b ? S.b("This is the contact content.") : S.call(null, "This is the contact content.");
    a.b ? a.b(c) : a.call(null, c);
    return a
  }()]))
}
var gm = ["tailrecursion", "hoplon", "app_pages", "G__8078", "hoploninit"], hm = fa;
gm[0] in hm || !hm.execScript || hm.execScript("var " + gm[0]);
for(var im;gm.length && (im = gm.shift());) {
  gm.length || void 0 === fm ? hm = hm[im] ? hm[im] : hm[im] = {} : hm[im] = fm
}
;