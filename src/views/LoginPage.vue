<template>
  
    <body class="h-screen bg-gray-200">
      <div
        class="bg-white rounded-lg fixed p-6 w-1/3 h-1/2 text-blue-600 left-1/3 bottom-1/4 font-sans"
      >
        <div class="text-3xl">Login</div>
        <span class="text-xs">ENTER YOUR DETAILS BELOW TO CONTINUE</span>
        <form action="">
          <div>
            <input
              v-model="ID"
              class="w-4/5 mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600 border-gray-30"
              type="text"
              name="ID"
              placeholder="TenantID"
              required
            />
            <input
              v-model="username"
              class="w-4/5 mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600"
              type="email"
              name="email"
              placeholder="Username"
              required
            />
            <input
              v-model="pass"
              class="w-4/5 mt-3 mb-0 outline-none border-b border-gray-300 focus-within:border-blue-600"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div  class="text-blue-600 no-underline text-sm" >
            
              <button
              @click="login"
              :disabled="!ID||!username||!pass"
              class="bg-white my-6 mx-auto absolute left-[6%] py-[5px] px-[120px] border border-blue-600 text-blue-600 rounded-md"
            >
              LOG IN
            </button>
    
            
  
            <button class="absolute bottom-0 left-5 h-16 w-30">
              CONTACT SUPPORT
            </button>
          </div>
        </form>
        <img
          class="absolute bottom-2 right-2 w-16 ..."
          src="/Users/yousefshanti/Desktop/Log in page_files/flow.png"
          alt="logo"
        />
      </div>
    </body>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      ID: null as number | null,            // Assuming ID is a number, adjust the type if different
      username: null as string | null,      // Username as a string, starting as null
      pass: null as string | null,          // Password as a string, starting as null
    };
  },
  methods: {
    login() {
      // Perform login logic here, such as API calls to verify credentials
      if (this.username && this.pass) {
        // For demonstration, we'll assume a simple check
        if (this.username === 'admin@a' && this.pass === 'pass') {
          // Example logic: store token in localStorage
          localStorage.setItem('authToken', 'dummyToken'); // Replace with a real token from your API
          
          // Navigate to the menu page after successful login
          const router = useRouter();
          router.push('/menu');
        } else {
          alert('Invalid username or password'); // Simple feedback
        }
      } else {
        alert('Please enter username and password'); // Ensure fields are not empty
      }
    }
  }
});
</script>


