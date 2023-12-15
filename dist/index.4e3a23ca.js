!function(){function t(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){n(t);return}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)})}}function n(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}"function"==typeof SuppressedError&&SuppressedError;/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,o,i,a,s=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,n,r,i){var a,s,c=Object.create((n&&n.prototype instanceof g?n:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(c,"_invoke",{value:(a=new C(i||[]),s=h,function(n,o){if(s===d)throw Error("Generator is already running");if(s===p){if("throw"===n)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return A()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(n,r){var o=r.method,i=n.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
r.delegate=null,"throw"===o&&n.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
r.method="return",r.arg=e,t(n,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var a=f(i,n.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
r[n.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
r.delegate=null,v):s:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,v)}(i,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===h)throw s=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var u=f(t,r,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?p:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",d="executing",p="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var w=Object.getPrototypeOf,L=w&&w(w(I([])));L&&L!==n&&r.call(L,a)&&// of the polyfill.
(b=L);var S=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function x(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){var n;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(n,a){!function n(o,i,a,s){var c=f(t[o],t,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,a,s)},function(t){n("throw",t,a,s)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=t,a(u)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return n("throw",t,a,s)})}}(o,i,n,a)})}return n=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
n?n.then(a,// invocations of the iterator.
a):a()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}// Return an iterator with no values.
return{next:A}}function A(){return{value:e,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return y.prototype=m,o(S,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},x(k.prototype),u(k.prototype,s,function(){return this}),t.AsyncIterator=k,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
x(S),u(S,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(S,a,function(){return this}),u(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),v}},t}({});try{regeneratorRuntime=s}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}for(var c="AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q",u=document.querySelector(".settings-menu"),l=document.querySelector(".nav-user-icon"),f=document.getElementById("dark-btn"),h=document.querySelector(".posts"),d=document.querySelector(".subscriptions"),p=document.querySelector(".story-gallery"),v=document.body,g=document.getElementById("see-profile"),y=function(t){var e=t.items[0].snippet;return{profilePic:e.thumbnails.high.url,channelTag:e.customUrl,name:e.title}},m=(r=e(function(t){return n(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(t,"&key=").concat(c))];case 1:return[4,e.sent().json()];case 2:return[2,y(e.sent())];case 3:return console.error(e.sent()),[3,4];case 4:return[2]}})}),function(t){return r.apply(this,arguments)}),b=function(t,e,n){var r=null==t?void 0:t.items[n].snippet;if(void 0!=r){var o=t.items[n].id,i=t.items[n].statistics,a=+i.viewCount,s=+i.likeCount,c=+i.commentCount,u=Math.floor((new Date-new Date(r.publishedAt))/1e3),l=Math.floor(u/60),f=Math.floor(l/60),h=Math.floor(f/24),d=0,p="";0==h&&0==f&&0==l?(d=u,p=" seconds ago",1==u&&(p=" second ago")):0==h&&0==f?(d=l,p=" minutes ago",1==l&&(p=" minute ago")):0==h?(d=f,1==f&&(p=" hour ago"),p=" hours ago"):(d=h,p=" days ago",1==h&&(p=" day ago"));var v=function(t){return t>=1e6?("0"==(t=(t/1e6).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"M"):t>1e3&&("0"==(t=(t/1e3).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"K"),t},g=" ",y=" ";return(null==r?void 0:r.tags)!=void 0&&((null==r?void 0:r.tags[0])!=void 0&&(g="#"+(null==r?void 0:r.tags[0])),(null==r?void 0:r.tags[1])!=void 0&&(y="#"+(null==r?void 0:r.tags[1]))),'\n    <div class="post-container">\n      <div class="post-row">\n        <div class="user-profile">\n          <img src="'.concat(e.profilePic,'" />\n          <div>\n            <p> ').concat(e.name,"</p>\n            <span> ").concat(d+p,' </span>\n          </div>\n        </div>\n        <a href="#"><i class="fas fa-ellipsis-v"></i></a>\n      </div>\n      <p class="post-text">\n        ').concat(r.title,'\n        <a href="#">').concat(g,'</a> <a href="#">').concat(y,'</a>\n      </p>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/').concat(o,'" class="post-vid" frameborder="0" allowfullscreen></iframe>\n      <div class="post-row">\n        <div class="activity-icons">\n          <div><i class="fa-solid fa-eye"></i> ').concat(v(a),'</div>\n          <div><button class="like-btn"><i class="fa-solid fa-thumbs-up" data-video-id="video').concat(n,'"></i></button> ').concat(v(s),'</div>\n          <div><i class="fa-solid fa-comments"></i> ').concat(v(c),'</div>\n        </div>\n        <div class="post-profile-icon">\n          <img src="https://yt3.ggpht.com/yti/AOXPAcWODTAzDO8acHR5anE77yyjaEuiWqAQ_casQ_Kpcg=s88-c-k-c0x00ffffff-no-rj" />\n          <i class="fas fa-caret-down"></i>\n        </div>\n      </div>\n    </div>\n  ')}},w=(o=e(function(t,e){var r,o;return n(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=".concat(c))];case 1:return[4,n.sent().json()];case 2:return[4,m((r=n.sent()).items[e].snippet.channelId)];case 3:return o=n.sent(),null==t||t.insertAdjacentHTML("beforeend",b(r,o,e)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t,e){return o.apply(this,arguments)}),L=function(){var t,e=function(t){var e=t.querySelector(".fa-thumbs-up");if(e){var n=e.getAttribute("data-video-id"),r="liked_".concat(n);"on"===localStorage.getItem(r)&&e.classList.add("like-on"),e.addEventListener("click",function(){e.classList.toggle("like-on"),"on"===localStorage.getItem(r)?localStorage.setItem(r,"off"):localStorage.setItem(r,"on")})}};(t=document.querySelector(".posts"))&&new MutationObserver(function(t){var n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;"childList"===s.type&&s.addedNodes.forEach(function(t){t instanceof HTMLElement&&e(t)})}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}).observe(t,{childList:!0,subtree:!0})},S=0;S<5;S++)w(h,S);document.addEventListener("DOMContentLoaded",function(){L()});for(var x=function(t,e){var n=localStorage.getItem("subStatus".concat(e));"subscribed"===n?(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed"):"unsubscribed"===n?(t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),t.textContent="Subscribe"):(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed")},k=function(t,e){t.classList.contains("sub-btn-off")?(t.textContent="Subscribed",t.classList.add("sub-btn-on"),t.classList.remove("sub-btn-off"),localStorage.setItem("subStatus".concat(e),"subscribed")):t.classList.contains("sub-btn-on")?(t.textContent="Subscribe",t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),localStorage.setItem("subStatus".concat(e),"unsubscribed")):(t.classList.add("sub-btn-on"),t.textContent="Subscribed",localStorage.setItem("subStatus".concat(e),"subscribed"))},E=(i=e(function(t){var e,r;return n(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(c))];case 1:return[4,n.sent().json()];case 2:return[4,m(n.sent().items[t].snippet.channelId)];case 3:return e=n.sent(),d.insertAdjacentHTML("afterbegin",'\n  <div class="subcription">\n    <div class="left-event">\n      <img\n        src="'.concat(e.profilePic,'"\n      />\n    </div>\n    <div class="right-event">\n      <a href="https://www.youtube.com/').concat(e.channelTag,'">').concat(e.name,'</a>\n      <button class="sub-btn"> Subscribe</button>\n    </div>\n  </div>\n  ')),x(r=d.querySelector(".sub-btn"),t),r&&r.addEventListener("click",function(){k(r,t)}),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return i.apply(this,arguments)}),j=function(t,e,n){var r,o,i=null===(r=e.items[n].snippet.thumbnails)||void 0===r?void 0:null===(o=r.maxres)||void 0===o?void 0:o.url;return void 0==i&&(i=e.items[n].snippet.thumbnails.high.url),'\n  <div class="story story'.concat(n+2,'" style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url(').concat(i,')">\n    <img src="').concat(t.profilePic,'" />\n    <p>').concat(t.name,"</p>\n  </div>\n")},C=(a=e(function(t){var e,r;return n(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(c))];case 1:return[4,n.sent().json()];case 2:return[4,m((e=n.sent()).items[t].snippet.channelId)];case 3:return r=n.sent(),p.insertAdjacentHTML("beforeend",j(r,e,t)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return a.apply(this,arguments)}),I=0;I<5;I++)E(I),4!=I&&C(I);console.log(g),g.addEventListener("click",void(window.location.href="profile.html")),l.addEventListener("click",function(){u.classList.toggle("settings-menu-height")}),f.addEventListener("click",function(){f.classList.toggle("dark-btn-on"),v.classList.toggle("dark-theme"),"light"===localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),"light"===localStorage.getItem("theme")?(f.classList.remove("dark-btn-on"),v.classList.remove("dark-theme")):"dark"===localStorage.getItem("theme")?(f.classList.add("dark-btn-on"),v.classList.add("dark-theme")):localStorage.setItem("theme","light")}();//# sourceMappingURL=index.4e3a23ca.js.map

//# sourceMappingURL=index.4e3a23ca.js.map
