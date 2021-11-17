"use strict";(self.webpackChunkmaze_doc=self.webpackChunkmaze_doc||[]).push([[169],{7308:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return g},toc:function(){return p},Default:function(){return m},ConfirmDialog:function(){return k},ScrollDialog:function(){return D},FullScreen:function(){return T},FullWidth:function(){return x},Draggable:function(){return C},default:function(){return h}});var o=t(7462),l=t(3366),a=t(7294),i=t(3905),r=t(6923),s=t(321),u=["components"],c={sidebar_position:3},d=void 0,g={unversionedId:"components/Dialog",id:"components/Dialog",isDocsHomePage:!1,title:"Dialog",description:"Grid,",source:"@site/docs/components/Dialog.mdx",sourceDirName:"components",slug:"/components/Dialog",permalink:"/maze-doc/docs/components/Dialog",editUrl:"https://github.com/matozz/maze-doc/docs/components/Dialog.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Text Field",permalink:"/maze-doc/docs/components/TextField"},next:{title:"Switch",permalink:"/maze-doc/docs/components/Switch"}},p=[{value:"Basic dialog",id:"basic-dialog",children:[],level:2},{value:"Confirm dialog",id:"confirm-dialog",children:[],level:2},{value:"Scrolling long content",id:"scrolling-long-content",children:[],level:2},{value:"Full-screen dialogs",id:"full-screen-dialogs",children:[],level:2},{value:"Full-width dialogs",id:"full-width-dialogs",children:[],level:2},{value:"Draggable Dialog",id:"draggable-dialog",children:[],level:2}],m=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Button,{label:"OPEN BASIC DIALOG",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){console.log("Dialog Closed"),t(!1)},onBackdropClick:function(){return t(!1)},exitOnEsc:!0,mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{mdxType:"DialogTitle"},"Use Google's location service?"),(0,i.kt)(r.DialogContent,{mdxType:"DialogContent"},(0,i.kt)(r.DialogContentText,{mdxType:"DialogContentText"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"DISAGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"AGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"})))))},k=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1],o=(0,a.useState)(""),l=o[0],u=o[1],c=(0,a.useRef)(),d=(0,a.useCallback)((function(n){c.current=n.target.value}),[]);return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Grid,{spacing:2,mdxType:"Grid"},(0,i.kt)(r.Button,{label:"DJ MAG VOTE 2022",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){return console.log("Dialog Closed")},width:"350px",mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{mdxType:"DialogTitle"},"Best DJ in the world"),(0,i.kt)(r.DialogContent,{dividers:!0,mdxType:"DialogContent"},(0,i.kt)(r.RadioGroup,{name:"dj",size:"medium",orientation:"vertical",spacing:15,onChange:d,mdxType:"RadioGroup"},(0,i.kt)(r.Radio,{value:"Martin Garrix",label:"Martin Garrix",mdxType:"Radio"}),(0,i.kt)(r.Radio,{value:"Mike Williams",label:"Mike Williams",mdxType:"Radio"}),(0,i.kt)(r.Radio,{value:"Brooks",label:"Brooks",mdxType:"Radio"}))),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"CANCEL",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"SUBMIT",variant:"text",onClick:function(){u(c.current),t(!1)},mdxType:"Button"}))),(0,i.kt)(r.Label,{mdxType:"Label"},"Selection: ",l))))},D=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Button,{label:"SCROLL DIALOG",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){return console.log("Dialog Closed")},onBackdropClick:function(){return t(!1)},mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{mdxType:"DialogTitle"},"Use Google's location service?"),(0,i.kt)(r.DialogContent,{dividers:!0,mdxType:"DialogContent"},(0,i.kt)(r.DialogContentText,{mdxType:"DialogContentText"},[].concat(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n"))),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"DISAGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"AGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"})))))},T=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Button,{label:"OPEN FULL-SCREEN DIALOG",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){return console.log("Dialog Closed")},onBackdropClick:function(){return t(!1)},fullScreen:!0,mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{mdxType:"DialogTitle"},"Use Google's location service?"),(0,i.kt)(r.DialogContent,{mdxType:"DialogContent"},(0,i.kt)(r.DialogContentText,{mdxType:"DialogContentText"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"DISAGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"AGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"})))))},x=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Button,{label:"OPEN FULL-WIDTH DIALOG",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){return console.log("Dialog Closed")},onBackdropClick:function(){return t(!1)},fullWidth:!0,mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{mdxType:"DialogTitle"},"Use Google's location service?"),(0,i.kt)(r.DialogContent,{mdxType:"DialogContent"},(0,i.kt)(r.DialogContentText,{mdxType:"DialogContentText"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"DISAGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"AGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"})))))},C=function(){var n=(0,a.useState)(!1),e=n[0],t=n[1];return(0,i.kt)(a.Fragment,null,(0,i.kt)(s.i,{mdxType:"Wrapper"},(0,i.kt)(r.Button,{label:"OPEN DRAGGABLE DIALOG",variant:"outlined",onClick:function(){return t(!0)},mdxType:"Button"}),(0,i.kt)(r.Dialog,{open:e,onClose:function(){return console.log("Dialog Closed")},onBackdropClick:function(){return t(!1)},draggable:!0,dragOptions:{handle:"#title"},mdxType:"Dialog"},(0,i.kt)(r.DialogTitle,{dragFor:"title",mdxType:"DialogTitle"},"Use Google's location service?"),(0,i.kt)(r.DialogContent,{mdxType:"DialogContent"},(0,i.kt)(r.DialogContentText,{mdxType:"DialogContentText"},"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),(0,i.kt)(r.DialogActions,{mdxType:"DialogActions"},(0,i.kt)(r.Button,{label:"DISAGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"}),(0,i.kt)(r.Button,{label:"AGREE",variant:"text",onClick:function(){return t(!1)},mdxType:"Button"})))))},f={toc:p,Default:m,ConfirmDialog:k,ScrollDialog:D,FullScreen:T,FullWidth:x,Draggable:C};function h(n){var e=n.components,t=(0,l.Z)(n,u);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken."),(0,i.kt)("p",null,"Dialogs are purposefully interruptive, so they should be used sparingly."),(0,i.kt)("h2",{id:"basic-dialog"},"Basic dialog"),(0,i.kt)("p",null,"Simple dialogs can provide additional details or actions."),(0,i.kt)("p",null,"Touch mechanics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choosing an option immediately commits the option and closes the menu"),(0,i.kt)("li",{parentName:"ul"},"Touching outside of the dialog, or pressing Back ( ",(0,i.kt)("inlineCode",{parentName:"li"},"ESC")," ) keys, cancels the action and closes the dialog")),(0,i.kt)(m,{mdxType:"Default"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from "react";\nimport {\n  Button,\n  Dialog,\n  DialogTitle,\n  DialogContent,\n  DialogContentText,\n  DialogActions,\n} from "maze-ui";\n\nexport const MyDialog = () => {\n  const [open, setOpen] = useState(false);\n  return (\n    <>\n      <Button\n        label="OPEN DIALOG"\n        variant="outlined"\n        onClick={() => setOpen(true)}\n      />\n      <Dialog\n        open={open}\n        onClose={() => {\n          console.log("Dialog Closed");\n          setOpen(false);\n        }}\n        onBackdropClick={() => setOpen(false)}\n        exitOnEsc\n      >\n        <DialogTitle>{"Use Google\'s location service?"}</DialogTitle>\n        <DialogContent>\n          <DialogContentText>\n            Let Google help apps determine location. This means sending\n            anonymous location data to Google, even when no apps are running.\n          </DialogContentText>\n        </DialogContent>\n        <DialogActions>\n          <Button\n            label="DISAGREE"\n            variant="text"\n            onClick={() => setOpen(false)}\n          />\n          <Button label="AGREE" variant="text" onClick={() => setOpen(false)} />\n        </DialogActions>\n      </Dialog>\n    </>\n  );\n};\n')),(0,i.kt)("h2",{id:"confirm-dialog"},"Confirm dialog"),(0,i.kt)("p",null,"Dialogs allow users to fill out form fields."),(0,i.kt)(k,{mdxType:"ConfirmDialog"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState, useCallback, useRef } from "react";\nimport {\n  Grid,\n  Button,\n  Dialog,\n  DialogTitle,\n  DialogContent,\n  DialogContentText,\n  DialogActions,\n  Label,\n} from "maze-ui";\n\nexport const MyDialog = () => {\n  const [open, setOpen] = useState(false);\n  const [result, setResult] = useState("");\n  const resRef = useRef();\n  const handleSelect = useCallback((e) => {\n    resRef.current = e.target.value;\n  }, []);\n\n  return (\n    <>\n      <Grid spacing={2}>\n        <Button\n          label="DJ MAG VOTE 2022"\n          variant="outlined"\n          onClick={() => setOpen(true)}\n        />\n        <Dialog\n          open={open}\n          onClose={() => console.log("Dialog Closed")}\n          width="350px"\n        >\n          <DialogTitle>{"Best DJ in the world"}</DialogTitle>\n          <DialogContent dividers>\n            <RadioGroup\n              name="dj"\n              size="medium"\n              orientation="vertical"\n              spacing={15}\n              onChange={handleSelect}\n            >\n              <Radio value="Martin Garrix" label="Martin Garrix" />\n              <Radio value="Mike Williams" label="Mike Williams" />\n              <Radio value="Brooks" label="Brooks" />\n            </RadioGroup>\n          </DialogContent>\n          <DialogActions>\n            <Button\n              label="CANCEL"\n              variant="text"\n              onClick={() => setOpen(false)}\n            />\n            <Button\n              label="SUBMIT"\n              variant="text"\n              onClick={() => {\n                setResult(resRef.current);\n                setOpen(false);\n              }}\n            />\n          </DialogActions>\n        </Dialog>\n        <Label>Selection: {result}</Label>\n      </Grid>\n    </>\n  );\n};\n')),(0,i.kt)("h2",{id:"scrolling-long-content"},"Scrolling long content"),(0,i.kt)("p",null,"When dialogs become too long for the user's viewport or device, they scroll."),(0,i.kt)(D,{mdxType:"ScrollDialog"}),(0,i.kt)("h2",{id:"full-screen-dialogs"},"Full-screen dialogs"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullScreen")," prop is true, the dialog will show in full-screen."),(0,i.kt)(T,{mdxType:"FullScreen"}),(0,i.kt)("h2",{id:"full-width-dialogs"},"Full-width dialogs"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullWidth")," prop is true, the dialog will adapt to the screen maximum width."),(0,i.kt)(x,{mdxType:"FullWidth"}),(0,i.kt)("h2",{id:"draggable-dialog"},"Draggable Dialog"),(0,i.kt)("p",null,"You can create a draggable dialog by using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/mzabriskie/react-draggable"},"react-draggable")),"."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"draggable")," to enable drag behavior on whole dialog, then set the ",(0,i.kt)("inlineCode",{parentName:"p"},"dragOptions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dragFor")," to specify the components that can be dragged."),(0,i.kt)(C,{mdxType:"Draggable"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from "react";\nimport {\n  Button,\n  Dialog,\n  DialogTitle,\n  DialogContent,\n  DialogContentText,\n  DialogActions,\n} from "maze-ui";\n\nexport const Draggable = () => {\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button\n        label="OPEN DRAGGABLE DIALOG"\n        variant="outlined"\n        onClick={() => setOpen(true)}\n      />\n      <Dialog\n        open={open}\n        onClose={() => console.log("Dialog Closed")}\n        onBackdropClick={() => setOpen(false)}\n        draggable\n        dragOptions={{\n          handle: "#title",\n        }}\n      >\n        <DialogTitle dragFor="title">\n          {"Use Google\'s location service?"}\n        </DialogTitle>\n        <DialogContent>\n          <DialogContentText>\n            Let Google help apps determine location. This means sending\n            anonymous location data to Google, even when no apps are running.\n          </DialogContentText>\n        </DialogContent>\n        <DialogActions>\n          <Button\n            label="DISAGREE"\n            variant="text"\n            onClick={() => setOpen(false)}\n          />\n          <Button label="AGREE" variant="text" onClick={() => setOpen(false)} />\n        </DialogActions>\n      </Dialog>\n    </>\n  );\n};\n')))}h.isMDXComponent=!0}}]);