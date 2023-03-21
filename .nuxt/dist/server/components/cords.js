exports.ids = [1,4,5];
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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("606427b2", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Geo-map.vue?vue&type=template&id=731bd5b6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', [_vm._ssrNode("<div class=\"md:justify-end flex md:items-center justify-start items-start text-blue gap-5 px-6 md:px-32 py-3 md:py-5 bg-slate-50\"" + _vm._ssrStyle(null, null, {
    display: _vm.load ? '' : 'none'
  }) + ">", "</div>", [_c('nuxt-link', {
    staticClass: "flex items-center gap-2",
    attrs: {
      "to": "/Category"
    }
  }, [_c('span', [_vm._v("Home")])]), _vm._ssrNode(" <button class=\"flex items-center gap-2\"><span>Refresh map</span></button> <button class=\"flex items-center gap-2\"><span>Logout</span></button> <button class=\"px-9 py-3 bg-red-600 rounded hidden\">Login</button>")], 2), _vm._ssrNode(" "), !_vm.load ? _vm._ssrNode("<div>", "</div>", [_c('Loader', {
    attrs: {
      "load": _vm.load
    }
  })], 1) : _vm._ssrNode("<div id=\"map-wrap\" style=\"height: 100vh\">", "</div>", [_c('client-only', [_c('l-map', {
    attrs: {
      "zoom": 15,
      "center": [_vm.latitude, _vm.longitude]
    }
  }, [_c('l-tile-layer', {
    attrs: {
      "url": "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    }
  }), _vm._v(" "), _c('l-marker', {
    attrs: {
      "lat-lng": [_vm.latitude, _vm.longitude]
    }
  })], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Geo-map.vue?vue&type=template&id=731bd5b6&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(28);

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Geo-map.vue?vue&type=script&lang=js&


/* harmony default export */ var Geo_mapvue_type_script_lang_js_ = ({
  props: ["latitude", "longitude"],
  data() {
    return {
      load: false,
      client: Object(supabase_js_["createClient"])("https://swocaqwllmwkocyhqnhm.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI')
    };
  },
  methods: {
    refresh() {
      window.location.reload();
    },
    async logout() {
      this.client.auth.signOut();
      this.$router.push("/");
    }
    /*  getLatestLocation() {
      this.client
        .from("locations")
        .select("latitude, longitude")
        .order("created_at", { ascending: false })
        .limit(1)
        .then(({ data }) => {
          const latestLatitude = data[0]?.latitude;
          const latestLongitude = data[0]?.longitude;
          console.log("Latest location:", latestLatitude, latestLongitude);
        })
        .catch((error) => {
          console.error("Error getting latest location:", error);
        });
    }, */
  },

  mounted() {
    setTimeout(() => {
      this.load = true;
    }, 4000);
  },
  components: {
    Loader: Loader["default"]
  }
});
// CONCATENATED MODULE: ./components/Geo-map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Geo_mapvue_type_script_lang_js_ = (Geo_mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Geo-map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Geo_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c3e8846"
  
)

/* harmony default export */ var Geo_map = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Loader: __webpack_require__(28).default})


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geo_map_vue_vue_type_style_index_0_id_731bd5b6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geo_map_vue_vue_type_style_index_0_id_731bd5b6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geo_map_vue_vue_type_style_index_0_id_731bd5b6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geo_map_vue_vue_type_style_index_0_id_731bd5b6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Geo_map_vue_vue_type_style_index_0_id_731bd5b6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cords.vue?vue&type=template&id=db1a9fc8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('GeoMap', {
    attrs: {
      "latitude": _vm.latitude,
      "longitude": _vm.longitude
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cords.vue?vue&type=template&id=db1a9fc8&

// EXTERNAL MODULE: ./components/Geo-map.vue + 4 modules
var Geo_map = __webpack_require__(32);

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cords.vue?vue&type=script&lang=js&


/* harmony default export */ var Cordsvue_type_script_lang_js_ = ({
  data() {
    return {
      client: Object(supabase_js_["createClient"])("https://swocaqwllmwkocyhqnhm.supabase.co", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'),
      latitude: null,
      longitude: null
    };
  },
  mounted() {
    /*   this.getLocation(); */
    this.getLatestLocation();
  },
  created() {},
  methods: {
    getLatestLocation() {
      this.client.from("locations").select("latitude, longitude").order("created_at", {
        ascending: false
      }).limit(1).then(({
        data
      }) => {
        var _data$, _data$2;
        const latestLatitude = (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.latitude;
        const latestLongitude = (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.longitude;
        this.latitude = latestLatitude ? latestLatitude : -1.23322;
        this.longitude = latestLongitude ? latestLongitude : 36.88333;
        console.log("Latest location:", latestLatitude, latestLongitude);
      }).catch(error => {
        console.error("Error getting latest location:", error);
      });
    }
    // use watchCurentPosition() in the mounted() hook
    // to watch the user's position
    /*   watchCurrentPosition() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      const success = (pos) => {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        console.log(crd);
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.watchPosition(success, error, options);
    }, */
    /* use latitude and longitude to map using google map reverse geocoding */
  },

  components: {
    GeoMap: Geo_map["default"]
  }
});
// CONCATENATED MODULE: ./components/Cords.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cordsvue_type_script_lang_js_ = (Cordsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Cords.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cordsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b5a5a52"
  
)

/* harmony default export */ var Cords = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GeoMap: __webpack_require__(32).default})


/***/ })

};;
//# sourceMappingURL=cords.js.map