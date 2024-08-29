<template>
  <header :class="[isSidebarOpen ? 'ml-56' : 'ml-16']" class="absolute top-6 w-[calc(100%-4rem)]">
    <IconWrapper
      class="text-blue-500 size-6 m-1 left-0 absolute inline"
      icon-Code="icon-park-outline:waterfalls-v"
    ></IconWrapper>
    <span class="font-mono absolute left-9 text-2xl">{{ title }}</span>

   
  </header>
</template>

<script>
import IconWrapper from "./icons/icon-wrapper.vue";

export default {
  components: { IconWrapper },
  props: {
    title: {
      type: String,
      required: true,
    },
    isSidebarOpen: {
      type: Boolean,
      required: true,
    },
  },
  name: "HeaderComponent",
};
</script>
