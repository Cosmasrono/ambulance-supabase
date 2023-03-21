<template>
    <div class="flex  bg-slate-200 items-center justify-center h-screen">
      <div class="w-full max-w-sm">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">Admin Login</h2>
        <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              v-model="email"
              required
              placeholder="Enter your email address"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              v-model="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "AdminLogin",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log("Form submitted");
         this.$router.push('/manage')
  
      },  
    },
   
   
  };
  </script>
  