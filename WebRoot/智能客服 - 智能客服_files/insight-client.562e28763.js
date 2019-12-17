!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(e){return"function"==typeof e}function u(e){return"object"==typeof e&&null!==e}function l(e){return void 0===e}((e.exports=r).EventEmitter=r).prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,i,a;if(this._events||(this._events={}),"error"===e&&(!this._events.error||u(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(l(n=this._events[e]))return!1;if(s(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(u(n))for(o=Array.prototype.slice.call(arguments,1),r=(a=n.slice()).length,i=0;i<r;i++)a[i].apply(this,o);return!0},r.prototype.on=r.prototype.addListener=function(e,t){var n;if(!s(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,s(t.listener)?t.listener:t),this._events[e]?u(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,u(this._events[e])&&!this._events[e].warned&&(n=l(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&0<n&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.once=function(e,t){if(!s(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,o,i;if(!s(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,r=-1,n===t||s(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(u(n)){for(i=o;0<i--;)if(n[i]===t||n[i].listener&&n[i].listener===t){r=i;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(s(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?s(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(s(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,p){p.defaults={},p.set=function(e,t,n){var r=n||{},o=p.defaults,i=r.expires||o.expires,a=r.domain||o.domain,c=void 0!==r.path?r.path:void 0!==o.path?o.path:"/",s=void 0!==r.secure?r.secure:o.secure,u=void 0!==r.httponly?r.httponly:o.httponly,l=void 0!==r.samesite?r.samesite:o.samesite,f=i?new Date("number"==typeof i?(new Date).getTime()+864e5*i:i):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+t.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(f&&0<=f.getTime()?";expires="+f.toUTCString():"")+(a?";domain="+a:"")+(c?";path="+c:"")+(s?";secure":"")+(u?";httponly":"")+(l?";samesite="+l:"")},p.get=function(e){for(var t=document.cookie.split(";");t.length;){var n=t.pop(),r=n.indexOf("=");if(r=r<0?n.length:r,decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))===e)return decodeURIComponent(n.slice(r+1))}return null},p.erase=function(e,t){p.set(e,"",{expires:-1,domain:t&&t.domain,path:t&&t.path,secure:0,httponly:0})},p.all=function(){for(var e={},t=document.cookie.split(";");t.length;){var n=t.pop(),r=n.indexOf("=");r=r<0?n.length:r,e[decodeURIComponent(n.slice(0,r).replace(/^\s+/,""))]=decodeURIComponent(n.slice(r+1))}return e}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"config",function(){return ee}),n.d(r,"register",function(){return oe}),n.d(r,"watch",function(){return g}),n.d(r,"care",function(){return b}),n.d(r,"fill",function(){return H}),n.d(r,"captureTrace",function(){return m}),n.d(r,"concatTrace",function(){return x}),n.d(r,"EventLevel",function(){return w}),n.d(r,"shutdown",function(){return te}),n.d(r,"stat",function(){return ie}),n.d(r,"cgi",function(){return ae}),n.d(r,"on",function(){return ce}),n.d(r,"off",function(){return se}),n.d(r,"emit",function(){return ue});var o=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return"function"==typeof e}function u(e){return e&&"object"===i(e)}function c(e){return"number"==typeof e}function a(e){return"string"==typeof e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l="object"===("undefined"==typeof crypto?"undefined":s(crypto))&&crypto.getRandomValues?function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20,t=self.crypto;e=e||21;var n="",r=t.getRandomValues(new Uint8Array(e));for(;0<e--;)n+="_~getRandomVsCrypwhil0214563789bcfjkquvxzABDEFGHIJKLMNOPQSTUWXYZ"[63&r[e]];return n}:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20,t="";for(;0<e--;)t+="_~varfunctio0125634789bdegjhklmpqswxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[64*Math.random()|0];return t};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Object";if("object"===p(e)){var n=Object.entries(e).filter(function(e){var t=f(e,2),n=t[0],r=t[1];return n.length<20&&!L(r)}).map(function(e){var t=f(e,2),n=t[0],r=t[1];return null===r||"object"!==p(r)?(r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50;return a(e)?e.length<=t?e:e.slice(0,t-3)+"...":e}(String(r))||"<empty>",/\n/.test(r)&&(r="<text>"),[n,r].join("=")):n}).slice(0,6).join(", ");return"".concat(t,"(").concat(n,")")}}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var h=["imgcache.qq.com/qcloud/insight/insight-client"];function d(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:new Error("captureStack");return t&&t.stack?(e=t.stack,e.split(/\r?\n/g).filter(function(t){return!h.some(function(e){return-1<t.indexOf(e)})}).join("\n")):""}function m(e,t,n){var r,o;return e&&"object"===v(e)?(r=e.message||e.msg||T(e,t),o=e.stack):"string"==typeof e&&(r=e),r||(r=t||"[Unknown Error]"),o||(o=n||d(new Error(r))),{message:r,stack:o}}function x(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{message:e.message,stack:[e.stack].concat(y(n.filter(Boolean).map(function(e){return e.stack}))).join("\n")}}function g(r,o,i){return function(){var e=arguments,t=function(){if(!i)return{};var e=arguments;try{return i.apply(this,e)}catch(e){return m(e)}}.apply(this,e);if(null!==t){var n=Object.assign(m(new Error(t&&t.message||"监听的方法被调用")),t);o.push(n)}return r.apply(this,e)}}function b(o,e){if("function"!=typeof o)return o;try{if(o.__insight_internal__||o.__insight_careto__)return o;if(o.__insight_careby__)return o.__insight_careby__}catch(e){return o}var i=e.capture,a=e.before,c=e.after,t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];L(a)&&a.apply(this,t);try{return t=t.map(function(e){return b(e,{capture:i})}),o.apply(this,t)}catch(e){var r=m(e);i(r,o,e)}finally{if(L(c))try{c.apply(this,t)}catch(e){}}};try{for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}catch(e){}return t.prototype=o.prototype,(o.__insight_careby__=t).__insight_careto__=o,t}var w={Info:0,Warn:1,Error:2},_=n(1),O=n.n(_);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){var e=function(){var e=[],t=window.__IDC_DOMAINS__;if("object"===j(t))for(var n in t)!0===t[n]&&e.push(n);return{idcDomains:e.join("; "),idcDomainCount:e.length}}(),t=window.LOGIN_INFO||{};return{path:[location.pathname,location.hash].join("").replace(/^\/#/,""),uin:t.loginUin,ownerUin:t.ownerUin,quid:O.a.get("qcloud_uid"),nickname:function(){try{return document.querySelector(".qc-header-nav .qc-nav-user .qc-user-name").textContent.trim()}catch(e){return"<unknown>"}}(),idcDomains:e.idcDomains,idcDomainCount:e.idcDomainCount,userArea:window.LOGIN_INFO&&window.LOGIN_INFO.area||1,userAppId:t.appId,userLang:window.VERSION||"zh",authType:window.LOGIN_INFO&&window.LOGIN_INFO.identity&&null!=window.LOGIN_INFO.identity.subjectType?window.LOGIN_INFO.identity.subjectType:-1}}function I(e){return(L(e)||u(e))&&(e.__insight_internal__=!0),e}var k="function"==typeof navigator.sendBeacon?function(e,t){navigator.sendBeacon(e,JSON.stringify(t))}:function(e,t){var n=XMLHttpRequest;/msie (\d+)/i.test(navigator.userAgent)&&+RegExp.$1<=9&&"function"==typeof XDomainRequest&&(n=XDomainRequest);var r=I(new n);r.open("POST",e),r.send(JSON.stringify(t))},E=function(e){var t="https://insight.cloud.tencent.com/event?e="+(Array.isArray(e)?e:[e]).filter(function(e){return e&&e.event}).map(function(e){return"stat"===e.event?[e.ns,e.stat].join(":"):e.event}).slice(0,5).join("+");return k(t,e)};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var A,C=[[],[],[]],R=function(e,t){if(t)E(e);else{var n=C[e.level]||C[0];for(n.push(e);20<n.length;)n.shift();e.level>=w.Warn&&function(){var e,t,n=C;C=[[],[],[]];for(var r=[];e=n.pop();)for(;t=e.pop();)r.push(t);E(r)}()}},N=[],M=(new Date).getTime(),D=function(){M=(new Date).getTime();var e=N.splice(0,20);E(e)},q=window.setInterval(function(){if(N.length){var e=(new Date).getTime();(10<=N.length||15e3<e-M)&&D()}},5e3);function H(e,t,n){try{if(!(t in e))return;var r=e[t];if(L(r)){if(r.__insight_fillby__)return void(e[t]=r.__insight_fillby__);var o=n(r);(o.__insight_fillto__=r).__insight_fillby__=o,e[t]=o}}catch(e){}}function U(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}try{A=localStorage.getItem("debugInsight")}catch(e){}var B,F=new o.EventEmitter,G="qcconsole",W="on",J=l(),K=+new Date,V=function(){return+new Date},z=!1,Q=null,Y=function(e){return!0},Z=function(e,t){return function(){try{return e.apply(void 0,arguments)}catch(e){return t.apply(void 0,arguments)}}},ee=function(e){u(e)&&(a(e.app)&&(G=e.app),a(e.lid)&&(J=e.lid),c(e.born)&&(K=e.born),L(e.time)&&(V=Z(e.time,V)),"boolean"==typeof e.iframeMode&&(z=e.iframeMode),u(e.iframeTarget)&&(Q=e.iframeTarget),L(e.shouldReportEvent)&&(Y=Z(e.shouldReportEvent,Y)))},te=function(){W="off",D(),clearInterval(q)},ne=function(e,t,n,r){if("on"===W){var o=function(e,t,n,r,o,i,a){var c=Object.assign({app:e,event:o,lid:t,born:n,at:r()},S(),i,a),s={};for(var u in c)if(c.hasOwnProperty(u)){var l=c[u];if("object"===P(l))try{l=JSON.stringify(l)}catch(e){l=e.message}"function"==typeof l&&(l=l.name),s[u]=l}return s}(G,J,K,V,e,t,n);if(F.emit("eventCreate",o),A){var i=["INFO","WARN","ERROR"][o.level],a=["skyblue","yellow","#fb7a7a"][o.level];console.groupCollapsed("%c%s%c %c%s %s %c%s %c(+%dms)","padding: 1px 4px; border-radius: 2px; background: "+a,i,"background: none","font-weight: bold",o.event,"(blame ".concat(o.productId,", ").concat(o.productBlame,")"),"font-weight: normal; color: purple; background: #f0f0f0; display: inline-block; padding: 2px; border-raidus: 1px;",o.message,"font-weight: normal; color: #999",o.at-o.born),console.log(o),console.groupEnd(),o.debug=!0}Y(o)&&("stat"===e?function(e,t){if(t)return N.unshift(e),D();N.push(e)}(o,r):R(o,r))}};B=ne,window.addEventListener("message",I(function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}if(u(t)&&"insight-event"===t.type){var n=t.payload,r=n.name,o=n.meta,i=n.data,a=n.urgent;r&&B(r,o,i,a)}}));var re=function(i,a){return{name:i,meta:a,push:function(e,t){var n,r,o;z?(n=Q||parent,r={name:i,meta:a,data:e,urgent:t},o=JSON.stringify({type:"insight-event",payload:r}),n.postMessage(o,function(e){var t;try{t=e.origin}catch(e){}return t||"*"}(n))):ne(i,a,e,t)}}},oe=function(e,t){if(!t||void 0===t.level)throw new Error("Insight: 请提供注册事件的公共属性，且至少包含 level 字段");if(-1===[w.Info,w.Warn,w.Error].indexOf(t.level))throw new Error("Insight: level 取值不正确，请使用 Insight.EventLevel 中的枚举值");return re(e,t)},ie=function(e,t,n){if(!e||-1==e.indexOf(":"))throw new Error("Insight: 请提供自定义事件的名称，格式如：ns:stat");var r=X(e.split(":"),2),o=r[0],i=r[1],a={ns:o,stat:i,level:w.Info};return t=Object.assign({message:"统计 ".concat(o,":").concat(i)},t),ne("stat",a,t,n)},ae=function(e){var t=e.code,n=e.service,r=void 0===n?"":n,o=e.action,i=e.cost,a=U(e,["code","service","action","cost"]);void 0!==t&&o&&(!c(i)||i<=0||ie("console:cgi",function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({code:isNaN(parseInt(t,10))?-99999:parseInt(t,10),errorCode:String(t),service:r,action:o,cost:i,message:"CGI(".concat(r,".").concat(o,") #").concat(t," ").concat(i,"ms")},a),!1))},ce=F.on.bind(F),se=F.removeListener.bind(F),ue=F.emit.bind(F);function le(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fe(e,t,n){return t&&le(e.prototype,t),n&&le(e,n),e}function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e){for(var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:80,r=e,o=[],i=0,a=0,c=" > ".length;r&&i++<10&&!("html"===(t=ve(r))||1<i&&a+o.length*c+t.length>=n);)o.push(t),a+=t.length,r=r.parentNode;return o.reverse().join(" > ")}function ve(e){var t,n,r,o,i,a=[];if(!e||!e.tagName)return"";if(a.push(e.tagName.toLowerCase()),e.id&&a.push("#".concat(e.id)),(t=e.className)&&"string"==typeof t)for(n=t.split(/\s+/),i=0;i<n.length;i++)a.push(".".concat(n[i]));var c=["type","name","title","alt"];for(i=0;i<c.length;i++)r=c[i],(o=e.getAttribute(r))&&a.push("[".concat(r,'="').concat(o,'"]'));return a.join("")}function he(e,t){console.log("%c%s","background-color: #fdf0f0; color: red;","".concat(e,"\n").concat("---------------------------------------------------------","\n").concat(t.stack))}var de={speed:function(e,t){return de.bytes(e,t,["byte/s","K/s","M/s","G/s"])},bytes:function(e,t,n){for(var r=(n=n||["byte","K","M","G","T","P"]).shift();1024<e&&n.length;)e/=1024,r=n.shift();return e.toFixed("number"==typeof t?t:1)+r}};function me(e,t,n){var r=ge(t),o=!0,i=!1,a=void 0;try{for(var c,s=r[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var u=c.value;if(u in e)return[e[u],u]}}catch(e){i=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}var l=!0,f=!1,p=void 0;try{for(var y,v=n[Symbol.iterator]();!(l=(y=v.next()).done);l=!0){var h=ge(y.value),d=!0,m=!1,g=void 0;try{for(var b,w=r[Symbol.iterator]();!(d=(b=w.next()).done);d=!0){var _=b.value,O=!0,j=!1,S=void 0;try{for(var k,E=h[Symbol.iterator]();!(O=(k=E.next()).done);O=!0){var L=k.value+_;if(L in e)return[e[L],L]}}catch(e){j=!0,S=e}finally{try{O||null==E.return||E.return()}finally{if(j)throw S}}}}catch(e){m=!0,g=e}finally{try{d||null==w.return||w.return()}finally{if(m)throw g}}}}catch(e){f=!0,p=e}finally{try{l||null==v.return||v.return()}finally{if(f)throw p}}return[null,null]}function ge(e){return[e,be(e),we(e),we(be(e))].reduce(function(e,t){return-1<e.indexOf(t)?e:e.concat([t])},[])}function be(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function we(e){return"_"+e}function _e(e,t){return Se(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||je()}function Oe(e){return Se(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||je()}function je(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function Se(e){if(Array.isArray(e))return e}function ke(e){return(ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){Le(t,e,n[e])})}return t}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){/^https?:\/\//.test(e)||/^\//.test(e)||(e="/"+e);var t=Oe((e=e.split("//").pop()).split("/")),n=t[0],r=_e(t.slice(1).join("/").split("?"),2),o=r[0],i=r[1];return o="/"+o,i&&(i=i.split("&").filter(function(e){return!/=[\d\.]+$/.test(e)}).join("$")),{hostname:n||location.hostname,cgi:i?[o,i].join("?"):o}}var xe=[{install:function(e){var t=e.register,n=e.captureTrace,r=e.EventLevel;if("stackTraceLimit"in Error)try{Error.stackTraceLimit=20}catch(e){}var o=t("js-error",{level:r.Error});return window.addEventListener("error",function(e){o.push(function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({source:"window"},n(e&&e.error||e,"捕获到 window.onerror")))}),{jsErrorBus:o}}},{install:function(e){var t=e.register,y=e.captureTrace,v=t("promise-error",{level:e.EventLevel.Error}),n=function(o){var e=function(){function e(n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.promise=new o(function(e,t){return n(e,function(e){try{r.promise.trace=y("PromiseRejection (async)")}catch(e){}t(e)})}),this.promise.createTrace=y("Promise (async)")}return fe(e,null,[{key:"reject",value:function(e){var t=o.reject(e);try{t.trace=y("Promise rejection (async)")}catch(e){}return t}}]),fe(e,[{key:"then",value:function(){var e;return(e=this.promise).then.apply(e,arguments)}},{key:"catch",value:function(){var e;return(e=this.promise).catch.apply(e,arguments)}},{key:"finally",value:function(){var e;return(e=this.promise).finally.apply(e,arguments)}}]),e}();e.__OriginPromise__=o;for(var t=["resolve","reject","all","race","try","catch","finally"],n=0;n<t.length;n++){var r=t[n];!e[r]&&L(o[r])&&(e[r]=o[r].bind(o))}return e};H(window,"Promise",n);var r=window.Promise;Object.defineProperty(window,"Promise",{configurable:!0,enumerable:!0,set:function(e){r=n(e)},get:function(){return r}});var h,d,m,o=function(e){if(r=(n=t=e)&&n.reason||n,o=t&&t.promise,i=o&&o.trace,a=!0,r!=h&&(a=!1,h=r),i&&i!==d&&(a=!1,d=i),clearTimeout(m),m=setTimeout(I(function(){h=d=void 0}),10),!a){var t,n,r,o,i,a,c,s,u,l=(c=e)&&c.reason||c,f=(u=(s=e)&&s.promise)&&u.trace?x(u.trace,u.createTrace):null,p=y(l,"UnhandledRejection");v.push(x(p,f))}};return Object.defineProperties?Object.defineProperties(window,{onunhandledrejection:{configurable:!1,enumerable:!0,get:function(){return o},set:function(){console.warn("注意：我们发现你的业务使用了 window.onunhandledrejection 来捕获 Promise 错误，目前控制台已统一收集这些错误。如你确实需要使用，请与平台同事联系，谢谢合作！"),console.trace("调用位置：")}}}):window.onunhandledrejection=o,{promiseErrorBus:v}}},{install:function(e){var t=e.register,n=e.EventLevel,o=t("cookie",{level:n.Info}),i=!1;e.on("eventCreate",function(r){!i&&r.level>n.Info&&(i=!0,o.push({message:"Cookie 上报",cookie:document.cookie})),"string"==typeof r.cookie&&(r.cookie=r.cookie.replace(/(skey|p_skey|cpskey)=(.+?)(;|$)/g,function(e,t,n){return(n=function(e){if(!e||"string"!=typeof e)return e;var t=e.length;if(!t)return e;var n=Math.ceil(t/6);return e.slice(0,n)+"******"+e.slice(t-n)}(n))?t+"="+(r[t]=n)+";":e}))})}},{install:function(e){var t=!1;e.on("eventCreate",function(e){"logout"!==e.event||t?t&&Object.assign(e,{sessionLost:!0}):t=!0})}},{install:function(e){var t=e.register,n=e.watch,r=t("error-log",{level:e.EventLevel.Warn});"object"===("undefined"==typeof console?"undefined":pe(console))&&H(console,"error",function(e){return n(e,r,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(1!==t.length)return{message:t.join(", ")||"console.error 输出"};var r=t[0];if("string"==typeof r)return{message:r};var o={message:r&&r.message||T(r)};return r&&r.stack&&(o.stack=r.stack),o})})}},{install:function(e){var o=0,i=null,a=e.register("click",{level:e.EventLevel.Info}),c=e.register("keypress",{level:e.EventLevel.Info}),s=function(e,t){if(o=void 0,i!==e){var n,r;i=e;try{n=ye(e.target),r=ye(e.target,300)}catch(e){r=n="<unknown>"}switch(e.type){case"click":a.push({message:"点击 "+n,fullTarget:r,stack:t});break;case"keydown":c.push({message:"输入 "+n,fullTarget:r,stack:t})}}};return document.addEventListener("click",e.reportClick,!1),document.addEventListener("keydown",e.reportKeypress,!1),{reportClick:I(s),reportKeypress:I(function(e,t){var n;try{n=e.target}catch(e){return}var r=n&&n.tagName;r&&("INPUT"===r||"TEXTAREA"===r||n.isContentEditable)&&(o||s(e,t),o&&clearTimeout(o),o=setTimeout(function(){o=void 0},3e3))})}}},{install:function(s){for(var u=s.captureTrace,l=s.jsErrorBus,e=function(e){var t=window,n=t[e]&&t[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(H(n,"addEventListener",function(c){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0],r=t[1];if(!r)return c.call.apply(c,[this].concat(t));var a=u("".concat(i," (event)")),o={before:function(e){if(e){var t,n;try{t=e.type;var r=ye(n=e.target);a.message="".concat(i," (").concat(r,")")}catch(e){return}var o=function(e){return n instanceof Node&&t===e};o("click")&&L(s.reportClick)?s.reportClick(e,a.stack):o("keydown")&&L(s.reportKeypress)?s.reportKeypress(e,a.stack):n instanceof XMLHttpRequest&&n.__insight_follow__&&(a=x(a,n.__insight_follow__.sendTrace))}},capture:function(e){var t=x(e,a);l.push(function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({source:i+"-event"},t)),he("事件处理器 <".concat(i,"> 发生异常："),t)}};try{r.handleEvent&&(r.handleEvent=b(r.handleEvent,o))}catch(e){}return t[1]=b(r,o),c.call.apply(c,[this].concat(t))}}),H(n,"removeEventListener",function(o){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0];var r=t[1];"function"==typeof r&&(t[1]=r.__insight_careby__||r);try{return o.call.apply(o,[this].concat(t))}catch(e){}}}))},t=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],n=0;n<t.length;n++){e(t[n])}}},{install:function(e){var s=e.care,u=e.captureTrace,l=e.jsErrorBus,t=function(c){var e=window;"function"==typeof e[c]&&H(e,c,function(a){return function(e){for(var n=u("".concat(c," (async)")),t=s(e,{capture:function(e){var t=x(e,n);l.push(function(o){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.forEach(function(e){var t,n,r;t=o,r=i[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return o}({source:c},t)),he("<".concat(c,"> 异常："),t)},after:function(){"setInterval"!==c&&(n=null)}}),r=arguments.length,o=new Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return a.call.apply(a,[this,t].concat(o))}})};t("setTimeout"),t("setInterval"),t("requestAnimationFrame")}},{install:function(e){if(u(window.seajs)){var t=e.register,n=e.EventLevel,i=t("resource-error",{level:n.Error}),r=t("resource-retry",{level:n.Info}),a=!1,c=function(e){return(e||"").split(/\//g).pop().split("?").shift()},s=function(e){var t=[];return 0<e.retry&&t.push("retry: "+e.retry),isNaN(+e.status)||t.push("status: "+e.status),0<e.rtt&&t.push("rtt: "+e.rtt+"ms"),0<e.speed&&t.push("speed: "+de.speed(e.speed)),0<e.bytes&&t.push("size: "+de.bytes(e.bytes)),e.server&&t.push("server: "+e.server),0<t.length?" ("+t.join("; ")+")":""};seajs.on("resource-error",function(e){var t=e.url,n=c(t),r=e.type;switch(r){case"js":case"css":var o=r.toUpperCase()+" 加载失败："+n+s(e);i.push(Object.assign(e,{message:o})),"js"===r&&(a=!0)}}),seajs.on("resource-load",function(e){if(0<e.retry){var t=e.url,n="重试成功："+c(t)+s(e);r.push(Object.assign(e,{message:n}),!0)}}),e.on("eventCreate",function(e){a&&(e.asle=!0)})}}},{install:function(e){var t=e.register,n=e.EventLevel,r=e.shutdown,o=t("unload",{level:n.Info});window.addEventListener("unload",function(){o.push({message:"用户离开"},!0),r()})}},{install:function(e){if("XMLHttpRequest"in window){var i,a,c,s,t=e.register,u=e.care,l=e.captureTrace,n=e.EventLevel,f=e.jsErrorBus,j=e.cgi,S=t("xhr-error",{level:n.Error}),k=t("xhr-slow",{level:n.Warn}),E=t("cgi-error",{level:e.EventLevel.Warn}),p=null,y=(i="insight-cgi-trace-d93xK9m42pLooMc3945kxJdsIuMMd4551Scd-",a=new RegExp("(&|\\?)".concat(i,"(\\d+)($|&)")),c={},s=0,{provide:function(t,e){if("string"!=typeof t)return t;try{var n=++s,r=Te(t).cgi;c[n]={trace:l("CGI Call: "+r),options:e};var o=-1<t.indexOf("?")?"&":"?";return"".concat(t).concat(o).concat(i).concat(n)}catch(e){return t}},extract:function(t){try{var e,n,r=a.exec(t);if(r){t=t.replace(a,function(e,t,n,r){switch(t+(r||"$")){case"?$":return"";case"?&":return"?";case"&&":return"&";case"&$":return""}});var o=r[2],i=c[o];i&&(e=i.trace,n=i.options,delete c[o])}return{url:t,cgiTrace:e,cgiTraceOptions:n}}catch(e){return{url:t}}}}),v=function(e){H(e,"open",function(u){return function(e,t){var n=y.extract(t),r=n.url,o=n.cgiTrace,i=n.cgiTraceOptions;if(!p){!function(t,n){function r(){n.aborted=!0}function o(e){e&&(0<e.total||0<e.loaded)&&(n.receiveBytes=Math.max(e.total,e.loaded))}t.__insight_internal__||(t.__insight_follow__=n,t.addEventListener("abort",r),t.addEventListener("progress",o),t.addEventListener("readystatechange",I(function e(){try{switch(t.readyState){case 0:case 1:break;case 2:n.receiveTime=new Date,n.responseHeaders=t.getAllResponseHeaders();break;case 3:break;case 4:if(n.loadTime)return;n.loadTime=new Date,n.status=+t.status,n.response=t.response,setTimeout(function(){try{n.aborted||h(t,n)}catch(e){}finally{t.__insight_follow__=void 0,t.removeEventListener("abort",r),t.removeEventListener("readystatechange",e),t.removeEventListener("progress",o)}})}}catch(e){}})))}(this,{method:e,url:r,cgiTrace:o,cgiTraceOptions:i});for(var a=arguments.length,c=new Array(2<a?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];return u.apply(this,[e,r].concat(c))}console.warn(p,e,r)}}),H(e,"setRequestHeader",function(r){return function(e,t){if(!p){var n=this.__insight_follow__;return n&&(n.requestHeaders=n.requestHeaders||{},n.requestHeaders[e]=t),r.call(this,e,t)}}}),H(e,"send",function(s){return function(){if(!p){for(var e=this,r=e.__insight_follow__,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!r)return s.apply(this,n);r.sendTime=new Date,r.sendTrace=l("XHR Send (async)");for(var i=["onload","onabort","onerror","onprogress","onreadystatechange"],a=function(){var n=i[c];H(e,n,function(e){return u(e,{capture:function(e){var t=r.cgiTrace;e=x(e,r.sendTrace,t),f.push(Ee({source:"xhr-".concat(n)},e)),he("XHR <".concat(n,"> 异常："),e)}})})},c=0;c<i.length;c++)a();return s.apply(this,n)}}})},h=function(e,t){var n=t.method,r=t.url,o=t.sendTime,i=t.receiveTime,a=t.receiveBytes,c=t.loadTime,s=t.status,u=t.responseHeaders,l=t.response,f=t.cgiTrace,p=t.cgiTraceOptions,y=t.sendTrace,v=Te(r),h=v.cgi,d=v.hostname,m=+i-+o||-1,g=+c-+o||-1,b=Math.max(+c-+i,1),w=0<a?1e3*a/b:0,_={cgi:h,status:s,rtt:m,cost:g,speed:de.speed(w)},O={method:n,url:r,cgi:h,hostname:d,rtt:m,cost:g,bytes:a,speed:w,status:s,responseHeaders:u,stack:x(y,f).stack,cookie:document.cookie};if(p&&L(p.extendReport))try{Object.assign(O,p.extendReport(e,t))}catch(e){}200!==s?S.push(Ee({message:T(_,"XHR 异常 ")},O)):("string"==typeof l&&function(){try{var e,t,n=JSON.parse(l);if("object"!==ke(n))return;if(n.Response){var r=n.Response;r.Error&&(e=r.Code,t=r.Message)}else e=me(n,"code",["err","error","ret","return"])[0],t=me(n,"message",["err","error","ret","return"])[0]||me(n,"msg",["err","error","ret","return"])[0];"string"==typeof e||"number"==typeof e&&0!==e?(-1==e&&null!==n.mccode&&(e=n.mccode),o=e,i=t,E.push(Ee({code:isNaN(parseInt(o,10))?-99999:parseInt(o,10),errorCode:String(o),errorMessage:i,message:T({code:o,message:i,cgi:h},"CGI 错误 ")},O))):(delete O.stack,j(Ee({code:e},O)))}catch(e){}var o,i}(),5e3<g&&k.push(Ee({message:T(_,"XHR 缓慢 ")},O)))};v(XMLHttpRequest.prototype);return{provideCgiTraceUrl:y.provide,spyForignFrameXHRByJqueryAjax:function(){if(window.$&&L($.ajax)){var i=XMLHttpRequest;H($,"ajax",function(o){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="object"===ke(t[0])?t[0]:t[1];return r&&L(r.xhr)&&H(r,"xhr",function(o){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=o.call(this,t);return!r||r instanceof i||v(r),r}}),o.apply(this,t)}})}},lockXhr:function(e){return p=e}}}}}],Ie=Object.assign({},r);window.Insight=Ie=Object.assign(Ie,{install:function(e){ee(e);for(var t=0;t<xe.length;t++){var n=xe[t];Ie=Object.assign(Ie,n.install(Ie,e))}return Ie}})}]);