<template>
    <header >
      
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
    },

    name: "Headercomponent",
  };
  </script>
  