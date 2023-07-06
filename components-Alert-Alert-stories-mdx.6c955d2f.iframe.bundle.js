"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9093],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@lokalise/styled/dist/tokens/variants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>e});const e=(t,a,c)=>n=>a["function"==typeof t?t(n):n[t]??c]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/components/Alert/Alert.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,alertLink:()=>alertLink,default:()=>Alert_stories,error:()=>error,info:()=>info,onClose:()=>onClose,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),Close=__webpack_require__("./src/foundations/icons/Close.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Alert__Container",componentId:"sc-1i9h418-0"})(["display:grid;grid-template-columns:1fr auto;column-gap:",";align-items:flex-start;padding:",";border-radius:",";font-family:",";",";"],(0,theme.W0)(3),(0,theme.W0)(4),(0,theme.S3)("radius.m"),(0,theme.S3)("font.family.default"),(0,variants.o)("styleStatus",{success:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.success")};
		`,error:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.danger")};
		`,warning:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.warning")};
		`,info:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.info")};
		`})),AlertLink=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"Alert__AlertLink",componentId:"sc-1i9h418-1"})([""," color:",";text-decoration:underline;min-width:fit-content;border:none;background:none;&:hover,&:active,&:active:hover{text-decoration:underline;color:",";}"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.S3)("color.text.link.hover"));AlertLink.displayName="AlertLink";const Content=styled_components_browser_esm.ZP.div.withConfig({displayName:"Alert__Content",componentId:"sc-1i9h418-2"})([""," color:",";display:flex;align-items:center;flex-wrap:wrap;column-gap:",";"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.W0)(1)),CloseButton=(0,styled_components_browser_esm.ZP)(IconButton.h).withConfig({displayName:"Alert__CloseButton",componentId:"sc-1i9h418-3"})(["margin-top:-",";margin-right:-",";"],(0,theme.W0)(1),(0,theme.W0)(1));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=_ref=>{let{status="warning",onClose,children,...props}=_ref;return(0,jsx_runtime.jsxs)(Container,{styleStatus:status,...props,children:[(0,jsx_runtime.jsx)(Content,{children}),onClose?(0,jsx_runtime.jsx)(CloseButton,{ariaLabel:"Close",onClick:onClose,children:(0,jsx_runtime.jsx)(Close.x,{})}):null]})};Alert.displayName="Alert";try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{status:{defaultValue:{value:"warning"},description:"Changes the alert background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:null,description:"Function to close the alert. When a function is passed the component will render a close button.",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the alert.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}const Template=({onCloseFunction,onClose,...args})=>(0,jsx_runtime.jsx)(Alert,{onClose:onCloseFunction?(0,addon_actions_dist.aD)("onClose"):void 0,...args});const warning=Template.bind({});warning.storyName="Warning",warning.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},warning.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},info.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const success=Template.bind({});success.storyName="Success",success.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},success.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},error.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const onClose=Template.bind({});onClose.storyName="onClose",onClose.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},onClose.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const alertLink=Template.bind({});alertLink.storyName="AlertLink",alertLink.args={children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(AlertLink,{href:"https://www.lokalise.com",target:"_blank",children:"Alert link"})],status:"warning",onCloseFunction:!0},alertLink.parameters={storySource:{source:'({\n  onCloseFunction,\n  onClose,\n  ...args\n}) => {\n  return <Alert onClose={onCloseFunction ? action("onClose") : undefined} {...args} />;\n}'}};const componentMeta={title:"Components/Alert",parameters:{controls:{sort:"requiredFirst"}},component:Alert,subcomponents:{AlertLink},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["warning","info","success","error","onClose","alertLink"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Alert",component:Alert,subcomponents:{AlertLink},parameters:{controls:{sort:"requiredFirst"}},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"alert",children:"Alert"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert is used to highlight an important message. Often used in combination with a Modal to ask for user confirmation."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Alert exports 2 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),": Main component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AlertLink"}),": Link that is meant to be used within ",(0,jsx_runtime.jsx)(_components.code,{children:"Alert"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Alert, AlertLink } from '@lokalise/louis';\n\nexport default () => (\n\t<Alert>\n\t\tAn important alert message.\n\t\t<AlertLink href=\"#\">Alert link</AlertLink>\n\t</Alert>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=4032%3A36154",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Alert"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Warning",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Info",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Success",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"success"},children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Error",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"onclose",children:"onClose"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"onClose",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning",onCloseFunction:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"alertlink",children:"AlertLink"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"AlertLink",args:{children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(AlertLink,{href:"https://www.lokalise.com",target:"_blank",children:"Alert link"})],status:"warning",onCloseFunction:!0},children:Template.bind({})})})]})}}};const Alert_stories=componentMeta},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const variantColorStyles=styled_components_browser_esm.iv`
	${(0,variants.o)("appearance",{primary:styled_components_browser_esm.iv`
			padding: 6px;
			font-size: 20px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.active")};
					color: ${(0,theme.S3)("color.text.active")};
				`)}
		`,secondary:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.active")};
					color: ${(0,theme.S3)("color.text.active")};
				`)}
		`,verified:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.border.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.warning")};
					color: ${(0,theme.S3)("color.text.default")};
				`)}
		`,reviewed:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.border.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.success")};
					color: ${(0,theme.S3)("color.text.default")};
				`)}
		`})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"IconButton__Container",componentId:"sc-1cxbr1d-0"})(["display:inline-flex;align-items:center;background-color:transparent;transition:background-color ",",color ",";border:0;border-radius:",";text-decoration:none;"," &:disabled{cursor:not-allowed;color:",";","}"],(0,theme.S3)("transition.default"),(0,theme.S3)("transition.default"),(0,theme.S3)("radius.m"),variantColorStyles,(0,theme.S3)("color.text.disabled"),(0,modifier.c)("isLoading",styled_components_browser_esm.iv`
				color: initial;
				cursor: auto;
				${variantColorStyles}
			`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)(((_ref,ref)=>{let{appearance="secondary",ariaLabel,loading=!1,children,...rest}=_ref;return(0,jsx_runtime.jsx)(Container,{ref,appearance,"aria-label":ariaLabel,isLoading:loading,disabled:"disabled"in rest&&rest.disabled||loading,...rest,children:loading?(0,jsx_runtime.jsx)(LoadingSign.X,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"}):children})}));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"verified"'},{value:'"reviewed"'}]}},active:{defaultValue:null,description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Adds accessibility label.",name:"ariaLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays Icon component in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Pressable__Root",componentId:"sc-1gn6gwf-0"})(["cursor:pointer;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isAnchor=props=>void 0!==props.href,Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return isAnchor(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{isAnchor.displayName="Pressable",isAnchor.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m15.2954 14.1358-1.1707 1.1707-4.13028-4.1304-4.11927 4.1193-1.17062-1.1706 4.11927-4.1193-4.11927-4.13029 1.17062-1.17062 4.11927 4.11927 4.13028-4.13032 1.1817 1.18167-4.1303 4.13029 4.1193 4.1303Z"})});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=_ref=>{let{rotation,begin}=_ref;return(0,jsx_runtime.jsx)("g",{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)("rect",{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})})};Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}const LoadingSign=props=>(0,jsx_runtime.jsxs)(SvgIcon.l,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]});LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyles=styled_components_browser_esm.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: var(--louis-svgicon-color);
	fill: currentColor;
	font-size: var(--louis-svgicon-size);
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,jsx_runtime.jsx)(SvgRoot,{style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Alert-Alert-stories-mdx.6c955d2f.iframe.bundle.js.map