<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6 ">
    <IconWrapper 
              class="size-6 mx-0 inline text-blue-700 absolute top-1 left-1  "
              icon-Code="icon-park-outline:waterfalls-v"
            ></IconWrapper>
  <Headercomponent  title="Dashboard" class="" />
    <span class=" text-balance font-mono absolute  text m-10 w-80 text-xl">this is Dashboard page</span>
  </div>
  
</template>

<script>
import IconWrapper from "./icons/icon-wrapper.vue";
import Headercomponent from "./header.vue"
export default {
  components: { IconWrapper,Headercomponent},
  
  name: "Dashboard",
};
</script>
