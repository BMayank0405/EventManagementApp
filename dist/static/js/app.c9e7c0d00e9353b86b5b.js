webpackJsonp([15],{

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__ = __webpack_require__(217);


var _mutations;






__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  strict: true,
  state: {
    token: localStorage.getItem("token"),
    flag: localStorage.getItem("flag"),
    isloggedIn: localStorage.getItem("token") ? true : false,
    name: localStorage.getItem("name")
  },
  mutations: (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["a" /* LOGIN */], function (state, data) {
    state.token = localStorage.getItem("token");
    state.isloggedIn = state.token ? true : false;
    state.flag = localStorage.getItem("flag");
    state.name = localStorage.getItem("name");
  }), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["b" /* LOGOUT */], function (state) {
    state.isloggedIn = false;
    state.token = null;
    state.flag = null;
    state.name = null;
  }), _mutations),
  actions: {
    login: function login(_ref, data) {
      var commit = _ref.commit;

      localStorage.setItem("token", data.token);
      localStorage.setItem("flag", data.flag);
      localStorage.setItem("name", data.name);

      commit(__WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["a" /* LOGIN */], data);
    },
    logout: function logout(_ref2) {
      var commit = _ref2.commit;

      localStorage.clear();
      commit(__WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["b" /* LOGOUT */]);
    }
  }
}));

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGOUT; });
var LOGIN = "LOGIN";
var LOGOUT = "LOGOUT";

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  name: "App"
});

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_svgicon__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_svgicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_svgicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_es5_components_Vuetify__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuetify_es5_components_Vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuetify_es5_components_Vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_es5_components_VApp__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_es5_components_VApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify_es5_components_VApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_es5_components_VIcon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_es5_components_VIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuetify_es5_components_VIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_components_VGrid__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_components_VGrid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vuetify_es5_components_VGrid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuetify_es5_components_VToolbar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuetify_es5_components_VToolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vuetify_es5_components_VToolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuetify_es5_components_VSubheader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vuetify_es5_components_VSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vuetify_es5_components_VSubheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuetify_es5_components_VSelect__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuetify_es5_components_VSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vuetify_es5_components_VSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_components_VTextField__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_components_VTextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vuetify_es5_components_VTextField__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vuetify_es5_components_VBtn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vuetify_es5_components_VBtn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vuetify_es5_components_VBtn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vuetify_es5_components_VCard__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vuetify_es5_components_VCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_vuetify_es5_components_VCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vuetify_es5_components_VAvatar__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vuetify_es5_components_VAvatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vuetify_es5_components_VAvatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vuetify_es5_components_VDatePicker__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_vuetify_es5_components_VDatePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_vuetify_es5_components_VDatePicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vuetify_es5_components_VTimePicker__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vuetify_es5_components_VTimePicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_vuetify_es5_components_VTimePicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vuetify_es5_components_VForm__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_vuetify_es5_components_VForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_vuetify_es5_components_VForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vuetify_es5_components_VMenu__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_vuetify_es5_components_VMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_vuetify_es5_components_VMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vuetify_es5_components_VCheckbox__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_vuetify_es5_components_VCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_vuetify_es5_components_VCheckbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_vuetify_es5_components_VDialog__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_vuetify_es5_components_VDialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_vuetify_es5_components_VDialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_vuetify_es5_components_VAutocomplete__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_vuetify_es5_components_VAutocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_vuetify_es5_components_VAutocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_vuetify_src_stylus_app_styl__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_vuetify_src_stylus_app_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__node_modules_vuetify_src_stylus_app_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_vuetify_es5_directives__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_vuetify_es5_directives___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_vuetify_es5_directives__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_vuex_router_sync__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_vue_worker__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__store_store__ = __webpack_require__(215);




























__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vuetify_es5_components_Vuetify___default.a, {
  components: {
    Vuetify: __WEBPACK_IMPORTED_MODULE_4_vuetify_es5_components_Vuetify___default.a,
    VApp: __WEBPACK_IMPORTED_MODULE_5_vuetify_es5_components_VApp___default.a,
    VIcon: __WEBPACK_IMPORTED_MODULE_6_vuetify_es5_components_VIcon___default.a,
    VGrid: __WEBPACK_IMPORTED_MODULE_7_vuetify_es5_components_VGrid___default.a,
    VToolbar: __WEBPACK_IMPORTED_MODULE_8_vuetify_es5_components_VToolbar___default.a,
    VSubheader: __WEBPACK_IMPORTED_MODULE_9_vuetify_es5_components_VSubheader___default.a,
    VSelect: __WEBPACK_IMPORTED_MODULE_10_vuetify_es5_components_VSelect___default.a,
    VTextField: __WEBPACK_IMPORTED_MODULE_11_vuetify_es5_components_VTextField___default.a,
    VBtn: __WEBPACK_IMPORTED_MODULE_12_vuetify_es5_components_VBtn___default.a,
    VCard: __WEBPACK_IMPORTED_MODULE_13_vuetify_es5_components_VCard___default.a,
    VAvatar: __WEBPACK_IMPORTED_MODULE_14_vuetify_es5_components_VAvatar___default.a,
    VDatePicker: __WEBPACK_IMPORTED_MODULE_15_vuetify_es5_components_VDatePicker___default.a,
    VTimePicker: __WEBPACK_IMPORTED_MODULE_16_vuetify_es5_components_VTimePicker___default.a,
    VForm: __WEBPACK_IMPORTED_MODULE_17_vuetify_es5_components_VForm___default.a,
    VMenu: __WEBPACK_IMPORTED_MODULE_18_vuetify_es5_components_VMenu___default.a,
    VCheckbox: __WEBPACK_IMPORTED_MODULE_19_vuetify_es5_components_VCheckbox___default.a,
    VDialog: __WEBPACK_IMPORTED_MODULE_20_vuetify_es5_components_VDialog___default.a,
    VAutocomplete: __WEBPACK_IMPORTED_MODULE_21_vuetify_es5_components_VAutocomplete___default.a
  },
  directives: {
    Ripple: __WEBPACK_IMPORTED_MODULE_23_vuetify_es5_directives__["Ripple"]
  }
});
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_svgicon___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_25_vue_worker__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
Object(__WEBPACK_IMPORTED_MODULE_24_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_26__store_store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]);
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_26__store_store__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
  }
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c23e332_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(82);
function injectStyle (ssrContext) {
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(70)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c23e332_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('transition-group',{attrs:{"name":"page__rotate"}},[_c('router-view',{key:"router"})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(84);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: "/",
    name: "Main",
    component: function component() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 220));
    }
  }, {
    path: "/register",
    name: "Register",
    component: function component() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 221));
    }
  }, {
    path: "/login",
    name: "Login",
    component: function component() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 222));
    }
  }, {
    path: "/createEvent",
    name: "CreateEvent",
    component: function component() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 223));
    }
  }, {
    path: "/societyHome",
    name: "SocietyHome",
    component: function component() {
      return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 224));
    }
  }, {
    path: "/editEvent",
    name: "EventEdit",
    component: function component() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 225));
    }
  }, {
    path: "/facultyHome",
    name: "FacultyHome",
    component: function component() {
      return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 226));
    }
  }, {
    path: "/adminHome",
    name: "AdminHome",
    component: function component() {
      return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 227));
    }
  }, {
    path: "/UpdateSocietyFaculty",
    name: "UpdateSocietyFaculty",
    component: function component() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 228));
    }
  }, {
    path: "/removeSocietyFaculty",
    name: "removeSocietyFaculty",
    component: function component() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 229));
    }
  }, {
    path: "/addremoveVenue",
    name: "AddRemoveVenue",
    component: function component() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 230));
    }
  }, {
    path: "/Status",
    name: "Status",
    component: function component() {
      return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 231));
    }
  }, {
    path: "/History",
    name: "History",
    component: function component() {
      return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 232));
    }
  }, {
    path: "/pendingEvents",
    name: "PendingEvents",
    component: function component() {
      return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 233));
    }
  }]
}));

/***/ })

},[76]);
//# sourceMappingURL=app.c9e7c0d00e9353b86b5b.js.map