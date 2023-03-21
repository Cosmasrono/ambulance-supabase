exports.ids = [13,2,5,9];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=template&id=1da4bede&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div data-v-1da4bede><div class=\"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center\"" + _vm._ssrStyle(null, null, {
    display: !_vm.load ? '' : 'none'
  }) + " data-v-1da4bede><p class=\"sm:w-1/3 w-2/3 text-center text-white text-2xl\" data-v-1da4bede>\n        it's loading \n      </p></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Loader.vue?vue&type=template&id=1da4bede&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=script&lang=js&
/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  props: ["load"]
});
// CONCATENATED MODULE: ./components/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Loader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1da4bede",
  "e768bfb4"
  
)

/* harmony default export */ var Loader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/currentPlace.vue?vue&type=template&id=4ab0cdc6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"flex flex-col bg-slate-100\" data-v-4ab0cdc6><div class=\"-my-2 sm:-mx-6 lg:-mx-8\" data-v-4ab0cdc6><div class=\"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8\" data-v-4ab0cdc6><div class=\"shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg\" data-v-4ab0cdc6><table class=\"min-w-full divide-y divide-gray-200\" data-v-4ab0cdc6><thead class=\"bg-gray-100\" data-v-4ab0cdc6><tr data-v-4ab0cdc6><th scope=\"col\" class=\"px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider\" data-v-4ab0cdc6>\n                  Key\n                </th> <th scope=\"col\" class=\"px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider\" data-v-4ab0cdc6>\n                  Place\n                </th></tr></thead> " + _vm._ssrList(_vm.locs, function (loc) {
    return "<tbody class=\"bg-gray-50 divide-y divide-gray-600\" data-v-4ab0cdc6><tr data-v-4ab0cdc6><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\" data-v-4ab0cdc6>\n                  Location\n                </td> <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-800\" data-v-4ab0cdc6>" + _vm._ssrEscape("\n                  " + _vm._s(loc.location) + "\n                ") + "</td></tr> <tr data-v-4ab0cdc6><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\" data-v-4ab0cdc6>\n                  City\n                </td> <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-800\" data-v-4ab0cdc6>" + _vm._ssrEscape("\n                  " + _vm._s(loc.city) + "\n                ") + "</td></tr> <tr data-v-4ab0cdc6><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\" data-v-4ab0cdc6>\n                  Latitude\n                </td> <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-800\" data-v-4ab0cdc6>" + _vm._ssrEscape("\n                  " + _vm._s(loc.latitude) + "\n                ") + "</td></tr> <tr data-v-4ab0cdc6><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\" data-v-4ab0cdc6>\n                  Longitude\n                </td> <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-800\" data-v-4ab0cdc6>" + _vm._ssrEscape("\n                  " + _vm._s(loc.longitude) + "\n                ") + "</td></tr> <tr data-v-4ab0cdc6><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900\" data-v-4ab0cdc6>\n                  Accuracy\n                </td> <td class=\"px-6 py-4 whitespace-nowrap text-sm text-gray-800\" data-v-4ab0cdc6>" + _vm._ssrEscape("\n                  " + _vm._s(loc.accuracy) + "\n                ") + "</td></tr></tbody>";
  }) + "</table></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/currentPlace.vue?vue&type=template&id=4ab0cdc6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/currentPlace.vue?vue&type=script&lang=js&
/* harmony default export */ var currentPlacevue_type_script_lang_js_ = ({
  props: ["load", "locs"]
});
// CONCATENATED MODULE: ./components/currentPlace.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_currentPlacevue_type_script_lang_js_ = (currentPlacevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/currentPlace.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_currentPlacevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ab0cdc6",
  "885f057e"
  
)

/* harmony default export */ var currentPlace = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/test.vue?vue&type=template&id=ca1c713c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {}, [_vm.locs.length != 0 ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"md:justify-end flex md:items-center justify-start items-start text-black gap-5 px-6 md:px-32 py-3 md:py-5\"" + _vm._ssrStyle(null, null, {
    display: _vm.load ? '' : 'none'
  }) + ">", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center gap-2 bg-blue-600 rounded px-3 py-2",
    attrs: {
      "to": "/Maps"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v("Maps.")])]), _vm._ssrNode(" <button class=\"flex items-center gap-2 bg-blue-600 rounded px-3 py-2 text-white\"><span>Logout</span></button> <button class=\"px-9 py-3 bg-red-600 rounded hidden\">Login</button>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col justify-center items-center mx-auto my-2 rounded text-black\"" + _vm._ssrStyle(null, null, {
    display: _vm.load ? '' : 'none'
  }) + ">", "</div>", [_vm._ssrNode("<div role=\"alert\" class=\"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative\"" + _vm._ssrStyle(null, null, {
    display: _vm.success ? '' : 'none'
  }) + ">" + _vm._ssrEscape("\n        " + _vm._s(_vm.success) + "\n      ") + "</div> " + (_vm.err ? "<div role=\"alert\" class=\"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative\">" + _vm._ssrEscape("\n        " + _vm._s(_vm.err) + "!\n      ") + "</div>" : "<!---->") + " <span class=\"text-lg text-black\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">" + _vm._ssrEscape("Hi " + _vm._s(_vm.email) + "!") + "</span> "), _c('currentPlace', {
    attrs: {
      "locs": _vm.locs
    }
  })], 2), _vm._ssrNode(" "), !_vm.load ? _vm._ssrNode("<div>", "</div>", [_c('Loader', {
    attrs: {
      "load": _vm.load
    }
  })], 1) : _vm._e()], 2) : _vm._ssrNode("<div class=\"flex flex-col justify-center items-center mx-auto my-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md md:max-w-5xl\"><span class=\"text-lg text-black\"" + _vm._ssrStyle(null, null, {
    display: _vm.user ? '' : 'none'
  }) + ">" + _vm._ssrEscape("Hi " + _vm._s(_vm.email) + "!") + "</span> <span></span> <span class=\"text-lg text-black\">Please Allow Location Access on your device!\n    </span> <span class=\"text-lg text-black\">Locations not Displayed then you can refresh</span></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/test.vue?vue&type=template&id=ca1c713c&

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// EXTERNAL MODULE: ./components/currentPlace.vue + 4 modules
var currentPlace = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/test.vue?vue&type=script&lang=js&
//import L from "leaflet";


/* harmony default export */ var testvue_type_script_lang_js_ = ({
  data() {
    return {
      client: Object(supabase_js_["createClient"])("https://swocaqwllmwkocyhqnhm.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'),
      latitude: null,
      name: "",
      longitude: null,
      err: null,
      success: null,
      user: null,
      signing: true,
      load: false,
      email: "",
      locs: []
    };
  },
  components: {
    currentPlace: currentPlace["default"]
  },
  methods: {
    async getUser() {
      const user = await this.client.auth.getUser();
      this.email = user.data.user.email;
      this.user = user;
      console.log(user);
    },
    /* Signout user in supabase */
    async logout() {
      const {
        error
      } = await this.client.auth.signOut();
      if (error) {
        this.err = error.message;
      } else {
        this.success = "You have been logged out";
        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      }
    },
    async listenForLocationChanges() {
      /* subscribe to new locations thro channel changes from supabase */
      const subs = this.client.channel("locations").on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "locations"
      }, payload => {
        console.log("Change received!", payload);
      }).subscribe();
    },
    getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(position => {
        const {
          latitude,
          longitude
        } = position.coords;
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`).then(response => {
          return response.json();
        }).then(data => {
          console.log(data);
          this.locs.push({
            location: data.display_name,
            city: data.address.city,
            latitude: latitude,
            longitude: longitude,
            accuracy: position.coords.accuracy
          });
          this.load = true;
        });
        console.log(latitude, longitude);
      }, error => {
        console.error("Error getting current position:", error);
      });
    },
    watchCurrentPosition() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const success = pos => {
        const crd = pos.coords;
        /// console.log("Your current position is:");
        // console.log(`Latitude : ${crd.latitude}`);
        //  console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        //console.log(crd);
        this.latitude = crd.latitude;
        this.longitude = crd.longitude;
        /* insert new locations(latitude and longitude) to supabase */
        this.client.from("locations").insert([{
          latitude: this.latitude,
          longitude: this.longitude
        }]).then(() => {
          console.log("Location added to Supabase:", this.latitude);
        }).catch(error => {
          console.error("Error adding location to Supabase:", error);
        });
      };
      const error = err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.watchPosition(success, error, options);
    }
  },
  mounted() {
    //this.setupMap();
    //   this.getCurrentPosition();
    this.getUser();
    this.watchCurrentPosition();
    this.getCurrentPosition();
    setTimeout(() => {
      this.load = true;
    }, 5000);
  }
});
// CONCATENATED MODULE: ./components/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/test.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c4810876"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Loader: __webpack_require__(28).default})


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5f28f918", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3da70c0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3da70c0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3da70c0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3da70c0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_3da70c0d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-3da70c0d]{font-family:\"Quantico\",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Main.vue?vue&type=template&id=3da70c0d&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div data-v-3da70c0d><div data-v-3da70c0d><div class=\"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center\"" + _vm._ssrStyle(null, null, {
    display: _vm.loading ? '' : 'none'
  }) + " data-v-3da70c0d><h2 class=\"text-center dark:text-pink-300 text-indigo-100 text-xl font-semibold\" data-v-3da70c0d></h2> <p class=\"sm:w-1/3 w-2/3 text-center text-white text-2xl\" data-v-3da70c0d>\n          it's loading .....\n        </p></div></div></div> "), _c('Test')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Main.vue?vue&type=template&id=3da70c0d&scoped=true&

// EXTERNAL MODULE: ./components/test.vue + 4 modules
var test = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Main.vue?vue&type=script&lang=js&
//import DisplayMaps from "../components/DisplayMaps.vue";
//import Loadinger from "../components/Loadinger.vue";

/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  components: {
    Test: test["default"]
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./pages/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Main.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3da70c0d",
  "354badda"
  
)

/* harmony default export */ var Main = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Test: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=Main.js.map