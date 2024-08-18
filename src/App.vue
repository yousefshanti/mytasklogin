<template>
  <body class="h-screen bg-stone-200">
    <div class="gap-y-2 absolute inset-y-0 left-0 w-16 bg-white">
      <div>
        <button @click="toggleSidebar" class="size-10 m-4 absolute">
          <img
            class="border-b-2 border-gray-200 object-cover"
            src="/Users/yousefshanti/Desktop/Screenshot 2024-07-30 at 1.46.58 PM.png"
            alt=""
          />
        </button>
        <div class="absolute top-14 border-b-2 left-4 border-gray-200">
          <Icon class="mx-0 my-4 size-6" icon="mdi:home" />
          <Icon class="mx-0 my-4 size-6" icon="" />
          <Icon class="mx-0 my-4" icon-code="mdi:home" />
          <Icon class="mx-0 my-4" icon-code="icon4" />
          <Icon class="mx-0 my-4" icon-code="icon5" />
          <Icon class="mx-0 my-4" icon-code="icon6" />
          <Icon class="mx-0 my-4" icon-code="icon7" />
          <Icon class="mx-0 my-4" icon-code="icon8" />
        </div>

        <div class="left-2 absolute bottom-2">
          <span class="p-3 text-xl rounded-full bg-stone-200 text-blue-500"
            >FR</span
          >
          <Icon class="size-7 mx-3 my-6" icon-code="icon10" />
        </div>
      </div>

      <div v-if="menu" class="absolute inset-y-0 left-0 w-56 bg-white">
        <div class="absolute m-4 w-10/12 border-b border-gray-300">
          <button @click="toggleSidebar" class="flex justify-start size-5/6">
            <img
              class="inline h-12 w-10"
              src="/Users/yousefshanti/Desktop/Screenshot 2024-07-30 at 1.46.58 PM.png"
              alt=""
            />
            <span
              class="not-italic text-left justify-center items-center text-2xl text-blue-500"
              >flowess</span
            >
            <Icon
              class="absolute inline size-6 right-0 top-2"
              icon-code="icon10"
            />
          </button>
        </div>

        <!-- sub-menu -->
        <div class="absolute top-14 left-4 w-4/5 border-b-2 border-gray-200">
          <button
            @click="subone"
            class="flex justify-start space-x-4 size-4/6 mx-0 my-4"
          >
            <Icon class="inline size-7" icon-code="icon1" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>
          <div v-if="list1" class="mx-2 py-2 border-b bg-white">
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Epanet Demo</a
            >
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Mobile View</a
            >
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Default View</a
            >
          </div>

          <button
            @click="subtwo"
            class="flex justify-start space-x-4 size-4/6 mx-0 my-4"
          >
            <Icon class="inline size-7" icon-code="icon2" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>
          <div v-if="list2" class="mx-2 py-2 border-b bg-white">
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Epanet Demo</a
            >
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Mobile View</a
            >
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white"
              >Default View</a
            >
          </div>

          <!-- Add more buttons as needed -->
          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon3" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>

          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon4" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>

          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon5" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>

          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon6" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>

          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon7" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>

          <button class="flex justify-start space-x-4 size-4/6 mx-0 my-4">
            <Icon class="inline" icon-code="icon8" />
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>
        </div>
        <div class="absolute w-full bottom-2 left-4">
          <span
            class="absolute bottom-3 p-3 text-xl rounded-full bg-stone-200 text-blue-500"
            >FR</span
          >
          <Icon class="absolute right-12 bottom-5 m-0" icon-code="icon10" />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
//import Icon from "@/components/icon.vue";
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      menu: false,
      list1: false,
      list2: false,
    };
  },
  methods: {
    subone() {
      this.list1 = !this.list1;
    },
    subtwo() {
      this.list2 = !this.list2;
    },
    toggleSidebar() {
      this.menu = !this.menu;
    },
  },
  components: {
    Icon,
  },
};
</script>
