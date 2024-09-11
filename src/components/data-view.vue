<template>
  <div class="flex items-stretch gap-x-96 w-screen text-blue-600 p-3">
    <!-- Dynamically render all props passed to the component -->
    <div v-for="(value, key) in cellData" :key="key">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cell",
  props: {
    cellData: {
      type: Object,
      required: true,
    },
  },
});
</script>
