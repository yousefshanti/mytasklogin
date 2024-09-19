<template>
  <div class="  w-[99%] bg-white m-2  p-3 rounded-lg  ">
    
      <!--flex  gap-x-96 justify-around -->
      <div class="text-blue-600 p-2 flex gap-x-80  bg-white ">
        
        <th class="flex items-stretch gap-x-4 ">

          Time
          <button @click="Time">
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="hugeicons:arrow-up-down"
          ></IconWrapper>
          </button>
          
          <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
        </th>
       

        <th class="flex items-stretch gap-x-4 ml-"
       :class="hlabel? ' ml-20':' ml-32'"
        >
          Label
          <button @click="Label">
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="hugeicons:arrow-up-down"
          ></IconWrapper>
          </button>
          <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
        </th>
        <th 
         :class="hlabel? ' ml-0':' ml-7'"
        class="flex items-stretch gap-x-4 "
        >
          Value
          <button @click="Value">
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="hugeicons:arrow-up-down"
          ></IconWrapper>
          </button>
          <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
        </th>
        <div >
         
        </div>
      </div>

      <div class="h-96 overflow-auto  rounded-b-lg ">
        <div v-if="htime">
        <tr
          
          v-for="(cell, index) in cells"
          :key="index"
          :class=" index % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
          
        >
          <Cell
            :label="cell.label"
            :value="cell.value"
            class="ml-44"
          />
        </tr>
      </div>

      <div v-if="hlabel">
        <tr
          
          v-for="(cell, index) in cells"
          :key="index"
          :class=" index % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
          
        >
          <Cell
            :time="cell.time"
            class="gap-x-96"
            :value="cell.value  "
          />
        </tr>
      </div>
      <div v-if="hvalue">
        <tr
          
          v-for="(cell, index) in cells"
          :key="index"
          :class=" index % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
          
        >
          <Cell
            :time="cell.time"
            :label="cell.label"
          />
        </tr>
      </div>

        <div v-else>
          <tr
          v-for="(cell, index) in cells"
          :key="index"
          :class=" index % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
          
        >
          <Cell
            :time="cell.time"
            :label="cell.label"
            :value="cell.value"
          />
        </tr>
        </div>
        
        
      </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent, toValue } from "vue";
import Cell from "./data-view.vue";
import IconWrapper from "./icons/icon-wrapper.vue";
import axios from "axios";
export default defineComponent({
  components: { Cell, IconWrapper },
  name: "TableView",
  methods:{

    Time(){
        this.htime=!this.htime
    },
    Label(){
        this.hlabel=!this.hlabel
    },
    Value(){
        this.hvalue=!this.hvalue
    }
  },
  data() {
    return {
        htime:false,
        hlabel:false,
        hvalue:false,
        
      cells:[],
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/cells');
      this.cells = res.data;
    } catch (error) {
      console.error(error);
    }
  },
});
</script>
