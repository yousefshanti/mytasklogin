<template>
  <icon v-if="iconCode" :icon="iconCode"></icon>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
console.log("str");

const props = defineProps({
  iconCode: {
    type: String,
    required: true,
  },
});
</script>
