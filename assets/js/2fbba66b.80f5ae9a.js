"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),o=n(34334),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:m,groupId:h,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,s.U)(),[N,T]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==N&&(j(t),T(r),null!=h&&k(h,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},45400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(83117),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={sidebar_position:2,title:"3.2 Limit Depth"},s=void 0,c={unversionedId:"showcase/recursive-query/depth",id:"showcase/recursive-query/depth",title:"3.2 Limit Depth",description:"Query Dynamic Entities",source:"@site/docs/showcase/recursive-query/depth.mdx",sourceDirName:"showcase/recursive-query",slug:"/showcase/recursive-query/depth",permalink:"/jimmer-doc/docs/showcase/recursive-query/depth",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/depth.mdx",tags:[],version:"current",lastUpdatedAt:1708691860,formattedLastUpdatedAt:"Feb 23, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"3.2 Limit Depth"},sidebar:"tutorialSidebar",previous:{title:"3.1 Basic usage",permalink:"/jimmer-doc/docs/showcase/recursive-query/usage"},next:{title:"3.2 Control Recursion Of Node",permalink:"/jimmer-doc/docs/showcase/recursive-query/node-control"}},u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"query-dynamic-entities"},"Query Dynamic Entities"),(0,a.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(\n                    // highlight-next-line\n                    cfg -> cfg.depth(2)\n                )\n        )\n    )\n    .execute();\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    // highlight-next-line\n                    depth(2)\n                }\n            }\n        )\n    }\n    .execute()\n")))),(0,a.kt)("p",null,"The currently queried aggregate roots are defined as the 0th layer.\nOn this basis, query two layers of child objects downwards to obtain the following data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":3,"name":"Drinks"},\n                    // highlight-next-line\n                    {"id":6,"name":"Bread"}\n                ]\n            },\n            {\n                "id":9,\n                "name":"Clothing",\n                "childNodes":[\n                    // highlight-next-line\n                    {"id":10,"name":"Woman"},\n                    // highlight-next-line\n                    {"id":18,"name":"Man"}\n                ]\n            }\n        ]\n    }\n]\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The deepest 4 objects do not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes")," property as ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),", but do not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"childNodes")," property at all. "),(0,a.kt)("p",{parentName:"admonition"},"This means whether these 4 objects have subordinate objects is unknown, because the recursion process was prematurely terminated due to manual intervention. ")),(0,a.kt)("h2",{id:"query-static-dto"},"Query Static DTO"),(0,a.kt)("p",null,"Restricting recursion depth for static DTOs will be provided in later versions, please wait for later versions."))}m.isMDXComponent=!0}}]);