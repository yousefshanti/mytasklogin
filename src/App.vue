<template >
  <body class="h-screen bg-stone-200">
    <Submenu />
    <Header></Header>
  </body>
</template>

<script>
import Submenu from "./components/icons/sub-menu.vue";
import { Icon } from "@iconify/vue";
import IconWrapper from "./components/icons/icon-wrapper.vue";
import Header from "./components/header.vue";
export default {
  name: "App",
  components: { Submenu,Header,IconWrapper,Icon },
};
</script>
