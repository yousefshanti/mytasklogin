<template>
  <header class="w-full" >
    <IconWrapper
        class="text-blue-500 size-6 m-1 left-0  absolute inline"
          icon-Code="icon-park-outline:waterfalls-v"
        ></IconWrapper>
    <span class="font-mono absolute left-9 top-1">{{ title }}</span>
    
      <IconWrapper
        class="size-5 m-1  bg-white absolute right-2 "
          icon-Code="zondicons:link"
        ></IconWrapper>

   
        <IconWrapper
        class=" size-5  m-1 bg-white absolute  right-9 "
          icon-Code="teenyicons:pdf-outline"
        ></IconWrapper>

  </header>
</template>

<script >
import IconWrapper from "./icons/icon-wrapper.vue";
export default {
  components: {IconWrapper},
  data(){
    return{}
  },
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
 
};
</script>

