exports.ids = [9,2,5];
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


/***/ })

};;
//# sourceMappingURL=test.js.map