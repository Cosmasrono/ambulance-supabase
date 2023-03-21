exports.ids = [16,8];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Signup.vue?vue&type=template&id=6a755931&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8\">", "</div>", [_vm._ssrNode("<div class=\"mx-auto max-w-lg\">", "</div>", [_vm._ssrNode("<h1 class=\"text-center text-2xl font-bold text-indigo-600 sm:text-3xl\">\n        Start tracking Ambulance\n      </h1> <p class=\"mx-auto mt-4 max-w-md text-center text-gray-500\"></p> <div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.user) + " created!\n      ") + "</div> <div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">\n        Please verify Email to procede!\n      </div> " + (_vm.err ? "<div role=\"alert\" class=\"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.err) + "!\n      ") + "</div>" : "<!---->") + " "), _vm._ssrNode("<form action class=\"mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl\">", "</form>", [_vm._ssrNode("<p class=\"text-lg font-medium\">Sign Up to your account</p> <div><label for=\"email\" class=\"text-sm font-medium\">Email</label> <div class=\"relative mt-1\"><input type=\"email\" id=\"email\" placeholder=\"Enter email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm\"></div></div> <div><label for=\"password\" class=\"text-sm font-medium\">Password</label> <div class=\"relative mt-1\"><input type=\"password\" id=\"password\" placeholder=\"Enter password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm\"></div></div> <div><label for=\"confirm-password\" class=\"text-sm font-medium\">Confirm Password</label> <div class=\"relative mt-1\"><input type=\"password\" id=\"confirm-password\" placeholder=\"Confirm password\"" + _vm._ssrAttr("value", _vm.confirm_password) + " class=\"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm\"></div></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.loading) + _vm._ssrClass("block w-full rounded-lg px-5 py-3 text-sm font-medium text-white", _vm.loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600') + ">" + _vm._ssrEscape("\n          " + _vm._s(_vm.loading ? "Loading..." : "Sign Up") + "\n        ") + "</button> "), _vm._ssrNode("<p class=\"text-center text-sm text-gray-500\">", "</p>", [_vm._ssrNode("\n          Already have an account?\n          "), _c('NuxtLink', {
    staticClass: "underline",
    attrs: {
      "to": "/Login"
    }
  }, [_vm._v("Sign In")])], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Signup.vue?vue&type=template&id=6a755931&

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Signup.vue?vue&type=script&lang=js&

/* harmony default export */ var Signupvue_type_script_lang_js_ = ({
  name: "Register",
  data() {
    return {
      email: "",
      user: "",
      loading: false,
      password: "",
      confirm_password: "",
      err: ""
    };
  },
  components: {},
  methods: {
    async register() {
      const supabase = Object(supabase_js_["createClient"])("https://swocaqwllmwkocyhqnhm.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI');
      if (this.email.length < 1) {
        this.err = "Email is required";
        return;
      }
      if (this.password.length < 8) {
        this.err = "Password must be at least 8 characters";
        return;
      }
      if (this.password !== this.confirm_password) {
        console.log(this.password, this.confirm_password);
        this.err = "Passwords do not match";
        return;
      }
      /* get user from supabase and check if email exists */
      const main_user = await supabase.auth.getUser();
      /* check if email of the texists  */
      if (!this.email.includes("@")) {
        this.err = "Email is invalid";
        return;
      }
      this.loading = true;
      const {
        user,
        data,
        error
      } = await supabase.auth.signUp({
        email: this.email,
        password: this.password
      });
      if (error) {
        this.err = error.message;
        this.loading = false;
        console.log(error);
      } else {
        this.user = data.user.email;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/Login");
        }, 2000);
        //this.$router.push("/Login");
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Signupvue_type_script_lang_js_ = (Signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Signup.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c29d6ab"
  
)

/* harmony default export */ var Signup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/help.vue?vue&type=template&id=72df66b8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Signup');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/help.vue?vue&type=template&id=72df66b8&

// EXTERNAL MODULE: ./components/Signup.vue + 4 modules
var Signup = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/help.vue?vue&type=script&lang=js&

/* harmony default export */ var helpvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/help.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_helpvue_type_script_lang_js_ = (helpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/help.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_helpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02df0f42"
  
)

/* harmony default export */ var help = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Signup: __webpack_require__(37).default})


/***/ })

};;
//# sourceMappingURL=help.js.map