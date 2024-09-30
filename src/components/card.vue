<template>
    <div class="w-72 h-36 bg-white rounded-md p-2 justify-between flex">
      <span class="text-blue-500 m-0">Hourly Destination Flow</span>
      <div>
        <button @click="togglePopup">
          <iconWrapper icon-code="system-uicons:fullscreen" class="text-stone-500 mr-3"></iconWrapper>
        </button>
        
        <button @click="togglechart">
          <iconWrapper icon-code="solar:chart-bold-duotone" class="text-stone-500 mr-3"></iconWrapper>
        </button>
       
      </div>
    </div>
    <div v-if="popup">
            <Cardpopup comp="card"/>
        </div>
        <div v-if="chart" >
            <Cardpopup comp="chart" class=""/>
        </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import IconWrapper from './icons/icon-wrapper.vue';
  import Cardpopup from './cardpopup.vue';
  
  export default defineComponent({
    components: { IconWrapper, Cardpopup },
    name: "Card",
    
    setup() {
      const popup = ref(false);
      
      function togglePopup() {
        popup.value = !popup.value;
      }
      const chart = ref(false);
      
      function togglechart() {
        chart.value = !chart.value;
      }
  
      return {
        popup,
        togglePopup,
        togglechart,
        chart,
      };
    },
  });
  </script>
  
  
  