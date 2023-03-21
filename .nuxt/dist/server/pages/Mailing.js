exports.ids = [12,7];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SendMail.vue?vue&type=template&id=9b800dc8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex flex-col justify-center items-center\" data-v-9b800dc8><div class=\"w-full max-w-xs\" data-v-9b800dc8><form accept-charset=\"UTF-8\" method=\"POST\" class=\"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\" data-v-9b800dc8>" + (_vm.success ? "<div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\" data-v-9b800dc8><strong class=\"font-bold\" data-v-9b800dc8>Success!</strong> <span class=\"block sm:inline\" data-v-9b800dc8>" + _vm._ssrEscape(_vm._s(_vm.success)) + "</span></div>" : "<!---->") + " <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Name\n          </label> <input id=\"username\" type=\"text\" placeholder=\"Name\"" + _vm._ssrAttr("value", _vm.name) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8></div> <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Phone\n          </label> <input id=\"username\" type=\"text\" placeholder=\"Phone\"" + _vm._ssrAttr("value", _vm.phone) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8></div> <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Email\n          </label> <input id=\"username\" type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8></div> <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Subject\n          </label> <input id=\"username\" type=\"text\" placeholder=\"Subject\"" + _vm._ssrAttr("value", _vm.subject) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8></div> <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Invite Link\n          </label> <input id=\"username\" type=\"text\" placeholder=\"Invite Link\"" + _vm._ssrAttr("value", _vm.invite_link) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8></div> <div class=\"mb-4\" data-v-9b800dc8><label for=\"username\" class=\"block text-gray-700 text-sm font-bold mb-2\" data-v-9b800dc8>\n            Message\n          </label> <textarea id=\"username\" type=\"text\" placeholder=\"Message\" class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\" data-v-9b800dc8>" + _vm._ssrEscape(_vm._s(_vm.message)) + "</textarea></div> <div class=\"flex items-center justify-between\" data-v-9b800dc8><button" + _vm._ssrAttr("disabled", _vm.loading) + " type=\"submit\"" + _vm._ssrClass("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", {
    'opacity-50 cursor-not-allowed': _vm.loading
  }) + " data-v-9b800dc8>" + _vm._ssrEscape("\n            " + _vm._s(_vm.loading ? "Sending..." : "Send") + "\n          ") + "</button></div></form></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SendMail.vue?vue&type=template&id=9b800dc8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SendMail.vue?vue&type=script&lang=js&
/* harmony default export */ var SendMailvue_type_script_lang_js_ = ({
  name: "SendMail",
  data() {
    return {
      subject: "",
      phone: "",
      loading: false,
      success: "",
      name: "",
      invite_link: "",
      email: "",
      message: "",
      isSuccess: false
    };
  },
  methods: {
    onSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
        phone: this.phone,
        invite_link: this.invite_link,
        subject: this.subject
      };
      this.loading = true;
      fetch("https://getform.io/f/cabd1a3c-a6e1-44da-a47f-4be38e304729", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(data => {
        // Success
        this.isSuccess = true;
        this.loading = false;
        this.success = "Your message has been sent. Thank you!";
        this.name = "";
        this.email = "";
        this.message = "";
        this.phone = "";
        this.invite_link = "";
        this.subject = "";
        setTimeout(() => {
          this.success = "";
          /* redirect to main */
          this.$router.push("/Main");
        }, 5000);
      }).catch(error => {
        // Error
        console.log(error);
        this.loading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./components/SendMail.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SendMailvue_type_script_lang_js_ = (SendMailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SendMail.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SendMailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9b800dc8",
  "cfb3469c"
  
)

/* harmony default export */ var SendMail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("760627a9", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailing_vue_vue_type_style_index_0_id_0265fc83_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailing_vue_vue_type_style_index_0_id_0265fc83_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailing_vue_vue_type_style_index_0_id_0265fc83_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailing_vue_vue_type_style_index_0_id_0265fc83_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailing_vue_vue_type_style_index_0_id_0265fc83_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-0265fc83]{font-family:\"Quantico\",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Mailing.vue?vue&type=template&id=0265fc83&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('SendMail')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Mailing.vue?vue&type=template&id=0265fc83&scoped=true&

// EXTERNAL MODULE: ./components/SendMail.vue + 4 modules
var SendMail = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Mailing.vue?vue&type=script&lang=js&

/* harmony default export */ var Mailingvue_type_script_lang_js_ = ({
  components: {
    SendMail: SendMail["default"]
  }
});
// CONCATENATED MODULE: ./pages/Mailing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Mailingvue_type_script_lang_js_ = (Mailingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Mailing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Mailingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0265fc83",
  "64a6553a"
  
)

/* harmony default export */ var Mailing = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SendMail: __webpack_require__(38).default})


/***/ })

};;
//# sourceMappingURL=Mailing.js.map