<template>
  <main>
    
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg">
        <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Start tracking Ambulance
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
         </p>
        <!-- success alert  -->
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="user"
        >
          {{ user }} created!
        </div>
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
          v-show="user"
        >
          Please verify Email to procede!
        </div>
        <!-- warning alert -->
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-if="err"
        >
          {{ err }}!
        </div>
        <form
          action=""
          class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          @submit.prevent="register"
        >
          <p class="text-lg font-medium">Sign Up to your account</p>

          <div>
            <label for="email" class="text-sm font-medium">Email</label>

            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
 
            </div>
          </div>
          <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

           
            </div>
          </div>

          <div>
            <label for="confirm-password" class="text-sm font-medium"
              >Confirm Password</label
            >

            <div class="relative mt-1">
              <input
                type="password"
                id="confirm-password"
                class="w-full rounded-lg ring bg-slate-100 p-4 pr-12 text-sm shadow-sm"
                v-model="confirm_password"
                placeholder="Confirm password"
              />

           
            </div>
          </div>

          <button
            type="submit"
            class="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
            :class="loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600'"
            :disabled="loading"
          >
            {{ loading ? "Loading..." : "Sign Up" }}
          </button>

          <p class="text-center text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/Login" class="underline">Sign In</NuxtLink>
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
      loading: false,
      password: "",
      confirm_password: "",
      err: "",
    };
  },
  components: {},
  methods: {
    async register() {
      const supabase = createClient(
        "https://swocaqwllmwkocyhqnhm.supabase.co",
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'      );
      if (this.email.length < 1) {
        this.err = "Email is required";
        return;
      }
      if (this.password.length < 8) {
        this.err = "Password must be at least 8 characters";
        return;
      }
      if (this.password !== this.confirm_password) {
        console.log(this.password, this.confirm_password);
        this.err = "Passwords do not match";
        return;
      }
      /* get user from supabase and check if email exists */
      const main_user = await supabase.auth.getUser();
      /* check if email of the texists  */
      if (!this.email.includes("@")) {
        this.err = "Email is invalid";
        return;
      }
      this.loading = true;
      const { user, data, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) {
        this.err = error.message;
        this.loading = false;
        console.log(error);
      } else {
        this.user = data.user.email;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("/Login");
        }, 2000);
        //this.$router.push("/Login");
      }
    },
  },
};
</script>

<style></style>