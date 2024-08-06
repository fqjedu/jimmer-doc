"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1203],{46895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),i=n(11470),l=n(19365);const o={sidebar_position:4,title:"\u6279\u91cf\u63a7\u5236"},s=void 0,u={id:"configuration/batch-size",title:"\u6279\u91cf\u63a7\u5236",description:"SqlClient\u652f\u6301\u4e24\u4e2a\u914d\u7f6e\uff1aDefaultBatchSize\u548cDefaultListBatchSize\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a128\u548c16\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/batch-size.mdx",sourceDirName:"configuration",slug:"/configuration/batch-size",permalink:"/jimmer-doc/zh/docs/configuration/batch-size",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/configuration/batch-size.mdx",tags:[],version:"current",lastUpdatedAt:1722959029e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u6279\u91cf\u63a7\u5236"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u6570\u636e\u6e90",permalink:"/jimmer-doc/zh/docs/configuration/multi-datasources"},next:{title:"SQL\u65e5\u5fd7",permalink:"/jimmer-doc/zh/docs/configuration/sql-log"}},c={},d=[{value:"\u4f7f\u7528Spring Boot Starter",id:"\u4f7f\u7528spring-boot-starter",level:2},{value:"\u4e0d\u4f7f\u7528Spring Boot Starter",id:"\u4e0d\u4f7f\u7528spring-boot-starter",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["SqlClient\u652f\u6301\u4e24\u4e2a\u914d\u7f6e\uff1a",(0,r.jsx)(t.code,{children:"DefaultBatchSize"}),"\u548c",(0,r.jsx)(t.code,{children:"DefaultListBatchSize"}),"\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a128\u548c16\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd9\u4e24\u4e2a\u914d\u7f6e\u4e3a",(0,r.jsx)(t.a,{href:"../query/object-fetcher/",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u4e2d\u7684batchSize\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\n\u5176\u4f5c\u7528\u5728",(0,r.jsx)(t.a,{href:"../query/object-fetcher/",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u505a\u4e86\u8be6\u7ec6\u63cf\u8ff0\uff0c\u672c\u6587\u53ea\u4ea4\u4ee3\u914d\u7f6e\uff0c\u4e0d\u91cd\u590d\u9610\u8ff0\u5176\u4f5c\u7528\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u6709\u4e24\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u914d\u7f6e"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,r.jsx)(t.li,{children:"\u4e0d\u4f7f\u7528Spring Boot Starter"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528spring-boot-starter",children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"jimmer:\n   default-batch-size: 256\n   default-list-batch-size: 32\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4e0d\u4f7f\u7528spring-boot-starter",children:"\u4e0d\u4f7f\u7528Spring Boot Starter"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(l.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        .setConnectionManager(...)\n        .setDialect(new H2Dialect())\n        .setExecutor(...)\n        .addScalarProvider(...)\n        // highlight-next-line\n        .setDefaultBatchSize(256)\n        // highlight-next-line\n        .setDefaultListBatchSize(32)\n        .build();\n}\n"})})}),(0,r.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient(): KSqlClient = \n    newKSqlClient {\n        setConnectionManager { ... }\n        setDialect(H2Dialect())\n        setExecutor { ... }\n        addScalarProvider { ... }\n        // highlight-next-line\n        setDefaultBatchSize(256)\n        // highlight-next-line\n        setDefaultListBatchSize(32)\n    }\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(18215),i=n(23104),l=n(56347),o=n(205),s=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=u??b;return f({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,v.jsx)(S,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);