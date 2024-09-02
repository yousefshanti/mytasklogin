<template>
    <div>
      <router-link to="/">
      <button  class="underline hover:text-blue-500">
        Logout
      </button>
    </router-link>
      
      
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
  