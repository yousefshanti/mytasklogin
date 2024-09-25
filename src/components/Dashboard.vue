<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6 h-screen overflow-auto">
    <div class="">
      <IconWrapper
      class="size-6 mx-0 inline text-blue-700 absolute top-1 left-1"
      icon-Code="icon-park-outline:waterfalls-v"
    ></IconWrapper>
    <Headercomponent title="Dashboard" class="ml-10" />
    <span class="text-balance font-mono absolute text m-10 w-80 text-xl"
      >this is Dashboard page</span
    >
    </div>
    
    <div >
      <wrapperapp comp="mymap" />
    </div>
   
   
  </div>

</template>

<script>

import IconWrapper from "./icons/icon-wrapper.vue";
import Headercomponent from "./header.vue";
import wrapperapp from "./wrapperapp.vue";
export default {
  components: { IconWrapper, Headercomponent,wrapperapp },

  name: "Dashboard",
};
</script>
