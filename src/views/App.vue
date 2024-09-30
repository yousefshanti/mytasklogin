<template>
 <div class="h-screen bg-stone-100">
  <SubMenu/>
 </div>
  

</template>

<script >
import { defineComponent } from "vue";
import MapboxMap from "../components/mymap.vue";
import SubMenu from "../components/sub-menu.vue";

export default defineComponent({
  name: "App",
  components: { MapboxMap, SubMenu },
});
</script>