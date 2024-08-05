"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6061],{4336:(e,n,t)=>{t.d(n,{A:()=>x});t(96540);var a=t(18215),s=t(21312),i=t(17559),l=t(28774);const r={iconEdit:"iconEdit_Z9Sw"};var c=t(74848);function o(e){let{className:n,...t}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(r.iconEdit,n),"aria-hidden":"true",...t,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:n}=e;return(0,c.jsxs)(l.A,{to:n,className:i.G.common.editThisPage,children:[(0,c.jsx)(o,{}),(0,c.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=t(36266);function m(e){let{lastUpdatedAt:n}=e;const t=new Date(n),a=(0,u.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,c.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,c.jsx)("b",{children:(0,c.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:n}=e;return(0,c.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,c.jsx)("b",{children:n})},children:" by {user}"})}function f(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,c.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,c.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,c.jsx)(m,{lastUpdatedAt:n}):"",byUser:t?(0,c.jsx)(h,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function x(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,c.jsxs)("div",{className:(0,a.A)("row",n),children:[(0,c.jsx)("div",{className:"col",children:t&&(0,c.jsx)(d,{editUrl:t})}),(0,c.jsx)("div",{className:(0,a.A)("col",p.lastUpdated),children:(s||i)&&(0,c.jsx)(f,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}},65425:(e,n,t)=>{t.d(n,{A:()=>H});var a=t(96540),s=t(28453),i=t(5260),l=t(21432),r=t(74848);function c(e){return(0,r.jsx)("code",{...e})}var o=t(28774);var d=t(18215),u=t(15066),m=t(63427),h=t(92303),f=t(41422);const p={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function x(e){return!!e&&("SUMMARY"===e.tagName||x(e.parentElement))}function v(e,n){return!!e&&(e===n||v(e.parentElement,n))}function g(e){let{summary:n,children:t,...s}=e;(0,m.A)().collectAnchor(s.id);const i=(0,h.A)(),l=(0,a.useRef)(null),{collapsed:c,setCollapsed:o}=(0,f.u)({initialState:!s.open}),[d,g]=(0,a.useState)(s.open),j=a.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...s,ref:l,open:d,"data-collapsed":c,className:(0,u.A)(p.details,i&&p.isBrowser,s.className),onMouseDown:e=>{x(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;x(n)&&v(n,l.current)&&(e.preventDefault(),c?(o(!1),g(!0)):o(!0))},children:[j,(0,r.jsx)(f.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{o(e),g(!e)},children:(0,r.jsx)("div",{className:p.collapsibleContent,children:t})})]})}const j={details:"details_b_Ee"},A="alert alert--info";function N(e){let{...n}=e;return(0,r.jsx)(g,{...n,className:(0,d.A)(A,j.details,n.className)})}function b(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.type)),s=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(N,{...e,summary:t,children:s})}var C=t(51107);function y(e){return(0,r.jsx)(C.A,{...e})}const L={containsTaskList:"containsTaskList_mC6p"};function U(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&L.containsTaskList)}const _={img:"img_ev3q"};var k=t(27293);const w={Head:i.A,details:b,Details:b,code:function(e){return function(e){return void 0!==e.children&&a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,r.jsx)(c,{...e}):(0,r.jsx)(l.A,{...e})},a:function(e){return(0,r.jsx)(o.A,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:U(e.className)})},li:function(e){return(0,m.A)().collectAnchor(e.id),(0,r.jsx)("li",{...e})},img:function(e){return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,_.img))});var n},h1:e=>(0,r.jsx)(y,{as:"h1",...e}),h2:e=>(0,r.jsx)(y,{as:"h2",...e}),h3:e=>(0,r.jsx)(y,{as:"h3",...e}),h4:e=>(0,r.jsx)(y,{as:"h4",...e}),h5:e=>(0,r.jsx)(y,{as:"h5",...e}),h6:e=>(0,r.jsx)(y,{as:"h6",...e}),admonition:k.A,mermaid:()=>null};function H(e){let{children:n}=e;return(0,r.jsx)(s.x,{components:w,children:n})}},67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(96540);var a=t(18215),s=t(61213),i=t(17559),l=t(9909),r=t(65425),c=t(67763),o=t(50996),d=t(4336);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(74848);function h(e){const{content:n}=e,{metadata:{title:t,editUrl:h,description:f,frontMatter:p,unlisted:x,lastUpdatedBy:v,lastUpdatedAt:g},assets:j}=n,{keywords:A,wrapperClassName:N,hide_table_of_contents:b}=p,C=j.image??p.image,y=!!(h||g||v);return(0,m.jsx)(s.e3,{className:(0,a.A)(N??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(s.be,{title:t,description:f,keywords:A,image:C}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.A)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.A)("col",!b&&"col--8"),children:[x&&(0,m.jsx)(o.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})}),y&&(0,m.jsx)(d.A,{className:(0,a.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:g,lastUpdatedBy:v})]}),!b&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.A,{toc:n.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level})})]})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215),s=t(65195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(74848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.A,{...t,linkClassName:r,linkActiveClassName:c})})}},65195:(e,n,t)=>{t.d(n,{A:()=>p});var a=t(96540),s=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):a.push(s)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let s=n;s<=t;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(28774),m=t(74848);function h(e){let{toc:n,className:t,linkClassName:a,isChild:s}=e;return n.length?(0,m.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const f=a.memo(h);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:u,...h}=e;const p=(0,s.p)(),x=o??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:x,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:v}}),[r,c,x,v])),(0,m.jsx)(f,{toc:g,className:t,linkClassName:r,...h})}},50996:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var a=t(18215),s=t(21312),i=t(5260),l=t(74848);function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(17559),u=t(27293);function m(e){let{className:n}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(m,{...e})]})}},36266:(e,n,t)=>{t.d(n,{i:()=>s});var a=t(44586);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,a.A)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,a.A)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);