<template >
   <div :class="popup ? 'fixed top-0 left-0 z-50 h-screen w-screen' : 'mt-20 w-[80%] m-10'" class="bg-white pb-3 rounded-lg ">

      <div v-if="comp==='chart'">
        <div class="flex justify-start pt-5 pl-5 bg-stone-100  w-full border-b-2 h-16 rounded-t-lg ">
          <Headercomponent title="chart" class="text-blue-500" />
        </div>
      <chart class="mx-20 mt-3"/>
    </div>
  
   
    <div v-if="comp==='tabel' ">

        <div  class="flex justify-between pt-5 pl-5 bg-stone-100  border-b-2 h-16 rounded-t-lg">
          <Headercomponent title="tabel" class="text-blue-500 " />
          <button @click="togglePopup">
            <iconWrapper icon-code="system-uicons:fullscreen" class="size-6 text-stone-400 mr-3" ></iconWrapper>
        </button>
          </div>
      <tableView class=""/>
    </div>

    <div v-if="comp==='mymap' ">

<div  class="flex justify-between pt-5 pl-5 bg-stone-100  border-b-2 h-16 rounded-t-lg ">
  <Headercomponent title="tabel" class="text-blue-500 " />
  <button @click="togglePopup">
    <iconWrapper icon-code="system-uicons:fullscreen" class="size-6 text-stone-400 mr-3" ></iconWrapper>
</button>
  </div>
  <MapboxMap class="w-full h-full "/>
</div>
    
      </div>
      
     
  </template>
  
  <script lang="ts" setup>
  import tableView from "./table-view.vue";
  import Headercomponent from "./header.vue";
  import iconWrapper from "./icons/icon-wrapper.vue";
  import MapboxMap from "./mymap.vue";
import { ref } from 'vue';


const popup = ref(false);


function togglePopup() {
  popup.value = !popup.value;
}


const props = defineProps({
  comp: {
    type: String,
    required: true,
  },
});
</script>
