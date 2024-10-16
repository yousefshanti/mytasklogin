<template>
    <div>
      <button @click="customLog('my error')">Click Me</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      customLog(message) {
        console.error(`%c[Custom Log]: %c${message}`, 'color: green; font-weight: bold;', 'color: black;');
      }
    }
  }
  </script>
  