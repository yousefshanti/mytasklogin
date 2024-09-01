<template>
    <div>
      <!-- This link will navigate to the LogoutButton page -->
      <RouterLink to="/logout" class="text-blue-500 hover:underline">
        Logout
      </RouterLink>
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
  