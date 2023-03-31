<template>
    <div>
      <h2>Customer Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id" class=" flex flex-col ">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.identity }}</td>
            <td>{{ customer.plate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>

  import { createClient } from '@supabase/supabase-js'
  
  export default {
    data() {
      return {
        customers: []
      }
    },
    async mounted() {
      const supabaseUrl = 'https://swocaqwllmwkocyhqnhm.supabase.co'
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI'
      const supabase = createClient(supabaseUrl, supabaseKey)
  
      const { data, error } = await supabase.from('cossi').select('name,plate,identity, email, phone')
      if (error) {
        console.log(error)
      } else {
        this.customers = data
      }
    }
  }
  </script>
  