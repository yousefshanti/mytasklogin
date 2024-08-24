<template>
  <div class= "h-screen bg-stone-200">
    <HeaderComponent title="Dashboard" />
    <submenu class="top-9"/>
   
  </div>
</template>
    
  



<script>
import Submenu from "./components/icons/sub-menu.vue";
import { Icon } from "@iconify/vue";
import IconWrapper from "./components/icons/icon-wrapper.vue";
import HeaderComponent from "./components/header.vue";
export default {
  name: "App",
  components: { Submenu,HeaderComponent,IconWrapper,Icon },
};
</script>
