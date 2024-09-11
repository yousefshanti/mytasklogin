<template>
  <div class="h-screen bg-stone-200 overflow-auto">
  <wrappercomponent slot="chart"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import responsivemenu from "./components/responsive menu.vue";
import wrappercomponent from "./components/wrappercomponent.vue";
export default defineComponent({
  name: "App",
  components: { responsivemenu,wrappercomponent },
});
</script>
