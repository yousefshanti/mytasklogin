<template>
  <body class="h-screen bg-stone-200">
    <div class="gap-y-2 absolute inset-y-0 left-0 w-16 bg-white">
      <div>
        <button @click="toggleSidebar" class="size-10 m-4 absolute">
          <img
            class="border-b-2 border-gray-200 object-cover"
            src="path/to/icon1.png"
            alt=""
          />
        </button>
        <div class="absolute top-14 border-b-2 left-4 border-gray-200">
          <Icon class="size-7 mx-0 my-4" icon-code="Home"></Icon>
          <Icon class="size-7 mx-0 my-4" icon-code="Settings"></Icon>
          <img
            class="size-7 mx-0 my-4"
            src="path/to/icon2.png"
            alt=""
          />
          <img
            class="size-7 mx-0 my-4"
            src="path/to/icon3.png"
            alt=""
          />
          <!-- Add more icon wrappers or images as needed -->
        </div>

        <div class="left-2 absolute bottom-2">
          <span class="p-3 text-xl rounded-full bg-stone-200 text-blue-500">FR</span>
          <img
            class="size-7 m-2 my-6"
            src="path/to/icon4.png"
            alt=""
          />
        </div>
      </div>

      <div v-if="menu" class="absolute inset-y-0 left-0 w-56 bg-white">
        <div class="absolute m-4 w-10/12 border-b border-gray-300">
          <button @click="toggleSidebar" class="flex justify-start size-5/6">
            <img
              class="inline h-12 w-10"
              src="path/to/icon1.png"
              alt=""
            />
            <span class="not-italic text-left justify-center items-center text-2xl text-blue-500">flowess</span>
            <img
              class="absolute inline size-6 right-0 top-2"
              src="path/to/icon5.png"
              alt=""
            />
          </button>
        </div>

        <!-- sub-menu -->
        <div class="absolute top-14 left-4 w-4/5 border-b-2 border-gray-200">
          <button @click="subone" class="flex justify-start size-4/6 mx-0 my-4">
            <Icon class="inline size-7" icon-code="Demo"></Icon>
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>
          <div v-if="list1" class="mx-2 py-2 border-b bg-white">
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Epanet Demo</a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Mobile View</a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Default View</a>
          </div>

          <button @click="subtwo" class="flex justify-start size-4/6 mx-0 my-4">
            <Icon class="inline size-7" icon-code="Demo"></Icon>
            <span class="not-italic text-left text-l">EpanetDemo</span>
          </button>
          <div v-if="list2" class="mx-2 py-2 border-b bg-white">
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Epanet Demo</a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Mobile View</a>
            <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Default View</a>
          </div>
          
          <!-- Add more buttons as needed -->
        </div>
        <div class="absolute w-full bottom-2 left-4">
          <span class="p-3 text-xl rounded-full bg-stone-200 text-blue-500">FR</span>
          <img
            class="inline size-7 m-6"
            src="path/to/icon6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Icon from '@/components/Icon.vue';

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
    Icon
  }
};
</script>

<style>
/* Add any necessary styles */
</style>
