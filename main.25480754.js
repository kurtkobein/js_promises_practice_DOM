parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Promise(function(e,t){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){t(new Error("First promise was rejected"))},3e3)}),t=new Promise(function(e){var t=function(){e("Second promise was resolved")};document.addEventListener("click",t),document.addEventListener("contextmenu",t)}),n=new Promise(function(e){var t,n=0,s=function(s){s.type!==t&&(t=s.type,n++),2===n&&e("Third promise was resolved")};document.addEventListener("click",s),document.addEventListener("contextmenu",s)});function s(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("message","success"),e.includes("Second")&&t.classList.add("message--second"),e.includes("Third")&&t.classList.add("message--third"),t.textContent=e,document.body.append(t)}function i(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.classList.add("message","error-message","warning"),t.textContent=e,document.body.append(t)}e.then(s,i),t.then(s),n.then(s);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.25480754.js.map