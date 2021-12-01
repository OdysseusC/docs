"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8384:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,title:"Keel",slug:"/internal_concepts/keel"},a="Keel",u={unversionedId:"concepts/keel",id:"concepts/keel",isDocsHomePage:!1,title:"Keel",description:"Introduction",source:"@site/docs/concepts/keel.md",sourceDirName:"concepts",slug:"/internal_concepts/keel",permalink:"/docs/zh-cn/internal_concepts/keel",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/concepts/keel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Keel",slug:"/internal_concepts/keel"},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/docs/zh-cn/concepts/core"},next:{title:"Rudder",permalink:"/docs/zh-cn/internal_concepts/rudder"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"keel"},"Keel"),(0,c.kt)("h2",{id:"introduction"},"Introduction"),(0,c.kt)("p",null,"Keel \u662f tKeel \u5e73\u53f0\u4e2d\u95f4\u4ee3\u7406\u5668\uff08Proxy\uff09\uff0c\u4e3b\u8981\u4ee3\u7406\u4e86\u6240\u6709\u8fdb\u5165\u5e73\u53f0\u7684 HTTP \u6d41\u91cf\uff0c\u5728\u4ee3\u7406\u8fc7\u7a0b\u4e2d\u6267\u884c\u66f4\u591a\u5b89\u5168\u8ba4\u8bc1\u3002"),(0,c.kt)("h2",{id:"architecture"},"Architecture"))}d.isMDXComponent=!0}}]);