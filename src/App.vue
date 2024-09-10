<template>
  <div class="h-screen bg-stone-200 overflow-auto">
  <MapboxMap class=" m-20"/>
  <responsivemenu/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import responsivemenu from "./components/responsive menu.vue";
import Chart from "./components/chart.vue";
export default defineComponent({
  name: "App",
  components: { responsivemenu,Chart },
});
</script>
