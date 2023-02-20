"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9021],{"./src/components/Tabs/Tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,TemplateDisabled:()=>TemplateDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories,defaultStory:()=>defaultStory,disabledTab:()=>disabledTab});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),hooks=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const isServer="undefined"==typeof window||"undefined"==typeof document;const TabsContext=(0,react.createContext)(void 0);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const insertAt=(array,item,index)=>null!=index&&index in array?[...array.slice(0,index),item,...array.slice(index)]:[...array,item],DescendantProvider=_ref=>{let{context:Ctx,children,items,set}=_ref;const registerDescendant=(0,react.useCallback)((_ref2=>{let{element,index:explicitIndex,...rest}=_ref2;return element?(set((registeredItems=>{if(null!=explicitIndex&&-1!==explicitIndex)return insertAt(registeredItems,{element,index:explicitIndex,...rest},explicitIndex);if(0===registeredItems.length)return[{...rest,element,index:0}];if(registeredItems.find((item=>item.element===element)))return registeredItems;const index=((items,element)=>{if(!element)return-1;if(!items.length)return-1;let{length}=items;for(;length;){length-=1;const currentElement=items[length].element;if(currentElement&&(a=currentElement,Boolean(element.compareDocumentPosition(a)&&Node.DOCUMENT_POSITION_PRECEDING)))return length+1}var a;return-1})(registeredItems,element);let newItems;return newItems=-1===index?[...registeredItems,{...rest,element,index:registeredItems.length}]:insertAt(registeredItems,{...rest,element,index},index),newItems})),()=>{element&&set((registeredItems=>registeredItems.filter((item=>element!==item.element))))}):()=>{}}),[]);return(0,jsx_runtime.jsx)(Ctx.Provider,{value:(0,react.useMemo)((()=>({descendants:items,registerDescendant})),[items,registerDescendant]),children})};DescendantProvider.displayName="DescendantProvider";try{DescendantProvider.displayName="DescendantProvider",DescendantProvider.__docgenInfo={description:"",displayName:"DescendantProvider",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"Context<DescendantContextValue<DescendantType>>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DescendantType[]"}},set:{defaultValue:null,description:"",name:"set",required:!0,type:{name:"Dispatch<SetStateAction<DescendantType[]>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/descendants/DescendantProvider.tsx#DescendantProvider"]={docgenInfo:DescendantProvider.__docgenInfo,name:"DescendantProvider",path:"src/components/Tabs/descendants/DescendantProvider.tsx#DescendantProvider"})}catch(__react_docgen_typescript_loader_error){}const createDescendantContext=function(name){let initialValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const descendants=[],ctx=(0,react.createContext)({descendants,registerDescendant:()=>()=>{},...initialValue});return ctx.displayName=name,ctx},TabsDescendantsContext=createDescendantContext("TabsDescendantsContext"),Tabs=(0,react.forwardRef)(((_ref,ref)=>{let{children,index,defaultIndex,onChange,...props}=_ref;const{current:isControlled}=(0,react.useRef)(void 0!==index),[tabs,setTabs]=(0,react.useState)([]),[selectedIndex,setSelectedIndex]=function useControlledState(_ref){let{controlledValue,defaultValue}=_ref;const wasControlled=void 0!==controlledValue,isControlledRef=(0,react.useRef)(wasControlled),[valueState,setValue]=(0,react.useState)(defaultValue),set=(0,react.useCallback)((n=>{isControlledRef.current||setValue(n)}),[]);return[isControlledRef.current&&wasControlled?controlledValue:valueState,set]}({controlledValue:index,defaultValue:defaultIndex??0}),id=`${props.id||"tabs"}--${(0,hooks.D)()}`,onSelectTab=(0,react.useCallback)((selectIndex=>{onChange&&onChange(selectIndex),setSelectedIndex(selectIndex)}),[onChange,setSelectedIndex]),onSelectTabWithKeyboard=(0,react.useCallback)((selectIndex=>{onChange&&onChange(selectIndex),setSelectedIndex(selectIndex);const tabElement=tabs[selectIndex]?.element,doc=(element=tabElement,isServer?null:element instanceof Node?element.ownerDocument:element?.current instanceof Node?element.current.ownerDocument:document);var element;doc&&tabElement&&tabElement!==doc.activeElement&&"function"==typeof tabElement.focus&&tabElement.focus()}),[onChange,setSelectedIndex,tabs]),value=(0,react.useMemo)((()=>({id,isControlled,selectedIndex,setSelectedIndex,onSelectTab,onSelectTabWithKeyboard})),[id,isControlled,selectedIndex,setSelectedIndex,onSelectTab,onSelectTabWithKeyboard]);return(0,jsx_runtime.jsx)(DescendantProvider,{context:TabsDescendantsContext,items:tabs,set:setTabs,children:(0,jsx_runtime.jsx)(TabsContext.Provider,{value,children:(0,jsx_runtime.jsx)("div",{ref,...props,children})})})}));Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{index:{defaultValue:null,description:"Controls visible tab from outside.\nMust be used together with `onChange` to make tabs interactive.",name:"index",required:!1,type:{name:"number"}},defaultIndex:{defaultValue:null,description:"Specifies a tab that should be opened by default.",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Function executed when a tab is changed.",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const useTabsContext=()=>{const context=(0,react.useContext)(TabsContext);if(void 0===context)throw new Error("useTabsContext must be used within Tabs");return context},useDescendantKeyDown=(context,options)=>{const{descendants}=(0,react.useContext)(context),{callback,currentIndex,filter}=options;function getFirstOption(selectableDescendants){return selectableDescendants[0]}function getLastOption(selectableDescendants){return selectableDescendants[selectableDescendants.length-1]}return function handleKeyDown(event){if(!["ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(event.key))return;const index=currentIndex??-1,selectableDescendants=filter?descendants.filter(filter):descendants;if(!selectableDescendants.length)return;const selectableIndex=selectableDescendants.findIndex((descendant=>descendant.index===currentIndex));"ArrowLeft"===event.key&&(event.preventDefault(),callback(function getPreviousOption(selectableDescendants,selectableIndex,index){return index===getFirstOption(selectableDescendants).index?getLastOption(selectableDescendants):selectableDescendants[(selectableIndex-1+selectableDescendants.length)%selectableDescendants.length]}(selectableDescendants,selectableIndex,index).index)),"ArrowRight"===event.key&&(event.preventDefault(),callback(function getNextOption(selectableDescendants,selectableIndex,index){return index===getLastOption(selectableDescendants).index?getFirstOption(selectableDescendants):selectableDescendants[(selectableIndex+1)%selectableDescendants.length]}(selectableDescendants,selectableIndex,index).index)),"PageUp"===event.key&&(event.preventDefault(),callback(getFirstOption(selectableDescendants).index)),"Home"===event.key&&(event.preventDefault(),callback(getFirstOption(selectableDescendants).index)),"PageDown"===event.key&&(event.preventDefault(),callback(getLastOption(selectableDescendants).index)),"End"===event.key&&(event.preventDefault(),callback(getLastOption(selectableDescendants).index))}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/utils/theme/color.ts"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts"),transitionTime=__webpack_require__("./src/utils/theme/transitionTime.ts");const StyledTabList=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tabs__StyledTabList",componentId:"sc-1c586ik-0"})(["display:flex;background:none;border-bottom:1px solid ",";"],(0,color.$)("border.primary")),StyledTab=styled_components_browser_esm.ZP.button.withConfig({displayName:"Tabs__StyledTab",componentId:"sc-1c586ik-1"})(["display:inline-block;border:none;border-bottom:2px solid transparent;margin:0;margin-bottom:-1px;background:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;font-family:",";"," padding:",";color:",";transition:color ",";&:hover:enabled{color:",";}& + &{margin-left:",";}&[aria-selected='true']{"," border-bottom-color:",";color:",";}&:active{background:none;}&:disabled{opacity:0.25;cursor:not-allowed;}"],(0,fontFamily.I)("default"),(0,typography.c)("description"),(0,spacing.W)(2,0),(0,color.$)("content.primary"),(0,transitionTime.Y)(),(0,color.$)("primary.500"),(0,spacing.W)(6),(0,typography.c)("descriptionMedium"),(0,color.$)("primary.500"),(0,color.$)("primary.500")),StyledTabPanel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tabs__StyledTabPanel",componentId:"sc-1c586ik-2"})(["font-family:",";"],(0,fontFamily.I)("default")),TabList=(0,react.forwardRef)(((_ref,ref)=>{let{ariaLabelledBy,ariaLabel,children,...props}=_ref;const{isControlled,onSelectTabWithKeyboard,selectedIndex,setSelectedIndex}=useTabsContext(),tabs=(0,react.useContext)(TabsDescendantsContext).descendants,handleKeyDown=useDescendantKeyDown(TabsDescendantsContext,{currentIndex:selectedIndex,callback:onSelectTabWithKeyboard,filter:tab=>!tab.disabled});return(0,react.useLayoutEffect)((()=>{if(!isControlled&&tabs[selectedIndex]?.disabled){const next=tabs.find((tab=>!tab.disabled));next&&setSelectedIndex(next.index)}}),[tabs,isControlled,selectedIndex,setSelectedIndex]),(0,jsx_runtime.jsx)(StyledTabList,{role:"tablist","aria-labelledby":ariaLabelledBy,"aria-label":ariaLabelledBy?void 0:ariaLabel,onKeyDown:handleKeyDown,ref,...props,children})}));TabList.displayName="TabList";try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.",name:"children",required:!1,type:{name:"ReactNode"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabList.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"src/components/Tabs/TabList.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}var useMergeRefs=__webpack_require__("./src/utils/hooks/useMergeRefs.ts");const useDescendantsContext=(descendant,context,indexProp)=>{const{registerDescendant,descendants}=(0,react.useContext)(context),index=indexProp??descendants.findIndex((item=>item.element===descendant.element));return(0,react.useLayoutEffect)((()=>{if(descendant.element)return registerDescendant({...descendant,index})}),[descendant,index,registerDescendant]),index},Tab=(0,react.forwardRef)(((_ref,forwardedRef)=>{let{children,disabled,...props}=_ref;const{id:tabsId,selectedIndex,onSelectTab}=useTabsContext(),[tabRef,setTabRef]=(0,react.useState)(null),descendant=(0,react.useMemo)((()=>({element:tabRef,disabled:!!disabled})),[disabled,tabRef]),index=useDescendantsContext(descendant,TabsDescendantsContext),isSelected=index===selectedIndex,ref=(0,useMergeRefs.q)(forwardedRef,setTabRef);return(0,jsx_runtime.jsx)(StyledTab,{id:`${tabsId}--tab--${index}`,disabled,"aria-disabled":disabled,"aria-selected":isSelected,role:"tab","aria-controls":`${tabsId}--panel--${index}`,ref,tabIndex:isSelected?0:-1,onClick:()=>onSelectTab(index),type:"button",...props,children})}));Tab.displayName="Tab";try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Toggles disabled state of the `Tab`.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}const TabPanelsDescendantsContext=createDescendantContext("TabPanelsDescendantsContext"),TabPanels=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;const[tabPanels,setTabPanels]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(DescendantProvider,{context:TabPanelsDescendantsContext,items:tabPanels,set:setTabPanels,children:(0,jsx_runtime.jsx)("div",{ref,...props,children})})}));TabPanels.displayName="TabPanels";try{TabPanels.displayName="TabPanels",TabPanels.__docgenInfo={description:"",displayName:"TabPanels",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabPanels.tsx#TabPanels"]={docgenInfo:TabPanels.__docgenInfo,name:"TabPanels",path:"src/components/Tabs/TabPanels.tsx#TabPanels"})}catch(__react_docgen_typescript_loader_error){}const TabPanel=(0,react.forwardRef)(((_ref,forwardedRef)=>{let{children,...props}=_ref;const{id:tabsId,selectedIndex}=useTabsContext(),[tabPanelRef,setTabPanelRef]=(0,react.useState)(null),descendant=(0,react.useMemo)((()=>({element:tabPanelRef})),[tabPanelRef]),index=useDescendantsContext(descendant,TabPanelsDescendantsContext),isSelected=index===selectedIndex,readyToHide=(0,react.useRef)(!1),hidden=!!readyToHide.current&&!isSelected;(0,react.useEffect)((()=>{readyToHide.current=!0}),[]);const ref=(0,useMergeRefs.q)(forwardedRef,setTabPanelRef);return(0,jsx_runtime.jsx)(StyledTabPanel,{id:`${tabsId}--panel--${index}`,role:"tabpanel","aria-labelledby":`${tabsId}--tab--${index}`,tabIndex:isSelected?0:-1,hidden,ref,...props,children})}));TabPanel.displayName="TabPanel";try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabPanel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/Tabs/TabPanel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}var esm_hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const[_,updateArgs]=(0,esm_hooks.D8)(),{ariaLabelledBy,ariaLabel,...restArgs}=args;return(0,esm.kt)(Tabs,_extends({},restArgs,{onChange:index=>updateArgs({index}),mdxType:"Tabs"}),(0,esm.kt)(TabList,{ariaLabelledBy,ariaLabel,mdxType:"TabList"},(0,esm.kt)(Tab,{mdxType:"Tab"},"First tab"),(0,esm.kt)(Tab,{mdxType:"Tab"},"Second tab"),(0,esm.kt)(Tab,{mdxType:"Tab"},"Third tab")),(0,esm.kt)(TabPanels,{mdxType:"TabPanels"},(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"First")),(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"Second")),(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"Third"))))};Template.displayName="Template";const TemplateDisabled=args=>{const[_,updateArgs]=(0,esm_hooks.D8)(),{ariaLabelledBy,ariaLabel,...restArgs}=args;return(0,esm.kt)(Tabs,_extends({},args,{onChange:index=>updateArgs({index}),mdxType:"Tabs"}),(0,esm.kt)(TabList,{ariaLabelledBy,ariaLabel,mdxType:"TabList"},(0,esm.kt)(Tab,{mdxType:"Tab"},"First tab"),(0,esm.kt)(Tab,{disabled:!0,mdxType:"Tab"},"Second tab"),(0,esm.kt)(Tab,{mdxType:"Tab"},"Third tab")),(0,esm.kt)(TabPanels,{mdxType:"TabPanels"},(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"First")),(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"Second")),(0,esm.kt)(TabPanel,{mdxType:"TabPanel"},(0,esm.kt)("div",{style:{paddingTop:16}},"Third"))))};TemplateDisabled.displayName="TemplateDisabled";const layoutProps={Template,TemplateDisabled};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Components/Tabs",component:Tabs,subcomponents:{TabList,Tab,TabPanels,TabPanel},parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},argTypes:{ariaLabelledBy:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},id:{control:{type:"text"}}},mdxType:"Meta"}),(0,esm.kt)("h1",{id:"tabs"},"Tabs"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#figma-design-file"},"Figma Design File")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#edge-cases"},"Edge Cases")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#accessibility"},"Accessibility"))),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"Tabs are used to show the content that is conveniently placed in the same part of the interface."),(0,esm.kt)("p",null,"Tabs exports 5 components:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Tabs"),": Main component. Wrapper of ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," and ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TabList"),": Wrapper of ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Tab"),": Element that shows ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanels"),": Wrapper of ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel"),"."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel"),": Container of the content of the tab which is displayed when the corresponding ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab")," is active.")),(0,esm.kt)("h3",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,esm.kt)("h3",{id:"usage"},"Usage"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@lokalise/louis';\n\nexport default () => (\n    <Tabs>\n        <TabList>\n            <Tab>First tab</Tab>\n            <Tab>Second tab</Tab>\n            <Tab>Third tab</Tab>\n        </TabList>\n        <TabPanels>\n            <TabPanel>First</TabPanel>\n            <TabPanel>Second</TabPanel>\n            <TabPanel>Third</TabPanel>\n        </TabPanels>\n    </Tabs>\n);\n")),(0,esm.kt)("h2",{id:"figma-design-file"},"Figma Design File"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29304",target:"_blank"},"Figma Source File | Tabs"))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.$4,{of:Tabs,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,esm.kt)("h2",{id:"examples"},"Examples"),(0,esm.kt)("h3",{id:"default"},"Default"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Default",args:{index:0,ariaLabel:"Example tabs"},mdxType:"Story"},Template.bind({}))),(0,esm.kt)("h3",{id:"disabled-tab"},"Disabled Tab"),(0,esm.kt)(dist_esm.Xz,{withSource:"open",mdxType:"Canvas"},(0,esm.kt)(dist_esm.oG,{name:"Disabled Tab",args:{index:0,ariaLabel:"Example tabs"},mdxType:"Story"},TemplateDisabled.bind({}))),(0,esm.kt)("h2",{id:"edge-cases"},"Edge Cases"),(0,esm.kt)("h3",{id:"dynamic-tabs"},"Dynamic tabs"),(0,esm.kt)("p",null,"Although ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tabs")," supports a dynamic set of tabs, there are some issues with it. Namely, removing a tab might not\ncorrectly select a different tab or preserve the correct selected index. It is a known bug, and currently it is\ndifficult to fix, but the workaround is to reset the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tabs")," state when the number of tabs changes using ",(0,esm.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-tsx"},"const [tabs, setTabs] = useState<number[]>([1, 2, 3]);\n\n<Tabs key={tabs.length}>\n    <TabList>\n        {tabs.map((tab) => (\n            <Tab key={tab}>{tab}</Tab>\n        ))}\n    </TabList>\n</Tabs>;\n")),(0,esm.kt)("h3",{id:"keyboard-interaction"},"Keyboard Interaction"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ArrowRight")," - navigates to the next active tab on the right or if the last tab is active then it navigates to the first tab."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," - navigates to the next active tab on the left or if the first tab is active then it navigates to the last tab."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"Home")," / ",(0,esm.kt)("inlineCode",{parentName:"li"},"PageUp")," - navigates to the last tab."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"End")," / ",(0,esm.kt)("inlineCode",{parentName:"li"},"PageDown")," - navigates to the first tab.")),(0,esm.kt)("h2",{id:"accessibility"},"Accessibility"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"Tabs")," follows the accessibility guidelines for tabs: ",(0,esm.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/",target:"_blank",rel:"nofollow noopener noreferrer"},"https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/"),"."),(0,esm.kt)("p",null,"Accessibility attributes you should set when using ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"If the ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," has a visible label, you can provide a value that refers to the labelling element via the ",(0,esm.kt)("inlineCode",{parentName:"li"},"ariaLabelledBy")," prop on ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," which will set the ",(0,esm.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," attribute. Otherwise, the ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," should get an accessibility label using the ",(0,esm.kt)("inlineCode",{parentName:"li"},"ariaLabel")," prop.")),(0,esm.kt)("p",null,"Accessibility attributes automatically determined by ",(0,esm.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," serves as the container for the set of tabs and automatically has the role ",(0,esm.kt)("inlineCode",{parentName:"li"},"tablist"),"."),(0,esm.kt)("li",{parentName:"ul"},"Each ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab")," component automatically has the role ",(0,esm.kt)("inlineCode",{parentName:"li"},"tab")," and is contained within ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabList")," (with role ",(0,esm.kt)("inlineCode",{parentName:"li"},"tablist"),")."),(0,esm.kt)("li",{parentName:"ul"},"Each ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel")," contains the content panel for a tab and automatically has the role ",(0,esm.kt)("inlineCode",{parentName:"li"},"tabpanel"),"."),(0,esm.kt)("li",{parentName:"ul"},"Each ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab")," automatically has the property ",(0,esm.kt)("inlineCode",{parentName:"li"},"aria-controls")," referring to its associated ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel"),"."),(0,esm.kt)("li",{parentName:"ul"},"The active ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab")," automatically has the state ",(0,esm.kt)("inlineCode",{parentName:"li"},"aria-selected")," set to ",(0,esm.kt)("inlineCode",{parentName:"li"},"true")," and all other ",(0,esm.kt)("inlineCode",{parentName:"li"},"Tab"),"s have it set to ",(0,esm.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,esm.kt)("li",{parentName:"ul"},"Each ",(0,esm.kt)("inlineCode",{parentName:"li"},"TabPanel")," automatically has the property ",(0,esm.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," referring to its associated tab element.")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={index:0,ariaLabel:"Example tabs"},defaultStory.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const {\n    ariaLabelledBy,\n    ariaLabel,\n    ...restArgs\n  } = args;\n  return <Tabs {...restArgs} onChange={index => updateArgs({\n    index\n  })}>\n\t\t\t<TabList ariaLabelledBy={ariaLabelledBy} ariaLabel={ariaLabel}>\n\t\t\t\t<Tab>First tab</Tab>\n\t\t\t\t<Tab>Second tab</Tab>\n\t\t\t\t<Tab>Third tab</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>First</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Second</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Third</div>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</Tabs>;\n}"}};const disabledTab=TemplateDisabled.bind({});disabledTab.storyName="Disabled Tab",disabledTab.args={index:0,ariaLabel:"Example tabs"},disabledTab.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const {\n    ariaLabelledBy,\n    ariaLabel,\n    ...restArgs\n  } = args;\n  return <Tabs {...args} onChange={index => updateArgs({\n    index\n  })}>\n\t\t\t<TabList ariaLabelledBy={ariaLabelledBy} ariaLabel={ariaLabel}>\n\t\t\t\t<Tab>First tab</Tab>\n\t\t\t\t<Tab disabled>Second tab</Tab>\n\t\t\t\t<Tab>Third tab</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>First</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Second</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Third</div>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</Tabs>;\n}"}};const componentMeta={title:"Components/Tabs",parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},component:Tabs,subcomponents:{TabList,Tab,TabPanels,TabPanel},argTypes:{ariaLabelledBy:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},id:{control:{type:"text"}}},includeStories:["defaultStory","disabledTab"]},mdxStoryNameToKey={Default:"defaultStory","Disabled Tab":"disabledTab"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};const Tabs_stories=componentMeta,__namedExportsOrder=["Template","TemplateDisabled","defaultStory","disabledTab"]},"./src/utils/hooks/useMergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isFunction.js"),_function__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_function__WEBPACK_IMPORTED_MODULE_1__);function assignRef(ref,value){if(null!=ref)if(_function__WEBPACK_IMPORTED_MODULE_1___default()(ref))ref(value);else try{ref.current=value}catch(error){throw new Error(`Cannot assign value "${JSON.stringify(value)}" to ref "${ref.toString()}"`)}}function useMergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{refs.forEach((ref=>{assignRef(ref,node)}))}),refs)}},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/transitionTime.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>transitionTime});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const transitionTime=()=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>theme.transitionTime))},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}}}]);