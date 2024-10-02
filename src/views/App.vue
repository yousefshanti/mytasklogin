<template>
 <div class="h-screen bg-stone-50">
  <SubMenu/>
 </div>
 




</template>

<script >
import { defineComponent } from "vue";
import MapboxMap from "../components/mymap.vue";
import SubMenu from "../components/sub-menu.vue";
import chart from "@/components/chart.vue";
import wrapperapp from "@/components/wrapperapp.vue";
export default defineComponent({
  name: "App",
  components: { MapboxMap, SubMenu,chart,wrapperapp },
});
</script>