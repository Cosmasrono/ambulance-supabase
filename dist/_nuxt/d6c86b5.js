(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,6,7],{293:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("h2",{staticClass:"text-center dark:text-pink-300 text-indigo-100 text-xl font-semibold"},[t("img",{staticClass:"bg-slate-900 w-20 h-20",attrs:{src:n(294),alt:""}})])}],l={props:["load"]},r=n(76),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.load,expression:"!load"}],staticClass:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center"},[t._m(0),t._v(" "),e("p",{staticClass:"sm:w-1/3 w-2/3 text-center text-white text-2xl"},[t._v("\n        it's loading hold on.....\n      ")])])])])}),o,!1,null,"24455b52",null);e.default=component.exports},294:function(t,e,n){t.exports=n.p+"img/ripple.b553c4a.gif"},296:function(t,e,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(78).default)("f842552e",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.r(e);var o=n(11),l=(n(108),n(43),n(293)),r=n(295),c={props:["latitude","longitude"],data:function(){return{load:!1,client:Object(r.a)("https://btozlwgodrieiivvilno.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0b3psd2dvZHJpZWlpdnZpbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzQ2NDksImV4cCI6MTk4NDk1MDY0OX0.mCLYF2ZKas2hOfAUapacMUqysLPLgKfz3tRp99MrIYg")}},methods:{refresh:function(){window.location.reload()},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.client.auth.signOut(),t.$router.push("/");case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;setTimeout((function(){t.load=!0}),4e3)},components:{Loader:l.default}},d=(n(298),n(76)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"md:justify-end flex md:items-center justify-start items-start text-blue gap-5 px-6 md:px-32 py-3 md:py-5 bg-slate-50"},[e("nuxt-link",{staticClass:"flex items-center gap-2",attrs:{to:"/Category"}},[e("span",[t._v("Home")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-2",on:{click:t.refresh}},[e("span",[t._v("Refresh map")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-2",on:{click:t.logout}},[e("span",[t._v("Logout")])]),t._v(" "),e("button",{staticClass:"px-9 py-3 bg-red-600 rounded hidden"},[t._v("Login")])],1),t._v(" "),t.load?e("div",{staticStyle:{height:"100vh"},attrs:{id:"map-wrap"}},[e("client-only",[e("l-map",{attrs:{zoom:15,center:[t.latitude,t.longitude]}},[e("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),e("l-marker",{attrs:{"lat-lng":[t.latitude,t.longitude]}})],1)],1)],1):e("div",[e("Loader",{attrs:{load:t.load}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(293).default})},298:function(t,e,n){"use strict";n(296)},299:function(t,e,n){var o=n(77)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]),o.push([t.i,'*{font-family:"Quantico",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}',""]),o.locals={},t.exports=o},303:function(t,e,n){"use strict";n.r(e);var o=n(297),l=n(295),r={data:function(){return{client:Object(l.a)("https://btozlwgodrieiivvilno.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0b3psd2dvZHJpZWlpdnZpbG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzNzQ2NDksImV4cCI6MTk4NDk1MDY0OX0.mCLYF2ZKas2hOfAUapacMUqysLPLgKfz3tRp99MrIYg"),latitude:null,longitude:null}},mounted:function(){this.getLatestLocation()},created:function(){},methods:{getLatestLocation:function(){var t=this;this.client.from("locations").select("latitude, longitude").order("created_at",{ascending:!1}).limit(1).then((function(e){var n,o,data=e.data,l=null===(n=data[0])||void 0===n?void 0:n.latitude,r=null===(o=data[0])||void 0===o?void 0:o.longitude;t.latitude=l||-1.23322,t.longitude=r||36.88333,console.log("Latest location:",l,r)})).catch((function(t){console.error("Error getting latest location:",t)}))}},components:{GeoMap:o.default}},c=n(76),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("GeoMap",{attrs:{latitude:t.latitude,longitude:t.longitude}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GeoMap:n(297).default})},332:function(t,e,n){"use strict";n.r(e);var o={name:"Maps",components:{Cords:n(303).default}},l=n(76),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{},[t("Cords")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cords:n(303).default})}}]);