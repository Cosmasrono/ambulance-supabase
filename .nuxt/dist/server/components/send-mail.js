exports.ids = [7];
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

/***/ })

};;
//# sourceMappingURL=send-mail.js.map