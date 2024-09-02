 <!--"/Users/yousefshanti/Desktop/my task/Screenshot 2024-07-30 at 1.46.58 PM.png"
     -->
<template>

  <div class="gap-y-2 absolute inset-y-0 left-0 w-16 bg-white flex">
    <div >
      <div> </div>
      <button @click="toggleSidebar" class="size-10 m-4 absolute">
        <img
          class="border-b-2 border-gray-200 object-cover"
          src="/Users/yousefshanti/Desktop/my task/Screenshot 2024-07-30 at 1.46.58 PM.png"
          alt=""
        />
      </button>
    
     <div :class="[isExpanded ? 'ml-40' : 'ml-1']" class="flex-1 transition-all duration-300 bg-gray-100" PageCode="Dashboard"> 
      <Pages v-if="activeChoice === 'option1'" PageCode="Dashboard" />
     </div>
     <div :class="[isExpanded ? 'ml-40' : 'ml-1']" class="flex-1 transition-all duration-300 bg-gray-100" PageCode="Dashboard"> 
      <Pages v-if="activeChoice === 'option2'" PageCode="WaterQuality" />
     </div>
     
      <div class="absolute top-16 border-b-2 left-4 border-gray-200">
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="icon-park-outline:waterfalls-v"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="mynaui:drop"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="clarity:slider-solid"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="solar:map-outline"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="tabler:alert-hexagon"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="material-symbols:activity-zone-outline"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="solar:monitor-linear"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="carbon:report"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="ph:drop-half"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-1 my-4"
          icon-Code="f7:scope"
        ></IconWrapper>
      </div>

      <div class="left-2 absolute bottom-2">
       
        <IconWrapper
          class="absolute size-10 bottom-20  text-blue-500"
          icon-Code="bi:person-circle"
        ></IconWrapper>
        <IconWrapper
          class="size-6 mx-3 my-6"
          icon-Code="streamline:login-1"
        ></IconWrapper>
      </div>
      
    </div>
   
    <div v-if="menu" class="absolute inset-y-0 left-0 w-56 bg-white">
      <div class="absolute m-4 w-10/12 border-b-2 border-gray-200">
        <button @click="toggleSidebar" class="flex justify-start size-5/6">
          <img
            class="inline h-12 w-10"
            src="/Users/yousefshanti/Desktop/my task/Screenshot 2024-07-30 at 1.46.58 PM.png"
            alt=""
          />
          <span
            class="not-italic text-left justify-center items-center text-2xl text-blue-500"
            >flowess</span
          >
          <IconWrapper
            class="absolute inline size-6 right-0 top-2"
            icon-Code="streamline:login-1"
          ></IconWrapper>
        </button>
      </div>

      <!-- sub-menu -->
      <div
        class=" overscroll-y-auto absolute top-16 left-2 my-4 pb-4 space-y-3.5 w-4/5 border-b-2 border-gray-200"
      >
      
      <button @click="choose('option1')" :class="[activeChoice === 'option1' ? '' : '']"
      >
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="icon-park-outline:waterfalls-v"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Dashboard</span>
        </button>

        
        <button @click="choose('option2')" :class="[activeChoice === 'option2' ?'' : '' ]" >
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="mynaui:drop"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Water Quality</span>
        </button>
       
        <button @click="subone">
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="clarity:slider-solid"
          ></IconWrapper>
          <span class="not-italic text-left text-sm">Control center</span>
          <IconWrapper
            v-if="arro"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>
        
        <div v-if="list1" class="overflow-y-auto  mx-2 py-2 border-b-2 bg-white">
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </div>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="solar:map-outline"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Epanet Demo</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="tabler:alert-hexagon"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Alerts</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="material-symbols:activity-zone-outline"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Zones</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="solar:monitor-linear"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Monitoring</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="carbon:report"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Monitoring</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="ph:drop-half"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Monitoring</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>

        <button>
          <IconWrapper
            class="size-6 mx-3 inline"
            icon-Code="f7:scope"
          ></IconWrapper>
          <span class="not-italic text-left text-l">Monitoring</span>
          <IconWrapper
            v-if="arr"
            class="rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
          <IconWrapper
            v-else
            class="peer-checked/published:rotate-90 ml-4 inline"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
        </button>
      </div>

      <button @click="toggleRotation" class="absolute w-full bottom-12 left-3">
        <IconWrapper
          class="absolute size-10 bottom-4  text-blue-500"
          icon-Code="bi:person-circle"
        ></IconWrapper>
      
        <IconWrapper
           :class="rotationClass"
            class="absolute right-12 bottom-6 m-0 size-6"
            icon-Code="ep:arrow-right-bold"
          ></IconWrapper>
      </button>
      <div v-if="slide" class="">
          <Logout class="mx-2 py-2 border-b-2 bg-white absolute right-12 bottom-6"/>
        </div>
       </div>
    
  </div>
  
</template>

<script lang="ts">

import { Icon } from "@iconify/vue";
import IconWrapper from "./icons/icon-wrapper.vue";
import Slider from "./icons/slider.vue";
import { defineComponent } from 'vue';
import Pages from "./Pages.vue";
import Logout from "./logoutbutton.vue"

export default defineComponent({
  name: "Submenu",
  data() {
    return {
      activeChoice: 'option1',
      isRotated: false,
      isExpanded: false, // Initial state for the width
      menu: false,
      list1: false,
      list2: false,
      arro: false,
      wrapper: "",
      slide: false
    };
  },
  methods: {
    
    subone() {
      this.list1 = !this.list1;
      this.arro = !this.arro;
      this.list2 = !this.list2;
    },
    toggleSidebar() {
      this.menu = !this.menu;
      this.isExpanded = !this.isExpanded;
      
    },
    toggleRotation(){
      this.slide=!this.slide
      this.isRotated = !this.isRotated;
    },
    choose(option: string) {
      this.activeChoice = option
    }
    
  },
  computed: {
    rotationClass() {
      return this.isRotated ? 'rotate-90 transition-transform duration-300' : 'rotate-0 transition-transform duration-300';
    },
  },
  components: {
    Icon,
    IconWrapper,
    Slider,Logout,Pages,
  },
});
</script>