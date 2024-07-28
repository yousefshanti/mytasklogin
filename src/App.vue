<template >
  <!-- 
 not complete main menu
   --> 
 <div class="absolute inset-y-0 left-0 w-16 bg-gray-300">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

</div>
 
  

  <div class="  size-56 left-12 top-10 relative ">
    <button @click="toggleVisiblity" class="  m-4 w-10/12 bg-white border-b border-gray-300" >
      <img  class=" inline h-8 w-8 object-cover" src="/Users/yousefshanti/Desktop/Screenshot 2024-07-28 at 5.15.35 PM.png">
        <span class=" not-italic text-left justify-center items-center text-l ">Epanet Demo</span>
    </button>
  
   
    <div v-if="isVisble" class=" mx-2 py-2 border-b border-gray-300 ">
      <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Epanet Demo</a>
      <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600  hover:text-white">Mobail View</a>
      <a class="block px-4 py-2 text-gray-800 hover:bg-blue-600  hover:text-white">Default View</a>
    </div>
  </div>
   <!-- 
 one sub menu 
   --> 
  
 
</template>
<script>
export default{
  data(){
    return {isVisble: false,};
  },
  methods: {
    toggleVisiblity(){
      this.isVisble = !this.isVisble ;
    }
  }
};
</script>