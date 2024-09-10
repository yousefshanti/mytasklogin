<!--"/Users/yousefshanti/Desktop/my task/Screenshot 2024-07-30 at 1.46.58 PM.png"
     -->
     <template>
        <div class="absolute  w-96">
          <div class="flex justify-between   bg-sky-600 h-14">
          
              <img
                class=" size-13  object-cover ml-40"
                src="/Users/yousefshanti/Desktop/my task/Screenshot 2024-09-10 at 12.43.50 AM.png"
                alt=""
              />
          
   <!--      
              <Pages v-if="activeChoice === 'option1'" PageCode="Dashboard" />-->
              <button @click="toggleSidebar">
                <IconWrapper
                  class="text-white m-3 size-7"
                  icon-Code="heroicons-outline:menu-alt-3"
                ></IconWrapper>
            </button>
          </div>
          
          <div class="flex justify-between  w-full    bg-white  h-14">
            <Menuheader v-if="activeChoice === 'option1'" title="Dashboard" class="text-sky-600 mt-2"/>
            <Menuheader v-if="activeChoice === 'option2'" title="Water Qality" class="text-sky-600 mt-2"/>
            <button @click="toggleRotation" class=" flex  ">
              <IconWrapper
                class=" text-blue-500 size-10 mt-2 "
                icon-Code="bi:person-circle"
              ></IconWrapper>
                <span class="mt-4 mx-2">Apollo</span>
              <IconWrapper
                :class="rotationClass"
                class="  size-6  mt-4"
                icon-Code="ep:arrow-right-bold"
              ></IconWrapper>
            </button>
            <div v-if="slide" class="">
              <Logout
                class="  border-b-2 bg-white "
              />
            </div>  
          </div>
      
          <div v-if="menu" class=" text-white  p-1  w-full  bg-sky-600 overscroll-y-auto h-96">
           
            <!-- sub-menu -->
            <div
              class="   my-4 pb-4  w-full  h-[100%] overflow-auto"
            >
              <button
                @click="choose('option1')"
                :class="[activeChoice === 'option1' ? '' : '']"
                class="pr-48 py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline "
                  icon-Code="icon-park-outline:waterfalls-v"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Dashboard</span>
              </button>
      
              <button
                @click="choose('option2')"
                :class="[activeChoice === 'option2' ? '' : '']"
                  class="pr-48 py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="mynaui:drop"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Water Quality</span>
              </button>
      
              <button @click="subone" 
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="clarity:slider-solid"
                ></IconWrapper>
                <span class="not-italic text-left text-sm">Control center</span>
                <IconWrapper
                  v-if="arro"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
       
              <div v-if="list1" class="overflow-y-auto mx-2 py-2 border-b-2 bg-white">
                <Slider />
                
              </div>
      
              <button 
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="solar:map-outline"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Epanet Demo</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="tabler:alert-hexagon"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Alerts</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="material-symbols:activity-zone-outline"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Zones</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="solar:monitor-linear"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Monitoring</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="carbon:report"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Monitoring</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="ph:drop-half"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Monitoring</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
      
              <button
              class="py-2 rounded-md hover:bg-white hover:text-sky-600"
              >
                <IconWrapper
                  class="size-6 mx-3 inline"
                  icon-Code="f7:scope"
                ></IconWrapper>
                <span class="not-italic text-left text-l">Monitoring</span>
                <IconWrapper
                  v-if="arr"
                  class="rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
                <IconWrapper
                  v-else
                  class="peer-checked/published:rotate-90 ml-40 inline"
                  icon-Code="ep:arrow-right-bold"
                ></IconWrapper>
              </button>
            </div>
            
            
          </div>
        </div>
      </template>
      
      <script lang="ts">
      import { Icon } from "@iconify/vue";
      import IconWrapper from "./icons/icon-wrapper.vue";
      import Slider from "./icons/slider.vue";
      import { defineComponent } from "vue";
      import Pages from "./Pages.vue";
      import Logout from "./logoutbutton.vue";
      import Menuheader from "./menuheader.vue";
  
      export default defineComponent({
        name: "responsivemenu",
        data() {
          return {
            header:"",
            activeChoice: "option1",
            isRotated: false,
            isExpanded: false, // Initial state for the width
            menu: false,
            list1: false,
            list2: false,
            arro: false,
            wrapper: "",
            slide: false,
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
          toggleRotation() {
            this.slide = !this.slide;
            this.isRotated = !this.isRotated;
          },
          choose(option: string) {
            this.activeChoice = option;
          },
        },
        computed: {
          rotationClass() {
            return this.isRotated
              ? "rotate-90 transition-transform duration-300"
              : "rotate-0 transition-transform duration-300";
          },
        },
        components: {
          Icon,
          Menuheader,
          IconWrapper,
          Slider,
          Logout,
          Pages,
                Menuheader,
        },
      });
      </script>
      