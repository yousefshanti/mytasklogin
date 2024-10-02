<template>
  <div class="bg-white w-[90%] pb-3 rounded-lg ml-10 overflow-auto">
    <div v-if="comp === 'chart'">
      <div class="flex justify-between pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg">
        <Headercomponent title="chart" class="text-blue-500" />
        <div class="">
          <button><IconWrapper icon-code="iconoir:table-rows" class="size-6 mx-3"></IconWrapper></button>
          <button @click="getgrid"><IconWrapper icon-code="bi:grid" class="size-6 mx-3"></IconWrapper></button>
        </div>
      </div>

      <!-- Grid or inline chart layout -->
      <div :class="[grid ? 'm-5 grid grid-cols-2 ' : 'ml-40 flex flex-wrap']" class="w-full">
        <chart />
        <chart />
        <chart />
        <chart />
      </div>
    </div>

    <div v-if="comp === 'mymap'">
      <div class="flex justify-start pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg">
        <Headercomponent title="map" class="text-blue-500" />
      </div>
      <div class="mx-10 mt-3">
        <mymap />
      </div>
    </div>

    <div v-if="comp === 'tabel'">
      <div class="flex justify-start pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg">
        <Headercomponent title="tabel" class="text-blue-500" />
      </div>
      <TableView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import chart from './chart.vue';
import Headercomponent from './header.vue';
import mymap from './mymap.vue';
import IconWrapper from './icons/icon-wrapper.vue';

export default defineComponent({
  props: {
    comp: {
      type: String,
      required: true,
    },
  },
  components: { chart, IconWrapper, Headercomponent },
  setup(props) {
    const grid = ref(true); // Toggles between grid and non-grid layout

    const getgrid = () => {
      grid.value = !grid.value; // Toggle grid layout
    };

    return {
      props,
      grid,
      getgrid,
    };
  },
});
</script>
