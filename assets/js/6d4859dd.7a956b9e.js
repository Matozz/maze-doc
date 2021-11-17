"use strict";(self.webpackChunkmaze_doc=self.webpackChunkmaze_doc||[]).push([[805],{6852:function(e,l,t){t.r(l),t.d(l,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return x},toc:function(){return c},Controlls:function(){return m},default:function(){return f}});var i=t(7462),n=t(3366),a=t(7294),d=t(3905),r=t(6923),o=t(321),s=["components"],p={sidebar_position:2},u="Text Field",x={unversionedId:"components/TextField",id:"components/TextField",isDocsHomePage:!1,title:"Text Field",description:"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.",source:"@site/docs/components/TextField.mdx",sourceDirName:"components",slug:"/components/TextField",permalink:"/docs/components/TextField",editUrl:"https://github.com/matozz/maze-doc/docs/components/TextField.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/components/Button"},next:{title:"Dialog",permalink:"/docs/components/Dialog"}},c=[{value:"Basic TextField",id:"basic-textfield",children:[],level:2},{value:"Sizes",id:"sizes",children:[],level:2},{value:"Input Behaviors",id:"input-behaviors",children:[],level:2},{value:"Multiline",id:"multiline",children:[],level:2},{value:"Color",id:"color",children:[],level:2},{value:"Controlls",id:"controlls",children:[],level:2},{value:"Helper text",id:"helper-text",children:[],level:2},{value:"Error",id:"error",children:[],level:2}],m=function(){var e=(0,a.useState)("Hello World"),l=e[0],t=e[1];return(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"outlined",label:"Controlled",value:l,onChange:function(e){return t(e.target.value)},mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Uncontrolled",defaultValue:"foo",mdxType:"TextField"})))},T={toc:c,Controlls:m};function f(e){var l=e.components,t=(0,n.Z)(e,s);return(0,d.kt)("wrapper",(0,i.Z)({},T,t,{components:l,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"text-field"},"Text Field"),(0,d.kt)("p",null,"Text fields allow users to enter text into a UI. They typically appear in forms and dialogs."),(0,d.kt)("h2",{id:"basic-textfield"},"Basic TextField"),(0,d.kt)("p",null,"The ",(0,d.kt)("inlineCode",{parentName:"p"},"TextField")," wrapper component is a complete form control including a label, input, and help text. It comes with three variants: filled (default), outlined, and standard."),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"filled",label:"Filled",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Outlined",mdxType:"TextField"}))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField variant="filled" label="Filled" />\n<TextField variant="outlined" label="Outlined" />\n')),(0,d.kt)("h2",{id:"sizes"},"Sizes"),(0,d.kt)("p",null,"Fancy smaller inputs? Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"size")," prop."),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"filled",size:"small",label:"SMALL",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"filled",size:"medium",label:"MEDIUM",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"filled",size:"large",label:"LARGE",mdxType:"TextField"})),(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"outlined",size:"small",label:"SMALL",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",size:"medium",label:"MEDIUM",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",size:"large",label:"LARGE",mdxType:"TextField"})))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={2}>\n  <TextField variant="filled" size="small" label="SMALL" />\n  <TextField variant="filled" size="medium" label="MEDIUM" />\n  <TextField variant="filled" size="large" label="LARGE" />\n</Grid>\n<Grid spacing={2}>\n  <TextField variant="outlined" size="small" label="SMALL" />\n  <TextField variant="outlined" size="medium" label="MEDIUM" />\n  <TextField variant="outlined" size="large" label="LARGE" />\n</Grid>\n')),(0,d.kt)("h2",{id:"input-behaviors"},"Input Behaviors"),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"filled",size:"medium",label:"Required",required:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"filled",label:"Disabled",defaultValue:"Hello World",disabled:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"filled",label:"Password",type:"password",autoComplete:"current-password",mdxType:"TextField"})),(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"outlined",size:"medium",label:"Required",required:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Disabled",defaultValue:"Hello World",disabled:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Password",type:"password",autoComplete:"current-password",mdxType:"TextField"})))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={2}>\n  <TextField variant="filled" size="medium" label="Required" required />\n  <TextField\n    variant="filled"\n    label="Disabled"\n    defaultValue="Hello World"\n    disabled\n  />\n  <TextField\n    variant="filled"\n    label="Password"\n    type="password"\n    autoComplete="current-password"\n  />\n</Grid>\n<Grid spacing={2}>\n  <TextField variant="outlined" size="medium" label="Required" required />\n  <TextField\n    variant="outlined"\n    label="Disabled"\n    defaultValue="Hello World"\n    disabled\n  />\n  <TextField\n    variant="outlined"\n    label="Password"\n    type="password"\n    autoComplete="current-password"\n    >\n</Grid>\n')),(0,d.kt)("h2",{id:"multiline"},"Multiline"),(0,d.kt)("p",null,"The ",(0,d.kt)("inlineCode",{parentName:"p"},"multiline")," prop transforms the text field into a ",(0,d.kt)("inlineCode",{parentName:"p"},"<textarea>")," element. Unless the rows prop is set, the height of the text field dynamically matches its content (using ",(0,d.kt)("inlineCode",{parentName:"p"},"TextareaAutosize"),"). You can use the ",(0,d.kt)("inlineCode",{parentName:"p"},"row")," props to specify the rows."),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"filled",label:"Multiline",multiline:!0,rows:2,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"filled",label:"Resizable Multiline",defaultValue:"Hello World",multiline:!0,resize:!0,mdxType:"TextField"})),(0,d.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"outlined",label:"Multiline",multiline:!0,rows:2,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Resizable Multiline",defaultValue:"Hello World",multiline:!0,resize:!0,mdxType:"TextField"})))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={2}>\n  <TextField variant="filled" label="Multiline" multiline rows={2} />\n  <TextField\n    variant="filled"\n    label="Resizable Multiline"\n    defaultValue="Hello World"\n    multiline\n    resize\n  />\n</Grid>;\n<Grid spacing={2}>\n  <TextField variant="outlined" label="Multiline" multiline rows={2} />\n  <TextField\n    variant="outlined"\n    label="Resizable Multiline"\n    defaultValue="Hello World"\n    multiline\n    resize\n  />\n</Grid>;\n')),(0,d.kt)("h2",{id:"color"},"Color"),(0,d.kt)("p",null,"The ",(0,d.kt)("inlineCode",{parentName:"p"},"color")," prop changes the highlight color of the text field when focused."),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"filled",label:"Filled success",defaultValue:"Success",color:"#2e7d32",focused:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Outlined waring",defaultValue:"Warning",color:"#ed6c02",focused:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Outlined error",defaultValue:"Error",color:"#d32f2f",focused:!0,mdxType:"TextField"}))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={2}>\n  <TextField\n    variant="filled"\n    label="Filled success"\n    defaultValue="Success"\n    color="#2e7d32"\n    focused\n  />\n  <TextField\n    variant="outlined"\n    label="Outlined waring"\n    defaultValue="Warning"\n    color="#ed6c02"\n    focused\n  />\n  <TextField\n    variant="outlined"\n    label="Outlined error"\n    defaultValue="Error"\n    color="#d32f2f"\n    focused\n  />\n</Grid>\n')),(0,d.kt)("h2",{id:"controlls"},"Controlls"),(0,d.kt)("p",null,"The component can be controlled or uncontrolled."),(0,d.kt)(m,{mdxType:"Controlls"}),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'export const MyComponent = () => {\n  const [value, setValue] = useState("Hello World");\n  return (\n    <Grid spacing={2}>\n      <TextField\n        variant="outlined"\n        label="Controlled"\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n      />\n      <TextField variant="outlined" label="Uncontrolled" defaultValue="foo" />\n    </Grid>\n  );\n};\n')),(0,d.kt)("h2",{id:"helper-text"},"Helper text"),(0,d.kt)("p",null,"The helper text prop affects the height of the text field."),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.TextField,{variant:"outlined",label:"Name",helperText:"Please enter your name",mdxType:"TextField"}),(0,d.kt)(r.TextField,{variant:"outlined",label:"Name",helperText:" ",mdxType:"TextField"}))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid spacing={2}>\n  <TextField\n    variant="outlined"\n    label="Name"\n    helperText="Please enter your name"\n  />\n  <TextField variant="outlined" label="Name" helperText=" " />\n</Grid>\n')),(0,d.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notes")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"If two text fields are placed side by side, one with a helper text and one without, they will have different heights."),(0,d.kt)("p",{parentName:"div"},"This can be fixed by passing a space character to the ",(0,d.kt)("inlineCode",{parentName:"p"},"helperText")," prop"),(0,d.kt)("pre",{parentName:"div"},(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField variant="outlined" label="Name" helperText=" " />\n')))),(0,d.kt)("h2",{id:"error"},"Error"),(0,d.kt)(o.i,{mdxType:"Wrapper"},(0,d.kt)(r.Grid,{spacing:2,justifyContent:"center",mdxType:"Grid"},(0,d.kt)(r.TextField,{error:!0,variant:"filled",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",focused:!0,mdxType:"TextField"}),(0,d.kt)(r.TextField,{error:!0,variant:"outlined",label:"Error",defaultValue:"Hello World",helperText:"Incorrect entry.",focused:!0,mdxType:"TextField"}))),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n  error\n  variant="filled"\n  label="Error"\n  defaultValue="Hello World"\n  helperText="Incorrect entry."\n  focused\n/>\n<TextField\n  error\n  variant="outlined"\n  label="Error"\n  defaultValue="Hello World"\n  helperText="Incorrect entry."\n  focused\n/>\n')))}f.isMDXComponent=!0}}]);