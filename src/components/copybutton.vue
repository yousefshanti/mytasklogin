<template>
    <div>
        <div class="rounded-md  ">
           <button @click="copyUrl">
                <IconWrapper :class="[copied ? 'text-green-400' : 'text-blue-400']" icon-code="solar:copy-bold" class="size-7 bg-stone-100 m-10  border-1  ">
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