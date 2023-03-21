exports.ids = [15];
exports.modules = {

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=template&id=771b43a0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex bg-slate-200 items-center justify-center h-screen"
  }, [_vm._ssrNode("<div class=\"w-full max-w-sm\"><h2 class=\"text-3xl font-bold text-gray-900 text-center mb-6\">Admin Login</h2> <form class=\"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\"><div class=\"mb-4\"><label for=\"email\" class=\"block text-gray-700 font-bold mb-2\">\n          Email\n        </label> <input id=\"email\" type=\"email\" required=\"required\" placeholder=\"Enter your email address\"" + _vm._ssrAttr("value", _vm.email) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"></div> <div class=\"mb-4\"><label for=\"password\" class=\"block text-gray-700 font-bold mb-2\">\n          Password\n        </label> <input id=\"password\" type=\"password\" required=\"required\" placeholder=\"Enter your password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"></div> <div class=\"flex items-center justify-between\"><button type=\"submit\" class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\">\n          Sign In\n        </button></div></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin.vue?vue&type=template&id=771b43a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin.vue?vue&type=script&lang=js&
/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  name: "AdminLogin",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted");
      this.$router.push('/manage');
    }
  }
});
// CONCATENATED MODULE: ./pages/admin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f9c1d9e"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=admin.js.map