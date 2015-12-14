/**
 * store.js v1.0
 * Bindable & persistent storage
 * Copyright (c) 2012 Kik Interactive, http://kik.com
 * Released under the MIT license
 *
 * store.js
 * Copyright (c) 2010-2012 Marcus Westin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Store=function(o,w,x,q){var D="__STORE_VALUE__",r="__STORE_INDEX__",A="p";var u={},s=[],z=[],y={},b=[],c=0,g=256*1024,i=2*1024*1024;v();var t={set:e,get:f,peek:E,has:j,del:l,on:n,off:h,get gfunction(){return g},set gfunction(F){B(F)},get ifunction(){return i},set ifunction(F){C(F)}};if(x){x.store=t}if(q){q.store=t}return t;function v(){var F=D.length;for(var I in localStorage){if(I.substr(0,F)!==D){k(I.substr(F))}}var H=-1;for(var G=s.length;G--;){if(typeof s[G]!=="string"){H=G;s.splice(G,1)}}if(H!==-1){p(H)}a(true)}function k(H){var G=localStorage[D+H],J;if(!G){return}try{J=JSON.parse(localStorage[D+H])}catch(I){return}var F=localStorage[r+H];if(F!==A){F=parseInt(F);if(isNaN(F)){return}}u[H]=J;if(F===A){z.push(H)}else{s[F]=H}c+=G.length}function p(G){for(var H=(G||0),F=s.length;H<F;H++){localStorage[r+s[H]]=H+""}}function e(H,J,K){if(typeof H!=="string"){throw TypeError("key must be a string, got "+H)}if(typeof J==="undefined"){l(H);return}switch(typeof K){case"undefined":case"boolean":break;default:throw TypeError("persistence flag must be a boolean if defined, got "+K)}var G;try{G=JSON.stringify(J)}catch(I){throw TypeError("value must be JSON stringifiable, got "+J)}c-=(localStorage[D+H]||"").length;delete localStorage[D+H];var F;F=s.indexOf(H);if(F!==-1){s.splice(F,1)}F=z.indexOf(H);if(F!==-1){z.splice(F,1)}u[H]=J;if(K!==false){localStorage[D+H]=G;c+=G.length;if(K===true){z.push(H);localStorage[r+H]=A}else{s.unshift(H)}}p();d(H,J);a()}function f(G){if(typeof G!=="string"){throw TypeError("key must be a string, got "+G)}var F=s.indexOf(G);if(F>0){s.splice(F,1);s.unshift(G);p()}return u[G]}function E(F){if(typeof F!=="string"){throw TypeError("key must be a string, got "+F)}return u[F]}function j(F){if(typeof F!=="string"){throw TypeError("key must be a string, got "+F)}return(F in u)}function l(G,H){if(typeof G!=="string"){throw TypeError("key must be a string, got "+G)}var F;if(!H){F=s.indexOf(G);if(F!==-1){s.splice(F,1)}F=z.indexOf(G);if(F!==-1){z.splice(F,1)}}c-=(localStorage[D+G]||"").length;delete u[G];delete localStorage[D+G];delete localStorage[r+G];if(!H){d(G)}}function B(F){if((typeof F!=="number")||(F<=0)){throw TypeError("max keys must be a positive number, got "+F)}g=F;a()}function C(F){if((typeof F!=="number")||(F<=0)){throw TypeError("max size must be a positive number, got "+F)}i=F;a()}function a(F){var L=z.length,J=s.length,K=[];if(L+J>g){var H=g-L;if(H>0){var N=s.splice(-H);K=K.concat(N);for(var I=0,G=N.length;I<G;I++){l(N[I],true)}}}while((c>i)&&s.length){var M=s.pop();K.push(M);l(M,true)}if(!F){for(var I=0,G=K.length;I<G;I++){d(K[I])}}}function n(F,G){switch(typeof F){case"function":G=F;F=undefined;case"string":case"undefined":break;default:throw TypeError("bound key must be a string if defined, got "+F)}if(typeof G!=="function"){throw TypeError("bound handler must be a function, got "+G)}m(b,G);if(!F){b.push(G)}else{if(F in y){m(y[F],G);y[F].push(G)}else{y[F]=[G]}}}function h(F,G){switch(typeof F){case"function":G=F;F=undefined;case"undefined":case"string":break;default:throw TypeError("unbound key must be a string if defined, got "+F)}switch(typeof G){case"undefined":case"function":break;default:throw TypeError("unbound handler must be a function if defined, got "+G)}if(F){if(!G){delete y[F]}else{if(F in y){m(y[F],G);if(y[F].length===0){delete y[F]}}}}else{if(G){m(b,G);for(var F in y){m(y[F],G);if(y[F].length===0){delete y[F]}}}else{b=[];for(var F in y){delete y[F]}}}}function m(H,G){for(var F=H.length;F--;){if(H[F]===G){H.splice(F,1)}}}function d(F,G){b.forEach(function(H){H(F,G)});(y[F]||[]).forEach(function(H){H(F,G)})}}(window,document,window.Zepto,window.jQuery);
