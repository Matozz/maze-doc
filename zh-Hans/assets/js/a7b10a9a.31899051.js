"use strict";(self.webpackChunkmaze_doc=self.webpackChunkmaze_doc||[]).push([[648],{2409:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return k}});var a=e(7462),o=e(3366),i=(e(7294),e(3905)),r=e(6923),u=e(321),d=["components"],l={sidebar_position:1},s="Button \u6309\u94ae",p={unversionedId:"components/Button",id:"components/Button",isDocsHomePage:!1,title:"Button \u6309\u94ae",description:"\u6309\u94ae\u53ef\u4ee5\u5c55\u793a\u7528\u6237\u80fd\u8fdb\u884c\u7684\u64cd\u4f5c\u3002 \u4ed6\u4eec\u901a\u5e38\u76f4\u63a5\u653e\u7f6e\u5728\u60a8\u7684\u7528\u6237\u754c\u9762\u4e2d\uff0c\u4f8b\u5982\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/components/Button.mdx",sourceDirName:"components",slug:"/components/Button",permalink:"/maze-doc/zh-Hans/docs/components/Button",editUrl:"https://github.com/matozz/maze-doc/blob/master/docs/components/Button.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u652f\u6301\u7684\u7ec4\u4ef6",permalink:"/maze-doc/zh-Hans/docs/getting-started/Supported"},next:{title:"Text Field \u6587\u672c\u5b57\u6bb5",permalink:"/maze-doc/zh-Hans/docs/components/TextField"}},c=[{value:"Basic button",id:"basic-button",children:[{value:"Text button",id:"text-button",children:[],level:3},{value:"Contained button",id:"contained-button",children:[],level:3},{value:"Outlined button",id:"outlined-button",children:[],level:3}],level:2},{value:"Handling events",id:"handling-events",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Colors",id:"colors",children:[],level:2}],m={toc:c};function k(t){var n=t.components,e=(0,o.Z)(t,d);return(0,i.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"button-\u6309\u94ae"},"Button \u6309\u94ae"),(0,i.kt)("p",null,"\u6309\u94ae\u53ef\u4ee5\u5c55\u793a\u7528\u6237\u80fd\u8fdb\u884c\u7684\u64cd\u4f5c\u3002 \u4ed6\u4eec\u901a\u5e38\u76f4\u63a5\u653e\u7f6e\u5728\u60a8\u7684\u7528\u6237\u754c\u9762\u4e2d\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dialogs \u5bf9\u8bdd\u6846"),(0,i.kt)("li",{parentName:"ul"},"Modal windows \u6a21\u6001\u7a97\u53e3"),(0,i.kt)("li",{parentName:"ul"},"Forms \u8868\u5355"),(0,i.kt)("li",{parentName:"ul"},"Cards \u5361\u7247"),(0,i.kt)("li",{parentName:"ul"},"Toolbars \u5de5\u5177\u680f")),(0,i.kt)("h2",{id:"basic-button"},"Basic button"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," comes with three variants: text, contained (default), and outlined."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"text",mdxType:"Button"},"TEXT"),(0,i.kt)(r.Button,{variant:"contained",mdxType:"Button"},"CONTAINED"),(0,i.kt)(r.Button,{variant:"outlined",mdxType:"Button"},"OUTLINED"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="text">TEXT</Button>\n<Button variant="contained">CONTAINED</Button>\n<Button variant="outlined">OUTLINED</Button>\n')),(0,i.kt)("h3",{id:"text-button"},"Text button"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://material.io/components/buttons#text-button"},"Text buttons"))," are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"text",mdxType:"Button"},"TEXT"),(0,i.kt)(r.Button,{variant:"text",disabled:!0,mdxType:"Button"},"DISABLED"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="text">TEXT</Button>\n<Button variant="text" disabled>DISABLED</Button>\n')),(0,i.kt)("h3",{id:"contained-button"},"Contained button"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://material.io/components/buttons#contained-button"},"Contained buttons"))," are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"contained",mdxType:"Button"},"CONTAINED"),(0,i.kt)(r.Button,{variant:"contained",disabled:!0,mdxType:"Button"},"DISABLED"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="contained">CONTAINED</Button>\n<Button variant="contained" disabled>DISABLED</Button>\n')),(0,i.kt)("p",null,"You can remove the elevation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"preventElevation")," prop."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"contained",preventElevation:!0,mdxType:"Button"},"CONTAINED"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="contained" preventElevation>\n  CONTAINED\n</Button>\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to customize the box-shallow of the button, don't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"preventElevation")," prop."))),(0,i.kt)("h3",{id:"outlined-button"},"Outlined button"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://material.io/components/buttons#outlined-button"},"Outlined buttons"))," are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app."),(0,i.kt)("p",null,"Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"outlined",mdxType:"Button"},"OUTLINED"),(0,i.kt)(r.Button,{variant:"outlined",disabled:!0,mdxType:"Button"},"DISABLED"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="outlined">OUTLINED</Button>\n<Button variant="outlined" disabled>DISABLED</Button>\n')),(0,i.kt)("h2",{id:"handling-events"},"Handling events"),(0,i.kt)("p",null,"All components accept an onClick handler that is applied to the root DOM element."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"contained",onClick:function(){return alert("clicked")},color:"#d32f2f",mdxType:"Button"},"Alert"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="contained" onClick={() => alert("clicked")} color="#d32f2f">\n  Alert\n</Button>\n')),(0,i.kt)("h2",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"For larger or smaller buttons, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," prop."),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:3,direction:"column",mdxType:"Grid"},(0,i.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"text",size:"small",mdxType:"Button"},"SMALL"),(0,i.kt)(r.Button,{variant:"text",size:"medium",mdxType:"Button"},"MEDIUM"),(0,i.kt)(r.Button,{variant:"text",size:"large",mdxType:"Button"},"LARGE")),(0,i.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"contained",size:"small",mdxType:"Button"},"SMALL"),(0,i.kt)(r.Button,{variant:"contained",size:"medium",mdxType:"Button"},"MEDIUM"),(0,i.kt)(r.Button,{variant:"contained",size:"large",mdxType:"Button"},"LARGE")),(0,i.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"outlined",size:"small",mdxType:"Button"},"SMALL"),(0,i.kt)(r.Button,{variant:"outlined",size:"medium",mdxType:"Button"},"MEDIUM"),(0,i.kt)(r.Button,{variant:"outlined",size:"large",mdxType:"Button"},"LARGE")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={3} direction="column">\n  <Grid spacing={2}>\n    <Button variant="text" size="small">\n      SMALL\n    </Button>\n    <Button variant="text" size="medium">\n      MEDIUM\n    </Button>\n    <Button variant="text" size="large">\n      LARGE\n    </Button>\n  </Grid>\n  <Grid spacing={2}>\n    <Button variant="contained" size="small">\n      SMALL\n    </Button>\n    <Button variant="contained" size="medium">\n      MEDIUM\n    </Button>\n    <Button variant="contained" size="large">\n      LARGE\n    </Button>\n  </Grid>\n  <Grid spacing={2}>\n    <Button variant="outlined" size="small">\n      SMALL\n    </Button>\n    <Button variant="outlined" size="medium">\n      MEDIUM\n    </Button>\n    <Button variant="outlined" size="large">\n      LARGE\n    </Button>\n  </Grid>\n</Grid>\n')),(0,i.kt)("h2",{id:"colors"},"Colors"),(0,i.kt)(u.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,i.kt)(r.Button,{variant:"contained",color:"#2e7d32",mdxType:"Button"},"Success"),(0,i.kt)(r.Button,{variant:"contained",color:"#ed6c02",mdxType:"Button"},"Warning"),(0,i.kt)(r.Button,{variant:"contained",color:"#d32f2f",mdxType:"Button"},"Alert"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button variant="contained" color="#2e7d32">Success</Button>\n<Button variant="contained" color="#ed6c02">Warning</Button>\n<Button variant="contained" color="#d32f2f">Alert</Button>\n')))}k.isMDXComponent=!0}}]);