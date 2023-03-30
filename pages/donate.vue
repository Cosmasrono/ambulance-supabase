<template>
    <main class=" items-center justify-center  ">
    <div class=" ">
      <Nuxt-Link to="/" class="underline">Home</Nuxt-Link>
      </div>
      <div class=" bg-slate-900 max-h-max items-center justify-center flex ">
      <form @submit.prevent="submit" class=" bg-slate-600 items-center justify-center flex flex-col text-white ">
        <label for="">Enter names </label>
        <input type="text" name="" id="name" placeholder="enter yor names">

       <!--
        <label for="">Enter your identity number</label>
        <input type="text" name="identity" id="identity" placeholder="enter your ID number">
  <label for="">Enter your phone number</label>
        <input type="number" name="number" id="phone" placeholder="enter your phone number">
 -->
        <label for="">Enter your email address</label>
        <input type="email" name="email" id="email" placeholder="enter your email address">

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

import { createClient } from '@supabase/supabase-js'
        const supabaseUrl = 'https://swocaqwllmwkocyhqnhm.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'

        const supabase = createClient(supabaseUrl, supabaseKey)

export default {


    data(){
        return{
            name:'',
            identity:'',
            phone:'',
            email:'',
            password:'',
            confirm:'',
        }

     },
     methods:{
        async submit(){
          const {data,error}=await supabase
          .from('uber')
          .insert([
            {name:this.name,phone:this.phone,email:this.email,password:this.password}
          ])
          if(error){
            console.log(error)
          }
          else{
            alert('success',data)
          }

        },
        async submit() {
    // Validate password before submitting the form
    const isPasswordValid = this.validatePassword();
    if (!isPasswordValid) {
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .insert([
        { name: this.name, phone: this.phone, email: this.email, password: this.password }
      ])

    if (error) {
      console.log(error)
    } else {
      alert('success ' + data)
    }
  },
  validatePassword() {
    if (this.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }

    if (this.password !== this.confirm) {
      alert('Passwords do not match');
      return false;
    }

    return true;
  }
}
}

    
</script>

<style>

</style>