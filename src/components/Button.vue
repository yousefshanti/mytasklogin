<!-- Button.vue -->
<template>
    <button @click="handleClick">{{ label }}</button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      action: {
        type: String,
        required: true
      }
    },
    methods: {
      handleClick() {
        // Execute the action defined in the JSON
        eval(this.action); 
      }
    }
  };
  </script>