'use strict';

// @ts-nocheck
function $(e){if(window&&window.document){const t=window.document.querySelectorAll(e);for(let e of t){const t={};e.on=(n,o)=>{const r=e=>o(e);e.addEventListener(n,r),t[n]||(t[n]=[]),t[n].push({type:n,listener:r});},e.off=n=>{(n&&t[n]?[n]:Object.keys(t)).forEach(n=>{t[n].forEach(t=>{e.removeEventListener(t.type,t.listener);});});},e.empty=()=>e.innerHTML="",e.remove=()=>e.outerHTML="";}return Object.assign({},t[0],t)}}

exports.$ = $;
//# sourceMappingURL=microquery.min.cjs.map
