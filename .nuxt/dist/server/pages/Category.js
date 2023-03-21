exports.ids = [10];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ef68239e", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_6ef7cef6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_6ef7cef6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_6ef7cef6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_6ef7cef6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_style_index_0_id_6ef7cef6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{font-family:\"Quantico\",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Category.vue?vue&type=template&id=6ef7cef6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {}, [_vm._ssrNode("<div class=\"rounded-lg text-center shadow-xl max-w-md mx-auto mt-4 md:mb-4\">", "</div>", [_vm._ssrNode("<div class=\"px-6 py-5 rounded shadow-xl shadow-black\">", "</div>", [_vm._ssrNode("<p class=\"font-medium text-black\">What do you want to do</p> "), _vm._ssrNode("<div class=\"mt-4 space-y-2\">", "</div>", [_c('nuxt-link', {
    staticClass: "block rounded-full border px-8 py-3 text-sm font-medium border-gray-500 bg-blue-700 text-gray-200",
    attrs: {
      "to": "/Mailing"
    }
  }, [_vm._v("\n          Share your Location to be accessed by ambulance\n        ")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "block rounded-full border border-gray-500 px-8 py-3 text-sm font-medium text-gray-200 bg-blue-700",
    attrs: {
      "to": "/Main"
    }
  }, [_vm._v("\n          Track incident Location\n        ")])], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Category.vue?vue&type=template&id=6ef7cef6&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Category.vue?vue&type=script&setup=true&lang=ts&


/* harmony default export */ var Categoryvue_type_script_setup_true_lang_ts_ = (/*#__PURE__*/Object(external_vue_["defineComponent"])({
  __name: 'Category',
  setup(__props) {

return { __sfc: true, }
}

}));
// CONCATENATED MODULE: ./pages/Category.vue?vue&type=script&setup=true&lang=ts&
 /* harmony default export */ var pages_Categoryvue_type_script_setup_true_lang_ts_ = (Categoryvue_type_script_setup_true_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Category.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Categoryvue_type_script_setup_true_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5f33e3c2"
  
)

/* harmony default export */ var Category = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Category.js.map