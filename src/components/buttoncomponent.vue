<template>
    <button class="p-3 rounded-lg m-5 bg-blue-500" @click="toggleComponent">Change Component</button>
    <WrapperComponent v-if="choic" comp="chart"/>
        <WrapperComponent v-if="!choic" comp="tabel"/>
   
    
</template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import WrapperComponent from './wrappercomponent.vue';
  
 
  const choic =ref(true);
  
 
  const toggleComponent = () => {
    choic.value = !choic.value;
  };
  </script>
  