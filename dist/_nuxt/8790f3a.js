(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{310:function(e,t,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(78).default)("2416e5d9",content,!0,{sourceMap:!1})},321:function(e,t,r){"use strict";r(310)},322:function(e,t,r){var n=r(77)((function(i){return i[1]}));n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Quantico&display=swap);"]),n.push([e.i,'*{font-family:"Quantico",sans-serif;scroll-behavior:smooth;transition:all .2s ease-in-out}',""]),n.locals={},e.exports=n},333:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(43),r(108),r(294)),l={name:"Register",data:function(){return{email:"",user:"",password:"",warn:"",err:"",loading:!1}},components:{},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(o.a)("https://swocaqwllmwkocyhqnhm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI"),!(e.password.length<8)){t.next=4;break}return alert("Password must be at least 8 characters long"),t.abrupt("return");case 4:return e.loading=!0,t.next=7,r.auth.signInWithPassword({email:e.email,password:e.password});case 7:n=t.sent,data=n.data,(l=n.error)?(e.err=l.message,e.loading=!1,console.log(l.message)):(e.user=data.user.email,setTimeout((function(){e.$router.push("/Category"),e.loading=!1}),2e3));case 11:case"end":return t.stop()}}),t)})))()}}},d=(r(321),r(76)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"bg"},[t("div",{staticClass:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},[t("div",{staticClass:"mx-auto max-w-lg"},[t("h1",{staticClass:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl"},[e._v("\n        Welcome \n      ")]),e._v(" "),t("h1",{staticClass:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl"},[e._v("\n        Track Ambulance\n      ")]),e._v(" "),t("p",{staticClass:"mx-auto mt-4 max-w-md text-center text-gray-500"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        "+e._s(e.user)+" Logged In!\n      ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        You will be directed to Dashboard!\n      ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.err,expression:"err"}],staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        "+e._s(e.err)+"!\n      ")]),e._v(" "),t("form",{staticClass:"mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("p",{staticClass:"text-lg font-medium"},[e._v("Sign in to your account")]),e._v(" "),t("div",[t("label",{staticClass:"text-sm font-medium",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("div",{staticClass:"relative mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"text-sm font-medium",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),t("div",{staticClass:"relative mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100",attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),t("button",{staticClass:"block w-full rounded-lg px-5 py-3 text-sm font-medium text-white",class:e.loading?"bg-gray-500 cursor-not-allowed":"bg-indigo-600",attrs:{type:"submit",disabled:e.loading}},[e._v("\n          "+e._s(e.loading?"Loading...":"Sign In")+"\n        ")]),e._v(" "),t("p",{staticClass:"text-center text-sm text-gray-500"},[e._v("\n          No account?\n          "),t("Nuxt-Link",{staticClass:"underline",attrs:{to:"/"}},[e._v("Sign up")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);