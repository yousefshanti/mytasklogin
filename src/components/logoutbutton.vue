<template>
    <div>
      <router-link to="/">
      <button  class="underline hover:text-blue-500">
        Logout
      </button>
    </router-link>
      <!-- This link will navigate to the LogoutButton page<RouterLink to="/" class="text-blue-500 hover:underline">
       
      </RouterLink> -->
      
    </div>
    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { RouterLink } from 'vue-router';
  
  export default defineComponent({
    name: 'Logout',
    components: {
      RouterLink,
    },
  });
  </script>
  