<template>
  <div class="h-screen bg-stone-200 flex">
  <chart/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import subMenu from "../components/sub-menu.vue";
import tableview from "../components/table-view.vue"
import chart from "../components/chart.vue";
export default defineComponent({
  name: "App",
  components: { subMenu,tableview,chart },
});
</script>
