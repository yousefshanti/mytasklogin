<template>
 
  <div class="h-screen bg-stone-200 flex">
   <subMenu/>
   
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import subMenu from '../components/sub-menu.vue';

export default defineComponent({
  name: 'App',
  components: { subMenu },
  
});
</script>
