<template>
    <div v-if="showPopup" class="fixed inset-0 z-10 flex items-center justify-center ">
      
      <div class="fixed inset-0 bg-black opacity-50"></div>
  
    
      <div class="relative z-20 w-5/6 bg-white p-4 rounded-lg shadow-lg">
      
        <button @click="closePopup" class="px-4 py-2 border-blue-400 border text-blue-400 rounded-md">Discard</button>
  
        <div v-if="comp === 'chart'" class="mt-4">
          <chart />
        </div>
        
        <div v-if="comp === 'card'" class="mt-4 ">
            <div class="w-72 h-36 bg-white rounded-md p-2 justify-between flex shadow-lg">
      <span class="text-blue-500">Hourly Destination Flow</span>
      <div class="flex ">
          <iconWrapper icon-code="system-uicons:fullscreen" class="text-stone-500 mr-3"></iconWrapper>
          <iconWrapper icon-code="solar:chart-bold-duotone" class="text-stone-500 mr-3"></iconWrapper>
      </div>
    </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import chart from './chart.vue';
  import IconWrapper from './icons/icon-wrapper.vue';
  export default defineComponent({
    name: "CardPopup",
    props: {
      comp: {
        type: String,
        required: true,
      },
    },
    components: { chart,IconWrapper },
    setup(props) {
      
      const showPopup = ref(true);
  
      
      const closePopup = () => {
        showPopup.value = false;
      };
  
      return {
        props,
        showPopup,
        closePopup,
      };
    },
  });
  </script>
  
  