exports.ids = [18];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("993d846e", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_id_3ca51cb6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_id_3ca51cb6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_id_3ca51cb6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_id_3ca51cb6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_style_index_0_id_3ca51cb6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{background-color:aqua;margin:auto;padding:auto;text-align:center}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/manage.vue?vue&type=template&id=3ca51cb6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {}, [_vm._ssrNode("<div>", "</div>", [_c('Nuxt-Link', {
    staticClass: "underline",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" <div class=\"flex flex-col items-center justify-center h-screen md:justify-end\"><h1 class=\"text-3xl font-bold mb-4\">Ambulance Status Table</h1> <table class=\"table-auto w-full\"><thead><tr><th class=\"px-4 py-2\">Ambulance No.</th> <th class=\"px-4 py-2\">Status</th> <th class=\"px-4 py-2\">Driver Name</th></tr></thead> <tbody>" + _vm._ssrList(_vm.drivers, function (driver, index) {
    return "<tr><td class=\"border border-spacing-1 px-4 py-2\">" + _vm._ssrEscape(_vm._s(index + 1)) + "</td> <td class=\"border px-4 py-2\">" + _vm._ssrEscape(_vm._s(driver.status)) + "</td> <td class=\"border px-4 py-2\">" + _vm._ssrEscape(_vm._s(driver.name)) + "</td></tr>";
  }) + "</tbody></table></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/manage.vue?vue&type=template&id=3ca51cb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/manage.vue?vue&type=script&lang=js&
/* harmony default export */ var managevue_type_script_lang_js_ = ({
  data() {
    return {
      drivers: [{
        id: 1,
        status: 'Available',
        name: 'John Smith'
      }, {
        id: 2,
        status: 'Unavailable',
        name: 'Jane Doe'
      }, {
        id: 3,
        status: 'On Duty',
        name: 'Bob Johnson'
      }, {
        id: 4,
        status: 'On Duty',
        name: 'Bob Johnson'
      }, {
        id: 5,
        status: 'On Duty',
        name: 'Bob Johnson'
      }, {
        id: 6,
        status: 'On Duty',
        name: 'Bob Johnson'
      }, {
        id: 7,
        status: 'On Duty',
        name: 'Bob Johnson'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/manage.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_managevue_type_script_lang_js_ = (managevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/manage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_managevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "522f5526"
  
)

/* harmony default export */ var manage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=manage.js.map