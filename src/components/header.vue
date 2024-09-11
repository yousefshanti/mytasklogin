<template>

    <span class="font-mono text-2xl">{{ title }}</span>

</template>

<script>
import IconWrapper from "./icons/icon-wrapper.vue";

export default {
  components: { IconWrapper },
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  name: "Headercomponent",
};
</script>
