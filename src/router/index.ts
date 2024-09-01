import {  createRouter, createWebHistory  } from "vue-router";
import Login from "../views/LoginPage.vue";
import subMenu from '../components/sub-menu.vue';
//Vue.component('icon',require('./src/icon').default);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/menu",
      name: "menu",
      component: subMenu,
    },
   
  ],
  
});

export default router;
