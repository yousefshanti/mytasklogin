<template>
    <button class="p-3 rounded-lg m-5 bg-blue-500" @click="toggleComponent">Change Component</button>
    <WrapperComponent v-if="choic" comp="chart"/>
        <WrapperComponent v-if="!choic" comp="tabel"/>
   
    
</template>
  <script lang="ts" >
 import { defineComponent } from "vue";
  import WrapperComponent from './wrappercomponent.vue';
  
  export default defineComponent({
  name: "Button",
  data() {
    return {
      choic:true
    };
  },
  methods: {
    toggleComponent(){
        this.choic=!this.choic
    }
  },
 
  components: {
    WrapperComponent
  },
});
  </script>
  