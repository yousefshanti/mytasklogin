<template>
  <div class="h-screen bg-stone-200 flex">
   
   <subMenu/>

    <!-- Main Content -->
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './components/header.vue';
import subMenu from './components/sub-menu.vue';
export default defineComponent({
  name: 'App',
  components: { HeaderComponent,subMenu },
  data() {
    return {
      isExpanded: false, // Initial state for the width
    };
  },
  methods: {
    toggleWidth() {
      this.isExpanded = !this.isExpanded;
    },
  },
});
</script>
