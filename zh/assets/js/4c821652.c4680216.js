"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),l=n(34334),o=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:h,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==w&&(x(t),T(r),null!=h&&N(h,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},98854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(83117),a=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:2,title:"3.2 \u9650\u5236\u6df1\u5ea6"},s=void 0,c={unversionedId:"showcase/recursive-query/depth",id:"showcase/recursive-query/depth",title:"3.2 \u9650\u5236\u6df1\u5ea6",description:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/depth.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/depth",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/depth",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/recursive-query/depth.mdx",tags:[],version:"current",lastUpdatedAt:1708691860,formattedLastUpdatedAt:"2024\u5e742\u670823\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"3.2 \u9650\u5236\u6df1\u5ea6"},sidebar:"tutorialSidebar",previous:{title:"3.1 \u57fa\u672c\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/usage"},next:{title:"3.2 \u63a7\u5236\u8282\u70b9\u662f\u5426\u9012\u5f52",permalink:"/jimmer-doc/zh/docs/showcase/recursive-query/node-control"}},u={},d=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"),(0,a.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(\n                    // highlight-next-line\n                    cfg -> cfg.depth(2)\n                )\n        )\n    )\n    .execute();\n"))),(0,a.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    // highlight-next-line\n                    depth(2)\n                }\n            }\n        )\n    }\n    .execute()\n")))),(0,a.kt)("p",null,"\u5f53\u524d\u88ab\u67e5\u8be2\u7684\u805a\u5408\u6839\u88ab\u89c4\u5b9a\u4e3a\u7b2c0\u5c42\uff0c\u5728\u5176\u57fa\u7840\u4e0a\u5411\u4e0b\u67e5\u8be2\u4e24\u5c42\u5b50\u5bf9\u8c61\uff0c\u5f97\u5230\u5982\u4e0b\u7684\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":3,"name":"Drinks"},\n                    // highlight-next-line\n                    {"id":6,"name":"Bread"}\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":10,"name":"Woman"},\n                    // highlight-next-line\n                    {"id":18,"name":"Man"}\n                ]\n            }\n        ]\n    }\n]\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6700\u6df1\u76844\u4e2a\u5bf9\u8c61\uff0c\u5e76\u975e\u8868\u73b0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes"),"\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),"\uff0c\u800c\u662f\u6839\u672c\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes"),"\u5c5e\u6027\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u8868\u793a\uff0c\u8fd94\u4e2a\u5bf9\u8c61\u662f\u5426\u6709\u4e0b\u7ea7\u5bf9\u8c61\u662f\u672a\u77e5\u7684\uff0c\u56e0\u4e3a\u9012\u5f52\u8fc7\u7a0b\u56e0\u4eba\u4e3a\u5e72\u9884\u800c\u88ab\u63d0\u524d\u7ec8\u6b62\u3002")),(0,a.kt)("h2",{id:"\u67e5\u8be2\u9759\u6001dto"},"\u67e5\u8be2\u9759\u6001DTO"),(0,a.kt)("p",null,"\u9759\u6001DTO\u9650\u5236\u9012\u5f52\u6df1\u5ea6\u540e\u7eed\u7248\u672c\u63d0\u4f9b\uff0c\u8bf7\u7b49\u5f85\u540e\u7eed\u7248\u672c"))}m.isMDXComponent=!0}}]);