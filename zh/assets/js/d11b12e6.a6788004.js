"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4323],{17772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var c=t(74848),i=t(28453);const r={sidebar_position:5,title:"DTO\u8f6c\u6362"},o=void 0,s={id:"object/view/index",title:"DTO\u8f6c\u6362",description:"\u5373\u4f7f\u5b9e\u4f53\u5bf9\u8c61\u652f\u6301\u4e86\u52a8\u6001\u6027\u4ee5\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u548cDTO\u4e4b\u95f4\u7684\u8f6c\u6362\u4e5f\u662f\u65e0\u6cd5\u5b8c\u5168\u907f\u514d\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/view/index.md",sourceDirName:"object/view",slug:"/object/view/",permalink:"/jimmer-doc/zh/docs/object/view/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/view/index.md",tags:[],version:"current",lastUpdatedAt:1722959029e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"DTO\u8f6c\u6362"},sidebar:"tutorialSidebar",previous:{title:"\u548cJackson\u534f\u540c",permalink:"/jimmer-doc/zh/docs/object/jackson"},next:{title:"DTO\u8bed\u8a00",permalink:"/jimmer-doc/zh/docs/object/view/dto-language"}},d={},u=[];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5373\u4f7f\u5b9e\u4f53\u5bf9\u8c61\u652f\u6301\u4e86\u52a8\u6001\u6027\u4ee5\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u548cDTO\u4e4b\u95f4\u7684\u8f6c\u6362\u4e5f\u662f\u65e0\u6cd5\u5b8c\u5168\u907f\u514d\u7684\u3002"}),"\n",(0,c.jsx)(n.p,{children:"Jimmer\u63d0\u4f9b\u52a8\u6001\u5b9e\u4f53\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u5f88\u5927\u4e00\u90e8\u5206DTO\u7206\u70b8\u95ee\u9898\u3002\u6240\u4ee5\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u5b9a\u4e49\u8f93\u51fa\u578b\u7684DTO\u7c7b\u578b\u6765\u8868\u8fbe\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5e76\u975e\u6240\u6709DTO\u7c7b\u578b\u90fd\u53ef\u4ee5\u88ab\u6d88\u706d\uff0c\u5176\u4e2d\uff0c\u8f93\u5165\u578b\u7684DTO\u5bf9\u8c61\u5f88\u96be\u53bb\u9664\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4ee5GraphQL\u4e3a\u4f8b\uff0c\u867d\u7136\u4eceoutput\u7684\u89d2\u5ea6\u8bb2\uff0c\u4e3a\u5ba2\u6237\u7aef\u8fd4\u56de\u52a8\u6001\u7684",(0,c.jsx)(n.code,{children:"GraphQLObject"}),"\u6570\u636e\uff1b\u4f46\u662f\uff0c\u4eceinput\u7684\u89d2\u5ea6\u8bb2\uff0c\u63a5\u53d7\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u9759\u6001\u7684",(0,c.jsx)(n.code,{children:"GraphQLInput"}),"\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["GraphQL\u534f\u8bae\u4e3a\u4ec0\u4e48\u5c06",(0,c.jsx)(n.code,{children:"GraphQLInput"}),"\u5b9a\u4e49\u4e3a\u9759\u6001\u7c7b\u578b\u5462\uff1f\u662f\u56e0\u4e3aAPI\u7684\u660e\u786e\u6027\u548c\u7cfb\u7edf\u7684\u5b89\u5168\u6027\u662f\u975e\u5e38\u91cd\u8981\u9700\u6c42\uff0c\u8bf7\u53c2\u8003",(0,c.jsx)(n.a,{href:"../../mutation/save-command/input-dto/problem",children:"\u52a8\u6001\u5bf9\u8c61\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u7684\u95ee\u9898"}),"\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"GraphQL\u534f\u8bae\u9762\u5bf9\u7684\u95ee\u9898\uff0cJimmer\u4e5f\u540c\u6837\u9700\u8981\u9762\u5bf9\uff0c\u5fc5\u987b\u7ed9\u51fa\u5b8c\u6574\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4f5c\u4e3a\u4e00\u4e2a\u7efc\u5408\u6027\u89e3\u51b3\u65b9\u6848\uff0cJimmer\u4e0d\u5c40\u9650\u4e8eORM\u672c\u8eab\uff0c\u800c\u662f\u4e3a\u6574\u4e2a\u9879\u76ee\u7684\u8003\u8651\uff0c\u4e3a\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u63d0\u4f9b\u4e86\u4e24\u79cd\u9014\u5f84\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"DTO\u8bed\u8a00"}),"\n",(0,c.jsx)(n.p,{children:"\u4e3aJimmer\u91cf\u8eab\u5b9a\u5236\u7684\u65b9\u6848\uff0c\u5177\u6709\u6781\u9ad8\u7684\u5f00\u53d1\u6548\u7387\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/jimmer-doc/zh/docs/object/view/dto-language",children:"DTO\u8bed\u8a00"}),"\u662f\u4e3a\u4e86\u65e0\u6cd5\u88ab\u6d88\u706d\u7684\u90a3\u90e8\u5206DTO\u7c7b\u578b\u800c\u8bbe\u8ba1\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u5b83\u4eec\u53d8\u5f97\u6781\u5176\u5ec9\u4ef7\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"MapStruct"}),"\n",(0,c.jsxs)(n.p,{children:["\u7ed3\u5408",(0,c.jsx)(n.a,{href:"https://mapstruct.org/",children:"MapStruct"}),"\u6846\u67b6\u7684\u65b9\u6848\uff0c\u80fd\u5b9e\u73b0\u4efb\u610f\u590d\u6742\u7684\u8f6c\u5316\u903b\u8f91\u3002"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var c=t(96540);const i={},r=c.createContext(i);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);