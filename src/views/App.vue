<template>
  <div class="h-screen bg-white flex justify-center ">
  <MapboxMap class=" absolute top-10"/>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import MapboxMap from "../components/mymap.vue";
export default defineComponent({
  name: "App",
  components: { MapboxMap },
});
</script>