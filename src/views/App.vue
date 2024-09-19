<template>
  <div class="h-screen bg-stone-200 flex">
  <sub-menu/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import subMenu from "../components/sub-menu.vue";
import tableview from "../components/table-view.vue"

export default defineComponent({
  name: "App",
  components: { subMenu,tableview, },
});
</script>
