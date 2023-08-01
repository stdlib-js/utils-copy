// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-buffer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-type-of@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-regexp-from-string@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-names@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-property-descriptor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-buffer@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";function z(e){return new h(e)}function E(e){return new b(e)}function S(e){return new v(e)}function A(e){return new g(e)}function F(e){return new y(e)}function D(e){return new x(e)}function M(e){return new w(e)}function T(e){return new O(e)}function q(e){return new k(e)}var B={int8array:z,uint8array:E,uint8clampedarray:S,int16array:A,uint16array:F,int32array:D,uint32array:M,float32array:T,float64array:q};function C(t,r,s,h,b){var v,g,y,x,w,O,k,z,E,S;if(b-=1,"object"!=typeof t||null===t)return t;if(i(t))return c(t);if(o(t))return function(t){var r,s,i,o,d,m,l=[],j=[];for(d=new t.constructor(t.message),l.push(t),j.push(d),t.stack&&(d.stack=t.stack),t.code&&(d.code=t.code),t.errno&&(d.errno=t.errno),t.syscall&&(d.syscall=t.syscall),r=a(t),m=0;m<r.length;m++)o=r[m],s=f(t,o),n(s,"value")&&(i=e(t[o])?[]:{},s.value=C(t[o],i,l,j,-1)),u(d,o,s);return d}(t);if("date"===(y=d(t)))return new Date(+t);if("regexp"===y)return m(t.toString());if("set"===y)return new Set(t);if("map"===y)return new Map(t);if("string"===y||"boolean"===y||"number"===y)return t.valueOf();if(w=B[y])return w(t);if("array"!==y&&"object"!==y)return"function"==typeof Object.freeze?function(t){var r,s,i,o,d,m,l,a;for(r=[],o=[],l=Object.create(p(t)),r.push(t),o.push(l),s=j(t),a=0;a<s.length;a++)i=s[a],d=f(t,i),n(d,"value")&&(m=e(t[i])?[]:{},d.value=C(t[i],m,r,o,-1)),u(l,i,d);return Object.isExtensible(t)||Object.preventExtensions(l),Object.isSealed(t)&&Object.seal(l),Object.isFrozen(t)&&Object.freeze(l),l}(t):{};if(g=a(t),b>0)for(v=y,S=0;S<g.length;S++)z=t[O=g[S]],y=d(z),"object"!=typeof z||null===z||"array"!==y&&"object"!==y||i(z)?"object"===v?(x=f(t,O),n(x,"value")&&(x.value=C(z)),u(r,O,x)):r[O]=C(z):-1===(E=l(s,z))?(k=e(z)?new Array(z.length):{},s.push(z),h.push(k),"array"===v?r[O]=C(z,k,s,h,b):(x=f(t,O),n(x,"value")&&(x.value=C(z,k,s,h,b)),u(r,O,x))):r[O]=h[E];else if("array"===y)for(S=0;S<g.length;S++)r[O=g[S]]=t[O];else for(S=0;S<g.length;S++)O=g[S],x=f(t,O),u(r,O,x);return Object.isExtensible(t)||Object.preventExtensions(r),Object.isSealed(t)&&Object.seal(r),Object.isFrozen(t)&&Object.freeze(r),r}function G(n,i){var o;if(arguments.length>1){if(!t(i))throw new TypeError(r("0j03k",i));if(0===i)return n}else i=s;return C(n,o=e(n)?new Array(n.length):{},[n],[o],i)}export{G as default};
//# sourceMappingURL=index.mjs.map