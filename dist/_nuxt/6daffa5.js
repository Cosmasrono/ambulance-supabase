(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{338:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(43),n(294)),l=Object(r.a)("https://swocaqwllmwkocyhqnhm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI"),c={methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.from("users").insert({date:t.date,ambulance:t.ambulance});case 2:n=e.sent,data=n.data,(o=n.error)?console.log("Error inserting data:",o.message):(alert("okey we are checking on you:",data),t.$router.push("/help"));case 6:case"end":return e.stop()}}),e)})))()}}},d=n(76),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-slate-200 container mx-auto p-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus",on:{click:t.submitForm}},[t._v("Submit")])])])}),[function(){var t=this,e=t._self._c;return e("form",{staticClass:"bg-slate-200 rounded-lg shadow-md p-8"},[e("h2",{staticClass:"text-2xl font-bold mb-4"},[t._v("Ambulance Booking Form")]),t._v(" "),e("div",{staticClass:"mb-4"}),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-gray-700 font-bold mb-2",attrs:{for:"date"}},[t._v("\n        Date\n      ")]),t._v(" "),e("input",{staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"date",type:"date"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-14"},[e("label",{staticClass:"block text-gray-700 font-bold mb-2",attrs:{for:"stylist"}},[t._v("\n   Available ambulance\n      ")]),t._v(" "),e("select",{staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"stylist"}},[e("option",{attrs:{value:""}},[t._v("Choose a ambulance")]),t._v(" "),e("option",{attrs:{value:"John"}},[t._v("option 1")]),t._v(" "),e("option",{attrs:{value:"Jane"}},[t._v("option 2")]),t._v(" "),e("option",{attrs:{value:"Sarah"}},[t._v("option 2")])])])}],!1,null,null,null);e.default=component.exports}}]);