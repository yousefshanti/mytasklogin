import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginPage.vue";
import subMenu from "../components/sub-menu.vue";
import Notfound from "@/components/Notfound.vue";
import uu from "@/components/uu.vue";

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
            path: "/user/:username",
            name: "user",
            component: uu,
            meta: { requiresAuth: true },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: Notfound,
        },
    ],
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = Boolean(localStorage.getItem("authToken"));

    if (to.meta?.requiresAuth && !isAuthenticated) {
        next("/"); // Redirect to login if not authenticated
    } else if (to.path === "/" && isAuthenticated) {
        next("/menu"); // Redirect to menu if authenticated
    } else {
        next(); // Proceed as normal
    }
});

export default router;
