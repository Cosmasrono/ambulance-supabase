<template>
  <main class=" items-center justify-center  ">
    <div class=" ">
      <Nuxt-Link to="/" class="underline">Home</Nuxt-Link>
    </div>
    <div class=" bg-slate-900 max-h-max items-center justify-center flex ">
      <form @submit.prevent="submit" class=" bg-slate-600 items-center justify-center flex flex-col text-white ">
        <label for="">Enter names </label>
        <input type="text" id="name" placeholder="enter yor names">

        <label for="">Enter your identity number</label>
        <input type="text" name="identity" id="identity" placeholder="enter your ID number">
        <label for="">Enter your phone number</label>
        <input type="number" name="number" id="phone" placeholder="enter your phone number">
        <label for="">Enter your email address</label>
        <input type="email" name="email" id="email" placeholder="enter your email address">

        <label for="">car number plate</label>
        <input type="text" name="" id="plate" placeholder="enter your number plate" class=" text-black">

        <label for="">Enter your password</label>
        <input type="password" name="password" id="password" placeholder="enter your password">

        <label for="">Confirm your password</label>
        <input type="password" name="password" id="confirm" placeholder="confirm your password">

        <button type="submit" class=" bg-blue-700 p-2 m-3 rounded-sm ru">submit</button>
      </form>
    </div>
  </main>
</template>

<script>
 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://swocaqwllmwkocyhqnhm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      name: '',
      identity: '',
      phone: '',
      email: '',
      password: '',
      confirm: '',
    };
  },
  methods: {
    async submit() {
      const { data, error } = await supabase
        .from('cossi')
        .insert([{ name: this.name, email: this.email }]);
      if (error) {
        console.log(error);
      } else {
        alert('thank you our customer we are processing your documents we will give you feedback', data);
        
        this.$router.push('/donors')
      }
    },
  },
};
</script>
