<template>
  <main class=" bg">
    <!--
    This component uses @tailwindcss/forms
  
    yarn add @tailwindcss/forms
    npm install @tailwindcss/forms
  
    plugins: [require('@tailwindcss/forms')]
  -->

    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome 
        </h1>
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Track Ambulance
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
         </p>
        <!-- success alert  -->
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="user"
        >
          {{ user }} Logged In!
        </div>
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="user"
        >
          You will be directed to Dashboard!
        </div>
        <!-- warning alert -->
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="err"
        >
          {{ err }}!
        </div>
        <form
          action=""
          class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          @submit.prevent="submit"
        >
          <p class="text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" class="text-sm font-medium">Email</label>

            <div class="relative mt-1">
              <input
                type="email"
                v-model="email"
                id="email"
                class="w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100"
                placeholder="Enter email"
              />

               
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
              <input
                type="password"
                v-model="password"
                id="password"
                class="w-full rounded-lg ring p-4 pr-12 text-sm shadow-sm bg-slate-100"
                placeholder="Enter password"
              />

              
            </div>
          </div>

          <button
            type="submit"
            class="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
            :class="loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600'"
            :disabled="loading"
          >
            {{ loading ? "Loading..." : "Sign In" }}
          </button>

          <p class="text-center text-sm text-gray-500">
            No account?
            <Nuxt-Link to="/" class="underline">Sign up</Nuxt-Link>
          </p>
        </form>
         
      </div>
    </div>
  </main>
</template>

<script>
import { createClient } from "@supabase/supabase-js";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      user: "",
      password: "",
      warn: "",
      err: "",
      loading: false,
    };
  },
  components: {},
  methods: {
    async submit() {
      const supabase = createClient(
        'https://swocaqwllmwkocyhqnhm.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'

        );

      if (this.password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
      }
      this.loading = true;
      const { data, error } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });
      if (error) {
        this.err = error.message;
        this.loading = false;
        console.log(error.message);
      } else {
        this.user = data.user.email;
        setTimeout(() => {
          this.$router.push("/Category");
          this.loading = false;
        }, 2000);

        //this.$router.push("/Login");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quantico&display=swap");
* {
  font-family: "Quantico", sans-serif;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
  background-color: cadetblue;
  color: aliceblue;
}
</style>
