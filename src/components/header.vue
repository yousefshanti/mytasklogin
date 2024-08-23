<template>
    
      <IconWrapper
        class="size-6 m-3 bg-white absolute top-5 right-12  "
          icon-Code="zondicons:link"
        ></IconWrapper>
        <IconWrapper
        class="size-6 m-3 bg-white absolute top-5 right-4   "
          icon-Code="teenyicons:pdf-outline"
        ></IconWrapper>
  
  </template>
  
  <script lang="ts">
  import { Icon } from "@iconify/vue";
  import IconWrapper from "./icons/icon-wrapper.vue";
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true
      },
      
    },
    components: {
    Icon,
    IconWrapper,
  },
  };
  </script>
  
  