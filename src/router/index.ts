import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginPage.vue"; // Correct path to your Login component
import subMenu from "../components/sub-menu.vue"; // Correct path to your sub-menu component
import Notfound from "@/components/Notfound.vue"; // Correct path to your NotFound component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: "/menu",
      name: "menu",
      component: subMenu,
      meta: { requiresAuth: true },
    },
    {
      path: "/:pathMatch(.*)*", // Correct wildcard route for handling 404
      name: "NotFound",
      component: Notfound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem("authToken")); // Example check

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/"); // Redirect to login page
  }
  // If already authenticated, do not redirect unnecessarily
  else if (to.path === "/" && isAuthenticated) {
    next("/menu"); // Redirect to menu if already authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;
