(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1126:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1126},1131:function(module,exports){},1133:function(module,exports){},1143:function(module,exports){},1145:function(module,exports){},1170:function(module,exports){},1171:function(module,exports){},1176:function(module,exports){},1178:function(module,exports){},1185:function(module,exports){},1204:function(module,exports){},1234:function(module,exports,__webpack_require__){"use strict";__webpack_require__(9),__webpack_require__(3),__webpack_require__(59),__webpack_require__(1235),__webpack_require__(45),__webpack_require__(46),__webpack_require__(1236),__webpack_require__(38),__webpack_require__(48);var _clientApi=__webpack_require__(52),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1237);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1237:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var storybook_addon_designs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(556),_vtmn_showcase_core_addons_backgrounds_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(557),_vtmn_showcase_core_addons_viewports_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(558),decorators=[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_0__.a],parameters={actions:{argTypesRegex:"^on[A-Z].*"},backgrounds:_vtmn_showcase_core_addons_backgrounds_json__WEBPACK_IMPORTED_MODULE_1__,viewport:{viewports:_vtmn_showcase_core_addons_viewports_json__WEBPACK_IMPORTED_MODULE_2__}}},1238:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(388).configure)([__webpack_require__(1239),__webpack_require__(1240)],module,!1)}).call(this,__webpack_require__(64)(module))},1239:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1239},1240:function(module,exports,__webpack_require__){var map={"./components/VtmnButton/VtmnButton.stories.js":1249};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1240},1241:function(module,exports,__webpack_require__){var api=__webpack_require__(1242),content=__webpack_require__(1243);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1243:function(module,exports,__webpack_require__){(exports=__webpack_require__(1244)(!1)).push([module.i,".vtmn-btn {\n  box-shadow: inset 0 0 0 0.125rem transparent;\n  font-size: 1rem;\n  min-height: 3rem;\n  min-width: 7.5rem;\n  max-width: 100%;\n  padding: 0.875rem 1.5rem;\n  line-height: 1.25;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #007dbc;\n  border-radius: 0.25rem;\n  border-width: 0;\n  box-sizing: border-box;\n  display: inline-block;\n  font-family: 'Roboto Condensed', 'system-ui',\n    '-apple-system', sans-serif;\n  font-weight: 700;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n}\n\n.vtmn-btn:hover {\n  background-color: #00689d;\n  cursor: pointer;\n}\n\n.vtmn-btn:active {\n  background-color: #00537d;\n}\n\n.vtmn-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.25;\n}\n\n.vtmn-btn:not([disabled]):focus {\n  outline: none;\n  box-shadow: inset 0 0 0 0.125rem transparent,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--primary {\n  box-shadow: inset 0 0 0 0.125rem transparent;\n  background-color: #007dbc;\n  color: #fff;\n}\n\n.vtmn-btn_variant--primary:hover {\n  background-color: #00689d;\n}\n\n.vtmn-btn_variant--primary:active {\n  background-color: #00537d;\n}\n\n.vtmn-btn_variant--primary:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem transparent,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--primary-reversed {\n  box-shadow: inset 0 0 0 0.125rem transparent;\n  background-color: #fff;\n  color: #001018;\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):active {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.vtmn-btn_variant--primary-reversed:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem transparent,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--secondary {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 0.125rem #001018;\n  color: #001018;\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):hover {\n  background-color: rgba(52, 68, 80, 0.05);\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):active {\n  background-color: rgba(52, 68, 80, 0.15);\n}\n\n.vtmn-btn_variant--secondary:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem #001018,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--secondary-reversed {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 0.125rem #fff;\n  color: #fff;\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):active {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n\n.vtmn-btn_variant--secondary-reversed:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem #fff,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--ghost {\n  background-color: transparent;\n  box-shadow: inset 0 0 0 0.125rem transparent;\n  color: #007dbc;\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):hover {\n  background-color: rgba(0, 83, 125, 0.05);\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):active {\n  background-color: rgba(0, 83, 125, 0.15);\n}\n\n.vtmn-btn_variant--ghost:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem transparent,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_variant--conversion {\n  box-shadow: inset 0 0 0 0.125rem transparent;\n  background-color: #ffea28;\n  color: #001018;\n}\n\n.vtmn-btn_variant--conversion:hover {\n  background-color: #fff58d;\n}\n\n.vtmn-btn_variant--conversion:active {\n  background-color: #fffbc7;\n}\n\n.vtmn-btn_variant--conversion:not([disabled]):focus {\n  box-shadow: inset 0 0 0 0.125rem transparent,\n    0 0 0 0.125rem #7ebee0;\n}\n\n.vtmn-btn_size--small {\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  line-height: calc(16 / 14);\n  min-height: 2rem;\n  min-width: 5.25rem;\n}\n\n.vtmn-btn_size--medium,\n.vtmn-btn_size--stretched {\n  font-size: 1rem;\n  padding: 0.875rem 1.5rem;\n  line-height: 1.25;\n  min-height: 3rem;\n  min-width: 7.5rem;\n}\n\n.vtmn-btn_size--large {\n  font-size: 1.25rem;\n  padding: 1.25rem 2.5rem;\n  line-height: 1.2;\n  min-height: 4rem;\n  min-width: 5.25rem;\n}\n\n.vtmn-btn_size--stretched {\n  width: 100%;\n}\n\n.vtmn-btn-icon {\n  height: 1rem;\n  width: 1rem;\n  margin-right: 0.75rem;\n  vertical-align: middle;\n}\n\n.vtmn-btn-icon--without-label {\n  height: 1.25rem;\n  width: 1.25rem;\n  margin-right: 0;\n}\n\n.vtmn-btn_size--small .vtmn-btn-icon {\n  height: 0.875rem;\n  width: 0.875rem;\n  margin-right: 0.5rem;\n}\n\n.vtmn-btn_size--small .vtmn-btn-icon--without-label {\n  height: 1rem;\n  width: 1rem;\n  margin-right: 0;\n}\n\n.vtmn-btn_size--medium .vtmn-btn-icon {\n  height: 1rem;\n  width: 1rem;\n  margin-right: 0.75rem;\n}\n\n.vtmn-btn_size--medium .vtmn-btn-icon .vtmn-btn-icon--without-label {\n  height: 1.25rem;\n  width: 1.25rem;\n  margin-right: 0;\n}\n\n.vtmn-btn_size--large .vtmn-btn-icon {\n  height: 1.25rem;\n  width: 1.25rem;\n  margin-right: 1rem;\n}\n\n.vtmn-btn_size--large .vtmn-btn-icon--without-label {\n  height: 1.5rem;\n  width: 1.5rem;\n  margin-right: 0;\n}\n",""]),module.exports=exports},1249:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Overview",(function(){return Overview}));__webpack_require__(267),__webpack_require__(4);var internal=__webpack_require__(5);__webpack_require__(1241);function create_fragment(ctx){let button,button_class_value,current;const default_slot_template=ctx[4].default,default_slot=Object(internal.create_slot)(default_slot_template,ctx,ctx[3],null);let button_levels=[{type:"button"},{class:button_class_value=["vtmn-btn","vtmn-btn_variant--"+ctx[0],"vtmn-btn_size--"+ctx[1]].join(" ")},ctx[2]],button_data={};for(let i=0;i<button_levels.length;i+=1)button_data=Object(internal.assign)(button_data,button_levels[i]);return{c(){button=Object(internal.element)("button"),default_slot&&default_slot.c(),Object(internal.set_attributes)(button,button_data)},m(target,anchor){Object(internal.insert)(target,button,anchor),default_slot&&default_slot.m(button,null),current=!0},p(ctx,[dirty]){default_slot&&default_slot.p&&8&dirty&&Object(internal.update_slot)(default_slot,default_slot_template,ctx,ctx[3],dirty,null,null),Object(internal.set_attributes)(button,button_data=Object(internal.get_spread_update)(button_levels,[{type:"button"},(!current||3&dirty&&button_class_value!==(button_class_value=["vtmn-btn","vtmn-btn_variant--"+ctx[0],"vtmn-btn_size--"+ctx[1]].join(" ")))&&{class:button_class_value},4&dirty&&ctx[2]]))},i(local){current||(Object(internal.transition_in)(default_slot,local),current=!0)},o(local){Object(internal.transition_out)(default_slot,local),current=!1},d(detaching){detaching&&Object(internal.detach)(button),default_slot&&default_slot.d(detaching)}}}function instance($$self,$$props,$$invalidate){const omit_props_names=["variant","size"];let $$restProps=Object(internal.compute_rest_props)($$props,omit_props_names),{$$slots:slots={},$$scope:$$scope}=$$props,{variant:variant="primary"}=$$props,{size:size="medium"}=$$props;return $$self.$$set=$$new_props=>{$$props=Object(internal.assign)(Object(internal.assign)({},$$props),Object(internal.exclude_internal_props)($$new_props)),$$invalidate(2,$$restProps=Object(internal.compute_rest_props)($$props,omit_props_names)),"variant"in $$new_props&&$$invalidate(0,variant=$$new_props.variant),"size"in $$new_props&&$$invalidate(1,size=$$new_props.size),"$$scope"in $$new_props&&$$invalidate(3,$$scope=$$new_props.$$scope)},[variant,size,$$restProps,$$scope,slots]}class VtmnButton_svelte_VtmnButton extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,instance,create_fragment,internal.safe_not_equal,{variant:0,size:1})}}var VtmnButton_svelte=VtmnButton_svelte_VtmnButton;function create_default_slot(ctx){let t;return{c(){t=Object(internal.text)("Button")},m(target,anchor){Object(internal.insert)(target,t,anchor)},d(detaching){detaching&&Object(internal.detach)(t)}}}function VtmnButtonView_svelte_create_fragment(ctx){let vtmnbutton,current;const vtmnbutton_spread_levels=[ctx[0]];let vtmnbutton_props={$$slots:{default:[create_default_slot]},$$scope:{ctx:ctx}};for(let i=0;i<vtmnbutton_spread_levels.length;i+=1)vtmnbutton_props=Object(internal.assign)(vtmnbutton_props,vtmnbutton_spread_levels[i]);return vtmnbutton=new VtmnButton_svelte({props:vtmnbutton_props}),{c(){Object(internal.create_component)(vtmnbutton.$$.fragment)},m(target,anchor){Object(internal.mount_component)(vtmnbutton,target,anchor),current=!0},p(ctx,[dirty]){const vtmnbutton_changes=1&dirty?Object(internal.get_spread_update)(vtmnbutton_spread_levels,[Object(internal.get_spread_object)(ctx[0])]):{};2&dirty&&(vtmnbutton_changes.$$scope={dirty:dirty,ctx:ctx}),vtmnbutton.$set(vtmnbutton_changes)},i(local){current||(Object(internal.transition_in)(vtmnbutton.$$.fragment,local),current=!0)},o(local){Object(internal.transition_out)(vtmnbutton.$$.fragment,local),current=!1},d(detaching){Object(internal.destroy_component)(vtmnbutton,detaching)}}}function VtmnButtonView_svelte_instance($$self,$$props,$$invalidate){const omit_props_names=[];let $$restProps=Object(internal.compute_rest_props)($$props,omit_props_names);return $$self.$$set=$$new_props=>{$$props=Object(internal.assign)(Object(internal.assign)({},$$props),Object(internal.exclude_internal_props)($$new_props)),$$invalidate(0,$$restProps=Object(internal.compute_rest_props)($$props,omit_props_names))},[$$restProps]}VtmnButton_svelte_VtmnButton.__docgen={version:3,name:"VtmnButton.svelte",data:[{keywords:[{name:"type",description:"{'primary' | 'primary-reversed' | 'secondary' | 'secondary-reversed' | 'ghost' | 'conversion'}"},{name:"default",description:"'primary'"}],visibility:"public",description:"The variant of the button.",name:"variant",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"'primary' | 'primary-reversed' | 'secondary' | 'secondary-reversed' | 'ghost' | 'conversion'",type:[{kind:"const",text:"'primary'",type:"string",value:"primary"},{kind:"const",text:"'primary-reversed'",type:"string",value:"primary-reversed"},{kind:"const",text:"'secondary'",type:"string",value:"secondary"},{kind:"const",text:"'secondary-reversed'",type:"string",value:"secondary-reversed"},{kind:"const",text:"'ghost'",type:"string",value:"ghost"},{kind:"const",text:"'conversion'",type:"string",value:"conversion"}]},defaultValue:"primary"},{keywords:[{name:"type",description:"{'small' | 'medium' | 'large' | 'stretched'}"},{name:"default",description:"'medium'"}],visibility:"public",description:"The size of the button.",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"union",text:"'small' | 'medium' | 'large' | 'stretched'",type:[{kind:"const",text:"'small'",type:"string",value:"small"},{kind:"const",text:"'medium'",type:"string",value:"medium"},{kind:"const",text:"'large'",type:"string",value:"large"},{kind:"const",text:"'stretched'",type:"string",value:"stretched"}]},defaultValue:"medium"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{name:"default",description:null,visibility:"public",parameters:[]}],refs:[]};class VtmnButtonView_svelte_VtmnButtonView extends internal.SvelteComponent{constructor(options){super(),Object(internal.init)(this,options,VtmnButtonView_svelte_instance,VtmnButtonView_svelte_create_fragment,internal.safe_not_equal,{})}}var VtmnButtonView_svelte=VtmnButtonView_svelte_VtmnButtonView;VtmnButtonView_svelte_VtmnButtonView.__docgen={version:3,name:"VtmnButtonView.svelte",data:[],computed:[],methods:[],components:[],description:"@component Button View",keywords:[{name:"component",description:"Button View"},{name:"wrapper",description:""}],events:[],slots:[],refs:[]};__webpack_exports__.default={title:"Components/VtmnButton",component:VtmnButton_svelte,argTypes:{variant:{type:{name:"string",required:!1},description:"The variant of the button.",defaultValue:"primary",control:{type:"select",options:["primary","primary-reversed","secondary","secondary-reversed","ghost","conversion"]}},size:{type:{name:"string",required:!1},description:"The size of the button.",defaultValue:"medium",control:{type:"select",options:["small","medium","large","stretched"]}}},parameters:{backgrounds:{default:"grey"},actions:{handles:["mouseenter","click","focusin","focusout"]},design:{type:"figma",url:"https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Vtmn-Web?node-id=31%3A136"}}};var Overview=function Template(args){return{Component:VtmnButtonView_svelte,props:args}}.bind({});Overview.args={},Overview.parameters=Object.assign({storySource:{source:"(args) => ({\n  Component: VtmnButtonView,\n  props: args,\n})"}},Overview.parameters)},557:function(module){module.exports=JSON.parse('{"default":"light","values":[{"name":"light","value":"#ffffff"},{"name":"grey","value":"#D9DDE1"},{"name":"blue","value":"#007dbc"},{"name":"dark","value":"#1a2a34"}]}')},558:function(module){module.exports=JSON.parse('{"mobile":{"name":"Mobile","styles":{"width":"360px","height":"640px"},"type":"mobile"},"tablet":{"name":"Tablet","styles":{"width":"768px","height":"1024px"},"type":"tablet"},"smallDesktop":{"name":"Small desktop","styles":{"width":"1024px","height":"1366px"},"type":"desktop"},"mediumDesktop":{"name":"Medium desktop","styles":{"width":"1440px","height":"1024px"},"type":"desktop"},"largeDesktop":{"name":"Large desktop","styles":{"width":"1920px","height":"1080px"},"type":"desktop"}}')},561:function(module,exports,__webpack_require__){__webpack_require__(562),__webpack_require__(718),__webpack_require__(719),__webpack_require__(876),__webpack_require__(1097),__webpack_require__(1102),__webpack_require__(1114),__webpack_require__(1116),__webpack_require__(1121),__webpack_require__(1123),__webpack_require__(1220),__webpack_require__(1223),__webpack_require__(1228),__webpack_require__(1234),module.exports=__webpack_require__(1238)},629:function(module,exports){},719:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(388)}},[[561,1,2]]]);
//# sourceMappingURL=main.e09c80365489443e9fb0.bundle.js.map