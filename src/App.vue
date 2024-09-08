<template>
  <div class="h-screen bg-white flex justify-center ">
  <MapboxMap class=" absolute top-10"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MapboxMap from "./components/mymap.vue";
export default defineComponent({
  name: "App",
  components: { MapboxMap },
});
</script>
