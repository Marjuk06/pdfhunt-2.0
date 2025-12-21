(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function xy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Xh={exports:{}},ka={},Yh={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function f1(){if(Om)return ze;Om=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function q(O,$,ue){this.props=O,this.context=$,this.refs=Y,this.updater=ue||B}q.prototype.isReactComponent={},q.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Ie(){}Ie.prototype=q.prototype;function fe(O,$,ue){this.props=O,this.context=$,this.refs=Y,this.updater=ue||B}var pe=fe.prototype=new Ie;pe.constructor=fe,Q(pe,q.prototype),pe.isPureReactComponent=!0;var xe=Array.isArray,Oe=Object.prototype.hasOwnProperty,ke={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,$,ue){var Ae,Ve={},Me=null,Fe=null;if($!=null)for(Ae in $.ref!==void 0&&(Fe=$.ref),$.key!==void 0&&(Me=""+$.key),$)Oe.call($,Ae)&&!N.hasOwnProperty(Ae)&&(Ve[Ae]=$[Ae]);var qe=arguments.length-2;if(qe===1)Ve.children=ue;else if(1<qe){for(var Ye=Array(qe),ht=0;ht<qe;ht++)Ye[ht]=arguments[ht+2];Ve.children=Ye}if(O&&O.defaultProps)for(Ae in qe=O.defaultProps,qe)Ve[Ae]===void 0&&(Ve[Ae]=qe[Ae]);return{$$typeof:i,type:O,key:Me,ref:Fe,props:Ve,_owner:ke.current}}function S(O,$){return{$$typeof:i,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return $[ue]})}var C=/\/+/g;function k(O,$){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):$.toString(36)}function tt(O,$,ue,Ae,Ve){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Me){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case i:case e:Fe=!0}}if(Fe)return Fe=O,Ve=Ve(Fe),O=Ae===""?"."+k(Fe,0):Ae,xe(Ve)?(ue="",O!=null&&(ue=O.replace(C,"$&/")+"/"),tt(Ve,$,ue,"",function(ht){return ht})):Ve!=null&&(b(Ve)&&(Ve=S(Ve,ue+(!Ve.key||Fe&&Fe.key===Ve.key?"":(""+Ve.key).replace(C,"$&/")+"/")+O)),$.push(Ve)),1;if(Fe=0,Ae=Ae===""?".":Ae+":",xe(O))for(var qe=0;qe<O.length;qe++){Me=O[qe];var Ye=Ae+k(Me,qe);Fe+=tt(Me,$,ue,Ye,Ve)}else if(Ye=R(O),typeof Ye=="function")for(O=Ye.call(O),qe=0;!(Me=O.next()).done;)Me=Me.value,Ye=Ae+k(Me,qe++),Fe+=tt(Me,$,ue,Ye,Ve);else if(Me==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Fe}function ot(O,$,ue){if(O==null)return O;var Ae=[],Ve=0;return tt(O,Ae,"","",function(Me){return $.call(ue,Me,Ve++)}),Ae}function wt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var je={current:null},Z={transition:null},me={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:ke};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ze.Children={map:ot,forEach:function(O,$,ue){ot(O,function(){$.apply(this,arguments)},ue)},count:function(O){var $=0;return ot(O,function(){$++}),$},toArray:function(O){return ot(O,function($){return $})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ze.Component=q,ze.Fragment=t,ze.Profiler=o,ze.PureComponent=fe,ze.StrictMode=s,ze.Suspense=y,ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,ze.act=ne,ze.cloneElement=function(O,$,ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=Q({},O.props),Ve=O.key,Me=O.ref,Fe=O._owner;if($!=null){if($.ref!==void 0&&(Me=$.ref,Fe=ke.current),$.key!==void 0&&(Ve=""+$.key),O.type&&O.type.defaultProps)var qe=O.type.defaultProps;for(Ye in $)Oe.call($,Ye)&&!N.hasOwnProperty(Ye)&&(Ae[Ye]=$[Ye]===void 0&&qe!==void 0?qe[Ye]:$[Ye])}var Ye=arguments.length-2;if(Ye===1)Ae.children=ue;else if(1<Ye){qe=Array(Ye);for(var ht=0;ht<Ye;ht++)qe[ht]=arguments[ht+2];Ae.children=qe}return{$$typeof:i,type:O.type,key:Ve,ref:Me,props:Ae,_owner:Fe}},ze.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},ze.createElement=I,ze.createFactory=function(O){var $=I.bind(null,O);return $.type=O,$},ze.createRef=function(){return{current:null}},ze.forwardRef=function(O){return{$$typeof:m,render:O}},ze.isValidElement=b,ze.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:wt}},ze.memo=function(O,$){return{$$typeof:w,type:O,compare:$===void 0?null:$}},ze.startTransition=function(O){var $=Z.transition;Z.transition={};try{O()}finally{Z.transition=$}},ze.unstable_act=ne,ze.useCallback=function(O,$){return je.current.useCallback(O,$)},ze.useContext=function(O){return je.current.useContext(O)},ze.useDebugValue=function(){},ze.useDeferredValue=function(O){return je.current.useDeferredValue(O)},ze.useEffect=function(O,$){return je.current.useEffect(O,$)},ze.useId=function(){return je.current.useId()},ze.useImperativeHandle=function(O,$,ue){return je.current.useImperativeHandle(O,$,ue)},ze.useInsertionEffect=function(O,$){return je.current.useInsertionEffect(O,$)},ze.useLayoutEffect=function(O,$){return je.current.useLayoutEffect(O,$)},ze.useMemo=function(O,$){return je.current.useMemo(O,$)},ze.useReducer=function(O,$,ue){return je.current.useReducer(O,$,ue)},ze.useRef=function(O){return je.current.useRef(O)},ze.useState=function(O){return je.current.useState(O)},ze.useSyncExternalStore=function(O,$,ue){return je.current.useSyncExternalStore(O,$,ue)},ze.useTransition=function(){return je.current.useTransition()},ze.version="18.3.1",ze}var Mm;function Md(){return Mm||(Mm=1,Yh.exports=f1()),Yh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function p1(){if(Lm)return ka;Lm=1;var i=Md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,w){var T,A={},R=null,B=null;w!==void 0&&(R=""+w),y.key!==void 0&&(R=""+y.key),y.ref!==void 0&&(B=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(A[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)A[T]===void 0&&(A[T]=y[T]);return{$$typeof:e,type:m,key:R,ref:B,props:A,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var jm;function m1(){return jm||(jm=1,Xh.exports=p1()),Xh.exports}var v=m1(),ce=Md();const g1=xy(ce);var ku={},Jh={exports:{}},wn={},Zh={exports:{}},ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function y1(){return Fm||(Fm=1,(function(i){function e(Z,me){var ne=Z.length;Z.push(me);e:for(;0<ne;){var O=ne-1>>>1,$=Z[O];if(0<o($,me))Z[O]=me,Z[ne]=$,ne=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var me=Z[0],ne=Z.pop();if(ne!==me){Z[0]=ne;e:for(var O=0,$=Z.length,ue=$>>>1;O<ue;){var Ae=2*(O+1)-1,Ve=Z[Ae],Me=Ae+1,Fe=Z[Me];if(0>o(Ve,ne))Me<$&&0>o(Fe,Ve)?(Z[O]=Fe,Z[Me]=ne,O=Me):(Z[O]=Ve,Z[Ae]=ne,O=Ae);else if(Me<$&&0>o(Fe,ne))Z[O]=Fe,Z[Me]=ne,O=Me;else break e}}return me}function o(Z,me){var ne=Z.sortIndex-me.sortIndex;return ne!==0?ne:Z.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],w=[],T=1,A=null,R=3,B=!1,Q=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,Ie=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(Z){for(var me=t(w);me!==null;){if(me.callback===null)s(w);else if(me.startTime<=Z)s(w),me.sortIndex=me.expirationTime,e(y,me);else break;me=t(w)}}function xe(Z){if(Y=!1,pe(Z),!Q)if(t(y)!==null)Q=!0,wt(Oe);else{var me=t(w);me!==null&&je(xe,me.startTime-Z)}}function Oe(Z,me){Q=!1,Y&&(Y=!1,Ie(I),I=-1),B=!0;var ne=R;try{for(pe(me),A=t(y);A!==null&&(!(A.expirationTime>me)||Z&&!D());){var O=A.callback;if(typeof O=="function"){A.callback=null,R=A.priorityLevel;var $=O(A.expirationTime<=me);me=i.unstable_now(),typeof $=="function"?A.callback=$:A===t(y)&&s(y),pe(me)}else s(y);A=t(y)}if(A!==null)var ue=!0;else{var Ae=t(w);Ae!==null&&je(xe,Ae.startTime-me),ue=!1}return ue}finally{A=null,R=ne,B=!1}}var ke=!1,N=null,I=-1,S=5,b=-1;function D(){return!(i.unstable_now()-b<S)}function C(){if(N!==null){var Z=i.unstable_now();b=Z;var me=!0;try{me=N(!0,Z)}finally{me?k():(ke=!1,N=null)}}else ke=!1}var k;if(typeof fe=="function")k=function(){fe(C)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ot=tt.port2;tt.port1.onmessage=C,k=function(){ot.postMessage(null)}}else k=function(){q(C,0)};function wt(Z){N=Z,ke||(ke=!0,k())}function je(Z,me){I=q(function(){Z(i.unstable_now())},me)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Q||B||(Q=!0,wt(Oe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var me=3;break;default:me=R}var ne=R;R=me;try{return Z()}finally{R=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,me){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=R;R=Z;try{return me()}finally{R=ne}},i.unstable_scheduleCallback=function(Z,me,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,Z={id:T++,callback:me,priorityLevel:Z,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(Z.sortIndex=ne,e(w,Z),t(y)===null&&Z===t(w)&&(Y?(Ie(I),I=-1):Y=!0,je(xe,ne-O))):(Z.sortIndex=$,e(y,Z),Q||B||(Q=!0,wt(Oe))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var me=R;return function(){var ne=R;R=me;try{return Z.apply(this,arguments)}finally{R=ne}}}})(ed)),ed}var Um;function v1(){return Um||(Um=1,Zh.exports=y1()),Zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function _1(){if(zm)return wn;zm=1;var i=Md(),e=v1();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},A={};function R(n){return y.call(A,n)?!0:y.call(T,n)?!1:w.test(n)?A[n]=!0:(T[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ie=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Ie,fe);q[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Ie,fe);q[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Ie,fe);q[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function pe(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?R(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var xe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oe=Symbol.for("react.element"),ke=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ue=!1;function Ae(n,r){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,x=p.length-1;1<=_&&0<=x&&d[_]!==p[x];)x--;for(;1<=_&&0<=x;_--,x--)if(d[_]!==p[x]){if(_!==1||x!==1)do if(_--,x--,0>x||d[_]!==p[x]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=x);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ve(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ke:return"Portal";case S:return"Profiler";case I:return"StrictMode";case k:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case C:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ot:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case wt:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function Fe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function qe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ye(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ht(n){var r=Ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function un(n){n._valueTracker||(n._valueTracker=ht(n))}function fr(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Ye(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Tn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Dn(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function In(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=qe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pr(n,r){r=r.checked,r!=null&&pe(n,"checked",r,!1)}function Bt(n,r){pr(n,r);var a=qe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Vn(n,r.type,a):r.hasOwnProperty("defaultValue")&&Vn(n,r.type,qe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function xn(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Vn(n,r,a){(r!=="number"||Tn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Re=Array.isArray;function at(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+qe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ot(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ct(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Re(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:qe(a)}}function he(n,r){var a=qe(r.value),c=qe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Le(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function be(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?be(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cn,ai=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(cn=cn||document.createElement("div"),cn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=cn.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Yn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vr=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(n){Vr.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Dr[r]=Dr[n]})});function ns(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Dr.hasOwnProperty(n)&&Dr[n]?(""+r).trim():r+"px"}function rs(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ns(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var li=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(n,r){if(r){if(li[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function is(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Or=null;function ci(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hi=null,hn=null,On=null;function di(n){if(n=ca(n)){if(typeof hi!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ul(r),hi(n.stateNode,n.type,r))}}function Mn(n){hn?On?On.push(n):On=[n]:hn=n}function ss(){if(hn){var n=hn,r=On;if(On=hn=null,di(n),r)for(n=0;n<r.length;n++)di(r[n])}}function Mr(n,r){return n(r)}function os(){}var Ln=!1;function fi(n,r,a){if(Ln)return n(r,a);Ln=!0;try{return Mr(n,r,a)}finally{Ln=!1,(hn!==null||On!==null)&&(os(),ss())}}function dt(n,r){var a=n.stateNode;if(a===null)return null;var c=Ul(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var F=!1;if(m)try{var ee={};Object.defineProperty(ee,"passive",{get:function(){F=!0}}),window.addEventListener("test",ee,ee),window.removeEventListener("test",ee,ee)}catch{F=!1}function se(n,r,a,c,d,p,_,x,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(G){this.onError(G)}}var _e=!1,Be=null,rt=!1,ft=null,jn={onError:function(n){_e=!0,Be=n}};function Pt(n,r,a,c,d,p,_,x,P){_e=!1,Be=null,se.apply(jn,arguments)}function dn(n,r,a,c,d,p,_,x,P){if(Pt.apply(this,arguments),_e){if(_e){var U=Be;_e=!1,Be=null}else throw Error(t(198));rt||(rt=!0,ft=U)}}function kn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function as(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Jn(n){if(kn(n)!==n)throw Error(t(188))}function dl(n){var r=n.alternate;if(!r){if(r=kn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Jn(d),n;if(p===c)return Jn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,x=d.child;x;){if(x===a){_=!0,a=d,c=p;break}if(x===c){_=!0,c=d,a=p;break}x=x.sibling}if(!_){for(x=p.child;x;){if(x===a){_=!0,a=p,c=d;break}if(x===c){_=!0,c=p,a=d;break}x=x.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function qo(n){return n=dl(n),n!==null?Us(n):null}function Us(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Us(n);if(r!==null)return r;n=n.sibling}return null}var zs=e.unstable_scheduleCallback,Wo=e.unstable_cancelCallback,fl=e.unstable_shouldYield,kc=e.unstable_requestPaint,it=e.unstable_now,pl=e.unstable_getCurrentPriorityLevel,ls=e.unstable_ImmediatePriority,pi=e.unstable_UserBlockingPriority,Fn=e.unstable_NormalPriority,Go=e.unstable_LowPriority,ml=e.unstable_IdlePriority,us=null,Sn=null;function gl(n){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(us,n,void 0,(n.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:vl,Ko=Math.log,yl=Math.LN2;function vl(n){return n>>>=0,n===0?32:31-(Ko(n)/yl|0)|0}var Bs=64,$s=4194304;function mi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cs(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var x=_&~d;x!==0?c=mi(x):(p&=_,p!==0&&(c=mi(p)))}else _=a&~d,_!==0?c=mi(_):p!==0&&(c=mi(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-sn(r),d=1<<a,c|=n[a],r&=~d;return c}function Sc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-sn(p),x=1<<_,P=d[_];P===-1?((x&a)===0||(x&c)!==0)&&(d[_]=Sc(x,r)):P<=r&&(n.expiredLanes|=x),p&=~x}}function An(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function hs(){var n=Bs;return Bs<<=1,(Bs&4194240)===0&&(Bs=64),n}function gi(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function yi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-sn(r),n[r]=a}function nt(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-sn(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function vi(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-sn(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var We=0;function _i(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var _l,Hs,wl,El,Tl,Qo=!1,mr=[],$t=null,Zn=null,er=null,wi=new Map,Un=new Map,gr=[],Ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(n,r){switch(n){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":wi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(r.pointerId)}}function fn(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&Hs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Cc(n,r,a,c,d){switch(r){case"focusin":return $t=fn($t,n,r,a,c,d),!0;case"dragenter":return Zn=fn(Zn,n,r,a,c,d),!0;case"mouseover":return er=fn(er,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return wi.set(p,fn(wi.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Un.set(p,fn(Un.get(p)||null,n,r,a,c,d)),!0}return!1}function xl(n){var r=gs(n.target);if(r!==null){var a=kn(r);if(a!==null){if(r=a.tag,r===13){if(r=as(a),r!==null){n.blockedOn=r,Tl(n.priority,function(){wl(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=qs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Or=c,a.target.dispatchEvent(c),Or=null}else return r=ca(a),r!==null&&Hs(r),n.blockedOn=a,!1;r.shift()}return!0}function ds(n,r,a){jr(n)&&a.delete(r)}function kl(){Qo=!1,$t!==null&&jr($t)&&($t=null),Zn!==null&&jr(Zn)&&(Zn=null),er!==null&&jr(er)&&(er=null),wi.forEach(ds),Un.forEach(ds)}function tr(n,r){n.blockedOn===r&&(n.blockedOn=null,Qo||(Qo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kl)))}function nr(n){function r(d){return tr(d,n)}if(0<mr.length){tr(mr[0],n);for(var a=1;a<mr.length;a++){var c=mr[a];c.blockedOn===n&&(c.blockedOn=null)}}for($t!==null&&tr($t,n),Zn!==null&&tr(Zn,n),er!==null&&tr(er,n),wi.forEach(r),Un.forEach(r),a=0;a<gr.length;a++)c=gr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)xl(a),a.blockedOn===null&&gr.shift()}var Fr=xe.ReactCurrentBatchConfig,Ei=!0;function pt(n,r,a,c){var d=We,p=Fr.transition;Fr.transition=null;try{We=1,Xo(n,r,a,c)}finally{We=d,Fr.transition=p}}function Pc(n,r,a,c){var d=We,p=Fr.transition;Fr.transition=null;try{We=4,Xo(n,r,a,c)}finally{We=d,Fr.transition=p}}function Xo(n,r,a,c){if(Ei){var d=qs(n,r,a,c);if(d===null)Uc(n,r,c,fs,a),Il(n,c);else if(Cc(d,n,r,a,c))c.stopPropagation();else if(Il(n,c),r&4&&-1<Ac.indexOf(n)){for(;d!==null;){var p=ca(d);if(p!==null&&_l(p),p=qs(n,r,a,c),p===null&&Uc(n,r,c,fs,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Uc(n,r,c,null,a)}}var fs=null;function qs(n,r,a,c){if(fs=null,n=ci(c),n=gs(n),n!==null)if(r=kn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=as(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return fs=n,null}function Yo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pl()){case ls:return 1;case pi:return 4;case Fn:case Go:return 16;case ml:return 536870912;default:return 16}default:return 16}}var Cn=null,Ws=null,pn=null;function Jo(){if(pn)return pn;var n,r=Ws,a=r.length,c,d="value"in Cn?Cn.value:Cn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return pn=d.slice(n,1<c?1-c:void 0)}function Gs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function yr(){return!0}function Zo(){return!1}function Ht(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var x in n)n.hasOwnProperty(x)&&(a=n[x],this[x]=a?a(p):p[x]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?yr:Zo,this.isPropagationStopped=Zo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),r}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Ht(rr),vr=ne({},rr,{view:0,detail:0}),Rc=Ht(vr),Qs,Ur,Ti,ps=ne({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_r,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ti&&(Ti&&n.type==="mousemove"?(Qs=n.screenX-Ti.screenX,Ur=n.screenY-Ti.screenY):Ur=Qs=0,Ti=n),Qs)},movementY:function(n){return"movementY"in n?n.movementY:Ur}}),Xs=Ht(ps),ea=ne({},ps,{dataTransfer:0}),Sl=Ht(ea),Ys=ne({},vr,{relatedTarget:0}),Js=Ht(Ys),Al=ne({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),zr=Ht(Al),Cl=ne({},rr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pl=Ht(Cl),Rl=ne({},rr,{data:0}),ta=Ht(Rl),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},on={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=bl[n])?!!r[n]:!1}function _r(){return Nl}var l=ne({},vr,{key:function(n){if(n.key){var r=Zs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Gs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?on[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_r,charCode:function(n){return n.type==="keypress"?Gs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Gs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ht(l),g=ne({},ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ht(g),M=ne({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_r}),z=Ht(M),te=ne({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),et=Ht(te),Rt=ne({},ps,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ge=Ht(Rt),Mt=[9,13,27,32],xt=m&&"CompositionEvent"in window,zn=null;m&&"documentMode"in document&&(zn=document.documentMode);var Pn=m&&"TextEvent"in window&&!zn,ms=m&&(!xt||zn&&8<zn&&11>=zn),eo=" ",Pf=!1;function Rf(n,r){switch(n){case"keyup":return Mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var to=!1;function c_(n,r){switch(n){case"compositionend":return bf(r);case"keypress":return r.which!==32?null:(Pf=!0,eo);case"textInput":return n=r.data,n===eo&&Pf?null:n;default:return null}}function h_(n,r){if(to)return n==="compositionend"||!xt&&Rf(n,r)?(n=Jo(),pn=Ws=Cn=null,to=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ms&&r.locale!=="ko"?null:r.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!d_[n.type]:r==="textarea"}function Df(n,r,a,c){Mn(c),r=Ll(r,"onChange"),0<r.length&&(a=new Ks("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function f_(n){Yf(n,0)}function Dl(n){var r=oo(n);if(fr(r))return n}function p_(n,r){if(n==="change")return r}var Vf=!1;if(m){var bc;if(m){var Nc="oninput"in document;if(!Nc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Nc=typeof Of.oninput=="function"}bc=Nc}else bc=!1;Vf=bc&&(!document.documentMode||9<document.documentMode)}function Mf(){na&&(na.detachEvent("onpropertychange",Lf),ra=na=null)}function Lf(n){if(n.propertyName==="value"&&Dl(ra)){var r=[];Df(r,ra,n,ci(n)),fi(f_,r)}}function m_(n,r,a){n==="focusin"?(Mf(),na=r,ra=a,na.attachEvent("onpropertychange",Lf)):n==="focusout"&&Mf()}function g_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(ra)}function y_(n,r){if(n==="click")return Dl(r)}function v_(n,r){if(n==="input"||n==="change")return Dl(r)}function __(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ir=typeof Object.is=="function"?Object.is:__;function ia(n,r){if(ir(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!ir(n[d],r[d]))return!1}return!0}function jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ff(n,r){var a=jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function Uf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Uf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zf(){for(var n=window,r=Tn();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Tn(n.document)}return r}function Dc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function w_(n){var r=zf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Uf(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Ff(a,p);var _=Ff(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E_=m&&"documentMode"in document&&11>=document.documentMode,no=null,Vc=null,sa=null,Oc=!1;function Bf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||no==null||no!==Tn(c)||(c=no,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Ll(Vc,"onSelect"),0<c.length&&(r=new Ks("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=no)))}function Vl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ro={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Mc={},$f={};m&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Ol(n){if(Mc[n])return Mc[n];if(!ro[n])return n;var r=ro[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in $f)return Mc[n]=r[a];return n}var Hf=Ol("animationend"),qf=Ol("animationiteration"),Wf=Ol("animationstart"),Gf=Ol("transitionend"),Kf=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(n,r){Kf.set(n,r),u(r,[n])}for(var Lc=0;Lc<Qf.length;Lc++){var jc=Qf[Lc],T_=jc.toLowerCase(),I_=jc[0].toUpperCase()+jc.slice(1);Ii(T_,"on"+I_)}Ii(Hf,"onAnimationEnd"),Ii(qf,"onAnimationIteration"),Ii(Wf,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(Gf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x_=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Xf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,dn(c,r,void 0,n),n.currentTarget=null}function Yf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var x=c[_],P=x.instance,U=x.currentTarget;if(x=x.listener,P!==p&&d.isPropagationStopped())break e;Xf(d,x,U),p=P}else for(_=0;_<c.length;_++){if(x=c[_],P=x.instance,U=x.currentTarget,x=x.listener,P!==p&&d.isPropagationStopped())break e;Xf(d,x,U),p=P}}}if(rt)throw n=ft,rt=!1,ft=null,n}function lt(n,r){var a=r[Wc];a===void 0&&(a=r[Wc]=new Set);var c=n+"__bubble";a.has(c)||(Jf(r,n,2,!1),a.add(c))}function Fc(n,r,a){var c=0;r&&(c|=4),Jf(a,n,c,r)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(x_.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ml]||(r[Ml]=!0,Fc("selectionchange",!1,r))}}function Jf(n,r,a,c){switch(Yo(r)){case 1:var d=pt;break;case 4:d=Pc;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!F||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Uc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var x=c.stateNode.containerInfo;if(x===d||x.nodeType===8&&x.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;x!==null;){if(_=gs(x),_===null)return;if(P=_.tag,P===5||P===6){c=p=_;continue e}x=x.parentNode}}c=c.return}fi(function(){var U=p,G=ci(a),X=[];e:{var W=Kf.get(n);if(W!==void 0){var re=Ks,ae=n;switch(n){case"keypress":if(Gs(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":ae="focus",re=Js;break;case"focusout":ae="blur",re=Js;break;case"beforeblur":case"afterblur":re=Js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=z;break;case Hf:case qf:case Wf:re=zr;break;case Gf:re=et;break;case"scroll":re=Rc;break;case"wheel":re=Ge;break;case"copy":case"cut":case"paste":re=Pl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=E}var de=(r&4)!==0,Tt=!de&&n==="scroll",L=de?W!==null?W+"Capture":null:W;de=[];for(var V=U,j;V!==null;){j=V;var J=j.stateNode;if(j.tag===5&&J!==null&&(j=J,L!==null&&(J=dt(V,L),J!=null&&de.push(la(V,J,j)))),Tt)break;V=V.return}0<de.length&&(W=new re(W,ae,null,a,G),X.push({event:W,listeners:de}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",W&&a!==Or&&(ae=a.relatedTarget||a.fromElement)&&(gs(ae)||ae[Br]))break e;if((re||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=U,ae=ae?gs(ae):null,ae!==null&&(Tt=kn(ae),ae!==Tt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=U),re!==ae)){if(de=Xs,J="onMouseLeave",L="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(de=E,J="onPointerLeave",L="onPointerEnter",V="pointer"),Tt=re==null?W:oo(re),j=ae==null?W:oo(ae),W=new de(J,V+"leave",re,a,G),W.target=Tt,W.relatedTarget=j,J=null,gs(G)===U&&(de=new de(L,V+"enter",ae,a,G),de.target=j,de.relatedTarget=Tt,J=de),Tt=J,re&&ae)t:{for(de=re,L=ae,V=0,j=de;j;j=io(j))V++;for(j=0,J=L;J;J=io(J))j++;for(;0<V-j;)de=io(de),V--;for(;0<j-V;)L=io(L),j--;for(;V--;){if(de===L||L!==null&&de===L.alternate)break t;de=io(de),L=io(L)}de=null}else de=null;re!==null&&Zf(X,W,re,de,!1),ae!==null&&Tt!==null&&Zf(X,Tt,ae,de,!0)}}e:{if(W=U?oo(U):window,re=W.nodeName&&W.nodeName.toLowerCase(),re==="select"||re==="input"&&W.type==="file")var ge=p_;else if(Nf(W))if(Vf)ge=v_;else{ge=g_;var we=m_}else(re=W.nodeName)&&re.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ge=y_);if(ge&&(ge=ge(n,U))){Df(X,ge,a,G);break e}we&&we(n,W,U),n==="focusout"&&(we=W._wrapperState)&&we.controlled&&W.type==="number"&&Vn(W,"number",W.value)}switch(we=U?oo(U):window,n){case"focusin":(Nf(we)||we.contentEditable==="true")&&(no=we,Vc=U,sa=null);break;case"focusout":sa=Vc=no=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Bf(X,a,G);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":Bf(X,a,G)}var Ee;if(xt)e:{switch(n){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else to?Rf(n,a)&&(Ce="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(ms&&a.locale!=="ko"&&(to||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&to&&(Ee=Jo()):(Cn=G,Ws="value"in Cn?Cn.value:Cn.textContent,to=!0)),we=Ll(U,Ce),0<we.length&&(Ce=new ta(Ce,n,null,a,G),X.push({event:Ce,listeners:we}),Ee?Ce.data=Ee:(Ee=bf(a),Ee!==null&&(Ce.data=Ee)))),(Ee=Pn?c_(n,a):h_(n,a))&&(U=Ll(U,"onBeforeInput"),0<U.length&&(G=new ta("onBeforeInput","beforeinput",null,a,G),X.push({event:G,listeners:U}),G.data=Ee))}Yf(X,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ll(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=dt(n,a),p!=null&&c.unshift(la(n,p,d)),p=dt(n,r),p!=null&&c.push(la(n,p,d))),n=n.return}return c}function io(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var x=a,P=x.alternate,U=x.stateNode;if(P!==null&&P===c)break;x.tag===5&&U!==null&&(x=U,d?(P=dt(a,p),P!=null&&_.unshift(la(a,P,x))):d||(P=dt(a,p),P!=null&&_.push(la(a,P,x)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var k_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(k_,`
`).replace(S_,"")}function jl(n,r,a){if(r=ep(r),ep(n)!==r&&a)throw Error(t(425))}function Fl(){}var zc=null,Bc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,A_=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,C_=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(P_)}:Hc;function P_(n){setTimeout(function(){throw n})}function qc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),nr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);nr(r)}function xi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var so=Math.random().toString(36).slice(2),wr="__reactFiber$"+so,ua="__reactProps$"+so,Br="__reactContainer$"+so,Wc="__reactEvents$"+so,R_="__reactListeners$"+so,b_="__reactHandles$"+so;function gs(n){var r=n[wr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Br]||a[wr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=np(n);n!==null;){if(a=n[wr])return a;n=np(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[wr]||n[Br],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ul(n){return n[ua]||null}var Gc=[],ao=-1;function ki(n){return{current:n}}function ut(n){0>ao||(n.current=Gc[ao],Gc[ao]=null,ao--)}function st(n,r){ao++,Gc[ao]=n.current,n.current=r}var Si={},Xt=ki(Si),mn=ki(!1),ys=Si;function lo(n,r){var a=n.type.contextTypes;if(!a)return Si;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function gn(n){return n=n.childContextTypes,n!=null}function zl(){ut(mn),ut(Xt)}function rp(n,r,a){if(Xt.current!==Si)throw Error(t(168));st(Xt,r),st(mn,a)}function ip(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Fe(n)||"Unknown",d));return ne({},a,c)}function Bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Si,ys=Xt.current,st(Xt,n),st(mn,mn.current),!0}function sp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=ip(n,r,ys),c.__reactInternalMemoizedMergedChildContext=n,ut(mn),ut(Xt),st(Xt,n)):ut(mn),st(mn,a)}var $r=null,$l=!1,Kc=!1;function op(n){$r===null?$r=[n]:$r.push(n)}function N_(n){$l=!0,op(n)}function Ai(){if(!Kc&&$r!==null){Kc=!0;var n=0,r=We;try{var a=$r;for(We=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}$r=null,$l=!1}catch(d){throw $r!==null&&($r=$r.slice(n+1)),zs(ls,Ai),d}finally{We=r,Kc=!1}}return null}var uo=[],co=0,Hl=null,ql=0,Bn=[],$n=0,vs=null,Hr=1,qr="";function _s(n,r){uo[co++]=ql,uo[co++]=Hl,Hl=n,ql=r}function ap(n,r,a){Bn[$n++]=Hr,Bn[$n++]=qr,Bn[$n++]=vs,vs=n;var c=Hr;n=qr;var d=32-sn(c)-1;c&=~(1<<d),a+=1;var p=32-sn(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Hr=1<<32-sn(r)+d|a<<d|c,qr=p+n}else Hr=1<<p|a<<d|c,qr=n}function Qc(n){n.return!==null&&(_s(n,1),ap(n,1,0))}function Xc(n){for(;n===Hl;)Hl=uo[--co],uo[co]=null,ql=uo[--co],uo[co]=null;for(;n===vs;)vs=Bn[--$n],Bn[$n]=null,qr=Bn[--$n],Bn[$n]=null,Hr=Bn[--$n],Bn[$n]=null}var Rn=null,bn=null,mt=!1,sr=null;function lp(n,r){var a=Gn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function up(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Rn=n,bn=xi(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Rn=n,bn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=vs!==null?{id:Hr,overflow:qr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Gn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Rn=n,bn=null,!0):!1;default:return!1}}function Yc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(mt){var r=bn;if(r){var a=r;if(!up(n,r)){if(Yc(n))throw Error(t(418));r=xi(a.nextSibling);var c=Rn;r&&up(n,r)?lp(c,a):(n.flags=n.flags&-4097|2,mt=!1,Rn=n)}}else{if(Yc(n))throw Error(t(418));n.flags=n.flags&-4097|2,mt=!1,Rn=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function Wl(n){if(n!==Rn)return!1;if(!mt)return cp(n),mt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=bn)){if(Yc(n))throw hp(),Error(t(418));for(;r;)lp(n,r),r=xi(r.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){bn=xi(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}bn=null}}else bn=Rn?xi(n.stateNode.nextSibling):null;return!0}function hp(){for(var n=bn;n;)n=xi(n.nextSibling)}function ho(){bn=Rn=null,mt=!1}function Zc(n){sr===null?sr=[n]:sr.push(n)}var D_=xe.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var x=d.refs;_===null?delete x[p]:x[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Gl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function dp(n){var r=n._init;return r(n._payload)}function fp(n){function r(L,V){if(n){var j=L.deletions;j===null?(L.deletions=[V],L.flags|=16):j.push(V)}}function a(L,V){if(!n)return null;for(;V!==null;)r(L,V),V=V.sibling;return null}function c(L,V){for(L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function d(L,V){return L=Oi(L,V),L.index=0,L.sibling=null,L}function p(L,V,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<V?(L.flags|=2,V):j):(L.flags|=2,V)):(L.flags|=1048576,V)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function x(L,V,j,J){return V===null||V.tag!==6?(V=Hh(j,L.mode,J),V.return=L,V):(V=d(V,j),V.return=L,V)}function P(L,V,j,J){var ge=j.type;return ge===N?G(L,V,j.props.children,J,j.key):V!==null&&(V.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===wt&&dp(ge)===V.type)?(J=d(V,j.props),J.ref=ha(L,V,j),J.return=L,J):(J=yu(j.type,j.key,j.props,null,L.mode,J),J.ref=ha(L,V,j),J.return=L,J)}function U(L,V,j,J){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=qh(j,L.mode,J),V.return=L,V):(V=d(V,j.children||[]),V.return=L,V)}function G(L,V,j,J,ge){return V===null||V.tag!==7?(V=As(j,L.mode,J,ge),V.return=L,V):(V=d(V,j),V.return=L,V)}function X(L,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Hh(""+V,L.mode,j),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Oe:return j=yu(V.type,V.key,V.props,null,L.mode,j),j.ref=ha(L,null,V),j.return=L,j;case ke:return V=qh(V,L.mode,j),V.return=L,V;case wt:var J=V._init;return X(L,J(V._payload),j)}if(Re(V)||me(V))return V=As(V,L.mode,j,null),V.return=L,V;Gl(L,V)}return null}function W(L,V,j,J){var ge=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ge!==null?null:x(L,V,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:return j.key===ge?P(L,V,j,J):null;case ke:return j.key===ge?U(L,V,j,J):null;case wt:return ge=j._init,W(L,V,ge(j._payload),J)}if(Re(j)||me(j))return ge!==null?null:G(L,V,j,J,null);Gl(L,j)}return null}function re(L,V,j,J,ge){if(typeof J=="string"&&J!==""||typeof J=="number")return L=L.get(j)||null,x(V,L,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Oe:return L=L.get(J.key===null?j:J.key)||null,P(V,L,J,ge);case ke:return L=L.get(J.key===null?j:J.key)||null,U(V,L,J,ge);case wt:var we=J._init;return re(L,V,j,we(J._payload),ge)}if(Re(J)||me(J))return L=L.get(j)||null,G(V,L,J,ge,null);Gl(V,J)}return null}function ae(L,V,j,J){for(var ge=null,we=null,Ee=V,Ce=V=0,Ft=null;Ee!==null&&Ce<j.length;Ce++){Ee.index>Ce?(Ft=Ee,Ee=null):Ft=Ee.sibling;var Xe=W(L,Ee,j[Ce],J);if(Xe===null){Ee===null&&(Ee=Ft);break}n&&Ee&&Xe.alternate===null&&r(L,Ee),V=p(Xe,V,Ce),we===null?ge=Xe:we.sibling=Xe,we=Xe,Ee=Ft}if(Ce===j.length)return a(L,Ee),mt&&_s(L,Ce),ge;if(Ee===null){for(;Ce<j.length;Ce++)Ee=X(L,j[Ce],J),Ee!==null&&(V=p(Ee,V,Ce),we===null?ge=Ee:we.sibling=Ee,we=Ee);return mt&&_s(L,Ce),ge}for(Ee=c(L,Ee);Ce<j.length;Ce++)Ft=re(Ee,L,Ce,j[Ce],J),Ft!==null&&(n&&Ft.alternate!==null&&Ee.delete(Ft.key===null?Ce:Ft.key),V=p(Ft,V,Ce),we===null?ge=Ft:we.sibling=Ft,we=Ft);return n&&Ee.forEach(function(Mi){return r(L,Mi)}),mt&&_s(L,Ce),ge}function de(L,V,j,J){var ge=me(j);if(typeof ge!="function")throw Error(t(150));if(j=ge.call(j),j==null)throw Error(t(151));for(var we=ge=null,Ee=V,Ce=V=0,Ft=null,Xe=j.next();Ee!==null&&!Xe.done;Ce++,Xe=j.next()){Ee.index>Ce?(Ft=Ee,Ee=null):Ft=Ee.sibling;var Mi=W(L,Ee,Xe.value,J);if(Mi===null){Ee===null&&(Ee=Ft);break}n&&Ee&&Mi.alternate===null&&r(L,Ee),V=p(Mi,V,Ce),we===null?ge=Mi:we.sibling=Mi,we=Mi,Ee=Ft}if(Xe.done)return a(L,Ee),mt&&_s(L,Ce),ge;if(Ee===null){for(;!Xe.done;Ce++,Xe=j.next())Xe=X(L,Xe.value,J),Xe!==null&&(V=p(Xe,V,Ce),we===null?ge=Xe:we.sibling=Xe,we=Xe);return mt&&_s(L,Ce),ge}for(Ee=c(L,Ee);!Xe.done;Ce++,Xe=j.next())Xe=re(Ee,L,Ce,Xe.value,J),Xe!==null&&(n&&Xe.alternate!==null&&Ee.delete(Xe.key===null?Ce:Xe.key),V=p(Xe,V,Ce),we===null?ge=Xe:we.sibling=Xe,we=Xe);return n&&Ee.forEach(function(d1){return r(L,d1)}),mt&&_s(L,Ce),ge}function Tt(L,V,j,J){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Oe:e:{for(var ge=j.key,we=V;we!==null;){if(we.key===ge){if(ge=j.type,ge===N){if(we.tag===7){a(L,we.sibling),V=d(we,j.props.children),V.return=L,L=V;break e}}else if(we.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===wt&&dp(ge)===we.type){a(L,we.sibling),V=d(we,j.props),V.ref=ha(L,we,j),V.return=L,L=V;break e}a(L,we);break}else r(L,we);we=we.sibling}j.type===N?(V=As(j.props.children,L.mode,J,j.key),V.return=L,L=V):(J=yu(j.type,j.key,j.props,null,L.mode,J),J.ref=ha(L,V,j),J.return=L,L=J)}return _(L);case ke:e:{for(we=j.key;V!==null;){if(V.key===we)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){a(L,V.sibling),V=d(V,j.children||[]),V.return=L,L=V;break e}else{a(L,V);break}else r(L,V);V=V.sibling}V=qh(j,L.mode,J),V.return=L,L=V}return _(L);case wt:return we=j._init,Tt(L,V,we(j._payload),J)}if(Re(j))return ae(L,V,j,J);if(me(j))return de(L,V,j,J);Gl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,V!==null&&V.tag===6?(a(L,V.sibling),V=d(V,j),V.return=L,L=V):(a(L,V),V=Hh(j,L.mode,J),V.return=L,L=V),_(L)):a(L,V)}return Tt}var fo=fp(!0),pp=fp(!1),Kl=ki(null),Ql=null,po=null,eh=null;function th(){eh=po=Ql=null}function nh(n){var r=Kl.current;ut(Kl),n._currentValue=r}function rh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function mo(n,r){Ql=n,eh=po=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(yn=!0),n.firstContext=null)}function Hn(n){var r=n._currentValue;if(eh!==n)if(n={context:n,memoizedValue:r,next:null},po===null){if(Ql===null)throw Error(t(308));po=n,Ql.dependencies={lanes:0,firstContext:n}}else po=po.next=n;return r}var ws=null;function ih(n){ws===null?ws=[n]:ws.push(n)}function mp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,ih(r)):(a.next=d.next,d.next=a),r.interleaved=a,Wr(n,c)}function Wr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ci=!1;function sh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Pi(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Qe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Wr(n,a)}return d=c.interleaved,d===null?(r.next=r,ih(c)):(r.next=d.next,d.next=r),c.interleaved=r,Wr(n,a)}function Xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,vi(n,a)}}function yp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Yl(n,r,a,c){var d=n.updateQueue;Ci=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var P=x,U=P.next;P.next=null,_===null?p=U:_.next=U,_=P;var G=n.alternate;G!==null&&(G=G.updateQueue,x=G.lastBaseUpdate,x!==_&&(x===null?G.firstBaseUpdate=U:x.next=U,G.lastBaseUpdate=P))}if(p!==null){var X=d.baseState;_=0,G=U=P=null,x=p;do{var W=x.lane,re=x.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:re,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ae=n,de=x;switch(W=r,re=a,de.tag){case 1:if(ae=de.payload,typeof ae=="function"){X=ae.call(re,X,W);break e}X=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=de.payload,W=typeof ae=="function"?ae.call(re,X,W):ae,W==null)break e;X=ne({},X,W);break e;case 2:Ci=!0}}x.callback!==null&&x.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[x]:W.push(x))}else re={eventTime:re,lane:W,tag:x.tag,payload:x.payload,callback:x.callback,next:null},G===null?(U=G=re,P=X):G=G.next=re,_|=W;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;W=x,x=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(P=X),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Is|=_,n.lanes=_,n.memoizedState=X}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Er=ki(da),fa=ki(da),pa=ki(da);function Es(n){if(n===da)throw Error(t(174));return n}function oh(n,r){switch(st(pa,r),st(fa,n),st(Er,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ze(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ze(r,n)}ut(Er),st(Er,r)}function go(){ut(Er),ut(fa),ut(pa)}function _p(n){Es(pa.current);var r=Es(Er.current),a=Ze(r,n.type);r!==a&&(st(fa,n),st(Er,a))}function ah(n){fa.current===n&&(ut(Er),ut(fa))}var gt=ki(0);function Jl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var lh=[];function uh(){for(var n=0;n<lh.length;n++)lh[n]._workInProgressVersionPrimary=null;lh.length=0}var Zl=xe.ReactCurrentDispatcher,ch=xe.ReactCurrentBatchConfig,Ts=0,yt=null,bt=null,Lt=null,eu=!1,ma=!1,ga=0,V_=0;function Yt(){throw Error(t(321))}function hh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!ir(n[a],r[a]))return!1;return!0}function dh(n,r,a,c,d,p){if(Ts=p,yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zl.current=n===null||n.memoizedState===null?j_:F_,n=a(c,d),ma){p=0;do{if(ma=!1,ga=0,25<=p)throw Error(t(301));p+=1,Lt=bt=null,r.updateQueue=null,Zl.current=U_,n=a(c,d)}while(ma)}if(Zl.current=ru,r=bt!==null&&bt.next!==null,Ts=0,Lt=bt=yt=null,eu=!1,r)throw Error(t(300));return n}function fh(){var n=ga!==0;return ga=0,n}function Tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?yt.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function qn(){if(bt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var r=Lt===null?yt.memoizedState:Lt.next;if(r!==null)Lt=r,bt=n;else{if(n===null)throw Error(t(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Lt===null?yt.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function ya(n,r){return typeof r=="function"?r(n):r}function ph(n){var r=qn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=bt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var x=_=null,P=null,U=p;do{var G=U.lane;if((Ts&G)===G)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var X={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(x=P=X,_=c):P=P.next=X,yt.lanes|=G,Is|=G}U=U.next}while(U!==null&&U!==p);P===null?_=c:P.next=x,ir(c,r.memoizedState)||(yn=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,yt.lanes|=p,Is|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function mh(n){var r=qn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);ir(p,r.memoizedState)||(yn=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function wp(){}function Ep(n,r){var a=yt,c=qn(),d=r(),p=!ir(c.memoizedState,d);if(p&&(c.memoizedState=d,yn=!0),c=c.queue,gh(xp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||Lt!==null&&Lt.memoizedState.tag&1){if(a.flags|=2048,va(9,Ip.bind(null,a,c,d,r),void 0,null),jt===null)throw Error(t(349));(Ts&30)!==0||Tp(a,r,d)}return d}function Tp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=yt.updateQueue,r===null?(r={lastEffect:null,stores:null},yt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ip(n,r,a,c){r.value=a,r.getSnapshot=c,kp(r)&&Sp(n)}function xp(n,r,a){return a(function(){kp(r)&&Sp(n)})}function kp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!ir(n,a)}catch{return!0}}function Sp(n){var r=Wr(n,1);r!==null&&ur(r,n,1,-1)}function Ap(n){var r=Tr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=L_.bind(null,yt,n),[r.memoizedState,n]}function va(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=yt.updateQueue,r===null?(r={lastEffect:null,stores:null},yt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Cp(){return qn().memoizedState}function tu(n,r,a,c){var d=Tr();yt.flags|=n,d.memoizedState=va(1|r,a,void 0,c===void 0?null:c)}function nu(n,r,a,c){var d=qn();c=c===void 0?null:c;var p=void 0;if(bt!==null){var _=bt.memoizedState;if(p=_.destroy,c!==null&&hh(c,_.deps)){d.memoizedState=va(r,a,p,c);return}}yt.flags|=n,d.memoizedState=va(1|r,a,p,c)}function Pp(n,r){return tu(8390656,8,n,r)}function gh(n,r){return nu(2048,8,n,r)}function Rp(n,r){return nu(4,2,n,r)}function bp(n,r){return nu(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Dp(n,r,a){return a=a!=null?a.concat([n]):null,nu(4,4,Np.bind(null,r,n),a)}function yh(){}function Vp(n,r){var a=qn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&hh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Op(n,r){var a=qn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&hh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Mp(n,r,a){return(Ts&21)===0?(n.baseState&&(n.baseState=!1,yn=!0),n.memoizedState=a):(ir(a,r)||(a=hs(),yt.lanes|=a,Is|=a,n.baseState=!0),r)}function O_(n,r){var a=We;We=a!==0&&4>a?a:4,n(!0);var c=ch.transition;ch.transition={};try{n(!1),r()}finally{We=a,ch.transition=c}}function Lp(){return qn().memoizedState}function M_(n,r,a){var c=Di(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},jp(n))Fp(r,a);else if(a=mp(n,r,a,c),a!==null){var d=ln();ur(a,n,c,d),Up(a,r,c)}}function L_(n,r,a){var c=Di(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(n))Fp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,x=p(_,a);if(d.hasEagerState=!0,d.eagerState=x,ir(x,_)){var P=r.interleaved;P===null?(d.next=d,ih(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=mp(n,r,d,c),a!==null&&(d=ln(),ur(a,n,c,d),Up(a,r,c))}}function jp(n){var r=n.alternate;return n===yt||r!==null&&r===yt}function Fp(n,r){ma=eu=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Up(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,vi(n,a)}}var ru={readContext:Hn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},j_={readContext:Hn,useCallback:function(n,r){return Tr().memoizedState=[n,r===void 0?null:r],n},useContext:Hn,useEffect:Pp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,tu(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return tu(4194308,4,n,r)},useInsertionEffect:function(n,r){return tu(4,2,n,r)},useMemo:function(n,r){var a=Tr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Tr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=M_.bind(null,yt,n),[c.memoizedState,n]},useRef:function(n){var r=Tr();return n={current:n},r.memoizedState=n},useState:Ap,useDebugValue:yh,useDeferredValue:function(n){return Tr().memoizedState=n},useTransition:function(){var n=Ap(!1),r=n[0];return n=O_.bind(null,n[1]),Tr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=yt,d=Tr();if(mt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),jt===null)throw Error(t(349));(Ts&30)!==0||Tp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Pp(xp.bind(null,c,p,n),[n]),c.flags|=2048,va(9,Ip.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Tr(),r=jt.identifierPrefix;if(mt){var a=qr,c=Hr;a=(c&~(1<<32-sn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=V_++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},F_={readContext:Hn,useCallback:Vp,useContext:Hn,useEffect:gh,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:bp,useMemo:Op,useReducer:ph,useRef:Cp,useState:function(){return ph(ya)},useDebugValue:yh,useDeferredValue:function(n){var r=qn();return Mp(r,bt.memoizedState,n)},useTransition:function(){var n=ph(ya)[0],r=qn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ep,useId:Lp,unstable_isNewReconciler:!1},U_={readContext:Hn,useCallback:Vp,useContext:Hn,useEffect:gh,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:bp,useMemo:Op,useReducer:mh,useRef:Cp,useState:function(){return mh(ya)},useDebugValue:yh,useDeferredValue:function(n){var r=qn();return bt===null?r.memoizedState=n:Mp(r,bt.memoizedState,n)},useTransition:function(){var n=mh(ya)[0],r=qn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ep,useId:Lp,unstable_isNewReconciler:!1};function or(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function vh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var iu={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=ln(),d=Di(n),p=Gr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Pi(n,p,d),r!==null&&(ur(r,n,d,c),Xl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=ln(),d=Di(n),p=Gr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Pi(n,p,d),r!==null&&(ur(r,n,d,c),Xl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=ln(),c=Di(n),d=Gr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Pi(n,d,c),r!==null&&(ur(r,n,c,a),Xl(r,n,c))}};function zp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,p):!0}function Bp(n,r,a){var c=!1,d=Si,p=r.contextType;return typeof p=="object"&&p!==null?p=Hn(p):(d=gn(r)?ys:Xt.current,c=r.contextTypes,p=(c=c!=null)?lo(n,d):Si),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=iu,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function $p(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&iu.enqueueReplaceState(r,r.state,null)}function _h(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},sh(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=Hn(p):(p=gn(r)?ys:Xt.current,d.context=lo(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(vh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&iu.enqueueReplaceState(d,d.state,null),Yl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function yo(n,r){try{var a="",c=r;do a+=Ve(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function wh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Eh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,r,a){a=Gr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){hu||(hu=!0,Mh=c),Eh(n,r)},a}function qp(n,r,a){a=Gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Eh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Eh(n,r),typeof c!="function"&&(bi===null?bi=new Set([this]):bi.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Wp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new z_;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=t1.bind(null,n,r,a),r.then(n,n))}function Gp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Kp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Gr(-1,1),r.tag=2,Pi(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var B_=xe.ReactCurrentOwner,yn=!1;function an(n,r,a,c){r.child=n===null?pp(r,null,a,c):fo(r,n.child,a,c)}function Qp(n,r,a,c,d){a=a.render;var p=r.ref;return mo(r,d),c=dh(n,r,a,c,p,d),a=fh(),n!==null&&!yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Kr(n,r,d)):(mt&&a&&Qc(r),r.flags|=1,an(n,r,c,d),r.child)}function Xp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!$h(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Yp(n,r,p,c,d)):(n=yu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(_,c)&&n.ref===r.ref)return Kr(n,r,d)}return r.flags|=1,n=Oi(p,c),n.ref=r.ref,n.return=r,r.child=n}function Yp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ia(p,c)&&n.ref===r.ref)if(yn=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(yn=!0);else return r.lanes=n.lanes,Kr(n,r,d)}return Th(n,r,a,c,d)}function Jp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(_o,Nn),Nn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,st(_o,Nn),Nn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,st(_o,Nn),Nn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,st(_o,Nn),Nn|=c;return an(n,r,d,a),r.child}function Zp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Th(n,r,a,c,d){var p=gn(a)?ys:Xt.current;return p=lo(r,p),mo(r,d),a=dh(n,r,a,c,p,d),c=fh(),n!==null&&!yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Kr(n,r,d)):(mt&&c&&Qc(r),r.flags|=1,an(n,r,a,d),r.child)}function em(n,r,a,c,d){if(gn(a)){var p=!0;Bl(r)}else p=!1;if(mo(r,d),r.stateNode===null)ou(n,r),Bp(r,a,c),_h(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,x=r.memoizedProps;_.props=x;var P=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=Hn(U):(U=gn(a)?ys:Xt.current,U=lo(r,U));var G=a.getDerivedStateFromProps,X=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(x!==c||P!==U)&&$p(r,_,c,U),Ci=!1;var W=r.memoizedState;_.state=W,Yl(r,c,_,d),P=r.memoizedState,x!==c||W!==P||mn.current||Ci?(typeof G=="function"&&(vh(r,a,G,c),P=r.memoizedState),(x=Ci||zp(r,a,x,c,W,P,U))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=U,c=x):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,gp(n,r),x=r.memoizedProps,U=r.type===r.elementType?x:or(r.type,x),_.props=U,X=r.pendingProps,W=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=Hn(P):(P=gn(a)?ys:Xt.current,P=lo(r,P));var re=a.getDerivedStateFromProps;(G=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(x!==X||W!==P)&&$p(r,_,c,P),Ci=!1,W=r.memoizedState,_.state=W,Yl(r,c,_,d);var ae=r.memoizedState;x!==X||W!==ae||mn.current||Ci?(typeof re=="function"&&(vh(r,a,re,c),ae=r.memoizedState),(U=Ci||zp(r,a,U,c,W,ae,P)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ae,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ae,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||x===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ae),_.props=c,_.state=ae,_.context=P,c=U):(typeof _.componentDidUpdate!="function"||x===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return Ih(n,r,a,c,p,d)}function Ih(n,r,a,c,d,p){Zp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&sp(r,a,!1),Kr(n,r,p);c=r.stateNode,B_.current=r;var x=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=fo(r,n.child,null,p),r.child=fo(r,null,x,p)):an(n,r,x,p),r.memoizedState=c.state,d&&sp(r,a,!0),r.child}function tm(n){var r=n.stateNode;r.pendingContext?rp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&rp(n,r.context,!1),oh(n,r.containerInfo)}function nm(n,r,a,c,d){return ho(),Zc(d),r.flags|=256,an(n,r,a,c),r.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function kh(n){return{baseLanes:n,cachePool:null,transitions:null}}function rm(n,r,a){var c=r.pendingProps,d=gt.current,p=!1,_=(r.flags&128)!==0,x;if((x=_)||(x=n!==null&&n.memoizedState===null?!1:(d&2)!==0),x?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),st(gt,d&1),n===null)return Jc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=vu(_,c,0,null),n=As(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=kh(a),r.memoizedState=xh,n):Sh(r,_));if(d=n.memoizedState,d!==null&&(x=d.dehydrated,x!==null))return $_(n,r,_,c,x,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,x=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=Oi(d,P),c.subtreeFlags=d.subtreeFlags&14680064),x!==null?p=Oi(x,p):(p=As(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?kh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=xh,c}return p=n.child,n=p.sibling,c=Oi(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Sh(n,r){return r=vu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function su(n,r,a,c){return c!==null&&Zc(c),fo(r,n.child,null,a),n=Sh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function $_(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=wh(Error(t(422))),su(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=vu({mode:"visible",children:c.children},d,0,null),p=As(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&fo(r,n.child,null,_),r.child.memoizedState=kh(_),r.memoizedState=xh,p);if((r.mode&1)===0)return su(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var x=c.dgst;return c=x,p=Error(t(419)),c=wh(p,c,void 0),su(n,r,_,c)}if(x=(_&n.childLanes)!==0,yn||x){if(c=jt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Wr(n,d),ur(c,n,d,-1))}return Bh(),c=wh(Error(t(421))),su(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=n1.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,bn=xi(d.nextSibling),Rn=r,mt=!0,sr=null,n!==null&&(Bn[$n++]=Hr,Bn[$n++]=qr,Bn[$n++]=vs,Hr=n.id,qr=n.overflow,vs=r),r=Sh(r,c.children),r.flags|=4096,r)}function im(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),rh(n.return,r,a)}function Ah(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function sm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(an(n,r,c.children,a),c=gt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,a,r);else if(n.tag===19)im(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(st(gt,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Ah(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Jl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ah(r,!0,a,null,p);break;case"together":Ah(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ou(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Kr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Is|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Oi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Oi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function H_(n,r,a){switch(r.tag){case 3:tm(r),ho();break;case 5:_p(r);break;case 1:gn(r.type)&&Bl(r);break;case 4:oh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;st(Kl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(st(gt,gt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?rm(n,r,a):(st(gt,gt.current&1),n=Kr(n,r,a),n!==null?n.sibling:null);st(gt,gt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return sm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),st(gt,gt.current),c)break;return null;case 22:case 23:return r.lanes=0,Jp(n,r,a)}return Kr(n,r,a)}var om,Ch,am,lm;om=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ch=function(){},am=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Es(Er.current);var p=null;switch(a){case"input":d=Dn(n,d),c=Dn(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Ot(n,d),c=Ot(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fl)}ui(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var x=d[U];for(_ in x)x.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var P=c[U];if(x=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==x&&(P!=null||x!=null))if(U==="style")if(x){for(_ in x)!x.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&x[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(p||(p=[]),p.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,x=x?x.__html:void 0,P!=null&&x!==P&&(p=p||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&lt("scroll",n),p||x===P||(p=[])):(p=p||[]).push(U,P))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},lm=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!mt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Jt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function q_(n,r,a){var c=r.pendingProps;switch(Xc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(r),null;case 1:return gn(r.type)&&zl(),Jt(r),null;case 3:return c=r.stateNode,go(),ut(mn),ut(Xt),uh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,sr!==null&&(Fh(sr),sr=null))),Ch(n,r),Jt(r),null;case 5:ah(r);var d=Es(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)am(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Jt(r),null}if(n=Es(Er.current),Wl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[wr]=r,c[ua]=p,n=(r.mode&1)!==0,a){case"dialog":lt("cancel",c),lt("close",c);break;case"iframe":case"object":case"embed":lt("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)lt(oa[d],c);break;case"source":lt("error",c);break;case"img":case"image":case"link":lt("error",c),lt("load",c);break;case"details":lt("toggle",c);break;case"input":In(c,p),lt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},lt("invalid",c);break;case"textarea":Ct(c,p),lt("invalid",c)}ui(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var x=p[_];_==="children"?typeof x=="string"?c.textContent!==x&&(p.suppressHydrationWarning!==!0&&jl(c.textContent,x,n),d=["children",x]):typeof x=="number"&&c.textContent!==""+x&&(p.suppressHydrationWarning!==!0&&jl(c.textContent,x,n),d=["children",""+x]):o.hasOwnProperty(_)&&x!=null&&_==="onScroll"&&lt("scroll",c)}switch(a){case"input":un(c),xn(c,p,!0);break;case"textarea":un(c),Le(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Fl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=be(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[wr]=r,n[ua]=c,om(n,r,!1,!1),r.stateNode=n;e:{switch(_=is(a,c),a){case"dialog":lt("cancel",n),lt("close",n),d=c;break;case"iframe":case"object":case"embed":lt("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)lt(oa[d],n);d=c;break;case"source":lt("error",n),d=c;break;case"img":case"image":case"link":lt("error",n),lt("load",n),d=c;break;case"details":lt("toggle",n),d=c;break;case"input":In(n,c),d=Dn(n,c),lt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),lt("invalid",n);break;case"textarea":Ct(n,c),d=Ot(n,c),lt("invalid",n);break;default:d=c}ui(a,d),x=d;for(p in x)if(x.hasOwnProperty(p)){var P=x[p];p==="style"?rs(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ai(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Yn(n,P):typeof P=="number"&&Yn(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&lt("scroll",n):P!=null&&pe(n,p,P,_))}switch(a){case"input":un(n),xn(n,c,!1);break;case"textarea":un(n),Le(n);break;case"option":c.value!=null&&n.setAttribute("value",""+qe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?at(n,!!c.multiple,p,!1):c.defaultValue!=null&&at(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Jt(r),null;case 6:if(n&&r.stateNode!=null)lm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Es(pa.current),Es(Er.current),Wl(r)){if(c=r.stateNode,a=r.memoizedProps,c[wr]=r,(p=c.nodeValue!==a)&&(n=Rn,n!==null))switch(n.tag){case 3:jl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[wr]=r,r.stateNode=c}return Jt(r),null;case 13:if(ut(gt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(mt&&bn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)hp(),ho(),r.flags|=98560,p=!1;else if(p=Wl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[wr]=r}else ho(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Jt(r),p=!1}else sr!==null&&(Fh(sr),sr=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(gt.current&1)!==0?Nt===0&&(Nt=3):Bh())),r.updateQueue!==null&&(r.flags|=4),Jt(r),null);case 4:return go(),Ch(n,r),n===null&&aa(r.stateNode.containerInfo),Jt(r),null;case 10:return nh(r.type._context),Jt(r),null;case 17:return gn(r.type)&&zl(),Jt(r),null;case 19:if(ut(gt),p=r.memoizedState,p===null)return Jt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)_a(p,!1);else{if(Nt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Jl(n),_!==null){for(r.flags|=128,_a(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return st(gt,gt.current&1|2),r.child}n=n.sibling}p.tail!==null&&it()>wo&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304)}else{if(!c)if(n=Jl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!mt)return Jt(r),null}else 2*it()-p.renderingStartTime>wo&&a!==1073741824&&(r.flags|=128,c=!0,_a(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=it(),r.sibling=null,a=gt.current,st(gt,c?a&1|2:a&1),r):(Jt(r),null);case 22:case 23:return zh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(Nn&1073741824)!==0&&(Jt(r),r.subtreeFlags&6&&(r.flags|=8192)):Jt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function W_(n,r){switch(Xc(r),r.tag){case 1:return gn(r.type)&&zl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return go(),ut(mn),ut(Xt),uh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ah(r),null;case 13:if(ut(gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ho()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ut(gt),null;case 4:return go(),null;case 10:return nh(r.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var au=!1,Zt=!1,G_=typeof WeakSet=="function"?WeakSet:Set,oe=null;function vo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Et(n,r,c)}else a.current=null}function Ph(n,r,a){try{a()}catch(c){Et(n,r,c)}}var um=!1;function K_(n,r){if(zc=Ei,n=zf(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,x=-1,P=-1,U=0,G=0,X=n,W=null;t:for(;;){for(var re;X!==a||d!==0&&X.nodeType!==3||(x=_+d),X!==p||c!==0&&X.nodeType!==3||(P=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(re=X.firstChild)!==null;)W=X,X=re;for(;;){if(X===n)break t;if(W===a&&++U===d&&(x=_),W===p&&++G===c&&(P=_),(re=X.nextSibling)!==null)break;X=W,W=X.parentNode}X=re}a=x===-1||P===-1?null:{start:x,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},Ei=!1,oe=r;oe!==null;)if(r=oe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,oe=n;else for(;oe!==null;){r=oe;try{var ae=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var de=ae.memoizedProps,Tt=ae.memoizedState,L=r.stateNode,V=L.getSnapshotBeforeUpdate(r.elementType===r.type?de:or(r.type,de),Tt);L.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(J){Et(r,r.return,J)}if(n=r.sibling,n!==null){n.return=r.return,oe=n;break}oe=r.return}return ae=um,um=!1,ae}function wa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ph(r,a,p)}d=d.next}while(d!==c)}}function lu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Rh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function cm(n){var r=n.alternate;r!==null&&(n.alternate=null,cm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wr],delete r[ua],delete r[Wc],delete r[R_],delete r[b_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hm(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Fl));else if(c!==4&&(n=n.child,n!==null))for(bh(n,r,a),n=n.sibling;n!==null;)bh(n,r,a),n=n.sibling}function Nh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nh(n,r,a),n=n.sibling;n!==null;)Nh(n,r,a),n=n.sibling}var qt=null,ar=!1;function Ri(n,r,a){for(a=a.child;a!==null;)fm(n,r,a),a=a.sibling}function fm(n,r,a){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(us,a)}catch{}switch(a.tag){case 5:Zt||vo(a,r);case 6:var c=qt,d=ar;qt=null,Ri(n,r,a),qt=c,ar=d,qt!==null&&(ar?(n=qt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):qt.removeChild(a.stateNode));break;case 18:qt!==null&&(ar?(n=qt,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),nr(n)):qc(qt,a.stateNode));break;case 4:c=qt,d=ar,qt=a.stateNode.containerInfo,ar=!0,Ri(n,r,a),qt=c,ar=d;break;case 0:case 11:case 14:case 15:if(!Zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Ph(a,r,_),d=d.next}while(d!==c)}Ri(n,r,a);break;case 1:if(!Zt&&(vo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(x){Et(a,r,x)}Ri(n,r,a);break;case 21:Ri(n,r,a);break;case 22:a.mode&1?(Zt=(c=Zt)||a.memoizedState!==null,Ri(n,r,a),Zt=c):Ri(n,r,a);break;default:Ri(n,r,a)}}function pm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new G_),r.forEach(function(c){var d=r1.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function lr(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,x=_;e:for(;x!==null;){switch(x.tag){case 5:qt=x.stateNode,ar=!1;break e;case 3:qt=x.stateNode.containerInfo,ar=!0;break e;case 4:qt=x.stateNode.containerInfo,ar=!0;break e}x=x.return}if(qt===null)throw Error(t(160));fm(p,_,d),qt=null,ar=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){Et(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)mm(r,n),r=r.sibling}function mm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(lr(r,n),Ir(n),c&4){try{wa(3,n,n.return),lu(3,n)}catch(de){Et(n,n.return,de)}try{wa(5,n,n.return)}catch(de){Et(n,n.return,de)}}break;case 1:lr(r,n),Ir(n),c&512&&a!==null&&vo(a,a.return);break;case 5:if(lr(r,n),Ir(n),c&512&&a!==null&&vo(a,a.return),n.flags&32){var d=n.stateNode;try{Yn(d,"")}catch(de){Et(n,n.return,de)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,x=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{x==="input"&&p.type==="radio"&&p.name!=null&&pr(d,p),is(x,_);var U=is(x,p);for(_=0;_<P.length;_+=2){var G=P[_],X=P[_+1];G==="style"?rs(d,X):G==="dangerouslySetInnerHTML"?ai(d,X):G==="children"?Yn(d,X):pe(d,G,X,U)}switch(x){case"input":Bt(d,p);break;case"textarea":he(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?at(d,!!p.multiple,re,!1):W!==!!p.multiple&&(p.defaultValue!=null?at(d,!!p.multiple,p.defaultValue,!0):at(d,!!p.multiple,p.multiple?[]:"",!1))}d[ua]=p}catch(de){Et(n,n.return,de)}}break;case 6:if(lr(r,n),Ir(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(de){Et(n,n.return,de)}}break;case 3:if(lr(r,n),Ir(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{nr(r.containerInfo)}catch(de){Et(n,n.return,de)}break;case 4:lr(r,n),Ir(n);break;case 13:lr(r,n),Ir(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Oh=it())),c&4&&pm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Zt=(U=Zt)||G,lr(r,n),Zt=U):lr(r,n),Ir(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(oe=n,G=n.child;G!==null;){for(X=oe=G;oe!==null;){switch(W=oe,re=W.child,W.tag){case 0:case 11:case 14:case 15:wa(4,W,W.return);break;case 1:vo(W,W.return);var ae=W.stateNode;if(typeof ae.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ae.props=r.memoizedProps,ae.state=r.memoizedState,ae.componentWillUnmount()}catch(de){Et(c,a,de)}}break;case 5:vo(W,W.return);break;case 22:if(W.memoizedState!==null){vm(X);continue}}re!==null?(re.return=W,oe=re):vm(X)}G=G.sibling}e:for(G=null,X=n;;){if(X.tag===5){if(G===null){G=X;try{d=X.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(x=X.stateNode,P=X.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,x.style.display=ns("display",_))}catch(de){Et(n,n.return,de)}}}else if(X.tag===6){if(G===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(de){Et(n,n.return,de)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;G===X&&(G=null),X=X.return}G===X&&(G=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:lr(r,n),Ir(n),c&4&&pm(n);break;case 21:break;default:lr(r,n),Ir(n)}}function Ir(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(hm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Yn(d,""),c.flags&=-33);var p=dm(n);Nh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,x=dm(n);bh(n,x,_);break;default:throw Error(t(161))}}catch(P){Et(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Q_(n,r,a){oe=n,gm(n)}function gm(n,r,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||au;if(!_){var x=d.alternate,P=x!==null&&x.memoizedState!==null||Zt;x=au;var U=Zt;if(au=_,(Zt=P)&&!U)for(oe=d;oe!==null;)_=oe,P=_.child,_.tag===22&&_.memoizedState!==null?_m(d):P!==null?(P.return=_,oe=P):_m(d);for(;p!==null;)oe=p,gm(p),p=p.sibling;oe=d,au=x,Zt=U}ym(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,oe=p):ym(n)}}function ym(n){for(;oe!==null;){var r=oe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Zt||lu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Zt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:or(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&vp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,_,a)}break;case 5:var x=r.stateNode;if(a===null&&r.flags&4){a=x;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var X=G.dehydrated;X!==null&&nr(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zt||r.flags&512&&Rh(r)}catch(W){Et(r,r.return,W)}}if(r===n){oe=null;break}if(a=r.sibling,a!==null){a.return=r.return,oe=a;break}oe=r.return}}function vm(n){for(;oe!==null;){var r=oe;if(r===n){oe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,oe=a;break}oe=r.return}}function _m(n){for(;oe!==null;){var r=oe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{lu(4,r)}catch(P){Et(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){Et(r,d,P)}}var p=r.return;try{Rh(r)}catch(P){Et(r,p,P)}break;case 5:var _=r.return;try{Rh(r)}catch(P){Et(r,_,P)}}}catch(P){Et(r,r.return,P)}if(r===n){oe=null;break}var x=r.sibling;if(x!==null){x.return=r.return,oe=x;break}oe=r.return}}var X_=Math.ceil,uu=xe.ReactCurrentDispatcher,Dh=xe.ReactCurrentOwner,Wn=xe.ReactCurrentBatchConfig,Qe=0,jt=null,kt=null,Wt=0,Nn=0,_o=ki(0),Nt=0,Ea=null,Is=0,cu=0,Vh=0,Ta=null,vn=null,Oh=0,wo=1/0,Qr=null,hu=!1,Mh=null,bi=null,du=!1,Ni=null,fu=0,Ia=0,Lh=null,pu=-1,mu=0;function ln(){return(Qe&6)!==0?it():pu!==-1?pu:pu=it()}function Di(n){return(n.mode&1)===0?1:(Qe&2)!==0&&Wt!==0?Wt&-Wt:D_.transition!==null?(mu===0&&(mu=hs()),mu):(n=We,n!==0||(n=window.event,n=n===void 0?16:Yo(n.type)),n)}function ur(n,r,a,c){if(50<Ia)throw Ia=0,Lh=null,Error(t(185));yi(n,a,c),((Qe&2)===0||n!==jt)&&(n===jt&&((Qe&2)===0&&(cu|=a),Nt===4&&Vi(n,Wt)),_n(n,c),a===1&&Qe===0&&(r.mode&1)===0&&(wo=it()+500,$l&&Ai()))}function _n(n,r){var a=n.callbackNode;Lr(n,r);var c=cs(n,n===jt?Wt:0);if(c===0)a!==null&&Wo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Wo(a),r===1)n.tag===0?N_(Em.bind(null,n)):op(Em.bind(null,n)),C_(function(){(Qe&6)===0&&Ai()}),a=null;else{switch(_i(c)){case 1:a=ls;break;case 4:a=pi;break;case 16:a=Fn;break;case 536870912:a=ml;break;default:a=Fn}a=Pm(a,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function wm(n,r){if(pu=-1,mu=0,(Qe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Eo()&&n.callbackNode!==a)return null;var c=cs(n,n===jt?Wt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=gu(n,c);else{r=c;var d=Qe;Qe|=2;var p=Im();(jt!==n||Wt!==r)&&(Qr=null,wo=it()+500,ks(n,r));do try{Z_();break}catch(x){Tm(n,x)}while(!0);th(),uu.current=p,Qe=d,kt!==null?r=0:(jt=null,Wt=0,r=Nt)}if(r!==0){if(r===2&&(d=An(n),d!==0&&(c=d,r=jh(n,d))),r===1)throw a=Ea,ks(n,0),Vi(n,c),_n(n,it()),a;if(r===6)Vi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Y_(d)&&(r=gu(n,c),r===2&&(p=An(n),p!==0&&(c=p,r=jh(n,p))),r===1))throw a=Ea,ks(n,0),Vi(n,c),_n(n,it()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ss(n,vn,Qr);break;case 3:if(Vi(n,c),(c&130023424)===c&&(r=Oh+500-it(),10<r)){if(cs(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Hc(Ss.bind(null,n,vn,Qr),r);break}Ss(n,vn,Qr);break;case 4:if(Vi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-sn(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=it()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*X_(c/1960))-c,10<c){n.timeoutHandle=Hc(Ss.bind(null,n,vn,Qr),c);break}Ss(n,vn,Qr);break;case 5:Ss(n,vn,Qr);break;default:throw Error(t(329))}}}return _n(n,it()),n.callbackNode===a?wm.bind(null,n):null}function jh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(ks(n,r).flags|=256),n=gu(n,r),n!==2&&(r=vn,vn=a,r!==null&&Fh(r)),n}function Fh(n){vn===null?vn=n:vn.push.apply(vn,n)}function Y_(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!ir(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vi(n,r){for(r&=~Vh,r&=~cu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-sn(r),c=1<<a;n[a]=-1,r&=~c}}function Em(n){if((Qe&6)!==0)throw Error(t(327));Eo();var r=cs(n,0);if((r&1)===0)return _n(n,it()),null;var a=gu(n,r);if(n.tag!==0&&a===2){var c=An(n);c!==0&&(r=c,a=jh(n,c))}if(a===1)throw a=Ea,ks(n,0),Vi(n,r),_n(n,it()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ss(n,vn,Qr),_n(n,it()),null}function Uh(n,r){var a=Qe;Qe|=1;try{return n(r)}finally{Qe=a,Qe===0&&(wo=it()+500,$l&&Ai())}}function xs(n){Ni!==null&&Ni.tag===0&&(Qe&6)===0&&Eo();var r=Qe;Qe|=1;var a=Wn.transition,c=We;try{if(Wn.transition=null,We=1,n)return n()}finally{We=c,Wn.transition=a,Qe=r,(Qe&6)===0&&Ai()}}function zh(){Nn=_o.current,ut(_o)}function ks(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,A_(a)),kt!==null)for(a=kt.return;a!==null;){var c=a;switch(Xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:go(),ut(mn),ut(Xt),uh();break;case 5:ah(c);break;case 4:go();break;case 13:ut(gt);break;case 19:ut(gt);break;case 10:nh(c.type._context);break;case 22:case 23:zh()}a=a.return}if(jt=n,kt=n=Oi(n.current,null),Wt=Nn=r,Nt=0,Ea=null,Vh=cu=Is=0,vn=Ta=null,ws!==null){for(r=0;r<ws.length;r++)if(a=ws[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}ws=null}return n}function Tm(n,r){do{var a=kt;try{if(th(),Zl.current=ru,eu){for(var c=yt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}eu=!1}if(Ts=0,Lt=bt=yt=null,ma=!1,ga=0,Dh.current=null,a===null||a.return===null){Nt=1,Ea=r,kt=null;break}e:{var p=n,_=a.return,x=a,P=r;if(r=Wt,x.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,G=x,X=G.tag;if((G.mode&1)===0&&(X===0||X===11||X===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var re=Gp(_);if(re!==null){re.flags&=-257,Kp(re,_,x,p,r),re.mode&1&&Wp(p,U,r),r=re,P=U;var ae=r.updateQueue;if(ae===null){var de=new Set;de.add(P),r.updateQueue=de}else ae.add(P);break e}else{if((r&1)===0){Wp(p,U,r),Bh();break e}P=Error(t(426))}}else if(mt&&x.mode&1){var Tt=Gp(_);if(Tt!==null){(Tt.flags&65536)===0&&(Tt.flags|=256),Kp(Tt,_,x,p,r),Zc(yo(P,x));break e}}p=P=yo(P,x),Nt!==4&&(Nt=2),Ta===null?Ta=[p]:Ta.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=Hp(p,P,r);yp(p,L);break e;case 1:x=P;var V=p.type,j=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(bi===null||!bi.has(j)))){p.flags|=65536,r&=-r,p.lanes|=r;var J=qp(p,x,r);yp(p,J);break e}}p=p.return}while(p!==null)}km(a)}catch(ge){r=ge,kt===a&&a!==null&&(kt=a=a.return);continue}break}while(!0)}function Im(){var n=uu.current;return uu.current=ru,n===null?ru:n}function Bh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),jt===null||(Is&268435455)===0&&(cu&268435455)===0||Vi(jt,Wt)}function gu(n,r){var a=Qe;Qe|=2;var c=Im();(jt!==n||Wt!==r)&&(Qr=null,ks(n,r));do try{J_();break}catch(d){Tm(n,d)}while(!0);if(th(),Qe=a,uu.current=c,kt!==null)throw Error(t(261));return jt=null,Wt=0,Nt}function J_(){for(;kt!==null;)xm(kt)}function Z_(){for(;kt!==null&&!fl();)xm(kt)}function xm(n){var r=Cm(n.alternate,n,Nn);n.memoizedProps=n.pendingProps,r===null?km(n):kt=r,Dh.current=null}function km(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=q_(a,r,Nn),a!==null){kt=a;return}}else{if(a=W_(a,r),a!==null){a.flags&=32767,kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nt=6,kt=null;return}}if(r=r.sibling,r!==null){kt=r;return}kt=r=n}while(r!==null);Nt===0&&(Nt=5)}function Ss(n,r,a){var c=We,d=Wn.transition;try{Wn.transition=null,We=1,e1(n,r,a,c)}finally{Wn.transition=d,We=c}return null}function e1(n,r,a,c){do Eo();while(Ni!==null);if((Qe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(nt(n,p),n===jt&&(kt=jt=null,Wt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||du||(du=!0,Pm(Fn,function(){return Eo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Wn.transition,Wn.transition=null;var _=We;We=1;var x=Qe;Qe|=4,Dh.current=null,K_(n,a),mm(a,n),w_(Bc),Ei=!!zc,Bc=zc=null,n.current=a,Q_(a),kc(),Qe=x,We=_,Wn.transition=p}else n.current=a;if(du&&(du=!1,Ni=n,fu=d),p=n.pendingLanes,p===0&&(bi=null),gl(a.stateNode),_n(n,it()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(hu)throw hu=!1,n=Mh,Mh=null,n;return(fu&1)!==0&&n.tag!==0&&Eo(),p=n.pendingLanes,(p&1)!==0?n===Lh?Ia++:(Ia=0,Lh=n):Ia=0,Ai(),null}function Eo(){if(Ni!==null){var n=_i(fu),r=Wn.transition,a=We;try{if(Wn.transition=null,We=16>n?16:n,Ni===null)var c=!1;else{if(n=Ni,Ni=null,fu=0,(Qe&6)!==0)throw Error(t(331));var d=Qe;for(Qe|=4,oe=n.current;oe!==null;){var p=oe,_=p.child;if((oe.flags&16)!==0){var x=p.deletions;if(x!==null){for(var P=0;P<x.length;P++){var U=x[P];for(oe=U;oe!==null;){var G=oe;switch(G.tag){case 0:case 11:case 15:wa(8,G,p)}var X=G.child;if(X!==null)X.return=G,oe=X;else for(;oe!==null;){G=oe;var W=G.sibling,re=G.return;if(cm(G),G===U){oe=null;break}if(W!==null){W.return=re,oe=W;break}oe=re}}}var ae=p.alternate;if(ae!==null){var de=ae.child;if(de!==null){ae.child=null;do{var Tt=de.sibling;de.sibling=null,de=Tt}while(de!==null)}}oe=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,oe=_;else e:for(;oe!==null;){if(p=oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wa(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,oe=L;break e}oe=p.return}}var V=n.current;for(oe=V;oe!==null;){_=oe;var j=_.child;if((_.subtreeFlags&2064)!==0&&j!==null)j.return=_,oe=j;else e:for(_=V;oe!==null;){if(x=oe,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:lu(9,x)}}catch(ge){Et(x,x.return,ge)}if(x===_){oe=null;break e}var J=x.sibling;if(J!==null){J.return=x.return,oe=J;break e}oe=x.return}}if(Qe=d,Ai(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(us,n)}catch{}c=!0}return c}finally{We=a,Wn.transition=r}}return!1}function Sm(n,r,a){r=yo(a,r),r=Hp(n,r,1),n=Pi(n,r,1),r=ln(),n!==null&&(yi(n,1,r),_n(n,r))}function Et(n,r,a){if(n.tag===3)Sm(n,n,a);else for(;r!==null;){if(r.tag===3){Sm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(bi===null||!bi.has(c))){n=yo(a,n),n=qp(r,n,1),r=Pi(r,n,1),n=ln(),r!==null&&(yi(r,1,n),_n(r,n));break}}r=r.return}}function t1(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=ln(),n.pingedLanes|=n.suspendedLanes&a,jt===n&&(Wt&a)===a&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>it()-Oh?ks(n,0):Vh|=a),_n(n,r)}function Am(n,r){r===0&&((n.mode&1)===0?r=1:(r=$s,$s<<=1,($s&130023424)===0&&($s=4194304)));var a=ln();n=Wr(n,r),n!==null&&(yi(n,r,a),_n(n,a))}function n1(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Am(n,a)}function r1(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Am(n,a)}var Cm;Cm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||mn.current)yn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return yn=!1,H_(n,r,a);yn=(n.flags&131072)!==0}else yn=!1,mt&&(r.flags&1048576)!==0&&ap(r,ql,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;ou(n,r),n=r.pendingProps;var d=lo(r,Xt.current);mo(r,a),d=dh(null,r,c,n,d,a);var p=fh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,gn(c)?(p=!0,Bl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,sh(r),d.updater=iu,r.stateNode=d,d._reactInternals=r,_h(r,c,n,a),r=Ih(null,r,c,!0,p,a)):(r.tag=0,mt&&p&&Qc(r),an(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(ou(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=s1(c),n=or(c,n),d){case 0:r=Th(null,r,c,n,a);break e;case 1:r=em(null,r,c,n,a);break e;case 11:r=Qp(null,r,c,n,a);break e;case 14:r=Xp(null,r,c,or(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Th(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),em(n,r,c,d,a);case 3:e:{if(tm(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,gp(n,r),Yl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=yo(Error(t(423)),r),r=nm(n,r,c,a,d);break e}else if(c!==d){d=yo(Error(t(424)),r),r=nm(n,r,c,a,d);break e}else for(bn=xi(r.stateNode.containerInfo.firstChild),Rn=r,mt=!0,sr=null,a=pp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),c===d){r=Kr(n,r,a);break e}an(n,r,c,a)}r=r.child}return r;case 5:return _p(r),n===null&&Jc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,$c(c,d)?_=null:p!==null&&$c(c,p)&&(r.flags|=32),Zp(n,r),an(n,r,_,a),r.child;case 6:return n===null&&Jc(r),null;case 13:return rm(n,r,a);case 4:return oh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=fo(r,null,c,a):an(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),Qp(n,r,c,d,a);case 7:return an(n,r,r.pendingProps,a),r.child;case 8:return an(n,r,r.pendingProps.children,a),r.child;case 12:return an(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,st(Kl,c._currentValue),c._currentValue=_,p!==null)if(ir(p.value,_)){if(p.children===d.children&&!mn.current){r=Kr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var x=p.dependencies;if(x!==null){_=p.child;for(var P=x.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=Gr(-1,a&-a),P.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?P.next=P:(P.next=G.next,G.next=P),U.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),rh(p.return,a,r),x.lanes|=a;break}P=P.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,x=_.alternate,x!==null&&(x.lanes|=a),rh(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}an(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,mo(r,a),d=Hn(d),c=c(d),r.flags|=1,an(n,r,c,a),r.child;case 14:return c=r.type,d=or(c,r.pendingProps),d=or(c.type,d),Xp(n,r,c,d,a);case 15:return Yp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:or(c,d),ou(n,r),r.tag=1,gn(c)?(n=!0,Bl(r)):n=!1,mo(r,a),Bp(r,c,d),_h(r,c,d,a),Ih(null,r,c,!0,n,a);case 19:return sm(n,r,a);case 22:return Jp(n,r,a)}throw Error(t(156,r.tag))};function Pm(n,r){return zs(n,r)}function i1(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(n,r,a,c){return new i1(n,r,a,c)}function $h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s1(n){if(typeof n=="function")return $h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===C)return 11;if(n===ot)return 14}return 2}function Oi(n,r){var a=n.alternate;return a===null?(a=Gn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")$h(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return As(a.children,d,p,r);case I:_=8,d|=8;break;case S:return n=Gn(12,a,r,d|2),n.elementType=S,n.lanes=p,n;case k:return n=Gn(13,a,r,d),n.elementType=k,n.lanes=p,n;case tt:return n=Gn(19,a,r,d),n.elementType=tt,n.lanes=p,n;case je:return vu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:_=10;break e;case D:_=9;break e;case C:_=11;break e;case ot:_=14;break e;case wt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Gn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function As(n,r,a,c){return n=Gn(7,n,c,r),n.lanes=a,n}function vu(n,r,a,c){return n=Gn(22,n,c,r),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function Hh(n,r,a){return n=Gn(6,n,null,r),n.lanes=a,n}function qh(n,r,a){return r=Gn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function o1(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gi(0),this.expirationTimes=gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Wh(n,r,a,c,d,p,_,x,P){return n=new o1(n,r,a,x,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Gn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(p),n}function a1(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Rm(n){if(!n)return Si;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(gn(a))return ip(n,a,r)}return r}function bm(n,r,a,c,d,p,_,x,P){return n=Wh(a,c,!0,n,d,p,_,x,P),n.context=Rm(null),a=n.current,c=ln(),d=Di(a),p=Gr(c,d),p.callback=r??null,Pi(a,p,d),n.current.lanes=d,yi(n,d,c),_n(n,c),n}function _u(n,r,a,c){var d=r.current,p=ln(),_=Di(d);return a=Rm(a),r.context===null?r.context=a:r.pendingContext=a,r=Gr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Pi(d,r,_),n!==null&&(ur(n,d,_,p),Xl(n,d,_)),_}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Gh(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function l1(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kh(n){this._internalRoot=n}Eu.prototype.render=Kh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_u(n,r,null,null)},Eu.prototype.unmount=Kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xs(function(){_u(null,n,null,null)}),r[Br]=null}};function Eu(n){this._internalRoot=n}Eu.prototype.unstable_scheduleHydration=function(n){if(n){var r=El();n={blockedOn:null,target:n,priority:r};for(var a=0;a<gr.length&&r!==0&&r<gr[a].priority;a++);gr.splice(a,0,n),a===0&&xl(n)}};function Qh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function u1(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=wu(_);p.call(U)}}var _=bm(r,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=_,n[Br]=_.current,aa(n.nodeType===8?n.parentNode:n),xs(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var x=c;c=function(){var U=wu(P);x.call(U)}}var P=Wh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=P,n[Br]=P.current,aa(n.nodeType===8?n.parentNode:n),xs(function(){_u(r,P,a,c)}),P}function Iu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var x=d;d=function(){var P=wu(_);x.call(P)}}_u(r,_,n,d)}else _=u1(a,r,n,d,c);return wu(_)}_l=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=mi(r.pendingLanes);a!==0&&(vi(r,a|1),_n(r,it()),(Qe&6)===0&&(wo=it()+500,Ai()))}break;case 13:xs(function(){var c=Wr(n,1);if(c!==null){var d=ln();ur(c,n,1,d)}}),Gh(n,1)}},Hs=function(n){if(n.tag===13){var r=Wr(n,134217728);if(r!==null){var a=ln();ur(r,n,134217728,a)}Gh(n,134217728)}},wl=function(n){if(n.tag===13){var r=Di(n),a=Wr(n,r);if(a!==null){var c=ln();ur(a,n,r,c)}Gh(n,r)}},El=function(){return We},Tl=function(n,r){var a=We;try{return We=n,r()}finally{We=a}},hi=function(n,r,a){switch(r){case"input":if(Bt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ul(c);if(!d)throw Error(t(90));fr(c),Bt(c,d)}}}break;case"textarea":he(n,a);break;case"select":r=a.value,r!=null&&at(n,!!a.multiple,r,!1)}},Mr=Uh,os=xs;var c1={usingClientEntryPoint:!1,Events:[ca,oo,Ul,Mn,ss,Uh]},xa={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h1={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qo(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||l1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{us=xu.inject(h1),Sn=xu}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1,wn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qh(r))throw Error(t(200));return a1(n,r,null,a)},wn.createRoot=function(n,r){if(!Qh(n))throw Error(t(299));var a=!1,c="",d=Dm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Wh(n,1,!1,null,null,a,!1,c,d),n[Br]=r.current,aa(n.nodeType===8?n.parentNode:n),new Kh(r)},wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qo(r),n=n===null?null:n.stateNode,n},wn.flushSync=function(n){return xs(n)},wn.hydrate=function(n,r,a){if(!Tu(r))throw Error(t(200));return Iu(null,n,r,!0,a)},wn.hydrateRoot=function(n,r,a){if(!Qh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=bm(r,null,n,1,a??null,d,!1,p,_),n[Br]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Eu(r)},wn.render=function(n,r,a){if(!Tu(r))throw Error(t(200));return Iu(null,n,r,!1,a)},wn.unmountComponentAtNode=function(n){if(!Tu(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){Iu(null,null,n,!1,function(){n._reactRootContainer=null,n[Br]=null})}),!0):!1},wn.unstable_batchedUpdates=Uh,wn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Iu(n,r,a,!1,c)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var Bm;function w1(){if(Bm)return Jh.exports;Bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Jh.exports=_1(),Jh.exports}var $m;function E1(){if($m)return ku;$m=1;var i=w1();return ku.createRoot=i.createRoot,ku.hydrateRoot=i.hydrateRoot,ku}var T1=E1();const I1=xy(T1);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ky=(...i)=>i.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=ce.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>ce.createElement("svg",{ref:y,...k1,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:ky("lucide",o),...m},[...h.map(([w,T])=>ce.createElement(w,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(i,e)=>{const t=ce.forwardRef(({className:s,...o},u)=>ce.createElement(S1,{ref:u,iconNode:e,className:ky(`lucide-${x1(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=ve("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=ve("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=ve("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=ve("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=ve("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ve("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=ve("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=ve("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=ve("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=ve("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=ve("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=ve("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=ve("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=ve("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=ve("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=ve("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=ve("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=ve("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=ve("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=ve("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ve("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=ve("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=ve("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=ve("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ve("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=ve("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ve("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=ve("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=ve("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ve("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=ve("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=ve("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=ve("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ve("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=ve("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=ve("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ve("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ve("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=ve("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=ve("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ve("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=ve("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),X1=()=>{};var Km={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Y1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,w=y?i[o+2]:0,T=u>>2,A=(u&3)<<4|m>>4;let R=(m&15)<<2|w>>6,B=w&63;y||(B=64,h||(R=64)),s.push(t[T],t[A],t[R],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray($y(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Y1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const w=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||w==null||A==null)throw new J1;const R=u<<2|m>>4;if(s.push(R),w!==64){const B=m<<4&240|w>>2;if(s.push(B),A!==64){const Q=w<<6&192|A;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class J1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z1=function(i){const e=$y(i);return Hy.encodeByteArray(e,!0)},$u=function(i){return Z1(i).replace(/\./g,"")},qy=function(i){try{return Hy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=()=>ew().__FIREBASE_DEFAULTS__,nw=()=>{if(typeof process>"u"||typeof Km>"u")return;const i=Km.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},rw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qy(i[1]);return e&&JSON.parse(e)},cc=()=>{try{return X1()||tw()||nw()||rw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Wy=i=>{var e,t;return(t=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},iw=i=>{const e=Wy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Gy=()=>{var i;return(i=cc())===null||i===void 0?void 0:i.config},Ky=i=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qy(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[$u(JSON.stringify(t)),$u(JSON.stringify(h)),""].join(".")}const Da={};function aw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Da))Da[e]?i.emulator.push(e):i.prod.push(e);return i}function lw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Qm=!1;function Xy(i,e){if(typeof window>"u"||typeof document>"u"||!jo(window.location.host)||Da[i]===e||Da[i]||Qm)return;Da[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=aw().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function y(R,B){R.setAttribute("width","24"),R.setAttribute("id",B),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function w(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Qm=!0,h()},R}function T(R,B){R.setAttribute("id",B),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=lw(s),B=t("text"),Q=document.getElementById(B)||document.createElement("span"),Y=t("learnmore"),q=document.getElementById(Y)||document.createElement("a"),Ie=t("preprendIcon"),fe=document.getElementById(Ie)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const pe=R.element;m(pe),T(q,Y);const xe=w();y(fe,Ie),pe.append(fe,Q,q,xe),document.body.appendChild(pe)}u?(Q.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function cw(){var i;const e=(i=cc())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function fw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pw(){const i=rn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function mw(){return!cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gw(){try{return typeof indexedDB=="object"}catch{return!1}}function yw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="FirebaseError";class oi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vw,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?_w(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new oi(o,m,s)}}function _w(i,e){return i.replace(ww,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ww=/\{\$([^}]+)}/g;function Ew(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function bs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Xm(u)&&Xm(h)){if(!bs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Xm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Tw(i,e){const t=new Iw(i,e);return t.subscribe.bind(t)}class Iw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");xw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=td),o.error===void 0&&(o.error=td),o.complete===void 0&&(o.complete=td);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function td(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(i){return i&&i._delegate?i._delegate:i}class Ns{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new sw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aw(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sw(i){return i===Cs?void 0:i}function Aw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})($e||($e={}));const Pw={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},Rw=$e.INFO,bw={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},Nw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=bw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=Rw,this._logHandler=Nw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const Dw=(i,e)=>e.some(t=>i instanceof t);let Ym,Jm;function Vw(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ow(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yy=new WeakMap,dd=new WeakMap,Jy=new WeakMap,nd=new WeakMap,Ud=new WeakMap;function Mw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Hi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Yy.set(t,i)}).catch(()=>{}),Ud.set(e,i),e}function Lw(i){if(dd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});dd.set(i,e)}let fd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Jy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function jw(i){fd=i(fd)}function Fw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(rd(this),e,...t);return Jy.set(s,e.sort?e.sort():[e]),Hi(s)}:Ow().includes(i)?function(...e){return i.apply(rd(this),e),Hi(Yy.get(this))}:function(...e){return Hi(i.apply(rd(this),e))}}function Uw(i){return typeof i=="function"?Fw(i):(i instanceof IDBTransaction&&Lw(i),Dw(i,Vw())?new Proxy(i,fd):i)}function Hi(i){if(i instanceof IDBRequest)return Mw(i);if(nd.has(i))return nd.get(i);const e=Uw(i);return e!==i&&(nd.set(i,e),Ud.set(e,i)),e}const rd=i=>Ud.get(i);function zw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Hi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Hi(h.result),y.oldVersion,y.newVersion,Hi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",w=>o(w.oldVersion,w.newVersion,w))}).catch(()=>{}),m}const Bw=["get","getKey","getAll","getAllKeys","count"],$w=["put","add","delete","clear"],id=new Map;function Zm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=$w.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Bw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let w=y.store;return s&&(w=w.index(m.shift())),(await Promise.all([w[t](...m),o&&y.done]))[0]};return id.set(e,u),u}jw(i=>({...i,get:(e,t,s)=>Zm(e,t)||i.get(e,t,s),has:(e,t)=>!!Zm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function qw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",eg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Fd("@firebase/app"),Ww="@firebase/app-compat",Gw="@firebase/analytics-compat",Kw="@firebase/analytics",Qw="@firebase/app-check-compat",Xw="@firebase/app-check",Yw="@firebase/auth",Jw="@firebase/auth-compat",Zw="@firebase/database",eE="@firebase/data-connect",tE="@firebase/database-compat",nE="@firebase/functions",rE="@firebase/functions-compat",iE="@firebase/installations",sE="@firebase/installations-compat",oE="@firebase/messaging",aE="@firebase/messaging-compat",lE="@firebase/performance",uE="@firebase/performance-compat",cE="@firebase/remote-config",hE="@firebase/remote-config-compat",dE="@firebase/storage",fE="@firebase/storage-compat",pE="@firebase/firestore",mE="@firebase/ai",gE="@firebase/firestore-compat",yE="firebase",vE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",_E={[pd]:"fire-core",[Ww]:"fire-core-compat",[Kw]:"fire-analytics",[Gw]:"fire-analytics-compat",[Xw]:"fire-app-check",[Qw]:"fire-app-check-compat",[Yw]:"fire-auth",[Jw]:"fire-auth-compat",[Zw]:"fire-rtdb",[eE]:"fire-data-connect",[tE]:"fire-rtdb-compat",[nE]:"fire-fn",[rE]:"fire-fn-compat",[iE]:"fire-iid",[sE]:"fire-iid-compat",[oE]:"fire-fcm",[aE]:"fire-fcm-compat",[lE]:"fire-perf",[uE]:"fire-perf-compat",[cE]:"fire-rc",[hE]:"fire-rc-compat",[dE]:"fire-gcs",[fE]:"fire-gcs-compat",[pE]:"fire-fst",[gE]:"fire-fst-compat",[mE]:"fire-vertex","fire-js":"fire-js",[yE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new Map,wE=new Map,gd=new Map;function tg(i,e){try{i.container.addComponent(e)}catch(t){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function No(i){const e=i.name;if(gd.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,i);for(const t of Hu.values())tg(t,i);for(const t of wE.values())tg(t,i);return!0}function zd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Kn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new el("app","Firebase",EE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=vE;function Zy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:md,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw qi.create("bad-app-name",{appName:String(o)});if(t||(t=Gy()),!t)throw qi.create("no-options");const u=Hu.get(o);if(u){if(bs(t,u.options)&&bs(s,u.config))return u;throw qi.create("duplicate-app",{appName:o})}const h=new Cw(o);for(const y of gd.values())h.addComponent(y);const m=new TE(t,s,h);return Hu.set(o,m),m}function ev(i=md){const e=Hu.get(i);if(!e&&i===md&&Gy())return Zy();if(!e)throw qi.create("no-app",{appName:i});return e}function Wi(i,e,t){var s;let o=(s=_E[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(m.join(" "));return}No(new Ns(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebase-heartbeat-database",xE=1,Ba="firebase-heartbeat-store";let sd=null;function tv(){return sd||(sd=zw(IE,xE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw qi.create("idb-open",{originalErrorMessage:i.message})})),sd}async function kE(i){try{const t=(await tv()).transaction(Ba),s=await t.objectStore(Ba).get(nv(i));return await t.done,s}catch(e){if(e instanceof oi)ei.warn(e.message);else{const t=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ei.warn(t.message)}}}async function ng(i,e){try{const s=(await tv()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,nv(i)),await s.done}catch(t){if(t instanceof oi)ei.warn(t.message);else{const s=qi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ei.warn(s.message)}}}function nv(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=1024,AE=30;class CE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new RE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>AE){const h=bE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ei.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rg(),{heartbeatsToSend:s,unsentEntries:o}=PE(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return ei.warn(t),""}}}function rg(){return new Date().toISOString().substring(0,10)}function PE(i,e=SE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ig(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class RE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gw()?yw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ig(i){return $u(JSON.stringify({version:2,heartbeats:i})).length}function bE(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(i){No(new Ns("platform-logger",e=>new Hw(e),"PRIVATE")),No(new Ns("heartbeat",e=>new CE(e),"PRIVATE")),Wi(pd,eg,i),Wi(pd,eg,"esm2017"),Wi("fire-js","")}NE("");var DE="firebase",VE="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi(DE,VE,"app");function Bd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function rv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OE=rv,iv=new el("auth","Firebase",rv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Fd("@firebase/auth");function ME(i,...e){qu.logLevel<=$e.WARN&&qu.warn(`Auth (${Fo}): ${i}`,...e)}function Du(i,...e){qu.logLevel<=$e.ERROR&&qu.error(`Auth (${Fo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(i,...e){throw $d(i,...e)}function kr(i,...e){return $d(i,...e)}function sv(i,e,t){const s=Object.assign(Object.assign({},OE()),{[e]:t});return new el("auth","Firebase",s).create(e,{appName:i.name})}function Jr(i){return sv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return iv.create(i,...e)}function Pe(i,e,...t){if(!i)throw $d(e,...t)}function Xr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Du(e),new Error(e)}function ni(i,e){i||Xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function LE(){return sg()==="http:"||sg()==="https:"}function sg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LE()||dw()||"connection"in navigator)?navigator.onLine:!0}function FE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,ni(t>e,"Short delay should be less than long delay!"),this.isMobile=uw()||fw()}get(){return jE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(i,e){ni(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BE=new nl(3e4,6e4);function rl(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Uo(i,e,t,s,o={}){return av(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=tl(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const w=Object.assign({method:e,headers:y},u);return hw()||(w.referrerPolicy="no-referrer"),i.emulatorConfig&&jo(i.emulatorConfig.host)&&(w.credentials="include"),ov.fetch()(await lv(i,i.config.apiHost,t,m),w)})}async function av(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},UE),e);try{const o=new $E(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Su(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,w]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Su(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Su(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw sv(i,T,w);ti(i,T)}}catch(o){if(o instanceof oi)throw o;ti(i,"network-request-failed",{message:String(o)})}}async function qd(i,e,t,s,o={}){const u=await Uo(i,e,t,s,o);return"mfaPendingCredential"in u&&ti(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function lv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Hd(i.config,o):`${i.config.apiScheme}://${o}`;return zE.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class $E{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(kr(this.auth,"network-request-failed")),BE.get())})}}function Su(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=kr(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(i,e){return Uo(i,"POST","/v1/accounts:delete",e)}async function Wu(i,e){return Uo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qE(i,e=!1){const t=dr(i),s=await t.getIdToken(e),o=Wd(s);Pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Va(od(o.auth_time)),issuedAtTime:Va(od(o.iat)),expirationTime:Va(od(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function od(i){return Number(i)*1e3}function Wd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const o=qy(t);return o?JSON.parse(o):(Du("Failed to decode base64 JWT payload"),null)}catch(o){return Du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function og(i){const e=Wd(i);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof oi&&WE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function WE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await $a(i,Wu(t,{idToken:s}));Pe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?uv(u.providerUserInfo):[],m=QE(i.providerData,h),y=i.isAnonymous,w=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),T=y?w:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new vd(u.createdAt,u.lastLoginAt),isAnonymous:T};Object.assign(i,A)}async function KE(i){const e=dr(i);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QE(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function uv(i){return i.map(e=>{var{providerId:t}=e,s=Bd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(i,e){const t=await av(i,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await lv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&jo(i.emulatorConfig.host)&&(y.credentials="include"),ov.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function YE(i,e){return Uo(i,"POST","/v2/accounts:revokeToken",rl(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Pe(e.length!==0,"internal-error");const t=og(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await XE(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Co;return s&&(Pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(Pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(Pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(i,e){Pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new vd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await $a(this,this.stsTokenManager.getToken(this.auth,e));return Pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qE(this,e)}reload(){return KE(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Jr(this.auth));const e=await this.getIdToken();return await $a(this,HE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,w,T;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,Ie=(w=t.createdAt)!==null&&w!==void 0?w:void 0,fe=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:pe,emailVerified:xe,isAnonymous:Oe,providerData:ke,stsTokenManager:N}=t;Pe(pe&&N,e,"internal-error");const I=Co.fromJSON(this.name,N);Pe(typeof pe=="string",e,"internal-error"),Li(A,e.name),Li(R,e.name),Pe(typeof xe=="boolean",e,"internal-error"),Pe(typeof Oe=="boolean",e,"internal-error"),Li(B,e.name),Li(Q,e.name),Li(Y,e.name),Li(q,e.name),Li(Ie,e.name),Li(fe,e.name);const S=new cr({uid:pe,auth:e,email:R,emailVerified:xe,displayName:A,isAnonymous:Oe,photoURL:Q,phoneNumber:B,tenantId:Y,stsTokenManager:I,createdAt:Ie,lastLoginAt:fe});return ke&&Array.isArray(ke)&&(S.providerData=ke.map(b=>Object.assign({},b))),q&&(S._redirectEventId=q),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new Co;o.updateFromServerResponse(t);const u=new cr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?uv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Co;m.updateFromIdToken(s);const y=new cr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,w),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Map;function Yr(i){ni(i instanceof Function,"Expected a class definition");let e=ag.get(i);return e?(ni(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ag.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cv.type="NONE";const lg=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(i,e,t){return`firebase:${i}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Vu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Vu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?cr._fromGetAccountInfoResponse(this.auth,t,e):null}return cr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(Yr(lg),e,s);const o=(await Promise.all(t.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let u=o[0]||Yr(lg);const h=Vu(s,e.config.apiKey,e.name);let m=null;for(const w of t)try{const T=await w._get(h);if(T){let A;if(typeof T=="string"){const R=await Wu(e,{idToken:T}).catch(()=>{});if(!R)break;A=await cr._fromGetAccountInfoResponse(e,R,T)}else A=cr._fromJSON(e,T);w!==u&&(m=A),u=w;break}}catch{}const y=o.filter(w=>w._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Po(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async w=>{if(w!==u)try{await w._remove(h)}catch{}})),new Po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(yv(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||fv(e))&&!e.includes("edge/"))return"Chrome";if(mv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hv(i=rn()){return/firefox\//i.test(i)}function dv(i=rn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fv(i=rn()){return/crios\//i.test(i)}function pv(i=rn()){return/iemobile/i.test(i)}function mv(i=rn()){return/android/i.test(i)}function gv(i=rn()){return/blackberry/i.test(i)}function yv(i=rn()){return/webos/i.test(i)}function Gd(i=rn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function JE(i=rn()){var e;return Gd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZE(){return pw()&&document.documentMode===10}function vv(i=rn()){return Gd(i)||mv(i)||yv(i)||gv(i)||/windows phone/i.test(i)||pv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(i,e=[]){let t;switch(i){case"Browser":t=ug(rn());break;case"Worker":t=`${ug(rn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(i,e={}){return Uo(i,"GET","/v2/passwordPolicy",rl(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=6;class rT{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:nT,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cg(this),this.idTokenSubscription=new cg(this),this.beforeStateQueue=new eT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Yr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await cr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Jr(this));const t=e?dr(e):null;return t&&Pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tT(this),t=new rT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await YE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Yr(e)||this._popupRedirectResolver;Pe(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Yr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ME(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function il(i){return dr(i)}class cg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tw(t=>this.observer=t)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sT(i){Kd=i}function oT(i){return Kd.loadJS(i)}function aT(){return Kd.gapiScript}function lT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(i,e){const t=zd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(bs(u,e??{}))return o;ti(o,"already-initialized")}return t.initialize({options:e})}function cT(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Yr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hT(i,e,t){const s=il(i);Pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=wv(e),{host:h,port:m}=dT(e),y=m===null?"":`:${m}`,w={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Pe(bs(w,s.config.emulator)&&bs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,jo(h)?(Qy(`${u}//${h}${y}`),Xy("Auth",!0)):fT()}function wv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function dT(i){const e=wv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:hg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:hg(h)}}}function hg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function fT(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xr("not implemented")}_getIdTokenResponse(e){return Xr("not implemented")}_linkToIdToken(e,t){return Xr("not implemented")}_getReauthenticationResolver(e){return Xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(i,e){return qd(i,"POST","/v1/accounts:signInWithIdp",rl(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="http://localhost";class Ds extends Ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Bd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ds(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ro(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Tv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends sl{constructor(){super("facebook.com")}static credential(e){return Ds._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";ji.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ds._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Fi.credential(t,s)}catch{return null}}}Fi.GOOGLE_SIGN_IN_METHOD="google.com";Fi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends sl{constructor(){super("github.com")}static credential(e){return Ds._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.GITHUB_SIGN_IN_METHOD="github.com";Ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends sl{constructor(){super("twitter.com")}static credential(e,t){return Ds._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return zi.credential(t,s)}catch{return null}}}zi.TWITTER_SIGN_IN_METHOD="twitter.com";zi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(i,e){return qd(i,"POST","/v1/accounts:signUp",rl(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await cr._fromIdTokenResponse(e,s,o),h=dg(s);return new ri({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=dg(s);return new ri({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function dg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(i){var e;if(Kn(i.app))return Promise.reject(Jr(i));const t=il(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ri({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await mT(t,{returnSecureToken:!0}),o=await ri._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends oi{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ku(e,t,s,o)}}function Iv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(i,u,e,s):u})}async function yT(i,e,t=!1){const s=await $a(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ri._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(i,e,t=!1){const{auth:s}=i;if(Kn(s.app))return Promise.reject(Jr(s));const o="reauthenticate";try{const u=await $a(i,Iv(s,o,e,i),t);Pe(u.idToken,s,"internal-error");const h=Wd(u.idToken);Pe(h,s,"internal-error");const{sub:m}=h;return Pe(i.uid===m,s,"user-mismatch"),ri._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ti(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(i,e,t=!1){if(Kn(i.app))return Promise.reject(Jr(i));const s="signIn",o=await Iv(i,s,e),u=await ri._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(i,e){return qd(i,"POST","/v1/accounts:signInWithCustomToken",rl(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(i,e){if(Kn(i.app))return Promise.reject(Jr(i));const t=il(i),s=await wT(t,{token:e,returnSecureToken:!0}),o=await ri._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}function TT(i,e,t,s){return dr(i).onIdTokenChanged(e,t,s)}function IT(i,e,t){return dr(i).beforeAuthStateChanged(e,t)}function xT(i,e,t,s){return dr(i).onAuthStateChanged(e,t,s)}const Qu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1e3,ST=10;class kv extends xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);ZE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ST):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const AT=kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sv.type="SESSION";const Av=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new hc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async w=>w(t.origin,u)),y=await CT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const w=Qd("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const R=A;if(R.data.eventId===w)switch(R.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:w,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(){return window}function RT(i){Sr().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(){return typeof Sr().WorkerGlobalScope<"u"&&typeof Sr().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function DT(){return Cv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebaseLocalStorageDb",VT=1,Xu="firebaseLocalStorage",Rv="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dc(i,e){return i.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function OT(){const i=indexedDB.deleteDatabase(Pv);return new ol(i).toPromise()}function _d(){const i=indexedDB.open(Pv,VT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Xu,{keyPath:Rv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Xu)?e(s):(s.close(),await OT(),e(await _d()))})})}async function fg(i,e,t){const s=dc(i,!0).put({[Rv]:e,value:t});return new ol(s).toPromise()}async function MT(i,e){const t=dc(i,!1).get(e),s=await new ol(t).toPromise();return s===void 0?null:s.value}function pg(i,e){const t=dc(i,!0).delete(e);return new ol(t).toPromise()}const LT=800,jT=3;class bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>jT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(DT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new PT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await fg(e,Qu,"1"),await pg(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>MT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=dc(o,!1).getAll();return new ol(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bv.type="LOCAL";const FT=bv;new nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(i,e){return e?Yr(e):(Pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zT(i){return _T(i.auth,new Xd(i),i.bypassAuthState)}function BT(i){const{auth:e,user:t}=i;return Pe(t,e,"internal-error"),vT(t,new Xd(i),i.bypassAuthState)}async function $T(i){const{auth:e,user:t}=i;return Pe(t,e,"internal-error"),yT(t,new Xd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return $T;case"reauthViaPopup":case"reauthViaRedirect":return BT;default:ti(this.auth,"internal-error")}}resolve(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new nl(2e3,1e4);class So extends Nv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){ni(this.filter.length===1,"Popup operations only handle one event");const e=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HT.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="pendingRedirect",Ou=new Map;class WT extends Nv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ou.get(this.auth._key());if(!e){try{const s=await GT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ou.set(this.auth._key(),e)}return this.bypassAuthState||Ou.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GT(i,e){const t=XT(e),s=QT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function KT(i,e){Ou.set(i._key(),e)}function QT(i){return Yr(i._redirectPersistence)}function XT(i){return Vu(qT,i.config.apiKey,i.name)}async function YT(i,e,t=!1){if(Kn(i.app))return Promise.reject(Jr(i));const s=il(i),o=UT(s,e),h=await new WT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=600*1e3;class ZT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Dv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(kr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JT&&this.cachedEventUids.clear(),this.cachedEventUids.has(mg(e))}saveEventToCache(e){this.cachedEventUids.add(mg(e)),this.lastProcessedEventTime=Date.now()}}function mg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Dv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(i,e={}){return Uo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rI=/^https?/;async function iI(i){if(i.config.emulator)return;const{authorizedDomains:e}=await tI(i);for(const t of e)try{if(sI(t))return}catch{}ti(i,"unauthorized-domain")}function sI(i){const e=yd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!rI.test(t))return!1;if(nI.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new nl(3e4,6e4);function gg(){const i=Sr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function aI(i){return new Promise((e,t)=>{var s,o,u;function h(){gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gg(),t(kr(i,"network-request-failed"))},timeout:oI.get()})}if(!((o=(s=Sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Sr().gapi)===null||u===void 0)&&u.load)h();else{const m=lT("iframefcb");return Sr()[m]=()=>{gapi.load?h():t(kr(i,"network-request-failed"))},oT(`${aT()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function lI(i){return Mu=Mu||aI(i),Mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new nl(5e3,15e3),cI="__/auth/iframe",hI="emulator/auth/iframe",dI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pI(i){const e=i.config;Pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Hd(e,hI):`https://${i.config.authDomain}/${cI}`,s={apiKey:e.apiKey,appName:i.name,v:Fo},o=fI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${tl(s).slice(1)}`}async function mI(i){const e=await lI(i),t=Sr().gapi;return Pe(t,i,"internal-error"),e.open({where:document.body,url:pI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=kr(i,"network-request-failed"),m=Sr().setTimeout(()=>{u(h)},uI.get());function y(){Sr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yI=500,vI=600,_I="_blank",wI="http://localhost";class yg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EI(i,e,t,s=yI,o=vI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},gI),{width:s.toString(),height:o.toString(),top:u,left:h}),w=rn().toLowerCase();t&&(m=fv(w)?_I:t),hv(w)&&(e=e||wI,y.scrollbars="yes");const T=Object.entries(y).reduce((R,[B,Q])=>`${R}${B}=${Q},`,"");if(JE(w)&&m!=="_self")return TI(e||"",m),new yg(null);const A=window.open(e||"",m,T);Pe(A,i,"popup-blocked");try{A.focus()}catch{}return new yg(A)}function TI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="__/auth/handler",xI="emulator/auth/handler",kI=encodeURIComponent("fac");async function vg(i,e,t,s,o,u){Pe(i.config.authDomain,i,"auth-domain-config-required"),Pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Fo,eventId:o};if(e instanceof Tv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",Ew(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))h[T]=A}if(e instanceof sl){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),w=y?`#${kI}=${encodeURIComponent(y)}`:"";return`${SI(i)}?${tl(m).slice(1)}${w}`}function SI({config:i}){return i.emulator?Hd(i,xI):`https://${i.authDomain}/${II}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class AI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Av,this._completeRedirectFn=YT,this._overrideRedirectResult=KT}async _openPopup(e,t,s,o){var u;ni((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await vg(e,t,s,yd(),o);return EI(e,h,Qd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await vg(e,t,s,yd(),o);return RT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(ni(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await mI(e),s=new ZT(e);return t.register("authEvent",o=>(Pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ad,{type:ad},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ad];h!==void 0&&t(!!h),ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vv()||dv()||Gd()}}const CI=AI;var _g="@firebase/auth",wg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bI(i){No(new Ns("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;Pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_v(i)},w=new iT(s,o,u,y);return cT(w,t),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),No(new Ns("auth-internal",e=>{const t=il(e.getProvider("auth").getImmediate());return(s=>new PI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wi(_g,wg,RI(i)),Wi(_g,wg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=300,DI=Ky("authIdTokenMaxAge")||NI;let Eg=null;const VI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>DI)return;const o=t==null?void 0:t.token;Eg!==o&&(Eg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function OI(i=ev()){const e=zd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=uT(i,{popupRedirectResolver:CI,persistence:[FT,AT,Av]}),s=Ky("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=VI(u.toString());IT(t,h,()=>h(t.currentUser)),TT(t,m=>h(m))}}const o=Wy("auth");return o&&hT(t,`http://${o}`),t}function MI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}sT({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=kr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",MI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bI("Browser");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gi,Vv;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function S(){}S.prototype=I.prototype,N.D=I.prototype,N.prototype=new S,N.prototype.constructor=N,N.C=function(b,D,C){for(var k=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)k[tt-2]=arguments[tt];return I.prototype[D].apply(b,k)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,S){S||(S=0);var b=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)b[D]=I.charCodeAt(S++)|I.charCodeAt(S++)<<8|I.charCodeAt(S++)<<16|I.charCodeAt(S++)<<24;else for(D=0;16>D;++D)b[D]=I[S++]|I[S++]<<8|I[S++]<<16|I[S++]<<24;I=N.g[0],S=N.g[1],D=N.g[2];var C=N.g[3],k=I+(C^S&(D^C))+b[0]+3614090360&4294967295;I=S+(k<<7&4294967295|k>>>25),k=C+(D^I&(S^D))+b[1]+3905402710&4294967295,C=I+(k<<12&4294967295|k>>>20),k=D+(S^C&(I^S))+b[2]+606105819&4294967295,D=C+(k<<17&4294967295|k>>>15),k=S+(I^D&(C^I))+b[3]+3250441966&4294967295,S=D+(k<<22&4294967295|k>>>10),k=I+(C^S&(D^C))+b[4]+4118548399&4294967295,I=S+(k<<7&4294967295|k>>>25),k=C+(D^I&(S^D))+b[5]+1200080426&4294967295,C=I+(k<<12&4294967295|k>>>20),k=D+(S^C&(I^S))+b[6]+2821735955&4294967295,D=C+(k<<17&4294967295|k>>>15),k=S+(I^D&(C^I))+b[7]+4249261313&4294967295,S=D+(k<<22&4294967295|k>>>10),k=I+(C^S&(D^C))+b[8]+1770035416&4294967295,I=S+(k<<7&4294967295|k>>>25),k=C+(D^I&(S^D))+b[9]+2336552879&4294967295,C=I+(k<<12&4294967295|k>>>20),k=D+(S^C&(I^S))+b[10]+4294925233&4294967295,D=C+(k<<17&4294967295|k>>>15),k=S+(I^D&(C^I))+b[11]+2304563134&4294967295,S=D+(k<<22&4294967295|k>>>10),k=I+(C^S&(D^C))+b[12]+1804603682&4294967295,I=S+(k<<7&4294967295|k>>>25),k=C+(D^I&(S^D))+b[13]+4254626195&4294967295,C=I+(k<<12&4294967295|k>>>20),k=D+(S^C&(I^S))+b[14]+2792965006&4294967295,D=C+(k<<17&4294967295|k>>>15),k=S+(I^D&(C^I))+b[15]+1236535329&4294967295,S=D+(k<<22&4294967295|k>>>10),k=I+(D^C&(S^D))+b[1]+4129170786&4294967295,I=S+(k<<5&4294967295|k>>>27),k=C+(S^D&(I^S))+b[6]+3225465664&4294967295,C=I+(k<<9&4294967295|k>>>23),k=D+(I^S&(C^I))+b[11]+643717713&4294967295,D=C+(k<<14&4294967295|k>>>18),k=S+(C^I&(D^C))+b[0]+3921069994&4294967295,S=D+(k<<20&4294967295|k>>>12),k=I+(D^C&(S^D))+b[5]+3593408605&4294967295,I=S+(k<<5&4294967295|k>>>27),k=C+(S^D&(I^S))+b[10]+38016083&4294967295,C=I+(k<<9&4294967295|k>>>23),k=D+(I^S&(C^I))+b[15]+3634488961&4294967295,D=C+(k<<14&4294967295|k>>>18),k=S+(C^I&(D^C))+b[4]+3889429448&4294967295,S=D+(k<<20&4294967295|k>>>12),k=I+(D^C&(S^D))+b[9]+568446438&4294967295,I=S+(k<<5&4294967295|k>>>27),k=C+(S^D&(I^S))+b[14]+3275163606&4294967295,C=I+(k<<9&4294967295|k>>>23),k=D+(I^S&(C^I))+b[3]+4107603335&4294967295,D=C+(k<<14&4294967295|k>>>18),k=S+(C^I&(D^C))+b[8]+1163531501&4294967295,S=D+(k<<20&4294967295|k>>>12),k=I+(D^C&(S^D))+b[13]+2850285829&4294967295,I=S+(k<<5&4294967295|k>>>27),k=C+(S^D&(I^S))+b[2]+4243563512&4294967295,C=I+(k<<9&4294967295|k>>>23),k=D+(I^S&(C^I))+b[7]+1735328473&4294967295,D=C+(k<<14&4294967295|k>>>18),k=S+(C^I&(D^C))+b[12]+2368359562&4294967295,S=D+(k<<20&4294967295|k>>>12),k=I+(S^D^C)+b[5]+4294588738&4294967295,I=S+(k<<4&4294967295|k>>>28),k=C+(I^S^D)+b[8]+2272392833&4294967295,C=I+(k<<11&4294967295|k>>>21),k=D+(C^I^S)+b[11]+1839030562&4294967295,D=C+(k<<16&4294967295|k>>>16),k=S+(D^C^I)+b[14]+4259657740&4294967295,S=D+(k<<23&4294967295|k>>>9),k=I+(S^D^C)+b[1]+2763975236&4294967295,I=S+(k<<4&4294967295|k>>>28),k=C+(I^S^D)+b[4]+1272893353&4294967295,C=I+(k<<11&4294967295|k>>>21),k=D+(C^I^S)+b[7]+4139469664&4294967295,D=C+(k<<16&4294967295|k>>>16),k=S+(D^C^I)+b[10]+3200236656&4294967295,S=D+(k<<23&4294967295|k>>>9),k=I+(S^D^C)+b[13]+681279174&4294967295,I=S+(k<<4&4294967295|k>>>28),k=C+(I^S^D)+b[0]+3936430074&4294967295,C=I+(k<<11&4294967295|k>>>21),k=D+(C^I^S)+b[3]+3572445317&4294967295,D=C+(k<<16&4294967295|k>>>16),k=S+(D^C^I)+b[6]+76029189&4294967295,S=D+(k<<23&4294967295|k>>>9),k=I+(S^D^C)+b[9]+3654602809&4294967295,I=S+(k<<4&4294967295|k>>>28),k=C+(I^S^D)+b[12]+3873151461&4294967295,C=I+(k<<11&4294967295|k>>>21),k=D+(C^I^S)+b[15]+530742520&4294967295,D=C+(k<<16&4294967295|k>>>16),k=S+(D^C^I)+b[2]+3299628645&4294967295,S=D+(k<<23&4294967295|k>>>9),k=I+(D^(S|~C))+b[0]+4096336452&4294967295,I=S+(k<<6&4294967295|k>>>26),k=C+(S^(I|~D))+b[7]+1126891415&4294967295,C=I+(k<<10&4294967295|k>>>22),k=D+(I^(C|~S))+b[14]+2878612391&4294967295,D=C+(k<<15&4294967295|k>>>17),k=S+(C^(D|~I))+b[5]+4237533241&4294967295,S=D+(k<<21&4294967295|k>>>11),k=I+(D^(S|~C))+b[12]+1700485571&4294967295,I=S+(k<<6&4294967295|k>>>26),k=C+(S^(I|~D))+b[3]+2399980690&4294967295,C=I+(k<<10&4294967295|k>>>22),k=D+(I^(C|~S))+b[10]+4293915773&4294967295,D=C+(k<<15&4294967295|k>>>17),k=S+(C^(D|~I))+b[1]+2240044497&4294967295,S=D+(k<<21&4294967295|k>>>11),k=I+(D^(S|~C))+b[8]+1873313359&4294967295,I=S+(k<<6&4294967295|k>>>26),k=C+(S^(I|~D))+b[15]+4264355552&4294967295,C=I+(k<<10&4294967295|k>>>22),k=D+(I^(C|~S))+b[6]+2734768916&4294967295,D=C+(k<<15&4294967295|k>>>17),k=S+(C^(D|~I))+b[13]+1309151649&4294967295,S=D+(k<<21&4294967295|k>>>11),k=I+(D^(S|~C))+b[4]+4149444226&4294967295,I=S+(k<<6&4294967295|k>>>26),k=C+(S^(I|~D))+b[11]+3174756917&4294967295,C=I+(k<<10&4294967295|k>>>22),k=D+(I^(C|~S))+b[2]+718787259&4294967295,D=C+(k<<15&4294967295|k>>>17),k=S+(C^(D|~I))+b[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(k<<21&4294967295|k>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+C&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var S=I-this.blockSize,b=this.B,D=this.h,C=0;C<I;){if(D==0)for(;C<=S;)o(this,N,C),C+=this.blockSize;if(typeof N=="string"){for(;C<I;)if(b[D++]=N.charCodeAt(C++),D==this.blockSize){o(this,b),D=0;break}}else for(;C<I;)if(b[D++]=N[C++],D==this.blockSize){o(this,b),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var S=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=S&255,S/=256;for(this.u(N),N=Array(16),I=S=0;4>I;++I)for(var b=0;32>b;b+=8)N[S++]=this.g[I]>>>b&255;return N};function u(N,I){var S=m;return Object.prototype.hasOwnProperty.call(S,N)?S[N]:S[N]=I(N)}function h(N,I){this.h=I;for(var S=[],b=!0,D=N.length-1;0<=D;D--){var C=N[D]|0;b&&C==I||(S[D]=C,b=!1)}this.g=S}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function w(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return q(w(-N));for(var I=[],S=1,b=0;N>=S;b++)I[b]=N/S|0,S*=4294967296;return new h(I,0)}function T(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return q(T(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=w(Math.pow(I,8)),b=A,D=0;D<N.length;D+=8){var C=Math.min(8,N.length-D),k=parseInt(N.substring(D,D+C),I);8>C?(C=w(Math.pow(I,C)),b=b.j(C).add(w(k))):(b=b.j(S),b=b.add(w(k)))}return b}var A=y(0),R=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-q(this).m();for(var N=0,I=1,S=0;S<this.g.length;S++){var b=this.i(S);N+=(0<=b?b:4294967296+b)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(Y(this))return"-"+q(this).toString(N);for(var I=w(Math.pow(N,6)),S=this,b="";;){var D=xe(S,I).g;S=Ie(S,D.j(I));var C=((0<S.g.length?S.g[0]:S.h)>>>0).toString(N);if(S=D,Q(S))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=Ie(this,N),Y(N)?-1:Q(N)?0:1};function q(N){for(var I=N.g.length,S=[],b=0;b<I;b++)S[b]=~N.g[b];return new h(S,~N.h).add(R)}i.abs=function(){return Y(this)?q(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),S=[],b=0,D=0;D<=I;D++){var C=b+(this.i(D)&65535)+(N.i(D)&65535),k=(C>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);b=k>>>16,C&=65535,k&=65535,S[D]=k<<16|C}return new h(S,S[S.length-1]&-2147483648?-1:0)};function Ie(N,I){return N.add(q(I))}i.j=function(N){if(Q(this)||Q(N))return A;if(Y(this))return Y(N)?q(this).j(q(N)):q(q(this).j(N));if(Y(N))return q(this.j(q(N)));if(0>this.l(B)&&0>N.l(B))return w(this.m()*N.m());for(var I=this.g.length+N.g.length,S=[],b=0;b<2*I;b++)S[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<N.g.length;D++){var C=this.i(b)>>>16,k=this.i(b)&65535,tt=N.i(D)>>>16,ot=N.i(D)&65535;S[2*b+2*D]+=k*ot,fe(S,2*b+2*D),S[2*b+2*D+1]+=C*ot,fe(S,2*b+2*D+1),S[2*b+2*D+1]+=k*tt,fe(S,2*b+2*D+1),S[2*b+2*D+2]+=C*tt,fe(S,2*b+2*D+2)}for(b=0;b<I;b++)S[b]=S[2*b+1]<<16|S[2*b];for(b=I;b<2*I;b++)S[b]=0;return new h(S,0)};function fe(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function pe(N,I){this.g=N,this.h=I}function xe(N,I){if(Q(I))throw Error("division by zero");if(Q(N))return new pe(A,A);if(Y(N))return I=xe(q(N),I),new pe(q(I.g),q(I.h));if(Y(I))return I=xe(N,q(I)),new pe(q(I.g),I.h);if(30<N.g.length){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var S=R,b=I;0>=b.l(N);)S=Oe(S),b=Oe(b);var D=ke(S,1),C=ke(b,1);for(b=ke(b,2),S=ke(S,2);!Q(b);){var k=C.add(b);0>=k.l(N)&&(D=D.add(S),C=k),b=ke(b,1),S=ke(S,1)}return I=Ie(N,D.j(I)),new pe(D,I)}for(D=A;0<=N.l(I);){for(S=Math.max(1,Math.floor(N.m()/I.m())),b=Math.ceil(Math.log(S)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=w(S),k=C.j(I);Y(k)||0<k.l(N);)S-=b,C=w(S),k=C.j(I);Q(C)&&(C=R),D=D.add(C),N=Ie(N,k)}return new pe(D,N)}i.A=function(N){return xe(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),S=[],b=0;b<I;b++)S[b]=this.i(b)&N.i(b);return new h(S,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),S=[],b=0;b<I;b++)S[b]=this.i(b)|N.i(b);return new h(S,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),S=[],b=0;b<I;b++)S[b]=this.i(b)^N.i(b);return new h(S,this.h^N.h)};function Oe(N){for(var I=N.g.length+1,S=[],b=0;b<I;b++)S[b]=N.i(b)<<1|N.i(b-1)>>>31;return new h(S,N.h)}function ke(N,I){var S=I>>5;I%=32;for(var b=N.g.length-S,D=[],C=0;C<b;C++)D[C]=0<I?N.i(C+S)>>>I|N.i(C+S+1)<<32-I:N.i(C+S);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Vv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=w,h.fromString=T,Gi=h}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ov,Sa,Mv,Lu,wd,Lv,jv,Fv;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,M={next:function(){if(!E&&g<l.length){var z=g++;return{value:f(z,l[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function w(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function T(l,f,g){return l.call.apply(l.bind,arguments)}function A(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function R(l,f,g){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:A,R.apply(null,arguments)}function B(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,M,z){for(var te=Array(arguments.length-2),et=2;et<arguments.length;et++)te[et-2]=arguments[et];return f.prototype[M].apply(E,te)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function q(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const M=l.length||0,z=E.length||0;l.length=M+z;for(let te=0;te<z;te++)l[M+te]=E[te]}else l.push(E)}}class Ie{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(l){return/^[\s\xa0]*$/.test(l)}function pe(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function xe(l){return xe[" "](l),l}xe[" "]=function(){};var Oe=pe().indexOf("Gecko")!=-1&&!(pe().toLowerCase().indexOf("webkit")!=-1&&pe().indexOf("Edge")==-1)&&!(pe().indexOf("Trident")!=-1||pe().indexOf("MSIE")!=-1)&&pe().indexOf("Edge")==-1;function ke(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,f){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let z=0;z<S.length;z++)g=S[z],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function C(l){m.setTimeout(()=>{throw l},0)}function k(){var l=me;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,g){const E=ot.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ot=new Ie(()=>new wt,l=>l.reset());class wt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,me=new tt,ne=()=>{const l=m.Promise.resolve(void 0);je=()=>{l.then(O)}};var O=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(g){C(g)}var f=ot;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function Ve(l,f){if(ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Oe){e:{try{xe(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Me[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ve.aa.h.call(this)}}Q(Ve,ue);var Me={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),qe=0;function Ye(l,f,g,E,M){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=M,this.key=++qe,this.da=this.fa=!1}function ht(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function un(l){this.src=l,this.g={},this.h=0}un.prototype.add=function(l,f,g,E,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var te=Tn(l,f,E,M);return-1<te?(f=l[te],g||(f.fa=!1)):(f=new Ye(f,this.src,z,!!E,M),f.fa=g,l.push(f)),f};function fr(l,f){var g=f.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(E,M,1),z&&(ht(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Tn(l,f,g,E){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==f&&z.capture==!!g&&z.ha==E)return M}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),In={};function pr(l,f,g,E,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)pr(l,f[z],g,E,M);return null}return g=Le(g),l&&l[Fe]?l.K(f,g,w(E)?!!E.capture:!1,M):Bt(l,f,g,!1,E,M)}function Bt(l,f,g,E,M,z){if(!f)throw Error("Invalid event type");var te=w(M)?!!M.capture:!!M,et=Ct(l);if(et||(l[Dn]=et=new un(l)),g=et.add(f,g,E,te,z),g.proxy)return g;if(E=xn(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ae||(M=te),M===void 0&&(M=!1),l.addEventListener(f.toString(),E,M);else if(l.attachEvent)l.attachEvent(at(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xn(){function l(g){return f.call(l.src,l.listener,g)}const f=Ot;return l}function Vn(l,f,g,E,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)Vn(l,f[z],g,E,M);else E=w(E)?!!E.capture:!!E,g=Le(g),l&&l[Fe]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],g=Tn(z,g,E,M),-1<g&&(ht(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=Ct(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Tn(f,g,E,M)),(g=-1<l?f[l]:null)&&Re(g))}function Re(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Fe])fr(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(at(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=Ct(f))?(fr(g,l),g.h==0&&(g.src=null,f[Dn]=null)):ht(l)}}}function at(l){return l in In?In[l]:In[l]="on"+l}function Ot(l,f){if(l.da)l=!0;else{f=new Ve(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Re(l),l=g.call(E,f)}return l}function Ct(l){return l=l[Dn],l instanceof un?l:null}var he="__closure_events_fn_"+(1e9*Math.random()>>>0);function Le(l){return typeof l=="function"?l:(l[he]||(l[he]=function(f){return l.handleEvent(f)}),l[he])}function be(){$.call(this),this.i=new un(this),this.M=this,this.F=null}Q(be,$),be.prototype[Fe]=!0,be.prototype.removeEventListener=function(l,f,g,E){Vn(this,l,f,g,E)};function Ze(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ue(f,l);else if(f instanceof ue)f.target=f.target||l;else{var M=f;f=new ue(E,l),b(f,M)}if(M=!0,g)for(var z=g.length-1;0<=z;z--){var te=f.g=g[z];M=cn(te,E,!0,f)&&M}if(te=f.g=l,M=cn(te,E,!0,f)&&M,M=cn(te,E,!1,f)&&M,g)for(z=0;z<g.length;z++)te=f.g=g[z],M=cn(te,E,!1,f)&&M}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)ht(g[E]);delete l.g[f],l.h--}}this.F=null},be.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},be.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function cn(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var te=f[z];if(te&&!te.da&&te.capture==g){var et=te.listener,Rt=te.ha||te.src;te.fa&&fr(l.i,te),M=et.call(Rt,E)!==!1&&M}}return M&&!E.defaultPrevented}function ai(l,f,g){if(typeof l=="function")g&&(l=R(l,g));else if(l&&typeof l.handleEvent=="function")l=R(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Yn(l){l.g=ai(()=>{l.g=null,l.i&&(l.i=!1,Yn(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Dr extends ${constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Yn(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(l){$.call(this),this.h=l,this.g={}}Q(Vr,$);var ns=[];function rs(l){ke(l.g,function(f,g){this.g.hasOwnProperty(g)&&Re(f)},l),l.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),rs(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var li=m.JSON.stringify,ui=m.JSON.parse,is=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Or(){}Or.prototype.h=null;function ci(l){return l.h||(l.h=l.i())}function hi(){}var hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function On(){ue.call(this,"d")}Q(On,ue);function di(){ue.call(this,"c")}Q(di,ue);var Mn={},ss=null;function Mr(){return ss=ss||new be}Mn.La="serverreachability";function os(l){ue.call(this,Mn.La,l)}Q(os,ue);function Ln(l){const f=Mr();Ze(f,new os(f))}Mn.STAT_EVENT="statevent";function fi(l,f){ue.call(this,Mn.STAT_EVENT,l),this.stat=f}Q(fi,ue);function dt(l){const f=Mr();Ze(f,new fi(f,l))}Mn.Ma="timingevent";function F(l,f){ue.call(this,Mn.Ma,l),this.size=f}Q(F,ue);function ee(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function se(){this.g=!0}se.prototype.xa=function(){this.g=!1};function _e(l,f,g,E,M,z){l.info(function(){if(l.g)if(z)for(var te="",et=z.split("&"),Rt=0;Rt<et.length;Rt++){var Ge=et[Rt].split("=");if(1<Ge.length){var Mt=Ge[0];Ge=Ge[1];var xt=Mt.split("_");te=2<=xt.length&&xt[1]=="type"?te+(Mt+"="+Ge+"&"):te+(Mt+"=redacted&")}}else te=null;else te=z;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+f+`
`+g+`
`+te})}function Be(l,f,g,E,M,z,te){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+f+`
`+g+`
`+z+" "+te})}function rt(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+jn(l,g)+(E?" "+E:"")})}function ft(l,f){l.info(function(){return"TIMEOUT: "+f})}se.prototype.info=function(){};function jn(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return li(g)}catch{return f}}var Pt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function as(){}Q(as,Or),as.prototype.g=function(){return new XMLHttpRequest},as.prototype.i=function(){return{}},kn=new as;function Jn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new dl}function dl(){this.i=null,this.g="",this.h=!1}var qo={},Us={};function zs(l,f,g){l.L=1,l.v=vi(An(f)),l.m=g,l.P=!0,Wo(l,null)}function Wo(l,f){l.F=Date.now(),it(l),l.A=An(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),wi(g.i,"t",E),l.C=0,g=l.j.J,l.h=new dl,l.g=Rl(l.j,g?f:null,!l.m),0<l.O&&(l.M=new Dr(R(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(ns[0]=M.toString()),M=ns);for(var z=0;z<M.length;z++){var te=pr(g,M[z],E||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Ln(),_e(l.i,l.u,l.A,l.l,l.R,l.m)}Jn.prototype.ca=function(l){l=l.target;const f=this.M;f&&pn(l)==3?f.j():this.Y(l)},Jn.prototype.Y=function(l){try{if(l==this.g)e:{const xt=pn(this.g);var f=this.g.Ba();const zn=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Jo(this.g)))){this.J||xt!=4||f==7||(f==8||0>=zn?Ln(3):Ln(2)),ls(this);var g=this.g.Z();this.X=g;t:if(fl(this)){var E=Jo(this.g);l="";var M=E.length,z=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),pi(this);var te="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(z&&f==M-1)});E.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=g==200,Be(this.i,this.u,this.A,this.l,this.R,xt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var et,Rt=this.g;if((et=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(et)){var Ge=et;break t}}Ge=null}if(g=Ge)rt(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Go(this,g);else{this.o=!1,this.s=3,dt(12),Fn(this),pi(this);break e}}if(this.P){g=!0;let Pn;for(;!this.J&&this.C<te.length;)if(Pn=kc(this,te),Pn==Us){xt==4&&(this.s=4,dt(14),g=!1),rt(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==qo){this.s=4,dt(15),rt(this.i,this.l,te,"[Invalid Chunk]"),g=!1;break}else rt(this.i,this.l,Pn,null),Go(this,Pn);if(fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||te.length!=0||this.h.h||(this.s=1,dt(16),g=!1),this.o=this.o&&g,!g)rt(this.i,this.l,te,"[Invalid Chunked Response]"),Fn(this),pi(this);else if(0<te.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ea(Mt),Mt.M=!0,dt(11))}}else rt(this.i,this.l,te,null),Go(this,te);xt==4&&Fn(this),this.o&&!this.J&&(xt==4?Js(this.j,this):(this.o=!1,it(this)))}else Gs(this.g),g==400&&0<te.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Fn(this),pi(this)}}}catch{}finally{}};function fl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?Us:(g=Number(f.substring(g,E)),isNaN(g)?qo:(E+=1,E+g>f.length?Us:(f=f.slice(E,E+g),l.C=E+g,f)))}Jn.prototype.cancel=function(){this.J=!0,Fn(this)};function it(l){l.S=Date.now()+l.I,pl(l,l.I)}function pl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ee(R(l.ba,l),f)}function ls(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Jn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ft(this.i,this.A),this.L!=2&&(Ln(),dt(17)),Fn(this),this.s=2,pi(this)):pl(this,this.S-l)};function pi(l){l.j.G==0||l.J||Js(l.j,l)}function Fn(l){ls(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,rs(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Go(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||sn(g.h,l))){if(!l.K&&sn(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ys(g),rr(g);else break e;Xs(g),dt(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=ee(R(g.Za,g),6e3));if(1>=gl(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else zr(g,11)}else if((l.K||g.g==l)&&Ys(g),!fe(f))for(M=g.Da.g.parse(f),f=0;f<M.length;f++){let Ge=M[f];if(g.T=Ge[0],Ge=Ge[1],g.G==2)if(Ge[0]=="c"){g.K=Ge[1],g.ia=Ge[2];const Mt=Ge[3];Mt!=null&&(g.la=Mt,g.j.info("VER="+g.la));const xt=Ge[4];xt!=null&&(g.Aa=xt,g.j.info("SVER="+g.Aa));const zn=Ge[5];zn!=null&&typeof zn=="number"&&0<zn&&(E=1.5*zn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Pn=l.g;if(Pn){const ms=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var z=E.h;z.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ko(z,z.h),z.h=null))}if(E.D){const eo=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(E.ya=eo,nt(E.I,E.D,eo))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var te=l;if(E.qa=Pl(E,E.J?E.ia:null,E.W),te.K){yl(E.h,te);var et=te,Rt=E.L;Rt&&(et.I=Rt),et.B&&(ls(et),it(et)),E.g=te}else ps(E);0<g.i.length&&vr(g)}else Ge[0]!="stop"&&Ge[0]!="close"||zr(g,7);else g.G==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?zr(g,7):Ht(g):Ge[0]!="noop"&&g.l&&g.l.ta(Ge),g.v=0)}}Ln(4)}catch{}}var ml=class{constructor(l,f){this.g=l,this.map=f}};function us(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function gl(l){return l.h?1:l.g?l.g.size:0}function sn(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ko(l,f){l.g?l.g.add(f):l.h=f}function yl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}us.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function vl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function Bs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function $s(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function mi(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=$s(l),E=Bs(l),M=E.length,z=0;z<M;z++)f.call(void 0,E[z],g&&g[z],l)}var cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sc(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),M=null;if(0<=E){var z=l[g].substring(0,E);M=l[g].substring(E+1)}else z=l[g];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Lr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Lr){this.h=l.h,hs(this,l.j),this.o=l.o,this.g=l.g,gi(this,l.s),this.l=l.l;var f=l.i,g=new mr;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),yi(this,g),this.m=l.m}else l&&(f=String(l).match(cs))?(this.h=!1,hs(this,f[1]||"",!0),this.o=We(f[2]||""),this.g=We(f[3]||"",!0),gi(this,f[4]),this.l=We(f[5]||"",!0),yi(this,f[6]||"",!0),this.m=We(f[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}Lr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(_i(f,Hs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(_i(f,Hs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(_i(g,g.charAt(0)=="/"?El:wl,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",_i(g,Qo)),l.join("")};function An(l){return new Lr(l)}function hs(l,f,g){l.j=g?We(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function gi(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function yi(l,f,g){f instanceof mr?(l.i=f,gr(l.i,l.h)):(g||(f=_i(f,Tl)),l.i=new mr(f,l.h))}function nt(l,f,g){l.i.set(f,g)}function vi(l){return nt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function We(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function _i(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,_l),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function _l(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Hs=/[#\/\?@]/g,wl=/[#\?:]/g,El=/[#\?]/g,Tl=/[#\?@]/g,Qo=/#/g;function mr(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function $t(l){l.g||(l.g=new Map,l.h=0,l.i&&Sc(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=mr.prototype,i.add=function(l,f){$t(this),this.i=null,l=Un(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Zn(l,f){$t(l),f=Un(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function er(l,f){return $t(l),f=Un(l,f),l.g.has(f)}i.forEach=function(l,f){$t(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(f,M,E,this)},this)},this)},i.na=function(){$t(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const M=l[E];for(let z=0;z<M.length;z++)g.push(f[E])}return g},i.V=function(l){$t(this);let f=[];if(typeof l=="string")er(this,l)&&(f=f.concat(this.g.get(Un(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return $t(this),this.i=null,l=Un(this,l),er(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function wi(l,f,g){Zn(l,f),0<g.length&&(l.i=null,l.g.set(Un(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const z=encodeURIComponent(String(E)),te=this.V(E);for(E=0;E<te.length;E++){var M=z;te[E]!==""&&(M+="="+encodeURIComponent(String(te[E]))),l.push(M)}}return this.i=l.join("&")};function Un(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function gr(l,f){f&&!l.j&&($t(l),l.i=null,l.g.forEach(function(g,E){var M=E.toLowerCase();E!=M&&(Zn(this,E),wi(this,M,g))},l)),l.j=f}function Ac(l,f){const g=new se;if(m.Image){const E=new Image;E.onload=B(fn,g,"TestLoadImage: loaded",!0,f,E),E.onerror=B(fn,g,"TestLoadImage: error",!1,f,E),E.onabort=B(fn,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=B(fn,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function Il(l,f){const g=new se,E=new AbortController,M=setTimeout(()=>{E.abort(),fn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(M),z.ok?fn(g,"TestPingServer: ok",!0,f):fn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),fn(g,"TestPingServer: error",!1,f)})}function fn(l,f,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Cc(){this.g=new is}function xl(l,f,g){const E=g||"";try{mi(l,function(M,z){let te=M;w(M)&&(te=li(M)),f.push(E+z+"="+encodeURIComponent(te))})}catch(M){throw f.push(E+"type="+encodeURIComponent("_badmap")),M}}function jr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(jr,Or),jr.prototype.g=function(){return new ds(this.l,this.j)},jr.prototype.i=(function(l){return function(){return l}})({});function ds(l,f){be.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(ds,be),i=ds.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,nr(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?tr(this):nr(this),this.readyState==3&&kl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,tr(this))},i.Qa=function(l){this.g&&(this.response=l,tr(this))},i.ga=function(){this.g&&tr(this)};function tr(l){l.readyState=4,l.l=null,l.j=null,l.v=null,nr(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function nr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Fr(l){let f="";return ke(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Ei(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Fr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):nt(l,f,g))}function pt(l){be.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(pt,be);var Pc=/^https?$/i,Xo=["POST","PUT"];i=pt.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?ci(this.o):ci(kn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){fs(this,z);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())g.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),M=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Xo,f,void 0))||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,te]of g)this.g.setRequestHeader(z,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ws(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){fs(this,z)}};function fs(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,qs(l),Cn(l)}function qs(l){l.A||(l.A=!0,Ze(l,"complete"),Ze(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ze(this,"complete"),Ze(this,"abort"),Cn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),pt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Yo(this):this.bb())},i.bb=function(){Yo(this)};function Yo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||pn(l)!=4||l.Z()!=2)){if(l.u&&pn(l)==4)ai(l.Ea,0,l);else if(Ze(l,"readystatechange"),pn(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=te===0){var M=String(l.D).match(cs)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),E=!Pc.test(M?M.toLowerCase():"")}g=E}if(g)Ze(l,"complete"),Ze(l,"success");else{l.m=6;try{var z=2<pn(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",qs(l)}}finally{Cn(l)}}}}function Cn(l,f){if(l.g){Ws(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Ze(l,"ready");try{g.onreadystatechange=E}catch{}}}function Ws(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function pn(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),ui(f)}};function Jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(l){const f={};l=(l.g&&2<=pn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(fe(l[E]))continue;var g=D(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=f[M]||[];f[M]=z,z.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Zo(l){this.Aa=0,this.i=[],this.j=new se,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,l),this.cb=yr("retryDelaySeedMs",1e4,l),this.Wa=yr("forwardChannelMaxRetries",2,l),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new us(l&&l.concurrentRequestLimit),this.Da=new Cc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){dt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Pl(this,null,this.W),vr(this)};function Ht(l){if(Ks(l),l.G==3){var f=l.U++,g=An(l.I);if(nt(g,"SID",l.K),nt(g,"RID",f),nt(g,"TYPE","terminate"),Ur(l,g),f=new Jn(l,l.j,f),f.L=2,f.v=vi(An(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Rl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),it(f)}Cl(l)}function rr(l){l.g&&(ea(l),l.g.cancel(),l.g=null)}function Ks(l){rr(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ys(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function vr(l){if(!Sn(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||ne(),Z||(je(),Z=!0),me.add(f,l),l.B=0}}function Rc(l,f){return gl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ee(R(l.Ga,l,f),Al(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Jn(this,this.j,l);let z=this.o;if(this.S&&(z?(z=I(z),b(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Ti(this,M,f),g=An(this.I),nt(g,"RID",l),nt(g,"CVER",22),this.D&&nt(g,"X-HTTP-Session-Id",this.D),Ur(this,g),z&&(this.O?f="headers="+encodeURIComponent(String(Fr(z)))+"&"+f:this.m&&Ei(g,this.m,z)),Ko(this.h,M),this.Ua&&nt(g,"TYPE","init"),this.P?(nt(g,"$req",f),nt(g,"SID","null"),M.T=!0,zs(M,g,null)):zs(M,g,f),this.G=2}}else this.G==3&&(l?Qs(this,l):this.i.length==0||Sn(this.h)||Qs(this))};function Qs(l,f){var g;f?g=f.l:g=l.U++;const E=An(l.I);nt(E,"SID",l.K),nt(E,"RID",g),nt(E,"AID",l.T),Ur(l,E),l.m&&l.o&&Ei(E,l.m,l.o),g=new Jn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ti(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ko(l.h,g),zs(g,E,f)}function Ur(l,f){l.H&&ke(l.H,function(g,E){nt(f,E,g)}),l.l&&mi({},function(g,E){nt(f,E,g)})}function Ti(l,f,g){g=Math.min(l.i.length,g);var E=l.l?R(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const te=["count="+g];z==-1?0<g?(z=M[0].g,te.push("ofs="+z)):z=0:te.push("ofs="+z);let et=!0;for(let Rt=0;Rt<g;Rt++){let Ge=M[Rt].g;const Mt=M[Rt].map;if(Ge-=z,0>Ge)z=Math.max(0,M[Rt].g-100),et=!1;else try{xl(Mt,te,"req"+Ge+"_")}catch{E&&E(Mt)}}if(et){E=te.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function ps(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||ne(),Z||(je(),Z=!0),me.add(f,l),l.v=0}}function Xs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ee(R(l.Fa,l),Al(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ee(R(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),rr(this),Sl(this))};function ea(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function Sl(l){l.g=new Jn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=An(l.qa);nt(f,"RID","rpc"),nt(f,"SID",l.K),nt(f,"AID",l.T),nt(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&nt(f,"TO",l.ja),nt(f,"TYPE","xmlhttp"),Ur(l,f),l.m&&l.o&&Ei(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=vi(An(f)),g.m=null,g.P=!0,Wo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,rr(this),Xs(this),dt(19))};function Ys(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Js(l,f){var g=null;if(l.g==f){Ys(l),ea(l),l.g=null;var E=2}else if(sn(l.h,f))g=f.D,yl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;E=Mr(),Ze(E,new F(E,g)),vr(l)}else ps(l);else if(M=f.s,M==3||M==0&&0<f.X||!(E==1&&Rc(l,f)||E==2&&Xs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),M){case 1:zr(l,5);break;case 4:zr(l,10);break;case 3:zr(l,6);break;default:zr(l,2)}}}function Al(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function zr(l,f){if(l.j.info("Error code "+f),f==2){var g=R(l.fb,l),E=l.Xa;const M=!E;E=new Lr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||hs(E,"https"),vi(E),M?Ac(E.toString(),g):Il(E.toString(),g)}else dt(2);l.G=0,l.l&&l.l.sa(f),Cl(l),Ks(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Cl(l){if(l.G=0,l.ka=[],l.l){const f=vl(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function Pl(l,f,g){var E=g instanceof Lr?An(g):new Lr(g);if(E.g!="")f&&(E.g=f+"."+E.g),gi(E,E.s);else{var M=m.location;E=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new Lr(null);E&&hs(z,E),f&&(z.g=f),M&&gi(z,M),g&&(z.l=g),E=z}return g=l.D,f=l.ya,g&&f&&nt(E,g,f),nt(E,"VER",l.la),Ur(l,E),E}function Rl(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new pt(new jr({eb:g})):new pt(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ta(){}i=ta.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Zs(){}Zs.prototype.g=function(l,f){return new on(l,f)};function on(l,f){be.call(this),this.g=new Zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!fe(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new _r(this)}Q(on,be),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Ht(this.g)},on.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=li(l),l=g);f.i.push(new ml(f.Ya++,l)),f.G==3&&vr(f)},on.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,on.aa.N.call(this)};function bl(l){On.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(bl,On);function Nl(){di.call(this),this.status=1}Q(Nl,di);function _r(l){this.g=l}Q(_r,ta),_r.prototype.ua=function(){Ze(this.g,"a")},_r.prototype.ta=function(l){Ze(this.g,new bl(l))},_r.prototype.sa=function(l){Ze(this.g,new Nl)},_r.prototype.ra=function(){Ze(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,Fv=function(){return new Zs},jv=function(){return Mr()},Lv=Mn,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pt.NO_ERROR=0,Pt.TIMEOUT=8,Pt.HTTP_ERROR=6,Lu=Pt,dn.COMPLETE="complete",Mv=dn,hi.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",be.prototype.listen=be.prototype.K,Sa=hi,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,Ov=pt}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore",xg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Fd("@firebase/firestore");function To(){return Vs.logLevel}function ie(i,...e){if(Vs.logLevel<=$e.DEBUG){const t=e.map(Yd);Vs.debug(`Firestore (${zo}): ${i}`,...t)}}function ii(i,...e){if(Vs.logLevel<=$e.ERROR){const t=e.map(Yd);Vs.error(`Firestore (${zo}): ${i}`,...t)}}function Qi(i,...e){if(Vs.logLevel<=$e.WARN){const t=e.map(Yd);Vs.warn(`Firestore (${zo}): ${i}`,...t)}}function Yd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Uv(i,s,t)}function Uv(i,e,t){let s=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ii(s),new Error(s)}function Je(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Uv(e,o,s)}function De(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends oi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tn.UNAUTHENTICATED)))}shutdown(){}}class jI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class FI{constructor(e){this.t=e,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Je(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ki,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ki)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Je(typeof s.accessToken=="string",31837,{l:s}),new zv(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Je(e===null||typeof e=="string",2055,{h:e}),new tn(e)}}class UI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new UI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(tn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Je(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new kg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=$I(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ue(i,e){return i<e?-1:i>e?1:0}function Ed(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Ue(s,o);{const u=Bv(),h=HI(u.encode(Sg(i,t)),u.encode(Sg(e,t)));return h!==0?h:Ue(s,o)}}t+=s>65535?2:1}return Ue(i.length,e.length)}function Sg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function HI(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ue(i[t],e[t]);return Ue(i.length,e.length)}function Do(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__name__";class xr{constructor(e,t,s){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Se(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=xr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ue(e.length,t.length)}static compareSegments(e,t){const s=xr.isNumericId(e),o=xr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?xr.extractNumericId(e).compare(xr.extractNumericId(t)):Ed(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gi.fromString(e.substring(4,e.length-2))}}class vt extends xr{construct(e,t,s){return new vt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new vt(t)}static emptyPath(){return new vt([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends xr{construct(e,t,s){return new Kt(e,t,s)}static isValidIdentifier(e){return qI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new Kt([Ag])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ye(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ye(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ye(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(t)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(vt.fromString(e))}static fromName(e){return new Te(vt.fromString(e).popFirst(5))}static empty(){return new Te(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&vt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return vt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new vt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(i,e,t){if(!t)throw new ye(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function GI(i,e,t,s){if(e===!0&&s===!0)throw new ye(K.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Cg(i){if(!Te.isDocumentKey(i))throw new ye(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function $v(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Zd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se(12329,{type:typeof i})}function Ha(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ye(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zd(i);throw new ye(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(i,e){const t={typeString:i};return e&&(t.value=e),t}function al(i,e){if(!$v(i))throw new ye(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ye(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=-62135596800,Rg=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Rg);return new ct(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pg)throw new ye(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(al(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:At("string",ct._jsonSchemaVersion),seconds:At("number"),nanoseconds:At("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static fromTimestamp(e){return new Ne(e)}static min(){return new Ne(new ct(0,0))}static max(){return new Ne(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=-1;function KI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ne.fromTimestamp(s===1e9?new ct(t+1,0):new ct(t,s));return new Xi(o,Te.empty(),e)}function QI(i){return new Xi(i.readTime,i.key,qa)}class Xi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Xi(Ne.min(),Te.empty(),qa)}static max(){return new Xi(Ne.max(),Te.empty(),qa)}}function XI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(i.documentKey,e.documentKey),t!==0?t:Ue(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==YI)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const w=y;t(e[w]).next((T=>{h[w]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function ZI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=-1;function pc(i){return i==null}function Yu(i){return i===0&&1/i==-1/0}function e2(i){return typeof i=="number"&&Number.isInteger(i)&&!Yu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="";function t2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=bg(e)),e=n2(i.get(t),e);return bg(e)}function n2(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Hv:t+="";break;default:t+=u}}return t}function bg(i){return i+Hv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ms(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function qv(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||Gt.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Gt.RED,this.left=o??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Gt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Gt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new hr([])}unionWith(e){let t=new Vt(Kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Wv("Invalid base64 string: "+u):u}})(e);return new Qt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const r2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yi(i){if(Je(!!i,39018),typeof i=="string"){let e=0;const t=r2.exec(i);if(Je(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:It(i.seconds),nanos:It(i.nanos)}}function It(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ji(i){return typeof i=="string"?Qt.fromBase64String(i):Qt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="server_timestamp",Kv="__type__",Qv="__previous_value__",Xv="__local_write_time__";function tf(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kv])===null||t===void 0?void 0:t.stringValue)===Gv}function mc(i){const e=i.mapValue.fields[Qv];return tf(e)?mc(e):e}function Wa(i){const e=Yi(i.mapValue.fields[Xv].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,t,s,o,u,h,m,y,w,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=w,this.isUsingEmulator=T}}const Ju="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Ju}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Ju}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="__type__",s2="__max__",Pu={mapValue:{}},Jv="__vector__",Zu="value";function Zi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?tf(i)?4:a2(i)?9007199254740991:o2(i)?10:11:Se(28295,{value:i})}function br(i,e){if(i===e)return!0;const t=Zi(i);if(t!==Zi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Wa(i).isEqual(Wa(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Yi(o.timestampValue),m=Yi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ji(o.bytesValue).isEqual(Ji(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return It(o.geoPointValue.latitude)===It(u.geoPointValue.latitude)&&It(o.geoPointValue.longitude)===It(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return It(o.integerValue)===It(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=It(o.doubleValue),m=It(u.doubleValue);return h===m?Yu(h)===Yu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return Do(i.arrayValue.values||[],e.arrayValue.values||[],br);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ng(h)!==Ng(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!br(h[y],m[y])))return!1;return!0})(i,e);default:return Se(52216,{left:i})}}function Ka(i,e){return(i.values||[]).find((t=>br(t,e)))!==void 0}function Vo(i,e){if(i===e)return 0;const t=Zi(i),s=Zi(e);if(t!==s)return Ue(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=It(u.integerValue||u.doubleValue),y=It(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Vg(i.timestampValue,e.timestampValue);case 4:return Vg(Wa(i),Wa(e));case 5:return Ed(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ji(u),y=Ji(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let w=0;w<m.length&&w<y.length;w++){const T=Ue(m[w],y[w]);if(T!==0)return T}return Ue(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ue(It(u.latitude),It(h.latitude));return m!==0?m:Ue(It(u.longitude),It(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Og(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,w,T;const A=u.fields||{},R=h.fields||{},B=(m=A[Zu])===null||m===void 0?void 0:m.arrayValue,Q=(y=R[Zu])===null||y===void 0?void 0:y.arrayValue,Y=Ue(((w=B==null?void 0:B.values)===null||w===void 0?void 0:w.length)||0,((T=Q==null?void 0:Q.values)===null||T===void 0?void 0:T.length)||0);return Y!==0?Y:Og(B,Q)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Pu.mapValue&&h===Pu.mapValue)return 0;if(u===Pu.mapValue)return 1;if(h===Pu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),w=h.fields||{},T=Object.keys(w);y.sort(),T.sort();for(let A=0;A<y.length&&A<T.length;++A){const R=Ed(y[A],T[A]);if(R!==0)return R;const B=Vo(m[y[A]],w[T[A]]);if(B!==0)return B}return Ue(y.length,T.length)})(i.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function Vg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ue(i,e);const t=Yi(i),s=Yi(e),o=Ue(t.seconds,s.seconds);return o!==0?o:Ue(t.nanos,s.nanos)}function Og(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Vo(t[o],s[o]);if(u)return u}return Ue(t.length,s.length)}function Oo(i){return Td(i)}function Td(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Yi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ji(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return Te.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Td(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Td(t.fields[h])}`;return o+"}"})(i.mapValue):Se(61005,{value:i})}function ju(i){switch(Zi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mc(i);return e?16+ju(e):16;case 5:return 2*i.stringValue.length;case 6:return Ji(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ju(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ms(s.fields,((u,h)=>{o+=u.length+ju(h)})),o})(i.mapValue);default:throw Se(13486,{value:i})}}function Id(i){return!!i&&"integerValue"in i}function nf(i){return!!i&&"arrayValue"in i}function Mg(i){return!!i&&"nullValue"in i}function Lg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Fu(i){return!!i&&"mapValue"in i}function o2(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yv])===null||t===void 0?void 0:t.stringValue)===Jv}function Oa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ms(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Oa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function a2(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===s2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.value=e}static empty(){return new Qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(t)}setAll(e){let t=Kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Oa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return br(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ms(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Qn(Oa(this.value))}}function Zv(i){const e=[];return Ms(i.fields,((t,s)=>{const o=new Kt([t]);if(Fu(s)){const u=Zv(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new hr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new nn(e,0,Ne.min(),Ne.min(),Ne.min(),Qn.empty(),0)}static newFoundDocument(e,t,s,o){return new nn(e,1,t,Ne.min(),s,o,0)}static newNoDocument(e,t){return new nn(e,2,t,Ne.min(),Ne.min(),Qn.empty(),0)}static newUnknownDocument(e,t){return new nn(e,3,t,Ne.min(),Ne.min(),Qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.position=e,this.inclusive=t}}function jg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=Te.comparator(Te.fromName(h.referenceValue),t.key):s=Vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!br(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t="asc"){this.field=e,this.dir=t}}function l2(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{}class Dt extends e0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new c2(e,t,s):t==="array-contains"?new f2(e,s):t==="in"?new p2(e,s):t==="not-in"?new m2(e,s):t==="array-contains-any"?new g2(e,s):new Dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new h2(e,s):new d2(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vo(t,this.value)):t!==null&&Zi(this.value)===Zi(t)&&this.matchesComparison(Vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends e0{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Nr(e,t)}matches(e){return t0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function t0(i){return i.op==="and"}function n0(i){return u2(i)&&t0(i)}function u2(i){for(const e of i.filters)if(e instanceof Nr)return!1;return!0}function xd(i){if(i instanceof Dt)return i.field.canonicalString()+i.op.toString()+Oo(i.value);if(n0(i))return i.filters.map((e=>xd(e))).join(",");{const e=i.filters.map((t=>xd(t))).join(",");return`${i.op}(${e})`}}function r0(i,e){return i instanceof Dt?(function(s,o){return o instanceof Dt&&s.op===o.op&&s.field.isEqual(o.field)&&br(s.value,o.value)})(i,e):i instanceof Nr?(function(s,o){return o instanceof Nr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&r0(h,o.filters[m])),!0):!1})(i,e):void Se(19439)}function i0(i){return i instanceof Dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Oo(t.value)}`})(i):i instanceof Nr?(function(t){return t.op.toString()+" {"+t.getFilters().map(i0).join(" ,")+"}"})(i):"Filter"}class c2 extends Dt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class h2 extends Dt{constructor(e,t){super(e,"in",t),this.keys=s0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class d2 extends Dt{constructor(e,t){super(e,"not-in",t),this.keys=s0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function s0(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>Te.fromName(s.referenceValue)))}class f2 extends Dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return nf(t)&&Ka(t.arrayValue,this.value)}}class p2 extends Dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class m2 extends Dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class g2 extends Dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!nf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ka(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Pe=null}}function Ug(i,e=null,t=[],s=[],o=null,u=null,h=null){return new y2(i,e,t,s,o,u,h)}function rf(i){const e=De(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>xd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Oo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Oo(s))).join(",")),e.Pe=t}return e.Pe}function sf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!l2(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!r0(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Fg(i.startAt,e.startAt)&&Fg(i.endAt,e.endAt)}function kd(i){return Te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function v2(i,e,t,s,o,u,h,m){return new gc(i,e,t,s,o,u,h,m)}function of(i){return new gc(i)}function zg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function _2(i){return i.collectionGroup!==null}function Ma(i){const e=De(i);if(e.Te===null){e.Te=[];const t=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Vt(Kt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((w=>{w.isInequality()&&(m=m.add(w.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Te.push(new tc(u,s))})),t.has(Kt.keyField().canonicalString())||e.Te.push(new tc(Kt.keyField(),s))}return e.Te}function Ar(i){const e=De(i);return e.Ie||(e.Ie=w2(e,Ma(i))),e.Ie}function w2(i,e){if(i.limitType==="F")return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new tc(o.field,u)}));const t=i.endAt?new ec(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new ec(i.startAt.position,i.startAt.inclusive):null;return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Sd(i,e,t){return new gc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function yc(i,e){return sf(Ar(i),Ar(e))&&i.limitType===e.limitType}function o0(i){return`${rf(Ar(i))}|lt:${i.limitType}`}function Io(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>i0(o))).join(", ")}]`),pc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Oo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Oo(o))).join(",")),`Target(${s})`})(Ar(i))}; limitType=${i.limitType})`}function vc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Te.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const w=jg(h,m,y);return h.inclusive?w<=0:w<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,m,y){const w=jg(h,m,y);return h.inclusive?w>=0:w>0})(s.endAt,Ma(s),o))})(i,e)}function E2(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function a0(i){return(e,t)=>{let s=!1;for(const o of Ma(i)){const u=T2(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function T2(i,e,t){const s=i.field.isKeyField()?Te.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),w=m.data.field(u);return y!==null&&w!==null?Vo(y,w):Se(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Se(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new _t(Te.comparator);function si(){return I2}const l0=new _t(Te.comparator);function Aa(...i){let e=l0;for(const t of i)e=e.insert(t.key,t);return e}function u0(i){let e=l0;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ps(){return La()}function c0(){return La()}function La(){return new Ls((i=>i.toString()),((i,e)=>i.isEqual(e)))}const x2=new _t(Te.comparator),k2=new Vt(Te.comparator);function He(...i){let e=k2;for(const t of i)e=e.add(t);return e}const S2=new Vt(Ue);function A2(){return S2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function h0(i){return{integerValue:""+i}}function C2(i,e){return e2(e)?h0(e):af(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}function P2(i,e,t){return i instanceof nc?(function(o,u){const h={fields:{[Kv]:{stringValue:Gv},[Xv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&tf(u)&&(u=mc(u)),u&&(h.fields[Qv]=u),{mapValue:h}})(t,e):i instanceof Qa?f0(i,e):i instanceof Xa?p0(i,e):(function(o,u){const h=d0(o,u),m=Bg(h)+Bg(o.Ee);return Id(h)&&Id(o.Ee)?h0(m):af(o.serializer,m)})(i,e)}function R2(i,e,t){return i instanceof Qa?f0(i,e):i instanceof Xa?p0(i,e):t}function d0(i,e){return i instanceof rc?(function(s){return Id(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class nc extends _c{}class Qa extends _c{constructor(e){super(),this.elements=e}}function f0(i,e){const t=m0(e);for(const s of i.elements)t.some((o=>br(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Xa extends _c{constructor(e){super(),this.elements=e}}function p0(i,e){let t=m0(e);for(const s of i.elements)t=t.filter((o=>!br(o,s)));return{arrayValue:{values:t}}}class rc extends _c{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Bg(i){return It(i.integerValue||i.doubleValue)}function m0(i){return nf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function b2(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Qa&&o instanceof Qa||s instanceof Xa&&o instanceof Xa?Do(s.elements,o.elements,br):s instanceof rc&&o instanceof rc?br(s.Ee,o.Ee):s instanceof nc&&o instanceof nc})(i.transform,e.transform)}class N2{constructor(e,t){this.version=e,this.transformResults=t}}class Zr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zr}static exists(e){return new Zr(void 0,e)}static updateTime(e){return new Zr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class wc{}function g0(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new v0(i.key,Zr.none()):new ll(i.key,i.data,Zr.none());{const t=i.data,s=Qn.empty();let o=new Vt(Kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new js(i.key,s,new hr(o.toArray()),Zr.none())}}function D2(i,e,t){i instanceof ll?(function(o,u,h){const m=o.value.clone(),y=Hg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof js?(function(o,u,h){if(!Uu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Hg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(y0(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function ja(i,e,t,s){return i instanceof ll?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const w=u.value.clone(),T=qg(u.fieldTransforms,y,h);return w.setAll(T),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),null})(i,e,t,s):i instanceof js?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const w=qg(u.fieldTransforms,y,h),T=h.data;return T.setAll(y0(u)),T.setAll(w),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Uu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function V2(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=d0(s.transform,o||null);u!=null&&(t===null&&(t=Qn.empty()),t.set(s.field,u))}return t||null}function $g(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Do(s,o,((u,h)=>b2(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ll extends wc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class js extends wc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function y0(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Hg(i,e,t){const s=new Map;Je(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,R2(h,m,t[o]))}return s}function qg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,P2(u,h,e))}return s}class v0 extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O2 extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&D2(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=c0();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=g0(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ne.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),He())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,((t,s)=>$g(t,s)))&&Do(this.baseMutations,e.baseMutations,((t,s)=>$g(t,s)))}}class lf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Je(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return x2})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new lf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,Ke;function F2(i){switch(i){case K.OK:return Se(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Se(15467,{code:i})}}function _0(i){if(i===void 0)return ii("GRPC error has no .code"),K.UNKNOWN;switch(i){case St.OK:return K.OK;case St.CANCELLED:return K.CANCELLED;case St.UNKNOWN:return K.UNKNOWN;case St.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case St.INTERNAL:return K.INTERNAL;case St.UNAVAILABLE:return K.UNAVAILABLE;case St.UNAUTHENTICATED:return K.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case St.NOT_FOUND:return K.NOT_FOUND;case St.ALREADY_EXISTS:return K.ALREADY_EXISTS;case St.PERMISSION_DENIED:return K.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case St.ABORTED:return K.ABORTED;case St.OUT_OF_RANGE:return K.OUT_OF_RANGE;case St.UNIMPLEMENTED:return K.UNIMPLEMENTED;case St.DATA_LOSS:return K.DATA_LOSS;default:return Se(39323,{code:i})}}(Ke=St||(St={}))[Ke.OK=0]="OK",Ke[Ke.CANCELLED=1]="CANCELLED",Ke[Ke.UNKNOWN=2]="UNKNOWN",Ke[Ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ke[Ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ke[Ke.NOT_FOUND=5]="NOT_FOUND",Ke[Ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ke[Ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ke[Ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ke[Ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ke[Ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ke[Ke.ABORTED=10]="ABORTED",Ke[Ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ke[Ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ke[Ke.INTERNAL=13]="INTERNAL",Ke[Ke.UNAVAILABLE=14]="UNAVAILABLE",Ke[Ke.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new Gi([4294967295,4294967295],0);function Wg(i){const e=Bv().encode(i),t=new Vv;return t.update(e),new Uint8Array(t.digest())}function Gg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Gi([t,s],0),new Gi([o,u],0)]}class uf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ca(`Invalid padding: ${t}`);if(s<0)throw new Ca(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Gi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(Gi.fromNumber(s)));return o.compare(U2)===1&&(o=new Gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new uf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.fe===0)return;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.pe(s,o,u);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ul.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ec(Ne.min(),o,new _t(Ue),si(),He())}}class ul{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ul(s,t,He(),He(),He())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class w0{constructor(e,t){this.targetId=e,this.De=t}}class E0{constructor(e,t,s=Qt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Kg{constructor(){this.ve=0,this.Ce=Qg(),this.Fe=Qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=He(),t=He(),s=He();return this.Ce.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Se(38017,{changeType:u})}})),new ul(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Qg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Je(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class z2{constructor(e){this.We=e,this.Ge=new Map,this.ze=si(),this.je=Ru(),this.Je=Ru(),this.He=new _t(Ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const u=o.target;if(kd(u))if(s===0){const h=new Te(u.path);this.Xe(t,h,nn.newNoDocument(h,Ne.min()))}else Je(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const m=this._t(e),y=m?this.ut(m,e,h):1;if(y!==0){this.rt(t);const w=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,w)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ji(s).toUint8Array()}catch(y){if(y instanceof Wv)return Qi("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new uf(h,o,u)}catch(y){return Qi(y instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.fe===0?null:m}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.We.lt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Xe(t,u,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((u,h)=>{const m=this.st(h);if(m){if(u.current&&kd(m.target)){const y=new Te(m.target.path);this.Tt(y).has(h)||this.It(h,y)||this.Xe(h,y,nn.newNoDocument(y,e))}u.Ne&&(t.set(h,u.Le()),u.ke())}}));let s=He();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const w=this.st(y);return!w||w.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ze.forEach(((u,h)=>h.setReadTime(e)));const o=new Ec(e,t,this.He,this.ze,s);return this.ze=si(),this.je=Ru(),this.Je=Ru(),this.He=new _t(Ue),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Kg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Vt(Ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Vt(Ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Kg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new _t(Te.comparator)}function Qg(){return new _t(Te.comparator)}const B2={asc:"ASCENDING",desc:"DESCENDING"},$2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H2={and:"AND",or:"OR"};class q2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ad(i,e){return i.useProto3Json||pc(e)?e:{value:e}}function ic(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T0(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function W2(i,e){return ic(i,e.toTimestamp())}function Cr(i){return Je(!!i,49232),Ne.fromTimestamp((function(t){const s=Yi(t);return new ct(s.seconds,s.nanos)})(i))}function cf(i,e){return Cd(i,e).canonicalString()}function Cd(i,e){const t=(function(o){return new vt(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function I0(i){const e=vt.fromString(i);return Je(C0(e),10190,{key:e.toString()}),e}function Pd(i,e){return cf(i.databaseId,e.path)}function ld(i,e){const t=I0(e);if(t.get(1)!==i.databaseId.projectId)throw new ye(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ye(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Te(k0(t))}function x0(i,e){return cf(i.databaseId,e)}function G2(i){const e=I0(i);return e.length===4?vt.emptyPath():k0(e)}function Rd(i){return new vt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function k0(i){return Je(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Xg(i,e,t){return{name:Pd(i,e),fields:t.value.mapValue.fields}}function K2(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(w){return w==="NO_CHANGE"?0:w==="ADD"?1:w==="REMOVE"?2:w==="CURRENT"?3:w==="RESET"?4:Se(39313,{state:w})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(w,T){return w.useProto3Json?(Je(T===void 0||typeof T=="string",58123),Qt.fromBase64String(T||"")):(Je(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Qt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(w){const T=w.code===void 0?K.UNKNOWN:_0(w.code);return new ye(T,w.message||"")})(h);t=new E0(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ld(i,s.document.name),u=Cr(s.document.updateTime),h=s.document.createTime?Cr(s.document.createTime):Ne.min(),m=new Qn({mapValue:{fields:s.document.fields}}),y=nn.newFoundDocument(o,u,h,m),w=s.targetIds||[],T=s.removedTargetIds||[];t=new zu(w,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ld(i,s.document),u=s.readTime?Cr(s.readTime):Ne.min(),h=nn.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ld(i,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new j2(o,u),m=s.targetId;t=new w0(m,h)}}return t}function Q2(i,e){let t;if(e instanceof ll)t={update:Xg(i,e.key,e.value)};else if(e instanceof v0)t={delete:Pd(i,e.key)};else if(e instanceof js)t={update:Xg(i,e.key,e.data),updateMask:ix(e.fieldMask)};else{if(!(e instanceof O2))return Se(16599,{Rt:e.type});t={verify:Pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof nc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof rc)return{fieldPath:h.field.canonicalString(),increment:m.Ee};throw Se(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:W2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Se(27497)})(i,e.precondition)),t}function X2(i,e){return i&&i.length>0?(Je(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?Cr(o.updateTime):Cr(u);return h.isEqual(Ne.min())&&(h=Cr(u)),new N2(h,o.transformResults||[])})(t,e)))):[]}function Y2(i,e){return{documents:[x0(i,e.path)]}}function J2(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=x0(i,o);const u=(function(w){if(w.length!==0)return A0(Nr.create(w,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(w){if(w.length!==0)return w.map((T=>(function(R){return{field:xo(R.field),direction:tx(R.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ad(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(w){return{before:w.inclusive,values:w.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(w){return{before:!w.inclusive,values:w.position}})(e.endAt)),{Vt:t,parent:o}}function Z2(i){let e=G2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Je(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(A){const R=S0(A);return R instanceof Nr&&n0(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((R=>(function(Q){return new tc(ko(Q.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let R;return R=typeof A=="object"?A.value:A,pc(R)?null:R})(t.limit));let y=null;t.startAt&&(y=(function(A){const R=!!A.before,B=A.values||[];return new ec(B,R)})(t.startAt));let w=null;return t.endAt&&(w=(function(A){const R=!A.before,B=A.values||[];return new ec(B,R)})(t.endAt)),v2(e,o,h,u,m,"F",y,w)}function ex(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function S0(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ko(t.unaryFilter.field);return Dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return Dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ko(t.unaryFilter.field);return Dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ko(t.unaryFilter.field);return Dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Dt.create(ko(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Nr.create(t.compositeFilter.filters.map((s=>S0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(i):Se(30097,{filter:i})}function tx(i){return B2[i]}function nx(i){return $2[i]}function rx(i){return H2[i]}function xo(i){return{fieldPath:i.canonicalString()}}function ko(i){return Kt.fromServerFormat(i.fieldPath)}function A0(i){return i instanceof Dt?(function(t){if(t.op==="=="){if(Lg(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(Mg(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lg(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(Mg(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:nx(t.op),value:t.value}}})(i):i instanceof Nr?(function(t){const s=t.getFilters().map((o=>A0(o)));return s.length===1?s[0]:{compositeFilter:{op:rx(t.op),filters:s}}})(i):Se(54877,{filter:i})}function ix(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function C0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s,o,u=Ne.min(),h=Ne.min(),m=Qt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.gt=e}}function ox(i){const e=Z2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.Dn=new lx}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Xi.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Xi.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class lx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Vt(vt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Vt(vt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P0=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(P0,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mo(0)}static ur(){return new Mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="LruGarbageCollector",ux=1048576;function Zg([i,e],[t,s]){const o=Ue(i,t);return o===0?Ue(e,s):o}class cx{constructor(e){this.Tr=e,this.buffer=new Vt(Zg),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hx{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ie(Jg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?ie(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Bo(t)}await this.Rr(3e5)}))}}class dx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(fc.ue);const s=new cx(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Yg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,u,h,m,y,w;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(w=Date.now(),To()<=$e.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(w-y)+`ms
Total Duration: ${w-T}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function fx(i,e){return new dx(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.changes=new Ls((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&ja(s.mutation,o,hr.empty(),ct.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,He()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=He()){const o=Ps();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Aa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ps();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,He())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=si();const h=La(),m=(function(){return La()})();return t.forEach(((y,w)=>{const T=s.get(w.key);o.has(w.key)&&(T===void 0||T.mutation instanceof js)?u=u.insert(w.key,w):T!==void 0?(h.set(w.key,T.mutation.getFieldMask()),ja(T.mutation,w,T.mutation.getFieldMask(),ct.now())):h.set(w.key,hr.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((w,T)=>h.set(w,T))),t.forEach(((w,T)=>{var A;return m.set(w,new mx(T,(A=h.get(w))!==null&&A!==void 0?A:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=La();let o=new _t(((h,m)=>h-m)),u=He();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const w=t.get(y);if(w===null)return;let T=s.get(y)||hr.empty();T=m.applyToLocalView(w,T),s.set(y,T);const A=(o.get(m.batchId)||He()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),w=y.key,T=y.value,A=c0();T.forEach((R=>{if(!u.has(R)){const B=g0(t.get(R),s.get(R));B!==null&&A.set(R,B),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,w,A))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return Te.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(Ps());let m=qa,y=u;return h.next((w=>H.forEach(w,((T,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(T)?H.resolve():this.remoteDocumentCache.getEntry(e,T).next((R=>{y=y.insert(T,R)}))))).next((()=>this.populateOverlays(e,w,u))).next((()=>this.computeViews(e,y,w,He()))).next((T=>({batchId:m,changes:u0(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((s=>{let o=Aa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Aa();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const w=(function(A,R){return new gc(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,w,s,o).next((T=>{T.forEach(((A,R)=>{h=h.insert(A,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,w)=>{const T=w.getKey();h.get(T)===null&&(h=h.insert(T,nn.newInvalidDocument(T)))}));let m=Aa();return h.forEach(((y,w)=>{const T=u.get(y);T!==void 0&&ja(T.mutation,w,hr.empty(),ct.now()),vc(t,w)&&(m=m.insert(y,w))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Cr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:ox(o.bundledQuery),readTime:Cr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(){this.overlays=new _t(Te.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ps();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.wt(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=Ps(),u=t.length+1,h=new Te(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,w=y.getKey();if(!t.isPrefixOf(w.path))break;w.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new _t(((w,T)=>w-T));const h=this.overlays.getIterator();for(;h.hasNext();){const w=h.getNext().value;if(w.getKey().getCollectionGroup()===t&&w.largestBatchId>s){let T=u.get(w.largestBatchId);T===null&&(T=Ps(),u=u.insert(w.largestBatchId,T)),T.set(w.getKey(),w)}}const m=Ps(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((w,T)=>m.set(w,T))),!(m.size()>=o)););return H.resolve(m)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new L2(t,s));let u=this.kr.get(t);u===void 0&&(u=He(),this.kr.set(t,u)),this.kr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(){this.qr=new Vt(Ut.Qr),this.$r=new Vt(Ut.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Ut(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ut(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new Te(new vt([])),s=new Ut(t,e),o=new Ut(t,e+1),u=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),u.push(h.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Te(new vt([])),s=new Ut(t,e),o=new Ut(t,e+1);let u=He();return this.$r.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Ut(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ut{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Te.comparator(e.key,t.key)||Ue(e.Hr,t.Hr)}static Ur(e,t){return Ue(e.Hr,t.Hr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Vt(Ut.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new M2(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Yr=this.Yr.add(new Ut(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?ef:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ut(t,0),o=new Ut(t,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,o],(h=>{const m=this.Zr(h.Hr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Vt(Ue);return t.forEach((o=>{const u=new Ut(o,0),h=new Ut(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Te.isDocumentKey(u)||(u=u.child(""));const h=new Ut(new Te(u),0);let m=new Vt(Ue);return this.Yr.forEachWhile((y=>{const w=y.key.path;return!!s.isPrefixOf(w)&&(w.length===o&&(m=m.add(y.Hr)),!0)}),h),H.resolve(this.ei(m))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Je(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const u=new Ut(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new Ut(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.ni=e,this.docs=(function(){return new _t(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():nn.newInvalidDocument(t))}getEntries(e,t){let s=si();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():nn.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=si();const h=t.path,m=new Te(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:w,value:{document:T}}=y.getNext();if(!h.isPrefixOf(w.path))break;w.path.length>h.length+1||XI(QI(T),s)<=0||(o.has(T.key)||vc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Se(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Tx(this)}getSize(e){return H.resolve(this.size)}}class Tx extends px{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.persistence=e,this.ii=new Ls((t=>rf(t)),sf),this.lastRemoteSnapshotVersion=Ne.min(),this.highestTargetId=0,this.si=0,this.oi=new hf,this.targetCount=0,this._i=Mo.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ii.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ii.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,t){this.ai={},this.overlays={},this.ui=new fc(0),this.ci=!1,this.ci=!0,this.li=new _x,this.referenceDelegate=e(this),this.hi=new Ix(this),this.indexManager=new ax,this.remoteDocumentCache=(function(o){return new Ex(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new sx(t),this.Ti=new yx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new wx(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new xx(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class xx extends JI{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ai=new hf,this.Ri=null}static Vi(e){return new df(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=Te.fromPath(s);return this.fi(e,o).next((u=>{u||t.removeEntry(o,Ne.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sc{constructor(e,t){this.persistence=e,this.gi=new Ls((s=>t2(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=fx(this,t)}static Vi(e,t){return new sc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ne.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=He(),o=He();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ff(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return mw()?8:ZI(rn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ps(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ys(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new kx;return this.ws(e,t,h).next((m=>{if(u.result=m,this.Rs)return this.Ss(e,t,h,m.size)}))})).next((()=>u.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(To()<=$e.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Io(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(To()<=$e.DEBUG&&ie("QueryEngine","Query:",Io(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(To()<=$e.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Io(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ar(t))):H.resolve())}ps(e,t){if(zg(t))return H.resolve(null);let s=Ar(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Sd(t,null,"F"),s=Ar(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=He(...u);return this.gs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const w=this.bs(t,m);return this.Ds(t,w,h,y.readTime)?this.ps(e,Sd(t,null,"F")):this.vs(e,w,t,y)}))))})))))}ys(e,t,s,o){return zg(t)||o.isEqual(Ne.min())?H.resolve(null):this.gs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ds(t,h,s,o)?H.resolve(null):(To()<=$e.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Io(t)),this.vs(e,h,t,KI(o,qa)).next((m=>m)))}))}bs(e,t){let s=new Vt(a0(e));return t.forEach(((o,u)=>{vc(e,u)&&(s=s.add(u))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ws(e,t,s){return To()<=$e.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Io(t)),this.gs.getDocumentsMatchingQuery(e,t,Xi.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="LocalStore",Ax=3e8;class Cx{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new _t(Ue),this.Ms=new Ls((u=>rf(u)),sf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Px(i,e,t,s){return new Cx(i,e,t,s)}async function b0(i,e){const t=De(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=He();for(const w of o){h.push(w.batchId);for(const T of w.mutations)y=y.add(T.key)}for(const w of u){m.push(w.batchId);for(const T of w.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((w=>({Bs:w,removedBatchIds:h,addedBatchIds:m})))}))}))}function Rx(i,e){const t=De(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Os.newChangeBuffer({trackRemovals:!0});return(function(m,y,w,T){const A=w.batch,R=A.keys();let B=H.resolve();return R.forEach((Q=>{B=B.next((()=>T.getEntry(y,Q))).next((Y=>{const q=w.docVersions.get(Q);Je(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,w),Y.isValidDocument()&&(Y.setReadTime(w.commitVersion),T.addEntry(Y)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=He();for(let w=0;w<m.mutationResults.length;++w)m.mutationResults[w].transformResults.length>0&&(y=y.add(m.batch.mutations[w].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function N0(i){const e=De(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function bx(i,e){const t=De(i),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const m=[];e.targetChanges.forEach(((T,A)=>{const R=o.get(A);if(!R)return;m.push(t.hi.removeMatchingKeys(u,T.removedDocuments,A).next((()=>t.hi.addMatchingKeys(u,T.addedDocuments,A))));let B=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(Qt.EMPTY_BYTE_STRING,Ne.min()).withLastLimboFreeSnapshotVersion(Ne.min()):T.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(T.resumeToken,s)),o=o.insert(A,B),(function(Y,q,Ie){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=Ax?!0:Ie.addedDocuments.size+Ie.modifiedDocuments.size+Ie.removedDocuments.size>0})(R,B,T)&&m.push(t.hi.updateTargetData(u,B))}));let y=si(),w=He();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(Nx(u,h,e.documentUpdates).next((T=>{y=T.Ls,w=T.ks}))),!s.isEqual(Ne.min())){const T=t.hi.getLastRemoteSnapshotVersion(u).next((A=>t.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,w))).next((()=>y))})).then((u=>(t.Fs=o,u)))}function Nx(i,e,t){let s=He(),o=He();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=si();return t.forEach(((m,y)=>{const w=u.get(m);y.isFoundDocument()!==w.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ne.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!w.isValidDocument()||y.version.compareTo(w.version)>0||y.version.compareTo(w.version)===0&&w.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(pf,"Ignoring outdated watch update for ",m,". Current version:",w.version," Watch version:",y.version)})),{Ls:h,ks:o}}))}function Dx(i,e){const t=De(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=ef),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Vx(i,e){const t=De(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new Bi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function bd(i,e,t){const s=De(i),o=s.Fs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!$o(h))throw h;ie(pf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ey(i,e,t){const s=De(i);let o=Ne.min(),u=He();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,w,T){const A=De(y),R=A.Ms.get(T);return R!==void 0?H.resolve(A.Fs.get(R)):A.hi.getTargetData(w,T)})(s,h,Ar(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:Ne.min(),t?u:He()))).next((m=>(Ox(s,E2(e),m),{documents:m,qs:u})))))}function Ox(i,e,t){let s=i.xs.get(e)||Ne.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.xs.set(e,s)}class ty{constructor(){this.activeTargetIds=A2()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mx{constructor(){this.Fo=new ty,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="ConnectivityMonitor";class ry{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ie(ny,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ie(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu=null;function Nd(){return bu===null?bu=(function(){return 268435456+Math.round(2147483648*Math.random())})():bu++,"0x"+bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="RestConnection",jx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Fx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const h=Nd(),m=this.Go(e,t.toUriEncodedString());ie(ud,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(y,o,u);const{host:w}=new URL(m),T=jo(w);return this.jo(e,m,y,s,T).then((A=>(ie(ud,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw Qi(ud,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Jo(e,t,s,o,u,h){return this.Wo(e,t,s,o,u)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Go(e,t){const s=jx[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="WebChannelConnection";class zx extends Fx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,u){const h=Nd();return new Promise(((m,y)=>{const w=new Ov;w.setWithCredentials(!0),w.listenOnce(Mv.COMPLETE,(()=>{try{switch(w.getLastErrorCode()){case Lu.NO_ERROR:const A=w.getResponseJson();ie(en,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Lu.TIMEOUT:ie(en,`RPC '${e}' ${h} timed out`),y(new ye(K.DEADLINE_EXCEEDED,"Request time out"));break;case Lu.HTTP_ERROR:const R=w.getStatus();if(ie(en,`RPC '${e}' ${h} failed with status:`,R,"response text:",w.getResponseText()),R>0){let B=w.getResponseJson();Array.isArray(B)&&(B=B[0]);const Q=B==null?void 0:B.error;if(Q&&Q.status&&Q.message){const Y=(function(Ie){const fe=Ie.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(fe)>=0?fe:K.UNKNOWN})(Q.status);y(new ye(Y,Q.message))}else y(new ye(K.UNKNOWN,"Server responded with status "+w.getStatus()))}else y(new ye(K.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:h,l_:w.getLastErrorCode(),h_:w.getLastError()})}}finally{ie(en,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ie(en,`RPC '${e}' ${h} sending request:`,o),w.send(t,"POST",T,s,15)}))}P_(e,t,s){const o=Nd(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Fv(),m=jv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},w=this.longPollingOptions.timeoutSeconds;w!==void 0&&(y.longPollingTimeout=Math.round(1e3*w)),this.useFetchStreams&&(y.useFetchStreams=!0),this.zo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const T=u.join("");ie(en,`Creating RPC '${e}' stream ${o}: ${T}`,y);const A=h.createWebChannel(T,y);this.T_(A);let R=!1,B=!1;const Q=new Ux({Ho:q=>{B?ie(en,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(R||(ie(en,`Opening RPC '${e}' stream ${o} transport.`),A.open(),R=!0),ie(en,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Yo:()=>A.close()}),Y=(q,Ie,fe)=>{q.listen(Ie,(pe=>{try{fe(pe)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return Y(A,Sa.EventType.OPEN,(()=>{B||(ie(en,`RPC '${e}' stream ${o} transport opened.`),Q.s_())})),Y(A,Sa.EventType.CLOSE,(()=>{B||(B=!0,ie(en,`RPC '${e}' stream ${o} transport closed`),Q.__(),this.I_(A))})),Y(A,Sa.EventType.ERROR,(q=>{B||(B=!0,Qi(en,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),Q.__(new ye(K.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Sa.EventType.MESSAGE,(q=>{var Ie;if(!B){const fe=q.data[0];Je(!!fe,16349);const pe=fe,xe=(pe==null?void 0:pe.error)||((Ie=pe[0])===null||Ie===void 0?void 0:Ie.error);if(xe){ie(en,`RPC '${e}' stream ${o} received error:`,xe);const Oe=xe.status;let ke=(function(S){const b=St[S];if(b!==void 0)return _0(b)})(Oe),N=xe.message;ke===void 0&&(ke=K.INTERNAL,N="Unknown error status: "+Oe+" with message "+xe.message),B=!0,Q.__(new ye(ke,N)),A.close()}else ie(en,`RPC '${e}' stream ${o} received:`,fe),Q.a_(fe)}})),Y(m,Lv.STAT_EVENT,(q=>{q.stat===wd.PROXY?ie(en,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===wd.NOPROXY&&ie(en,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.o_()}),0),Q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new q2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="PersistentStream";class V0{constructor(e,t,s,o,u,h,m,y){this.Fi=e,this.w_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new D0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(ii(t.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ye(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ie(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ie(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bx extends V0{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=K2(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ne.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ne.min():h.readTime?Cr(h.readTime):Ne.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Rd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=kd(y)?{documents:Y2(u,y)}:{query:J2(u,y).Vt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=T0(u,h.resumeToken);const w=Ad(u,h.expectedCount);w!==null&&(m.expectedCount=w)}else if(h.snapshotVersion.compareTo(Ne.min())>0){m.readTime=ic(u,h.snapshotVersion.toTimestamp());const w=Ad(u,h.expectedCount);w!==null&&(m.expectedCount=w)}return m})(this.serializer,e);const s=ex(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Rd(this.serializer),t.removeTarget=e,this.k_(t)}}class $x extends V0{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=X2(e.writeResults,e.commitTime),s=Cr(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Rd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Q2(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{}class qx extends Hx{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ye(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,Cd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(K.UNKNOWN,u.toString())}))}Jo(e,t,s,o,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Jo(e,Cd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(K.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Wx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ii(t),this._a=!1):ie("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="RemoteStore";class Gx{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{Fs(this)&&(ie(Os,"Restarting streams for network reachability change."),await(async function(y){const w=De(y);w.Ia.add(4),await cl(w),w.Aa.set("Unknown"),w.Ia.delete(4),await Ic(w)})(this))}))})),this.Aa=new Wx(s,o)}}async function Ic(i){if(Fs(i))for(const e of i.da)await e(!0)}async function cl(i){for(const e of i.da)await e(!1)}function O0(i,e){const t=De(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),vf(t)?yf(t):Ho(t).x_()&&gf(t,e))}function mf(i,e){const t=De(i),s=Ho(t);t.Ta.delete(e),s.x_()&&M0(t,e),t.Ta.size===0&&(s.x_()?s.B_():Fs(t)&&t.Aa.set("Unknown"))}function gf(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ne.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(i).H_(e)}function M0(i,e){i.Ra.$e(e),Ho(i).Y_(e)}function yf(i){i.Ra=new z2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),Ho(i).start(),i.Aa.aa()}function vf(i){return Fs(i)&&!Ho(i).M_()&&i.Ta.size>0}function Fs(i){return De(i).Ia.size===0}function L0(i){i.Ra=void 0}async function Kx(i){i.Aa.set("Online")}async function Qx(i){i.Ta.forEach(((e,t)=>{gf(i,e)}))}async function Xx(i,e){L0(i),vf(i)?(i.Aa.la(e),yf(i)):i.Aa.set("Unknown")}async function Yx(i,e,t){if(i.Aa.set("Online"),e instanceof E0&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ta.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ta.delete(m),o.Ra.removeTarget(m))})(i,e)}catch(s){ie(Os,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await oc(i,s)}else if(e instanceof zu?i.Ra.Ye(e):e instanceof w0?i.Ra.it(e):i.Ra.et(e),!t.isEqual(Ne.min()))try{const s=await N0(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Ra.Pt(h);return m.targetChanges.forEach(((y,w)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ta.get(w);T&&u.Ta.set(w,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,w)=>{const T=u.Ta.get(y);if(!T)return;u.Ta.set(y,T.withResumeToken(Qt.EMPTY_BYTE_STRING,T.snapshotVersion)),M0(u,y);const A=new Bi(T.target,y,w,T.sequenceNumber);gf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(Os,"Failed to raise snapshot:",s),await oc(i,s)}}async function oc(i,e,t){if(!$o(e))throw e;i.Ia.add(1),await cl(i),i.Aa.set("Offline"),t||(t=()=>N0(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(Os,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Ic(i)}))}function j0(i,e){return e().catch((t=>oc(i,t,e)))}async function xc(i){const e=De(i),t=es(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ef;for(;Jx(e);)try{const o=await Dx(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,Zx(e,o)}catch(o){await oc(e,o)}F0(e)&&U0(e)}function Jx(i){return Fs(i)&&i.Pa.length<10}function Zx(i,e){i.Pa.push(e);const t=es(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function F0(i){return Fs(i)&&!es(i).M_()&&i.Pa.length>0}function U0(i){es(i).start()}async function ek(i){es(i).na()}async function tk(i){const e=es(i);for(const t of i.Pa)e.X_(t.mutations)}async function nk(i,e,t){const s=i.Pa.shift(),o=lf.from(s,e,t);await j0(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await xc(i)}async function rk(i,e){e&&es(i).Z_&&await(async function(s,o){if((function(h){return F2(h)&&h!==K.ABORTED})(o.code)){const u=s.Pa.shift();es(s).N_(),await j0(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await xc(s)}})(i,e),F0(i)&&U0(i)}async function sy(i,e){const t=De(i);t.asyncQueue.verifyOperationInProgress(),ie(Os,"RemoteStore received new credentials");const s=Fs(t);t.Ia.add(3),await cl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ic(t)}async function ik(i,e){const t=De(i);e?(t.Ia.delete(2),await Ic(t)):e||(t.Ia.add(2),await cl(t),t.Aa.set("Unknown"))}function Ho(i){return i.Va||(i.Va=(function(t,s,o){const u=De(t);return u.ia(),new Bx(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:Kx.bind(null,i),e_:Qx.bind(null,i),n_:Xx.bind(null,i),J_:Yx.bind(null,i)}),i.da.push((async e=>{e?(i.Va.N_(),vf(i)?yf(i):i.Aa.set("Unknown")):(await i.Va.stop(),L0(i))}))),i.Va}function es(i){return i.ma||(i.ma=(function(t,s,o){const u=De(t);return u.ia(),new $x(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:ek.bind(null,i),n_:rk.bind(null,i),ea:tk.bind(null,i),ta:nk.bind(null,i)}),i.da.push((async e=>{e?(i.ma.N_(),await xc(i)):(await i.ma.stop(),i.Pa.length>0&&(ie(Os,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))}))),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(i,e){if(ii("AsyncQueue",`${e}: ${i}`),$o(i))return new ye(K.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=Aa(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new bo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.fa=new _t(Te.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Lo{constructor(e,t,s,o,u,h,m,y,w){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=w}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Lo(e,t,bo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class ok{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=De(t),u=o.queries;o.queries=ay(),u.forEach(((h,m)=>{for(const y of m.wa)y.onError(s)}))})(this,new ye(K.ABORTED,"Firestore shutting down"))}}function ay(){return new Ls((i=>o0(i)),yc)}async function ak(i,e){const t=De(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.ba()&&(s=2):(u=new sk,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await t.onListen(o,!0);break;case 1:u.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=wf(h,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.wa.push(e),e.va(t.onlineState),u.ya&&e.Ca(u.ya)&&Ef(t)}async function lk(i,e){const t=De(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.wa.indexOf(e);h>=0&&(u.wa.splice(h,1),u.wa.length===0?o=e.ba()?0:1:!u.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function uk(i,e){const t=De(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.wa)m.Ca(o)&&(s=!0);h.ya=o}}s&&Ef(t)}function ck(i,e,t){const s=De(i),o=s.queries.get(e);if(o)for(const u of o.wa)u.onError(t);s.queries.delete(e)}function Ef(i){i.Da.forEach((e=>{e.next()}))}var Dd,ly;(ly=Dd||(Dd={})).Fa="default",ly.Cache="cache";class hk{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.key=e}}class B0{constructor(e){this.key=e}}class dk{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=He(),this.mutatedKeys=He(),this.Xa=a0(e),this.eu=new bo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new oy,o=t?t.eu:this.eu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,w=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,A)=>{const R=o.get(T),B=vc(this.query,A)?A:null,Q=!!R&&this.mutatedKeys.has(R.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;R&&B?R.data.isEqual(B.data)?Q!==Y&&(s.track({type:3,doc:B}),q=!0):this.iu(R,B)||(s.track({type:2,doc:B}),q=!0,(y&&this.Xa(B,y)>0||w&&this.Xa(B,w)<0)&&(m=!0)):!R&&B?(s.track({type:0,doc:B}),q=!0):R&&!B&&(s.track({type:1,doc:R}),q=!0,(y||w)&&(m=!0)),q&&(B?(h=h.add(B),u=Y?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{eu:h,ru:s,Ds:m,mutatedKeys:u}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((T,A)=>(function(B,Q){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:q})}};return Y(B)-Y(Q)})(T.type,A.type)||this.Xa(T.doc,A.doc))),this.su(s),o=o!=null&&o;const m=t&&!o?this.ou():[],y=this.Za.size===0&&this.current&&!o?1:0,w=y!==this.Ya;return this.Ya=y,h.length!==0||w?{snapshot:new Lo(this.query,e.eu,u,h,e.mutatedKeys,y===0,w,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:m}:{_u:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new oy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=He(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new B0(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new z0(s))})),t}uu(e){this.Ha=e.qs,this.Za=He();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Lo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Tf="SyncEngine";class fk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class pk{constructor(e){this.key=e,this.lu=!1}}class mk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Ls((m=>o0(m)),yc),this.Tu=new Map,this.Iu=new Set,this.du=new _t(Te.comparator),this.Eu=new Map,this.Au=new hf,this.Ru={},this.Vu=new Map,this.mu=Mo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gk(i,e,t=!0){const s=K0(i);let o;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.cu()):o=await $0(s,e,t,!0),o}async function yk(i,e){const t=K0(i);await $0(t,e,!0,!1)}async function $0(i,e,t,s){const o=await Vx(i.localStore,Ar(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await vk(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&O0(i.remoteStore,o),m}async function vk(i,e,t,s,o){i.gu=(A,R,B)=>(async function(Y,q,Ie,fe){let pe=q.view.nu(Ie);pe.Ds&&(pe=await ey(Y.localStore,q.query,!1).then((({documents:N})=>q.view.nu(N,pe))));const xe=fe&&fe.targetChanges.get(q.targetId),Oe=fe&&fe.targetMismatches.get(q.targetId)!=null,ke=q.view.applyChanges(pe,Y.isPrimaryClient,xe,Oe);return cy(Y,q.targetId,ke._u),ke.snapshot})(i,A,R,B);const u=await ey(i.localStore,e,!0),h=new dk(e,u.qs),m=h.nu(u.documents),y=ul.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),w=h.applyChanges(m,i.isPrimaryClient,y);cy(i,t,w._u);const T=new fk(e,t,h);return i.Pu.set(e,T),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),w.snapshot}async function _k(i,e,t){const s=De(i),o=s.Pu.get(e),u=s.Tu.get(o.targetId);if(u.length>1)return s.Tu.set(o.targetId,u.filter((h=>!yc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&mf(s.remoteStore,o.targetId),Vd(s,o.targetId)})).catch(Bo)):(Vd(s,o.targetId),await bd(s.localStore,o.targetId,!0))}async function wk(i,e){const t=De(i),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),mf(t.remoteStore,s.targetId))}async function Ek(i,e,t){const s=Ck(i);try{const o=await(function(h,m){const y=De(h),w=ct.now(),T=m.reduce(((B,Q)=>B.add(Q.key)),He());let A,R;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Q=si(),Y=He();return y.Os.getEntries(B,T).next((q=>{Q=q,Q.forEach(((Ie,fe)=>{fe.isValidDocument()||(Y=Y.add(Ie))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,Q))).next((q=>{A=q;const Ie=[];for(const fe of m){const pe=V2(fe,A.get(fe.key).overlayedDocument);pe!=null&&Ie.push(new js(fe.key,pe,Zv(pe.value.mapValue),Zr.exists(!0)))}return y.mutationQueue.addMutationBatch(B,w,Ie,m)})).next((q=>{R=q;const Ie=q.applyToLocalDocumentSet(A,Y);return y.documentOverlayCache.saveOverlays(B,q.batchId,Ie)}))})).then((()=>({batchId:R.batchId,changes:u0(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let w=h.Ru[h.currentUser.toKey()];w||(w=new _t(Ue)),w=w.insert(m,y),h.Ru[h.currentUser.toKey()]=w})(s,o.batchId,t),await hl(s,o.changes),await xc(s.remoteStore)}catch(o){const u=wf(o,"Failed to persist write");t.reject(u)}}async function H0(i,e){const t=De(i);try{const s=await bx(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Je(h.lu,14607):o.removedDocuments.size>0&&(Je(h.lu,42227),h.lu=!1))})),await hl(t,s,e)}catch(s){await Bo(s)}}function uy(i,e,t){const s=De(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=De(h);y.onlineState=m;let w=!1;y.queries.forEach(((T,A)=>{for(const R of A.wa)R.va(m)&&(w=!0)})),w&&Ef(y)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Tk(i,e,t){const s=De(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new _t(Te.comparator);h=h.insert(u,nn.newNoDocument(u,Ne.min()));const m=He().add(u),y=new Ec(Ne.min(),new Map,new _t(Ue),h,m);await H0(s,y),s.du=s.du.remove(u),s.Eu.delete(e),If(s)}else await bd(s.localStore,e,!1).then((()=>Vd(s,e,t))).catch(Bo)}async function Ik(i,e){const t=De(i),s=e.batch.batchId;try{const o=await Rx(t.localStore,e);W0(t,s,null),q0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await hl(t,o)}catch(o){await Bo(o)}}async function xk(i,e,t){const s=De(i);try{const o=await(function(h,m){const y=De(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(w=>{let T;return y.mutationQueue.lookupMutationBatch(w,m).next((A=>(Je(A!==null,37113),T=A.keys(),y.mutationQueue.removeMutationBatch(w,A)))).next((()=>y.mutationQueue.performConsistencyCheck(w))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(w,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(w,T))).next((()=>y.localDocuments.getDocuments(w,T)))}))})(s.localStore,e);W0(s,e,t),q0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await hl(s,o)}catch(o){await Bo(o)}}function q0(i,e){(i.Vu.get(e)||[]).forEach((t=>{t.resolve()})),i.Vu.delete(e)}function W0(i,e,t){const s=De(i);let o=s.Ru[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Vd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach((s=>{i.Au.containsKey(s)||G0(i,s)}))}function G0(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(mf(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),If(i))}function cy(i,e,t){for(const s of t)s instanceof z0?(i.Au.addReference(s.key,e),kk(i,s)):s instanceof B0?(ie(Tf,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||G0(i,s.key)):Se(19791,{yu:s})}function kk(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ie(Tf,"New document in limbo: "+t),i.Iu.add(s),If(i))}function If(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new Te(vt.fromString(e)),s=i.mu.next();i.Eu.set(s,new pk(t)),i.du=i.du.insert(t,s),O0(i.remoteStore,new Bi(Ar(of(t.path)),s,"TargetPurposeLimboResolution",fc.ue))}}async function hl(i,e,t){const s=De(i),o=[],u=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((m,y)=>{h.push(s.gu(y,e,t).then((w=>{var T;if((w||t)&&s.isPrimaryClient){const A=w?!w.fromCache:(T=t==null?void 0:t.targetChanges.get(y.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(w){o.push(w);const A=ff.Es(y.targetId,w);u.push(A)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(y,w){const T=De(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>H.forEach(w,(R=>H.forEach(R.Is,(B=>T.persistence.referenceDelegate.addReference(A,R.targetId,B))).next((()=>H.forEach(R.ds,(B=>T.persistence.referenceDelegate.removeReference(A,R.targetId,B)))))))))}catch(A){if(!$o(A))throw A;ie(pf,"Failed to update sequence numbers: "+A)}for(const A of w){const R=A.targetId;if(!A.fromCache){const B=T.Fs.get(R),Q=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(Q);T.Fs=T.Fs.insert(R,Y)}}})(s.localStore,u))}async function Sk(i,e){const t=De(i);if(!t.currentUser.isEqual(e)){ie(Tf,"User change. New user:",e.toKey());const s=await b0(t.localStore,e);t.currentUser=e,(function(u,h){u.Vu.forEach((m=>{m.forEach((y=>{y.reject(new ye(K.CANCELLED,h))}))})),u.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hl(t,s.Bs)}}function Ak(i,e){const t=De(i),s=t.Eu.get(e);if(s&&s.lu)return He().add(s.key);{let o=He();const u=t.Tu.get(e);if(!u)return o;for(const h of u){const m=t.Pu.get(h);o=o.unionWith(m.view.tu)}return o}}function K0(i){const e=De(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=H0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tk.bind(null,e),e.hu.J_=uk.bind(null,e.eventManager),e.hu.pu=ck.bind(null,e.eventManager),e}function Ck(i){const e=De(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xk.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Px(this.persistence,new Sx,e.initialUser,this.serializer)}Du(e){return new R0(df.Vi,this.serializer)}bu(e){return new Mx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class Pk extends ac{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Je(this.persistence.referenceDelegate instanceof sc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new hx(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new R0((s=>sc.Vi(s,t)),this.serializer)}}class Od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sk.bind(null,this.syncEngine),await ik(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ok})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(u){return new zx(u)})(e.databaseInfo);return(function(u,h,m,y){return new qx(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new Gx(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>uy(this.syncEngine,t,0)),(function(){return ry.C()?new ry:new Lx})())}createSyncEngine(e,t){return(function(o,u,h,m,y,w,T){const A=new mk(o,u,h,m,y,w);return T&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=De(o);ie(Os,"RemoteStore shutting down."),u.Ia.add(5),await cl(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Od.provider={build:()=>new Od};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="FirestoreClient";class bk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=tn.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(ts,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(ts,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=wf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function hd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(ts,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await b0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Qi("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then((()=>{ie("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Qi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),i._offlineComponents=e}async function hy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Nk(i);ie(ts,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>sy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>sy(e.remoteStore,o))),i._onlineComponents=e}async function Nk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(ts,"Using user provided OfflineComponentProvider");try{await hd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Qi("Error using user provided cache. Falling back to memory cache: "+t),await hd(i,new ac)}}else ie(ts,"Using default OfflineComponentProvider"),await hd(i,new Pk(void 0));return i._offlineComponents}async function Q0(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(ts,"Using user provided OnlineComponentProvider"),await hy(i,i._uninitializedComponentsProvider._online)):(ie(ts,"Using default OnlineComponentProvider"),await hy(i,new Od))),i._onlineComponents}function Dk(i){return Q0(i).then((e=>e.syncEngine))}async function Vk(i){const e=await Q0(i),t=e.eventManager;return t.onListen=gk.bind(null,e.syncEngine),t.onUnlisten=_k.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wk.bind(null,e.syncEngine),t}function Ok(i,e,t={}){const s=new Ki;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,w){const T=new Rk({next:R=>{T.Ou(),h.enqueueAndForget((()=>lk(u,A)));const B=R.docs.has(m);!B&&R.fromCache?w.reject(new ye(K.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&R.fromCache&&y&&y.source==="server"?w.reject(new ye(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):w.resolve(R)},error:R=>w.reject(R)}),A=new hk(of(m.path),T,{includeMetadataChanges:!0,ka:!0});return ak(u,A)})(await Vk(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="firestore.googleapis.com",fy=!0;class py{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Y0,this.ssl=fy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ux)throw new ye(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ye(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ye(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ye(K.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new LI;switch(s.type){case"firstParty":return new zI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=dy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),dy.delete(t),s.terminate())})(this),Promise.resolve()}}function Mk(i,e,t,s={}){var o;i=Ha(i,xf);const u=jo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),y=`${e}:${t}`;u&&(Qy(`https://${y}`),Xy("Firestore",!0)),h.host!==Y0&&h.host!==y&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},h),{host:y,ssl:u,emulatorOptions:s});if(!bs(w,m)&&(i._setSettings(w),s.mockUserToken)){let T,A;if(typeof s.mockUserToken=="string")T=s.mockUserToken,A=tn.MOCK_USER;else{T=ow(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ye(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new tn(R)}i._authCredentials=new jI(new zv(T,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}}class zt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ya(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}toJSON(){return{type:zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(al(t,zt._jsonSchema))return new zt(e,s||null,new Te(vt.fromString(t.referencePath)))}}zt._jsonSchemaVersion="firestore/documentReference/1.0",zt._jsonSchema={type:At("string",zt._jsonSchemaVersion),referencePath:At("string")};class Ya extends kf{constructor(e,t,s){super(e,t,of(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new Te(e))}withConverter(e){return new Ya(this.firestore,e,this._path)}}function my(i,e,...t){if(i=dr(i),arguments.length===1&&(e=Jd.newId()),WI("doc","path",e),i instanceof xf){const s=vt.fromString(e,...t);return Cg(s),new zt(i,null,new Te(s))}{if(!(i instanceof zt||i instanceof Ya))throw new ye(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(vt.fromString(e,...t));return Cg(s),new zt(i.firestore,i instanceof Ya?i.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="AsyncQueue";class yy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new D0(this,"async_queue_retry"),this.oc=()=>{const s=cd();s&&ie(gy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ki;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$o(e))throw e;ie(gy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,ii("INTERNAL UNHANDLED ERROR: ",vy(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.lc(u)));return this.ec.push(o),o}ac(){this.tc&&Se(47125,{hc:vy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function vy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Sf extends xf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yy(e),this._firestoreClient=void 0,await e}}}function Lk(i,e){const t=typeof i=="object"?i:ev(),s=typeof i=="string"?i:Ju,o=zd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=iw("firestore");u&&Mk(o,...u)}return o}function J0(i){if(i._terminated)throw new ye(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||jk(i),i._firestoreClient}function jk(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,w,T){return new i2(m,y,w,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,X0(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new bk(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Qt.fromBase64String(e))}catch(t){throw new ye(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(al(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:At("string",Xn._jsonSchemaVersion),bytes:At("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pr._jsonSchemaVersion}}static fromJSON(e){if(al(e,Pr._jsonSchema))return new Pr(e.latitude,e.longitude)}}Pr._jsonSchemaVersion="firestore/geoPoint/1.0",Pr._jsonSchema={type:At("string",Pr._jsonSchemaVersion),latitude:At("number"),longitude:At("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Rr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(al(e,Rr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Rr(e.vectorValues);throw new ye(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rr._jsonSchemaVersion="firestore/vectorValue/1.0",Rr._jsonSchema={type:At("string",Rr._jsonSchemaVersion),vectorValues:At("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=/^__.*__$/;class Uk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new js(e,this.data,this.fieldMask,t,this.fieldTransforms):new ll(e,this.data,t,this.fieldTransforms)}}function e_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:i})}}class Cf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return lc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(e_(this.Ec)&&Fk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class zk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Dc(e,t,s,o=!1){return new Cf({Ec:e,methodName:t,bc:s,path:Kt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bk(i){const e=i._freezeSettings(),t=Tc(i._databaseId);return new zk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function $k(i,e,t,s,o,u={}){const h=i.Dc(u.merge||u.mergeFields?2:0,e,t,o);i_("Data must be an object, but it was:",h,s);const m=n_(s,h);let y,w;if(u.merge)y=new hr(h.fieldMask),w=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const A of u.mergeFields){const R=Hk(e,A,t);if(!h.contains(R))throw new ye(K.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Wk(T,R)||T.push(R)}y=new hr(T),w=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,w=h.fieldTransforms;return new Uk(new Qn(m),y,w)}function t_(i,e){if(r_(i=dr(i)))return i_("Unsupported field value:",e,i),n_(i,e);if(i instanceof Z0)return(function(s,o){if(!e_(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=t_(m,o.yc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=dr(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return C2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ct.fromDate(s);return{timestampValue:ic(o.serializer,u)}}if(s instanceof ct){const u=new ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ic(o.serializer,u)}}if(s instanceof Pr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xn)return{bytesValue:T0(o.serializer,s._byteString)};if(s instanceof zt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:cf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Rr)return(function(h,m){return{mapValue:{fields:{[Yv]:{stringValue:Jv},[Zu]:{arrayValue:{values:h.toArray().map((w=>{if(typeof w!="number")throw m.wc("VectorValues must only contain numeric values.");return af(m.serializer,w)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${Zd(s)}`)})(i,e)}function n_(i,e){const t={};return qv(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(i,((s,o)=>{const u=t_(o,e.Vc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function r_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ct||i instanceof Pr||i instanceof Xn||i instanceof zt||i instanceof Z0||i instanceof Rr)}function i_(i,e,t){if(!r_(t)||!$v(t)){const s=Zd(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Hk(i,e,t){if((e=dr(e))instanceof Af)return e._internalPath;if(typeof e=="string")return s_(i,e);throw lc("Field path arguments must be of type string or ",i,!1,void 0,t)}const qk=new RegExp("[~\\*/\\[\\]]");function s_(i,e,t){if(e.search(qk)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Af(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function lc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ye(K.INVALID_ARGUMENT,m+i+y)}function Wk(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(a_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gk extends o_{data(){return super.data()}}function a_(i,e){return typeof e=="string"?s_(i,e):e instanceof Af?e._internalPath:e._delegate._internalPath}class Kk{convertValue(e,t="none"){switch(Zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ms(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Zu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>It(h.doubleValue)));return new Rr(u)}convertGeoPoint(e){return new Pr(It(e.latitude),It(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=mc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Yi(e);return new ct(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=vt.fromString(e);Je(C0(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),u=new Te(s.popFirst(5));return o.isEqual(t)||ii(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}class Pa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rs extends o_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(a_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Rs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Rs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rs._jsonSchema={type:At("string",Rs._jsonSchemaVersion),bundleSource:At("string","DocumentSnapshot"),bundleName:At("string"),bundle:At("string")};class Bu extends Rs{data(e={}){return super.data(e)}}class Fa{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new Pa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ye(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let w=-1,T=-1;return m.type!==0&&(w=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:Xk(m.type),doc:y,oldIndex:w,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(i){i=Ha(i,zt);const e=Ha(i.firestore,Sf);return Ok(J0(e),i._key).then((t=>tS(e,i,t)))}Fa._jsonSchemaVersion="firestore/querySnapshot/1.0",Fa._jsonSchema={type:At("string",Fa._jsonSchemaVersion),bundleSource:At("string","QuerySnapshot"),bundleName:At("string"),bundle:At("string")};class Jk extends Kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,t)}}function Zk(i,e,t){i=Ha(i,zt);const s=Ha(i.firestore,Sf),o=Qk(i.converter,e,t);return eS(s,[$k(Bk(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Zr.none())])}function eS(i,e){return(function(s,o){const u=new Ki;return s.asyncQueue.enqueueAndForget((async()=>Ek(await Dk(s),o,u))),u.promise})(J0(i),e)}function tS(i,e,t){const s=t.docs.get(e._key),o=new Jk(i);return new Rs(i,o,e._key,s,new Pa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){zo=o})(Fo),No(new Ns("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Sf(new FI(s.getProvider("auth-internal")),new BI(h,s.getProvider("app-check-internal")),(function(w,T){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new ye(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(w.options.projectId,T)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Wi(Ig,xg,e),Wi(Ig,xg,"esm2017")})();const nS={apiKey:"AIzaSyDOBlN-tRCQuJmEasvUBXZPfwpqHzHdK2I",authDomain:"acs-engineering-25.firebaseapp.com",projectId:"acs-engineering-25",storageBucket:"acs-engineering-25.firebasestorage.app",messagingSenderId:"971558879324",appId:"1:971558879324:web:eff570fbb4c38e48536699",measurementId:"G-Z00S2KQ54W"},l_=Zy(nS),Nu=OI(l_),_y=Lk(l_),wy=typeof __app_id<"u"?__app_id:"pdfhunt-v2-production",le={light:()=>{"vibrate"in navigator&&navigator.vibrate(10)},medium:()=>{"vibrate"in navigator&&navigator.vibrate(20)},heavy:()=>{"vibrate"in navigator&&navigator.vibrate([10,50,20])},success:()=>{"vibrate"in navigator&&navigator.vibrate([10,50,10,50,10])},error:()=>{"vibrate"in navigator&&navigator.vibrate([100,50,100])}},Ey=()=>v.jsx("style",{children:`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    :root { font-family: 'Montserrat', sans-serif; }
    body { font-family: 'Montserrat', sans-serif; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    @keyframes fall { 0% { top: -10%; } 100% { top: 110%; } }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-fall { animation-name: fall; animation-timing-function: linear; animation-iteration-count: infinite; }
    @keyframes stagger-enter { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    .animate-stagger-enter { animation: stagger-enter 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    @keyframes page-enter { 0% { opacity: 0; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1); } }
    .animate-page-enter { animation: page-enter 0.3s ease-out forwards; }
    @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); } 20%, 40%, 60%, 80% { transform: translateX(4px); } }
    .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
    .glass-panel { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); }
    .dark .glass-panel { border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); }
    .glass-input { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255, 255, 255, 0.2); color: inherit; }
    .dark .glass-input { background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.1); }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    .pdf-viewer-frame { width: 100%; height: 100%; border: none; }
  `}),Ua={BookOpen:Ja,Globe:by,Laptop:Ny,Atom:Ay,FlaskConical:Ry,Calculator:Py,Microscope:Vy,Layers:za,Folder:Ao,FileText:uc,PenTool:Ly,Ruler:jy,Brain:Cy,Lightbulb:Dy,Music:Oy,Palette:My,Facebook:D1,Instagram:L1,MessageCircle:z1,Github:V1,Linkedin:F1,Twitter:G1,Youtube:Q1,LinkIcon:jd},Ty=i=>{if(!i)return"";const e=i.match(/\/d\/([a-zA-Z0-9_-]+)/);if(e)return e[1];const t=i.match(/[?&]id=([a-zA-Z0-9_-]+)/);return t?t[1]:(/^[a-zA-Z0-9_-]{25,}$/.test(i),i)},Ra={Udvash:[],ACS:[],Others:[],settings:{appName:"PDF Hunt",appDesc:"Find your resources",tab1:"Udvash",tab2:"ACS",tab3:"Others",theme:{gradientStart:"#10b981",gradientEnd:"#047857",navColor:"#3b82f6"}},About:{name:"Admin User",title:"Full Stack Web & App Developer",bio:"I am a passionate Full Stack Developer creating modern, responsive, and user-friendly web and mobile applications.",avatarUrl:null,links:[{id:1,platform:"Facebook",handle:"@admin.user",url:"#",color:"bg-blue-600",iconName:"Facebook"},{id:2,platform:"Instagram",handle:"@admin_dev",url:"#",color:"bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",iconName:"Instagram"},{id:3,platform:"WhatsApp",handle:"+880 1XXX",url:"#",color:"bg-green-500",iconName:"MessageCircle"}]}},rS="140075",iS=()=>v.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-[#f0f2f5] dark:bg-[#0b141a] z-[9999] transition-colors duration-300",children:v.jsxs("div",{className:"flex flex-col items-center animate-page-enter",children:[v.jsxs("div",{className:"w-16 h-16 relative",children:[v.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"}),v.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"})]}),v.jsx("h2",{className:"mt-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse",children:"Loading Resources..."})]})}),Iy=()=>{const i=[O1,Ly,Py,Ry,Ay,by,Ny,jy,Cy,Dy,Vy,Oy,My,Ja,za,uc],e=["#94a3b8","#a78bfa","#f472b6","#34d399","#60a5fa","#fbbf24","#2dd4bf","#f87171"],[t]=ce.useState(()=>Array.from({length:50}).map((s,o)=>({Icon:i[o%i.length],key:o,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*15}s`,animationDuration:`${10+Math.random()*15}s`,transform:`rotate(${Math.random()*360}deg)`,color:e[o%e.length]}})));return v.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none",children:[v.jsx("div",{className:"absolute inset-0 bg-[#f0f2f5] dark:bg-[#0b141a] transition-colors duration-300"}),t.map(({Icon:s,key:o,style:u})=>v.jsx("div",{className:"absolute top-[-10%] animate-fall opacity-20 dark:opacity-15",style:u,children:v.jsx(s,{size:24,style:{color:u.color}})},o))]})},$i=({name:i,active:e,onClick:t,icon:s,activeColor:o})=>v.jsxs("button",{onClick:()=>{le.light(),t()},className:`relative flex flex-col items-center justify-end w-full h-full pb-2 transition-all duration-300 ${e?"":"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"} active:scale-95`,style:e?{color:o}:{},children:[v.jsx("div",{className:`p-2 rounded-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${e?"-translate-y-4 shadow-lg backdrop-blur-md mb-1":"mb-0"}`,style:e?{backgroundColor:`${o}20`,boxShadow:`0 10px 15px -3px ${o}30`}:{},children:v.jsx(s,{size:24,strokeWidth:e?2.5:2})}),v.jsx("span",{className:`text-[10px] font-bold transition-all duration-300 ${e?"opacity-100 translate-y-0":"opacity-70"} truncate max-w-[64px]`,children:i})]}),sS=({value:i,onChange:e})=>v.jsxs("div",{className:"relative w-full max-w-md mx-auto group",children:[v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors z-10",children:v.jsx(Fy,{size:18})}),v.jsx("input",{type:"text",value:i,onChange:t=>e(t.target.value),onFocus:()=>le.light(),placeholder:"Search folders or files...",className:"w-full pl-10 pr-4 py-3 glass-panel bg-white/10 dark:bg-black/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-sm text-sm font-medium text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"})]}),u_=({item:i,colorTheme:e,onClick:t,index:s,isAdmin:o,onDelete:u,onEdit:h,onMoveUp:m,onMoveDown:y,onMove:w,canMoveUp:T,canMoveDown:A,onDragStart:R,onDragOver:B,onDragEnd:Q,onDrop:Y,onPointerDragStart:q,onPointerDragEnter:Ie,onPointerDragEnd:fe,isDragging:pe,dragOver:xe,isAnyDragging:Oe})=>{var D;const ke=i.type==="folder",N=Ua[i.iconName]||(ke?Ao:uc),S=(C=>{const k={emerald:{border:"hover:border-emerald-500/50",bg:"bg-emerald-100/50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"},blue:{border:"hover:border-blue-500/50",bg:"bg-blue-100/50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"},purple:{border:"hover:border-purple-500/50",bg:"bg-purple-100/50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400"},red:{border:"hover:border-red-500/50",bg:"bg-red-100/50 dark:bg-red-900/40 text-red-700 dark:text-red-400"},orange:{border:"hover:border-orange-500/50",bg:"bg-orange-100/50 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400"}};return k[C||(e==="Udvash"?"emerald":e==="ACS"?"blue":"purple")]||k.blue})(i.customColor),b=()=>ke?`bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 ${S.border}`:S.border;return v.jsxs("div",{draggable:o,onDragStart:C=>o&&R&&(C.dataTransfer.effectAllowed="move",C.dataTransfer.setData("text/html",i.id),R(C,s)),onDragOver:C=>o&&B&&(C.preventDefault(),C.dataTransfer.dropEffect="move",B(C,s)),onDragEnd:C=>o&&Q&&Q(C),onDrop:C=>o&&Y&&(C.preventDefault(),Y(C,s)),onPointerDown:C=>o&&q&&q(C,s),onPointerEnter:C=>o&&Ie&&Ie(C,s),onPointerUp:C=>o&&fe&&fe(C,s),onClick:C=>!Oe&&(le.medium(),t(i)),className:`group relative flex items-center gap-4 p-4 rounded-2xl glass-panel ${b()} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm animate-stagger-enter opacity-0 ${o?"cursor-move":"cursor-pointer"} ${pe?"opacity-50 scale-95 shadow-lg":""} ${xe?"border-2 border-blue-500 scale-[1.05] bg-blue-500/10 shadow-lg":""}`,style:{animationDelay:`${s*.05}s`},children:[v.jsx("div",{className:`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${S.bg}`,children:v.jsx(N,{size:24})}),v.jsxs("div",{className:"flex-1 min-w-0",children:[v.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100 truncate",children:i.title}),v.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-1 font-semibold",children:ke?`${((D=i.items)==null?void 0:D.length)||0} items`:`${i.author} • ${i.date}`})]}),v.jsx("div",{className:"flex flex-col items-center justify-center",onClick:C=>C.stopPropagation(),children:o?v.jsxs("div",{className:"flex flex-col gap-2",children:[v.jsxs("div",{className:"flex gap-2",children:[T&&v.jsx("button",{onClick:C=>{C.stopPropagation(),le.light(),m()},className:"p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-green-500 hover:text-white transition-colors active:scale-95",children:v.jsx(C1,{size:16})}),A&&v.jsx("button",{onClick:C=>{C.stopPropagation(),le.light(),y()},className:"p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-green-500 hover:text-white transition-colors active:scale-95",children:v.jsx(A1,{size:16})})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:C=>{C.stopPropagation(),le.light(),w(i)},className:"p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-purple-500 hover:text-white transition-colors active:scale-95",children:v.jsx($1,{size:16})}),v.jsx("button",{onClick:C=>{C.stopPropagation(),le.light(),h(i)},className:"p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-blue-500 hover:text-white transition-colors active:scale-95",children:v.jsx(q1,{size:16})}),v.jsx("button",{onClick:C=>{C.stopPropagation(),le.error(),u(i.id)},className:"p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-red-500 hover:text-white transition-colors active:scale-95",children:v.jsx(By,{size:16})})]})]}):ke?v.jsx("div",{className:"w-8 h-8 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 group-hover:bg-blue-500/20 transition-colors",children:v.jsx(Ld,{className:"text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400",size:18})}):v.jsx("div",{className:"flex flex-col items-end gap-2",children:v.jsx("span",{className:"text-[10px] font-mono font-bold px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",children:i.size})})})]})},oS=({file:i,onClose:e})=>{const t=`https://drive.google.com/file/d/${i.link}/preview`;return v.jsxs("div",{className:"fixed inset-0 z-[60] flex flex-col bg-white dark:bg-gray-900 animate-in fade-in zoom-in-95 duration-300",children:[v.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("button",{onClick:()=>{le.light(),e()},className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-95",children:v.jsx(Sy,{size:20,className:"text-gray-700 dark:text-gray-200"})}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-bold text-sm md:text-base text-gray-900 dark:text-gray-100 max-w-[200px] md:max-w-md truncate",children:i.title}),v.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 font-medium",children:i.size})]})]}),v.jsx("div",{className:"flex gap-2",children:v.jsxs("a",{href:`https://drive.google.com/u/0/uc?id=${i.link}&export=download`,target:"_blank",rel:"noreferrer",onClick:()=>le.success(),className:"flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors active:scale-95",children:[v.jsx(Za,{size:16}),v.jsx("span",{className:"hidden sm:inline",children:"Download"})]})})]}),v.jsxs("div",{className:"flex-1 bg-gray-100 dark:bg-gray-950 relative",children:[v.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-gray-400",children:v.jsx("p",{className:"font-medium",children:"Loading Preview..."})}),v.jsx("iframe",{src:t,className:"pdf-viewer-frame relative z-10",allow:"autoplay",title:"PDF Viewer"})]})]})},aS=({onClose:i,onLogin:e})=>{const[t,s]=ce.useState(""),[o,u]=ce.useState(!1),h=m=>{m.preventDefault(),t===rS?(e(),i()):(u(!0),setTimeout(()=>u(!1),500))};return v.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-page-enter",children:v.jsxs("div",{className:`glass-panel bg-white/20 dark:bg-black/40 p-8 rounded-3xl w-full max-w-sm flex flex-col items-center shadow-2xl ${o?"animate-shake border-red-500/50":""}`,children:[v.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg",children:v.jsx(U1,{size:32,className:"text-white"})}),v.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Admin Access"}),v.jsx("p",{className:"text-gray-200 text-xs mb-6 text-center",children:"Enter your security PIN to access the control panel."}),v.jsxs("form",{onSubmit:h,className:"w-full",children:[v.jsxs("div",{className:"relative mb-6",children:[v.jsx(j1,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"}),v.jsx("input",{type:"password",autoFocus:!0,value:t,onChange:m=>s(m.target.value),className:"w-full p-4 pl-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-center tracking-widest font-bold text-lg",placeholder:"••••"})]}),v.jsxs("div",{className:"flex gap-3",children:[v.jsx("button",{type:"button",onClick:()=>{le.light(),i()},className:"flex-1 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors active:scale-95",children:"Cancel"}),v.jsx("button",{type:"submit",onClick:()=>le.medium(),className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 active:scale-95",children:"Login"})]})]})]})})},lS=({onClose:i})=>v.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-page-enter",children:v.jsx("div",{className:"glass-panel bg-white/20 dark:bg-black/40 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20",children:v.jsxs("div",{className:"flex flex-col items-center text-center",children:[v.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg",children:v.jsx(Uy,{size:40,className:"text-white"})}),v.jsx("h2",{className:"text-2xl font-extrabold text-gray-900 dark:text-white mb-4",children:"Install PDF Hunt"}),v.jsxs("div",{className:"w-full space-y-4 mb-6 text-left",children:[v.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0",children:"1"}),v.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 font-medium pt-1",children:["Tap the ",v.jsx("strong",{children:"Share button"})," at the bottom"]})]}),v.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0",children:"2"}),v.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 font-medium pt-1",children:["Scroll down and tap ",v.jsx("strong",{children:'"Add to Home Screen"'})]})]}),v.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20",children:[v.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0",children:"3"}),v.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 font-medium pt-1",children:["Tap ",v.jsx("strong",{children:'"Add"'})," to finish"]})]})]}),v.jsx("button",{onClick:()=>{le.light(),i()},className:"w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors active:scale-95",children:"Got It!"})]})})}),uS=({onUpdate:i,onDismiss:e})=>v.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-[100] animate-page-enter max-w-md w-full px-4",children:v.jsx("div",{className:"glass-panel bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl border border-white/20",children:v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0",children:v.jsx(Za,{size:20,className:"text-white"})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("h3",{className:"font-bold text-white mb-1",children:"New Update Available!"}),v.jsx("p",{className:"text-xs text-white/90",children:"Get latest features"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:i,className:"px-4 py-2 bg-white text-blue-600 rounded-xl text-sm font-bold transition-colors hover:bg-white/90 active:scale-95",children:"Update"}),v.jsx("button",{onClick:e,className:"p-2 text-white/80 hover:text-white transition-colors active:scale-95",children:v.jsx(Na,{size:18})})]})]})})}),cS=({deferredPrompt:i,onInstall:e,onDismiss:t})=>i?v.jsx("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-page-enter max-w-md w-full px-4",children:v.jsx("div",{className:"glass-panel bg-white/20 dark:bg-black/40 p-4 rounded-2xl shadow-2xl border border-blue-500/30",children:v.jsxs("div",{className:"flex items-start gap-3",children:[v.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0",children:v.jsx(Za,{size:24,className:"text-white"})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("h3",{className:"font-bold text-gray-900 dark:text-white mb-1",children:"Install PDF Hunt"}),v.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:"Install for offline access!"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:()=>{le.medium(),e()},className:"flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors active:scale-95",children:"Install Now"}),v.jsx("button",{onClick:()=>{le.light(),t()},className:"py-2 px-4 glass-input hover:bg-white/20 rounded-xl text-sm font-bold transition-colors active:scale-95",children:"Later"})]})]}),v.jsx("button",{onClick:()=>{le.light(),t()},className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 active:scale-95",children:v.jsx(Na,{size:18})})]})})}):null,hS=({onStart:i,onSkip:e})=>{const[t,s]=ce.useState(0),o=[{title:"Welcome to PDF Hunt!",description:"Your one-stop solution for managing study materials",icon:Ja,color:"from-blue-500 to-cyan-500"},{title:"Browse & Search",description:"Easily navigate through folders and search for files",icon:Fy,color:"from-emerald-500 to-green-500"},{title:"PDF Preview",description:"View PDFs directly in your browser without downloading",icon:uc,color:"from-purple-500 to-pink-500"},{title:"Install App",description:"Install PDF Hunt on your device for offline access and faster loading",icon:Uy,color:"from-orange-500 to-red-500"}],u=()=>{t<o.length-1?s(t+1):i()},h=o[t].icon;return v.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-page-enter",children:v.jsxs("div",{className:"glass-panel bg-white/20 dark:bg-black/40 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20",children:[v.jsxs("div",{className:"flex flex-col items-center text-center mb-6",children:[v.jsx("div",{className:`w-24 h-24 rounded-full bg-gradient-to-br ${o[t].color} flex items-center justify-center mb-4 shadow-lg`,children:v.jsx(h,{size:40,className:"text-white"})}),v.jsx("h2",{className:"text-2xl font-extrabold text-gray-900 dark:text-white mb-2",children:o[t].title}),v.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:o[t].description})]}),v.jsx("div",{className:"flex justify-center gap-2 mb-6",children:o.map((m,y)=>v.jsx("div",{className:`h-2 rounded-full transition-all ${y===t?"w-8 bg-blue-500":"w-2 bg-gray-400"}`},y))}),v.jsxs("div",{className:"flex gap-3",children:[t>0&&v.jsxs("button",{onClick:()=>{le.light(),s(t-1)},className:"flex-1 py-3 px-4 glass-input hover:bg-white/20 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 active:scale-95",children:[v.jsx(P1,{size:18})," Previous"]}),v.jsx("button",{onClick:()=>{le.medium(),u()},className:"flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 active:scale-95",children:t===o.length-1?v.jsxs(v.Fragment,{children:[v.jsx(Za,{size:18})," Install App"]}):v.jsxs(v.Fragment,{children:["Next ",v.jsx(Ld,{size:18})]})}),v.jsx("button",{onClick:()=>{le.light(),e()},className:"py-3 px-4 glass-input hover:bg-white/20 rounded-xl font-bold text-sm transition-colors active:scale-95",children:"Skip"})]})]})})},dS=({data:i={},onAdminLogin:e,isAdmin:t})=>{const s=Array.isArray(i.links)?i.links:[],o=({icon:u,title:h,handle:m,colorClass:y,link:w})=>v.jsxs("a",{href:w||"#",target:"_blank",rel:"noopener noreferrer",onClick:()=>le.medium(),className:"group flex items-center justify-between p-4 w-full rounded-2xl glass-panel bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 mb-3 animate-stagger-enter opacity-0 active:scale-[0.98] cursor-pointer",style:{animationDelay:"0.1s"},children:[v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${y}`,children:v.jsx(u,{size:22,strokeWidth:2})}),v.jsxs("div",{className:"text-left",children:[v.jsx("h3",{className:"font-bold text-gray-900 dark:text-gray-100",children:h}),v.jsx("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400",children:m})]})]}),v.jsx(N1,{size:18,className:"text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors"})]});return v.jsxs("div",{className:"animate-page-enter flex flex-col items-center pt-8 px-6 pb-32 max-w-md mx-auto",children:[v.jsxs("div",{className:"relative mb-6 group animate-stagger-enter opacity-0",style:{animationDelay:"0s"},children:[v.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"}),v.jsx("div",{className:"relative w-32 h-32 rounded-full p-[4px] bg-white dark:bg-gray-800 shadow-2xl",children:v.jsx("div",{className:"w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden",children:i.avatarUrl?v.jsx("img",{src:i.avatarUrl,alt:"Profile",className:"w-full h-full object-cover"}):v.jsx(ba,{size:64,className:"text-gray-400"})})})]}),v.jsx("h2",{className:"text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight animate-stagger-enter opacity-0",style:{animationDelay:"0.05s"},children:i.name||"Admin User"}),v.jsx("p",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 mb-8 uppercase tracking-widest animate-stagger-enter opacity-0",style:{animationDelay:"0.1s"},children:i.title||"App Admin"}),v.jsx("div",{className:"w-full",children:s.map((u,h)=>{const m=Ua[u.iconName]||jd;return v.jsx("div",{className:"animate-stagger-enter opacity-0",style:{animationDelay:`${.2+h*.1}s`},children:v.jsx(o,{icon:m,title:u.platform,handle:u.handle,colorClass:u.color,link:u.url})},u.id||h)})}),v.jsxs("div",{className:"mt-6 p-6 rounded-3xl glass-panel bg-white/10 dark:bg-black/10 w-full text-center shadow-sm animate-stagger-enter opacity-0",style:{animationDelay:"0.5s"},children:[v.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4",children:i.bio||"Welcome to PDF Hunt!"}),v.jsxs("button",{onClick:()=>{le.medium(),e()},className:"flex items-center justify-center gap-2 mx-auto px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-all active:scale-95",children:[v.jsx(W1,{size:14})," ",t?"Go to Admin Console":"Login to Admin Console"]})]})]})},fS=({data:i,setData:e,onLogout:t,isDarkMode:s,setDarkMode:o})=>{var Ln,fi,dt;const[u,h]=ce.useState("Content"),[m,y]=ce.useState("Udvash"),[w,T]=ce.useState([]),[A,R]=ce.useState(null),[B,Q]=ce.useState(null),[Y,q]=ce.useState(!1),[Ie,fe]=ce.useState(!1),[pe,xe]=ce.useState(null),[Oe,ke]=ce.useState(null),[N,I]=ce.useState(null),[S,b]=ce.useState(!1),[D,C]=ce.useState([]),k=i.About||Ra.About,tt=k.links||[],[ot,wt]=ce.useState(""),[je,Z]=ce.useState("file"),[me,ne]=ce.useState(""),[O,$]=ce.useState(""),[ue,Ae]=ce.useState("emerald"),[Ve,Me]=ce.useState("Folder"),[Fe,qe]=ce.useState(k.name),[Ye,ht]=ce.useState(k.title),[un,fr]=ce.useState(k.bio),[Tn,Dn]=ce.useState(k.avatarUrl||""),[In,pr]=ce.useState(tt),[Bt,xn]=ce.useState({platform:"",handle:"",url:"",color:"bg-blue-600",iconName:"LinkIcon"}),Vn={appName:"PDF Hunt",appDesc:"Find your resources",tab1:"Udvash",tab2:"ACS",tab3:"Others",theme:{gradientStart:"#10b981",gradientEnd:"#047857",navColor:"#3b82f6"}},[Re,at]=ce.useState(()=>{const F=i.settings||{};return{...Vn,...F,theme:{...Vn.theme,...F.theme||{}}}}),Ot=()=>{let F=i[m]||[];for(const ee of w){const se=F.find(_e=>_e.id===ee.id);if(se&&se.items)F=se.items;else return[]}return F},Ct=async F=>{if(w.length===0){await e({...i,[m]:F});return}const ee={...i};let se=ee[m];for(let Be=0;Be<w.length-1;Be++)se=se.find(rt=>rt.id===w[Be].id).items;const _e=se.findIndex(Be=>Be.id===w[w.length-1].id);_e!==-1&&(se[_e].items=F,await e(ee))},he=F=>{if(window.confirm("Delete this item?")){const ee=Ot();Ct(ee.filter(se=>se.id!==F))}},Le=F=>{if(F===0)return;const se=[...Ot()];[se[F-1],se[F]]=[se[F],se[F-1]],Ct(se),le.success()},be=F=>{const ee=Ot();if(F===ee.length-1)return;const se=[...ee];[se[F],se[F+1]]=[se[F+1],se[F]],Ct(se),le.success()},Ze=(F,ee)=>{ke(ee),b(!0),le.light()},cn=(F,ee)=>{F.preventDefault(),F.stopPropagation(),Oe!==null&&Oe!==ee&&I(ee)},ai=()=>{ke(null),I(null),b(!1)},Yn=(F,ee)=>{if(F.preventDefault(),Oe===null||Oe===ee){ke(null),I(null);return}le.success();const _e=[...Ot()],Be=_e[Oe];_e.splice(Oe,1);const rt=Oe<ee?ee-1:ee;_e.splice(rt,0,Be),Ct(_e),ke(null),I(null)},Dr=(F,ee)=>Ze(F,ee),Vr=(F,ee)=>{Oe!==null&&Oe!==ee&&I(ee)},ns=(F,ee)=>{Oe!==null&&N!==null?Yn(F,N):ai()},rs=F=>{xe(F),fe(!0)},li=(F,ee=[],se=null)=>{let _e=[];return F&&F.forEach(Be=>{if(Be.type==="folder"&&Be.id!==se){const rt=[...ee,Be];if(_e.push({id:Be.id,title:Be.title,path:rt,pathIds:rt.map(ft=>ft.id)}),Be.items&&Be.items.length>0){const ft=li(Be.items,rt,se);_e=[..._e,...ft]}}}),_e},ui=async F=>{var rt;if(!pe)return;le.success();const ee=Ot(),se=ee.findIndex(ft=>ft.id===pe.id);if(se===-1)return;const _e=ee[se],Be=JSON.parse(JSON.stringify(i));if(w.length===0)Be[m]=Be[m].filter(ft=>ft.id!==pe.id);else{let ft=Be[m];for(let Pt=0;Pt<w.length-1;Pt++)if(ft=(rt=ft.find(dn=>dn.id===w[Pt].id))==null?void 0:rt.items,!ft)return;const jn=ft.findIndex(Pt=>Pt.id===w[w.length-1].id);jn!==-1&&ft[jn].items&&(ft[jn].items=ft[jn].items.filter(Pt=>Pt.id!==pe.id))}if(F==="root")Be[m]||(Be[m]=[]),Be[m].push(_e);else{let ft=Be[m];const jn=Array.isArray(F)?F:[F];for(let Pt=0;Pt<jn.length;Pt++){const dn=ft.find(kn=>kn.id===jn[Pt]);if(!dn){console.error("Destination folder not found");return}if(Pt===jn.length-1){dn.items||(dn.items=[]),dn.items.push(_e);break}else dn.items||(dn.items=[]),ft=dn.items}}await e(Be),fe(!1),xe(null)},is=()=>{le.medium(),Q(null),wt(""),Z("file"),ne(""),$(""),Ae("emerald"),Me("Folder"),R("add")},Or=()=>{le.medium(),Q(null),C([{id:Date.now().toString(),title:"",type:"file",link:"",size:"1 MB",customColor:"emerald",iconName:"Folder"}]),R("bulk")},ci=F=>{le.light(),Q(F),wt(F.title),Z(F.type),ne(F.link||""),$(F.size||""),Ae(F.customColor||"emerald"),Me(F.iconName||"Folder"),R("edit")},hi=async()=>{if(!ot){le.error();return}le.success();const F={id:B?B.id:Date.now().toString(),type:je,title:ot,author:"Admin",date:B?B.date:new Date().toLocaleDateString("en-US",{month:"short",year:"numeric"}),size:O||(je==="folder"?"-":"1 MB"),link:Ty(me)||"#",iconName:Ve};je==="folder"&&(F.items=B?B.items||[]:[],F.customColor=ue);const ee=Ot();let se;A==="edit"?se=ee.map(_e=>_e.id===B.id?F:_e):se=[...ee,F],await Ct(se),R(null)},hn=async()=>{const F=[];if(D.forEach(se=>{const _e=(se.title||"").trim();if(!_e)return;const Be=se.type==="folder"?"folder":"file",rt={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,type:Be,title:_e,author:"Admin",date:new Date().toLocaleDateString("en-US",{month:"short",year:"numeric"}),size:se.size||(Be==="folder"?"-":"1 MB"),link:Ty(se.link)||"#",iconName:se.iconName||(Be==="folder"?"Folder":"FileText")};Be==="folder"&&(rt.items=[],rt.customColor=se.customColor||"emerald"),F.push(rt)}),F.length===0){le.error(),alert("Add at least one item with a title.");return}le.success();const ee=Ot();await Ct([...ee,...F]),C([]),R(null),alert(`Added ${F.length} item(s).`)},On=async()=>{le.success(),await e({...i,About:{name:Fe,title:Ye,bio:un,avatarUrl:Tn,links:In}}),alert("Profile Updated!")},di=async()=>{le.success(),await e({...i,settings:Re}),alert("Settings Updated!")},Mn=()=>{le.medium(),pr([...In,{...Bt,id:Date.now()}]),xn({platform:"",handle:"",url:"",color:"bg-blue-600",iconName:"LinkIcon"})},ss=F=>{le.error(),pr(In.filter(ee=>ee.id!==F))},Mr=({selected:F,onSelect:ee})=>v.jsx("div",{className:"grid grid-cols-6 gap-2 mt-2 h-32 overflow-y-auto pr-2 custom-scrollbar",children:Object.keys(Ua).map(se=>{const _e=Ua[se];return v.jsx("button",{onClick:()=>{le.light(),ee(se)},className:`p-2 rounded-lg flex items-center justify-center transition-colors ${F===se?"bg-blue-500 text-white":"glass-input hover:bg-white/20"} active:scale-95`,children:v.jsx(_e,{size:18})},se)})}),os=({previewSettings:F})=>{const ee=F.theme||{};return v.jsxs("div",{className:"w-full aspect-[9/16] max-h-[400px] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl relative flex flex-col mx-auto",children:[v.jsxs("div",{className:"p-4 pt-6",children:[v.jsx("h3",{className:"text-lg font-bold italic text-transparent bg-clip-text truncate",style:{backgroundImage:`linear-gradient(to right, ${ee.gradientStart}, ${ee.gradientEnd})`},children:F.appName}),v.jsx("div",{className:"h-1 w-8 rounded-full mt-1",style:{backgroundImage:`linear-gradient(to right, ${ee.gradientStart}, ${ee.gradientEnd})`}}),v.jsx("p",{className:"text-[10px] text-gray-500 font-bold mt-1",children:F.appDesc})]}),v.jsxs("div",{className:"flex-1 px-4 space-y-2 overflow-hidden",children:[v.jsx("div",{className:"h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"}),v.jsxs("div",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700",children:[v.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500",children:v.jsx(Ao,{size:16})}),v.jsxs("div",{className:"flex-1",children:[v.jsx("div",{className:"h-2 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-1"}),v.jsx("div",{className:"h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"})]})]})]}),v.jsx("div",{className:"p-2 pb-4",children:v.jsxs("div",{className:"bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl p-2 flex justify-between items-center shadow-lg",children:[v.jsxs("div",{className:"flex flex-col items-center p-2",children:[v.jsx("div",{className:"-mt-3 p-1.5 rounded-xl shadow-sm",style:{backgroundColor:`${ee.navColor}20`,color:ee.navColor},children:v.jsx(za,{size:14})}),v.jsx("div",{className:"h-1 w-6 bg-gray-300 dark:bg-gray-600 rounded mt-1"})]}),v.jsx("div",{className:"p-2 opacity-50",children:v.jsx(Ja,{size:14})}),v.jsx("div",{className:"p-2 opacity-50",children:v.jsx(ba,{size:14})})]})})]})};return v.jsxs("div",{className:`min-h-screen ${s?"dark text-white":"text-gray-900"} pb-24 transition-colors relative`,children:[v.jsxs("div",{className:"p-6 pb-2",children:[v.jsxs("div",{className:"flex justify-between items-center mb-6",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600",children:"Admin Console"}),v.jsx("p",{className:"text-xs text-gray-500 font-bold mt-1",children:"Manage Your App"})]}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{onClick:()=>{le.light(),q(!Y)},className:"p-2 rounded-xl glass-panel bg-white/10 dark:bg-black/10 text-blue-500 active:scale-95",children:v.jsx(R1,{size:20})}),v.jsx("button",{onClick:()=>{le.light(),o(!s)},className:"p-2 rounded-xl glass-panel bg-white/10 dark:bg-black/10 active:scale-95",children:v.jsx(zy,{size:20})}),v.jsx("button",{onClick:()=>{le.error(),t()},className:"p-2 rounded-xl bg-red-500/20 text-red-600 border border-red-500/30 active:scale-95",children:v.jsx(qm,{size:20})})]})]}),Y&&v.jsxs("div",{className:"mb-6 p-4 rounded-2xl glass-panel bg-blue-500/10 border border-blue-500/20 animate-stagger-enter",children:[v.jsxs("h4",{className:"font-bold text-sm mb-2 flex items-center gap-2",children:[v.jsx(M1,{size:16})," How to Use"]}),v.jsxs("ul",{className:"text-xs space-y-1 opacity-80 list-disc pl-4",children:[v.jsxs("li",{children:[v.jsx("strong",{children:"Adding Files:"})," Paste full Google Drive link."]}),v.jsxs("li",{children:[v.jsx("strong",{children:"Folders:"})," Create folders to organize content."]}),v.jsxs("li",{children:[v.jsx("strong",{children:"Settings:"})," Rename Tabs and App Title."]})]})]})]}),v.jsxs("div",{className:"px-6",children:[u==="Content"&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide",children:["Udvash","ACS","Others"].map((F,ee)=>v.jsx("button",{onClick:()=>{le.light(),y(F),T([]),R(null)},className:`px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${m===F?"bg-blue-600 text-white shadow-lg":"glass-panel bg-white/10 dark:bg-black/10"} active:scale-95`,children:Re[`tab${ee+1}`]||F},F))}),A?A==="bulk"?v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl mb-8 animate-stagger-enter",children:[v.jsxs("div",{className:"flex justify-between items-center mb-4",children:[v.jsx("h3",{className:"font-bold text-lg",children:"Bulk Add Items"}),v.jsx("button",{onClick:()=>{le.light(),R(null)},className:"active:scale-95",children:v.jsx(Na,{size:20,className:"text-gray-500"})})]}),v.jsx("div",{className:"space-y-3",children:D.map((F,ee)=>v.jsxs("div",{className:"p-3 rounded-xl glass-input",children:[v.jsxs("div",{className:"flex justify-between items-center mb-2",children:[v.jsxs("span",{className:"text-xs font-bold text-gray-500 uppercase",children:["Item ",ee+1]}),D.length>1&&v.jsx("button",{onClick:()=>{le.error(),C(D.filter((se,_e)=>_e!==ee))},className:"text-red-400 text-xs font-bold active:scale-95",children:"Remove"})]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[v.jsx("input",{value:F.title,onChange:se=>{const _e=[...D];_e[ee]={..._e[ee],title:se.target.value},C(_e)},className:"p-3 rounded-xl glass-input text-sm",placeholder:"Title"}),v.jsxs("select",{value:F.type,onChange:se=>{const _e=[...D];_e[ee]={..._e[ee],type:se.target.value},C(_e)},className:"p-3 rounded-xl glass-input text-sm dark:bg-gray-900",children:[v.jsx("option",{value:"file",children:"File"}),v.jsx("option",{value:"folder",children:"Folder"})]}),v.jsx("input",{value:F.link,onChange:se=>{const _e=[...D];_e[ee]={..._e[ee],link:se.target.value},C(_e)},className:"p-3 rounded-xl glass-input text-sm sm:col-span-2",placeholder:"Drive link or ID"}),v.jsx("input",{value:F.size,onChange:se=>{const _e=[...D];_e[ee]={..._e[ee],size:se.target.value},C(_e)},className:"p-3 rounded-xl glass-input text-sm",placeholder:F.type==="folder"?"-":"Size (e.g., 2 MB)"})]})]},F.id))}),v.jsxs("button",{onClick:()=>{le.medium(),C([...D,{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,title:"",type:"file",link:"",size:"1 MB",customColor:"emerald",iconName:"Folder"}])},className:"w-full mt-4 py-3 rounded-xl border-2 border-dashed border-purple-400 text-purple-200 font-bold flex items-center justify-center gap-2 hover:border-purple-300 hover:text-white transition-all active:scale-95",children:[v.jsx(Wm,{size:18})," Add +"]}),v.jsxs("div",{className:"flex gap-3 mt-6",children:[v.jsx("button",{onClick:()=>{le.light(),R(null)},className:"flex-1 py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95",children:"Cancel"}),v.jsx("button",{onClick:hn,className:"flex-1 py-3 rounded-xl font-bold bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 active:scale-95",children:"Add All"})]})]}):v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl mb-8 animate-stagger-enter",children:[v.jsxs("div",{className:"flex justify-between items-center mb-6",children:[v.jsx("h3",{className:"font-bold text-lg",children:A==="edit"?"Edit Item":"Add New Item"}),v.jsx("button",{onClick:()=>{le.light(),R(null)},className:"active:scale-95",children:v.jsx(Na,{size:20,className:"text-gray-500"})})]}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Title"}),v.jsx("input",{value:ot,onChange:F=>wt(F.target.value),className:"w-full p-3 rounded-xl glass-input mt-1"})]}),A==="add"&&v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Type"}),v.jsxs("div",{className:"flex gap-2 mt-1",children:[v.jsx("button",{onClick:()=>{le.light(),Z("folder")},className:`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${je==="folder"?"bg-blue-500 text-white":"glass-input"} active:scale-95`,children:"Folder"}),v.jsx("button",{onClick:()=>{le.light(),Z("file")},className:`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${je==="file"?"bg-blue-500 text-white":"glass-input"} active:scale-95`,children:"File"})]})]}),je==="folder"&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Color"}),v.jsx("div",{className:"flex gap-2 mt-1",children:["emerald","blue","purple","orange","red"].map(F=>v.jsx("button",{onClick:()=>{le.light(),Ae(F)},className:`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 ${ue===F?"border-white scale-110":"border-transparent"}`,style:{backgroundColor:F==="emerald"?"#10b981":F==="blue"?"#3b82f6":F==="purple"?"#a855f7":F==="orange"?"#f97316":"#ef4444"}},F))})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Icon"}),v.jsx(Mr,{selected:Ve,onSelect:Me})]})]}),je==="file"&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Drive Link"}),v.jsx("input",{value:me,onChange:F=>ne(F.target.value),placeholder:"Paste full link or ID",className:"w-full p-3 rounded-xl glass-input mt-1"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Size"}),v.jsx("input",{value:O,onChange:F=>$(F.target.value),className:"w-full p-3 rounded-xl glass-input mt-1"})]})]})]}),v.jsxs("div",{className:"flex gap-3 mt-8",children:[v.jsx("button",{onClick:()=>{le.light(),R(null)},className:"flex-1 py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95",children:"Cancel"}),v.jsx("button",{onClick:hi,className:"flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 active:scale-95",children:"Save Item"})]})]}):v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-4 text-sm font-bold text-gray-500",children:[v.jsxs("button",{onClick:()=>{le.light(),T([])},className:"hover:text-blue-500 flex items-center gap-1 active:scale-95",children:[v.jsx(Hm,{size:14})," Root"]}),w.map((F,ee)=>v.jsxs("span",{className:"flex items-center gap-2",children:[v.jsx(Ld,{size:14}),v.jsx("button",{onClick:()=>{le.light(),T(w.slice(0,ee+1))},className:"hover:text-blue-500 active:scale-95",children:F.title})]},F.id))]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4",children:[v.jsxs("button",{onClick:is,className:"w-full py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-400 font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all active:scale-95",children:[v.jsx(Wm,{size:20})," Add New Item"]}),v.jsxs("button",{onClick:Or,className:"w-full py-3 rounded-xl border-2 border-dashed border-purple-300 dark:border-purple-700 text-purple-500 font-bold flex items-center justify-center gap-2 hover:border-purple-500/80 hover:text-purple-300 transition-all active:scale-95",children:[v.jsx(za,{size:20})," Bulk Add"]})]}),v.jsxs("div",{className:"space-y-3",children:[Ot().length===0&&v.jsx("p",{className:"text-center text-gray-400 py-4 font-medium italic",children:"This folder is empty."}),Ot().map((F,ee)=>v.jsx(u_,{item:F,index:ee,colorTheme:m,isAdmin:!0,onClick:se=>se.type==="folder"?T([...w,{id:se.id,title:se.title}]):null,onEdit:ci,onDelete:he,onMoveUp:()=>Le(ee),onMoveDown:()=>be(ee),onMove:rs,canMoveUp:ee>0,canMoveDown:ee<Ot().length-1,onDragStart:Ze,onDragOver:cn,onDragEnd:ai,onDrop:Yn,onPointerDragStart:Dr,onPointerDragEnter:Vr,onPointerDragEnd:ns,isDragging:Oe===ee,dragOver:N===ee,isAnyDragging:S},F.id))]})]})]}),u==="Settings"&&v.jsx("div",{className:"space-y-6 animate-page-enter max-w-4xl mx-auto pb-10",children:v.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl",children:[v.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[v.jsx(Gm,{size:18})," App Info"]}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1",children:"App Name"}),v.jsx("input",{value:Re.appName,onChange:F=>at({...Re,appName:F.target.value}),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1",children:"Subtitle"}),v.jsx("input",{value:Re.appDesc,onChange:F=>at({...Re,appDesc:F.target.value}),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm"})]})]})]}),v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl",children:[v.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[v.jsx(H1,{size:18})," Theme Editor"]}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Header Gradient Start"}),v.jsx("input",{type:"color",value:((Ln=Re.theme)==null?void 0:Ln.gradientStart)||"#10b981",onChange:F=>at({...Re,theme:{...Re.theme,gradientStart:F.target.value}}),className:"w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent"})]}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Header Gradient End"}),v.jsx("input",{type:"color",value:((fi=Re.theme)==null?void 0:fi.gradientEnd)||"#047857",onChange:F=>at({...Re,theme:{...Re.theme,gradientEnd:F.target.value}}),className:"w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent"})]}),v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Bottom Nav Icons"}),v.jsx("input",{type:"color",value:((dt=Re.theme)==null?void 0:dt.navColor)||"#3b82f6",onChange:F=>at({...Re,theme:{...Re.theme,navColor:F.target.value}}),className:"w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent"})]})]})]}),v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl",children:[v.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[v.jsx(K1,{size:18})," Rename Tabs"]}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1",children:"Tab 1"}),v.jsx("input",{value:Re.tab1,onChange:F=>at({...Re,tab1:F.target.value}),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1",children:"Tab 2"}),v.jsx("input",{value:Re.tab2,onChange:F=>at({...Re,tab2:F.target.value}),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1",children:"Tab 3"}),v.jsx("input",{value:Re.tab3,onChange:F=>at({...Re,tab3:F.target.value}),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm"})]})]})]})]}),v.jsx("div",{className:"space-y-6",children:v.jsxs("div",{className:"sticky top-6",children:[v.jsx("h3",{className:"font-bold mb-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider",children:"Live Preview"}),v.jsx(os,{previewSettings:Re}),v.jsxs("div",{className:"mt-6",children:[v.jsx("button",{onClick:di,className:"w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-500/30 active:scale-95 transition-all",children:"Save All Changes"}),v.jsx("p",{className:"text-center text-[10px] text-gray-400 mt-2",children:"Changes will apply immediately."})]})]})})]})}),u==="Profile"&&v.jsxs("div",{className:"space-y-6 animate-page-enter max-w-2xl mx-auto",children:[v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl",children:[v.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[v.jsx(ba,{size:18})," Personal Info"]}),v.jsxs("div",{className:"space-y-4",children:[v.jsx("input",{value:Fe,onChange:F=>qe(F.target.value),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm",placeholder:"Name"}),v.jsx("input",{value:Ye,onChange:F=>ht(F.target.value),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm",placeholder:"Title"}),v.jsx("textarea",{value:un,onChange:F=>fr(F.target.value),rows:"3",className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm",placeholder:"Bio"}),v.jsx("input",{value:Tn,onChange:F=>Dn(F.target.value),className:"w-full p-3 rounded-xl glass-input border-none outline-none text-sm",placeholder:"Profile Image URL"})]})]}),v.jsxs("div",{className:"glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl",children:[v.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[v.jsx(jd,{size:18})," Social Links"]}),v.jsx("div",{className:"space-y-3 mb-4",children:In.map(F=>v.jsxs("div",{className:"flex items-center justify-between p-3 glass-input rounded-xl",children:[v.jsx("span",{className:"text-sm font-bold",children:F.platform}),v.jsx("button",{onClick:()=>ss(F.id),className:"text-red-500 active:scale-95",children:v.jsx(By,{size:16})})]},F.id))}),v.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[v.jsx("input",{placeholder:"Platform",value:Bt.platform,onChange:F=>xn({...Bt,platform:F.target.value}),className:"p-2 rounded-lg glass-input text-xs"}),v.jsx("input",{placeholder:"Handle",value:Bt.handle,onChange:F=>xn({...Bt,handle:F.target.value}),className:"p-2 rounded-lg glass-input text-xs"}),v.jsx("input",{placeholder:"URL",value:Bt.url,onChange:F=>xn({...Bt,url:F.target.value}),className:"p-2 rounded-lg glass-input text-xs"}),v.jsx("select",{value:Bt.iconName,onChange:F=>xn({...Bt,iconName:F.target.value}),className:"p-2 rounded-lg glass-input text-xs dark:bg-gray-800",children:Object.keys(Ua).map(F=>v.jsx("option",{value:F,children:F},F))})]}),v.jsx("button",{onClick:Mn,className:"mt-2 w-full py-2 bg-blue-500 text-white rounded-lg text-xs font-bold active:scale-95",children:"Add Link"})]}),v.jsx("button",{onClick:On,className:"w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-500/30 active:scale-95",children:"Save Changes"})]}),Ie&&v.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-page-enter",children:v.jsxs("div",{className:"glass-panel bg-white/20 dark:bg-black/40 p-6 rounded-2xl w-full max-w-md shadow-2xl",children:[v.jsxs("div",{className:"flex justify-between items-center mb-4",children:[v.jsx("h3",{className:"font-bold text-lg",children:"Move Item"}),v.jsx("button",{onClick:()=>{le.light(),fe(!1),xe(null)},className:"active:scale-95",children:v.jsx(Na,{size:20,className:"text-gray-500"})})]}),v.jsx("p",{className:"text-sm text-gray-400 mb-4",children:"Select destination folder:"}),v.jsxs("div",{className:"max-h-64 overflow-y-auto space-y-2 mb-4",children:[v.jsxs("button",{onClick:()=>ui("root"),className:"w-full p-3 rounded-xl glass-input hover:bg-white/20 text-left flex items-center gap-2 active:scale-95",children:[v.jsx(Hm,{size:18}),v.jsxs("span",{className:"font-bold",children:["Root (",m,")"]})]}),li(i[m]||[],[],pe==null?void 0:pe.id).map(F=>{const ee=F.path.map(se=>se.title).join(" / ");return v.jsxs("button",{onClick:()=>ui(F.pathIds),className:"w-full p-3 rounded-xl glass-input hover:bg-white/20 text-left flex items-center gap-2 active:scale-95",children:[v.jsx(Ao,{size:18}),v.jsx("span",{className:"font-bold truncate",children:ee})]},`${F.id}-${F.pathIds.join("-")}`)})]}),v.jsx("button",{onClick:()=>{le.light(),fe(!1),xe(null)},className:"w-full py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95",children:"Cancel"})]})})]}),v.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 z-50",children:v.jsxs("nav",{className:"glass-panel mx-auto max-w-md bg-white/10 dark:bg-black/10 rounded-3xl h-16 px-6 shadow-2xl flex items-center justify-between pointer-events-auto",children:[v.jsx($i,{name:"Content",active:u==="Content",onClick:()=>{le.light(),h("Content")},icon:Ao,activeColor:Re.theme.navColor}),v.jsx($i,{name:"Profile",active:u==="Profile",onClick:()=>{le.light(),h("Profile")},icon:ba,activeColor:Re.theme.navColor}),v.jsx($i,{name:"Settings",active:u==="Settings",onClick:()=>{le.light(),h("Settings")},icon:Gm,activeColor:Re.theme.navColor}),v.jsx($i,{name:"Exit",active:!1,onClick:()=>{le.error(),t()},icon:qm,activeColor:"#ef4444"})]})})]})};function pS(){const[i,e]=ce.useState("Udvash"),[t,s]=ce.useState(()=>{const he=localStorage.getItem("pdfhunt-darkmode");return he!==null?he==="true":!0}),[o,u]=ce.useState(""),[h,m]=ce.useState([]),[y,w]=ce.useState(null),[T,A]=ce.useState("app"),[R,B]=ce.useState(()=>{try{const he=localStorage.getItem("pdfhunt-data-cache");return he?JSON.parse(he):Ra}catch{return Ra}}),[Q,Y]=ce.useState(!1),[q,Ie]=ce.useState(!1),[fe,pe]=ce.useState(!0),xe=ce.useRef(!1),[Oe,ke]=ce.useState(null),N=ce.useRef(!!localStorage.getItem("pdfhunt-data-cache")),[I,S]=ce.useState(null),[b,D]=ce.useState(!1),[C,k]=ce.useState(!1),[tt,ot]=ce.useState(!1),[wt,je]=ce.useState(!1),[Z,me]=ce.useState(!1),[ne,O]=ce.useState(!1),[$,ue]=ce.useState(!1),[Ae,Ve]=ce.useState(null),Me=h.length>0?h[h.length-1].items:R[i]||[],Fe=he=>{he===i&&h.length===0||(e(he),m([]),u(""))},qe=he=>{he.type==="folder"?(m([...h,{title:he.title,items:he.items}]),u("")):w(he)};ce.useEffect(()=>{(async()=>{typeof __initial_auth_token<"u"&&__initial_auth_token?await ET(Nu,__initial_auth_token):await gT(Nu)})();const Le=xT(Nu,ke);return()=>Le()},[]);const Ye=async()=>{const he=my(_y,"artifacts",wy,"public","data","app_state","main");try{if(!Nu.currentUser)return;const Le=await Yk(he);if(Le.exists()){const be=Le.data();B(be),localStorage.setItem("pdfhunt-data-cache",JSON.stringify(be)),N.current=!0}else N.current||B(Ra)}catch(Le){console.error("Error loading data:",Le)}finally{xe.current=!0,pe(!1)}},ht=he=>{if(he==null)return null;if(Array.isArray(he))return he.map(Le=>ht(Le));if(typeof he=="object"){const Le={};for(const be in he)he[be]!==void 0&&(Le[be]=ht(he[be]));return Le}return he},un=async he=>{if(!Oe)return;const Le=my(_y,"artifacts",wy,"public","data","app_state","main");try{const be=ht(he);await Zk(Le,be,{merge:!1})}catch(be){console.error("Error saving:",be)}},fr=async he=>{const Le=typeof he=="function"?he(R):he;B(Le),localStorage.setItem("pdfhunt-data-cache",JSON.stringify(Le)),N.current=!0,await un(Le)},Tn=()=>{const he=[...h];he.pop(),m(he)};ce.useEffect(()=>{if(Oe&&Ye(),window.matchMedia("(display-mode: standalone)").matches&&ot(!0),!localStorage.getItem("pdfhunt-tour-seen")&&!tt&&setTimeout(()=>{k(!0)},1e3),"serviceWorker"in navigator){const Le=()=>{sessionStorage.getItem("pdfhunt-update-dismissed")||ue(!0)};return window.addEventListener("sw-update-available",Le),navigator.serviceWorker.getRegistration().then(be=>{be&&(Ve(be),be.addEventListener("updatefound",()=>{const Ze=be.installing;Ze&&Ze.addEventListener("statechange",()=>{Ze.state==="installed"&&navigator.serviceWorker.controller&&!sessionStorage.getItem("pdfhunt-update-dismissed")&&ue(!0)})}))}),()=>window.removeEventListener("sw-update-available",Le)}},[Oe]),ce.useEffect(()=>{try{const he=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,Le=window.matchMedia("(display-mode: standalone)").matches;if(Le){ot(!0);return}const be=cn=>{cn.preventDefault(),S(cn),je(!0)},Ze=()=>{ot(!0),S(null),je(!1),D(!1),localStorage.setItem("pdfhunt-install-dismissed","true")};return he&&!Le&&je(!0),window.addEventListener("beforeinstallprompt",be),window.addEventListener("appinstalled",Ze),()=>{window.removeEventListener("beforeinstallprompt",be),window.removeEventListener("appinstalled",Ze)}}catch{}},[]),ce.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("pdfhunt-darkmode",t.toString())},[t]),ce.useEffect(()=>{const he=localStorage.getItem("pdfhunt-darkmode");(he!==null?he==="true":!0)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[]);const Dn=async()=>{if(le.medium(),I)try{await I.prompt();const{outcome:he}=await I.userChoice;he==="accepted"&&(ot(!0),le.success()),S(null),je(!1)}catch{le.error(),I||me(!0)}else me(!0)},In=()=>{k(!1),localStorage.setItem("pdfhunt-tour-seen","true"),setTimeout(()=>{I&&!localStorage.getItem("pdfhunt-install-dismissed")&&D(!0)},500)},pr=()=>{k(!1),localStorage.setItem("pdfhunt-tour-seen","true")},Bt=()=>{le.success(),Ae!=null&&Ae.waiting&&Ae.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()},xn=he=>{let Le=[];return he&&he.forEach(be=>{Le.push(be),be.type==="folder"&&be.items&&(Le=[...Le,...xn(be.items)])}),Le},Vn=ce.useMemo(()=>o.trim()?xn(Me).filter(Le=>Le.title.toLowerCase().includes(o.toLowerCase())):Me,[Me,o]),Re=R.settings||{appName:"PDF Hunt",appDesc:"Find your resources",tab1:"Udvash",tab2:"ACS",tab3:"Others",theme:{gradientStart:"#10b981",gradientEnd:"#047857",navColor:"#3b82f6"}},at=Re.theme||{gradientStart:"#10b981",gradientEnd:"#047857",navColor:"#3b82f6"},Ot=h.length>0?h[h.length-1].title:i==="Udvash"?Re.tab1:i==="ACS"?Re.tab2:i==="Others"?Re.tab3:Re.appName,Ct={backgroundImage:`linear-gradient(to right, ${at.gradientStart}, ${at.gradientEnd})`};return T==="admin"?v.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${t?"dark text-white":"text-gray-800"}`,children:[v.jsx(Ey,{}),v.jsx(Iy,{}),v.jsx(fS,{data:R,setData:fr,onLogout:()=>{Ie(!1),A("app")},isDarkMode:t,setDarkMode:s})]}):fe&&!N.current?v.jsx(iS,{}):v.jsxs("div",{className:`min-h-screen transition-colors duration-300 ${t?"dark text-white":"text-gray-800"}`,children:[v.jsx(Ey,{}),v.jsx(Iy,{}),Q&&v.jsx(aS,{onClose:()=>Y(!1),onLogin:()=>{Ie(!0),Y(!1),A("admin")}}),$&&v.jsx(uS,{onUpdate:Bt,onDismiss:()=>{ue(!1),sessionStorage.setItem("pdfhunt-update-dismissed","true")}}),Z&&v.jsx(lS,{onClose:()=>me(!1)}),b&&v.jsx(cS,{deferredPrompt:I,onInstall:Dn,onDismiss:()=>{D(!1),localStorage.setItem("pdfhunt-install-dismissed","true")}}),C&&v.jsx(hS,{onStart:In,onSkip:pr}),y&&v.jsx(oS,{file:y,onClose:()=>w(null)}),v.jsxs("div",{className:"flex flex-col h-screen overflow-hidden relative",children:[v.jsxs("header",{className:"px-6 pt-6 pb-2 z-10 flex-shrink-0",children:[v.jsxs("div",{className:"flex justify-between items-center mb-6",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"relative",children:[v.jsx("h1",{className:"text-2xl font-extrabold italic bg-clip-text text-transparent",style:Ct,children:Re.appName}),v.jsx("div",{className:"h-1.5 w-12 rounded-full mt-1",style:Ct})]}),v.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 font-bold mt-2",children:Re.appDesc})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[wt&&!tt&&v.jsxs("button",{onClick:Dn,className:"px-4 py-2 text-white rounded-xl font-bold text-sm transition-all shadow-lg border-2 border-white/20 active:scale-95 flex items-center gap-2 hover:opacity-90",style:Ct,children:[v.jsx(Za,{size:16}),v.jsx("span",{className:"hidden sm:inline",children:"Install App"})]}),v.jsx("button",{onClick:()=>{le.light(),s(!t)},className:"p-3 rounded-full bg-white/20 dark:bg-black/20 glass-panel hover:bg-white/30 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200 active:scale-95",children:t?v.jsx(zy,{size:20,className:"text-yellow-400"}):v.jsx(B1,{size:20})})]})]}),i!=="About Me"&&v.jsx(sS,{value:o,onChange:u})]}),v.jsx("main",{className:"flex-1 overflow-y-auto px-6 pb-24 scroll-smooth",children:i==="About Me"?v.jsx(dS,{data:R.About||Ra.About,onAdminLogin:()=>Y(!0),isAdmin:q}):v.jsxs("div",{className:"space-y-4 pt-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[h.length>0&&v.jsx("button",{onClick:Tn,className:"p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95",children:v.jsx(Sy,{size:18})}),v.jsxs("div",{className:"relative",children:[v.jsx("h2",{className:"text-xl font-extrabold italic bg-clip-text text-transparent truncate",style:Ct,children:Ot}),v.jsx("div",{className:"h-1.5 w-12 rounded-full mt-1",style:Ct})]})]}),Vn.length>0?Vn.map((he,Le)=>v.jsx("div",{className:"mb-4",children:v.jsx(u_,{item:he,colorTheme:i==="Others"?"Others":i,onClick:qe,index:Le})},he.id)):v.jsxs("div",{className:"text-center py-10 opacity-50 flex flex-col items-center text-gray-600 dark:text-gray-400",children:[v.jsx(Ao,{size:40,className:"mb-2 opacity-30"}),v.jsx("p",{className:"font-medium",children:"Empty Folder"})]})]})}),v.jsx("div",{className:"fixed bottom-0 left-0 right-0 p-4 z-40 pointer-events-none",children:v.jsxs("nav",{className:"glass-panel mx-auto max-w-md bg-white/10 dark:bg-black/10 rounded-3xl h-16 px-6 shadow-2xl flex items-center justify-between pointer-events-auto",children:[v.jsx($i,{name:Re.tab1,active:i==="Udvash",onClick:()=>Fe("Udvash"),icon:za,activeColor:at.navColor}),v.jsx($i,{name:Re.tab2,active:i==="ACS",onClick:()=>Fe("ACS"),icon:Ja,activeColor:at.navColor}),v.jsx($i,{name:Re.tab3,active:i==="Others",onClick:()=>Fe("Others"),icon:b1,activeColor:at.navColor}),v.jsx($i,{name:"About Me",active:i==="About Me",onClick:()=>Fe("About Me"),icon:ba,activeColor:at.navColor})]})})]})]})}I1.createRoot(document.getElementById("root")).render(v.jsx(g1.StrictMode,{children:v.jsx(pS,{})}));
