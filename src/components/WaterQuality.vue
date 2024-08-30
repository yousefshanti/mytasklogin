<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6 ">
    <IconWrapper 
              class="size-6 mx-0 inline text-blue-700 absolute top-1 left-1"
              icon-Code="mynaui:drop"
            ></IconWrapper>
  <Headercomponent  title="WaterQuality" />
  <span class=" text-balance font-mono absolute  text m-10 w-80 text-xl">this is WaterQuality page</span>
  </div>
 </template>
 
 <script>
 import IconWrapper from "./icons/icon-wrapper.vue";
 import Headercomponent from "./header.vue"
 export default {
   components: { IconWrapper,Headercomponent},
   props :{
    isSidebarOpen: {
        type: Boolean,
        required: true,
      },
   },
   name: "WaterQuality",
 };
 </script>
 