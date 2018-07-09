webpackJsonp([24],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Buttons_vue__ = __webpack_require__(430);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ede6b11a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__ = __webpack_require__(480);
function injectStyle (ssrContext) {
  __webpack_require__(478)
}
var normalizeComponent = __webpack_require__(70)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ede6b11a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Buttons_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ede6b11a_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    btns: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      small: window.innerWidth < 400
    };
  }
});

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(219)("083f9a8d", content, true, {});

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(218)(true);
// imports


// module
exports.push([module.i, ".container[data-v-ede6b11a]{padding:25px!important;width:80%;border-radius:10px;background-color:#e6e5e561}.flex[data-v-ede6b11a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:8px!important}.flex[data-v-ede6b11a]:first-of-type{margin-top:20px}.flex[data-v-ede6b11a]:last-of-type{margin-bottom:20px}.btn[data-v-ede6b11a]{font-size:1.2rem}@media screen and (max-width:560px){.btn[data-v-ede6b11a]{font-size:1rem}}", "", {"version":3,"sources":["/home/bmayank/projnew/src/components/Commons/Buttons.vue"],"names":[],"mappings":"AACA,4BACE,uBAAyB,AACzB,UAAW,AACX,mBAAoB,AACpB,0BAA4B,CAC7B,AACD,uBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,WAAY,AACZ,qBAAwB,CACzB,AACD,qCACI,eAAiB,CACpB,AACD,oCACI,kBAAoB,CACvB,AACD,sBACE,gBAAkB,CACnB,AACD,oCACA,sBACI,cAAgB,CACnB,CACA","file":"Buttons.vue","sourcesContent":["\n.container[data-v-ede6b11a] {\n  padding: 25px !important;\n  width: 80%;\n  border-radius: 10px;\n  background-color: #e6e5e561;\n}\n.flex[data-v-ede6b11a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  padding: 8px !important;\n}\n.flex[data-v-ede6b11a]:first-of-type {\n    margin-top: 20px;\n}\n.flex[data-v-ede6b11a]:last-of-type {\n    margin-bottom: 20px;\n}\n.btn[data-v-ede6b11a] {\n  font-size: 1.2rem;\n}\n@media screen and (max-width: 560px) {\n.btn[data-v-ede6b11a] {\n    font-size: 1rem;\n}\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"sm12":""}},[_c('v-container',{attrs:{"grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":""}},_vm._l((_vm.btns),function(btn,index){return _c('v-flex',{key:index,attrs:{"xs12":""}},[_c('v-btn',{attrs:{"round":"","to":btn.to,"large":!_vm.small,"color":"primary"}},[_c('v-avatar',[_c('v-icon',{attrs:{"medium":!_vm.small}},[_vm._v(_vm._s(btn.icon))])],1),_vm._v("\n          "+_vm._s(btn.name)+"\n\n        ")],1)],1)}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=24.3d6eaa95a9bb7e8023d4.js.map