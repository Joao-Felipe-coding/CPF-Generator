!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,t){if(1&t&&(r=n(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)n.d(e,o,function(t){return r[t]}.bind(null,o));return e},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=4)}([function(r,t,n){var e=n(1);"string"==typeof e&&(e=[[r.i,e,""]]);var o={insert:"head",singleton:!1};n(3)(e,o);e.locals&&(r.exports=e.locals)},function(r,t,n){(t=r.exports=n(2)(!1)).push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);",""]),t.push([r.i,":root {\r\n  --primary-color: #ffffff;\r\n  --primary-color-dark: #665e4f;\r\n  --background-color: #F0F2F5;\r\n  --letter-color: #000000;\r\n  --focus-color: #483C32;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-color);\r\n  font-family: 'Poppins', sans-serif;\r\n  color: var(--letter-color);\r\n  font-size: 1.1em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background-color: var(--primary-color);\r\n  padding: 20px;\r\n  border-radius: 15px;\r\n  border: 1px solid rgb(226, 226, 226);\r\n} .container h1 {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  border-radius: 7px;\r\n  border: none;\r\n  background-color: var(--focus-color);\r\n  color: white;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n} form button:hover {\r\n  background-color: var(--primary-color-dark);\r\n} form button:active {\r\n  background-color: #29221de7;\r\n}\r\n\r\n.cpf-gerado {\r\n  color: var(--primary-color-dark);\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  margin-bottom: 40px;\r\n}",""])},function(r,t,n){"use strict";r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var n=function(r,t){var n=r[1]||"",e=r[3];if(!e)return n;if(t&&"function"==typeof btoa){var o=(a=e,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot).concat(r," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,c;return[n].join("\n")}(t,r);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(r,n){"string"==typeof r&&(r=[[null,r,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(var a=0;a<r.length;a++){var u=r[a];null!=u[0]&&e[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="(".concat(u[2],") and (").concat(n,")")),t.push(u))}},t}},function(r,t,n){"use strict";var e,o={},i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var r={};return function(t){if(void 0===r[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[t]=n}return r[t]}}();function u(r,t){for(var n=[],e={},o=0;o<r.length;o++){var i=r[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(u):n.push(e[a]={id:a,parts:[u]})}return n}function c(r,t){for(var n=0;n<r.length;n++){var e=r[n],i=o[e.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](e.parts[a]);for(;a<e.parts.length;a++)i.parts.push(b(e.parts[a],t))}else{for(var u=[];a<e.parts.length;a++)u.push(b(e.parts[a],t));o[e.id]={id:e.id,refs:1,parts:u}}}}function l(r){var t=document.createElement("style");if(void 0===r.attributes.nonce){var e=n.nc;e&&(r.attributes.nonce=e)}if(Object.keys(r.attributes).forEach((function(n){t.setAttribute(n,r.attributes[n])})),"function"==typeof r.insert)r.insert(t);else{var o=a(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var f,s=(f=[],function(r,t){return f[r]=t,f.filter(Boolean).join("\n")});function p(r,t,n,e){var o=n?"":e.css;if(r.styleSheet)r.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=r.childNodes;a[t]&&r.removeChild(a[t]),a.length?r.insertBefore(i,a[t]):r.appendChild(i)}}function d(r,t,n){var e=n.css,o=n.media,i=n.sourceMap;if(o&&r.setAttribute("media",o),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var v=null,m=0;function b(r,t){var n,e,o;if(t.singleton){var i=m++;n=v||(v=l(t)),e=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),e=d.bind(null,n,t),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return e(r),function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap)return;e(r=t)}else o()}}r.exports=function(r,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(r,t);return c(n,t),function(r){for(var e=[],i=0;i<n.length;i++){var a=n[i],l=o[a.id];l&&(l.refs--,e.push(l))}r&&c(u(r,t),t);for(var f=0;f<e.length;f++){var s=e[f];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete o[s.id]}}}}},function(r,t,n){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function o(r,t){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=function(r,t){if(r){if("string"==typeof r)return i(r,t);var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var e=0,o=function(){};return{s:o,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){c=!0,a=r},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++)e[n]=r[n];return e}function a(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,u(e.key),e)}}function u(r){var t=function(r,t){if("object"!=e(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==e(t)?t:t+""}n.r(t);var c=function(){function r(t){!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!1,configurable:!1,value:t.replace(/\D+/g,"")})}return t=r,e=[{key:"geraDigito",value:function(r){var t,n=0,e=r.length+1,i=o(r);try{for(i.s();!(t=i.n()).done;){var a=t.value;n+=e*Number(a),e--}}catch(r){i.e(r)}finally{i.f()}var u=11-n%11;return u<=9?String(u):"0"}}],(n=[{key:"sequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)===this.cpfLimpo}},{key:"geraCPF",value:function(){var t=this.cpfLimpo.slice(0,-2),n=r.geraDigito(t),e=r.geraDigito(t+n);this.novoCPF=t+n+e}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.sequencia()&&(this.geraCPF(),this.novoCPF===this.cpfLimpo)}}])&&a(t.prototype,n),e&&a(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,e}();function l(r){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function f(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,s(e.key),e)}}function s(r){var t=function(r,t){if("object"!=l(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var e=n.call(r,t||"default");if("object"!=l(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==l(t)?t:t+""}var p,d,v,m=function(){return r=function r(){!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r)},(t=[{key:"rand",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(t-r)+r))}},{key:"formatado",value:function(r){return r.slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}},{key:"geraNovoCPF",value:function(){var r=this.rand(),t=r+c.geraDigito(r)+c.geraDigito(r+1);return document.querySelector(".gerar-novo"),document.querySelector(".cpf-gerado"),this.formatado(t)}}])&&f(r.prototype,t),n&&f(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,t,n}();n(0);p=new m,d=document.querySelector(".gerar-novo"),v=document.querySelector(".cpf-gerado"),d.addEventListener("click",(function(){return v.innerHTML=p.geraNovoCPF()}))}]);
//# sourceMappingURL=bundle.js.map