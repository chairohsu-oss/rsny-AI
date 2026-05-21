import{h as ne,E as z,i as ae,s as M,e as g,c as C,t as F,j as o,V as f,_ as U,k as re,H as ie,T as S,l as Y,m as G,n as W,L as oe,I as se,o as ue,X as le,B as ce,a as y,b as u,p as K,q as X,v as H,w as de,x as pe,y as fe,z as ge,A as me,D as he,R as J,F as T}from"./vendors.050fbc64.js";import{N as q}from"./common.59fe0a3d.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var ve=`
/* ========== 登录页背景色延伸 ========== */
/* 当检测到登录页时，html/body也要变成橙色 */
body.login-page-active,
body.login-page-active html,
body.login-page-active #app,
body.login-page-active .taro_router,
body.login-page-active .taro_page {
  background-color: #FFF7ED !important;
}

/* ========== 禁用页面切换动画 ========== */
.taro_page,
.taro_router,
.taro-tabbar__panel {
  animation: none !important;
  transition: none !important;
}

/* 禁用 Taro 页面进入/离开动画 */
.taro-page-fade-enter,
.taro-page-fade-leave-to,
.taro-page-slide-enter,
.taro-page-slide-leave-to {
  animation: none !important;
  transition: none !important;
  opacity: 1 !important;
  transform: none !important;
}

/* ========== 强制忽略安全区域 ========== */
/* 覆盖 Taro 框架默认的安全区域样式 */
html, body, #app, .taro_router, .taro_page, .taro-tabbar__container, .taro-tabbar__panel {
  padding-bottom: 0 !important;
}

/* 让固定底部元素贴底显示 */
.taro_page {
  padding-bottom: 0 !important;
}

/* ========== TabBar样式 - 最高优先级 ========== */

/* TabBar容器 - 固定在屏幕最底部 */
.h5-tabbar-container {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 99999 !important;
  background-color: #ffffff !important;
  border-top: 1px solid #e5e5e5 !important;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05) !important;
}

/* TabBar内容区域 */
.h5-tabbar-content {
  height: 50px !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-around !important;
}

/* TabBar按钮 */
.h5-tabbar-item {
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  height: 100% !important;
  -webkit-tap-highlight-color: transparent !important;
}

/* TabBar文字 */
.h5-tabbar-text {
  font-size: 11px !important;
  color: #999999 !important;
  margin-top: 2px !important;
  font-weight: 400 !important;
  display: block !important;
}

.h5-tabbar-text-active {
  font-size: 11px !important;
  color: #F97316 !important;
  margin-top: 2px !important;
  font-weight: 500 !important;
  display: block !important;
}

/* 安全区域填充 - 已禁用，让内容延伸到屏幕底部 */
.h5-tabbar-safe-area {
  height: 0 !important;
  background-color: #ffffff !important;
  width: 100% !important;
}

/* 页面底部占位 - 无安全区域预留 */
.h5-tabbar-placeholder {
  height: 50px !important;
  flex-shrink: 0 !important;
}

/* ========== 全局基础样式 ========== */
html, body {
  margin: 0;
  padding: 0;
  background-color: #ffffff !important;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
}

#app {
  background-color: #ffffff !important;
}

/* ========== Taro容器样式 ========== */
.taro_router,
.taro_page,
.taro-tabbar__container,
.taro-tabbar__panel {
  background-color: #ffffff !important;
}

/* ========== 隐藏Taro默认TabBar ========== */
.taro-tabbar,
.weui-tabbar,
.taro-tabbar__tabbar,
.taro-tabbar__placeholder {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  overflow: hidden !important;
}

/* ========== 滚动条 ========== */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

/* ========== Vite错误覆盖层 ========== */
vite-error-overlay {
  -webkit-user-select: text !important;
}

vite-error-overlay::part(window) {
  max-width: 90vw;
  padding: 10px;
}
`,be=`
@media (min-width: 769px) {
  html {
    font-size: 15px !important;
  }

  body {
    background-color: #f3f4f6 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }
}
`,xe=`
@media (min-width: 769px) {
  .taro-tabbar__container {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #ffffff !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
  }

  .taro-tabbar__panel {
    height: 100% !important;
    overflow: auto !important;
  }

  body.no-tabbar #app {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #ffffff !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
  }

  body.no-tabbar #app .taro_router {
    height: 100% !important;
    overflow: auto !important;
  }
}
`;function ye(){var s=document.createElement("style");s.id="h5-custom-styles",s.innerHTML=ve+be+xe,document.head.appendChild(s)}function _e(){var s=function(){var r=!!document.querySelector(".taro-tabbar__container");document.body.classList.toggle("no-tabbar",!r)};s();var a=new MutationObserver(s);a.observe(document.body,{childList:!0,subtree:!0})}function we(){ye(),_e()}function Be(){var s=ne();if(s===z.WEAPP||s===z.TT)try{var a=ae(),e=a.miniProgram.envVersion;console.log("[Debug] envVersion:",e),e==="develop"?M({enableDebug:!0}):M({enableDebug:!1})}catch(r){console.error("[Debug] 设置调试模式失败:",r)}}var Ee={title:"",bgColor:"#ffffff",textStyle:"black",navStyle:"default",transparent:"none",leftIcon:"none"},Te=function(){var a,e=Y();return(e==null||(a=e.config)===null||a===void 0?void 0:a.window)||{}},Se=function(){var a,e,r=(a=Y())===null||a===void 0||(a=a.config)===null||a===void 0?void 0:a.tabBar;return new Set((r==null||(e=r.list)===null||e===void 0?void 0:e.map(function(i){return i.pagePath}))||[])},Ce=function(a,e,r){return e.has(a)?"none":r>1?"back":"home"},je={"pages/home/index":"首页","pages/menu/index":"菜品库","pages/cart/index":"加购篮","pages/profile/index":"美味记录"},$=44;function ke(){var s=g.useState(Ee),a=C(s,2),e=a[0],r=a[1],i=g.useState(0),n=C(i,2),t=n[0],A=n[1],v=g.useCallback(function(){var d=F.getCurrentPages(),l=d[d.length-1],m=(l==null?void 0:l.route)||"",h=(l==null?void 0:l.config)||{},x=Te(),R=Se(),I=Ce(m,R,d.length),j=h.navigationBarTitleText||je[m]||x.navigationBarTitleText||"";r({title:j,bgColor:h.navigationBarBackgroundColor||x.navigationBarBackgroundColor||"#ffffff",textStyle:h.navigationBarTextStyle||x.navigationBarTextStyle||"black",navStyle:h.navigationStyle||x.navigationStyle||"default",transparent:h.transparentTitle||x.transparentTitle||"none",leftIcon:I})},[]);F.useDidShow(function(){v()}),g.useEffect(function(){v()},[v]),F.usePageScroll(function(d){var l=d.scrollTop;e.transparent==="auto"&&A(Math.min(l/100,1))}),g.useEffect(function(){var d=document.querySelector("title")||document.head,l=new MutationObserver(function(){return v()});return l.observe(d,{subtree:!0,childList:!0,characterData:!0}),function(){return l.disconnect()}},[v]);var p=e.textStyle==="white"?"#fff":"#333",D=e.textStyle==="white"?"text-white":"text-gray-800",O=function(){return e.transparent==="always"?{backgroundColor:"transparent"}:e.transparent==="auto"?{backgroundColor:e.bgColor,opacity:t}:{backgroundColor:e.bgColor}},B=function(){return F.navigateBack()},b=function(){if(typeof window!="undefined"){var l=F.getCurrentPages(),m=l[l.length-1],h=(m==null?void 0:m.route)||"";if(h){var x=Date.now()+1e4;G("tianba_refresh_route",h),G("tianba_refresh_expire",x)}window.location.reload()}};return o.jsxs(o.Fragment,{children:[o.jsx(f,{className:"fixed left-0 right-0 z-_b9999_B",style:U(U({},O()),{},{top:0,paddingTop:"env(safe-area-inset-top, 0px)"}),children:o.jsxs(f,{className:"flex items-center justify-center relative",style:{height:$},children:[e.leftIcon==="back"&&o.jsx(f,{className:"absolute left-2 flex items-center justify-center",onClick:B,children:o.jsx(re,{size:24,color:p})}),e.leftIcon==="home"&&o.jsx(f,{className:"absolute left-2 flex items-center justify-center",onClick:b,children:o.jsx(ie,{size:22,color:p})}),o.jsx(S,{className:"text-base font-medium max-w-3_f5 truncate ".concat(D),children:e.title})]})}),o.jsx(f,{style:{height:"calc(".concat($,"px + env(safe-area-inset-top, 0px))"),flexShrink:0}})]})}var Fe=["pages/login","pages/install"],Ae=function(a){var e=a.children,r=g.useState(""),i=C(r,2),n=i[0],t=i[1];g.useEffect(function(){var p=function(){var B=F.getCurrentPages();if(B.length>0){var b=B[B.length-1];if(b!=null&&b.route){var d=b.route;console.log("[H5Container] Path:",d),t(d);return}}var l=window.location.hash||"",m=l.match(/^#\/([^?]*)/);m&&t(m[1])};p(),W.on("__routeChange",p),window.addEventListener("hashchange",p);var D=setInterval(function(){p()},500);return function(){W.off("__routeChange",p),window.removeEventListener("hashchange",p),clearInterval(D)}},[]);var A=n!==""&&Fe.some(function(p){return n.includes(p)}),v=n&&n.includes("pages/login");return g.useEffect(function(){return typeof document!="undefined"&&(v?document.body.classList.add("login-page-active"):document.body.classList.remove("login-page-active")),function(){typeof document!="undefined"&&document.body.classList.remove("login-page-active")}},[v]),console.log("[H5Container] Render:",{currentPath:n,shouldHideNavBar:A}),o.jsxs(o.Fragment,{children:[!A&&o.jsx(ke,{}),e]})},De=function(a){var e=a.children,r=g.useState(!1),i=C(r,2),n=i[0],t=i[1],A=g.useState(null),v=C(A,2),p=v[0],D=v[1],O=g.useState(""),B=C(O,2),b=B[0],d=B[1],l=g.useState(!1),m=C(l,2),h=m[0],x=m[1],R=g.useState(null),I=C(R,2),j=I[0],L=I[1];F.useLaunch(function(){Be(),we()}),g.useEffect(function(){Q()},[]);var Q=function(){var N=y(u().m(function _(){var P,E,k,c;return u().w(function(w){for(;;)switch(w.p=w.n){case 0:return w.p=0,w.n=1,q.request({url:"/api/users/me"});case 1:E=w.v,k=(P=E.data)===null||P===void 0?void 0:P.data,k&&(D(k),k.verified||t(!0)),w.n=3;break;case 2:w.p=2,c=w.v,console.error("获取用户信息失败",c);case 3:return w.a(2)}},_,null,[[0,2]])}));return function(){return N.apply(this,arguments)}}(),Z=function(){var N=y(u().m(function _(){var P,E,k;return u().w(function(c){for(;;)switch(c.p=c.n){case 0:if(b.trim()){c.n=1;break}return L({success:!1,message:"请输入验证码"}),c.a(2);case 1:if(p){c.n=2;break}return L({success:!1,message:"用户信息获取失败"}),c.a(2);case 2:return x(!0),c.p=3,c.n=4,q.request({url:"/api/users/verify",method:"POST",data:{userId:p.id,code:b.trim()}});case 4:P=c.v,E=P.data,E.code===200&&E.data?(L({success:!0,message:"验证成功！"}),D(E.data),setTimeout(function(){t(!1)},1500)):L({success:!1,message:E.msg||"验证失败"}),c.n=6;break;case 5:c.p=5,k=c.v,console.error("验证失败",k),L({success:!1,message:"验证失败，请重试"});case 6:return c.p=6,x(!1),c.f(6);case 7:return c.a(2)}},_,null,[[3,5,6,7]])}));return function(){return N.apply(this,arguments)}}(),ee=function(){t(!1)};return o.jsxs(Ae,{children:[e,n&&o.jsx(te,{})]});function te(){return o.jsx(f,{className:"fixed inset-0 z-_b9999_B flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.6)"},children:o.jsxs(f,{className:"bg-white rounded-2xl w-11_f12 max-w-sm overflow-hidden",onClick:function(_){return _.stopPropagation()},children:[o.jsxs(f,{className:"px-6 py-5 border-b border-gray-100",children:[o.jsxs(f,{className:"flex flex-row items-center justify-center gap-2",children:[o.jsx(oe,{size:24,color:"#F97316"}),o.jsx(S,{className:"text-lg font-bold text-gray-800",children:"身份验证"})]}),o.jsx(S,{className:"block text-center text-sm text-gray-500 mt-2",children:"天霸私厨仅限家庭成员使用"})]}),o.jsxs(f,{className:"px-6 py-5",children:[o.jsx(S,{className:"block text-sm text-gray-600 mb-4",children:"请输入家庭成员验证码以解锁完整功能"}),o.jsx(f,{className:"bg-gray-50 rounded-xl px-4 py-3 mb-4",children:o.jsx(se,{className:"w-full text-center text-lg font-mono",placeholder:"请输入验证码",value:b,onInput:function(_){return d(_.detail.value)},maxlength:20})}),j&&o.jsxs(f,{className:"flex flex-row items-center justify-center gap-2 py-2 rounded-lg mb-4 ".concat(j.success?"bg-green-50":"bg-red-50"),children:[j.success?o.jsx(ue,{size:16,color:"#22C55E"}):o.jsx(le,{size:16,color:"#EF4444"}),o.jsx(S,{className:"text-sm ".concat(j.success?"text-green-600":"text-red-600"),children:j.message})]}),o.jsx(ce,{className:"w-full rounded-xl py-3 font-medium ".concat(h?"bg-gray-300":"bg-orange-500"),onClick:Z,disabled:h,children:o.jsx(S,{className:"text-white",children:h?"验证中...":"验证身份"})}),o.jsx(f,{className:"mt-3 flex items-center justify-center",onClick:ee,children:o.jsx(S,{className:"text-sm text-gray-400",children:"暂不验证，以客人身份浏览"})})]}),o.jsx(f,{className:"px-6 py-4 bg-gray-50",children:o.jsxs(S,{className:"block text-xs text-gray-400 text-center",children:["验证码由家庭管理员提供",`
`,"验证后可获得点菜、修改菜单等权限"]})})]})})}},Ne=function(a){var e=a.children;return o.jsx(De,{children:e})},V=K.__taroAppConfig={router:{},pages:["pages/login/index","pages/install/index","pages/dishes/index","pages/home/index","pages/add/index","pages/records/index","pages/dish-detail/index","pages/edit/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"天霸私厨",navigationBarTextStyle:"black"}};V.routes=[Object.assign({path:"pages/login/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.0793ece1.js"),["js/index.0793ece1.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css","css/index.c46a0f24.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"天霸私厨",navigationBarBackgroundColor:"#FFF7ED"}),Object.assign({path:"pages/install/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.bbfc085b.js"),["js/index.bbfc085b.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","css/index.463aa21a.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"",navigationStyle:"custom",navigationBarTextStyle:"black"}),Object.assign({path:"pages/dishes/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.85039d2e.js"),["js/index.85039d2e.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css","css/index.7b28d8b8.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"菜品库"}),Object.assign({path:"pages/home/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.71ec862e.js"),["js/index.71ec862e.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css","css/index.bd757772.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"好帮手"}),Object.assign({path:"pages/add/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.f7ac2209.js"),["js/index.f7ac2209.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css","css/index.0a2101e7.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"录入菜品"}),Object.assign({path:"pages/records/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.f25f4ec5.js"),["js/index.f25f4ec5.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"美味记录"}),Object.assign({path:"pages/dish-detail/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.60933f9e.js"),["js/index.60933f9e.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationStyle:"custom",navigationBarTitleText:"菜品详情"}),Object.assign({path:"pages/edit/index",load:function(){var s=y(u().m(function e(r,i){var n;return u().w(function(t){for(;;)switch(t.n){case 0:return t.n=1,T(()=>import("./index.38d9ff1a.js"),["js/index.38d9ff1a.js","js/vendors.050fbc64.js","css/vendors.8886af03.css","js/common.59fe0a3d.js","css/common.0d0570d5.css","css/index.e3b0c442.css"]);case 1:return n=t.v,t.a(2,[n,r,i])}},e)}));function a(e,r){return s.apply(this,arguments)}return a}()},{navigationBarTitleText:"编辑菜品"})];Object.assign(X,{findDOMNode:H.findDOMNode,render:H.render,unstable_batchedUpdates:H.unstable_batchedUpdates});de();var Pe=pe(Ne,J,X,V),Le=fe({window:K});ge(V);me(Le,Pe,V,J);he({designWidth:750,deviceRatio:{375:2,640:1.17,750:1,828:.905},baseFontSize:20,unitPrecision:void 0,targetUnit:void 0});
