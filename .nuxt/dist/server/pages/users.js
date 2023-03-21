exports.ids = [19];
exports.modules = {

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users.vue?vue&type=template&id=6b2817c6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bg-slate-200 container mx-auto p-4"
  }, [_vm._ssrNode("<form class=\"bg-slate-200 rounded-lg shadow-md p-8\"><h2 class=\"text-2xl font-bold mb-4\">Ambulance Booking Form</h2> <div class=\"mb-4\"></div> <div class=\"mb-4\"><label for=\"date\" class=\"block text-gray-700 font-bold mb-2\">\n        Date\n      </label> <input id=\"date\" type=\"date\" class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"></div></form> <div class=\"mb-14\"><label for=\"stylist\" class=\"block text-gray-700 font-bold mb-2\">\n   Available ambulance\n      </label> <select id=\"stylist\" class=\"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"><option value>Choose a ambulance</option> <option value=\"John\">option 1</option> <option value=\"Jane\">option 2</option> <option value=\"Sarah\">option 2</option></select></div> <div class=\"flex items-center justify-center\"><button class=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus\">Submit</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/users.vue?vue&type=template&id=6b2817c6&

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users.vue?vue&type=script&lang=js&

const supabaseUrl = 'https://swocaqwllmwkocyhqnhm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI';
const supabase = Object(supabase_js_["createClient"])(supabaseUrl, supabaseKey);
/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  methods: {
    async submitForm() {
      const {
        data,
        error
      } = await supabase.from('users').insert({
        date: this.date,
        ambulance: this.ambulance
      });
      if (error) {
        console.log('Error inserting data:', error.message);
      } else {
        alert('okey we are checking on you:', data);
        this.$router.push('/login');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/users.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/users.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2396a3d7"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=users.js.map