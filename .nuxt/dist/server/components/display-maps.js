exports.ids = [3];
exports.modules = {

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DisplayMaps.vue?vue&type=template&id=28b8244e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("hello from mapping")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/DisplayMaps.vue?vue&type=template&id=28b8244e&scoped=true&

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DisplayMaps.vue?vue&type=script&lang=js&
/*  ['nuxt-supabase', {
    supabaseUrl: 'https://btozlwgodrieiivvilno.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0b3psd2dvZHJpZWlpdnZpbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzQ2NDksImV4cCI6MTk4NDk1MDY0OX0.mCLYF2ZKas2hOfAUapacMUqysLPLgKfz3tRp99MrIYg'
  }] */


/* harmony default export */ var DisplayMapsvue_type_script_lang_js_ = ({
  data() {
    return {
      locs: null
    };
  },
  setup() {
    const supabaseUrl = "https://swocaqwllmwkocyhqnhm.supabase.co";
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI';
    const supabase = Object(supabase_js_["createClient"])(supabaseUrl, supabaseKey);
    const locs = Object(external_vue_["ref"])("");
    async function getLocations() {
      const {
        data,
        error
      } = await supabase.from("locations").select("*").order("created_at", {
        descending: true
      });
      if (error) {
        console.log(error);
      }
      let res = JSON.stringify(data);
      locs.value = data;
      console.table(locs.value);
    }
    getLocations();
    return {
      getLocations,
      locs
    };
  }
});
// CONCATENATED MODULE: ./components/DisplayMaps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DisplayMapsvue_type_script_lang_js_ = (DisplayMapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DisplayMaps.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DisplayMapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "28b8244e",
  "57dd5676"
  
)

/* harmony default export */ var DisplayMaps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=display-maps.js.map