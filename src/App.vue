<template>
  <div class="h-screen bg-stone-200 overflow-auto">
 <Button />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import responsivemenu from "./components/responsive menu.vue";
import Button from "./components/buttoncomponent.vue";
export default defineComponent({
  name: "App",
  components: { responsivemenu,Button },
});
</script>
