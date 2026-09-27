"use strict";var b=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var P=b(function(K,p){
var A=require('@stdlib/math-base-assert-is-nan/dist');function B(a,e,i,g,u,s,l){var m,o,t,c,q,f,r,n,v,x;for(m=e.data,o=u.data,c=e.accessors[0],t=u.accessors[0],r=g,n=l,x=0;x<a&&(v=c(m,r),!(v===v&&t(o,n)===0));x++)r+=i,n+=s;if(x===a)return NaN;for(f=v,q=f,x+=1,x;x<a;x++)r+=i,n+=s,!t(o,n)&&(v=c(m,r),!A(v)&&(v<f?f=v:v>q&&(q=v)));return q-f}p.exports=B
});var y=b(function(L,O){
var C=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(a,e,i,g,u,s,l){var m,o,t,c,q,f,r,n;if(a<=0)return NaN;if(q=j(e),f=j(u),q.accessorProtocol||f.accessorProtocol)return D(a,q,i,g,f,s,l);for(t=g,c=l,n=0;n<a&&(r=e[t],!(r===r&&u[c]===0));n++)t+=i,c+=s;if(n===a)return NaN;for(o=r,m=o,n+=1,n;n<a;n++)t+=i,c+=s,!u[c]&&(r=e[t],!C(r)&&(r<o?o=r:r>m&&(m=r)));return m-o}O.exports=E
});var w=b(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(a,e,i,g,u){var s=R(a,i),l=R(a,u);return F(a,e,i,s,g,u,l)}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=y();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
