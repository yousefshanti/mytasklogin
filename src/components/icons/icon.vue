<template>
  <component :is="iconComponent" class="icon" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconCode: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent() {
      // Dynamically import the icon component based on iconCode
      return () => import(`@/assets/icons/Icon${this.iconCode}.vue`);
    }
  }
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor; /* Ensure it inherits the current text color */
}
</style>

