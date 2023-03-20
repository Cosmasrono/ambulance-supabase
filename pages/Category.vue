<template>
  <div class="">
    <div class="rounded-lg text-center shadow-xl max-w-md mx-auto mt-4 md:mb-4">
      <div class="px-6 py-5 rounded shadow-xl shadow-black">
        
        <p class="font-medium text-black">What do you want to do</p>

        <div class="mt-4 space-y-2">
          <nuxt-link
            class="block rounded-full border px-8 py-3 text-sm font-medium border-gray-500 bg-blue-700 text-gray-200"
            to="/Mailing"
          >
            Share your Location to be accessed by ambulance
          </nuxt-link>
          <nuxt-link
            class="block rounded-full border border-gray-500 px-8 py-3 text-sm font-medium text-gray-200 bg-blue-700"
            to="/Main"
          >
            Track incident Location
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quantico&display=swap");
* {
  font-family: "Quantico", sans-serif;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
}
</style>
