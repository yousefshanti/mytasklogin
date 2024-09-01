import {  createRouter, createWebHistory  } from "vue-router";
import Logout from "../components/logoutbutton.vue";
import App from "@/views/App.vue";
//Vue.component('icon',require('./src/icon').default);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
    },
   
  ],
  
});

export default router;
