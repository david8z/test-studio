import{r as i,G as t}from"./pUHJgJQ8.js";function c(n,u,e){let l=i(e==null?void 0:e.value),r=t(()=>n.value!==void 0);return[t(()=>r.value?n.value:l.value),function(o){return r.value||(l.value=o),u==null?void 0:u(o)}]}function p(n={},u=null,e=[]){for(let[l,r]of Object.entries(n))a(e,f(u,l),r);return e}function f(n,u){return n?n+"["+u+"]":u}function a(n,u,e){if(Array.isArray(e))for(let[l,r]of e.entries())a(n,f(u,l.toString()),r);else e instanceof Date?n.push([u,e.toISOString()]):typeof e=="boolean"?n.push([u,e?"1":"0"]):typeof e=="string"?n.push([u,e]):typeof e=="number"?n.push([u,`${e}`]):e==null?n.push([u,""]):p(e,u,n)}function s(n){var u,e;let l=(u=n==null?void 0:n.form)!=null?u:n.closest("form");if(l){for(let r of l.elements)if(r!==n&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(e=l.requestSubmit)==null||e.call(l)}}export{c as d,p as e,s as p};
