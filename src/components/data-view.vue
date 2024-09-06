<template>
  <div class="flex items-stretch gap-96 w-screen text-blue-600 p-3">
    <div >{{ time }}</div>
    <div>{{ label }}</div>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cell",
  props: {
    valu: String,
    dataType:[],
    time: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
