(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{303:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(43),r(79),r(80),r(108),r(294)),l={name:"Register",data:function(){return{email:"",user:"",loading:!1,password:"",confirm_password:"",err:""}},components:{},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(o.a)("https://swocaqwllmwkocyhqnhm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI"),!(e.email.length<1)){t.next=4;break}return e.err="Email is required",t.abrupt("return");case 4:if(!(e.password.length<8)){t.next=7;break}return e.err="Password must be at least 8 characters",t.abrupt("return");case 7:if(e.password===e.confirm_password){t.next=11;break}return console.log(e.password,e.confirm_password),e.err="Passwords do not match",t.abrupt("return");case 11:return t.next=13,r.auth.getUser();case 13:if(t.sent,e.email.includes("@")){t.next=17;break}return e.err="Email is invalid",t.abrupt("return");case 17:return e.loading=!0,t.next=20,r.auth.signUp({email:e.email,password:e.password});case 20:n=t.sent,n.user,data=n.data,(l=n.error)?(e.err=l.message,e.loading=!1,console.log(l)):(e.user=data.user.email,setTimeout((function(){e.loading=!1,e.$router.push("/Login")}),2e3));case 25:case"end":return t.stop()}}),t)})))()}}},d=r(76),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("main",[t("div",{staticClass:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},[t("div",{staticClass:"mx-auto max-w-lg"},[t("h1",{staticClass:"text-center text-2xl font-bold text-indigo-600 sm:text-3xl"},[e._v("\n        Start tracking Ambulance\n      ")]),e._v(" "),t("p",{staticClass:"mx-auto mt-4 max-w-md text-center text-gray-500"}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        "+e._s(e.user)+" created!\n      ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        Please verify Email to procede!\n      ")]),e._v(" "),e.err?t("div",{staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[e._v("\n        "+e._s(e.err)+"!\n      ")]):e._e(),e._v(" "),t("form",{staticClass:"mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[t("p",{staticClass:"text-lg font-medium"},[e._v("Sign Up to your account")]),e._v(" "),t("div",[t("label",{staticClass:"text-sm font-medium",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),t("div",{staticClass:"relative mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm",attrs:{type:"email",id:"email",placeholder:"Enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"text-sm font-medium",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),t("div",{staticClass:"relative mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm",attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),t("div",[t("label",{staticClass:"text-sm font-medium",attrs:{for:"confirm-password"}},[e._v("Confirm Password")]),e._v(" "),t("div",{staticClass:"relative mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm",attrs:{type:"password",id:"confirm-password",placeholder:"Confirm password"},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}})])]),e._v(" "),t("button",{staticClass:"block w-full rounded-lg px-5 py-3 text-sm font-medium text-white",class:e.loading?"bg-gray-500 cursor-not-allowed":"bg-indigo-600",attrs:{type:"submit",disabled:e.loading}},[e._v("\n          "+e._s(e.loading?"Loading...":"Sign Up")+"\n        ")]),e._v(" "),t("p",{staticClass:"text-center text-sm text-gray-500"},[e._v("\n          Already have an account?\n          "),t("NuxtLink",{staticClass:"underline",attrs:{to:"/Login"}},[e._v("Sign In")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);