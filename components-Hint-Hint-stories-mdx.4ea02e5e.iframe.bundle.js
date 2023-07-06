"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[6666],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Fg},"./src/components/Hint/Hint.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LabelTemplate:()=>LabelTemplate,StoryContent:()=>StoryContent,Template:()=>Template,default:()=>Hint_stories,hint:()=>hint,insideLabel:()=>insideLabel});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Label=__webpack_require__("./src/components/Label/Label.tsx"),Info=__webpack_require__("./src/foundations/icons/Info.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styles=__webpack_require__("./src/components/Popover/styles.ts");const centerPosition=styled_components_browser_esm.iv`
	position: absolute; // Set as "absolute" so svg is not affecting line height.
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`,HintButton=styled_components_browser_esm.ZP.span.withConfig({displayName:"Hint__HintButton",componentId:"sc-499o3z-0"})(["cursor:pointer;display:inline-block;vertical-align:baseline;width:",";min-height:",";border-radius:50%;position:relative;line-height:inherit;&::before{content:'\\a0';}"],"14px","14px"),IconWrapper=styled_components_browser_esm.ZP.span.withConfig({displayName:"Hint__IconWrapper",componentId:"sc-499o3z-1"})(["display:inline-flex;color:",";font-size:16px;",""],(0,theme.S3)("color.text.disabled"),centerPosition),Content=(0,styled_components_browser_esm.ZP)(styles.V).withConfig({displayName:"Hint__Content",componentId:"sc-499o3z-2"})(["font-size:14px;line-height:20px;background-color:",";color:",";border-radius:",";padding:",";border-color:",";z-index:",";text-align:start;"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.text.default"),(0,theme.S3)("radius.m"),(0,theme.W0)(3,4),(0,theme.S3)("color.border.default"),(0,theme.S3)("zIndex.tooltip")),Arrow=(0,styled_components_browser_esm.ZP)(styles.E).withConfig({displayName:"Hint__Arrow",componentId:"sc-499o3z-3"})(["&:before{background-color:",";border-color:",";}"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.border.default"));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Hint=_ref=>{let{placement="auto",ariaLabel="More information",width=245,positioning,children,className}=_ref;return(0,jsx_runtime.jsx)(Popover.J,{withArrow:!0,content:children,placement,components:{Content,Arrow},positioning,style:{width},children:(0,jsx_runtime.jsx)(HintButton,{"aria-label":ariaLabel,role:"button",tabIndex:0,className,onClick:event=>{event.stopPropagation(),event.preventDefault()},children:(0,jsx_runtime.jsx)(IconWrapper,{children:(0,jsx_runtime.jsx)(Info.k,{})})})})};Hint.displayName="Hint";try{Hint.displayName="Hint",Hint.__docgenInfo={description:"",displayName:"Hint",props:{positioning:{defaultValue:null,description:"Sets the positioning of the Hint popover, uses the `Popover` defaults when not set.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},placement:{defaultValue:{value:"auto"},description:"Determines where the hint should appear relative to the hint icon.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},width:{defaultValue:{value:"245"},description:"Changes the width of the hint.",name:"width",required:!1,type:{name:'number | "auto"'}},ariaLabel:{defaultValue:{value:"More information"},description:"Changes the accessibility label on the hint icon.",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the hint.",name:"children",required:!0,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"src/components/Hint/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}const StoryContent=styled_components_browser_esm.ZP.div`
	${(0,theme.cp)("body.base.default")};
	width: 800px;
	margin: 60px 100px;
`,Template=args=>(0,jsx_runtime.jsx)(Hint,{...args}),LabelTemplate=args=>(0,jsx_runtime.jsx)(Label._,{text:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Labels sometimes include hints ",(0,jsx_runtime.jsx)(Hint,{...args})]}),children:(0,jsx_runtime.jsx)(Input.I,{})});const hint=Template.bind({});hint.storyName="Hint",hint.args={children:"This is a hint."},hint.parameters={storySource:{source:"args => <Hint {...args} />"}},hint.decorators=[Story=>(0,jsx_runtime.jsx)(StoryContent,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["This could use an explanation ",Story()," with some extra context."]})})];const insideLabel=LabelTemplate.bind({});insideLabel.storyName="Inside label",insideLabel.args={children:"This is a hint."},insideLabel.parameters={storySource:{source:"args => <Label text={<>\n\t\t\t\tLabels sometimes include hints <Hint {...args} />\n\t\t\t</>}>\n\t\t<Input />\n\t</Label>"}};const componentMeta={title:"Components/Hint",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},component:Hint,argTypes:{width:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["hint","insideLabel"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Hint",component:Hint,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},argTypes:{width:{control:{type:"text"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hint",children:"Hint"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Hint can be used as an icon button to provide additional context and explanations for other UI elements or text."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Hint } from '@lokalise/louis';\n\nexport default () => <Hint>This is a hint.</Hint>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Figma Source File | Hint (not yet available in Figma, will be updated)"}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Hint,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hint",args:{children:"This is a hint."},decorators:[Story=>(0,jsx_runtime.jsx)(StoryContent,{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["This could use an explanation ",Story()," with some extra context."]})})],children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Inside label",args:{children:"This is a hint."},children:LabelTemplate.bind({})})})]})}}};const Hint_stories=componentMeta},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.label.withConfig({displayName:"Label__Container",componentId:"sc-16wdyfs-0"})(["width:100%;margin-bottom:0;display:grid;gap:",";",""],(0,theme.W0)(1),(0,modifier.c)("underline",styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(3)};
		`)),LabelText=styled_components_browser_esm.ZP.span.withConfig({displayName:"Label__LabelText",componentId:"sc-16wdyfs-1"})([""," "," color:",";cursor:default;"],(0,theme.cp)("body.small.strong"),(0,modifier.c)("underline",styled_components_browser_esm.iv`
			padding-bottom: ${(0,theme.W0)(1)};
			border-bottom: 1px solid ${(0,theme.S3)("color.border.light")};
		`),(0,theme.S3)("color.text.default")),AsteriskIcon=styled_components_browser_esm.ZP.span.withConfig({displayName:"Label__AsteriskIcon",componentId:"sc-16wdyfs-2"})(["color:",";&:after{content:'*';}"],(0,theme.S3)("color.background.action.danger.default"));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLabelElement | null) => void) | RefObject<HTMLLabelElement> | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Label/styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{LabelText.displayName="LabelText",LabelText.__docgenInfo={description:"",displayName:"LabelText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},underline:{defaultValue:null,description:"",name:"underline",required:!0,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#LabelText"]={docgenInfo:LabelText.__docgenInfo,name:"LabelText",path:"src/components/Label/styles.tsx#LabelText"})}catch(__react_docgen_typescript_loader_error){}try{AsteriskIcon.displayName="AsteriskIcon",AsteriskIcon.__docgenInfo={description:"",displayName:"AsteriskIcon",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#AsteriskIcon"]={docgenInfo:AsteriskIcon.__docgenInfo,name:"AsteriskIcon",path:"src/components/Label/styles.tsx#AsteriskIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=_ref=>{let{text,required,underline=!1,for:htmlFor,id,className,children}=_ref;return(0,jsx_runtime.jsxs)(Container,{htmlFor,className,underline,children:[(0,jsx_runtime.jsxs)(LabelText,{id,underline,children:[text,required?(0,jsx_runtime.jsx)(AsteriskIcon,{role:"img","aria-label":"Required"}):null]}),children&&(0,jsx_runtime.jsx)("div",{children})]})};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"Sets text content and / or any HTML node as the label text.",name:"text",required:!0,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Toggles a red asterisk to indicate that the field is required.",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"Sets the `for` attribute on the label element.",name:"for",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Sets the `id` attribute on the label text span.",name:"id",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"Toggles a bottom border on the label.",name:"underline",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the label.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),useMergeRefs=__webpack_require__("./src/utils/hooks/useMergeRefs.ts"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}var styles=__webpack_require__("./src/components/Popover/styles.ts"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs");const getDelayValue=delay=>"number"==typeof delay?delay:delay?250:0;const offsetMiddleware=_ref=>{let{withArrow=!1,offset:offsetValue}=_ref;return(0,floating_ui_core_browser_min.cv)(withArrow?10:4*(offsetValue??0))},Popover=(0,react.forwardRef)(((_ref2,ref)=>{let{placement="bottom",content,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},middlewares=[],offset:offsetValue,withArrow=!1,open,onOpenChange,inPortal=!1,positioning="absolute",role="dialog",className,style,...rest}=_ref2;const arrowRef=(0,react.useRef)(null),autoPlacementMiddleware="auto"===placement?[(0,floating_ui_core_browser_min.X5)()]:[(0,floating_ui_core_browser_min.RR)()],fallbackPlacement="auto"===placement?"bottom":placement,{open:isOpen,setOpen,x,y,refs,getFloatingProps,getReferenceProps,middlewareData,context}=function usePopover(_ref){let{open:controlledOpen,defaultIsOpen,delay,placement="bottom",triggerEvent="click",onOpenChange:setControlledOpen,middlewares=[],strategy:customStrategy,role="dialog"}=_ref;const[uncontrolledOpen,setUncontrolledOpen]=(0,react.useState)(!!defaultIsOpen),open=controlledOpen??uncontrolledOpen,setOpen=(0,react.useCallback)((visible=>{setUncontrolledOpen(visible),setControlledOpen&&setControlledOpen(visible)}),[setControlledOpen]),{context,refs,x,y,strategy,middlewareData}=(0,floating_ui_react_esm.YF)({open,onOpenChange:setOpen,placement,strategy:customStrategy,middleware:middlewares,whileElementsMounted:floating_ui_dom_browser_min.Me}),interactions=(0,floating_ui_react_esm.NI)([(0,floating_ui_react_esm.eS)(context,{enabled:"click"===triggerEvent}),(0,floating_ui_react_esm.XI)(context,{enabled:"hover"===triggerEvent,delay:{open:getDelayValue(delay)}}),(0,floating_ui_react_esm.KK)(context),(0,floating_ui_react_esm.qs)(context,{role}),(0,floating_ui_react_esm.bQ)(context)]),id=(0,floating_ui_react_esm.PC)(),labelId=`${id}-label`,descriptionId=`${id}-description`;return(0,react.useMemo)((()=>({...interactions,context,descriptionId,refs,labelId,middlewareData,open,setOpen,strategy,x,y})),[interactions,context,descriptionId,refs,labelId,middlewareData,open,setOpen,strategy,x,y])}({open,onOpenChange,strategy:positioning,role,delay,placement:fallbackPlacement,triggerEvent,middlewares:[...autoPlacementMiddleware,(0,floating_ui_core_browser_min.uY)(),(0,floating_ui_react_dom_esm.x7)({element:arrowRef,padding:5}),offsetMiddleware({withArrow,offset:offsetValue}),...middlewares]});let clone=null;const resolvedChildren="function"==typeof children?children(isOpen):children,mergedRef=(0,useMergeRefs.q)((input=resolvedChildren,(0,react.isValidElement)(input)?resolvedChildren.ref:null),refs.setReference,ref);var input;return clone="string"==typeof resolvedChildren||"number"==typeof resolvedChildren?(0,jsx_runtime.jsx)("span",{ref:refs.setReference,...getReferenceProps(),children:resolvedChildren}):(0,react.cloneElement)(resolvedChildren,getReferenceProps({ref:mergedRef,...resolvedChildren.props,...rest})),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,isOpen&&content&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:refs.setFloating,className,style:{position:positioning,top:y??0,left:x??0,...style},...getFloatingProps(),children:["function"==typeof content?content(setOpen):content,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:arrowRef,placement:context.placement,style:{left:middlewareData.arrow?.x,top:middlewareData.arrow?.y}})]})})]})}));Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"Children | ((visible: boolean) => Children)"}},style:{defaultValue:null,description:"Sets the style for the content.",name:"style",required:!1,type:{name:"CSSProperties"}},content:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"content",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},className:{defaultValue:null,description:"Sets the CSS class attribute.",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:{value:"dialog"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"menu"'},{value:'"tooltip"'},{value:'"alertdialog"'},{value:'"grid"'},{value:'"listbox"'},{value:'"tree"'}]}},placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},open:{defaultValue:null,description:"Controls the visibility of the popover.\nIf provided, the popover will be opened/closed in controlled mode.\nUnset (by default) will let Popover decides in uncontrolled mode.",name:"open",required:!1,type:{name:"boolean"}},defaultIsOpen:{defaultValue:null,description:"If `true`, the popover will be initially opened.",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},delay:{defaultValue:{value:"false"},description:"Set delayed appearance of the popover when `triggerEvent` is 'hover'.\nSet to `true` will use default value of 250 milliseconds.\nSet to a custom number will make it delays with that amount in milliseconds.",name:"delay",required:!1,type:{name:"number | boolean"}},onOpenChange:{defaultValue:null,description:"Callback when state of popover changed\nFunction executed when the visibility of the popover changes.",name:"onOpenChange",required:!1,type:{name:"(((open: boolean) => void) & ((open: boolean) => void))"}},middlewares:{defaultValue:{value:"[]"},description:"useFloating middlewares.",name:"middlewares",required:!1,type:{name:"{ name: string; options?: any; fn: (state: { strategy: Strategy; placement: Placement; platform: Platform; x: number; y: number; middlewareData: MiddlewareData; initialPlacement: Placement; rects: ElementRects; elements: Elements; }) => Promisable<...>; }[]"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},positioning:{defaultValue:{value:"absolute"},description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const bottom=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	top: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,top=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	bottom: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,left=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	right: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,right=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	left: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,Arrow=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Arrow",componentId:"sc-3ptc01-0"})(["position:absolute;width:8px;height:8px;z-index:",";&::before{position:absolute;width:8px;height:8px;z-index:",";content:'';display:block;transform:rotate(45deg);background-color:",";border-color:",";}",""],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.default"),(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")),Content=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Content",componentId:"sc-3ptc01-1"})(["padding:0;border-radius:",";background-color:",";border:1px solid ",";box-shadow:0 0 5px rgba(0,0,0,0.2);z-index:",";color:",";",";width:max-content;"],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("radius.m"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.popover"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"))},"./src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const useIsomorphicLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,Portal=_ref=>{let{children,containerRef,type="div",className}=_ref;const isServer="undefined"==typeof window||"undefined"==typeof document,portalNode=(0,react.useMemo)((()=>isServer?null:document.createElement(type)),[isServer,type]);return portalNode&&(portalNode.className=className?`louis-portal ${className}`:"louis-portal"),useIsomorphicLayoutEffect((()=>{if(isServer||!portalNode)return;const host=containerRef?.current||document.body;return host.appendChild(portalNode),()=>{host.contains(portalNode)&&host.removeChild(portalNode)}}),[containerRef,type,isServer]),!isServer&&portalNode?(0,react_dom.createPortal)(children,portalNode):null};Portal.displayName="Portal";try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"div"},description:"The DOM element type to render, default 'div'.",name:"type",required:!1,type:{name:"string"}},containerRef:{defaultValue:null,description:"Container element where the Portal will render. If not set the\nportal will be appended to the body of the component's owner document\n(typically this is the `document.body`).",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Info.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Info});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Info=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M9.99443 1.66751c-4.60519 0-8.33794 3.73275-8.33794 8.33789 0 4.6052 3.74379 8.3269 8.33794 8.3269 4.59417 0 8.33797-3.7327 8.33797-8.3269 0-4.5941-3.7328-8.33789-8.33797-8.33789Zm.83927 12.50139H9.16616V9.16613h1.66754v5.00277Zm0-6.67035H9.16616V5.83097h1.66754v1.66758Z"})});Info.displayName="Info";try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Info.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/foundations/icons/Info.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/function/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>isFunction,v:()=>callAllHandlers});const isFunction=input=>"function"==typeof input,callAllHandlers=function(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function func(event){fns.some((fn=>(fn?.(event),event?.defaultPrevented)))}}},"./src/utils/hooks/useMergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/function/index.ts");function useMergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if((0,_function__WEBPACK_IMPORTED_MODULE_1__.m)(ref))ref(value);else try{ref.current=value}catch(error){throw new Error(`Cannot assign value "${JSON.stringify(value)}" to ref "${ref.toString()}"`)}}(ref,node)}))}),refs)}},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-".concat(index):"val-".concat(item):map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){var context=(0,react.useContext)(source),uid=(0,react.useState)((function(){return function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(context)}))[0];return uid},useUID=function(){return useUIDState().uid},useUIDSeed=function(){return useUIDState().gen}}}]);
//# sourceMappingURL=components-Hint-Hint-stories-mdx.4ea02e5e.iframe.bundle.js.map