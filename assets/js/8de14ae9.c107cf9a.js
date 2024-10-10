"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),l=n(34334),o=n(72389),r=n(67392),p=n(7094),s=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:h,className:k}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,r.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,p.U)(),[T,I]=(0,i.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&f.some((t=>t.value===e))&&I(e)}const j=e=>{const t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==T&&(x(t),I(a),null!=h&&v(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},89887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),l=n(65488),o=n(85162);const r={sidebar_position:4,title:"Handle Null Values"},p=void 0,s={unversionedId:"mutation/save-command/input-dto/null-handling",id:"mutation/save-command/input-dto/null-handling",title:"Handle Null Values",description:"Input DTO is used for data input, so it provides powerful control over nullable properties in the objects submitted by the client, and standardizes this capability.",source:"@site/docs/mutation/save-command/input-dto/null-handling.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/null-handling",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/null-handling",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/null-handling.mdx",tags:[],version:"current",lastUpdatedAt:1728479357,formattedLastUpdatedAt:"Oct 9, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Handle Null Values"},sidebar:"tutorialSidebar",previous:{title:"Using DTO Language",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang"},next:{title:"Using MapStruct",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/mapstruct"}},d={},u=[{value:"Null-related Issues in Data input",id:"null-related-issues-in-data-input",level:2},{value:"Review: Directly Saving Entity Objects",id:"review-directly-saving-entity-objects",level:3},{value:"Issues Faced by Input DTO",id:"issues-faced-by-input-dto",level:3},{value:"4 Ways to Handle Nullable Properties",id:"4-ways-to-handle-nullable-properties",level:2},{value:"1. fixed",id:"1-fixed",level:3},{value:"2. static",id:"2-static",level:3},{value:"3. dynamic",id:"3-dynamic",level:3},{value:"4. fuzzy",id:"4-fuzzy",level:3},{value:"Higher-Level Configurations",id:"higher-level-configurations",level:2},{value:"Caveats",id:"caveats",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input DTO is used for data input, so it provides powerful control over nullable properties in the objects submitted by the client, and standardizes this capability."),(0,i.kt)("h2",{id:"null-related-issues-in-data-input"},"Null-related Issues in Data input"),(0,i.kt)("h3",{id:"review-directly-saving-entity-objects"},"Review: Directly Saving Entity Objects"),(0,i.kt)("p",null,"One of the most important features of Jimmer entities is the strict distinction between unknown data ",(0,i.kt)("em",{parentName:"p"},"(not specifying object properties)")," and no data ",(0,i.kt)("em",{parentName:"p"},"(setting object properties to null)"),"."),(0,i.kt)("p",null,"Let's temporarily set aside the concept of Input DTO and review the differences when directly saving data using Jimmer entities."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting nullable property to null"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setId(12L);\n    draft.setName("TURING");\n    // highlight-next-line\n    draft.setStoreId(null);\n});\nsqlClient.update(book);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    id = 12L\n    name = "TURING"\n    // highlight-next-line\n    storeId = null\n}\nsqlClient.update(book);\n')))),(0,i.kt)("p",{parentName:"li"},"The following SQL is generated:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    NAME = ?, /* TURING */\n    // highlight-next-line\n    STORE_ID = ? /* <null: long> */\nwhere\n    ID = ? /* 12 */`\n")),(0,i.kt)("p",{parentName:"li"},"As you can see, by explicitly setting the object's property to null and executing the save command with an update operation,\nthe value in the database will be updated to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not specifying nullable property at all"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setId(12L);\n    draft.setName("TURING");\n    // highlight-next-line\n    // `storeId` is not specified\n});\nsqlClient.update(book);\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    id = 12L\n    name = "TURING"\n    // highlight-next-line\n    // `storeId` is not specified\n}\nsqlClient.update(book);\n')))),(0,i.kt)("p",{parentName:"li"},"The following SQL is generated:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    NAME = ? /* TURING */\n    // highlight-next-line\n    /* `STORE_ID` is not updated */\nwhere\n    ID = ? /* 12 */`\n")),(0,i.kt)("p",{parentName:"li"},"As you can see, by not setting the object's property and executing the save command with an update operation,\nthe value in the database will not be updated."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This distinction is very important."),(0,i.kt)("p",{parentName:"admonition"},"In the subsequent content of this article, we will no longer discuss what SQL statements the ORM generated\nbecause we only need to focus on what the entity object obtained from the conversion of the Input DTO is.")),(0,i.kt)("h3",{id:"issues-faced-by-input-dto"},"Issues Faced by Input DTO"),(0,i.kt)("p",null,"Now, let's define an Input DTO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="src/main/dto/Book.dto"'},"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    id(store)\n}\n")),(0,i.kt)("p",null,"For more details on the DTO language, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"relevant chapter"),". Here, we focus on the Java/Kotlin code automatically generated by the Jimmer pre-compiler based on this DTO code."),(0,i.kt)("p",null,"The generated code is as follows:"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookUpdateInput.java"',title:'"BookUpdateInput.java"'},'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookUpdateInput implements Input<Book> {\n\n    private long id;\n\n    private String name;\n\n    // highlight-next-line\n    @Nullable\n    private Long storeId;\n\n    @Override\n    public Book toEntity() {\n        ...omitted...\n    }\n\n    ...other members omitted...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookUpdateInput.kt"',title:'"BookUpdateInput.kt"'},'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookUpdateInput(\n    val id: Long,\n    val name: String,\n    // highlight-next-line\n    val storeId: Long? = null\n) {\n\n    override fun toEntity(): Book = ...omitted...\n\n    ...other members omitted...\n}\n')))),(0,i.kt)("p",null,"In the original entity, the associated property ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," is nullable. The DTO code does not change this here, so in the generated classes, the field ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," is also nullable."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookUpdateInput")," object uploaded by the user is null, is the user's intention to update the corresponding foreign key ",(0,i.kt)("inlineCode",{parentName:"p"},"STORE_ID")," in the database to null, or not to update it at all?"),(0,i.kt)("p",null,"In fact, both of these intentions are common. For a long time, developers have been very casual about the conventions for these two behaviors, and even if the API documentation mentions such details, the format is also very casual. This has led to difficulties in communication and understanding and has caused lasting damage to the industry."),(0,i.kt)("p",null,"Input DTO provides a standardized definition for this issue, aiming to handle different intentions in a standardized manner."),(0,i.kt)("h2",{id:"4-ways-to-handle-nullable-properties"},"4 Ways to Handle Nullable Properties"),(0,i.kt)("p",null,"To solve the problem raised above, the ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/dto-language"},"DTO language")," specifies that if a DTO property satisfies both of the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is defined in an input type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It allows null values"))),(0,i.kt)("p",null,"Then, a modifier representing the null handling mode can be added to the DTO property: it can be ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"fuzzy"),"."),(0,i.kt)("p",null,"For convenience in the subsequent discussion, let's assume that the following Web Controller exists:"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class BookController {\n\n    @PutMapping("/book")\n    public void update(\n        // highlight-next-line\n        @RequestBody BookUpdateInput input\n    ) {\n        Book book = input.toEntity();\n        System.out.println(book);\n        ...subsequent code omitted...\n    }\n\n    ...other members omitted...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@RestController\nclass BookController {\n\n    @PutMapping("/book")\n    fun update(\n        // highlight-next-line\n        @RequestBody input: BookUpdateInput\n    ) {\n        val book = input.toEntity()\n        pirntln(book)\n        ...subsequent code omitted...\n    }\n\n    ...other members omitted...\n}\n')))),(0,i.kt)("p",null,"Here, we convert the Input DTO object uploaded by the user into a Jimmer entity and print it out."),(0,i.kt)("p",null,"We only need to focus on the print result, as mentioned earlier, we only need to focus on what the entity object obtained from the conversion of the Input DTO is, and we do not need to discuss what SQL statements the ORM will generate."),(0,i.kt)("p",null,"Therefore, the subsequent code is not important and is omitted."),(0,i.kt)("h3",{id:"1-fixed"},"1. fixed"),(0,i.kt)("p",null,"DTO code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="src/main/dto/Book.dto"'},"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    fixed id(store)\n}\n")),(0,i.kt)("p",null,"This mode can also be called the super static mode."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It does not allow the user to submit an ",(0,i.kt)("inlineCode",{parentName:"p"},"Input DTO")," without specifying certain properties. Even if they want a property to be null, they need to explicitly specify it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the property of the Input DTO is null, the corresponding property of the obtained Jimmer entity object will also be set to null, effectively modifying the corresponding field in the database to null."))),(0,i.kt)("p",null,"Two ways for the client to submit data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO with the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property set to null"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line  \n    \"storeId\": null\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will update the corresponding field in the database to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO without the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}' \n")),(0,i.kt)("p",{parentName:"li"},"This request will be rejected, HTTP error code 400, parameter error. If you check the Java log, you will see the following error:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'Resolved [org.springframework.http.converter.HttpMessageNotReadableException:\nJSON parse error: Cannot construct instance of\n`org.doc.j.model.dto.BookUpdateInput$Builder`,\nproblem: An object whose type is "org.doc.j.model.dto.BookUpdateInput"\ncannot be deserialized by Jackson.\nThe current type is fixed input DTO so that\nall JSON properties must be specified explicitly,\n# highlight-next-line\nhowever, the property "storeId" is not specified by JSON explicitly.\nPlease either explicitly specify the property as null in the JSON,\nor specify the current input properties as static, dynamic or fuzzy\nin the DTO language]\n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If developer use the ",(0,i.kt)("a",{parentName:"p",href:"../../../client/api"},"Automatic TypeScript Generation")," feature in Jimmer, the generated typeScript code will require web developers to provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property for the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookUpdateInput")," object, otherwise client code cannot be compiled successfully.")),(0,i.kt)("h3",{id:"2-static"},"2. static"),(0,i.kt)("p",null,"DTO code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="src/main/dto/Book.dto"'},"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    static id(store)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When submitting an ",(0,i.kt)("inlineCode",{parentName:"p"},"Input DTO"),", the user can either set the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property to null or not specify it at all.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Regardless of the user's choice, the behavior remains the same: the corresponding property of the obtained Jimmer entity object will definitely be set to null, effectively modifying the corresponding field in the database to null."))),(0,i.kt)("p",null,"Two ways for the client to submit data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO with the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property set to null"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will update the corresponding field in the database to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO without the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will update the corresponding field in the database to null."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The effects of the two operations are the same, and the final effect is only affected by the DTO shape, regardless of whether the user specified the DTO property or not.")),(0,i.kt)("h3",{id:"3-dynamic"},"3. dynamic"),(0,i.kt)("p",null,"DTO code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="src/main/dto/Book.dto"'},"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    dynamic id(store)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user chooses to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the DTO to null, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the final obtained Jimmer entity object will also be null, effectively modifying the corresponding field in the database to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user does not set the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the DTO at all, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the final obtained Jimmer entity object will also not be set, so the corresponding field in the database will not be updated."))),(0,i.kt)("p",null,"Two ways for the client to submit data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO with the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property set to null"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will update the corresponding field in the database to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO without the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will not update the corresponding field in the database."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The two ways of submitting data correspond to two completely different behaviors, suitable for professional client teams to have flexible control over the service behavior.")),(0,i.kt)("h3",{id:"4-fuzzy"},"4. fuzzy"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This mode sacrifices functionality for conservativeness and safety, and is the only mode with incomplete functionality.")),(0,i.kt)("p",null,"DTO code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:'language-title="src/main/dto/Book.dto"'},"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    fuzzy id(store)\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the user sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the DTO object to a non-null value, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the final obtained Jimmer entity object will be set accordingly, effectively modifying the corresponding field in the database to the specified value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Otherwise ",(0,i.kt)("em",{parentName:"p"},"(whether the ",(0,i.kt)("inlineCode",{parentName:"em"},"storeId")," property of the DTO object is set to null or not specified at all)"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property of the final obtained Jimmer entity object will not be set, so the corresponding field in the database will not be updated."))),(0,i.kt)("p",null,"Three ways for the client to submit data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO with the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property set to null"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will not update the corresponding field in the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO without the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n')),(0,i.kt)("p",{parentName:"li"},"That is, subsequent operations will not update the corresponding field in the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submit an Input DTO with the ",(0,i.kt)("inlineCode",{parentName:"p"},"storeId")," property set to a non-null value"),(0,i.kt)("p",{parentName:"li"},"The previous two ways cannot modify the corresponding field in the database unless a non-null value is specified, as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": 2\n}'\n")),(0,i.kt)("p",{parentName:"li"},"The print result ",(0,i.kt)("em",{parentName:"p"},"(the final Jimmer entity object obtained)")," is as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":3\n}\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This mode sacrifices the ability to modify the corresponding field in the database to null in exchange for absolute conservativeness and safety.\nIt is particularly suitable for client teams with less experience.")),(0,i.kt)("h2",{id:"higher-level-configurations"},"Higher-Level Configurations"),(0,i.kt)("p",null,"In the examples above, the keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"fuzzy")," were used to modify the nullable properties of the Input DTO."),(0,i.kt)("p",null,"Field-level control is the most fine-grained. However, if there are many nullable properties in the Input DTO, configuring them one by one may be cumbersome."),(0,i.kt)("p",null,"Jimmer provides configuration methods with a broader scope of influence:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input type level"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"// highlight-next-line\ndynamic input XxxInput {\n    fixed nullableProp1\n    static nullableProp2\n    // highlight-next-line\n    nullableProp3\n    fuzzy nullableProp4\n    // highlight-next-line  \n    nullableProp5\n}\n")),(0,i.kt)("p",{parentName:"li"},"Here, the null handling mode is not declared for ",(0,i.kt)("inlineCode",{parentName:"p"},"nullableProp3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nullableProp5"),", and they will share the configuration at the input type level ",(0,i.kt)("em",{parentName:"p"},"(in this case, ",(0,i.kt)("inlineCode",{parentName:"em"},"dynamic"),")"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Precompiler level"),(0,i.kt)("p",{parentName:"li"},"If no configuration is found at the input type level, refer to the global configuration parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"jimmer.dto.defaultNullableInputModifier")," of the precompiler ",(0,i.kt)("em",{parentName:"p"},"(for Java, it is APT; for Kotlin, it is KSP)"),"."),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java_maven",label:"Java(Maven)",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.13.0</version>\n    <configuration>\n        <compilerArgs>\n            \x3c!--highlight-next-line--\x3e\n            <arg>-Ajimmer.dto.defaultNullableInputModifier=fixed</arg>\n        </compilerArgs>\n    </configuration>\n</plugin>\n"))),(0,i.kt)(o.Z,{value:"java_gradle",label:"Java(Gradle)",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"gradle",gradle:!0},'tasks.withType<JavaCompile>().configureEach {\n    // highlight-next-line\n    options.compilerArgs.add("-Ajimmer.dto.defaultNullableInputModifier=fixed")\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin(Gradle.kts)",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"gradle",gradle:!0},'ksp {\n    // highlight-next-line\n    arg("jimmer.dto.defaultNullableInputModifier", "fixed")\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Final default mode"),(0,i.kt)("p",{parentName:"li"},"If no configuration is provided at the precompiler level either, the final default is ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),"."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Configurations at different levels may conflict, and the priorities among them are:"),(0,i.kt)("p",{parentName:"admonition"},"Input property level config ",">"," Input type level config ",">"," Precompiler global config ",">"," Final default ",(0,i.kt)("inlineCode",{parentName:"p"},"static"))),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," modes, Jimmer requires the server-side to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson")," for deserialization.")),(0,i.kt)("p",null,"Therefore, if you plan to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," mode, please:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"@RequestBody")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If you carefully look at the examples in this article, you will notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"@RequestBody")," was used there."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not replace the Jackson Message Converter enabled by default in Spring Boot."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"In fact, not only the Input DTOs using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fixed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," mode discussed in this article have this requirement; if the user needs to use the serialization/deserialization of Jimmer entities themselves, Jackson is also required."),(0,i.kt)("p",{parentName:"blockquote"},"Jackson is carefully designed to strike the perfect balance between functionality and performance. Therefore, Jimmer regards Jackson as an essential infrastructure.")))))}c.isMDXComponent=!0}}]);