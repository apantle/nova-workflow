!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){t.exports=n(11)},function(t,e,n){"use strict";function r(t,e,n,r,o,a,i,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=s.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),u=null,l=0,f=[],d=n(14);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],e))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(g(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function v(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var i=l++;n=u||(u=y(e)),r=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=k.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=C.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=v(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}t&&p(v(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var w,_=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function C(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(16);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){var r=n(20);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){n(9),t.exports=n(26)},function(t,e,n){n(10),Nova.booting((function(t,e,r){t.component("workflow-card",n(21).default),t.component("todo-card",n(22).default)}))},function(t,e,n){Nova.booting((function(t,e,r){t.component("workflow-write-comment",n(23).default),t.component("workflow-status",n(24).default),t.component("workflow-activity",n(25).default)}))},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new C(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=w(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function d(){}function p(){}var v={};v[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(k([])));m&&m!==e&&n.call(m,o)&&(v=m);var y=p.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y.constructor=p,p.constructor=d,d.displayName=s(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n(4)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.timeline{position:relative;display:flex;flex-direction:column;width:100%}.timeline:before{content:"";position:absolute;top:0;left:18px;height:100%;width:4px;background:#d7e4ed;left:50%;margin-left:-2px}.timeline .item{width:48%}.timeline .item:nth-child(odd){align-self:flex-start}.timeline .item:nth-child(odd) svg{margin-left:.75rem}.timeline .item:nth-child(2n){align-self:flex-end;flex-direction:row-reverse}.timeline .item:nth-child(2n) svg{margin-right:.75rem}',""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n(5)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".action-selector>div{visibility:hidden;display:none}.action-selector>div.modal{visibility:visible;display:block}",""])},function(t,e,n){"use strict";n(6)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".card-panel[data-v-8a157248]{height:100%!important;min-height:150px}.action-selector>div[data-v-8a157248]{visibility:hidden;display:none}.action-selector>div.modal[data-v-8a157248]{visibility:visible;display:block}",""])},function(t,e,n){"use strict";n(7)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".item[data-v-1ba23f4a]:hover{cursor:pointer}.card-panel[data-v-1ba23f4a]{height:auto!important;min-height:150px}",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}}var l={props:["card","resource","resourceId","resourceName"],data:function(){return{state:0,actions:[],executing:!1,dueDateChangeModal:!1,dueAt:"",originalHandler:null}},mounted:function(){var t=this;return u(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.reloadStatus();case 2:t.state.transition=a(t.state.transitions.filter((function(t){return!0===t.userInteraction}))),t.dueAt=t.state.dueAt||"",t.getActions(),t.originalHandler=t.$refs.actionSelector.handleActionResponse,t.overwriteActionHandler();case 7:case"end":return e.stop()}}),e)})))()},methods:{overwriteActionHandler:function(){var t=this;this.$refs.actionSelector&&(this.$refs.actionSelector.handleActionResponse=function(){var e=u(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getActions(),t.reloadDetailView(),t.reloadStatus(),t.originalHandler(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},clearDue:function(){this.dueAt="",this.updateDue()},changeDue:function(){this.dueDateChangeModal=!0},onDueChange:function(t){this.dueAt=t},updateDue:function(){var t=this;return u(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Nova.request().put("/nova-vendor/nova-workflow/workflow/".concat(t.state.lastLog.id,"/?resourceName=").concat(t.resourceName,"&resourceId=").concat(t.resourceId,"&dueAt=").concat(t.dueAt));case 3:t.state=e.sent.data,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),t.$toasted.show(__("Error when changing the due date"),{type:"error"}),e.abrupt("return");case 10:t.$toasted.show(__("Due date successfully updated"),{type:"success"}),t.dueDateChangeModal=!1,t.reloadDetailView();case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))()},apply:function(t){var e=this;return u(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs.actionSelector.actions.filter((function(t){return"workflow-status-change"===t.uriKey})).map((function(t){return t.withoutConfirmation=!0})),e.$refs.actionSelector.selectedActionKey=t.action,e.$refs.actionSelector.selectedAction.fields=e.$refs.actionSelector.selectedAction.fields.filter((function(t){return"transition"!==t.name})),e.$refs.actionSelector.actionFormData=function(){return _.tap(new FormData,(function(n){n.append("resources",e.$refs.actionSelector.selectedResources),n.append("transition",t.name),_.each(e.$refs.actionSelector.selectedAction.fields,(function(t){t.fill(n)}))}))},e.$refs.actionSelector.determineActionStrategy();case 5:case"end":return n.stop()}}),n)})))()},getActions:function(){var t=this;return u(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.actions=[],e.abrupt("return",Nova.request().get("/nova-api/"+t.resourceName+"/actions",{params:{resourceId:t.resourceId}}).then((function(e){t.actions=e.data.actions})));case 2:case"end":return e.stop()}}),e)})))()},reloadStatus:function(){var t=this;return u(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nova.request().get("/nova-vendor/nova-workflow/workflow?resourceName=".concat(t.resourceName,"&resourceId=").concat(t.resourceId));case 2:t.state=e.sent.data;case 3:case"end":return e.stop()}}),e)})))()},reloadDetailView:function(){var t,e=this,n=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}(this.$root.$children);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.cards&&r.initializeComponent()}}catch(t){n.e(t)}finally{n.f()}setTimeout((function(){e.overwriteActionHandler()}),500)},handleClose:function(){this.dueDateChangeModal=!1}}},f=(n(15),n(17),n(1)),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",{staticClass:"px-4 py-4"},[n("div",{staticClass:"flex mb-3 relative"},[n("h3",{staticClass:"mr-3 text-base text-80 font-bold"},[t._v(t._s(t.__("Current status")))]),t._v(" "),t.state.dueIn?n("span",{staticClass:"whitespace-no-wrap px-2 py-1 rounded-full uppercase text-xs font-bold absolute pin-t pin-r",class:{"bg-orange-light text-orange-dark":!1===t.state.duePast,"bg-red-light text-red-dark":!0===t.state.duePast}},[t._v(t._s(t.__("Due"))+" "+t._s(t.state.dueIn))]):t._e()]),t._v(" "),n("div",{staticClass:"flex items-center mb-6"},[n("span",{staticClass:"w-4 h-4 block rounded-full mr-3 bg-blue",class:"bg-"+t.state.color}),t._v(" "),n("div",{staticClass:"flex items-center justify-between w-full"},[n("h2",{attrs:{dusk:"workflow-current-status"}},[t._v(t._s(t.state.title))]),t._v(" "),t.state&&t.state.can.changeDue?n("button",{staticClass:"btn btn-clear btn-icon btn-white",attrs:{"data-testid":"edit-resource",dusk:"edit-resource-button",title:"Bearbeiten"},on:{click:function(e){return e.preventDefault(),t.changeDue(e)}}},[n("svg",{staticClass:"text-80 h-6 w-6",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"calendar-edit",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM255.7 269.7l34.6 34.6c2.1 2.1 2.1 5.4 0 7.4L159.1 442.9l-35.1 5c-6.9 1-12.9-4.9-11.9-11.9l5-35.1 131.2-131.2c2-2 5.4-2 7.4 0zm75.2 1.4l-19.2 19.2c-2.1 2.1-5.4 2.1-7.4 0l-34.6-34.6c-2.1-2.1-2.1-5.4 0-7.4l19.2-19.2c6.8-6.8 17.9-6.8 24.7 0l17.3 17.3c6.8 6.8 6.8 17.9 0 24.7z"}})])]):t._e()])]),t._v(" "),t.state&&0!==t.state.responsibleUsers.length?n("div",{staticClass:"mb-6"},[n("h3",{staticClass:"mr-3 text-base text-80 mb-2"},[t._v(t._s(t.__("Responsibility")))]),t._v(" "),n("h5",{staticClass:"font-light"},t._l(t.state.responsibleUsers,(function(e){return n("span",{key:e.id},[n("a",{staticClass:"no-underline font-bold dim text-primary",attrs:{href:"/resources/users/"+e.id}},[t._v(t._s(e.name))]),t._v(", \n            ")])})),0)]):t._e(),t._v(" "),t.state.transitions&&t.state.transitions.length?n("div",[n("h3",{staticClass:"mr-3 text-base text-80 mb-2"},[t._v(t._s(t.__("Next Step")))]),t._v(" "),t.state.description?n("p",{staticClass:"text-80 mb-4 text-sm w-1/2"},[t._v(t._s(t.state.description))]):t._e(),t._v(" "),t._l(t.state.transitions,(function(e){return n("div",{key:e.name},[e.userInteraction?n("a",{staticClass:"btn btn-sm flex btn-outline items-center mb-2 block",attrs:{href:"",dusk:"workflow-apply-"+e.name},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.apply(e)}}},[t._v(t._s(e.title))]):t._e()])}))],2):t._e(),t._v(" "),t.resource?n("action-selector",{ref:"actionSelector",staticClass:"action-selector ml-3",attrs:{"resource-name":t.resourceName,actions:t.actions,"pivot-actions":{actions:[]},"selected-resources":[this.resourceId],"query-string":{}}}):t._e(),t._v(" "),n("portal",{attrs:{to:"modals"}},[n("transition",{attrs:{name:"fade"}},[t.dueDateChangeModal?n("modal",{attrs:{"class-whitelist":"flatpickr-calendar"},on:{"modal-close":t.handleClose}},[n("div",{staticClass:"bg-white rounded-lg shadow-lg overflow-hidden",staticStyle:{width:"500px"}},[n("heading",{staticClass:"border-b border-40 py-8 px-8",attrs:{level:2}},[t._v(t._s(t.__("Change due date")))]),t._v(" "),t._t("default",[n("default-field",{attrs:{field:{attribute:"due_in",name:t.__("Due on")},fullWidthContent:!0}},[n("template",{slot:"field"},[n("date-time-picker",{staticClass:"w-full form-control form-input form-input-bordered",attrs:{name:"due_in",value:t.dueAt,dateFormat:"d.m.Y","enable-time":!1,"enable-seconds":!1,"first-day-of-week":1},on:{change:t.onDueChange}}),t._v(" "),t.dueAt?n("a",{staticClass:"no-underline font-bold dim text-primary pt-3 block",attrs:{href:""},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.clearDue(e)}}},[t._v(t._s(t.__("Remove due date")))]):t._e()],1)],2),t._v(" "),n("div",{staticClass:"bg-30 px-6 py-3 flex"},[n("div",{staticClass:"flex items-center ml-auto"},[n("button",{staticClass:"btn text-80 font-normal h-9 px-3 mr-3 btn-link",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleClose(e)}}},[t._v(t._s(t.__("Cancel")))]),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateDue(e)}}},[n("span",[t._v(t._s(t.__("Save")))])])])])])],2)]):t._e()],1)],1)],1)}),[],!1,null,"8a157248",null);e.default=d.exports},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}}var s={props:["card","resource","resourceId","resourceName"],data:function(){return{todos:[]}},mounted:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onLoad(),Nova.$on("cards.refresh",(function(){t.onLoad()}));case 2:case"end":return e.stop()}}),e)})))()},methods:{onAction:function(t){this.$router.push({path:t.path})},onLoad:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nova.request().get("/nova-vendor/nova-workflow/todos/?providers=".concat(t.card.providers.join(",")));case 2:t.todos=e.sent.data;case 3:case"end":return e.stop()}}),e)})))()}}},c=(n(19),n(1)),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"px-6 pt-4"},[n("div",{staticClass:"flex mb-2"},[n("h3",{staticClass:"mr-3 text-base text-80 font-bold"},[t._v(t._s(t.__("My tasks")))])])]),t._v(" "),0===t.todos.length?n("div",{staticClass:"px-6 pt-4 h-full flex justify-center items-center flex-col"},[n("svg",{staticClass:"h-24 w-24 mb-6 text-50",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"smile-beam",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[n("g",{staticClass:"fa-group"},[n("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M245.47,8C108.5,9.43-1.36,121.56,0,258.53S113.56,505.36,250.53,504,497.36,390.44,496,253.47,382.44,6.64,245.47,8ZM112,223.4c3.3-42.1,32.2-71.38,56-71.38s52.7,29.28,56,71.38c.7,8.6-10.8,11.9-14.9,4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.78,7.9-31.48,21.6l-9.5,17C122.82,235.3,111.32,231.9,112,223.4ZM363.69,345a149.34,149.34,0,0,1-229.54,2.35c-13.67-16.17,10.62-36.81,24.37-20.75a117.57,117.57,0,0,0,180.39-1.84c13.41-16.32,38.08,3.93,24.78,20.24ZM369,227.9l-9.5-17c-7.7-13.7-19.18-21.6-31.48-21.6s-23.8,7.9-31.5,21.6l-9.5,17c-4.1,7.3-15.6,4-14.9-4.5,3.3-42.1,32.2-71.38,56-71.38s52.68,29.28,56,71.38c.58,8.6-11,11.9-15.11,4.5Z",opacity:"0.4"}}),t._v(" "),n("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M168,152c-23.78,0-52.68,29.28-56,71.38-.7,8.5,10.8,11.9,15.1,4.5l9.5-17c7.7-13.7,19.18-21.6,31.48-21.6s23.8,7.9,31.5,21.6l9.5,17c4.1,7.4,15.6,4.1,14.9-4.5C220.7,181.3,191.8,152,168,152ZM384.08,223.4c-3.3-42.1-32.2-71.38-56-71.38s-52.7,29.28-56,71.38c-.7,8.5,10.8,11.8,14.9,4.5l9.5-17c7.7-13.7,19.2-21.6,31.5-21.6s23.78,7.9,31.48,21.6l9.5,17c4.11,7.4,15.71,4.1,15.11-4.5Z"}})])]),t._v(" "),n("h2",{staticClass:"mb-6 text-90"},[t._v(t._s(t.__("All done!")))])]):t._e(),t._v(" "),t._l(t.todos,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"px-6"},[n("div",{staticClass:"flex mb-4 mt-4"},[n("p",{staticClass:"flex items-center text-xl"},[t._v(t._s(r))])])]),t._v(" "),n("div",{staticClass:"border-t border-50"},t._l(e,(function(e){return n("div",{key:e.id,staticClass:"item px-6 py-4 border-b border-50 hover:bg-20 hover:cursor-pointer w-full",attrs:{dusk:"todo-item-"+e.id},on:{click:function(n){return t.onAction(e)}}},[n("div",{staticClass:"flex items-center w-full"},[n("span",{staticClass:"w-4 h-4 block rounded-full mr-3",class:"bg-"+e.color}),t._v(" "),n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex items-center justify-between w-full"},[n("h4",{staticClass:"mb-1 text-xs text-80 uppercase tracking-wide"},[t._v(t._s(e.model))]),t._v(" "),e.dueIn?n("span",{staticClass:"px-3 py-2 rounded-full uppercase text-xs font-bold",class:{"bg-orange-light text-orange-dark":!1===e.duePast,"bg-red-light text-red-dark":!0===e.duePast}},[t._v(t._s(t.__("Due"))+" "+t._s(e.dueFormatted))]):t._e()]),t._v(" "),n("h4",{staticClass:"text-base mb-1",class:{"text-orange-dark":!1===e.duePast,"text-red-dark":!0===e.duePast}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-base",domProps:{innerHTML:t._s(e.subtitle)}})])])])})),0)])}))],2)}),[],!1,null,"1ba23f4a",null);e.default=u.exports},function(t,e,n){"use strict";n.r(e);var r={data:function(){return{comment:""}},methods:{onSend:function(t){this.$emit("submit",this.comment),this.comment=""}}},o=n(1),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item flex items-center"},[n("div",{staticClass:"card w-full px-4 py-4"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"w-full form-control form-input form-input-bordered py-3 h-auto",attrs:{id:"notes",dusk:"notes",rows:"5"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary inline-flex items-center relative",attrs:{disabled:t.comment.length<=10,dusk:"update-button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onSend(e)}}},[n("span",{},[t._v(t._s(t.__("Submit comment")))])])])])}),[],!1,null,null,null);e.default=a.exports},function(t,e,n){"use strict";n.r(e);var r={props:["activity"],mounted:function(){}},o=n(1),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item flex items-center"},[n("div",{staticClass:"card w-full px-4 py-4"},[n("div",{staticClass:"flex justify-between text-sm text-80 mb-3"},[n("h4",[t._v(t._s(t.activity.user.fullname))]),t._v(" "),n("span",{staticClass:"uppercase tracking-wide"},[t._v(t._s(t.activity.created_at))])]),t._v(" "),t.activity.data?n("div",{staticClass:"flex items-center"},[n("span",{staticClass:"w-4 h-4 block rounded-full mr-3",class:"bg-"+t.activity.data.status.color}),t._v(" "),n("div",[t.activity.data.transition?n("h5",{staticClass:"font-light"},[t._v(t._s(t.activity.data.transition.title))]):t._e(),t._v(" "),n("h3",[t._v(t._s(t.activity.data.status.title))])])]):t._e(),t._v(" "),n("p",[t._v(t._s(t.activity.comment))])])])}),[],!1,null,null,null);e.default=a.exports},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function a(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}}var s={props:["resourceName","resourceId","field"],data:function(){return{activities:[]}},mounted:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetch(),Nova.$on("workflow-updated",(function(){t.fetch()}));case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){Nova.$off("workflow-updated")},methods:{onWriteComment:function(t){var e=this;return i(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Nova.request().post("/nova-vendor/nova-workflow/logs?resourceName=".concat(e.resourceName,"&resourceId=").concat(e.resourceId),{comment:t});case 2:r=n.sent.data,e.$toasted.show("Kommentar erfolgreich gespeichert",{type:"success"}),e.activities.unshift(r);case 5:case"end":return n.stop()}}),n)})))()},fetch:function(){var t=this;return i(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nova.request().get("/nova-vendor/nova-workflow/logs?resourceName=".concat(t.resourceName,"&resourceId=").concat(t.resourceId));case 2:t.activities=e.sent.data.data;case 3:case"end":return e.stop()}}),e)})))()}}},c=(n(12),n(1)),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"text-90 font-normal text-2xl mb-3"},[t._v(t._s(t.__("Activities")))]),t._v(" "),n("div",{staticClass:"timeline w-full"},[n("workflow-write-comment",{on:{submit:t.onWriteComment}}),t._v(" "),t._l(t.activities,(function(t){return n("workflow-status",{key:t.id,attrs:{activity:t}})}))],2)])}),[],!1,null,null,null);e.default=u.exports},function(t,e){}]);