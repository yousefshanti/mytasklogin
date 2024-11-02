<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6  h-screen w-screen">
    <div class="">
      <IconWrapper
      class="size-6 mx-0 inline text-blue-400 absolute top-1 left-1"
      icon-Code="icon-park-outline:waterfalls-v"
    ></IconWrapper>

    <Headercomponent title="Dashboard" class="ml-10" />

    <span class="text-balance font-mono absolute text m-10 w-80 text-xl"
      ></span
    >
    </div>
    
    <div class="">
     <!-- <consol class="m-10"/>-->
      <copybutton/>
      <!--<wrapperapp comp="chart" class="mt-10"/>-->
      <wrapperapp comp="dynamic"/>
      <jsoncomponents/>
     
     
    </div>
   
   
  </div>

</template>

<script>

import IconWrapper from "./icons/icon-wrapper.vue";
import Headercomponent from "./header.vue";
import wrapperapp from "./wrapperapp.vue";
import Consol from './consol.vue';
import Copybutton from './copybutton.vue';
import Jsoncomponents from './jsoncomponents.vue';
import Viewjson from './viewjson.vue';
import DynamicFilterControl from './dynamic filter control.vue';
export default {
  components: { IconWrapper, Headercomponent,wrapperapp, Consol, Copybutton, Jsoncomponents, Viewjson, DynamicFilterControl },

  name: "Dashboard",
};
</script>
