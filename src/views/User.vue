<template>
    <div>
      <span>{{ $route.params }}</span>
    </div>
  </template>

  <script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    return {
      username: route.params.username || '',
    };
  },
});


</script>