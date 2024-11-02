<template>
  <Dashboard v-if="PageCode === 'Dashboard'" class="overflow-auto" />
  <WaterQuality v-if="PageCode === 'WaterQuality'" />
  
</template>

<script>
import Dashboard from "./Dashboard.vue";
import WaterQuality from "./WaterQuality.vue";
export default {
  name: "Pages",
  props: {
    PageCode: {
      type: String,
      required: true,
    },
  },
  components: {
    WaterQuality,
    Dashboard,
  },
};
</script>
