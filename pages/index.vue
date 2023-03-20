<template>
  <div>
    <Signup />
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";

export default {
  components: { Signup },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quantico&display=swap");
* {
  font-family: "Quantico", sans-serif;
  transition: all 0.2s ease-in-out;
  scroll-behavior: smooth;
}
</style>
