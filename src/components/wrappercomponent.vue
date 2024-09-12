<template >
  <div class=" bg-white w-[90%]  pb-3 rounded-lg  m-10">
    <div v-if="comp==='chart'">
      <div class="flex justify-start pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg ">
        <Headercomponent title="chart" class="text-blue-500" />
      </div>
    <chart class="mx-20 mt-3"/>
  </div>

  <div v-if="comp==='mymap'">
      <div class="flex justify-start pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg ">
        <Headercomponent title="map" class="text-blue-500" />
      </div>
      <div class="mx-10 mt-3">
        <mymap class=" "/>
      </div>
  </div>
  <div v-if="comp==='tabel'">
      <div class="flex justify-start pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg ">
        <Headercomponent title="tabel" class="text-blue-500" />
      </div>
    <TableView class=""/>
  </div>
    </div>
    
   
</template>

<script lang="ts" setup>
import TableView from "./table-view.vue";
import chart from "./chart.vue";
import Headercomponent from "./header.vue";
import mymap from "./mymap.vue";
console.log("str");
const props = defineProps({
  comp: {
    type: String,
    required: true,
  },
});
</script>
