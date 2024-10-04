<template>
  <div :class="[isSidebarOpen ? 'ml-40' : 'ml-16']" class="absolute top-6">
    <div>
      <IconWrapper
      class="size-6 mx-0 inline text-blue-700 absolute top-1 left-1"
      icon-Code="mynaui:drop"
    ></IconWrapper>
    <Headercomponent title="WaterQuality" class="ml-9" />
    <span class="text-balance font-mono absolute text m-10 w-80 text-xl"
      >this is WaterQuality page</span
    >
    </div>
    <div class=" gap-9 ml-3 mt-32 grid grid-flow-col">
      <card/>
      <card/>
      <card/>
    </div>
    
  </div>
</template>

<script>

import IconWrapper from "./icons/icon-wrapper.vue";
import Headercomponent from "./header.vue";
import Card from './card.vue';
export default {
  components: { IconWrapper, Headercomponent, Card },
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  name: "WaterQuality",
};
</script>
