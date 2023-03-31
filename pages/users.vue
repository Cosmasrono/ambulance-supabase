<template >
    <div class=" bg-slate-200 container mx-auto p-4 ">
      <form class="bg-slate-200 rounded-lg shadow-md p-8 ml-20 mr-20">
        <h2 class="text-2xl font-bold mb-4">Ambulance Booking Form</h2>
        <div class="mb-4">
          
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="date">
            Date
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
          />
        </div>
        
      </form>

      
        <div class="mb-14">
          <label class="block text-gray-700 font-bold mb-2" for="stylist">
       Available ambulance
          </label>
          <select
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stylist"
          >
            <option value="">Choose a ambulance</option>
            <option value="John">KDK 567K</option>
            <option value="Jane">KCA 907R</option>
            <option value="Sarah">option 2</option>
          </select>
        </div>
        <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus" @click="submitForm">Submit</button>

            </div>
        </div>
    
             
        </template>

        <script>
        import { createClient } from '@supabase/supabase-js'
        const supabaseUrl = 'https://swocaqwllmwkocyhqnhm.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'

        const supabase = createClient(supabaseUrl, supabaseKey)


            export default {

                methods: {
  async submitForm() {
    const { data, error } = await supabase
      .from('users')
      .insert({
        date: this.date,
      
        ambulance: this.ambulance
      })
    if (error) {
      console.log('Error inserting data:', error.message)
    } else {
      alert('okey we are checking on you:', data)
      this.$router.push('/help')
    }
  }
}


            }
            </script>
           
           <style>
            body{
              margin-right: 6cm;
              margin-left: 6cm;

            }
           
           </style> 
  