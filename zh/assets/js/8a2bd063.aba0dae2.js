"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[983],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(34334);const o="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),l=t(67294),o=t(34334),r=t(72389),i=t(67392),s=t(7094),p=t(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var n;const{lazy:t,block:r,defaultValue:c,values:d,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,i.l)(v,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,C]=(0,l.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&v.some((n=>n.value===e))&&C(e)}const B=e=>{const n=e.currentTarget,t=I.indexOf(n),a=v[t].value;a!==T&&(S(n),C(a),null!=k&&N(k,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},v.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>I.push(e),onKeyDown:x,onFocus:B,onClick:B},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,r.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},32102:(e,n,t)=>{t.d(n,{s:()=>g});var a=t(83117),l=t(67294),o=t(42293),r=t(50657),i=t(6514),s=t(54776),p=t(10155),u=t(15861),m=t(93946),c=t(9137),d=t(61274),k=t(50594);const g=(0,l.memo)((e=>{let{open:n,fullScreen:t=!1,title:a,maxWidth:s="md",onClose:g,children:v}=e;const[h,f]=(0,l.useState)(t),y=(0,l.useCallback)((()=>{f((e=>!e))}),[]);return l.createElement(r.Z,{open:n,onClose:g,fullScreen:h,TransitionComponent:b,maxWidth:s},l.createElement(o.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(u.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:y,style:{color:"white"}},h?l.createElement(d.Z,null):l.createElement(c.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:g,style:{color:"white"}},l.createElement(k.Z,null)))),l.createElement(i.Z,null,v))})),b=l.forwardRef((function(e,n){return l.createElement(s.Z,(0,a.Z)({direction:"up",ref:n},e))}))},39511:(e,n,t)=>{t.d(n,{b:()=>r});var a=t(67294),l=t(83321),o=t(32102);const r=(0,a.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:r=n,variant:i="outlined",maxWidth:s,useOriginalText:p=!0,children:u}=e;const[m,c]=(0,a.useState)(!1),d=(0,a.useCallback)((e=>{c(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),k=(0,a.useCallback)((()=>{c(!1)}),[]),g=p?{textTransform:"none"}:{};return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:d,variant:i,size:"small",style:g},n),a.createElement(o.s,{open:m,onClose:k,title:r,maxWidth:s,fullScreen:t},u))}))},28386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(83117),l=(t(67294),t(3905)),o=t(65488),r=t(85162),i=t(39511);const s={sidebar_position:5,title:"\u6700\u7ec8\u4f7f\u7528"},p=void 0,u={unversionedId:"quick-view/get-started/usage",id:"quick-view/get-started/usage",title:"\u6700\u7ec8\u4f7f\u7528",description:"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/usage.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/usage",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/get-started/usage.mdx",tags:[],version:"current",lastUpdatedAt:1722888007,formattedLastUpdatedAt:"2024\u5e748\u67085\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6700\u7ec8\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u751f\u6210\u4ee3\u7801",permalink:"/jimmer-doc/zh/docs/quick-view/get-started/generate-code"},next:{title:"\u6807\u51c6\u4f8b\u5b50",permalink:"/jimmer-doc/zh/docs/quick-view/standard-demo"}},m={},c=[{value:"SqlClient",id:"sqlclient",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u4fdd\u5b58",id:"\u4fdd\u5b58",level:2},{value:"\u4fdd\u5b58\u77ed\u5173\u8054",id:"\u4fdd\u5b58\u77ed\u5173\u8054",level:3},{value:"\u4fdd\u5b58\u957f\u5173\u8054",id:"\u4fdd\u5b58\u957f\u5173\u8054",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:2}],d={toc:c};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u7684\u4e24\u79cd\u7528\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Jimmer\u7684Spring Boot Starter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684SqlClient"))),(0,l.kt)("p",null,"Jimmer\u5177\u5907\u5b8c\u5584\u7684\u914d\u5957\u4f8b\u5b50\u9879\u76ee\uff0c\u5173\u4e8eJimmer\u4e4bSpring Boot Starter\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003\u4f8b\u5b50\uff1b\u672c\u6587\u8ba8\u8bba\u5728\u4e0d\u4f7f\u7528Spring\u7684\u524d\u63d0\u4e0b\uff0c\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42\u7684sqlClient\u3002"),(0,l.kt)("h2",{id:"sqlclient"},"SqlClient"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SqlClient"),"\u662fJimmer\u4e2d\u6700\u5e95\u5c42\u7684API"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.JSqlClient")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.kt.KSqlClient"))),(0,l.kt)("p",null,"\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8be5\u7c7b\u578b\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5168\u5c40\u53d8\u91cf\u662fJimmer\u6240\u6709ORM\u884c\u4e3a\u7684Api\u5165\u53e3\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../configuration/multi-datasources"},"\u591a\u6570\u636e\u6e90"),"\u9700\u8981\u521b\u5efa\u591a\u4e2a\u5168\u5c40\u5bf9\u8c61\u3002\u7136\u800c\uff0c\u6211\u4eec\u8fd9\u91cc\u8ba8\u8bba\u7684\u662f\u5355\u6570\u636e\u6e90\u8fd9\u79cd\u6700\u5e38\u89c1\u7684\u60c5\u51b5\uff0c\u4e00\u4e2a\u5168\u5c40\u5bf9\u8c61\u8db3\u591f\u3002")),(0,l.kt)("p",null,"\u7531\u4e8e\u91c7\u7528\u4e86Jimmer\u7684Spring Boot Starter\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216",(0,l.kt)("inlineCode",{parentName:"em"},"application.properties"),")")," \u6307\u5b9a\u5982\u4e0b\u914d\u7f6e"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    #highlight-next-line\n    language: kotlin // This is important for kotlin\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n")))),(0,l.kt)("p",null,"Jimmer\u7684Spring Boot Starter\u4f1a\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u5168\u5c40\u5bf9\u8c61"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  \u6ce8\u610f\uff0c\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u4e3a\u4e86\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient"),"\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),"\uff0c\u9700\u8981\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.language = kotlin"),"\u3002")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u76f4\u63a5\u6ce8\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient"),"\u7c7b\u578b\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u672c\u6587\u7684\u540e\u7eed\u4ee3\u7801\u4f1a\u5047\u8bbe\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient"),"\u53d8\u91cf\u5e76\u4f7f\u7528\u5b83\uff0c\u4f46\u4e0d\u4f1a\u7ed9\u4e88\u89e3\u91ca\uff0c\u56e0\u4e3a\u8fd9\u91cc\u5df2\u7ecf\u7ed9\u51fa\u4e86\u8be6\u7ec6\u7684\u89e3\u91ca\u3002")),(0,l.kt)("h2",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.model.repository;\n\nimport org.babyfish.jimmer.sql.JSqlClient;\nimport org.babyfish.jimmer.sql.fetcher.Fetcher;\nimport org.babyfish.jimmer.Page;\n\nimport com.example.model.Book;\nimport com.example.model.BookTable;\n\npublic class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    public Page<Book> findBooks(\n\n            int pageIndex, // \u4ece0\u5f00\u59cb\n            int pageSize,\n            \n            @Nullable Fetcher<Book> fetcher,\n\n            // \u4f8b\u5982: "name asc, edtion desc"\n            @Nullable String sortCode,\n            \n            @Nullable String name,\n            @Nullable BigDecimal minPrice,\n            @Nullable BigDecimal maxPrice,\n            @Nullable String storeName,\n            @Nullable String storeWebsite,\n            @Nullable String authorName\n    ) {\n        return sqlClient\n                .createQuery(T)\n                .where(T.name().ilikeIf(name))\n                .where(T.price().betweenIf(minPrice, maxPrice))\n                .where(T.store().name().ilikeIf(storeName))\n                .where(T.store().website().ilikeIf(storeWebsite))\n                .where(\n                        T.authors(author ->\n                                Predicate.or(\n                                        author.firstName().ilikeIf(authorName),\n                                        author.lastName().ilikeIf(authorName)\n                                )\n                        )\n                )\n                .where(T.authors(author -> author.gender().eqIf(authorGender)))\n                .orderBy(\n                        Order.makeOrders(\n                                T,\n                                sortCode != null ?\n                                        sortCode :\n                                        "name asc, edition desc"\n                        )\n                )\n                .select(\n                    T.fetch(fetcher)\n                )\n                .fetchPage(pageIndex, pageSize);\n    }\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.model.repository\n\nimport org.babyfish.jimmer.sql.kt.KSqlClient\nimport org.babyfish.jimmer.sql.fetcher.Fetcher\nimport org.babyfish.jimmer.Page\n\nimport com.example.model.*\n\nclass BookRepository {\n\n    fun findBooks(\n        \n        pageIndex: Int, // \u4ece0\u5f00\u59cb\n        pageSize: Int = 10,\n\n        fetcher: Fetcher<Book>? = null,\n\n        sortCode: String = "name asc, edition desc",\n\n        name: String? = null,\n        minPrice: BigDecimal? = null,\n        maxPrice: BigDecimal? = null,\n        storeName: String? = null,\n        storeWebsite: String? = null,\n        authorName: String? = null,\n        authorGender: Gender? = null\n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {\n                    or(\n                        firstName `ilike?` authorName,\n                        lastName `ilike?` authorName \n                    )\n                }\n                where += table.authors { gender `eq?` authorGender }\n                orderBy(table.makeOrders(sortCode))\n                select(\n                    table.fetch(fetcher)\n                )\n            }\n            .fetchPage(pageIndex, pageSize)\n}\n')))),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u5229\u7528\u5404\u79cd\u53c2\u6570\u7684\u6392\u5217\u7ec4\u5408\uff0c\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u67e5\u8be2 ",(0,l.kt)("em",{parentName:"li"},"(\u5305\u62ec\u52a8\u6001\u8868\u8fde\u63a5\uff0c\u9690\u5f0f\u5b50\u67e5\u8be2)")),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u6392\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u9875\u67e5\u8be2")),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,l.kt)("h2",{id:"\u4fdd\u5b58"},"\u4fdd\u5b58"),(0,l.kt)("h3",{id:"\u4fdd\u5b58\u77ed\u5173\u8054"},"\u4fdd\u5b58\u77ed\u5173\u8054"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4efb\u610f\u6269\u5c55\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"dto"),"\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u5176\u4ee3\u7801\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export com.example.model.Book\n    -> package com.example.model.dto\n\ninput BookInput {\n    #allScalars(this)\n    id(store) // as storeId\n    id(authors) as authorIds\n}\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\uff0c\u751f\u6210\u57fa\u4e8eJava/Kotlin\u5b9a\u4e49\u7684DTO\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.model.dto.BookInput")),(0,l.kt)(i.b,{buttonText:"\u67e5\u770b\u751f\u6210\u7684\u4ee3\u7801",title:"\u7f16\u8bd1\u540e\u751f\u6210\u7684BookInput",mdxType:"ViewMore"},(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package package com.example.model.dto;\n\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookInput(\n    val id: Long? = null,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()\n) : Input<Book> {\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5b9e\u4f53\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u4e0d\u5141\u8bb8\u4e3anull\uff0c\u4f46\u662f\uff0c\u8fd9\u91ccDTO\u7c7b\u578b\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u5374\u88ab\u5141\u8bb8\u4e3anull\uff0c\n\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../../object/view/dto-language#32-input%E7%89%B9%E6%9C%89%E5%8A%9F%E8%83%BD"},"DTO\u8bed\u8a00/3.2. Input\u7279\u6709\u529f\u80fd")))),"\uff0c\u7136\u540e\u4fee\u6539`BookRepository`",(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public long saveBook(BookInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .getId();\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    fun saveBook(input: BookInput): Long =\n        sqlClient\n            .save(input)\n            .modifiedEntity\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .id\n}\n")))),(0,l.kt)("h3",{id:"\u4fdd\u5b58\u957f\u5173\u8054"},"\u4fdd\u5b58\u957f\u5173\u8054"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4efb\u610f\u6269\u5c55\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"dto"),"\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u5176\u4ee3\u7801\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export com.example.model.BookStore\n    -> package com.example.model.dto\n\ninput CompositeBookStoreInput {\n    #allScalars(this)\n    books {\n        #allScalars(this)\n        -id\n    }\n}\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\uff0c\u751f\u6210\u57fa\u4e8eJava/Kotlin\u5b9a\u4e49\u7684DTO\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.model.dto.CompositeBookStoreInput")),(0,l.kt)(i.b,{buttonText:"\u67e5\u770b\u751f\u6210\u7684\u4ee3\u7801",title:"\u7f16\u8bd1\u540e\u751f\u6210\u7684CompositeBookStoreInput",mdxType:"ViewMore"},(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package package com.example.model.dto;\n\npublic class CompositeBookStoreInput implements Input<BookStore> {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    @Nullable\n    private String website;\n\n    private List<TargetOf_books> books;\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public static class TargetOf_books implements Input<Book> {\n\n        private String name;\n\n        private int edition;\n\n        private BigPrice price;\n\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CompositeBookStoreInput(\n    val id: Long? = null,\n    val name: String,\n    val website: String? = null,\n    val books: List<TargetOf_books> = emptyList()\n) : Input<BookStore> {\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    class TargetOf_books(\n        val name: String,\n        val edition: Int,\n        val price: BigDecimal\n    ) : Input<Book> {\n        ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n    }\n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5b9e\u4f53\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.id"),"\u4e0d\u5141\u8bb8\u4e3anull\uff0c\u4f46\u662f\uff0c\u8fd9\u91ccDTO\u7c7b\u578b\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"CompositeBookStoreInput.id"),"\u5374\u88ab\u5141\u8bb8\u4e3anull\uff0c\n\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../../object/view/dto-language#32-input%E7%89%B9%E6%9C%89%E5%8A%9F%E8%83%BD"},"DTO\u8bed\u8a00/3.2. Input\u7279\u6709\u529f\u80fd")))),"\uff0c\u7136\u540e\u521b\u5efa`BookStoreRepository`",(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookStoreRepository {\n\n    public long saveBookStore(CompositeBookStoreInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .getId();\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookStoreRepository {\n\n    fun saveBookStore(input: CompositeBookStoreInput): Long =\n        sqlClient\n            .save(input)\n            .modifiedEntity\n            // \u5982\u679c`input.id`\u4e3anull\uff0c\u8fd4\u56de\u81ea\u52a8\u5206\u914d\u7684id\n            .id\n}\n")))),(0,l.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,l.kt)("p",null,"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    public void deleteBook(long id) {\n        sqlClient.deleteById(Book.class, id);\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookRepository {\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n\n    fun deleteBook(id: Long) {\n        sqlClient.deleteById(Book::class, id)\n    }\n}\n")))))}k.isMDXComponent=!0}}]);