!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VueTiandiMap=t(require("vue")):e.VueTiandiMap=t(e.vue)}(self,(e=>(()=>{"use strict";var t={704:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"\n.toolTip[data-v-2c7d394a]{\r\n  position: fixed;\r\n  padding-top: 50px;\r\n  text-align: center;\r\n  width: 100%; \r\n  height: 100%\n}\r\n",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=i[u]||0,d="".concat(u," ").concat(p);i[u]=p+1;var l=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var p=n(i[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},748:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{TiandiMap:()=>M,default:()=>Z});var e=r(748),t={style:{width:"100%",height:"100%"}},n={key:0,class:"toolTip"},i={ref:"view",style:{width:"100%",height:"100%"}},a=function(e){return Object.prototype.toString.call(e).slice(8,-1)};const c={name:"tiandi-map",props:{ak:{type:String},minZoom:{type:Number},maxZoom:{type:Number},maxBounds:{type:Object},center:{type:[Object,String],default:function(){return{lng:116.41239,lat:39.97569}}},zoom:{type:Number,default:18}},data:function(){return{loading:"pending"}},watch:{center:function(e,t){var n=this.map,r=this.zoom;"String"===a(e)&&e!==t&&n.centerAndZoom(new T.LngLat(e),r)},"center.lng":function(e,t){var n=this.T,r=this.map,o=this.zoom,i=this.center;e!==t&&e>=-180&&e<=180&&r.centerAndZoom(new n.LngLat(e,i.lat),o)},"center.lat":function(e,t){var n=this.T,r=this.map,o=this.zoom,i=this.center;e!==t&&e>=-74&&e<=74&&r.centerAndZoom(new n.LngLat(i.lng,e),o)},zoom:function(e,t){var n=this.map;e!==t&&e>=3&&e<=19&&n.setZoom(e)},minZoom:function(e){this.map.setMinZoom(e)},maxZoom:function(e){this.map.setMaxZoom(e)}},setup:function(){var t=(0,e.ref)(),n=(0,e.ref)();return(0,e.provide)("T",t),(0,e.provide)("map",n),{T:t,map:n}},mounted:function(){this.reset()},computed:{loadingTest:function(){switch(this.loading){case"pending":return"正在加载天地图....";case"fail":return"天地图加载失败....";default:return null}}},methods:{setMapOptions:function(){var e=this.map,t=this.minZoom,n=this.maxZoom;t&&e.setMinZoom(t),n&&e.setMaxZoom(n)},init:function(e){var t=this.$refs.view,n=new e.Map(t);this.map=n;var r=this.setMapOptions,o=this.zoom,i=this.getCenterPoint;r(),n.centerAndZoom(i(),o),this.$emit("ready",{map:n,T:e})},getCenterPoint:function(){var e=this.center;switch(a(e)){case"String":return new T.LngLat(e);case"Object":return new T.LngLat(e.lng,e.lat);default:return new T.LngLat(116.40769,39.89945)}},getMapScript:function(){var e=this;if(window.T)return window.T._preloader?window.T._preloader:Promise.resolve(window.T);var t=this.ak||this._TMap().ak;return window.T={},window.T._preloader=new Promise((function(n,r){e.loading="pending";var o=document.createElement("script");o.type="text/javascript",o.onload=function(){e.loading="success",n(window.T)},o.onerror=function(){e.loading="fail"},window.document.body.appendChild(o),o.src="http://api.tianditu.gov.cn/api?v=4.0&tk=".concat(t)})),window.T._preloader},initMap:function(e){this.T=e,this.init(e)},reset:function(){var e=this.getMapScript,t=this.initMap;e().then(t)}}};var s=r(379),u=r.n(s),p=r(795),d=r.n(p),l=r(569),f=r.n(l),m=r(565),v=r.n(m),h=r(216),g=r.n(h),y=r(589),w=r.n(y),b=r(704),x={};x.styleTagTransform=w(),x.setAttributes=v(),x.insert=f().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=g(),u()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;const M=(0,r(744).Z)(c,[["render",function(r,o,a,c,s,u){return(0,e.openBlock)(),(0,e.createElementBlock)("div",t,["success"!=s.loading?((0,e.openBlock)(),(0,e.createElementBlock)("div",n,(0,e.toDisplayString)(u.loadingTest),1)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",i,null,512),(0,e.renderSlot)(r.$slots,"default",{},void 0,!0)])}],["__scopeId","data-v-2c7d394a"]]),Z={install:function(e,t){var n=t.ak;e.config.globalProperties._TMap=function(){return{ak:n}},e.component("tiandi-map",M)}}})(),o})()));