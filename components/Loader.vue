<template>
  <div>
    <div class="">
      <div
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center"
        v-show="!load"
      >
        
        <p class="sm:w-1/3 w-2/3 text-center text-white text-2xl">
          it's loading 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["load"],
};
</script>

<style scoped></style>
