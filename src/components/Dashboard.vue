<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6  overflow-auto h-screen w-screen">
    <div class="">
      <IconWrapper
      class="size-6 mx-0 inline text-blue-700 absolute top-1 left-1"
      icon-Code="icon-park-outline:waterfalls-v"
    ></IconWrapper>

    <Headercomponent title="Dashboard" class="ml-10" />

    <span class="text-balance font-mono absolute text m-10 w-80 text-xl"
      ></span
    >
    </div>
    
    <div >
     <!-- <consol class="m-10"/>-->
      <copybutton/>
      <wrapperapp comp="chart" class="mt-10"/>
    </div>
   
   
  </div>

</template>

<script>

import IconWrapper from "./icons/icon-wrapper.vue";
import Headercomponent from "./header.vue";
import wrapperapp from "./wrapperapp.vue";
import Consol from './consol.vue';
import Copybutton from './copybutton.vue';
export default {
  components: { IconWrapper, Headercomponent,wrapperapp, Consol, Copybutton },

  name: "Dashboard",
};
</script>
