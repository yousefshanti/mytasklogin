<template>
 
  <MapboxMap class=""/>

</template>

<script >
import { defineComponent } from "vue";
import MapboxMap from "../components/mymap.vue";
export default defineComponent({
  name: "App",
  components: { MapboxMap },
});
</script>