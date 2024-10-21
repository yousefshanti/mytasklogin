<template>
    <div>
        <div class="bg-stone-100 m-10 w-72 h-11 p-2 border-1 border-stone-200 rounded-md flex justify-between text-blue-400">
            <input v-model="message" class="outline-none border-1 py-1 border-gray-300 rounded-md w-11/12" placeholder="Enter text to copy">
            <button @click="copyUrl">
                <IconWrapper icon-code="solar:copy-bold" class="size-5">
                </IconWrapper></button>
    
                
        
        </div>
        
    </div>
</template>


<script>
import IconWrapper from './icons/icon-wrapper.vue';
export default {

  data() {
    return {
      copied: false
    };
  },
  components:{
    IconWrapper
  },
  methods: {
    copyUrl() {
      const url = window.location.href; // Get the current URL
      navigator.clipboard.writeText(url)
        .then(() => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 2000); // Reset copied message after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  }
};
</script>