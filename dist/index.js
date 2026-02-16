"use strict";var b=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var P=b(function(K,p){
var A=require('@stdlib/math-base-assert-is-nan/dist');function B(a,n,v,g,u,s,l){var m,o,t,c,q,f,r,e,i,x;for(m=n.data,o=u.data,c=n.accessors[0],t=u.accessors[0],r=g,e=l,x=0;x<a&&(i=c(m,r),!(i===i&&t(o,e)===0));x++)r+=v,e+=s;if(x===a)return NaN;for(f=i,q=f,x+=1,x;x<a;x++)r+=v,e+=s,!t(o,e)&&(i=c(m,r),!A(i)&&(i<f?f=i:i>q&&(q=i)));return q-f}p.exports=B
});var y=b(function(L,O){
var C=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(a,n,v,g,u,s,l){var m,o,t,c,q,f,r,e;if(a<=0)return NaN;if(q=j(n),f=j(u),q.accessorProtocol||f.accessorProtocol)return D(a,q,v,g,f,s,l);for(t=g,c=l,e=0;e<a&&(r=n[t],!(r===r&&u[c]===0));e++)t+=v,c+=s;if(e===a)return NaN;for(o=r,m=o,e+=1,e;e<a;e++)t+=v,c+=s,!u[c]&&(r=n[t],!C(r)&&(r<o?o=r:r>m&&(m=r)));return m-o}O.exports=E
});var w=b(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(a,n,v,g,u){var s=R(a,v),l=R(a,u);return F(a,n,v,s,g,u,l)}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=y();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
