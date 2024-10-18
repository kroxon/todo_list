(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([t.id,"body {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1.5fr 5fr;\n  grid-template-rows: auto 1fr;\n}\n\nheader {\n  grid-area: 1 / 1 / 2 / 3;\n  font-size: 2rem;\n  padding: 10px;\n}\n\nli {\n  list-style: none;\n  padding: 2px 0;\n}\n\nul {\n  padding-left: 20px;\n}\n\n#main-content {\n  padding-left: 40px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto auto 1fr;\n}\n\n.project-element {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n}\n\n.material-icons {\n  font-size: 20px;\n  color: rgb(216, 64, 64);\n}\n\nbutton.project-delete {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n}",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],d=o.base?c[0]+o.base:c[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=o(t,r),d=0;d<a.length;d++){var p=n(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),i=n.n(a),s=n(659),c=n.n(s),d=n(56),p=n.n(d),u=n(540),l=n.n(u),f=n(113),m=n.n(f),h=n(365),y={};function v(t,e,n,o="low",r=""){this.title=t,this.description=e,this._date=new Date(n).getTime(),this.priority=o,this.note=r,this.completed=!1}y.styleTagTransform=m(),y.setAttributes=p(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=l(),r()(h.A,y),h.A&&h.A.locals&&h.A.locals,v.prototype.markAsCompleted=function(){this.completed=!0},v.prototype.changePriority=function(t){["low","medium","high"].includes(t)?this.priority=t:console.error("Invalid priority. Must be 'low', 'medium', or 'high'.")},Object.defineProperty(v.prototype,"date",{set:function(t){this._date=new Date(t).getTime()},get:function(){return this._date}}),v.prototype.prettyDate=function(){return new Date(this._date).toLocaleDateString()};const g=v;function k(t){this.name=t,this.tasks=[]}k.prototype.addTask=function(t,e,n,o){const r=new g(t,e,n,o);this.tasks.push(r),this.sortByDateTasks()},k.prototype.sortByDateTasks=function(){this.tasks.sort(((t,e)=>t.date-e.date))},k.prototype.sortByPriorityTasks=function(){const t={high:1,medium:2,low:3};this.tasks.sort(((e,n)=>t[e.priority]-t[n.priority]))},k.prototype.removeTask=function(t){const e=this.tasks.indexOf(t);-1!==e&&this.tasks.splice(e,1)},k.prototype.setComplete=function(t){t.markAsCompleted()},k.prototype.changePriority=function(t,e){e.changePriority(t)};const T=k,x=[],b=new T("Project Alpha"),w=new T("Project Beta"),C=new T("Project Gamma");b.addTask("Task 1.1","Description for Task 1.1","2024-10-20","high"),b.addTask("Task 1.2","Description for Task 1.2","2024-10-28","medium"),b.addTask("Task 1.3","Description for Task 1.3","2024-10-24","low"),w.addTask("Task 2.1","Description for Task 2.1","2024-10-21","medium"),w.addTask("Task 2.2","Description for Task 2.2","2024-10-23","high"),w.addTask("Task 2.3","Description for Task 2.3","2024-10-25","low"),C.addTask("Task 3.1","Description for Task 3.1","2024-10-26","high"),C.addTask("Task 3.2","Description for Task 3.2","2024-10-21","medium"),C.addTask("Task 3.3","Description for Task 3.3","2024-10-20","low"),x.push(b),x.push(w),x.push(C);const D=x;!function(t){console.log(t);const e=document.querySelector(".projects");t.forEach((t=>{const n=document.createElement("div");n.classList.add("project-element");const o=document.createElement("div");o.textContent=t.name;const r=document.createElement("button");r.classList.add("project-delete"),r.innerHTML='<span class="material-icons">delete</span>',r.addEventListener("click",(()=>removeProject(index))),n.appendChild(o),n.appendChild(r),e.appendChild(n)}))}(D),D[0],function(t){console.log(t);const e=document.querySelector(".tasks");t.tasks.forEach((t=>{const n=document.createElement("div");n.textContent=t.priority,e.appendChild(n)}))}(function(t){const e=new T("temp");return t.forEach((t=>{e.tasks.push(...t.tasks)})),e}(D))})();