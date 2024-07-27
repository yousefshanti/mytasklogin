<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

</script>
<template>
  <body class="h-screen bg-gray-200 ">
    <div class=" bg-white rounded-lg fixed p-6 w-1/3 h-1/2 text-blue-600 left-1/3 bottom-1/4 font-sans">
    <div class=" text-3xl ">Login</div>
        <span class="text-xs">ENTER YOUR DETAILS BELOW TO CONTINUE</span>
        <form action="">
               <div >
                <input class="w-4/5 mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600  border-gray-30" type="text"  name="ID" placeholder="TenantID" required >
                <input class="w-4/5  mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600 " type="email" name="email" placeholder="Username" required >
                <input class="w-4/5  mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600 " type="password" name="password" placeholder="Password" required >
              </div> 
              <div class="text-blue-600 no-underline text-sm">
                <Router-link to="/">
                   <button class="bg-white my-6 mx-auto absolute left-[6%] py-[5px] px-[120px]  border border-blue-600 text-blue-600 rounded-md " >LOG IN</button>
                </Router-link>
                <button class="absolute bottom-0 left-5 h-16 w-30" >CONTACT SUPPORT</button>
              </div>
        </form>
        <img class="absolute  bottom-2 right-2  w-16 ..." src="/Users/yousefshanti/Desktop/Log in page_files/flow.png" alt="logo">
  </div>
  </body>
 
</template>

      
  
