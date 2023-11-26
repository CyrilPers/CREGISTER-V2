function S0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wf={exports:{}},fs={},Sf={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),C0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),j0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),b0=Symbol.for("react.lazy"),Sc=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=Sc&&e[Sc]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ef=Object.assign,kf={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||Cf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $f(){}$f.prototype=Sr.prototype;function qa(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||Cf}var Ja=qa.prototype=new $f;Ja.constructor=qa;Ef(Ja,Sr.prototype);Ja.isPureReactComponent=!0;var Cc=Array.isArray,Pf=Object.prototype.hasOwnProperty,Za={current:null},Nf={key:!0,ref:!0,__self:!0,__source:!0};function jf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Pf.call(t,r)&&!Nf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:jo,type:e,key:i,ref:s,props:o,_owner:Za.current}}function _0(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function O0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O0(""+e.key):t.toString(36)}function ui(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case jo:case C0:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Gs(s,0):r,Cc(o)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),ui(o,t,n,"",function(u){return u})):o!=null&&(eu(o)&&(o=_0(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ec,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Cc(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+Gs(i,l);s+=ui(i,t,n,a,o)}else if(a=z0(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+Gs(i,l++),s+=ui(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Uo(e,t,n){if(e==null)return e;var r=[],o=0;return ui(e,r,"","",function(i){return t.call(n,i,o++)}),r}function I0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},ci={transition:null},A0={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:ci,ReactCurrentOwner:Za};F.Children={map:Uo,forEach:function(e,t,n){Uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uo(e,function(){t++}),t},toArray:function(e){return Uo(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Sr;F.Fragment=E0;F.Profiler=$0;F.PureComponent=qa;F.StrictMode=k0;F.Suspense=T0;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ef({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Za.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Pf.call(t,a)&&!Nf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:jo,type:e.type,key:o,ref:i,props:r,_owner:s}};F.createContext=function(e){return e={$$typeof:N0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P0,_context:e},e.Consumer=e};F.createElement=jf;F.createFactory=function(e){var t=jf.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:j0,render:e}};F.isValidElement=eu;F.lazy=function(e){return{$$typeof:b0,_payload:{_status:-1,_result:e},_init:I0}};F.memo=function(e,t){return{$$typeof:R0,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ci.transition;ci.transition={};try{e()}finally{ci.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Oe.current.useCallback(e,t)};F.useContext=function(e){return Oe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};F.useEffect=function(e,t){return Oe.current.useEffect(e,t)};F.useId=function(){return Oe.current.useId()};F.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Oe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};F.useRef=function(e){return Oe.current.useRef(e)};F.useState=function(e){return Oe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Oe.current.useTransition()};F.version="18.2.0";Sf.exports=F;var C=Sf.exports;const z=xf(C),L0=S0({__proto__:null,default:z},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=C,F0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),B0=Object.prototype.hasOwnProperty,U0=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function Tf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)B0.call(t,r)&&!H0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:F0,type:e,key:i,ref:s,props:o,_owner:U0.current}}fs.Fragment=D0;fs.jsx=Tf;fs.jsxs=Tf;wf.exports=fs;var p=wf.exports,Il={},Rf={exports:{}},Ye={},bf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,_){var I=T.length;T.push(_);e:for(;0<I;){var Q=I-1>>>1,Z=T[Q];if(0<o(Z,_))T[Q]=_,T[I]=Z,I=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var _=T[0],I=T.pop();if(I!==_){T[0]=I;e:for(var Q=0,Z=T.length,Ke=Z>>>1;Q<Ke;){var Re=2*(Q+1)-1,yt=T[Re],be=Re+1,Ae=T[be];if(0>o(yt,I))be<Z&&0>o(Ae,yt)?(T[Q]=Ae,T[be]=I,Q=be):(T[Q]=yt,T[Re]=I,Q=Re);else if(be<Z&&0>o(Ae,I))T[Q]=Ae,T[be]=I,Q=be;else break e}}return _}function o(T,_){var I=T.sortIndex-_.sortIndex;return I!==0?I:T.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,f=null,g=3,y=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=T)r(u),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(u)}}function S(T){if(w=!1,x(T),!v)if(n(a)!==null)v=!0,L(k);else{var _=n(u);_!==null&&B(S,_.startTime-T)}}function k(T,_){v=!1,w&&(w=!1,m(R),R=-1),y=!0;var I=g;try{for(x(_),f=n(a);f!==null&&(!(f.expirationTime>_)||T&&!X());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var Z=Q(f.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(a)&&r(a),x(_)}else r(a);f=n(a)}if(f!==null)var Ke=!0;else{var Re=n(u);Re!==null&&B(S,Re.startTime-_),Ke=!1}return Ke}finally{f=null,g=I,y=!1}}var j=!1,P=null,R=-1,D=5,A=-1;function X(){return!(e.unstable_now()-A<D)}function J(){if(P!==null){var T=e.unstable_now();A=T;var _=!0;try{_=P(!0,T)}finally{_?ae():(j=!1,P=null)}}else j=!1}var ae;if(typeof h=="function")ae=function(){h(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Te=se.port2;se.port1.onmessage=J,ae=function(){Te.postMessage(null)}}else ae=function(){E(J,0)};function L(T){P=T,j||(j=!0,ae())}function B(T,_){R=E(function(){T(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,L(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var I=g;g=_;try{return T()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,_){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=g;g=T;try{return _()}finally{g=I}},e.unstable_scheduleCallback=function(T,_,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,T={id:c++,callback:_,priorityLevel:T,startTime:I,expirationTime:Z,sortIndex:-1},I>Q?(T.sortIndex=I,t(u,T),n(a)===null&&T===n(u)&&(w?(m(R),R=-1):w=!0,B(S,I-Q))):(T.sortIndex=Z,t(a,T),v||y||(v=!0,L(k))),T},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(T){var _=g;return function(){var I=g;g=_;try{return T.apply(this,arguments)}finally{g=I}}}})(zf);bf.exports=zf;var V0=bf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f=C,Qe=V0;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Of=new Set,oo={};function On(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(oo[e]=t,e=0;e<t.length;e++)Of.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,W0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},$c={};function X0(e){return Al.call($c,e)?!0:Al.call(kc,e)?!1:W0.test(e)?$c[e]=!0:(kc[e]=!0,!1)}function Q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||Q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,nu);Ee[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,nu);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,nu);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,n,r){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,o,r)&&(n=null),r||o===null?X0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=_f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),If=Symbol.for("react.provider"),Af=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Lf=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ks;function Fr(e){if(Ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||""}return`
`+Ks+e}var qs=!1;function Js(e,t){if(!e||qs)return"";qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{qs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function G0(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Un:return"Portal";case Ll:return"Profiler";case ou:return"StrictMode";case Ml:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Af:return(e.displayName||"Context")+".Consumer";case If:return(e._context.displayName||"Context")+".Provider";case iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function K0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e){var t=Mf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vo(e){e._valueTracker||(e._valueTracker=q0(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Df(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function Ul(e,t){Df(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hl(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hl(e,t,n){(t!=="number"||zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Dr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function Bf(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wo,Hf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){J0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function Vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function Wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Z0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,nr=null,rr=null;function bc(e){if(e=bo(e)){if(typeof Gl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ys(t),Gl(e.stateNode,e.type,t))}}function Xf(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Qf(){if(nr){var e=nr,t=rr;if(rr=nr=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function Yf(e,t){return e(t)}function Gf(){}var Zs=!1;function Kf(e,t,n){if(Zs)return e(t,n);Zs=!0;try{return Yf(e,t,n)}finally{Zs=!1,(nr!==null||rr!==null)&&(Gf(),Qf())}}function so(e,t){var n=e.stateNode;if(n===null)return null;var r=ys(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Kl=!1;if(zt)try{var br={};Object.defineProperty(br,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Kl=!1}function eg(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Qr=!1,_i=null,Oi=!1,ql=null,tg={onError:function(e){Qr=!0,_i=e}};function ng(e,t,n,r,o,i,s,l,a){Qr=!1,_i=null,eg.apply(tg,arguments)}function rg(e,t,n,r,o,i,s,l,a){if(ng.apply(this,arguments),Qr){if(Qr){var u=_i;Qr=!1,_i=null}else throw Error(N(198));Oi||(Oi=!0,ql=u)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(In(e)!==e)throw Error(N(188))}function og(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return zc(o),e;if(i===r)return zc(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Jf(e){return e=og(e),e!==null?Zf(e):null}function Zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zf(e);if(t!==null)return t;e=e.sibling}return null}var ep=Qe.unstable_scheduleCallback,_c=Qe.unstable_cancelCallback,ig=Qe.unstable_shouldYield,sg=Qe.unstable_requestPaint,ue=Qe.unstable_now,lg=Qe.unstable_getCurrentPriorityLevel,au=Qe.unstable_ImmediatePriority,tp=Qe.unstable_UserBlockingPriority,Ii=Qe.unstable_NormalPriority,ag=Qe.unstable_LowPriority,np=Qe.unstable_IdlePriority,ps=null,Ct=null;function ug(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:fg,cg=Math.log,dg=Math.LN2;function fg(e){return e>>>=0,e===0?32:31-(cg(e)/dg|0)|0}var Xo=64,Qo=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Br(l):(i&=s,i!==0&&(r=Br(i)))}else s=n&~o,s!==0?r=Br(s):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),o=1<<n,r|=e[n],t&=~o;return r}function pg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-pt(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=pg(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rp(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function el(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function To(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function mg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-pt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function uu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function op(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ip,cu,sp,lp,ap,Zl=!1,Yo=[],Gt=null,Kt=null,qt=null,lo=new Map,ao=new Map,Ht=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":lo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function zr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=bo(t),t!==null&&cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yg(e,t,n,r,o){switch(t){case"focusin":return Gt=zr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=zr(Kt,e,t,n,r,o),!0;case"mouseover":return qt=zr(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return lo.set(i,zr(lo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ao.set(i,zr(ao.get(i)||null,e,t,n,r,o)),!0}return!1}function up(e){var t=vn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=qf(n),t!==null){e.blockedOn=t,ap(e.priority,function(){sp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=bo(n),t!==null&&cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ic(e,t,n){di(e)&&n.delete(t)}function vg(){Zl=!1,Gt!==null&&di(Gt)&&(Gt=null),Kt!==null&&di(Kt)&&(Kt=null),qt!==null&&di(qt)&&(qt=null),lo.forEach(Ic),ao.forEach(Ic)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,vg)))}function uo(e){function t(o){return _r(o,e)}if(0<Yo.length){_r(Yo[0],e);for(var n=1;n<Yo.length;n++){var r=Yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&_r(Gt,e),Kt!==null&&_r(Kt,e),qt!==null&&_r(qt,e),lo.forEach(t),ao.forEach(t),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)up(n),n.blockedOn===null&&Ht.shift()}var or=At.ReactCurrentBatchConfig,Li=!0;function xg(e,t,n,r){var o=W,i=or.transition;or.transition=null;try{W=1,du(e,t,n,r)}finally{W=o,or.transition=i}}function wg(e,t,n,r){var o=W,i=or.transition;or.transition=null;try{W=4,du(e,t,n,r)}finally{W=o,or.transition=i}}function du(e,t,n,r){if(Li){var o=ea(e,t,n,r);if(o===null)cl(e,t,r,Mi,n),Oc(e,r);else if(yg(o,e,t,n,r))r.stopPropagation();else if(Oc(e,r),t&4&&-1<gg.indexOf(e)){for(;o!==null;){var i=bo(o);if(i!==null&&ip(i),i=ea(e,t,n,r),i===null&&cl(e,t,r,Mi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else cl(e,t,r,null,n)}}var Mi=null;function ea(e,t,n,r){if(Mi=null,e=lu(r),e=vn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lg()){case au:return 1;case tp:return 4;case Ii:case ag:return 16;case np:return 536870912;default:return 16}default:return 16}}var Wt=null,fu=null,fi=null;function dp(){if(fi)return fi;var e,t=fu,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return fi=o.slice(e,1<r?1-r:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function Ac(){return!1}function Ge(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Go:Ac,this.isPropagationStopped=Ac,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Ge(Cr),Ro=oe({},Cr,{view:0,detail:0}),Sg=Ge(Ro),tl,nl,Or,hs=oe({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(tl=e.screenX-Or.screenX,nl=e.screenY-Or.screenY):nl=tl=0,Or=e),tl)},movementY:function(e){return"movementY"in e?e.movementY:nl}}),Lc=Ge(hs),Cg=oe({},hs,{dataTransfer:0}),Eg=Ge(Cg),kg=oe({},Ro,{relatedTarget:0}),rl=Ge(kg),$g=oe({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=Ge($g),Ng=oe({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jg=Ge(Ng),Tg=oe({},Cr,{data:0}),Mc=Ge(Tg),Rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zg[e])?!!t[e]:!1}function hu(){return _g}var Og=oe({},Ro,{key:function(e){if(e.key){var t=Rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ig=Ge(Og),Ag=oe({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=Ge(Ag),Lg=oe({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Mg=Ge(Lg),Fg=oe({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=Ge(Fg),Bg=oe({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ug=Ge(Bg),Hg=[9,13,27,32],mu=zt&&"CompositionEvent"in window,Yr=null;zt&&"documentMode"in document&&(Yr=document.documentMode);var Vg=zt&&"TextEvent"in window&&!Yr,fp=zt&&(!mu||Yr&&8<Yr&&11>=Yr),Dc=String.fromCharCode(32),Bc=!1;function pp(e,t){switch(e){case"keyup":return Hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Wg(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(Bc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Bc?null:e;default:return null}}function Xg(e,t){if(Vn)return e==="compositionend"||!mu&&pp(e,t)?(e=dp(),fi=fu=Wt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qg[e.type]:t==="textarea"}function mp(e,t,n,r){Xf(r),t=Fi(t,"onChange"),0<t.length&&(n=new pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,co=null;function Yg(e){Pp(e,0)}function ms(e){var t=Qn(e);if(Ff(t))return e}function Gg(e,t){if(e==="change")return t}var gp=!1;if(zt){var ol;if(zt){var il="oninput"in document;if(!il){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),il=typeof Hc.oninput=="function"}ol=il}else ol=!1;gp=ol&&(!document.documentMode||9<document.documentMode)}function Vc(){Gr&&(Gr.detachEvent("onpropertychange",yp),co=Gr=null)}function yp(e){if(e.propertyName==="value"&&ms(co)){var t=[];mp(t,co,e,lu(e)),Kf(Yg,t)}}function Kg(e,t,n){e==="focusin"?(Vc(),Gr=t,co=n,Gr.attachEvent("onpropertychange",yp)):e==="focusout"&&Vc()}function qg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ms(co)}function Jg(e,t){if(e==="click")return ms(t)}function Zg(e,t){if(e==="input"||e==="change")return ms(t)}function e1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:e1;function fo(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Al.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=Wc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wc(n)}}function vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xp(){for(var e=window,t=zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t1(e){var t=xp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&gu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Xc(n,i);var s=Xc(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n1=zt&&"documentMode"in document&&11>=document.documentMode,Wn=null,ta=null,Kr=null,na=!1;function Qc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;na||Wn==null||Wn!==zi(r)||(r=Wn,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&fo(Kr,r)||(Kr=r,r=Fi(ta,"onSelect"),0<r.length&&(t=new pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xn={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},sl={},wp={};zt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function gs(e){if(sl[e])return sl[e];if(!Xn[e])return e;var t=Xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wp)return sl[e]=t[n];return e}var Sp=gs("animationend"),Cp=gs("animationiteration"),Ep=gs("animationstart"),kp=gs("transitionend"),$p=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){$p.set(e,t),On(t,[e])}for(var ll=0;ll<Yc.length;ll++){var al=Yc[ll],r1=al.toLowerCase(),o1=al[0].toUpperCase()+al.slice(1);an(r1,"on"+o1)}an(Sp,"onAnimationEnd");an(Cp,"onAnimationIteration");an(Ep,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(kp,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rg(r,t,void 0,e),e.currentTarget=null}function Pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;Gc(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;Gc(o,l,u),i=a}}}if(Oi)throw e=ql,Oi=!1,ql=null,e}function G(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(Np(t,e,2,!1),n.add(r))}function ul(e,t,n){var r=0;t&&(r|=4),Np(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function po(e){if(!e[qo]){e[qo]=!0,Of.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||ul(n,!1,e),ul(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,ul("selectionchange",!1,t))}}function Np(e,t,n,r){switch(cp(t)){case 1:var o=xg;break;case 4:o=wg;break;default:o=du}n=o.bind(null,t,n,e),o=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=vn(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Kf(function(){var u=i,c=lu(n),f=[];e:{var g=$p.get(e);if(g!==void 0){var y=pu,v=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":y=Ig;break;case"focusin":v="focus",y=rl;break;case"focusout":v="blur",y=rl;break;case"beforeblur":case"afterblur":y=rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Mg;break;case Sp:case Cp:case Ep:y=Pg;break;case kp:y=Dg;break;case"scroll":y=Sg;break;case"wheel":y=Ug;break;case"copy":case"cut":case"paste":y=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fc}var w=(t&4)!==0,E=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var h=u,x;h!==null;){x=h;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,m!==null&&(S=so(h,m),S!=null&&w.push(ho(h,S,x)))),E)break;h=h.return}0<w.length&&(g=new y(g,v,null,n,c),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Yl&&(v=n.relatedTarget||n.fromElement)&&(vn(v)||v[_t]))break e;if((y||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?vn(v):null,v!==null&&(E=In(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Lc,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Fc,S="onPointerLeave",m="onPointerEnter",h="pointer"),E=y==null?g:Qn(y),x=v==null?g:Qn(v),g=new w(S,h+"leave",y,n,c),g.target=E,g.relatedTarget=x,S=null,vn(c)===u&&(w=new w(m,h+"enter",v,n,c),w.target=x,w.relatedTarget=E,S=w),E=S,y&&v)t:{for(w=y,m=v,h=0,x=w;x;x=Mn(x))h++;for(x=0,S=m;S;S=Mn(S))x++;for(;0<h-x;)w=Mn(w),h--;for(;0<x-h;)m=Mn(m),x--;for(;h--;){if(w===m||m!==null&&w===m.alternate)break t;w=Mn(w),m=Mn(m)}w=null}else w=null;y!==null&&Kc(f,g,y,w,!1),v!==null&&E!==null&&Kc(f,E,v,w,!0)}}e:{if(g=u?Qn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=Gg;else if(Uc(g))if(gp)k=Zg;else{k=qg;var j=Kg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Jg);if(k&&(k=k(e,u))){mp(f,k,n,c);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Hl(g,"number",g.value)}switch(j=u?Qn(u):window,e){case"focusin":(Uc(j)||j.contentEditable==="true")&&(Wn=j,ta=u,Kr=null);break;case"focusout":Kr=ta=Wn=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Qc(f,n,c);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":Qc(f,n,c)}var P;if(mu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vn?pp(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(fp&&n.locale!=="ko"&&(Vn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vn&&(P=dp()):(Wt=c,fu="value"in Wt?Wt.value:Wt.textContent,Vn=!0)),j=Fi(u,R),0<j.length&&(R=new Mc(R,e,null,n,c),f.push({event:R,listeners:j}),P?R.data=P:(P=hp(n),P!==null&&(R.data=P)))),(P=Vg?Wg(e,n):Xg(e,n))&&(u=Fi(u,"onBeforeInput"),0<u.length&&(c=new Mc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}Pp(f,t)})}function ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=so(e,n),i!=null&&r.unshift(ho(e,i,o)),i=so(e,t),i!=null&&r.push(ho(e,i,o))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=so(n,i),a!=null&&s.unshift(ho(n,a,l))):o||(a=so(n,i),a!=null&&s.push(ho(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var s1=/\r\n?/g,l1=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(s1,`
`).replace(l1,"")}function Jo(e,t,n){if(t=qc(t),qc(e)!==t&&n)throw Error(N(425))}function Di(){}var ra=null,oa=null;function ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,Jc=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof Jc<"u"?function(e){return Jc.resolve(null).then(e).catch(c1)}:sa;function c1(e){setTimeout(function(){throw e})}function dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);uo(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),St="__reactFiber$"+Er,mo="__reactProps$"+Er,_t="__reactContainer$"+Er,la="__reactEvents$"+Er,d1="__reactListeners$"+Er,f1="__reactHandles$"+Er;function vn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zc(e);e!==null;){if(n=e[St])return n;e=Zc(e)}return t}e=n,n=e.parentNode}return null}function bo(e){return e=e[St]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ys(e){return e[mo]||null}var aa=[],Yn=-1;function un(e){return{current:e}}function q(e){0>Yn||(e.current=aa[Yn],aa[Yn]=null,Yn--)}function Y(e,t){Yn++,aa[Yn]=e.current,e.current=t}var ln={},je=un(ln),Be=un(!1),Nn=ln;function ar(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Bi(){q(Be),q(je)}function ed(e,t,n){if(je.current!==ln)throw Error(N(168));Y(je,t),Y(Be,n)}function jp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,K0(e)||"Unknown",o));return oe({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Nn=je.current,Y(je,e),Y(Be,Be.current),!0}function td(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=jp(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,q(Be),q(je),Y(je,e)):q(Be),Y(Be,n)}var Nt=null,vs=!1,fl=!1;function Tp(e){Nt===null?Nt=[e]:Nt.push(e)}function p1(e){vs=!0,Tp(e)}function cn(){if(!fl&&Nt!==null){fl=!0;var e=0,t=W;try{var n=Nt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,vs=!1}catch(o){throw Nt!==null&&(Nt=Nt.slice(e+1)),ep(au,cn),o}finally{W=t,fl=!1}}return null}var Gn=[],Kn=0,Hi=null,Vi=0,Je=[],Ze=0,jn=null,jt=1,Tt="";function pn(e,t){Gn[Kn++]=Vi,Gn[Kn++]=Hi,Hi=e,Vi=t}function Rp(e,t,n){Je[Ze++]=jt,Je[Ze++]=Tt,Je[Ze++]=jn,jn=e;var r=jt;e=Tt;var o=32-pt(r)-1;r&=~(1<<o),n+=1;var i=32-pt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,jt=1<<32-pt(t)+o|n<<o|r,Tt=i+e}else jt=1<<i|n<<o|r,Tt=e}function yu(e){e.return!==null&&(pn(e,1),Rp(e,1,0))}function vu(e){for(;e===Hi;)Hi=Gn[--Kn],Gn[Kn]=null,Vi=Gn[--Kn],Gn[Kn]=null;for(;e===jn;)jn=Je[--Ze],Je[Ze]=null,Tt=Je[--Ze],Je[Ze]=null,jt=Je[--Ze],Je[Ze]=null}var Xe=null,We=null,te=!1,dt=null;function bp(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,We=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:jt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,We=null,!0):!1;default:return!1}}function ua(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ca(e){if(te){var t=We;if(t){var n=t;if(!nd(e,t)){if(ua(e))throw Error(N(418));t=Jt(n.nextSibling);var r=Xe;t&&nd(e,t)?bp(r,n):(e.flags=e.flags&-4097|2,te=!1,Xe=e)}}else{if(ua(e))throw Error(N(418));e.flags=e.flags&-4097|2,te=!1,Xe=e}}}function rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Zo(e){if(e!==Xe)return!1;if(!te)return rd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ia(e.type,e.memoizedProps)),t&&(t=We)){if(ua(e))throw zp(),Error(N(418));for(;t;)bp(e,t),t=Jt(t.nextSibling)}if(rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Xe?Jt(e.stateNode.nextSibling):null;return!0}function zp(){for(var e=We;e;)e=Jt(e.nextSibling)}function ur(){We=Xe=null,te=!1}function xu(e){dt===null?dt=[e]:dt.push(e)}var h1=At.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wi=un(null),Xi=null,qn=null,wu=null;function Su(){wu=qn=Xi=null}function Cu(e){var t=Wi.current;q(Wi),e._currentValue=t}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Xi=e,wu=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(wu!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Xi===null)throw Error(N(308));qn=e,Xi.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var xn=null;function Eu(e){xn===null?xn=[e]:xn.push(e)}function _p(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Eu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ot(e,n)}return o=r.interleaved,o===null?(t.next=t,Eu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ot(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}function od(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(i!==null){var f=o.baseState;s=0,c=u=a=null,l=i;do{var g=l.lane,y=l.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(y,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,f,g):v,g==null)break e;f=oe({},f,g);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,a=f):c=c.next=y,s|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(c===null&&(a=f),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rn|=s,e.lanes=s,e.memoizedState=f}}function id(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Ip=new _f.Component().refs;function fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xs={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=tn(e),i=Rt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ht(t,e,o,r),hi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=tn(e),i=Rt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Zt(e,i,o),t!==null&&(ht(t,e,o,r),hi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=tn(e),o=Rt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Zt(e,o,r),t!==null&&(ht(t,e,r,n),hi(t,e,r))}};function sd(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!fo(n,r)||!fo(o,i):!0}function Ap(e,t,n){var r=!1,o=ln,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=Ue(t)?Nn:je.current,r=t.contextTypes,i=(r=r!=null)?ar(e,o):ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ld(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xs.enqueueReplaceState(t,t.state,null)}function pa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ip,ku(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=Ue(t)?Nn:je.current,o.context=ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(fa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xs.enqueueReplaceState(o,o.state,null),Qi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;l===Ip&&(l=o.refs={}),s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ad(e){var t=e._init;return t(e._payload)}function Lp(e){function t(m,h){if(e){var x=m.deletions;x===null?(m.deletions=[h],m.flags|=16):x.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=nn(m,h),m.index=0,m.sibling=null,m}function i(m,h,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<h?(m.flags|=2,h):x):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,x,S){return h===null||h.tag!==6?(h=xl(x,m.mode,S),h.return=m,h):(h=o(h,x),h.return=m,h)}function a(m,h,x,S){var k=x.type;return k===Hn?c(m,h,x.props.children,S,x.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&ad(k)===h.type)?(S=o(h,x.props),S.ref=Ir(m,h,x),S.return=m,S):(S=wi(x.type,x.key,x.props,null,m.mode,S),S.ref=Ir(m,h,x),S.return=m,S)}function u(m,h,x,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=wl(x,m.mode,S),h.return=m,h):(h=o(h,x.children||[]),h.return=m,h)}function c(m,h,x,S,k){return h===null||h.tag!==7?(h=kn(x,m.mode,S,k),h.return=m,h):(h=o(h,x),h.return=m,h)}function f(m,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=xl(""+h,m.mode,x),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ho:return x=wi(h.type,h.key,h.props,null,m.mode,x),x.ref=Ir(m,null,h),x.return=m,x;case Un:return h=wl(h,m.mode,x),h.return=m,h;case Bt:var S=h._init;return f(m,S(h._payload),x)}if(Dr(h)||Rr(h))return h=kn(h,m.mode,x,null),h.return=m,h;ei(m,h)}return null}function g(m,h,x,S){var k=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:l(m,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ho:return x.key===k?a(m,h,x,S):null;case Un:return x.key===k?u(m,h,x,S):null;case Bt:return k=x._init,g(m,h,k(x._payload),S)}if(Dr(x)||Rr(x))return k!==null?null:c(m,h,x,S,null);ei(m,x)}return null}function y(m,h,x,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(x)||null,l(h,m,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:return m=m.get(S.key===null?x:S.key)||null,a(h,m,S,k);case Un:return m=m.get(S.key===null?x:S.key)||null,u(h,m,S,k);case Bt:var j=S._init;return y(m,h,x,j(S._payload),k)}if(Dr(S)||Rr(S))return m=m.get(x)||null,c(h,m,S,k,null);ei(h,S)}return null}function v(m,h,x,S){for(var k=null,j=null,P=h,R=h=0,D=null;P!==null&&R<x.length;R++){P.index>R?(D=P,P=null):D=P.sibling;var A=g(m,P,x[R],S);if(A===null){P===null&&(P=D);break}e&&P&&A.alternate===null&&t(m,P),h=i(A,h,R),j===null?k=A:j.sibling=A,j=A,P=D}if(R===x.length)return n(m,P),te&&pn(m,R),k;if(P===null){for(;R<x.length;R++)P=f(m,x[R],S),P!==null&&(h=i(P,h,R),j===null?k=P:j.sibling=P,j=P);return te&&pn(m,R),k}for(P=r(m,P);R<x.length;R++)D=y(P,m,R,x[R],S),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?R:D.key),h=i(D,h,R),j===null?k=D:j.sibling=D,j=D);return e&&P.forEach(function(X){return t(m,X)}),te&&pn(m,R),k}function w(m,h,x,S){var k=Rr(x);if(typeof k!="function")throw Error(N(150));if(x=k.call(x),x==null)throw Error(N(151));for(var j=k=null,P=h,R=h=0,D=null,A=x.next();P!==null&&!A.done;R++,A=x.next()){P.index>R?(D=P,P=null):D=P.sibling;var X=g(m,P,A.value,S);if(X===null){P===null&&(P=D);break}e&&P&&X.alternate===null&&t(m,P),h=i(X,h,R),j===null?k=X:j.sibling=X,j=X,P=D}if(A.done)return n(m,P),te&&pn(m,R),k;if(P===null){for(;!A.done;R++,A=x.next())A=f(m,A.value,S),A!==null&&(h=i(A,h,R),j===null?k=A:j.sibling=A,j=A);return te&&pn(m,R),k}for(P=r(m,P);!A.done;R++,A=x.next())A=y(P,m,R,A.value,S),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?R:A.key),h=i(A,h,R),j===null?k=A:j.sibling=A,j=A);return e&&P.forEach(function(J){return t(m,J)}),te&&pn(m,R),k}function E(m,h,x,S){if(typeof x=="object"&&x!==null&&x.type===Hn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ho:e:{for(var k=x.key,j=h;j!==null;){if(j.key===k){if(k=x.type,k===Hn){if(j.tag===7){n(m,j.sibling),h=o(j,x.props.children),h.return=m,m=h;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&ad(k)===j.type){n(m,j.sibling),h=o(j,x.props),h.ref=Ir(m,j,x),h.return=m,m=h;break e}n(m,j);break}else t(m,j);j=j.sibling}x.type===Hn?(h=kn(x.props.children,m.mode,S,x.key),h.return=m,m=h):(S=wi(x.type,x.key,x.props,null,m.mode,S),S.ref=Ir(m,h,x),S.return=m,m=S)}return s(m);case Un:e:{for(j=x.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(m,h.sibling),h=o(h,x.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=wl(x,m.mode,S),h.return=m,m=h}return s(m);case Bt:return j=x._init,E(m,h,j(x._payload),S)}if(Dr(x))return v(m,h,x,S);if(Rr(x))return w(m,h,x,S);ei(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(m,h.sibling),h=o(h,x),h.return=m,m=h):(n(m,h),h=xl(x,m.mode,S),h.return=m,m=h),s(m)):n(m,h)}return E}var cr=Lp(!0),Mp=Lp(!1),zo={},Et=un(zo),go=un(zo),yo=un(zo);function wn(e){if(e===zo)throw Error(N(174));return e}function $u(e,t){switch(Y(yo,t),Y(go,e),Y(Et,zo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}q(Et),Y(Et,t)}function dr(){q(Et),q(go),q(yo)}function Fp(e){wn(yo.current);var t=wn(Et.current),n=Wl(t,e.type);t!==n&&(Y(go,e),Y(Et,n))}function Pu(e){go.current===e&&(q(Et),q(go))}var ne=un(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function Nu(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var mi=At.ReactCurrentDispatcher,hl=At.ReactCurrentBatchConfig,Tn=0,re=null,me=null,ve=null,Gi=!1,qr=!1,vo=0,m1=0;function $e(){throw Error(N(321))}function ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Tu(e,t,n,r,o,i){if(Tn=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?x1:w1,e=n(r,o),qr){i=0;do{if(qr=!1,vo=0,25<=i)throw Error(N(301));i+=1,ve=me=null,t.updateQueue=null,mi.current=S1,e=n(r,o)}while(qr)}if(mi.current=Ki,t=me!==null&&me.next!==null,Tn=0,ve=me=re=null,Gi=!1,t)throw Error(N(300));return e}function Ru(){var e=vo!==0;return vo=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?re.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(me===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?re.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(N(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?re.memoizedState=ve=e:ve=ve.next=e}return ve}function xo(e,t){return typeof t=="function"?t(e):t}function ml(e){var t=it(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var c=u.lane;if((Tn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,re.lanes|=c,Rn|=c}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,gt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=it(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);gt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Dp(){}function Bp(e,t){var n=re,r=it(),o=t(),i=!gt(r.memoizedState,o);if(i&&(r.memoizedState=o,Me=!0),r=r.queue,bu(Vp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,wo(9,Hp.bind(null,n,r,o,t),void 0,null),we===null)throw Error(N(349));Tn&30||Up(n,t,o)}return o}function Up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hp(e,t,n,r){t.value=n,t.getSnapshot=r,Wp(t)&&Xp(e)}function Vp(e,t,n){return n(function(){Wp(t)&&Xp(e)})}function Wp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Xp(e){var t=Ot(e,1);t!==null&&ht(t,e,1,-1)}function ud(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=v1.bind(null,re,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qp(){return it().memoizedState}function gi(e,t,n,r){var o=xt();re.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function ws(e,t,n,r){var o=it();r=r===void 0?null:r;var i=void 0;if(me!==null){var s=me.memoizedState;if(i=s.destroy,r!==null&&ju(r,s.deps)){o.memoizedState=wo(t,n,i,r);return}}re.flags|=e,o.memoizedState=wo(1|t,n,i,r)}function cd(e,t){return gi(8390656,8,e,t)}function bu(e,t){return ws(2048,8,e,t)}function Yp(e,t){return ws(4,2,e,t)}function Gp(e,t){return ws(4,4,e,t)}function Kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qp(e,t,n){return n=n!=null?n.concat([e]):null,ws(4,4,Kp.bind(null,t,e),n)}function zu(){}function Jp(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zp(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eh(e,t,n){return Tn&21?(gt(n,t)||(n=rp(),re.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function g1(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=hl.transition;hl.transition={};try{e(!1),t()}finally{W=n,hl.transition=r}}function th(){return it().memoizedState}function y1(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nh(e))rh(t,n);else if(n=_p(e,t,n,r),n!==null){var o=_e();ht(n,e,r,o),oh(n,t,r)}}function v1(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nh(e))rh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,gt(l,s)){var a=t.interleaved;a===null?(o.next=o,Eu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=_p(e,t,o,r),n!==null&&(o=_e(),ht(n,e,r,o),oh(n,t,r))}}function nh(e){var t=e.alternate;return e===re||t!==null&&t===re}function rh(e,t){qr=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uu(e,n)}}var Ki={readContext:ot,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},x1={readContext:ot,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,Kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:ud,useDebugValue:zu,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=ud(!1),t=e[0];return e=g1.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=xt();if(te){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),we===null)throw Error(N(349));Tn&30||Up(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cd(Vp.bind(null,r,i,e),[e]),r.flags|=2048,wo(9,Hp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=xt(),t=we.identifierPrefix;if(te){var n=Tt,r=jt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=m1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w1={readContext:ot,useCallback:Jp,useContext:ot,useEffect:bu,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Gp,useMemo:Zp,useReducer:ml,useRef:Qp,useState:function(){return ml(xo)},useDebugValue:zu,useDeferredValue:function(e){var t=it();return eh(t,me.memoizedState,e)},useTransition:function(){var e=ml(xo)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Bp,useId:th,unstable_isNewReconciler:!1},S1={readContext:ot,useCallback:Jp,useContext:ot,useEffect:bu,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Gp,useMemo:Zp,useReducer:gl,useRef:Qp,useState:function(){return gl(xo)},useDebugValue:zu,useDeferredValue:function(e){var t=it();return me===null?t.memoizedState=e:eh(t,me.memoizedState,e)},useTransition:function(){var e=gl(xo)[0],t=it().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Bp,useId:th,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=G0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function ih(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,ka=r),ha(e,t)},n}function sh(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ha(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ha(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function dd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new C1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=A1.bind(null,e,t,n),t.then(e,e))}function fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var E1=At.ReactCurrentOwner,Me=!1;function ze(e,t,n,r){t.child=e===null?Mp(t,null,n,r):cr(t,e.child,n,r)}function hd(e,t,n,r,o){n=n.render;var i=t.ref;return ir(t,o),r=Tu(e,t,n,r,i,o),n=Ru(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(te&&n&&yu(t),t.flags|=1,ze(e,t,r,o),t.child)}function md(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Du(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,lh(e,t,i,r,o)):(e=wi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(s,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function lh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(fo(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,It(e,t,o)}return ma(e,t,n,r,o)}function ah(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Zn,Ve),Ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Zn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(Zn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(Zn,Ve),Ve|=r;return ze(e,t,o,n),t.child}function uh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ma(e,t,n,r,o){var i=Ue(n)?Nn:je.current;return i=ar(t,i),ir(t,o),n=Tu(e,t,n,r,i,o),r=Ru(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(te&&r&&yu(t),t.flags|=1,ze(e,t,n,o),t.child)}function gd(e,t,n,r,o){if(Ue(n)){var i=!0;Ui(t)}else i=!1;if(ir(t,o),t.stateNode===null)yi(e,t),Ap(t,n,r),pa(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ue(n)?Nn:je.current,u=ar(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ld(t,s,r,u),Ut=!1;var g=t.memoizedState;s.state=g,Qi(t,r,s,o),a=t.memoizedState,l!==r||g!==a||Be.current||Ut?(typeof c=="function"&&(fa(t,n,c,r),a=t.memoizedState),(l=Ut||sd(t,n,l,r,g,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Op(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),s.props=u,f=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=ot(a):(a=Ue(n)?Nn:je.current,a=ar(t,a));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||g!==a)&&ld(t,s,r,a),Ut=!1,g=t.memoizedState,s.state=g,Qi(t,r,s,o);var v=t.memoizedState;l!==f||g!==v||Be.current||Ut?(typeof y=="function"&&(fa(t,n,y,r),v=t.memoizedState),(u=Ut||sd(t,n,u,r,g,v,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ga(e,t,n,r,i,o)}function ga(e,t,n,r,o,i){uh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&td(t,n,!1),It(e,t,i);r=t.stateNode,E1.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cr(t,e.child,null,i),t.child=cr(t,null,l,i)):ze(e,t,l,i),t.memoizedState=r.state,o&&td(t,n,!0),t.child}function ch(e){var t=e.stateNode;t.pendingContext?ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ed(e,t.context,!1),$u(e,t.containerInfo)}function yd(e,t,n,r,o){return ur(),xu(o),t.flags|=256,ze(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function va(e){return{baseLanes:e,cachePool:null,transitions:null}}function dh(e,t,n){var r=t.pendingProps,o=ne.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(ne,o&1),e===null)return ca(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Es(s,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=va(n),t.memoizedState=ya,e):_u(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return k1(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=nn(l,i):(i=kn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?va(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _u(e,t){return t=Es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,n,r){return r!==null&&xu(r),cr(t,e.child,null,n),e=_u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k1(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=yl(Error(N(422))),ti(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Es({mode:"visible",children:r.children},o,0,null),i=kn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cr(t,e.child,null,s),t.child.memoizedState=va(s),t.memoizedState=ya,i);if(!(t.mode&1))return ti(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=yl(i,r,void 0),ti(e,t,s,r)}if(l=(s&e.childLanes)!==0,Me||l){if(r=we,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ot(e,o),ht(r,e,o,-1))}return Fu(),r=yl(Error(N(421))),ti(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=L1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Jt(o.nextSibling),Xe=t,te=!0,dt=null,e!==null&&(Je[Ze++]=jt,Je[Ze++]=Tt,Je[Ze++]=jn,jt=e.id,Tt=e.overflow,jn=t),t=_u(t,r.children),t.flags|=4096,t)}function vd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function vl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function fh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,n,t);else if(e.tag===19)vd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ne,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),vl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}vl(t,!0,n,null,i);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $1(e,t,n){switch(t.tag){case 3:ch(t),ur();break;case 5:Fp(t);break;case 1:Ue(t.type)&&Ui(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(Wi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?dh(e,t,n):(Y(ne,ne.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,ah(e,t,n)}return It(e,t,n)}var ph,xa,hh,mh;ph=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xa=function(){};hh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(Et.current);var i=null;switch(n){case"input":o=Bl(e,o),r=Bl(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=Vl(e,o),r=Vl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}Xl(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&G("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};mh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function P1(e,t,n){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Ue(t.type)&&Bi(),Pe(t),null;case 3:return r=t.stateNode,dr(),q(Be),q(je),Nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Na(dt),dt=null))),xa(e,t),Pe(t),null;case 5:Pu(t);var o=wn(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)hh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Pe(t),null}if(e=wn(Et.current),Zo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[mo]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Ur.length;o++)G(Ur[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":Nc(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Tc(r,i),G("invalid",r)}Xl(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Jo(r.textContent,l,e),o=["children",""+l]):oo.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":Vo(r),jc(r,i,!0);break;case"textarea":Vo(r),Rc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[mo]=r,ph(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ql(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ur.length;o++)G(Ur[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":Nc(e,r),o=Bl(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),G("invalid",e);break;case"textarea":Tc(e,r),o=Vl(e,r),G("invalid",e);break;default:o=r}Xl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Wf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&io(e,a):typeof a=="number"&&io(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&G("scroll",e):a!=null&&ru(e,i,a,s))}switch(n){case"input":Vo(e),jc(e,r,!1);break;case"textarea":Vo(e),Rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)mh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=wn(yo.current),wn(Et.current),Zo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Jo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Pe(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&We!==null&&t.mode&1&&!(t.flags&128))zp(),ur(),t.flags|=98560,i=!1;else if(i=Zo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[St]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),i=!1}else dt!==null&&(Na(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ge===0&&(ge=3):Fu())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return dr(),xa(e,t),e===null&&po(t.stateNode.containerInfo),Pe(t),null;case 10:return Cu(t.type._context),Pe(t),null;case 17:return Ue(t.type)&&Bi(),Pe(t),null;case 19:if(q(ne),i=t.memoizedState,i===null)return Pe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Ar(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Yi(e),s!==null){for(t.flags|=128,Ar(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>pr&&(t.flags|=128,r=!0,Ar(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!te)return Pe(t),null}else 2*ue()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Ar(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=ne.current,Y(ne,r?n&1|2:n&1),t):(Pe(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function N1(e,t){switch(vu(t),t.tag){case 1:return Ue(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),q(Be),q(je),Nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pu(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return dr(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var ni=!1,Ne=!1,j1=typeof WeakSet=="function"?WeakSet:Set,b=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function wa(e,t,n){try{n()}catch(r){le(e,t,r)}}var xd=!1;function T1(e,t){if(ra=Li,e=xp(),gu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,f=e,g=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++u===o&&(l=s),g===i&&++c===r&&(a=s),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},Li=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),E);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return v=xd,xd=!1,v}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&wa(t,n,i)}o=o.next}while(o!==r)}}function Ss(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gh(e){var t=e.alternate;t!==null&&(e.alternate=null,gh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[mo],delete t[la],delete t[d1],delete t[f1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yh(e){return e.tag===5||e.tag===3||e.tag===4}function wd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}var Se=null,ct=!1;function Mt(e,t,n){for(n=n.child;n!==null;)vh(e,t,n),n=n.sibling}function vh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:Ne||Jn(n,t);case 6:var r=Se,o=ct;Se=null,Mt(e,t,n),Se=r,ct=o,Se!==null&&(ct?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ct?(e=Se,n=n.stateNode,e.nodeType===8?dl(e.parentNode,n):e.nodeType===1&&dl(e,n),uo(e)):dl(Se,n.stateNode));break;case 4:r=Se,o=ct,Se=n.stateNode.containerInfo,ct=!0,Mt(e,t,n),Se=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&wa(n,t,s),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Ne&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Mt(e,t,n),Ne=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Sd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new j1),t.forEach(function(r){var o=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ct=!1;break e;case 3:Se=l.stateNode.containerInfo,ct=!0;break e;case 4:Se=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Se===null)throw Error(N(160));vh(i,s,o),Se=null,ct=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){le(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xh(t,e),t=t.sibling}function xh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{Jr(3,e,e.return),Ss(3,e)}catch(w){le(e,e.return,w)}try{Jr(5,e,e.return)}catch(w){le(e,e.return,w)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var o=e.stateNode;try{io(o,"")}catch(w){le(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Df(o,i),Ql(l,s);var u=Ql(l,i);for(s=0;s<a.length;s+=2){var c=a[s],f=a[s+1];c==="style"?Wf(o,f):c==="dangerouslySetInnerHTML"?Hf(o,f):c==="children"?io(o,f):ru(o,c,f,u)}switch(l){case"input":Ul(o,i);break;case"textarea":Bf(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?tr(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?tr(o,!!i.multiple,i.defaultValue,!0):tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(w){le(e,e.return,w)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){le(e,e.return,w)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(t.containerInfo)}catch(w){le(e,e.return,w)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=ue())),r&4&&Sd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||c,at(t,e),Ne=u):at(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(b=e,c=e.child;c!==null;){for(f=b=c;b!==null;){switch(g=b,y=g.child,g.tag){case 0:case 11:case 14:case 15:Jr(4,g,g.return);break;case 1:Jn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){le(r,n,w)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){Ed(f);continue}}y!==null?(y.return=g,b=y):Ed(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vf("display",s))}catch(w){le(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){le(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:at(t,e),vt(e),r&4&&Sd(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(io(o,""),r.flags&=-33);var i=wd(e);Ea(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=wd(e);Ca(e,l,s);break;default:throw Error(N(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function R1(e,t,n){b=e,wh(e)}function wh(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ni;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Ne;l=ni;var u=Ne;if(ni=s,(Ne=a)&&!u)for(b=o;b!==null;)s=b,a=s.child,s.tag===22&&s.memoizedState!==null?kd(o):a!==null?(a.return=s,b=a):kd(o);for(;i!==null;)b=i,wh(i),i=i.sibling;b=o,ni=l,Ne=u}Cd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,b=i):Cd(e)}}function Cd(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Ss(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&id(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}id(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ne||t.flags&512&&Sa(t)}catch(g){le(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Ed(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function kd(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ss(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){le(t,o,a)}}var i=t.return;try{Sa(t)}catch(a){le(t,i,a)}break;case 5:var s=t.return;try{Sa(t)}catch(a){le(t,s,a)}}}catch(a){le(t,t.return,a)}if(t===e){b=null;break}var l=t.sibling;if(l!==null){l.return=t.return,b=l;break}b=t.return}}var b1=Math.ceil,qi=At.ReactCurrentDispatcher,Ou=At.ReactCurrentOwner,nt=At.ReactCurrentBatchConfig,H=0,we=null,fe=null,Ce=0,Ve=0,Zn=un(0),ge=0,So=null,Rn=0,Cs=0,Iu=0,Zr=null,Le=null,Au=0,pr=1/0,$t=null,Ji=!1,ka=null,en=null,ri=!1,Xt=null,Zi=0,eo=0,$a=null,vi=-1,xi=0;function _e(){return H&6?ue():vi!==-1?vi:vi=ue()}function tn(e){return e.mode&1?H&2&&Ce!==0?Ce&-Ce:h1.transition!==null?(xi===0&&(xi=rp()),xi):(e=W,e!==0||(e=window.event,e=e===void 0?16:cp(e.type)),e):1}function ht(e,t,n,r){if(50<eo)throw eo=0,$a=null,Error(N(185));To(e,n,r),(!(H&2)||e!==we)&&(e===we&&(!(H&2)&&(Cs|=n),ge===4&&Vt(e,Ce)),He(e,r),n===1&&H===0&&!(t.mode&1)&&(pr=ue()+500,vs&&cn()))}function He(e,t){var n=e.callbackNode;hg(e,t);var r=Ai(e,e===we?Ce:0);if(r===0)n!==null&&_c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_c(n),t===1)e.tag===0?p1($d.bind(null,e)):Tp($d.bind(null,e)),u1(function(){!(H&6)&&cn()}),n=null;else{switch(op(r)){case 1:n=au;break;case 4:n=tp;break;case 16:n=Ii;break;case 536870912:n=np;break;default:n=Ii}n=jh(n,Sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sh(e,t){if(vi=-1,xi=0,H&6)throw Error(N(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Ai(e,e===we?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=es(e,r);else{t=r;var o=H;H|=2;var i=Eh();(we!==e||Ce!==t)&&($t=null,pr=ue()+500,En(e,t));do try{O1();break}catch(l){Ch(e,l)}while(1);Su(),qi.current=i,H=o,fe!==null?t=0:(we=null,Ce=0,t=ge)}if(t!==0){if(t===2&&(o=Jl(e),o!==0&&(r=o,t=Pa(e,o))),t===1)throw n=So,En(e,0),Vt(e,r),He(e,ue()),n;if(t===6)Vt(e,r);else{if(o=e.current.alternate,!(r&30)&&!z1(o)&&(t=es(e,r),t===2&&(i=Jl(e),i!==0&&(r=i,t=Pa(e,i))),t===1))throw n=So,En(e,0),Vt(e,r),He(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:hn(e,Le,$t);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Au+500-ue(),10<t)){if(Ai(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sa(hn.bind(null,e,Le,$t),t);break}hn(e,Le,$t);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-pt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b1(r/1960))-r,10<r){e.timeoutHandle=sa(hn.bind(null,e,Le,$t),r);break}hn(e,Le,$t);break;case 5:hn(e,Le,$t);break;default:throw Error(N(329))}}}return He(e,ue()),e.callbackNode===n?Sh.bind(null,e):null}function Pa(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=es(e,t),e!==2&&(t=Le,Le=n,t!==null&&Na(t)),e}function Na(e){Le===null?Le=e:Le.push.apply(Le,e)}function z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!gt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Iu,t&=~Cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function $d(e){if(H&6)throw Error(N(327));sr();var t=Ai(e,0);if(!(t&1))return He(e,ue()),null;var n=es(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=So,En(e,0),Vt(e,t),He(e,ue()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Le,$t),He(e,ue()),null}function Lu(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(pr=ue()+500,vs&&cn())}}function bn(e){Xt!==null&&Xt.tag===0&&!(H&6)&&sr();var t=H;H|=1;var n=nt.transition,r=W;try{if(nt.transition=null,W=1,e)return e()}finally{W=r,nt.transition=n,H=t,!(H&6)&&cn()}}function Mu(){Ve=Zn.current,q(Zn)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a1(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:dr(),q(Be),q(je),Nu();break;case 5:Pu(r);break;case 4:dr();break;case 13:q(ne);break;case 19:q(ne);break;case 10:Cu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(we=e,fe=e=nn(e.current,null),Ce=Ve=t,ge=0,So=null,Iu=Cs=Rn=0,Le=Zr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}xn=null}return e}function Ch(e,t){do{var n=fe;try{if(Su(),mi.current=Ki,Gi){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Gi=!1}if(Tn=0,ve=me=re=null,qr=!1,vo=0,Ou.current=null,n===null||n.return===null){ge=1,So=t,fe=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=Ce,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=fd(s);if(y!==null){y.flags&=-257,pd(y,s,l,i,t),y.mode&1&&dd(i,u,t),t=y,a=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){dd(i,u,t),Fu();break e}a=Error(N(426))}}else if(te&&l.mode&1){var E=fd(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),pd(E,s,l,i,t),xu(fr(a,l));break e}}i=a=fr(a,l),ge!==4&&(ge=2),Zr===null?Zr=[i]:Zr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=ih(i,a,t);od(i,m);break e;case 1:l=a;var h=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(en===null||!en.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=sh(i,l,t);od(i,S);break e}}i=i.return}while(i!==null)}$h(n)}catch(k){t=k,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Eh(){var e=qi.current;return qi.current=Ki,e===null?Ki:e}function Fu(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||!(Rn&268435455)&&!(Cs&268435455)||Vt(we,Ce)}function es(e,t){var n=H;H|=2;var r=Eh();(we!==e||Ce!==t)&&($t=null,En(e,t));do try{_1();break}catch(o){Ch(e,o)}while(1);if(Su(),H=n,qi.current=r,fe!==null)throw Error(N(261));return we=null,Ce=0,ge}function _1(){for(;fe!==null;)kh(fe)}function O1(){for(;fe!==null&&!ig();)kh(fe)}function kh(e){var t=Nh(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?$h(e):fe=t,Ou.current=null}function $h(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=N1(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=P1(n,t,Ve),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function hn(e,t,n){var r=W,o=nt.transition;try{nt.transition=null,W=1,I1(e,t,n,r)}finally{nt.transition=o,W=r}return null}function I1(e,t,n,r){do sr();while(Xt!==null);if(H&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mg(e,i),e===we&&(fe=we=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,jh(Ii,function(){return sr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nt.transition,nt.transition=null;var s=W;W=1;var l=H;H|=4,Ou.current=null,T1(e,n),xh(n,e),t1(oa),Li=!!ra,oa=ra=null,e.current=n,R1(n),sg(),H=l,W=s,nt.transition=i}else e.current=n;if(ri&&(ri=!1,Xt=e,Zi=o),i=e.pendingLanes,i===0&&(en=null),ug(n.stateNode),He(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ji)throw Ji=!1,e=ka,ka=null,e;return Zi&1&&e.tag!==0&&sr(),i=e.pendingLanes,i&1?e===$a?eo++:(eo=0,$a=e):eo=0,cn(),null}function sr(){if(Xt!==null){var e=op(Zi),t=nt.transition,n=W;try{if(nt.transition=null,W=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Zi=0,H&6)throw Error(N(331));var o=H;for(H|=4,b=e.current;b!==null;){var i=b,s=i.child;if(b.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Jr(8,c,i)}var f=c.child;if(f!==null)f.return=c,b=f;else for(;b!==null;){c=b;var g=c.sibling,y=c.return;if(gh(c),c===u){b=null;break}if(g!==null){g.return=y,b=g;break}b=y}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}b=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,b=s;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Jr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,b=m;break e}b=i.return}}var h=e.current;for(b=h;b!==null;){s=b;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,b=x;else e:for(s=h;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ss(9,l)}}catch(k){le(l,l.return,k)}if(l===s){b=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,b=S;break e}b=l.return}}if(H=o,cn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ps,e)}catch{}r=!0}return r}finally{W=n,nt.transition=t}}return!1}function Pd(e,t,n){t=fr(n,t),t=ih(e,t,1),e=Zt(e,t,1),t=_e(),e!==null&&(To(e,1,t),He(e,t))}function le(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=fr(n,e),e=sh(t,e,1),t=Zt(t,e,1),e=_e(),t!==null&&(To(t,1,e),He(t,e));break}}t=t.return}}function A1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(Ce&n)===n&&(ge===4||ge===3&&(Ce&130023424)===Ce&&500>ue()-Au?En(e,0):Iu|=n),He(e,t)}function Ph(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=_e();e=Ot(e,t),e!==null&&(To(e,t,n),He(e,n))}function L1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ph(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Ph(e,n)}var Nh;Nh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,$1(e,t,n);Me=!!(e.flags&131072)}else Me=!1,te&&t.flags&1048576&&Rp(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yi(e,t),e=t.pendingProps;var o=ar(t,je.current);ir(t,n),o=Tu(null,t,r,e,o,n);var i=Ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,Ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ku(t),o.updater=xs,t.stateNode=o,o._reactInternals=t,pa(t,r,e,n),t=ga(null,t,r,!0,i,n)):(t.tag=0,te&&i&&yu(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=D1(r),e=ut(r,e),o){case 0:t=ma(null,t,r,e,n);break e;case 1:t=gd(null,t,r,e,n);break e;case 11:t=hd(null,t,r,e,n);break e;case 14:t=md(null,t,r,ut(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ma(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),gd(e,t,r,o,n);case 3:e:{if(ch(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Op(e,t),Qi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error(N(423)),t),t=yd(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(N(424)),t),t=yd(e,t,r,n,o);break e}else for(We=Jt(t.stateNode.containerInfo.firstChild),Xe=t,te=!0,dt=null,n=Mp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=It(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Fp(t),e===null&&ca(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,ia(r,o)?s=null:i!==null&&ia(r,i)&&(t.flags|=32),uh(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&ca(t),null;case 13:return dh(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),hd(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Y(Wi,r._currentValue),r._currentValue=s,i!==null)if(gt(i.value,s)){if(i.children===o.children&&!Be.current){t=It(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),da(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),da(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=ot(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),md(e,t,r,o,n);case 15:return lh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),yi(e,t),t.tag=1,Ue(r)?(e=!0,Ui(t)):e=!1,ir(t,n),Ap(t,r,o),pa(t,r,o,n),ga(null,t,r,!0,e,n);case 19:return fh(e,t,n);case 22:return ah(e,t,n)}throw Error(N(156,t.tag))};function jh(e,t){return ep(e,t)}function F1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new F1(e,t,n,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D1(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===iu)return 11;if(e===su)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Du(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Hn:return kn(n.children,o,i,t);case ou:s=8,o|=8;break;case Ll:return e=et(12,n,t,o|2),e.elementType=Ll,e.lanes=i,e;case Ml:return e=et(13,n,t,o),e.elementType=Ml,e.lanes=i,e;case Fl:return e=et(19,n,t,o),e.elementType=Fl,e.lanes=i,e;case Lf:return Es(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case If:s=10;break e;case Af:s=9;break e;case iu:s=11;break e;case su:s=14;break e;case Bt:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=et(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Es(e,t,n,r){return e=et(22,e,r,t),e.elementType=Lf,e.lanes=n,e.stateNode={isHidden:!1},e}function xl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function wl(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=el(0),this.expirationTimes=el(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,o,i,s,l,a){return e=new B1(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(i),e}function U1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Th(e){if(!e)return ln;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ue(n))return jp(e,n,t)}return t}function Rh(e,t,n,r,o,i,s,l,a){return e=Bu(n,r,!0,e,o,i,s,l,a),e.context=Th(null),n=e.current,r=_e(),o=tn(n),i=Rt(r,o),i.callback=t??null,Zt(n,i,o),e.current.lanes=o,To(e,o,r),He(e,r),e}function ks(e,t,n,r){var o=t.current,i=_e(),s=tn(o);return n=Th(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(o,t,s),e!==null&&(ht(e,o,s,i),hi(e,o,s)),s}function ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uu(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function H1(){return null}var bh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hu(e){this._internalRoot=e}$s.prototype.render=Hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));ks(e,t,null,null)};$s.prototype.unmount=Hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){ks(null,e,null,null)}),t[_t]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=lp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ht.length&&t!==0&&t<Ht[n].priority;n++);Ht.splice(n,0,e),n===0&&up(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function V1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ts(s);i.call(u)}}var s=Rh(t,r,e,0,null,!1,!1,"",jd);return e._reactRootContainer=s,e[_t]=s.current,po(e.nodeType===8?e.parentNode:e),bn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ts(a);l.call(u)}}var a=Bu(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=a,e[_t]=a.current,po(e.nodeType===8?e.parentNode:e),bn(function(){ks(t,a,n,r)}),a}function Ns(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=ts(s);l.call(a)}}ks(t,s,e,o)}else s=V1(n,t,e,o,r);return ts(s)}ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(uu(t,n|1),He(t,ue()),!(H&6)&&(pr=ue()+500,cn()))}break;case 13:bn(function(){var r=Ot(e,1);if(r!==null){var o=_e();ht(r,e,1,o)}}),Uu(e,1)}};cu=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=_e();ht(t,e,134217728,n)}Uu(e,134217728)}};sp=function(e){if(e.tag===13){var t=tn(e),n=Ot(e,t);if(n!==null){var r=_e();ht(n,e,t,r)}Uu(e,t)}};lp=function(){return W};ap=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Gl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ys(r);if(!o)throw Error(N(90));Ff(r),Ul(r,o)}}}break;case"textarea":Bf(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};Yf=Lu;Gf=bn;var W1={usingClientEntryPoint:!1,Events:[bo,Qn,ys,Xf,Qf,Lu]},Lr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},X1={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jf(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{ps=oi.inject(X1),Ct=oi}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error(N(200));return U1(e,t,null,n)};Ye.createRoot=function(e,t){if(!Vu(e))throw Error(N(299));var n=!1,r="",o=bh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bu(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,po(e.nodeType===8?e.parentNode:e),new Hu(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Jf(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return bn(e)};Ye.hydrate=function(e,t,n){if(!Ps(t))throw Error(N(200));return Ns(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=bh;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Rh(t,null,e,1,n??null,o,!1,i,s),e[_t]=t.current,po(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $s(t)};Ye.render=function(e,t,n){if(!Ps(t))throw Error(N(200));return Ns(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Ps(e))throw Error(N(40));return e._reactRootContainer?(bn(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ye.unstable_batchedUpdates=Lu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ps(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Ns(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";function zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh)}catch(e){console.error(e)}}zh(),Rf.exports=Ye;var _h=Rf.exports;const ii=xf(_h);var Td=_h;Il.createRoot=Td.createRoot,Il.hydrateRoot=Td.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Co.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const Rd="popstate";function Q1(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:l}=r.location;return ja("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ns(o)}return G1(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y1(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,n,r){return n===void 0&&(n=null),Co({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||Y1()})}function ns(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G1(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,l=Qt.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(Co({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){l=Qt.Pop;let E=c(),m=E==null?null:E-u;u=E,a&&a({action:l,location:w.location,delta:m})}function g(E,m){l=Qt.Push;let h=ja(w.location,E,m);n&&n(h,E),u=c()+1;let x=bd(h,u),S=w.createHref(h);try{s.pushState(x,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}i&&a&&a({action:l,location:w.location,delta:1})}function y(E,m){l=Qt.Replace;let h=ja(w.location,E,m);n&&n(h,E),u=c();let x=bd(h,u),S=w.createHref(h);s.replaceState(x,"",S),i&&a&&a({action:l,location:w.location,delta:0})}function v(E){let m=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof E=="string"?E:ns(E);return pe(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let w={get action(){return l},get location(){return e(o,s)},listen(E){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Rd,f),a=E,()=>{o.removeEventListener(Rd,f),a=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(E){return s.go(E)}};return w}var zd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zd||(zd={}));function K1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,o=Xu(r.pathname||"/",n);if(o==null)return null;let i=Oh(e);q1(i);let s=null;for(let l=0;s==null&&l<i.length;++l)s=sy(i[l],uy(o));return s}function Oh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};a.relativePath.startsWith("/")&&(pe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=rn([r,a.relativePath]),c=n.concat(a);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Oh(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:oy(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,s);else for(let a of Ih(i.path))o(i,s,a)}),t}function Ih(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Ih(r.join("/")),l=[];return l.push(...s.map(a=>a===""?i:[i,a].join("/"))),o&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function q1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:\w+$/,Z1=3,ey=2,ty=1,ny=10,ry=-2,_d=e=>e==="*";function oy(e,t){let n=e.split("/"),r=n.length;return n.some(_d)&&(r+=ry),t&&(r+=ey),n.filter(o=>!_d(o)).reduce((o,i)=>o+(J1.test(i)?Z1:i===""?ty:ny),r)}function iy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function sy(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=ly({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;i.push({params:r,pathname:rn([o,c.pathname]),pathnameBase:py(rn([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=rn([o,c.pathnameBase]))}return i}function ly(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ay(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let g=l[f]||"";s=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=cy(l[f]||"",c),u},{}),pathname:i,pathnameBase:s,pattern:e}}function ay(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function uy(e){try{return decodeURI(e)}catch(t){return Wu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cy(e,t){try{return decodeURIComponent(e)}catch(n){return Wu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function dy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:fy(n,t):t,search:hy(r),hash:my(o)}}function fy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Sl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ah(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=kr(e):(o=Co({},e),pe(!o.pathname||!o.pathname.includes("?"),Sl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Sl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Sl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,l;if(r||s==null)l=n;else{let f=t.length-1;if(s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let a=dy(o,l),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),py=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,my=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mh=["post","put","patch","delete"];new Set(Mh);const yy=["get",...Mh];new Set(yy);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}const Qu=C.createContext(null),vy=C.createContext(null),$r=C.createContext(null),js=C.createContext(null),dn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Fh=C.createContext(null);function xy(e,t){let{relative:n}=t===void 0?{}:t;_o()||pe(!1);let{basename:r,navigator:o}=C.useContext($r),{hash:i,pathname:s,search:l}=Hh(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:rn([r,s])),o.createHref({pathname:a,search:l,hash:i})}function _o(){return C.useContext(js)!=null}function Ts(){return _o()||pe(!1),C.useContext(js).location}function Dh(e){C.useContext($r).static||C.useLayoutEffect(e)}function Bh(){let{isDataRoute:e}=C.useContext(dn);return e?zy():wy()}function wy(){_o()||pe(!1);let e=C.useContext(Qu),{basename:t,navigator:n}=C.useContext($r),{matches:r}=C.useContext(dn),{pathname:o}=Ts(),i=JSON.stringify(Ah(r).map(a=>a.pathnameBase)),s=C.useRef(!1);return Dh(()=>{s.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){n.go(a);return}let c=Lh(a,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:rn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,i,o,e])}function Uh(){let{matches:e}=C.useContext(dn),t=e[e.length-1];return t?t.params:{}}function Hh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(dn),{pathname:o}=Ts(),i=JSON.stringify(Ah(r).map(s=>s.pathnameBase));return C.useMemo(()=>Lh(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Sy(e,t){return Cy(e,t)}function Cy(e,t,n){_o()||pe(!1);let{navigator:r}=C.useContext($r),{matches:o}=C.useContext(dn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let a=Ts(),u;if(t){var c;let w=typeof t=="string"?kr(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||pe(!1),u=w}else u=a;let f=u.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",y=K1(e,{pathname:g}),v=Ny(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:rn([l,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:rn([l,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n);return t&&v?C.createElement(js.Provider,{value:{location:rs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qt.Pop}},v):v}function Ey(){let e=by(),t=gy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,i)}const ky=C.createElement(Ey,null);class $y extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(dn.Provider,{value:this.props.routeContext},C.createElement(Fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Py(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Qu);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(dn.Provider,{value:t},r)}function Ny(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let l=i.findIndex(a=>a.route.id&&(s==null?void 0:s[a.route.id]));l>=0||pe(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,a,u)=>{let c=a.route.id?s==null?void 0:s[a.route.id]:null,f=null;n&&(f=a.route.errorElement||ky);let g=t.concat(i.slice(0,u+1)),y=()=>{let v;return c?v=f:a.route.Component?v=C.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,C.createElement(Py,{match:a,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?C.createElement($y,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Ta;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ta||(Ta={}));var Eo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Eo||(Eo={}));function jy(e){let t=C.useContext(Qu);return t||pe(!1),t}function Ty(e){let t=C.useContext(vy);return t||pe(!1),t}function Ry(e){let t=C.useContext(dn);return t||pe(!1),t}function Vh(e){let t=Ry(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function by(){var e;let t=C.useContext(Fh),n=Ty(Eo.UseRouteError),r=Vh(Eo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function zy(){let{router:e}=jy(Ta.UseNavigateStable),t=Vh(Eo.UseNavigateStable),n=C.useRef(!1);return Dh(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,rs({fromRouteId:t},i)))},[e,t])}function Si(e){pe(!1)}function _y(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Qt.Pop,navigator:i,static:s=!1}=e;_o()&&pe(!1);let l=t.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:l,navigator:i,static:s}),[l,i,s]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:y="default"}=r,v=C.useMemo(()=>{let w=Xu(u,l);return w==null?null:{location:{pathname:w,search:c,hash:f,state:g,key:y},navigationType:o}},[l,u,c,f,g,y,o]);return v==null?null:C.createElement($r.Provider,{value:a},C.createElement(js.Provider,{children:n,value:v}))}function Oy(e){let{children:t,location:n}=e;return Sy(Ra(t),n)}var Od;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Od||(Od={}));new Promise(()=>{});function Ra(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,Ra(r.props.children,i));return}r.type!==Si&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ra(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}function Iy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ay(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ly(e,t){return e.button===0&&(!t||t==="_self")&&!Ay(e)}const My=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Fy="startTransition",Id=L0[Fy];function Dy(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=Q1({window:o,v5Compat:!0}));let s=i.current,[l,a]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&Id?Id(()=>a(f)):a(f)},[a,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.createElement(_y,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s})}const By=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wh=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:l,target:a,to:u,preventScrollReset:c}=t,f=Iy(t,My),{basename:g}=C.useContext($r),y,v=!1;if(typeof u=="string"&&Uy.test(u)&&(y=u,By))try{let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),S=Xu(x.pathname,g);x.origin===h.origin&&S!=null?u=S+x.search+x.hash:v=!0}catch{}let w=xy(u,{relative:o}),E=Hy(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:o});function m(h){r&&r(h),h.defaultPrevented||E(h)}return C.createElement("a",ba({},f,{href:y||w,onClick:v||i?r:m,ref:n,target:a}))});var Ad;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ad||(Ad={}));var Ld;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function Hy(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s}=t===void 0?{}:t,l=Bh(),a=Ts(),u=Hh(e,{relative:s});return C.useCallback(c=>{if(Ly(c,n)){c.preventDefault();let f=r!==void 0?r:ns(a)===ns(u);l(e,{replace:f,state:o,preventScrollReset:i,relative:s})}},[a,l,u,r,o,n,e,i,s])}var Fe=function(){return Fe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fe.apply(this,arguments)};function ko(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var K="-ms-",to="-moz-",V="-webkit-",Xh="comm",Rs="rule",Yu="decl",Vy="@import",Qh="@keyframes",Wy="@layer",Xy=Math.abs,Gu=String.fromCharCode,za=Object.assign;function Qy(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function Yh(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Ci(e,t){return e.indexOf(t)}function xe(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function Gh(e){return e.length}function Hr(e,t){return t.push(e),e}function Yy(e,t){return e.map(t).join("")}function Md(e,t){return e.filter(function(n){return!Pt(n,t)})}var bs=1,mr=1,Kh=0,st=0,de=0,Pr="";function zs(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:bs,column:mr,length:s,return:"",siblings:l}}function Dt(e,t){return za(zs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fn(e){for(;e.root;)e=Dt(e.root,{children:[e]});Hr(e,e.siblings)}function Gy(){return de}function Ky(){return de=st>0?xe(Pr,--st):0,mr--,de===10&&(mr=1,bs--),de}function mt(){return de=st<Kh?xe(Pr,st++):0,mr++,de===10&&(mr=1,bs++),de}function $n(){return xe(Pr,st)}function Ei(){return st}function _s(e,t){return hr(Pr,e,t)}function _a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qy(e){return bs=mr=1,Kh=wt(Pr=e),st=0,[]}function Jy(e){return Pr="",e}function Cl(e){return Yh(_s(st-1,Oa(e===91?e+2:e===40?e+1:e)))}function Zy(e){for(;(de=$n())&&de<33;)mt();return _a(e)>2||_a(de)>3?"":" "}function ev(e,t){for(;--t&&mt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return _s(e,Ei()+(t<6&&$n()==32&&mt()==32))}function Oa(e){for(;mt();)switch(de){case e:return st;case 34:case 39:e!==34&&e!==39&&Oa(de);break;case 40:e===41&&Oa(e);break;case 92:mt();break}return st}function tv(e,t){for(;mt()&&e+de!==47+10;)if(e+de===42+42&&$n()===47)break;return"/*"+_s(t,st-1)+"*"+Gu(e===47?e:mt())}function nv(e){for(;!_a($n());)mt();return _s(e,st)}function rv(e){return Jy(ki("",null,null,null,[""],e=qy(e),0,[0],e))}function ki(e,t,n,r,o,i,s,l,a){for(var u=0,c=0,f=s,g=0,y=0,v=0,w=1,E=1,m=1,h=0,x="",S=o,k=i,j=r,P=x;E;)switch(v=h,h=mt()){case 40:if(v!=108&&xe(P,f-1)==58){Ci(P+=M(Cl(h),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:P+=Cl(h);break;case 9:case 10:case 13:case 32:P+=Zy(v);break;case 92:P+=ev(Ei()-1,7);continue;case 47:switch($n()){case 42:case 47:Hr(ov(tv(mt(),Ei()),t,n,a),a);break;default:P+="/"}break;case 123*w:l[u++]=wt(P)*m;case 125*w:case 59:case 0:switch(h){case 0:case 125:E=0;case 59+c:m==-1&&(P=M(P,/\f/g,"")),y>0&&wt(P)-f&&Hr(y>32?Dd(P+";",r,n,f-1,a):Dd(M(P," ","")+";",r,n,f-2,a),a);break;case 59:P+=";";default:if(Hr(j=Fd(P,t,n,u,c,o,l,x,S=[],k=[],f,i),i),h===123)if(c===0)ki(P,t,j,j,S,i,f,l,k);else switch(g===99&&xe(P,3)===110?100:g){case 100:case 108:case 109:case 115:ki(e,j,j,r&&Hr(Fd(e,j,j,0,0,o,l,x,o,S=[],f,k),k),o,k,f,l,r?S:k);break;default:ki(P,j,j,j,[""],k,0,l,k)}}u=c=y=0,w=m=1,x=P="",f=s;break;case 58:f=1+wt(P),y=v;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&Ky()==125)continue}switch(P+=Gu(h),h*w){case 38:m=c>0?1:(P+="\f",-1);break;case 44:l[u++]=(wt(P)-1)*m,m=1;break;case 64:$n()===45&&(P+=Cl(mt())),g=$n(),c=f=wt(x=P+=nv(Ei())),h++;break;case 45:v===45&&wt(P)==2&&(w=0)}}return i}function Fd(e,t,n,r,o,i,s,l,a,u,c,f){for(var g=o-1,y=o===0?i:[""],v=Gh(y),w=0,E=0,m=0;w<r;++w)for(var h=0,x=hr(e,g+1,g=Xy(E=s[w])),S=e;h<v;++h)(S=Yh(E>0?y[h]+" "+x:M(x,/&\f/g,y[h])))&&(a[m++]=S);return zs(e,t,n,o===0?Rs:l,a,u,c,f)}function ov(e,t,n,r){return zs(e,t,n,Xh,Gu(Gy()),hr(e,2,-2),0,r)}function Dd(e,t,n,r,o){return zs(e,t,n,Yu,hr(e,0,r),hr(e,r+1,-1),r,o)}function qh(e,t,n){switch(Qy(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return to+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+to+e+K+e+e;case 5936:switch(xe(e,t+11)){case 114:return V+e+K+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+K+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+K+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+K+e+e;case 6165:return V+e+K+"flex-"+e+e;case 5187:return V+e+M(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return V+e+K+"flex-item-"+M(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":K+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return V+e+K+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+K+M(e,"shrink","negative")+e;case 5292:return V+e+K+M(e,"basis","preferred-size")+e;case 6060:return V+"box-"+M(e,"-grow","")+V+e+K+M(e,"grow","positive")+e;case 4554:return V+M(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return K+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return K+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Pt(r.props,/grid-\w+-end/)})?~Ci(e+(n=n[t].value),"span")?e:K+M(e,"-start","")+e+K+"grid-row-span:"+(~Ci(n,"span")?Pt(n,/\d+/):+Pt(n,/\d+/)-+Pt(e,/\d+/))+";":K+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Pt(r.props,/grid-\w+-start/)})?e:K+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+to+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ci(e,"stretch")?qh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,a,u){return K+o+":"+i+u+(s?K+o+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(xe(e,t+6)===121)return M(e,":",":"+V)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(xe(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+K+"$2box$3")+e;case 100:return M(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function os(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function iv(e,t,n,r){switch(e.type){case Wy:if(e.children.length)break;case Vy:case Yu:return e.return=e.return||e.value;case Xh:return"";case Qh:return e.return=e.value+"{"+os(e.children,r)+"}";case Rs:if(!wt(e.value=e.props.join(",")))return""}return wt(n=os(e.children,r))?e.return=e.value+"{"+n+"}":""}function sv(e){var t=Gh(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function lv(e){return function(t){t.root||(t=t.return)&&e(t)}}function av(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yu:e.return=qh(e.value,e.length,n);return;case Qh:return os([Dt(e,{value:M(e.value,"@","@"+V)})],r);case Rs:if(e.length)return Yy(n=e.props,function(o){switch(Pt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fn(Dt(e,{props:[M(o,/:(read-\w+)/,":"+to+"$1")]})),Fn(Dt(e,{props:[o]})),za(e,{props:Md(n,r)});break;case"::placeholder":Fn(Dt(e,{props:[M(o,/:(plac\w+)/,":"+V+"input-$1")]})),Fn(Dt(e,{props:[M(o,/:(plac\w+)/,":"+to+"$1")]})),Fn(Dt(e,{props:[M(o,/:(plac\w+)/,K+"input-$1")]})),Fn(Dt(e,{props:[o]})),za(e,{props:Md(n,r)});break}return""})}}var uv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ku=typeof window<"u"&&"HTMLElement"in window,cv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Os=Object.freeze([]),yr=Object.freeze({});function dv(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var Jh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pv=/(^-|-$)/g;function Bd(e){return e.replace(fv,"-").replace(pv,"")}var hv=/(a)(d)/gi,Ud=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ia(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ud(t%52)+n;return(Ud(t%52)+n).replace(hv,"$1-$2")}var El,er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zh=function(e){return er(5381,e)};function em(e){return Ia(Zh(e)>>>0)}function mv(e){return e.displayName||e.name||"Component"}function kl(e){return typeof e=="string"&&!0}var tm=typeof Symbol=="function"&&Symbol.for,nm=tm?Symbol.for("react.memo"):60115,gv=tm?Symbol.for("react.forward_ref"):60112,yv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xv=((El={})[gv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},El[nm]=rm,El);function Hd(e){return("type"in(t=e)&&t.type.$$typeof)===nm?rm:"$$typeof"in e?xv[e.$$typeof]:yv;var t}var wv=Object.defineProperty,Sv=Object.getOwnPropertyNames,Vd=Object.getOwnPropertySymbols,Cv=Object.getOwnPropertyDescriptor,Ev=Object.getPrototypeOf,Wd=Object.prototype;function om(e,t,n){if(typeof t!="string"){if(Wd){var r=Ev(t);r&&r!==Wd&&om(e,r,n)}var o=Sv(t);Vd&&(o=o.concat(Vd(t)));for(var i=Hd(e),s=Hd(t),l=0;l<o.length;++l){var a=o[l];if(!(a in vv||n&&n[a]||s&&a in s||i&&a in i)){var u=Cv(t,a);try{wv(e,a,u)}catch{}}}}return e}function vr(e){return typeof e=="function"}function qu(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Aa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function $o(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function La(e,t,n){if(n===void 0&&(n=!1),!n&&!$o(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=La(e[r],t[r]);else if($o(t))for(var r in t)e[r]=La(e[r],t[r]);return e}function Ju(e,t){Object.defineProperty(e,"toString",{value:t})}function Oo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Oo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),$i=new Map,is=new Map,$l=1,si=function(e){if($i.has(e))return $i.get(e);for(;is.has($l);)$l++;var t=$l++;return $i.set(e,t),is.set(t,e),t},$v=function(e,t){$i.set(e,t),is.set(t,e)},Pv="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Nv=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jv=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Tv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(Nv);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&($v(c,u),jv(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function Rv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var im=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var a=Array.from(l.querySelectorAll("style[".concat(gr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.0.7");var s=Rv();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},bv=function(){function e(t){this.element=im(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Oo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),zv=function(){function e(t){this.element=im(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_v=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xd=Ku,Ov={isServer:!Ku,useCSSOMInjection:!cv},sm=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var o=this;this.options=Fe(Fe({},Ov),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ku&&Xd&&(Xd=!1,function(i){for(var s=document.querySelectorAll(Pv),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(gr)!=="active"&&(Tv(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ju(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(f){var g=function(m){return is.get(m)}(f);if(g===void 0)return"continue";var y=i.names.get(g),v=s.getGroup(f);if(y===void 0||v.length===0)return"continue";var w="".concat(gr,".g").concat(f,'[id="').concat(g,'"]'),E="";y!==void 0&&y.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),a+="".concat(v).concat(w,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<l;c++)u(c);return a}(o)})}return e.registerId=function(t){return si(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Fe(Fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new _v(o):r?new bv(o):new zv(o)}(this.options),new kv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(si(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Iv=/&/g,Av=/^\s*\/\/.*$/gm;function lm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lm(n.children,t)),n})}function Lv(e){var t,n,r,o=e===void 0?yr:e,i=o.options,s=i===void 0?yr:i,l=o.plugins,a=l===void 0?Os:l,u=function(g,y,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},c=a.slice();c.push(function(g){g.type===Rs&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Iv,n).replace(r,u))}),s.prefix&&c.push(av),c.push(iv);var f=function(g,y,v,w){y===void 0&&(y=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var E=g.replace(Av,""),m=rv(v||y?"".concat(v," ").concat(y," { ").concat(E," }"):E);s.namespace&&(m=lm(m,s.namespace));var h=[];return os(m,sv(c.concat(lv(function(x){return h.push(x)})))),h};return f.hash=a.length?a.reduce(function(g,y){return y.name||Oo(15),er(g,y.name)},5381).toString():"",f}var Mv=new sm,Ma=Lv(),am=z.createContext({shouldForwardProp:void 0,styleSheet:Mv,stylis:Ma});am.Consumer;z.createContext(void 0);function Qd(){return C.useContext(am)}var um=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ma);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ju(this,function(){throw Oo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ma),this.name+t.hash},e}(),Fv=function(e){return e>="A"&&e<="Z"};function Yd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Fv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var cm=function(e){return e==null||e===!1||e===""},dm=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!cm(i)&&(Array.isArray(i)&&i.isCss||vr(i)?r.push("".concat(Yd(o),":"),i,";"):$o(i)?r.push.apply(r,ko(ko(["".concat(o," {")],dm(i),!1),["}"],!1)):r.push("".concat(Yd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in uv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pn(e,t,n,r){if(cm(e))return[];if(qu(e))return[".".concat(e.styledComponentId)];if(vr(e)){if(!vr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Pn(o,t,n,r)}var i;return e instanceof um?n?(e.inject(n,r),[e.getName(r)]):[e]:$o(e)?dm(e):Array.isArray(e)?Array.prototype.concat.apply(Os,e.map(function(s){return Pn(s,t,n,r)})):[e.toString()]}function Dv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vr(n)&&!qu(n))return!1}return!0}var Bv=Zh("6.0.7"),Uv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dv(t),this.componentId=n,this.baseHash=er(Bv,n),this.baseStyle=r,sm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Sn(o,this.staticRulesId);else{var i=Aa(Pn(this.rules,t,n,r)),s=Ia(er(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=Sn(o,s),this.staticRulesId=s}else{for(var a=er(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var g=Aa(Pn(f,t,n,r));a=er(a,g),u+=g}}if(u){var y=Ia(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),o=Sn(o,y)}}return o},e}(),fm=z.createContext(void 0);fm.Consumer;var Pl={};function Hv(e,t,n){var r=qu(e),o=e,i=!kl(e),s=t.attrs,l=s===void 0?Os:s,a=t.componentId,u=a===void 0?function(x,S){var k=typeof x!="string"?"sc":Bd(x);Pl[k]=(Pl[k]||0)+1;var j="".concat(k,"-").concat(em("6.0.7"+k+Pl[k]));return S?"".concat(S,"-").concat(j):j}(t.displayName,t.parentComponentId):a,c=t.displayName;c===void 0&&function(x){return kl(x)?"styled.".concat(x):"Styled(".concat(mv(x),")")}(e);var f=t.displayName&&t.componentId?"".concat(Bd(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(x,S){return v(x,S)&&w(x,S)}}else y=v}var E=new Uv(n,f,r?o.componentStyle:void 0);function m(x,S){return function(k,j,P){var R=k.attrs,D=k.componentStyle,A=k.defaultProps,X=k.foldedComponentIds,J=k.styledComponentId,ae=k.target,se=z.useContext(fm),Te=Qd(),L=k.shouldForwardProp||Te.shouldForwardProp,B=function(Ke,Re,yt){for(var be,Ae=Fe(Fe({},Re),{className:void 0,theme:yt}),Tr=0;Tr<Ke.length;Tr+=1){var Ln=vr(be=Ke[Tr])?be(Ae):be;for(var lt in Ln)Ae[lt]=lt==="className"?Sn(Ae[lt],Ln[lt]):lt==="style"?Fe(Fe({},Ae[lt]),Ln[lt]):Ln[lt]}return Re.className&&(Ae.className=Sn(Ae.className,Re.className)),Ae}(R,j,dv(j,se,A)||yr),T=B.as||ae,_={};for(var I in B)B[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?_.as=B.forwardedAs:L&&!L(I,T)||(_[I]=B[I]));var Q=function(Ke,Re){var yt=Qd(),be=Ke.generateAndInjectStyles(Re,yt.styleSheet,yt.stylis);return be}(D,B),Z=Sn(X,J);return Q&&(Z+=" "+Q),B.className&&(Z+=" "+B.className),_[kl(T)&&!Jh.has(T)?"class":"className"]=Z,_.ref=P,C.createElement(T,_)}(h,x,S)}var h=z.forwardRef(m);return h.attrs=g,h.componentStyle=E,h.shouldForwardProp=y,h.foldedComponentIds=r?Sn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=f,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(S){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var P=0,R=k;P<R.length;P++)La(S,R[P],!0);return S}({},o.defaultProps,x):x}}),Ju(h,function(){return".".concat(h.styledComponentId)}),i&&om(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Gd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Kd=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vr(e)||$o(e)){var r=e;return Kd(Pn(Gd(Os,ko([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Pn(o):Kd(Pn(Gd(o,t)))}function Fa(e,t,n){if(n===void 0&&(n=yr),!t)throw Oo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,ye.apply(void 0,ko([o],i,!1)))};return r.attrs=function(o){return Fa(e,t,Fe(Fe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fa(e,t,Fe(Fe({},n),o))},r}var pm=function(e){return Fa(Hv,e)},O=pm;Jh.forEach(function(e){O[e]=pm(e)});function An(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Aa(ye.apply(void 0,ko([e],t,!1))),o=em(r);return new um(o,r)}const Vv={dark:"#17161a",incognito:"#333",white:"#fff",background_white:"#f5f5f7",background_dark:"#264653",primary:"#f4a261",secondary:"#E9C46A",green:"green",success:"#33CCBB",red:"#E76F51",redSecondary:"#c4151c",blue:"#51a7e1",greyLight:"#e4e5e9",greyMedium:"#a7a8ad",greySemiDark:"#93a2b1",greyDark:"#6f737e",greyBlue:"#747b91",loginLine:"#E9C46A"},Wv={xxs:"0.25rem",xs:"0.5rem",sm:"0.75rem",md:"1.25rem",lg:"2rem",xl:"3.25rem",xxl:"5.25rem"},Xv={size:{XXXS:"0.5rem",XXS:"0.625rem",XS:"0.75rem",SM:"0.9375rem",P0:"1rem",P1:"1.125rem",P2:"1.25rem",P3:"1.5rem",P4:"2.25rem",P5:"3rem",P6:"3.75rem"},weights:{light:300,regular:400,medium:500,semiBold:600,bold:700,heavy:800},family:{stylish:'"Amatic SC", cursive'}},Qv=8,Yv={subtle:1,round:"5px",extraRound:"15px",circle:"50%"},Gv={subtle:"0px -6px 8px -2px rgba(0, 0, 0, 0.1)",medium:"-8px 8px 20px 0px rgb(0 0 0 / 20%)",strong:"0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",orangeHighlight:"0 0 8px 0 rgb(255 154 35 / 100%)",leftColumn:"inset 0 0 20px rgba(0, 0, 0, 0.2)",cardBasket:"-4px 4px 15px 0 rgba(0 0 0 / 20%)"},Kv={speed:{quick:"100ms",medium:"300ms",slow:"500ms",verySlow:"1s"}},d={colors:Vv,fonts:Xv,gridUnit:Qv,borderRadius:Yv,shadows:Gv,spacing:Wv,animation:Kv};var hm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qd=z.createContext&&z.createContext(hm),on=globalThis&&globalThis.__assign||function(){return on=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},on.apply(this,arguments)},qv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function mm(e){return e&&e.map(function(t,n){return z.createElement(t.tag,on({key:n},t.attr),mm(t.child))})}function ce(e){return function(t){return z.createElement(Jv,on({attr:on({},e.attr)},t),mm(e.child))}}function Jv(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,s=qv(e,["attr","size","title"]),l=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),z.createElement("svg",on({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:on(on({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&z.createElement("title",null,i),e.children)};return qd!==void 0?z.createElement(qd.Consumer,null,function(n){return t(n)}):t(hm)}function Zv(e){return ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"M184 112l144 144-144 144"}}]})(e)}function ex(e){return ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256zm207.38 183.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 00112 480h352a30.94 30.94 0 0024.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11zM104 288v-40h40a16 16 0 000-32h-40v-40a16 16 0 00-32 0v40H32a16 16 0 000 32h40v40a16 16 0 0032 0z"}}]})(e)}function tx(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}},{tag:"path",attr:{d:"M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"}}]})(e)}function nx(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"}},{tag:"path",attr:{d:"M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"}}]})(e)}function gm(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}}]})(e)}function rx(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}const Zu=z.forwardRef(({onChange:e,Icon:t,className:n,version:r="default",...o},i)=>p.jsxs(ox,{className:n,version:r,children:[p.jsx("div",{className:"icon",children:t&&t}),p.jsx("input",{ref:i,type:"text",onChange:e,...o})]})),ox=O.div`

    border-radius: ${d.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin: 0 8px 0 10px; 
      min-width: 1em;  
      color: ${d.colors.greyMedium}
    }

    
    input{
    border: none;
    align-items: center;
    width: 100%; 
    color: black;


    &::placeholder {
      background: ${d.colors.white};
      color: ${d.colors.greyMedium};
    }
  }

  ${({version:e})=>lx[e]}
`,ix=ye`
  background-color: ${d.colors.white};
  padding: 18px 28px;
  color: ${d.colors.greySemiDark};

  input {
    color: ${d.colors.dark};

    &::placeholder {
      background: ${d.colors.white};
    }
  }
`,sx=ye`
  background-color: ${d.colors.background_white};
  padding: 8px 16px;
  color: ${d.colors.greyBlue};

  input {
    background: ${d.colors.background_white}; 
    color: ${d.colors.dark};

    &:focus {
      outline: 0; 
    }
  }

  @media(max-width: 767px) {
    padding: 0px 5px;
  }
`,lx={default:ix,minimalist:sx};function Io({label:e,Icon:t,className:n,version:r="default",onClick:o}){return p.jsxs(ax,{className:n,version:r,onClick:o,children:[p.jsx("span",{children:e}),p.jsx("div",{className:"icon",children:t&&t})]})}const ax=O.button`

  ${({version:e})=>dx[e]}
`,ux=ye`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${d.colors.primary};
  border: 1px solid ${d.colors.black};

  &:hover {
    color: ${d.colors.primary};
    background-color: ${d.colors.white};
    border: 1px solid ${d.colors.black};
    transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${d.colors.primary};
    color: ${d.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${d.colors.white};
    color: ${d.colors.primary};
    :hover {
      color: ${d.colors.white};
      background-color: ${d.colors.primary};
      border: 1px solid ${d.colors.white};
    }
    &:active {
      background-color: ${d.colors.white};
      color: ${d.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
 `,cx=ye`
  cursor: pointer;
  color: ${d.colors.white};
  background: ${d.colors.success};
  border: 1px solid ${d.colors.success};
  border-radius: ${d.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${d.fonts.weights.semiBold};
  &:hover {
    background: ${d.colors.white};
    color: ${d.colors.success};
    border: 1px solid ${d.colors.success};
  }
  &:active {
    color: ${d.colors.white};
    background: ${d.colors.success};
    border: 1px solid ${d.colors.success};
  }
`,dx={default:ux,success:cx},fx=An`
  0% {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transform: translateY(-40%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,Da=An`
    0% {
        position: absolute;
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;An`
    0% {
        position: absolute;
        opacity: 0;
        transform: translateX(0);
    }
    100% {
        opacity: 1;
        transform: translateX(100%);
    }
`;const px=An`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transition: all ${d.animation.speed.slow}
    }
`,hx=An`
    0% {
        opacity: 0;
        transform: translateY(50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transition: all ${d.animation.speed.verySlow}
    }
`,mx=An`
    0% {
        opacity: 0;
        transform: translateY(-50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
        transition: all ${d.animation.speed.verySlow}
    }
`;ye`
    /* MOUNTING */
    .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }
  .count-animated-enter-done {
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;const gx=An`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        transition: all ${d.animation.speed.verySlow}
    }
`,yx=ye`
    .card-transition-appear {
        .card{
        transform: translateX(100%);
        opacity: 0%;

        }
    }
    .card-transition-appear-active {
        .card{
            transition: ${d.animation.speed.medium} ease-out;
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-enter {
        .card{
            transform: translateX(100%);
            opacity: 0%;
        }
    }
    .card-transition-enter-active {
        .card{
            transition: ${d.animation.speed.medium} ease-out;
            transform: translateX(0%);
            opacity: 100%;
        }
    }

    .card-transition-exit {
        .card{
            transform: translateX(0%);
            opacity: 100%;
        }
    }
    .card-transition-exit-active {
        .card{
            transition: ${d.animation.speed.medium} ease-out;
            transform: translateX(-100%);
            opacity: 0%;
        }
    }
    
`;ye`
.count-animated-enter {
    transform: translateY(100%);

    &.count-animated-active {
        transition: ${d.animation.speed.slow} ease-out;  
        transform: translateY(0%);            
    }
}

.count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;

    &.count-animated-exit-active {
        transition: ${d.animation.speed.slow} ease-out;
        transform: translateY(-100%);
    }
}
`;ye`
    .animation-card-enter {
        opacity: 0.1;
        transform: translateX(-100%);
        &.animation-card-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all ${d.animation.speed.medium} ease-out;
        }
    }
    .animation-card-exit {
        opacity: 1;
        transform: translateX(0);
        &.animation-card-exit-active {
            opacity: 0.1;
            transform: translateX(-100%);
            transform: all ${d.animation.speed.medium} ease-out;
        }
    } 
`;const ym=ye`
.animation-card-enter {
    opacity: 0.1;
    transform: scaleX(0);
    &.animation-card-enter-active {
        opacity: 1;
        transform: scaleX(100%);
        transition: all ${d.animation.speed.medium} ease-out;
    }
}
.animation-card-exit {
    opacity: 1;
    transform: scaleX(100%);
    &.animation-card-exit-active {
        opacity: 0.1;
        transform: scaleX(0);
        transform: all ${d.animation.speed.medium} ease-out;
    }
} 

    
`;function vm(e,t){return function(){return e.apply(t,arguments)}}const{toString:vx}=Object.prototype,{getPrototypeOf:ec}=Object,Is=(e=>t=>{const n=vx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kt=e=>(e=e.toLowerCase(),t=>Is(t)===e),As=e=>t=>typeof t===e,{isArray:Nr}=Array,Po=As("undefined");function xx(e){return e!==null&&!Po(e)&&e.constructor!==null&&!Po(e.constructor)&&rt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xm=kt("ArrayBuffer");function wx(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&xm(e.buffer),t}const Sx=As("string"),rt=As("function"),wm=As("number"),Ls=e=>e!==null&&typeof e=="object",Cx=e=>e===!0||e===!1,Pi=e=>{if(Is(e)!=="object")return!1;const t=ec(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ex=kt("Date"),kx=kt("File"),$x=kt("Blob"),Px=kt("FileList"),Nx=e=>Ls(e)&&rt(e.pipe),jx=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rt(e.append)&&((t=Is(e))==="formdata"||t==="object"&&rt(e.toString)&&e.toString()==="[object FormData]"))},Tx=kt("URLSearchParams"),Rx=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ao(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Nr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Sm(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Cm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Em=e=>!Po(e)&&e!==Cm;function Ba(){const{caseless:e}=Em(this)&&this||{},t={},n=(r,o)=>{const i=e&&Sm(t,o)||o;Pi(t[i])&&Pi(r)?t[i]=Ba(t[i],r):Pi(r)?t[i]=Ba({},r):Nr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Ao(arguments[r],n);return t}const bx=(e,t,n,{allOwnKeys:r}={})=>(Ao(t,(o,i)=>{n&&rt(o)?e[i]=vm(o,n):e[i]=o},{allOwnKeys:r}),e),zx=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_x=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ox=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&ec(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ix=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ax=e=>{if(!e)return null;if(Nr(e))return e;let t=e.length;if(!wm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Lx=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ec(Uint8Array)),Mx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Fx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dx=kt("HTMLFormElement"),Bx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Jd=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ux=kt("RegExp"),km=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ao(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Hx=e=>{km(e,(t,n)=>{if(rt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(rt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vx=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Nr(e)?r(e):r(String(e).split(t)),n},Wx=()=>{},Xx=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Nl="abcdefghijklmnopqrstuvwxyz",Zd="0123456789",$m={DIGIT:Zd,ALPHA:Nl,ALPHA_DIGIT:Nl+Nl.toUpperCase()+Zd},Qx=(e=16,t=$m.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yx(e){return!!(e&&rt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Gx=e=>{const t=new Array(10),n=(r,o)=>{if(Ls(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Nr(r)?[]:{};return Ao(r,(s,l)=>{const a=n(s,o+1);!Po(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},Kx=kt("AsyncFunction"),qx=e=>e&&(Ls(e)||rt(e))&&rt(e.then)&&rt(e.catch),$={isArray:Nr,isArrayBuffer:xm,isBuffer:xx,isFormData:jx,isArrayBufferView:wx,isString:Sx,isNumber:wm,isBoolean:Cx,isObject:Ls,isPlainObject:Pi,isUndefined:Po,isDate:Ex,isFile:kx,isBlob:$x,isRegExp:Ux,isFunction:rt,isStream:Nx,isURLSearchParams:Tx,isTypedArray:Lx,isFileList:Px,forEach:Ao,merge:Ba,extend:bx,trim:Rx,stripBOM:zx,inherits:_x,toFlatObject:Ox,kindOf:Is,kindOfTest:kt,endsWith:Ix,toArray:Ax,forEachEntry:Mx,matchAll:Fx,isHTMLForm:Dx,hasOwnProperty:Jd,hasOwnProp:Jd,reduceDescriptors:km,freezeMethods:Hx,toObjectSet:Vx,toCamelCase:Bx,noop:Wx,toFiniteNumber:Xx,findKey:Sm,global:Cm,isContextDefined:Em,ALPHABET:$m,generateString:Qx,isSpecCompliantForm:Yx,toJSONObject:Gx,isAsyncFn:Kx,isThenable:qx};function U(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}$.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Pm=U.prototype,Nm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Nm[e]={value:e}});Object.defineProperties(U,Nm);Object.defineProperty(Pm,"isAxiosError",{value:!0});U.from=(e,t,n,r,o,i)=>{const s=Object.create(Pm);return $.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),U.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Jx=null;function Ua(e){return $.isPlainObject(e)||$.isArray(e)}function jm(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function ef(e,t,n){return e?e.concat(t).map(function(o,i){return o=jm(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Zx(e){return $.isArray(e)&&!e.some(Ua)}const e2=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function Ms(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,E){return!$.isUndefined(E[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if($.isDate(v))return v.toISOString();if(!a&&$.isBlob(v))throw new U("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(v)||$.isTypedArray(v)?a&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,w,E){let m=v;if(v&&!E&&typeof v=="object"){if($.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if($.isArray(v)&&Zx(v)||($.isFileList(v)||$.endsWith(w,"[]"))&&(m=$.toArray(v)))return w=jm(w),m.forEach(function(x,S){!($.isUndefined(x)||x===null)&&t.append(s===!0?ef([w],S,i):s===null?w:w+"[]",u(x))}),!1}return Ua(v)?!0:(t.append(ef(E,w,i),u(v)),!1)}const f=[],g=Object.assign(e2,{defaultVisitor:c,convertValue:u,isVisitable:Ua});function y(v,w){if(!$.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(v),$.forEach(v,function(m,h){(!($.isUndefined(m)||m===null)&&o.call(t,m,$.isString(h)?h.trim():h,w,g))===!0&&y(m,w?w.concat(h):[h])}),f.pop()}}if(!$.isObject(e))throw new TypeError("data must be an object");return y(e),t}function tf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function tc(e,t){this._pairs=[],e&&Ms(e,this,t)}const Tm=tc.prototype;Tm.append=function(t,n){this._pairs.push([t,n])};Tm.toString=function(t){const n=t?function(r){return t.call(this,r,tf)}:tf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function t2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rm(e,t,n){if(!t)return e;const r=n&&n.encode||t2,o=n&&n.serialize;let i;if(o?i=o(t,n):i=$.isURLSearchParams(t)?t.toString():new tc(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class n2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(r){r!==null&&t(r)})}}const nf=n2,bm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r2=typeof URLSearchParams<"u"?URLSearchParams:tc,o2=typeof FormData<"u"?FormData:null,i2=typeof Blob<"u"?Blob:null,s2=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),l2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ft={isBrowser:!0,classes:{URLSearchParams:r2,FormData:o2,Blob:i2},isStandardBrowserEnv:s2,isStandardBrowserWebWorkerEnv:l2,protocols:["http","https","file","blob","url","data"]};function a2(e,t){return Ms(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return ft.isNode&&$.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function u2(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function c2(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function zm(e){function t(n,r,o,i){let s=n[i++];const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&$.isArray(o)?o.length:s,a?($.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!$.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&$.isArray(o[s])&&(o[s]=c2(o[s])),!l)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,(r,o)=>{t(u2(r),o,n,0)}),n}return null}function d2(e,t,n){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const nc={transitional:bm,adapter:ft.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=$.isObject(t);if(i&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o&&o?JSON.stringify(zm(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return a2(t,this.formSerializer).toString();if((l=$.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Ms(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),d2(t)):t}],transformResponse:[function(t){const n=this.transitional||nc.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&$.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?U.from(l,U.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],e=>{nc.headers[e]={}});const rc=nc,f2=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),p2=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&f2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},rf=Symbol("internals");function Mr(e){return e&&String(e).trim().toLowerCase()}function Ni(e){return e===!1||e==null?e:$.isArray(e)?e.map(Ni):String(e)}function h2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const m2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function jl(e,t,n,r,o){if($.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!$.isString(t)){if($.isString(r))return t.indexOf(r)!==-1;if($.isRegExp(r))return r.test(t)}}function g2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function y2(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Fs{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,u){const c=Mr(a);if(!c)throw new Error("header name must be a non-empty string");const f=$.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||a]=Ni(l))}const s=(l,a)=>$.forEach(l,(u,c)=>i(u,c,a));return $.isPlainObject(t)||t instanceof this.constructor?s(t,n):$.isString(t)&&(t=t.trim())&&!m2(t)?s(p2(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Mr(t),t){const r=$.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return h2(o);if($.isFunction(n))return n.call(this,o,r);if($.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Mr(t),t){const r=$.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||jl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=Mr(s),s){const l=$.findKey(r,s);l&&(!n||jl(r,r[l],l,n))&&(delete r[l],o=!0)}}return $.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||jl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return $.forEach(this,(o,i)=>{const s=$.findKey(r,i);if(s){n[s]=Ni(o),delete n[i];return}const l=t?g2(i):String(i).trim();l!==i&&delete n[i],n[l]=Ni(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return $.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&$.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[rf]=this[rf]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=Mr(s);r[l]||(y2(o,s),r[l]=!0)}return $.isArray(t)?t.forEach(i):i(t),this}}Fs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Fs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});$.freezeMethods(Fs);const bt=Fs;function Tl(e,t){const n=this||rc,r=t||n,o=bt.from(r.headers);let i=r.data;return $.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function _m(e){return!!(e&&e.__CANCEL__)}function Lo(e,t,n){U.call(this,e??"canceled",U.ERR_CANCELED,t,n),this.name="CanceledError"}$.inherits(Lo,U,{__CANCEL__:!0});function v2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const x2=ft.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,l){const a=[];a.push(n+"="+encodeURIComponent(r)),$.isNumber(o)&&a.push("expires="+new Date(o).toGMTString()),$.isString(i)&&a.push("path="+i),$.isString(s)&&a.push("domain="+s),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function w2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Om(e,t){return e&&!w2(t)?S2(e,t):t}const C2=ft.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=$.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function E2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function k2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];s||(s=u),n[o]=a,r[o]=u;let f=i,g=0;for(;f!==o;)g+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(g*1e3/y):void 0}}function of(e,t){let n=0;const r=k2(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,l=i-n,a=r(l),u=i<=s;n=i;const c={loaded:i,total:s,progress:s?i/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-i)/a:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const $2=typeof XMLHttpRequest<"u",P2=$2&&function(e){return new Promise(function(n,r){let o=e.data;const i=bt.from(e.headers).normalize(),s=e.responseType;let l;function a(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}$.isFormData(o)&&(ft.isStandardBrowserEnv||ft.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+v))}const c=Om(e.baseURL,e.url);u.open(e.method.toUpperCase(),Rm(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const y=bt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};v2(function(m){n(m),a()},function(m){r(m),a()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new U("Request aborted",U.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new U("Network Error",U.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||bm;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new U(v,w.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,u)),u=null},ft.isStandardBrowserEnv){const y=(e.withCredentials||C2(c))&&e.xsrfCookieName&&x2.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&$.forEach(i.toJSON(),function(v,w){u.setRequestHeader(w,v)}),$.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",of(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",of(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{u&&(r(!y||y.type?new Lo(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=E2(c);if(g&&ft.protocols.indexOf(g)===-1){r(new U("Unsupported protocol "+g+":",U.ERR_BAD_REQUEST,e));return}u.send(o||null)})},ji={http:Jx,xhr:P2};$.forEach(ji,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Im={getAdapter:e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=$.isString(n)?ji[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new U(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error($.hasOwnProp(ji,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!$.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ji};function Rl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Lo(null,e)}function sf(e){return Rl(e),e.headers=bt.from(e.headers),e.data=Tl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Im.getAdapter(e.adapter||rc.adapter)(e).then(function(r){return Rl(e),r.data=Tl.call(e,e.transformResponse,r),r.headers=bt.from(r.headers),r},function(r){return _m(r)||(Rl(e),r&&r.response&&(r.response.data=Tl.call(e,e.transformResponse,r.response),r.response.headers=bt.from(r.response.headers))),Promise.reject(r)})}const lf=e=>e instanceof bt?e.toJSON():e;function xr(e,t){t=t||{};const n={};function r(u,c,f){return $.isPlainObject(u)&&$.isPlainObject(c)?$.merge.call({caseless:f},u,c):$.isPlainObject(c)?$.merge({},c):$.isArray(c)?c.slice():c}function o(u,c,f){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!$.isUndefined(c))return r(void 0,c)}function s(u,c){if($.isUndefined(c)){if(!$.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>o(lf(u),lf(c),!0)};return $.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=a[c]||o,g=f(e[c],t[c],c);$.isUndefined(g)&&f!==l||(n[c]=g)}),n}const Am="1.5.0",oc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const af={};oc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Am+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new U(o(s," has been removed"+(n?" in "+n:"")),U.ERR_DEPRECATED);return n&&!af[s]&&(af[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function N2(e,t,n){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new U("option "+i+" must be "+a,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U("Unknown option "+i,U.ERR_BAD_OPTION)}}const Ha={assertOptions:N2,validators:oc},Ft=Ha.validators;class ss{constructor(t){this.defaults=t,this.interceptors={request:new nf,response:new nf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=xr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Ha.assertOptions(r,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),o!=null&&($.isFunction(o)?n.paramsSerializer={serialize:o}:Ha.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&$.merge(i.common,i[n.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=bt.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,f=0,g;if(!a){const v=[sf.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),g=v.length,c=Promise.resolve(n);f<g;)c=c.then(v[f++],v[f++]);return c}g=l.length;let y=n;for(f=0;f<g;){const v=l[f++],w=l[f++];try{y=v(y)}catch(E){w.call(this,E);break}}try{c=sf.call(this,y)}catch(v){return Promise.reject(v)}for(f=0,g=u.length;f<g;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=xr(this.defaults,t);const n=Om(t.baseURL,t.url);return Rm(n,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){ss.prototype[t]=function(n,r){return this.request(xr(r||{},{method:t,url:n,data:(r||{}).data}))}});$.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(xr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}ss.prototype[t]=n(),ss.prototype[t+"Form"]=n(!0)});const Ti=ss;class ic{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new Lo(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ic(function(o){t=o}),cancel:t}}}const j2=ic;function T2(e){return function(n){return e.apply(null,n)}}function R2(e){return $.isObject(e)&&e.isAxiosError===!0}const Va={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Va).forEach(([e,t])=>{Va[t]=e});const b2=Va;function Lm(e){const t=new Ti(e),n=vm(Ti.prototype.request,t);return $.extend(n,Ti.prototype,t,{allOwnKeys:!0}),$.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Lm(xr(e,o))},n}const he=Lm(rc);he.Axios=Ti;he.CanceledError=Lo;he.CancelToken=j2;he.isCancel=_m;he.VERSION=Am;he.toFormData=Ms;he.AxiosError=U;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=T2;he.isAxiosError=R2;he.mergeConfig=xr;he.AxiosHeaders=bt;he.formToJSON=e=>zm($.isHTMLForm(e)?new FormData(e):e);he.getAdapter=Im.getAdapter;he.HttpStatusCode=b2;he.default=he;const ie=he,z2="https://my-pos-nmyg.onrender.com/cregister/api/invoiceline/";async function _2(e){try{const{data:t}=await ie.get(`${z2}list/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}const Mo="https://my-pos-nmyg.onrender.com/cregister/api/category/";async function Mm(e){try{const{data:t}=await ie.get(`${Mo}user=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function O2(e){try{await ie.delete(`${Mo}delete/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function I2(e,t){try{const{data:n}=await ie.post(`${Mo}create`,{name:e.name,user:{id:t}},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return n}catch(n){console.log(n)}}async function A2(e){try{await ie.post(`${Mo}initialise/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function L2(e){try{await ie.post(`${Mo}reset/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}const Fo="https://my-pos-nmyg.onrender.com/cregister/api/customer/";async function Fm(e){try{await ie.post(`${Fo}initialise/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function Dm(e){try{const{data:t}=await ie.get(`${Fo}user=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function M2(e){try{await ie.delete(`${Fo}delete/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function F2(e,t){try{const{data:n}=await ie.post(`${Fo}create`,{name:e.name,surname:e.surname,phoneNumber:e.phoneNumber,user:{id:t},address:{id:e.address.id,city:e.address.city,street:e.address.street,streetNumber:e.address.streetNumber,country:e.address.country,zipCode:e.address.zipCode}},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return n}catch(n){console.log(n)}}async function D2(e,t){try{await ie.put(`${Fo}update/${e.id}`,{name:e.name,user:{id:t},surname:e.surname,phoneNumber:e.phoneNumber,address:{id:e.address.id,city:e.address.city,street:e.address.street,streetNumber:e.address.streetNumber,country:e.address.country,zipCode:e.address.zipCode}},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(n){console.log(n)}}const jr="https://my-pos-nmyg.onrender.com/cregister/api/invoice/";async function B2(e){try{const{data:t}=await ie.get(`${jr}id=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function U2(e){try{const{data:t}=await ie.get(`${jr}createPdf/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function Ri(e,t,n){try{const r={createdAt:e.createdAt,user:{id:e.user.id},total:0};t&&(r.customer={id:t.id}),n&&(r.invoiceLines=n);const{data:o}=await ie.put(`${jr}update/${e.id}`,r,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return o}catch(r){console.log(r)}}async function H2(e){try{const{data:t}=await ie.get(`${jr}user=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function V2(e){try{await ie.delete(`${jr}delete/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function W2(e){try{const{data:t}=await ie.post(`${jr}create`,{user:{id:e}},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}const Ds="https://my-pos-nmyg.onrender.com/cregister/api/product/";async function Bm(e){try{const{data:t}=await ie.get(`${Ds}user=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t}catch(t){console.log(t)}}async function X2(e){try{await ie.delete(`${Ds}delete/${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function Q2(e,t){try{const{data:n}=await ie.post(`${Ds}create`,{title:e.title,price:e.price,isAvailable:e.isAvailable??"true",imageSource:e.imageSource??"/image/coming-soon.png",user:{id:t},category:{id:e.category.id}},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return n}catch(n){console.log(n)}}async function Y2(e){try{await ie.put(`${Ds}update/${e.id}`,{title:e.title,price:e.price,isAvailable:e.isAvailable,imageSource:e.imageSource??"/image/coming-soon.png"},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}const Um="https://my-pos-nmyg.onrender.com/cregister/api/user/";async function sc(e){try{const{data:t}=await ie.get(`${Um}name=${e}`,{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}});return t.id}catch(t){console.log(t)}}async function G2(e){try{await ie.post(`${Um}create`,{name:e},{headers:{"Access-Control-Allow-Origin":"https://mypos.cyrilpersonne.website"}})}catch(t){console.log(t)}}async function K2(e,t){const n=await Bm(e);if(!n){t([]);return}t(n)}async function q2(e,t){const n=await H2(e);if(!n){t([]);return}t(n)}async function uf(e,t){const n=await Dm(e);if(!n){t([]);return}t(n)}async function J2(e,t){const n=await Mm(e);if(!n){t([]);return}t(n)}async function Z2(e,t){const n=await _2(e);if(!n){t([]);return}t(n)}async function ew(e,t,n,r){const o=await B2(e);n(o),r(o.total);const i=o.customer;if(!i){t();return}t(i)}async function tw(e,t){const n=await sc(t);return e(n),n}async function nw(e){const t=await sc(e);return t||await rw(e),t}async function rw(e){await G2(e);const t=await sc(e);await A2(t),await Fm(t)}function ow(){const[e,t]=C.useState(""),n=Bh(),r=async i=>{i.preventDefault(),await nw(e),t(""),n(`/order/${e}`)},o=i=>{t(i.target.value)};return p.jsxs(iw,{action:"submit",onSubmit:r,children:[p.jsxs("div",{children:[p.jsx("h1",{className:"title",children:"GÉREZ VOS COMMANDES !"}),p.jsx("hr",{}),p.jsx("h2",{className:"title",children:"Connectez vous"})]}),p.jsx(Zu,{value:e,onChange:o,placeholder:"Entrez votre nom d'employé",required:!0,Icon:p.jsx(gm,{}),className:"input-login",version:"default"}),p.jsx(Io,{className:"button-login",label:"Accéder à mon espace",Icon:p.jsx(Zv,{}),version:"default"})]})}const iw=O.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${d.borderRadius.round};
  font-family: ${d.fonts.family.stylish};
  animation: ${hx} ease-out ${d.animation.speed.verySlow};


  hr{
    border: 1.5px solid ${d.colors.loginLine};
    margin-bottom: 40px;

  }

  h1{
    font-size: ${d.fonts.size.P5};
  }

  h2{
    font-size: ${d.fonts.size.P4};

  }

  .title {
    color: ${d.colors.white};
    text-align: center;
  }


  .input-login {
    width: 300px;
    margin: 18px 0;

  }
  .button-login{
    width: 360px;
  }

  @media(max-width: 767px) {
      max-width: 100%;
      min-width: 300px;
    h1{
      font-size: ${d.fonts.size.P4};
    }

    h2{
      font-size: ${d.fonts.size.P3};
    }
    
    .title {
    color: ${d.colors.white};
    text-align: center;
  }
  }
`;function Hm({className:e,onClick:t}){return p.jsxs(sw,{className:e,onClick:t,children:[p.jsx("h1",{children:"MY"}),p.jsx("img",{src:"/images/logo.png",alt:"logo"}),p.jsx("h1",{children:"POS"})]})}const sw=O.div`
    display: flex;
    align-items: center;
    
    h1{
    display: inline;
    color: ${d.colors.primary};
    font-style: normal;
    line-height: 1em;
    font-size: ${d.fonts.size.P4};
    font-weight: ${d.fonts.weights.bold};
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-family:  ${d.fonts.family.stylish};
    }


    img {
        object-fit: contain;
        object-position: center;
        width: 80px;
        height: 80px;
        margin: 0;
    }
    
    @media(max-width: 767px) {

      h1{
        font-size: ${d.fonts.size.P3};
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
`;function lw(){return p.jsxs(aw,{children:[p.jsx(Hm,{className:"logo-login-page"}),p.jsx("h1",{className:"info",children:"Votre gestionnaire de commande"}),p.jsx("h2",{className:"info",children:"Simple d'utilisation"})]})}const aw=O.div`
display: flex;
width: 50%;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: ${d.fonts.family.stylish};
animation: ${mx} ease-out ${d.animation.speed.verySlow};


.info {
    font-weight: ${d.fonts.weights.light};
    color: ${d.colors.white};

}
h1{
    font-size: ${d.fonts.size.P4};
  }

h2{
    font-size: ${d.fonts.size.P4};
  }     
  
.logo-login-page {
    transform: scale(2.5);
    margin-bottom: 50px;
  }

  @media(max-width: 767px) {
    .info {
      display: none;
    }
    .logo-login-page {
      transform: scale(2);
      margin-bottom: 10px;
    }
  }
`;function uw(){return p.jsxs(cw,{children:[p.jsx(lw,{}),p.jsx(ow,{})]})}const cw=O.div`
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0 10%;
    justify-content: space-around;
    align-items: center;

    background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/images/background.png') fixed center/cover;

    @media(max-width: 767px) {
      max-width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`;function dw(){return p.jsxs("div",{children:[p.jsx("h1",{children:"ErrorPage"}),p.jsx(Wh,{to:"/",children:p.jsx("button",{children:"Retourner à la page d'accueil"})})]})}const ke=C.createContext({username:"",invoiceId:"",setInvoiceId:()=>{},userId:0,setUserId:()=>{},isModeAdmin:!1,setIsModeAdmin:()=>{},isCollapsed:!1,setIsCollapsed:()=>{},currentTabSelected:!1,setCurrentTabSelected:()=>{},products:[],productSelected:[],setProductSelect:()=>{},resetCategoryAndProducts:()=>{},setProducts:()=>{},addProduct:()=>{},deleteProduct:()=>{},editProduct:()=>{},filteredProducts:[],setFilteredProducts:()=>{},selectProduct:()=>{},selectedProduct:{},setSelectedProduct:()=>{},newProduct:{},setNewProduct:()=>{},titleEditRef:{},basket:[],setBasket:()=>{},addBasketProduct:()=>{},deleteBasketProduct:()=>{},totalBasket:{},setTotalBasket:()=>{},setDisplayedCategories:()=>{},categories:[],displayedCategories:[],setCategories:()=>{},selectedCategory:[],setSelectedCategory:()=>{},newCategory:{},setNewCategory:()=>{},deleteCategory:()=>{},addCategory:()=>{},selectCustomer:()=>{},setCustomers:()=>{},customers:[],selectedCustomer:{},setSelectedCustomer:()=>{},customer:{},setCustomer:()=>{},deleteCustomer:()=>{},newCustomer:{},setNewCustomer:()=>{},addCustomer:()=>{},editCustomer:()=>{},resetCustomers:()=>{},invoices:[],setInvoices:()=>{},editInvoice:()=>{},createInvoice:()=>{},getPdf:()=>{},invoice:{},setInvoice:()=>{},deleteInvoice:()=>{},currentPage:{},setCurrentPage:()=>{},initialiseBasket:()=>{},initialiseInvoice:()=>{},initialiseCustomers:()=>{}});function lc({children:e}){return p.jsx(fw,{children:e})}const fw=O.div`
    width: 100%;
    height: 70px;
    background: ${d.colors.background_dark};
    /* padding: 0 16px; */
    @media(max-width: 767px) {
        height: 50px;
    }
`;function Vm({title:e}){return p.jsx(lc,{children:p.jsx(pw,{children:e})})}const pw=O.div`
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
    font-size: ${d.fonts.size.P4};
    font-family: ${d.fonts.family.stylish};
    color: ${d.colors.primary};
    @media(max-width: 767px) {
        height: 50px;
    }
    @media(min-width: 768px) and (max-width: 1388px) { 
    }
`,tt=e=>JSON.parse(JSON.stringify(e)),Wa=(e,t)=>t.find(n=>n.id===e),wr=(e,t)=>t.findIndex(n=>n.id===e),Bs=(e,t)=>t.filter(n=>n.id!==e),hw=(e,t)=>t.find(n=>n.productId===e),mw=(e,t)=>t.filter(n=>n.category.id!==e),zn=e=>e.length===0,Wm=(e,t)=>t.find(r=>r.name===e).id,Us=(e,t)=>[...t,e];function Do(e){let t=e;return t?(t=yw(t),new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(t)):"0,00 €"}function gw(e){const t=new Date(e),n={day:"numeric",month:"numeric",year:"numeric"},r={hour:"numeric",minute:"numeric"},o=t.toLocaleDateString("fr-FR",n),i=t.toLocaleTimeString("fr-FR",r);return`${o} - ${i}`}function yw(e){return typeof e=="string"&&(e=parseFloat(e.replace(",","."))),e}function vw({invoices:e}){const t=e.sort((n,r)=>r.total-n.total);return p.jsxs(xw,{children:[p.jsxs("div",{className:"titles",children:[p.jsx("span",{children:"#"}),p.jsx("span",{children:"Commande"}),p.jsx("span",{children:"Nom"}),p.jsx("span",{children:"Total"})]}),!zn(e)&&e.slice(0,5).map(({id:n,customer:r,total:o})=>p.jsxs("div",{className:"invoice",children:[p.jsx("span",{children:wr(n,t)+1}),p.jsx("span",{children:n}),p.jsx("span",{children:r?r.name:"Na"}),p.jsx("span",{children:Do(o)})]},n))]})}const xw=O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${d.fonts.size.P3};
    font-family: ${d.fonts.family.stylish};
    span {
    padding: 0 10px;
    }

    .titles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: 5px 0px;
    font-weight: ${d.fonts.weights.bold};
    }

    .invoice{
        width: 100%;
        background-color: ${d.colors.greyLight};
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 5px 0px;}
    @media(max-width: 767px) { 
        font-size: ${d.fonts.size.SM};
    }
`;function ww({invoices:e}){return p.jsxs(Sw,{children:[p.jsx(Vm,{title:"MEILLEURES VENTES"}),p.jsx(vw,{invoices:e})]})}const Sw=O.div`
    position: relative;
    height: 65px;
    width: 100%;
`;function Cw({customers:e}){return p.jsxs(Ew,{children:[p.jsxs("div",{className:"titles",children:[p.jsx("span",{children:"Prénom"}),p.jsx("span",{children:"Nom"}),p.jsx("span",{children:"Ville"})]}),!zn(e)&&e.slice(-5).reverse().map(({id:t,name:n,surname:r,address:o})=>p.jsxs("div",{className:"customer",children:[p.jsx("span",{children:n||"inc."}),p.jsx("span",{children:r||"inc."}),p.jsx("span",{children:o.city?o.city:"inc."})]},t))]})}const Ew=O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${d.fonts.size.P3};
    font-family: ${d.fonts.family.stylish};
    span {
    padding: 0 10px;
    }

    .titles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: 5px 0px;
    font-weight: ${d.fonts.weights.bold};
    }

    .customer{
        width: 100%;
        background-color: ${d.colors.greyLight};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 5px 0px;}
    @media(max-width: 767px) { 
        font-size: ${d.fonts.size.SM};
    }
`;function kw({customers:e}){return p.jsxs($w,{children:[p.jsx(Vm,{title:"NOUVEAUX CLIENTS"}),p.jsx(Cw,{customers:e})]})}const $w=O.div`
    position: relative;
    height: 65px;
    width: 100%;
`;function Pw(e){return ce({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"}}]})(e)}function Nw(e){return ce({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"}}]})(e)}function jw(e){return ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"}}]})(e)}function Tw({placeholder:e,data:t,handleClick:n,handleChange:r,value:o,setCurrentPage:i,setIsModeAdmin:s}){const l=()=>{s(!0),i("customers")};return p.jsxs(Rw,{children:[p.jsx("div",{className:"inputSearch",children:p.jsx("input",{type:"text",name:"search-bar",id:"search-bar",placeholder:e,value:o,onChange:r})}),p.jsx("ul",{children:o&&t.filter(a=>a.name.toLowerCase().includes(o.toLowerCase())||a.surname.toLowerCase().includes(o.toLowerCase())||a.phoneNumber.toLowerCase().includes(o.toLowerCase())).slice(0,5).map(a=>p.jsxs("li",{onClick:()=>n(a),children:[a.name," ",a.surname," "]},a.id))}),p.jsx("div",{className:"buttons",children:p.jsx("button",{className:"add-button",onClick:l,children:p.jsx(ex,{className:"add-icon"})})})]})}const Rw=O.div`
    height: 65px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;


    .inputSearch {
        box-sizing: border-box;
        padding: 5px;
        display:flex;
        width: 200px;
        height: 40px;        
        border: 2px solid ${d.colors.primary};
        border-radius: ${d.borderRadius.round};
        color: black;
        background-color: ${d.colors.greyLight};
        overflow-x: hidden;
        text-overflow: ellipsis;
        input{
            width: 100%; 
            box-sizing: border-box;
            border: none;
            background-color: ${d.colors.greyLight};
            font-size: ${d.fonts.size.P0};
            &:focus {
            outline: none; 
            }
        }
    }
    ul {
    padding-left: 0px;
    list-style: none;
    overflow: hidden;
    position: absolute;
    width: 200px;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 50px;
    top: 0;
   }

    ul li {
    padding-left: 10px;
    cursor: pointer;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: ${d.colors.greyLight};
    border: 1px solid ${d.colors.primary};
    border-radius: ${d.borderRadius.round};
    font-size: ${d.fonts.size.P3};
    font-family: ${d.fonts.family.stylish};
    }

    .buttons {
        display: flex;
        height:50px;
        width:auto;
        align-items: center;

        .add-button {
        top: 15px;
        right: 15px;
        cursor: pointer;
        color: ${d.colors.primary};
        border: none;
        background: none;

            .add-icon{
                width: 25px;
                height: 25px;
                cursor: pointer;
            }
            &:hover {
                color: ${d.colors.red}
            }
            &:active{
                color: ${d.colors.primary}
            }
        }
    }

    @media(min-width: 768px) and (max-width: 1388px) { 
        .inputSearch{
            width: 90%;
        }
        ul{
            width: 180px;
        }
    }
`;function ac(e){return ce({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"}}]})(e)}function bw({customer:e,handleDelete:t}){return p.jsxs(zw,{children:[p.jsxs("div",{className:"customer",children:[e.surname," ",e.name]}),p.jsx("div",{className:"buttons",children:p.jsx("button",{className:"delete-button",onClick:t,children:p.jsx(ac,{className:"delete-icon"})})})]})}const zw=O.div`
    height: 65px;
    width: auto;
    display: flex;
    align-items: center;

    .customer {
        box-sizing: border-box;
        padding: 5px;
        display:flex;
        width: 200px;
        height: 40px;
        font-size: ${d.fonts.size.P3};
        font-family: ${d.fonts.family.stylish};
        border: 2px solid ${d.colors.primary};
        border-radius: ${d.borderRadius.round};
        color: black;
        background-color: ${d.colors.greyLight};
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
    .buttons {
        display: flex;
        height:50px;
        width:auto;
        align-items: center;

        .delete-button {
        top: 15px;
        right: 15px;
        cursor: pointer;
        color: ${d.colors.primary};
        border: none;
        background: none;

            .delete-icon{
                width: 40px;
                height: 40px;
                cursor: pointer;
            }
            &:hover {
                color: ${d.colors.red}
            }
            &:active{
                color: ${d.colors.primary}
            }
        }
    }
    @media(min-width: 768px) and (max-width: 1388px) { 
        width: 220px;
    }
`;function _w({basket:e,invoice:t,customers:n,customer:r,editInvoice:o,setCurrentPage:i,setIsModeAdmin:s}){const[l,a]=C.useState(),u=g=>{a(g.target.value)},c=g=>{a(g.name),o(t,g,e)},f=()=>{a(),o(t,null,e)};return p.jsx(lc,{children:p.jsx(Ow,{children:r?p.jsx(bw,{customer:r,handleDelete:f}):p.jsx(Tw,{setCurrentPage:i,setIsModeAdmin:s,placeholder:"Nom, prénom, tel..",data:n,value:l,handleClick:c,handleChange:u,handleDelete:f})})})}const Ow=O.div`
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
    @media(max-width: 767px) { 
        height: 50px;
    }
`,No=Object.freeze({id:"",title:"",imageSource:"",price:0,isAvailable:!0}),Xm="/images/coming-soon.png",Iw="/images/stock-epuise.png",cf={EMPTY:"Votre panier est vide.",LOADING:"En cours de chargement..."};function Aw({isLoading:e}){return p.jsx(Lw,{children:p.jsx("span",{className:"message",children:e?cf.LOADING:cf.EMPTY})})}const Lw=O.span`
background: ${d.colors.background_white};
flex: 1;
box-shadow: ${d.shadows.leftColumn};

    .message {
    padding : 0 16px;
    display: flex;
    height: calc(85vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${d.fonts.family.stylish};
    font-size: ${d.fonts.size.P4};
    color: ${d.colors.greyBlue}
    }

    @media (max-width: 767px) {
    flex: 1;
    display: flex;
    box-shadow: ${d.shadows.leftColumn};
    height: none;
    .message{
        height: auto;

    }
    }
`;function Mw(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}function Qm(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"}}]})(e)}function ls(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M5 4v3h5.5v12h3V7H19V4z"}}]})(e)}function Fw(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 18.5A6.48 6.48 0 019.24 15H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24A6.491 6.491 0 0115 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3A8.955 8.955 0 0015 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06a8.262 8.262 0 000 2H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}}]})(e)}function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function uc(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Xa(e,t){return Xa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Xa(e,t)}function cc(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Xa(e,t)}function Dw(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function Bw(e,t){e.classList?e.classList.add(t):Dw(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function df(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Uw(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=df(e.className,t):e.setAttribute("class",df(e.className&&e.className.baseVal||"",t))}const ff={disabled:!1},us=z.createContext(null);var Ym=function(t){return t.scrollTop},Vr="unmounted",mn="exited",gn="entering",Bn="entered",Qa="exiting",Lt=function(e){cc(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=o,l=s&&!s.isMounting?r.enter:r.appear,a;return i.appearStatus=null,r.in?l?(a=mn,i.appearStatus=gn):a=Bn:r.unmountOnExit||r.mountOnEnter?a=Vr:a=mn,i.state={status:a},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var s=o.in;return s&&i.status===Vr?{status:mn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var s=this.state.status;this.props.in?s!==gn&&s!==Bn&&(i=gn):(s===gn||s===Bn)&&(i=Qa)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,s,l;return i=s=l=o,o!=null&&typeof o!="number"&&(i=o.exit,s=o.enter,l=o.appear!==void 0?o.appear:s),{exit:i,enter:s,appear:l}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===gn){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:ii.findDOMNode(this);s&&Ym(s)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===mn&&this.setState({status:Vr})},n.performEnter=function(o){var i=this,s=this.props.enter,l=this.context?this.context.isMounting:o,a=this.props.nodeRef?[l]:[ii.findDOMNode(this),l],u=a[0],c=a[1],f=this.getTimeouts(),g=l?f.appear:f.enter;if(!o&&!s||ff.disabled){this.safeSetState({status:Bn},function(){i.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:gn},function(){i.props.onEntering(u,c),i.onTransitionEnd(g,function(){i.safeSetState({status:Bn},function(){i.props.onEntered(u,c)})})})},n.performExit=function(){var o=this,i=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:ii.findDOMNode(this);if(!i||ff.disabled){this.safeSetState({status:mn},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Qa},function(){o.props.onExiting(l),o.onTransitionEnd(s.exit,function(){o.safeSetState({status:mn},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,i.nextCallback=null,o(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var s=this.props.nodeRef?this.props.nodeRef.current:ii.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=a[0],c=a[1];this.props.addEndListener(u,c)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===Vr)return null;var i=this.props,s=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=uc(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return z.createElement(us.Provider,{value:null},typeof s=="function"?s(o,l):z.cloneElement(z.Children.only(s),l))},t}(z.Component);Lt.contextType=us;Lt.propTypes={};function Dn(){}Lt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Dn,onEntering:Dn,onEntered:Dn,onExit:Dn,onExiting:Dn,onExited:Dn};Lt.UNMOUNTED=Vr;Lt.EXITED=mn;Lt.ENTERING=gn;Lt.ENTERED=Bn;Lt.EXITING=Qa;const Hw=Lt;var Vw=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return Bw(t,r)})},bl=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return Uw(t,r)})},dc=function(e){cc(t,e);function t(){for(var r,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=e.call.apply(e,[this].concat(i))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(l,a){var u=r.resolveArguments(l,a),c=u[0],f=u[1];r.removeClasses(c,"exit"),r.addClass(c,f?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(l,a)},r.onEntering=function(l,a){var u=r.resolveArguments(l,a),c=u[0],f=u[1],g=f?"appear":"enter";r.addClass(c,g,"active"),r.props.onEntering&&r.props.onEntering(l,a)},r.onEntered=function(l,a){var u=r.resolveArguments(l,a),c=u[0],f=u[1],g=f?"appear":"enter";r.removeClasses(c,g),r.addClass(c,g,"done"),r.props.onEntered&&r.props.onEntered(l,a)},r.onExit=function(l){var a=r.resolveArguments(l),u=a[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(l)},r.onExiting=function(l){var a=r.resolveArguments(l),u=a[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(l)},r.onExited=function(l){var a=r.resolveArguments(l),u=a[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(l)},r.resolveArguments=function(l,a){return r.props.nodeRef?[r.props.nodeRef.current,l]:[l,a]},r.getClassNames=function(l){var a=r.props.classNames,u=typeof a=="string",c=u&&a?a+"-":"",f=u?""+c+l:a[l],g=u?f+"-active":a[l+"Active"],y=u?f+"-done":a[l+"Done"];return{baseClassName:f,activeClassName:g,doneClassName:y}},r}var n=t.prototype;return n.addClass=function(o,i,s){var l=this.getClassNames(i)[s+"ClassName"],a=this.getClassNames("enter"),u=a.doneClassName;i==="appear"&&s==="done"&&u&&(l+=" "+u),s==="active"&&o&&Ym(o),l&&(this.appliedClasses[i][s]=l,Vw(o,l))},n.removeClasses=function(o,i){var s=this.appliedClasses[i],l=s.base,a=s.active,u=s.done;this.appliedClasses[i]={},l&&bl(o,l),a&&bl(o,a),u&&bl(o,u)},n.render=function(){var o=this.props;o.classNames;var i=uc(o,["classNames"]);return z.createElement(Hw,as({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(z.Component);dc.defaultProps={classNames:""};dc.propTypes={};const Hs=dc;function Ww(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fc(e,t){var n=function(i){return t&&C.isValidElement(i)?t(i):i},r=Object.create(null);return e&&C.Children.map(e,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function Xw(e,t){e=e||{},t=t||{};function n(c){return c in t?t[c]:e[c]}var r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var s,l={};for(var a in t){if(r[a])for(s=0;s<r[a].length;s++){var u=r[a][s];l[r[a][s]]=n(u)}l[a]=n(a)}for(s=0;s<o.length;s++)l[o[s]]=n(o[s]);return l}function Cn(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Qw(e,t){return fc(e.children,function(n){return C.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Cn(n,"appear",e),enter:Cn(n,"enter",e),exit:Cn(n,"exit",e)})})}function Yw(e,t,n){var r=fc(e.children),o=Xw(t,r);return Object.keys(o).forEach(function(i){var s=o[i];if(C.isValidElement(s)){var l=i in t,a=i in r,u=t[i],c=C.isValidElement(u)&&!u.props.in;a&&(!l||c)?o[i]=C.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:Cn(s,"exit",e),enter:Cn(s,"enter",e)}):!a&&l&&!c?o[i]=C.cloneElement(s,{in:!1}):a&&l&&C.isValidElement(u)&&(o[i]=C.cloneElement(s,{onExited:n.bind(null,s),in:u.props.in,exit:Cn(s,"exit",e),enter:Cn(s,"enter",e)}))}}),o}var Gw=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Kw={component:"div",childFactory:function(t){return t}},pc=function(e){cc(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var s=i.handleExited.bind(Ww(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,l=i.handleExited,a=i.firstRender;return{children:a?Qw(o,l):Yw(o,s,l),firstRender:!1}},n.handleExited=function(o,i){var s=fc(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(l){var a=as({},l.children);return delete a[o.key],{children:a}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,l=uc(o,["component","childFactory"]),a=this.state.contextValue,u=Gw(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,i===null?z.createElement(us.Provider,{value:a},u):z.createElement(us.Provider,{value:a},z.createElement(i,l,u))},t}(z.Component);pc.propTypes={};pc.defaultProps=Kw;const Vs=pc;function Gm({count:e}){return p.jsx(Vs,{component:qw,children:p.jsx(Hs,{classNames:"count-animated",timeout:300,children:p.jsx("span",{children:e})},e)})}const qw=O.div`
letter-spacing: 2px;  
position: relative;
overflow-y: hidden;

  span {
    display: inline-block;
}

  /* MOUNTING */
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }
  .count-animated-enter-done {
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
    
`;function Jw({productName:e,productPrice:t,quantity:n,imageSource:r,className:o,onDelete:i}){return p.jsxs(Zw,{className:o,children:[p.jsx("div",{className:"delete-button",onClick:i,children:p.jsx(Mw,{className:"icon"})}),p.jsx("div",{className:"image",children:p.jsx("img",{src:r,alt:e})}),p.jsxs("div",{className:"text-info",children:[p.jsxs("div",{className:"left-info",children:[p.jsx("div",{className:"title",children:p.jsx("span",{children:e})}),p.jsx("span",{className:"price",children:Do(t)})]}),p.jsxs("div",{className:"quantity",children:[p.jsx("span",{children:"x "})," ",p.jsx(Gm,{count:n})]})]})]})}const Zw=O.div`
  box-sizing: border-box;
  height: 86px;
  padding: 5px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${d.borderRadius.round};
  background: ${d.colors.white};
  box-shadow: ${d.shadows.cardBasket};

  margin: 10px 15px;
  height: 85px;
  box-sizing: border-box;
  position: relative;

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${d.fonts.size.P0};
    color: ${d.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 70% 40%;
      margin-left: 10px;

      .title {
        display: flex;
        align-items: center;
        font-family: ${d.fonts.family.stylish};
        font-size: ${d.fonts.size.P3};
        line-height: 32px;
        font-weight: ${d.fonts.weights.bold};
        color: ${d.colors.dark};
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        font-size: ${d.fonts.size.SM};
        font-weight: ${d.fonts.weights.medium};
        font-family: ${d.fonts.family.openSans};
      }
    }

    .quantity {
      box-sizing: border-box;
      font-weight: ${d.fonts.weights.medium};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: ${d.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${d.borderRadius.round};
      border-bottom-right-radius: ${d.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d.colors.red};
      color: ${d.colors.white};
      cursor: pointer;

      .icon {
        width: ${d.fonts.size.P3};
        height: ${d.fonts.size.P3};
      }

      &:hover {
        .icon {
          color: ${d.colors.dark};
        }
        &:active {
          .icon {
            color: ${d.colors.white};
          }
        }
      }
    }
  }
  @media(max-width: 767px) {
    padding: 5px 10px;
    margin: 5px 10px;  
    height: 56px;

  .delete-button {
      z-index: 1;
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50px;
      border-top-right-radius: ${d.borderRadius.round};
      border-bottom-right-radius: ${d.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${d.colors.red};
      color: ${d.colors.white};
      cursor: pointer;
      &:active {
        .icon {
          color: ${d.colors.white};
        }
      }
    }

    .image {
    box-sizing: border-box;
    height: 50px;

      img {
        padding: 5px;
      }
    }
    .text-info {
    .left-info {
      .title {
        span {
        }
      }
      .price {
        margin-top: -5px;
      }
    }
    .quantity {
      margin-right: 60px;
    }
  }
}
`;function e3(){const{invoice:e,basket:t,deleteBasketProduct:n}=C.useContext(ke),r=o=>{n(o,e)};return p.jsx(Vs,{component:t3,children:t.map(o=>p.jsx(Hs,{appear:!0,classNames:"card-transition",timeout:300,children:p.jsx("div",{className:"basket-card",children:p.jsx(Jw,{...o,imageSource:o.imageSource?o.imageSource:Xm,onDelete:()=>r(o.id),className:"card"})})},o.id))})}const t3=O.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    box-shadow: ${d.shadows.leftColumn};
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    position: relative;

    &:hover {
        scrollbar-color: initial;
        scrollbar-width: thin;
        overflow-x: hidden;
    }
    ${yx}
`;function n3({totalBasket:e,getPdf:t,invoiceId:n}){const r=()=>{t(n)};return p.jsx(lc,{children:p.jsxs(r3,{children:[p.jsx("span",{className:"total",children:"Total"}),p.jsx(Gm,{count:Do(e)}),p.jsx(Io,{className:"invoice-button",label:"Facture",Icon:p.jsx(Nw,{}),onClick:r})]})})}const r3=O.div`
    color: ${d.colors.primary};
    font-family: ${d.fonts.family.stylish};
    font-size: ${d.fonts.size.P4};
    font-weight: ${d.fonts.weights.bold};
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    .invoice-button {
        width: 100px;
        height: 40px
    }
    .icon {
        margin: 0 5px;
  }
  @media(max-width: 767px) {
    font-family: ${d.fonts.family.stylish};
    font-size: ${d.fonts.size.P3};
    font-weight: ${d.fonts.weights.bold};
    height: 50px;
        .invoice-button {
            width: 150px;
            height: 30px;
            align-items: center;
            justify-content: center;
        }
    }
    @media(min-width: 768px) and (max-width: 1388px) { 
        font-size: ${d.fonts.size.P3};
        .invoice-button {
        width: 90px;
        height: 40px
    }
    }
`;function o3({totalBasket:e,basket:t,customers:n,customer:r,setCustomer:o,editInvoice:i,getPdf:s,invoice:l,invoiceId:a,setCurrentPage:u,setIsModeAdmin:c}){return p.jsxs(p.Fragment,{children:[p.jsx(_w,{setCurrentPage:u,setIsModeAdmin:c,basket:t,customers:n,customer:r,setCustomer:o,editInvoice:i,invoice:l}),zn(t)?p.jsx(Aw,{isLoading:t===void 0}):p.jsx(e3,{}),p.jsx(n3,{invoiceId:a,getPdf:s,totalBasket:e,basket:t})]})}function i3(){const{setCurrentPage:e,setIsModeAdmin:t,getPdf:n,setTotalBasket:r,totalBasket:o,initialiseBasket:i,initialiseInvoice:s,editInvoice:l,basket:a,setBasket:u,invoices:c,invoiceId:f,invoice:g,customers:y,setCustomer:v,customer:w,setInvoice:E,currentPage:m}=C.useContext(ke);return C.useEffect(()=>{i(f,u),s(f,v,E,r)},[f]),p.jsxs(s3,{children:[m==="invoice"&&p.jsx(o3,{setCurrentPage:e,setIsModeAdmin:t,invoiceId:f,getPdf:n,totalBasket:o,basket:a,customers:y,customer:w,setCustomer:v,editInvoice:l,invoice:g}),m==="invoices"&&p.jsx(ww,{invoices:c}),m==="customers"&&p.jsx(kw,{customers:y})]})}const s3=O.div`
    background: ${d.colors.background_white};
    box-shadow: ${d.shadows.leftColumn};
    border-bottom-left-radius: ${d.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    height: 85vh;

    @media(max-width: 767px) {
        max-height: calc(50%);
        overflow-x: hidden;
    }
`;function pf({Icon:e,onClick:t,className:n,label:r}){return p.jsxs(l3,{onClick:t,className:n,children:[p.jsx("div",{className:"icon",children:e}),r&&p.jsx("span",{className:"label",children:r})]})}const l3=O.button`
    height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    font-size: ${d.fonts.size.P0};
    color: ${d.colors.greySemiDark};

    background: ${d.colors.white};
    box-shadow: ${d.shadows.sub};
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${d.colors.greyLight};
    border-radius: 5px 5px 0px 0px;

    &:hover {
        border-bottom: 2px solid ${d.colors.white};
    }

    .icon {
      display: flex;
    }

    .label {
      margin-left: 8px;
    }
    @media(max-width: 767px) {
      height: 30px;
      padding: 0 5px;
      font-size: ${d.fonts.size.XS};
    }
`;function a3(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function u3(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function c3(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function d3(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(e)}function f3(e){return ce({tag:"svg",attr:{t:"1569683604581",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M508 280h-63.3c-3.3 0-6 2.7-6 6v340.2H433L197.4 282.6c-1.1-1.6-3-2.6-4.9-2.6H126c-3.3 0-6 2.7-6 6v464c0 3.3 2.7 6 6 6h62.7c3.3 0 6-2.7 6-6V405.1h5.7l238.2 348.3c1.1 1.6 3 2.6 5 2.6H508c3.3 0 6-2.7 6-6V286c0-3.3-2.7-6-6-6zM886 693H582c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM733.8 630c52.9 0 95.2-17.2 126.2-51.7 29.4-32.9 44-75.8 44-128.8 0-53.1-14.6-96.5-44-129.3-30.9-34.8-73.2-52.2-126.2-52.2-53.7 0-95.9 17.5-126.3 52.8-29.2 33.1-43.4 75.9-43.4 128.7 0 52.4 14.3 95.2 43.5 128.3 30.6 34.7 73 52.2 126.2 52.2z m-71.5-263.7c16.9-20.6 40.3-30.9 71.4-30.9 31.5 0 54.8 9.6 71 29.1 16.4 20.3 24.9 48.6 24.9 84.9 0 36.3-8.4 64.1-24.8 83.9-16.5 19.4-40 29.2-71.1 29.2-31.2 0-55-10.3-71.4-30.4-16.3-20.1-24.5-47.3-24.5-82.6 0.1-35.8 8.2-63 24.5-83.2z"}}]})(e)}function Ya(e){return ce({tag:"svg",attr:{t:"1551322312294",style:"",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"}},{tag:"path",attr:{d:"M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"}}]})(e)}function p3({imageSource:e,title:t}){return p.jsx(h3,{children:e?p.jsx("img",{src:e,alt:t}):p.jsx("div",{className:"empty-img",children:"Aucune image"})},t)}const h3=O.div`
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    


    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        animation: ${gx} ${d.animation.speed.verySlow} ease-out;
    }

    .empty-img {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${d.colors.greyLight};
        line-height: 1.5;
        color: ${d.colors.greySemiDark};
        border-radius: ${d.borderRadius.round};
    }

    @media(max-width: 767px) {
        text-align: center;;
    }
`,m3=[{optionValue:!0,label:"En stock"},{optionValue:!1,label:"En rupture"}],g3=e=>[{id:"0",name:"title",value:e.title,placeholder:"Nom du produit",Icon:p.jsx(ls,{}),version:"minimalist",className:"title"},{id:"1",name:"imageSource",value:e.imageSource,placeholder:"Lien URL d'une image",Icon:p.jsx(tx,{}),version:"minimalist",className:"imageSource"},{id:"2",name:"price",value:e.price?e.price:"",placeholder:"Prix",Icon:p.jsx(Fw,{}),version:"minimalist",className:"price"}],y3=e=>[{id:"0",name:"name",value:e.name&&e.name,placeholder:"Prénom",Icon:p.jsx(ls,{}),version:"minimalist",className:"title"},{id:"1",name:"surname",value:e.surname&&e.surname,placeholder:"Nom",Icon:p.jsx(ls,{}),version:"minimalist",className:"surname"},{id:"2",name:"phoneNumber",value:e.phoneNumber&&e.phoneNumber,placeholder:"Téléphone",Icon:p.jsx(rx,{}),version:"minimalist",className:"phoneNumber"},{id:"3",name:"streetNumber",value:e.address&&e.address.streetNumber?e.address.streetNumber:"",placeholder:"N° de rue",Icon:p.jsx(f3,{}),version:"minimalist",className:"streetNumber"},{id:"4",name:"street",value:e.address&&e.address.street?e.address.street:"",placeholder:"Rue",Icon:"",version:"minimalist",className:"street"},{id:"5",name:"zipCode",value:e.address&&e.address.zipCode?e.address.zipCode:"",placeholder:"Code postal",Icon:"",version:"minimalist",className:"zipCode"},{id:"6",name:"city",value:e.address&&e.address.city?e.address.city:"",placeholder:"Ville",Icon:p.jsx(Pw,{}),version:"minimalist",className:"city"},{id:"7",name:"country",value:e.address&&e.address.country?e.address.country:"",placeholder:"Pays",Icon:"",version:"minimalist",className:"country"}],v3=e=>[{id:"3",name:"isAvailable",value:e.isAvailable,options:m3,Icon:p.jsx(d3,{}),className:"is-available"}],x3=e=>[{id:"0",name:"title",value:e.name,placeholder:"Nom de la catégorie",Icon:p.jsx(ls,{}),version:"minimalist",className:"title"}];function w3({options:e,value:t,name:n,Icon:r,className:o,onChange:i,...s}){return p.jsxs(S3,{className:o,children:[r&&p.jsx("div",{className:"icon",children:r}),p.jsx("select",{name:n,value:t,onChange:i,...s,children:e.map(({optionValue:l,label:a})=>p.jsx("option",{value:l,children:a},a))})]})}const S3=O.div`
    background-color: ${d.colors.background_white};
    border-radius: ${d.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 5px 16px;
  
    .icon {
      font-size: ${d.fonts.P1};
      margin-right: 5px;
      color: ${d.colors.greyBlue};
      display: flex; 
    }
  
    select {
      background: ${d.colors.background_white};
      border: none;
      font-size: ${d.fonts.size.SM};
      color: ${d.colors.dark};
      width: 100%;
    }

    @media(max-width: 767px) {
        padding: 0 5px;
        font-size: ${d.fonts.size.XS};
        Select {
        font-size: ${d.fonts.size.XS};
        }
    }
`,C3=z.forwardRef(({onFocus:e,onBlur:t,element:n,onChange:r,currentPage:o},i)=>{const s=o==="invoice",l=s?g3(n):y3(n),a=v3(n);return p.jsxs(E3,{$isProduct:s,children:[l.map(u=>C.createElement(Zu,{...u,key:u.id,onChange:r,version:"minimalist",ref:i&&u.id==="0"?i:null,onFocus:e,onBlur:t})),s&&a.map(u=>p.jsx(w3,{...u,onChange:r,onFocus:e,onBlur:t},u.id))]})}),E3=O.div`

${({$isProduct:e})=>e?k3:$3}

`,k3=ye`
    grid-area: 1 / 2 / 4 / 4;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    column-gap: 10px;

    .title {
        grid-area: 1 / 1 / 2 / 2;
    }
`,$3=ye`

grid-area: 1 / 1 / 5 / 5;
display: grid;
grid-template-rows: repeat(3, 1fr);
grid-template-columns: repeat(2, 1fr);
row-gap: 8px;
column-gap: 8px;

    .title {
    grid-area: 1 / 1 / 2 / 2;
    }
`,Ws=z.forwardRef(({onSubmit:e,onChange:t,element:n,children:r,onFocus:o,onBlur:i,isProduct:s,currentPage:l},a)=>p.jsxs(P3,{onSubmit:e,currentPage:l,$isProduct:s,children:[s&&p.jsx(p3,{imageSource:n.imageSource,title:n.title,handleChange:t}),p.jsx(C3,{currentPage:l,isCustomer:!s,onFocus:o,onBlur:i,onChange:t,element:n,ref:a}),p.jsx("div",{className:"submit",children:r})]})),P3=O.form`
${({$isProduct:e})=>e?N3:j3}
`,N3=ye`
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: repeat(4, 1fr);
column-gap: 8px;
row-gap: 8px;
height: 100%;
width: 70%;

    .submit {
    grid-area: 4 / 2 / 5 / 5;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

        .submit-button {
        height: 100%;
    }
}

@media(max-width: 767px) {
    width: 100%;
        .submit {
        grid-area: 4 / 2 / 5 / 5;
        display: flex;
        align-items: center;
        position: relative;

        .submit-button {
            height: 100%;
        }
    }
}
`,j3=ye`
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: repeat(4, 1fr);
column-gap: 8px;
row-gap: 8px;
height: 100%;
width: 70%;

.submit {
    grid-area: 5 / 1 / 5 / 5;
    display: flex;
    justify-content: start;
    position: relative;
    top: 20px;
    }

    @media(max-width: 767px) {
        width: 100%;
        .submit {
            top: 0px;
            font-size: ${d.fonts.size.XXS};
            .submit-button {
                font-size: ${d.fonts.size.XXS};
                height: 25px;
            }
        }

    }
`;function Km(){return p.jsxs(T3,{children:["Cliquer sur un produit pour le modifier "," ",p.jsx("span",{className:"live-update",children:"en temps réél"})]})}const T3=O.span`
    color : ${d.colors.primary};
    font-size: ${d.fonts.size.SM};

        .live-update {
            text-decoration: underline;
        }  
    @media(max-width: 767px) {
    font-size: ${d.fonts.size.XS}; 
  }
`;function qm(){return p.jsxs(R3,{children:[p.jsx("div",{className:"icon",children:p.jsx(nx,{})}),p.jsx("span",{className:"sentence",children:"Modifications enregistrées !"})]})}const R3=O.div`
  display: flex;
  color: ${d.colors.success};
  font-size: ${d.fonts.size.SM};

  .icon {
    font-size: ${d.fonts.size.P2};
    display: flex;
    margin: 0 10px;
  }

  @media(max-width: 767px) {
    font-size: ${d.fonts.size.XS}; 
  }

`,Bo=()=>{const[e,t]=C.useState(!1);return{isSubmitted:e,displaySuccessMessage:()=>{t(!0),setTimeout(()=>{t(!1)},2e3)}}};function b3(){const{selectedProduct:e,setSelectedProduct:t,editProduct:n,titleEditRef:r,currentPage:o}=C.useContext(ke),[i,s]=C.useState(),{isSubmitted:l,displaySuccessMessage:a}=Bo(),u=g=>{const{name:y,value:v}=g.target,w={...e,[y]:v};t(w),n(w)},c=g=>{const y=g.target.value;s(y)},f=g=>{const y=g.target.value;i!==y&&a()};return p.jsx(Ws,{element:e,currentPage:o,product:e,onChange:u,onFocus:c,onBlur:f,ref:r,isProduct:!0,children:l?p.jsx(qm,{}):p.jsx(Km,{})})}function z3(){return p.jsxs(_3,{children:[p.jsx(a3,{className:"icon"}),p.jsx("span",{className:"message",children:"Ajouté avec succès !"})]})}const _3=O.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    .icon {
        color: ${d.colors.green};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${d.colors.green};
        border-radius: 50%;
        vertical-align: middle;
    }
    .message {
        margin-left: 5px;
        font-size: ${d.fonts.size.SM};
        color: ${d.colors.green};
    }
`;function hc({isSubmitted:e,label:t}){return p.jsxs(p.Fragment,{children:[p.jsx(Io,{className:"submit-button",label:t,version:"success"}),e&&p.jsx(z3,{})]})}function O3(){const{addProduct:e,setNewProduct:t,newProduct:n,userId:r,selectedCategory:o,categories:i,currentPage:s}=C.useContext(ke),{isSubmitted:l,displaySuccessMessage:a}=Bo(),u=f=>{f.preventDefault();const y=BigInt(new Date),v=Wm("MAIN",i),E={...n,category:{id:o||v},id:y};e(E,r),t(No),a()},c=f=>{const{name:g,value:y}=f.target;t({...n,[g]:y})};return p.jsx(Ws,{currentPage:s,onSubmit:u,onChange:c,element:n,isSubmitted:l,isProduct:!0,children:p.jsx(hc,{isSubmitted:l,label:"Ajouter le produit"})})}function I3(e){return ce({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",clipRule:"evenodd"}}]})(e)}function Jm({element:e}){return p.jsxs(A3,{children:[p.jsxs("span",{children:["Cliquer sur un ",e," pour le modifier."]}),p.jsx(I3,{})]})}const A3=O.div`
    display: flex;
    align-items: center;
    font-family: ${d.fonts.family.stylish};
    font-size: ${d.fonts.size.P3};
    color: ${d.colors.greyBlue};

    position: relative;
    top: 50px;

    span {
        margin-right: 10px;
    }
`,Zm=Object.freeze({id:"",name:""}),L3=z.forwardRef(({onBlur:e,category:t,onChange:n},r)=>{const o=x3(t);return p.jsx(M3,{className:"input-fields",children:o.map(i=>C.createElement(Zu,{...i,key:i.id,onChange:n,version:"minimalist",ref:r&&i.name==="title"?r:null,onBlur:e}))})}),M3=O.div`
grid-area: 1 / 2 / 4 / 5;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    row-gap: 8px;
    column-gap: 8px;

    .title {
        grid-area: 1 / 1 / 2 / 4;
    }
    .imageSource{
        grid-area: 2 / 1 / 3 / 4;
    }

    @media(max-width: 767px) {
    }

`,F3=z.forwardRef(({onSubmit:e,children:t,onChange:n,category:r,onBlur:o},i)=>p.jsxs(D3,{onSubmit:e,children:[p.jsx(L3,{onBlur:o,onChange:n,category:r,ref:i}),p.jsx("div",{className:"submit",children:t})]})),D3=O.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(2 1fr);
    column-gap: 8px;
    row-gap: 8px;
    height: 100%;
    width: 70%;


    .submit {
        grid-area: 2 / 2 / 3 / 3; 
        display: flex; 
        align-items: center;
        position: relative;
        top: 3px;


        .submit-button {
            height: 100%;
        }
    }
    @media(max-width: 767px) {
        padding-top: 20px;
        width: 100%;
        .submit {
        grid-area: 2 / 2 / 3 / 3;        
        display: flex; 
        align-items: center;
        position: relative;

        .submit-button {
            height: 100%;
        }
    }
}
`;function B3(){const{addCategory:e,newCategory:t,setNewCategory:n,userId:r}=C.useContext(ke),{isSubmitted:o,displaySuccessMessage:i}=Bo(),s=a=>{a.preventDefault();const c=BigInt(new Date);e({name:t,id:c},r),n(Zm),i()},l=a=>{n(a.target.value)};return p.jsx(F3,{onSubmit:s,onChange:l,category:t,isSubmitted:o,children:p.jsx(hc,{isSubmitted:o,label:"Ajouter la catégorie"})})}const cs=Object.freeze({id:"",name:"",surname:"",phoneNumber:"",userId:"",address:{id:"",street:"",city:"",streetNumber:"",country:"",zipCode:""}});function U3(){const{addCustomer:e,setNewCustomer:t,newCustomer:n,userId:r,currentPage:o}=C.useContext(ke),{isSubmitted:i,displaySuccessMessage:s}=Bo(),l=u=>{u.preventDefault();const f=BigInt(new Date),g={...n,id:f};e(g,r),t(cs),s()},a=u=>{const{name:c,value:f}=u.target,g={...n,[c]:f,address:{...n.address,[c]:f}};t(g)};return p.jsx(Ws,{currentPage:o,onSubmit:l,onChange:a,element:n,isSubmitted:i,children:p.jsx(hc,{isSubmitted:i,label:"Ajouter le client"})})}function H3(){const{selectedCustomer:e,setSelectedCustomer:t,editCustomer:n,titleEditRef:r,userId:o,currentPage:i}=C.useContext(ke),[s,l]=C.useState(),{isSubmitted:a,displaySuccessMessage:u}=Bo(),c=y=>{const{name:v,value:w}=y.target,E={...e,[v]:w,address:{...e.address,[v]:w}};t(E),n(E,o)},f=y=>{const v=y.target.value;l(v)},g=y=>{const v=y.target.value;s!==v&&u()};return p.jsx(Ws,{currentPage:i,element:e,onChange:c,onFocus:f,onBlur:g,ref:r,children:a?p.jsx(qm,{}):p.jsx(Km,{})})}const e0=e=>[{index:"add",label:"Ajouter un produit",Icon:p.jsx(Ya,{}),content:p.jsx(O3,{})},{index:"edit",label:"Modifier un produit",Icon:p.jsx(Qm,{}),content:e?p.jsx(b3,{}):p.jsx(Jm,{element:"produit"})},{index:"addCategory",label:"Ajouter une catégorie",Icon:p.jsx(Ya,{}),content:p.jsx(B3,{})}],t0=e=>[{index:"add",label:"Ajouter un client",Icon:p.jsx(Ya,{}),content:p.jsx(U3,{})},{index:"edit",label:"Modifier un client",Icon:p.jsx(Qm,{}),content:e?p.jsx(H3,{}):p.jsx(Jm,{element:"produit"})}],hf=(e,t)=>e.find(n=>n.index===t);function V3(){const{isCollapsed:e,setIsCollapsed:t,currentTabSelected:n,setCurrentTabSelected:r,currentPage:o}=C.useContext(ke),i=l=>{t(!1),r(l)},s=o==="invoice"?e0():t0();return p.jsxs(W3,{children:[p.jsx(pf,{Icon:e?p.jsx(c3,{}):p.jsx(u3,{}),onClick:()=>t(!e),className:e?"is-active":""}),s.map(l=>C.createElement(pf,{...l,key:l.index,onClick:()=>i(l.index),className:n===l.index?"is-active":""}))]})}const W3=O.div`
  display: flex;
  padding: 0 20px;
  gap: 1px;

  .is-active {
    background: ${d.colors.background_dark};
    color: ${d.colors.white};
    border-color: ${d.colors.white};
  }
`;function X3(){const{currentTabSelected:e,selectedProduct:t,selectedCustomer:n,currentPage:r}=C.useContext(ke),i=e0(t!==No),s=hf(i,e),a=t0(n!==cs),u=hf(a,e);return p.jsxs(Q3,{children:[r==="invoice"&&s.content,r==="customers"&&u.content]})}const Q3=O.div`
  height: 240px;
  background: ${d.colors.white};
  border: 1px solid ${d.colors.greyLight};
  box-shadow: ${d.shadows.subtle};
  box-sizing: border-box;
  padding: 30px 5%;

  @media(max-width: 767px) {
    height: 150px;
    padding: 5px 10%;
  }
  `;function Y3(){const{isCollapsed:e}=C.useContext(ke);return p.jsxs(G3,{children:[p.jsx(V3,{}),!e&&p.jsx(X3,{})]})}const G3=O.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  animation: ${px} ease-out ${d.animation.speed.slow};
  z-index: 3;
`;function n0(){return p.jsx(K3,{children:p.jsx("span",{className:"title",children:"Chargement en cours ..."})})}const K3=O.div`
  background-color: ${d.colors.background_white};
  box-shadow: ${d.shadows.strong};
  border-bottom-right-radius: ${d.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${d.colors.greyBlue};
    font-size: ${d.fonts.size.P4};
    font-weight: ${d.fonts.weights.regular};
  }
`;function Ga({title:e,imageSource:t,leftDescription:n,showDeleteButton:r,onDelete:o,onClick:i,isHoverable:s,isSelected:l,overlapImageSource:a,isOverlapImageVisible:u,className:c,icon:f}){return p.jsx(q3,{onClick:i,$isHoverable:s,$isSelected:l,children:p.jsxs("div",{className:c,children:[r&&p.jsx("button",{className:"delete-button","aria-label":"delete-button",onClick:o,children:p.jsx(ac,{className:"delete-icon"})}),p.jsxs("div",{className:"image",children:[u&&p.jsxs("div",{className:"overlap",children:[p.jsx("div",{className:"transparent-layer"}),p.jsx("img",{src:a,className:"overlap-image",alt:"overlap"})]}),p.jsx("img",{src:t,alt:e})]}),p.jsxs("div",{className:"text-info",children:[p.jsx("div",{className:"title",children:e}),p.jsx("div",{className:"left-description",children:n})]})]})})}const q3=O.div`
  ${({$isHoverable:e})=>e&&J3}

  border-radius: ${d.borderRadius.extraRound};
  

  .minimize {
    height: 330px;
    background: ${d.colors.background_dark};
    box-sizing: border-box;
    width: 210px;
    height: 300px;
    display: flex; 
    padding: 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${d.borderRadius.extraRound};
    align-items: center;
    justify-content: center;
    color: ${d.colors.white};
    position: relative;

    &:hover {
      cursor: pointer;
      box-shadow: ${d.shadows.orangeHighlight};
    }
    &:active {
    background-color: ${d.colors.primary};
    color: ${d.colors.dark};
    }

    .image {
      display: none;
    }

    .title {
        font-size: ${d.fonts.size.P4};
        font-weight: ${d.fonts.weights.bold};
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${d.fonts.family.stylish};
    }
    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      color: ${d.colors.primary};
      padding: 0;
      border: none;
      background: none;
      animation : ${Da} ${d.animation.speed.slow};
      z-index: 3;

      .delete-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      :hover {
        color: ${d.colors.red}
      }
      :active{
        color: ${d.colors.primary}
      }
    }


  }

  .back{
    background-color: ${d.colors.primary};
  }
  
  .card {
    height: 330px;
    background: ${d.colors.white};
    box-sizing: border-box;
    width: 210px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${d.borderRadius.extraRound};
    position: relative;


    &:hover {
      cursor: pointer;
      box-shadow: ${d.shadows.orangeHighlight};
    }
    &:active {
    background-color: ${d.colors.primary};
    color: ${d.colors.white};
    }

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      color: ${d.colors.primary};
      padding: 0;
      border: none;
      background: none;
      animation : ${Da} ${d.animation.speed.slow};
      z-index: 2;

      .delete-icon{
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      :hover {
        color: ${d.colors.red}
      }
      :active{
        color: ${d.colors.primary}
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fx} ${d.animation.speed.slow};
          border-radius: ${d.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${d.borderRadius.extraRound};
        }
      }    
    }

    .text-info {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${d.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${d.fonts.weights.bold};
        color: ${d.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
        text-overflow: ellipsis;
        font-family: ${d.fonts.family.stylish};
      }


      .left-description {
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${d.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${d.fonts.weights.medium};
        color: ${d.colors.primary};
      }
    }
    ${({$isHoverable:e,$isSelected:t})=>e&&t&&Z3}  
  }

  @media(max-width: 767px) {
      height: 140px;
      padding: 0;

    .card {
    box-sizing: border-box;
    width: 100px;
    height: 141px;
    padding: 5px;
    padding-bottom: 30px;
      
      .image {
      margin-top: 10px;
      margin-bottom: 10px;
      }
      .delete-button {
        top: 5px;
        right: 5px;
      }

      .text-info {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0;

          .title {
          font-size: ${d.fonts.size.P3};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-top: 10px;
        }
        .left-description {
          margin-top: -10px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      
    }
    .minimize {
    width: 100px;
    height: 140px;
    padding: 5px;
    padding-bottom: 5px;

    .title {
      font-size: ${d.fonts.size.P2};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    }
  }

    
  @media(min-width: 768px) and (max-width: 1388px) {
    height: 160px;
    padding: 0;

    .minimize {
    width: 150px;
    height: 190px;
    padding: 10px;
    padding-bottom: 10px;

    .title {
          font-size: ${d.fonts.size.P3};
    }
  }

    
    .card {
    width: 150px;
    height: 190px;
    padding: 5px;
    padding-bottom: 10px;

    .delete-button {
      top: 5px;
      right: 5px;
    }
    
    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;
      }
    }
  }
`,J3=ye`
  &:hover {
    box-shadow: ${d.shadows.orangeHighlight};
    cursor: pointer;
  }
`,Z3=ye`
background: ${d.colors.primary};
  .primary-button {
  color: ${d.colors.primary};
  background-color: ${d.colors.white};
  border: 1px solid ${d.colors.white};
  transition: all 200ms ease - out;
    :hover {
    color: ${d.colors.white};
    background-color: ${d.colors.primary};
    border: 1px solid ${d.colors.white};
    transition: all 200ms ease - out;
  }
    :active {
    background-color: ${d.colors.white};
    color: ${d.colors.primary};
  }

    &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

    &.with-focus {
    border: 1px solid white;
    background-color: ${d.colors.white};
    color: ${d.colors.primary};
      :hover {
      color: ${d.colors.white};
      background-color: ${d.colors.primary};
      border: 1px solid ${d.colors.white};
    }
      :active {
      background-color: ${d.colors.white};
      color: ${d.colors.primary};
    }
  }
}

  .delete-button {
  color: ${d.colors.white};

    :active {
    color: ${d.colors.white};
  }
}

  .text-info {
    .left-description {
      color: ${d.colors.white};
    }
}
`;function eS(e){return typeof e=="boolean"?e:e==="true"}const r0=(e,t)=>e===t;function tS({selectedProduct:e,isModeAdmin:t,handleCardDelete:n,handleClick:r,containerClassName:o,filteredProducts:i}){return p.jsx(p.Fragment,{children:i.slice().reverse().map(({id:s,title:l,imageSource:a,price:u,isAvailable:c})=>p.jsx("div",{className:o,children:p.jsx(Ga,{title:l,imageSource:a||Xm,leftDescription:Do(u),showDeleteButton:t,onDelete:f=>n(f,s),onClick:()=>r(s),isHoverable:t,isSelected:r0(s,e.id),overlapImageSource:Iw,isOverlapImageVisible:eS(c)===!1,className:"card"},s)}))})}function nS({handleCategoryDelete:e,selectedCategory:t,isModeAdmin:n,handleBackButtonClick:r,categories:o,handleCategoryClick:i}){const s=t===null?o.filter(l=>l.name!=="MAIN"):[];return p.jsxs(p.Fragment,{children:[t&&p.jsx(Ga,{title:"RETOUR",className:"minimize back",onClick:r},"back"),s.slice().reverse().map(({id:l,name:a})=>p.jsx("div",{className:"category",children:p.jsx(Ga,{title:a,className:"minimize",onClick:()=>i(l),onDelete:u=>e(u,l),showDeleteButton:n},l)},l))]})}function mc({onClick:e,title:t,description:n,label:r}){return p.jsxs(rS,{className:"no-prodducts",children:[p.jsx("span",{className:"title",children:t}),p.jsx("span",{className:"description",children:n}),p.jsx(Io,{label:r,onClick:e})]})}const rS=O.div`
  background-color: ${d.colors.background_white};
  box-shadow: ${d.shadows.strong};
  border-bottom-right-radius: ${d.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .title,
  .description {
    text-align: center;
    font-family: ${d.fonts.family.stylish};
    color: ${d.colors.greyBlue};
  }

  .title {
    font-size: ${d.fonts.size.P4};
    font-weight: ${d.fonts.weights.semiBold};
  }

  .description {
    font-size: ${d.fonts.size.P4};
    margin-top: 20px;
  }

  button {
    margin-top: 30px;
    font-size: ${d.fonts.size.XS};
    width: auto;
  } 
`;function oS(){const{resetCategoryAndProducts:e,deleteProductsFromCategory:t,deleteCategory:n,setCategories:r,categories:o,userId:i,setProducts:s,products:l,isModeAdmin:a,deleteProduct:u,setSelectedProduct:c,selectedProduct:f,addBasketProduct:g,selectProduct:y,invoice:v,setSelectedCategory:w,selectedCategory:E,filteredProducts:m,setFilteredProducts:h}=C.useContext(ke),x=(L,B)=>{L.stopPropagation(),u(B),B===f.id&&c(No)},S=async L=>{const B=Wa(L,l);B.isAvailable&&await g(B,v,i)},k=L=>{a?y(L):S(L)},j=()=>{w(null)},P=L=>{w(L)},R=async(L,B)=>{L.stopPropagation(),await n(B),t(B,l)},D=()=>{e(i,r,s)},A=()=>{let L,B=Wm("MAIN",o);E?L=l.filter(T=>T.category.id===E)||[]:L=l.filter(T=>T.category.id===B)||[],h(L)};let X=a?"card-container is-hoverable":"card-container";const J=o?o.filter(L=>L.name!=="MAIN"):null,ae="Le menu est vide",se="Cliquez ci-dessous pour le réinitialiser",Te="Générer de nouveaux produits";return C.useEffect(()=>{A()},[E,l]),l===void 0||o===void 0?p.jsx(n0,{}):zn(l)&&zn(J)?p.jsx(mc,{onClick:D,description:se,title:ae,label:Te}):p.jsxs(iS,{children:[p.jsx(nS,{selectedCategory:E,handleBackButtonClick:j,handleCategoryClick:P,categories:o,isModeAdmin:a,containerClassName:"category",handleCategoryDelete:R}),p.jsx(tS,{filteredProducts:m,selectedCategory:E,selectedProduct:f,isModeAdmin:a,products:l,handleCardDelete:x,handleClick:k,containerClassName:X})]})}const iS=O.div`
  
  background: ${d.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  padding: 50px 50px 50px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;


  &:hover {
        scrollbar-color: initial;
    }

  .card-container {
    position: relative; 
    height: 300px;
    border-radius: ${d.borderRadius.extraRound};
    &.is-hoverable {
      &:hover{
        transform:scale(1.05);
        transition: ease-out ${d.animation.speed.slow};
      }
    }
  }
    .ribbon {
      z-index: 2;
  }
  
  @media(max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 10px;
    max-width: 100%;
    overflow-x: hidden;
    padding: 10px 0;
    .card-container {
      height: 140px;
    }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 10px;
    max-width: 100%;
    overflow-x: hidden;
    .card-container {
      height: 190px;
    }

  }
`;function o0({onClick:e,name:t,surname:n,element1:r,showDeleteButton:o,onDelete:i,element2:s,isSelected:l,index:a,isInvoice:u}){return p.jsx(sS,{onClick:e,$isSelected:l,$isModeAdmin:o,$isInvoice:u,children:p.jsxs("div",{className:"cards",children:[o&&p.jsx("button",{className:"delete-button","aria-label":"delete-button",onClick:i,children:p.jsx(ac,{className:"delete-icon"})}),p.jsxs("div",{className:"index",children:["#",a]}),p.jsx("div",{className:"name",children:t}),p.jsx("div",{className:"surname",children:n}),p.jsx("div",{className:"element1",children:r}),p.jsx("div",{className:"element2",children:s})]})})}const sS=O.div`

    .cards {
    overflow : hidden;
    border-radius: ${d.borderRadius.round};
    background: ${d.colors.background_dark};
    height: 40px;
    box-sizing: border-box;
    width: auto;
    display: flex;
    box-shadow: -2px 2px 2px 0px rgb(0 0 0 / 20%);
    margin: 0;
    margin-top: 10px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    font-family: ${d.fonts.family.stylish};
    font-weight: ${d.fonts.weights.semiBold};
    font-size: ${d.fonts.size.P3};
    overflow-x: hidden;
    text-overflow: ellipsis;
    position: relative;
    padding: 0 30px;
    color: ${d.colors.primary};
    }

    .delete-button {
      position: absolute;
      align-items: center;
      right: 0px;
      cursor: pointer;
      color: ${d.colors.primary};
      border: none;
      background: none;
      animation : ${Da} ${d.animation.speed.slow};
      z-index: 3;

      .delete-icon{
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
    }
    @media(max-width: 1388px) { 
      .cards{
      padding-right: 50px;
      font-size: ${d.fonts.size.SM};
      font-weight: ${d.fonts.weights.bold};

      }
    }
    ${({$isSelected:e,$isModeAdmin:t})=>e&&t&&lS}
    ${({$isModeAdmin:e,$isInvoice:t})=>e&&!t&&mf}
    ${({$isInvoice:e,$isModeAdmin:t})=>e&&!t&&mf}
`,lS=ye`
    .cards {
      background: ${d.colors.primary};
      color: ${d.colors.dark};
  
    &:active {
    background-color: ${d.colors.primary};
    }
  }
`,mf=ye`
    box-sizing: border-box;
    padding: 0 5px;
    .cards {
      &:hover {
      cursor: pointer;
      box-shadow: ${d.shadows.orangeHighlight};
      }
    }
`;function aS(){const{setInvoices:e,invoices:t,isModeAdmin:n,setInvoiceId:r,setCurrentPage:o,deleteInvoice:i,createInvoice:s,userId:l}=C.useContext(ke),a="Vous n'avez pas de commandes",u="Cliquez ci-dessous pour créer une commande",c="Créer une commande",f=(v,w)=>{v.stopPropagation(),i(w)},g=async v=>{await r(v),o("invoice")},y=async()=>{await s(l,r),o("invoice")};return C.useEffect(()=>{q2(l,e)},[]),t===void 0?p.jsx(Loader,{}):zn(t)?p.jsx(mc,{description:u,title:a,label:c,onClick:y}):p.jsxs(Vs,{component:uS,children:[p.jsx("div",{className:"create-invoice",children:p.jsx(Io,{onClick:y,label:"Créer une commande"})}),t.slice().sort((v,w)=>w.id-v.id).map(({id:v,createdAt:w,total:E,customer:m})=>p.jsx(Hs,{classNames:"animation-card",timeout:300,children:p.jsx("div",{className:"invoice",children:p.jsx(o0,{index:v,surname:m&&m.surname?m.surname:" ",name:m&&m.name?m.name:" ",element1:E?Do(E):"0 €",element2:gw(w),showDeleteButton:n,isInvoice:!0,onDelete:h=>f(h,v),onClick:()=>g(v)},v)})},v))]})}const uS=O.div`
    background: ${d.colors.background_white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    padding: 0 30px;
    align-items: center;


    .create-invoice{
        width: 75%;
        height: 40px;
        margin: 15px 0;
    }

    &:hover {
        scrollbar-color: initial;
    }
    .animation-card{
        width: 100%;
    }
    .invoice {
        width: 100%;
        &:hover{
            transform:scale(1.05);
            transition: ease-out ${d.animation.speed.slow};
        }
    }
  
    ${ym}

    @media(max-width: 767px) { 
    padding: 0 5px;
    }
`;function cS(){const{resetCustomers:e,customers:t,isModeAdmin:n,deleteCustomer:r,selectCustomer:o,selectedCustomer:i,userId:s}=C.useContext(ke),l="La liste de clients est vide",a="Cliquez ci-dessous pour la réinitialiser",u="Générer de nouveaux clients",c=()=>{e(s)},f=(y,v)=>{y.stopPropagation(),r(v)},g=y=>{n&&o(y)};return t===void 0?p.jsx(n0,{}):zn(t)?p.jsx(mc,{description:a,title:l,label:u,onClick:c}):p.jsx(Vs,{component:dS,className:"customers",children:t.slice().reverse().map(({id:y,name:v,surname:w,index:E,phoneNumber:m,address:h})=>p.jsx(Hs,{classNames:"animation-card",timeout:300,children:p.jsx("div",{className:"customer",children:p.jsx(o0,{index:wr(y,t)+1,name:v,surname:w,element2:h.city,element1:m,showDeleteButton:n,onDelete:x=>f(x,y),onClick:()=>g(y),isSelected:r0(y,i.id)},y)})},y))})}const dS=O.div`

    background: ${d.colors.background_white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    padding: 0 30px;

    &:hover {
        scrollbar-color: initial;
    }
    .customer {
        width: 100%;
        &:hover{
            transform:scale(1.05);
            transition: ease-out ${d.animation.speed.slow};
        }
    }

    ${ym}

    @media(max-width: 767px) { 
    padding: 0 5px;
    }
`;function fS(){const{isModeAdmin:e,userId:t,currentPage:n}=C.useContext(ke);return C.useEffect(()=>{},[n]),p.jsxs(pS,{children:[n==="invoice"&&t&&p.jsx(oS,{}),n==="customers"&&t&&p.jsx(cS,{}),n==="invoices"&&t&&p.jsx(aS,{}),e&&n!=="invoices"&&p.jsx(Y3,{})]})}const pS=O.div`
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${d.borderRadius.extraRound};

    @media(max-width: 767px) {
        height: 50vh;
    }
`;function hS(){return p.jsxs(mS,{children:[p.jsx(fS,{}),p.jsx(i3,{})]})}const mS=O.div`
    border: solid 2px ${d.colors.primary} ;
    border-top: none;
    background-color: ${d.colors.background_white};
    height: 85vh;

    border-bottom-left-radius: ${d.borderRadius.extraRound};
    border-bottom-right-radius: ${d.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 1fr 25%;;
    overflow: hidden;


    @media(max-width: 767px) {
      display: flex;
      flex-direction: column;
      max-height: none;
    }

    @media(min-width: 768px) and (max-width: 1388px) {
      grid-template-columns: 33% 1fr;
    }
  `,gS=()=>window.location.reload();function yS(){const{username:e}=Uh();return p.jsxs(vS,{children:[p.jsxs("div",{className:"info",children:[p.jsxs("p",{children:["Hey, ",p.jsx("b",{children:e})]}),p.jsx(Wh,{className:"link",to:"/",children:p.jsx("div",{className:"description",children:p.jsx("small",{children:"Déconnexion"})})})]}),p.jsx("div",{className:"picture",children:p.jsx(gm,{})})]})}const vS=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  margin-left: 50px;

  .info {
    margin-right: 10px;
    display: column;
    p {
      margin: 0;
      color: ${d.colors.greyBlue};

      b {
        color: ${d.colors.primary};
      }
    }

    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${d.colors.greyDark};
        }

        small {
          font-size: ${d.fonts.size.XXS};
          color: ${d.colors.greyBlue};
          font-weight: ${d.fonts.weights.medium};
          text-decoration: none;
        }
      }
    }
  }

  .description{
    display: flex;
  }


  .picture {
    height: auto;
    display: flex;
    height: 100%;
    width: 100%;
    font-size: ${d.fonts.size.P4};
    color: ${d.colors.greyBlue};
  }

  @media (max-width: 767px) {
    padding: 0;
    margin-left: 0;

    
    .info {
    text-align: left;
    margin-right: 5px;
    margin-left: 20px;
    align-items: center;

    a {
      .description {
        small {
          font-size: ${d.fonts.size.XS};
        }
      }
    }
  }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    padding: 0;
    max-width: 100%
    }
`;function xS({isChecked:e,onToggle:t,labelIfChecked:n="Fermer",labelIfUnchecked:r="Ouvrir"}){return p.jsxs(wS,{children:[p.jsx("input",{type:"checkbox",className:"toggle",id:"rounded",checked:e,onChange:t}),p.jsx("label",{htmlFor:"rounded",className:"rounded","data-checked":n,"data-unchecked":r})]})}const wS=O.div`

  display: flex;
  margin-right: 10px;
  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${d.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${d.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all ${d.animation.speed.slow} ease;
    }

    // the small round circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all ${d.animation.speed.slow} ease;
      z-index: 3;
    }

    // text inside the switch button (for checked and unchecked)
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    // outside box
    &.toggle + label.rounded {
      border-radius: 30px;
    }

    // small circle
    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: ${d.colors.background_dark};
      /* text-align: right; */
    }

    // text label when not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${d.colors.primary};
      font-weight: ${d.fonts.weights.bold};
    }

    // small circle when not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${d.colors.primary};
    }

    // box container when checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${d.colors.primary};
    }

    // label text when checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${d.colors.dark};
      letter-spacing: 0px;
    }

    // small circle when checked
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${d.colors.primary};
    }
  }

  @media(max-width: 767px) {
    transform: scale(0.8);
    display: flex;
    margin-right: 5px;
    input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 150px;
      position: relative;
      font-size: ${d.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${d.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all ${d.animation.speed.slow} ease;
    }
    &.toggle:checked + label:before {
      left: 112px;
      background-color: ${d.colors.primary};
    }
    // text inside the switch button (for checked and unchecked)
    
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 100px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

  }
}
`;function i0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i0(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Yt(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i0(e))&&(r&&(r+=" "),r+=t);return r}const no=e=>typeof e=="number"&&!isNaN(e),_n=e=>typeof e=="string",De=e=>typeof e=="function",bi=e=>_n(e)||De(e)?e:null,zl=e=>C.isValidElement(e)||_n(e)||De(e)||no(e);function SS(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Xs(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(s){let{children:l,position:a,preventExitTransition:u,done:c,nodeRef:f,isIn:g}=s;const y=r?`${t}--${a}`:t,v=r?`${n}--${a}`:n,w=C.useRef(0);return C.useLayoutEffect(()=>{const E=f.current,m=y.split(" "),h=x=>{x.target===f.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",h),E.removeEventListener("animationcancel",h),w.current===0&&x.type!=="animationcancel"&&E.classList.remove(...m))};E.classList.add(...m),E.addEventListener("animationend",h),E.addEventListener("animationcancel",h)},[]),C.useEffect(()=>{const E=f.current,m=()=>{E.removeEventListener("animationend",m),o?SS(E,c,i):c()};g||(u?m():(w.current=1,E.className+=` ${v}`,E.addEventListener("animationend",m)))},[g]),z.createElement(z.Fragment,null,l)}}function gf(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const qe={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},li=e=>{let{theme:t,type:n,...r}=e;return z.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},_l={info:function(e){return z.createElement(li,{...e},z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return z.createElement(li,{...e},z.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return z.createElement(li,{...e},z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return z.createElement(li,{...e},z.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return z.createElement("div",{className:"Toastify__spinner"})}};function CS(e){const[,t]=C.useReducer(y=>y+1,0),[n,r]=C.useState([]),o=C.useRef(null),i=C.useRef(new Map).current,s=y=>n.indexOf(y)!==-1,l=C.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:y=>i.get(y)}).current;function a(y){let{containerId:v}=y;const{limit:w}=l.props;!w||v&&l.containerId!==v||(l.count-=l.queue.length,l.queue=[])}function u(y){r(v=>y==null?[]:v.filter(w=>w!==y))}function c(){const{toastContent:y,toastProps:v,staleId:w}=l.queue.shift();g(y,v,w)}function f(y,v){let{delay:w,staleId:E,...m}=v;if(!zl(y)||function(J){return!o.current||l.props.enableMultiContainer&&J.containerId!==l.props.containerId||i.has(J.toastId)&&J.updateId==null}(m))return;const{toastId:h,updateId:x,data:S}=m,{props:k}=l,j=()=>u(h),P=x==null;P&&l.count++;const R={...k,style:k.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(m).filter(J=>{let[ae,se]=J;return se!=null})),toastId:h,updateId:x,data:S,closeToast:j,isIn:!1,className:bi(m.className||k.toastClassName),bodyClassName:bi(m.bodyClassName||k.bodyClassName),progressClassName:bi(m.progressClassName||k.progressClassName),autoClose:!m.isLoading&&(D=m.autoClose,A=k.autoClose,D===!1||no(D)&&D>0?D:A),deleteToast(){const J=gf(i.get(h),"removed");i.delete(h),qe.emit(4,J);const ae=l.queue.length;if(l.count=h==null?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),ae>0){const se=h==null?l.props.limit:1;if(ae===1||se===1)l.displayedToast++,c();else{const Te=se>ae?ae:se;l.displayedToast=Te;for(let L=0;L<Te;L++)c()}}else t()}};var D,A;R.iconOut=function(J){let{theme:ae,type:se,isLoading:Te,icon:L}=J,B=null;const T={theme:ae,type:se};return L===!1||(De(L)?B=L(T):C.isValidElement(L)?B=C.cloneElement(L,T):_n(L)||no(L)?B=L:Te?B=_l.spinner():(_=>_ in _l)(se)&&(B=_l[se](T))),B}(R),De(m.onOpen)&&(R.onOpen=m.onOpen),De(m.onClose)&&(R.onClose=m.onClose),R.closeButton=k.closeButton,m.closeButton===!1||zl(m.closeButton)?R.closeButton=m.closeButton:m.closeButton===!0&&(R.closeButton=!zl(k.closeButton)||k.closeButton);let X=y;C.isValidElement(y)&&!_n(y.type)?X=C.cloneElement(y,{closeToast:j,toastProps:R,data:S}):De(y)&&(X=y({closeToast:j,toastProps:R,data:S})),k.limit&&k.limit>0&&l.count>k.limit&&P?l.queue.push({toastContent:X,toastProps:R,staleId:E}):no(w)?setTimeout(()=>{g(X,R,E)},w):g(X,R,E)}function g(y,v,w){const{toastId:E}=v;w&&i.delete(w);const m={content:y,props:v};i.set(E,m),r(h=>[...h,E].filter(x=>x!==w)),qe.emit(4,gf(m,m.props.updateId==null?"added":"updated"))}return C.useEffect(()=>(l.containerId=e.containerId,qe.cancelEmit(3).on(0,f).on(1,y=>o.current&&u(y)).on(5,a).emit(2,l),()=>{i.clear(),qe.emit(3,l)}),[]),C.useEffect(()=>{l.props=e,l.isToastActive=s,l.displayedToast=n.length}),{getToastToRender:function(y){const v=new Map,w=Array.from(i.values());return e.newestOnTop&&w.reverse(),w.forEach(E=>{const{position:m}=E.props;v.has(m)||v.set(m,[]),v.get(m).push(E)}),Array.from(v,E=>y(E[0],E[1]))},containerRef:o,isToastActive:s}}function yf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function vf(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ES(e){const[t,n]=C.useState(!1),[r,o]=C.useState(!1),i=C.useRef(null),s=C.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=C.useRef(e),{autoClose:a,pauseOnHover:u,closeToast:c,onClick:f,closeOnClick:g}=e;function y(S){if(e.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",h),document.addEventListener("touchmove",m),document.addEventListener("touchend",h);const k=i.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=k.getBoundingClientRect(),k.style.transition="",s.x=yf(S.nativeEvent),s.y=vf(S.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=k.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=k.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(S){if(s.boundingRect){const{top:k,bottom:j,left:P,right:R}=s.boundingRect;S.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=P&&s.x<=R&&s.y>=k&&s.y<=j?E():w()}}function w(){n(!0)}function E(){n(!1)}function m(S){const k=i.current;s.canDrag&&k&&(s.didMove=!0,t&&E(),s.x=yf(S),s.y=vf(S),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),k.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,k.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function h(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",h),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",h);const S=i.current;if(s.canDrag&&s.didMove&&S){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return o(!0),void e.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${e.draggableDirection}(0)`,S.style.opacity="1"}}C.useEffect(()=>{l.current=e}),C.useEffect(()=>(i.current&&i.current.addEventListener("d",w,{once:!0}),De(e.onOpen)&&e.onOpen(C.isValidElement(e.children)&&e.children.props),()=>{const S=l.current;De(S.onClose)&&S.onClose(C.isValidElement(S.children)&&S.children.props)}),[]),C.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",w),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const x={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return a&&u&&(x.onMouseEnter=E,x.onMouseLeave=w),g&&(x.onClick=S=>{f&&f(S),s.canCloseOnClick&&c()}),{playToast:w,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:x}}function s0(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return z.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},z.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},z.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function kS(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:s,style:l,controlledProgress:a,progress:u,rtl:c,isIn:f,theme:g}=e;const y=i||a&&u===0,v={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:y?0:1};a&&(v.transform=`scaleX(${u})`);const w=Yt("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),E=De(s)?s({rtl:c,type:o,defaultClassName:w}):Yt(w,s);return z.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:v,[a&&u>=1?"onTransitionEnd":"onAnimationEnd"]:a&&u<1?null:()=>{f&&r()}})}const $S=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=ES(e),{closeButton:i,children:s,autoClose:l,onClick:a,type:u,hideProgressBar:c,closeToast:f,transition:g,position:y,className:v,style:w,bodyClassName:E,bodyStyle:m,progressClassName:h,progressStyle:x,updateId:S,role:k,progress:j,rtl:P,toastId:R,deleteToast:D,isIn:A,isLoading:X,iconOut:J,closeOnClick:ae,theme:se}=e,Te=Yt("Toastify__toast",`Toastify__toast-theme--${se}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":ae}),L=De(v)?v({rtl:P,position:y,type:u,defaultClassName:Te}):Yt(Te,v),B=!!j||!l,T={closeToast:f,type:u,theme:se};let _=null;return i===!1||(_=De(i)?i(T):C.isValidElement(i)?C.cloneElement(i,T):s0(T)),z.createElement(g,{isIn:A,done:D,position:y,preventExitTransition:n,nodeRef:r},z.createElement("div",{id:R,onClick:a,className:L,...o,style:w,ref:r},z.createElement("div",{...A&&{role:k},className:De(E)?E({type:u}):Yt("Toastify__toast-body",E),style:m},J!=null&&z.createElement("div",{className:Yt("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!X})},J),z.createElement("div",null,s)),_,z.createElement(kS,{...S&&!B?{key:`pb-${S}`}:{},rtl:P,theme:se,delay:l,isRunning:t,isIn:A,closeToast:f,hide:c,type:u,style:x,className:h,controlledProgress:B,progress:j||0})))},Qs=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},PS=Xs(Qs("bounce",!0));Xs(Qs("slide",!0));Xs(Qs("zoom"));Xs(Qs("flip"));const Ka=C.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=CS(e),{className:i,style:s,rtl:l,containerId:a}=e;function u(c){const f=Yt("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":l});return De(i)?i({position:c,rtl:l,defaultClassName:f}):Yt(f,bi(i))}return C.useEffect(()=>{t&&(t.current=r.current)},[]),z.createElement("div",{ref:r,className:"Toastify",id:a},n((c,f)=>{const g=f.length?{...s}:{...s,pointerEvents:"none"};return z.createElement("div",{className:u(c),style:g,key:`container-${c}`},f.map((y,v)=>{let{content:w,props:E}=y;return z.createElement($S,{...E,isIn:o(E.toastId),style:{...E.style,"--nth":v+1,"--len":f.length},key:`toast-${E.key}`},w)}))}))});Ka.displayName="ToastContainer",Ka.defaultProps={position:"top-right",transition:PS,autoClose:5e3,closeButton:s0,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ol,yn=new Map,Wr=[],NS=1;function l0(){return""+NS++}function jS(e){return e&&(_n(e.toastId)||no(e.toastId))?e.toastId:l0()}function ro(e,t){return yn.size>0?qe.emit(0,e,t):Wr.push({content:e,options:t}),t.toastId}function ds(e,t){return{...t,type:t&&t.type||e,toastId:jS(t)}}function ai(e){return(t,n)=>ro(t,ds(e,n))}function ee(e,t){return ro(e,ds("default",t))}ee.loading=(e,t)=>ro(e,ds("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ee.promise=function(e,t,n){let r,{pending:o,error:i,success:s}=t;o&&(r=_n(o)?ee.loading(o,n):ee.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(c,f,g)=>{if(f==null)return void ee.dismiss(r);const y={type:c,...l,...n,data:g},v=_n(f)?{render:f}:f;return r?ee.update(r,{...y,...v}):ee(v.render,{...y,...v}),g},u=De(e)?e():e;return u.then(c=>a("success",s,c)).catch(c=>a("error",i,c)),u},ee.success=ai("success"),ee.info=ai("info"),ee.error=ai("error"),ee.warning=ai("warning"),ee.warn=ee.warning,ee.dark=(e,t)=>ro(e,ds("default",{theme:"dark",...t})),ee.dismiss=e=>{yn.size>0?qe.emit(1,e):Wr=Wr.filter(t=>e!=null&&t.options.toastId!==e)},ee.clearWaitingQueue=function(e){return e===void 0&&(e={}),qe.emit(5,e)},ee.isActive=e=>{let t=!1;return yn.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},ee.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,o){let{containerId:i}=o;const s=yn.get(i||Ol);return s&&s.getToast(r)}(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:l0()};i.toastId!==e&&(i.staleId=e);const s=i.render||o;delete i.render,ro(s,i)}},0)},ee.done=e=>{ee.update(e,{progress:1})},ee.onChange=e=>(qe.on(4,e),()=>{qe.off(4,e)}),ee.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ee.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},qe.on(2,e=>{Ol=e.containerId||e,yn.set(Ol,e),Wr.forEach(t=>{qe.emit(0,t.content,t.options)}),Wr=[]}).on(3,e=>{yn.delete(e.containerId||e),yn.size===0&&qe.off(0).off(1).off(5)});function TS(){return p.jsx(RS,{children:p.jsx(Ka,{className:"toaster",bodyClassName:"body-toast"})})}const RS=O.div`
    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${d.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
  
`;function bS(){const{isModeAdmin:e,setIsModeAdmin:t}=C.useContext(ke),n=()=>{e||ee.info("Mode admin activé",{icon:p.jsx(jw,{size:30}),theme:"dark",position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t(!e)};return p.jsxs(zS,{children:[p.jsx(xS,{isChecked:e,labelIfChecked:"DÉSACTIVER LE MODE ADMIN",labelIfUnchecked:"ACTIVER LE MODE ADMIN",onToggle:n}),p.jsx(yS,{}),p.jsx(TS,{})]})}const zS=O.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 767px) {
      transform: scale(0.8);
      max-width: 100%;
      align-items: center;
      justify-content: right;
      margin-left: -40px;
    }

    @media(min-width: 768px) and (max-width: 1388px) { 
      max-width: 100%;
      margin-left: 0px;
    }

  
`;function _S(){const{setCurrentPage:e,currentPage:t}=C.useContext(ke),n=()=>{e("invoices")},r=()=>{e("customers")};return p.jsxs(OS,{children:[p.jsx("span",{className:`link ${t==="invoices"&&"activeLink"}`,id:"invoices",onClick:n,children:"Commandes"}),p.jsx("span",{className:`link ${t==="customers"&&"activeLink"}`,id:"customers",onClick:r,children:"Clients"})]})}const OS=O.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${d.fonts.family.stylish};
    font-size: ${d.fonts.size.P4};
    font-weight: ${d.fonts.weights.semiBold};
    color: ${d.colors.background_dark};
    .link {
        padding: 0 10px;
        &:hover {
            cursor: pointer;
            color: ${d.colors.background_dark};
            font-size: ${d.fonts.size.P5};
            font-weight: ${d.fonts.weights.bold};
        }
        &:active {
            color: ${d.colors.primary};

        }

    }
    .activeLink{
        color: ${d.colors.primary};
    }

    @media(max-width: 767px) {
        font-size: ${d.fonts.size.P0};
        .link {
            padding: 0 5px;
            &:hover {
            font-size: ${d.fonts.size.P1};
        }
    }

    @media(min-width: 768px) and (max-width: 1388px) { 
        font-size: ${d.fonts.size.P2};
        .link {
            padding: 0 5px;
            &:hover {
            font-size: ${d.fonts.size.P1};
            }
        }
    }
}
`;function IS(){return p.jsxs(AS,{children:[p.jsx(Hm,{onClick:gS,className:"logo-order-page"}),p.jsx(_S,{}),p.jsx(bS,{})]})}const AS=O.div`
    user-select: none;
    border: solid 2px ${d.colors.primary} ;
    background-color: ${d.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${d.borderRadius.extraRound};
    border-top-right-radius: ${d.borderRadius.extraRound};
    border-bottom: 1px solid ${d.colors.greyLight};
    
    .logo-order-page {
      cursor: pointer;
    }
    @media(max-width: 767px) {
      padding: 0 5px;
      justify-content: none;
      .logo-order-page {
        display: none;
      }
    }
   
`,LS=()=>{const[e,t]=C.useState(),[n,r]=C.useState(No),[o,i]=C.useState(No),[s,l]=C.useState([]);return{resetCategoryAndProducts:async(y,v,w)=>{await L2(y);const E=await Mm(y);v(E);const m=await Bm(y);w(m)},products:e,setProducts:t,addProduct:async(y,v,w)=>{let E;await Q2(y,v).then(x=>{E=x});const m=tt(e),h=Us(E,m);t(h)},deleteProduct:async y=>{await X2(y);const v=tt(e),w=Bs(y,v);t(w)},editProduct:y=>{const v=tt(e),w=wr(y.id,e);v[w]=y,t(v),Y2(y)},deleteProductsFromCategory:y=>{const v=tt(e),w=mw(y,v);t(w)},selectedProduct:n,setSelectedProduct:r,newProduct:o,setNewProduct:i,filteredProducts:s,setFilteredProducts:l}},MS=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(0);return{basket:e,addBasketProduct:async(s,l)=>{let a,u,c=tt(e);const f=hw(s.id,e);if(f){const g={...f,quantity:f.quantity+=1},y=wr(g.id,c);c[y]=g,u=c,await Ri(l,l.customer,u).then(v=>{a=v})}else{const g={productName:s.title,productPrice:s.price,productId:s.id,imageSource:s.imageSource,quantity:1};u=Us(g,c),await Ri(l,l.customer,u).then(y=>{a=y})}t(a.invoiceLines),r(a.total)},deleteBasketProduct:async(s,l)=>{let a;const u={id:s,quantity:0,productPrice:0},c=tt(e),f=wr(s,c);c[f]=u,await Ri(l,l.customer,c).then(g=>{a=g}),t(a.invoiceLines),r(a.total)},setBasket:t,totalBasket:n,setTotalBasket:r}},FS=()=>{const[e,t]=C.useState(),[n,r]=C.useState(null),[o,i]=C.useState(Zm);return{addCategory:async(a,u)=>{let c;await I2(a,u).then(y=>{c=y});const f=tt(e),g=Us(c,f);t(g)},categories:e,setCategories:t,selectedCategory:n,setSelectedCategory:r,newCategory:o,setNewCategory:i,deleteCategory:async a=>{await O2(a);const u=tt(e),c=Bs(a,u);t(c)}}},DS=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(cs),[o,i]=C.useState(cs);return{resetCustomers:async c=>{await Fm(c);const f=await Dm(c);t(f)},customers:e,setCustomers:t,deleteCustomer:async c=>{await M2(c);const f=tt(e),g=Bs(c,f);t(g)},selectedCustomer:n,setSelectedCustomer:r,addCustomer:async(c,f)=>{let g;await F2(c,f).then(w=>{g=w});const y=tt(e),v=Us(g,y);t(v)},editCustomer:(c,f)=>{const g=tt(e),y=wr(c.id,e);g[y]=c,t(g),D2(c,f)},newCustomer:o,setNewCustomer:i}};function BS(e){const t=atob(e),n=new Blob([new Uint8Array([...t].map(o=>o.charCodeAt(0)))],{type:"application/pdf"});return URL.createObjectURL(n)}const US=()=>{const[e,t]=C.useState([]),[n,r]=C.useState(),[o,i]=C.useState();return{getPdf:async c=>{let f;await U2(c).then(y=>{f=y});const g=await BS(f);window.open(g,"_blank")},invoices:e,setInvoices:t,editInvoice:(c,f,g)=>{r(f),Ri(c,f,g)},customer:n,setCustomer:r,invoice:o,setInvoice:i,deleteInvoice:async c=>{await V2(c);const f=tt(e),g=Bs(c,f);t(g)},createInvoice:async(c,f)=>{let g;await W2(c).then(y=>{g=y}),f(g.id)}}};function HS(){const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState("invoices"),[s,l]=C.useState("add"),a=C.useRef(),{invoices:u,setInvoices:c,editInvoice:f,customer:g,setCustomer:y,invoice:v,setInvoice:w,deleteInvoice:E,createInvoice:m,getPdf:h}=US(),{deleteProductsFromCategory:x,products:S,addProduct:k,deleteProduct:j,editProduct:P,setProducts:R,resetCategoryAndProducts:D,selectedProduct:A,setSelectedProduct:X,newProduct:J,setNewProduct:ae,filteredProducts:se,setFilteredProducts:Te}=LS(),{basket:L,addBasketProduct:B,deleteBasketProduct:T,setBasket:_,totalBasket:I,setTotalBasket:Q}=MS(),{categories:Z,setCategories:Ke,selectedCategory:Re,setSelectedCategory:yt,newCategory:be,setNewCategory:Ae,deleteCategory:Tr,addCategory:Ln}=FS(),{setCustomers:lt,customers:gc,deleteCustomer:a0,selectedCustomer:u0,setSelectedCustomer:yc,addCustomer:c0,editCustomer:d0,resetCustomers:f0,newCustomer:p0,setNewCustomer:h0}=DS(),{username:vc}=Uh(),[xc,wc]=C.useState(),[m0,g0]=C.useState("1"),y0=async fn=>{const Ys=Wa(fn,S);await r(!1),await l("edit"),await X(Ys),a.current.focus()},v0=async fn=>{const Ys=Wa(fn,gc);await r(!1),await l("edit"),await yc(Ys),a.current.focus()},x0=async()=>{const fn=await tw(wc,vc);await J2(fn,Ke),await uf(fn,lt),await K2(fn,R)};C.useEffect(()=>{x0()},[xc]);const w0={filteredProducts:se,setFilteredProducts:Te,setTotalBasket:Q,totalBasket:I,resetCustomers:f0,resetCategoryAndProducts:D,createInvoice:m,initialiseBasket:Z2,initialiseInvoice:ew,initialiseCustomers:uf,deleteInvoice:E,selectCustomer:v0,editCustomer:d0,addCustomer:c0,currentPage:o,setCurrentPage:i,selectedCustomer:u0,setSelectedCustomer:yc,deleteCustomer:a0,invoice:v,setInvoice:w,invoices:u,setInvoices:c,editInvoice:f,customer:g,setCustomer:y,setCustomers:lt,customers:gc,deleteProductsFromCategory:x,deleteCategory:Tr,newCategory:be,setNewCategory:Ae,categories:Z,setCategories:Ke,invoiceId:m0,setInvoiceId:g0,username:vc,userId:xc,setUserId:wc,isModeAdmin:e,setIsModeAdmin:t,isCollapsed:n,setIsCollapsed:r,currentTabSelected:s,setCurrentTabSelected:l,products:S,setProducts:R,addProduct:k,deleteProduct:j,newProduct:J,setNewProduct:ae,newCustomer:p0,setNewCustomer:h0,selectedProduct:A,setSelectedProduct:X,editProduct:P,titleEditRef:a,basket:L,addBasketProduct:B,deleteBasketProduct:T,selectProduct:y0,setBasket:_,selectedCategory:Re,setSelectedCategory:yt,addCategory:Ln,getPdf:h};return p.jsx(ke.Provider,{value:w0,children:p.jsx(VS,{children:p.jsxs("div",{className:"container",children:[p.jsx(IS,{}),p.jsx(hS,{})]})})})}const VS=O.div`  
  background: 
  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('/images/background.png') fixed center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${d.borderRadius.extraRound}
  }  

  @media(max-width: 1388px) {
    padding: 0 0px;
    min-height: 100vh;
    max-height: none;
    max-width: 100%;

    .container {
      max-width: 100%;
      width: 100%;
      max-height: none;
      padding: 0 5px;
    }
  }
`;function WS(){return p.jsxs(Oy,{children:[p.jsx(Si,{path:"/",element:p.jsx(uw,{})}),p.jsx(Si,{path:"/order/:username",element:p.jsx(HS,{})}),p.jsx(Si,{path:"*",element:p.jsx(dw,{})})]})}Il.createRoot(document.getElementById("root")).render(p.jsx(z.StrictMode,{children:p.jsx(Dy,{children:p.jsx(WS,{})})}));
