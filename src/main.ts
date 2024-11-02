import "./assets/main.css";
import axios from "axios";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import Logout from "./components/logoutbutton.vue";
import Login from "./views/LoginPage.vue";
import uu from "./components/uu.vue";

createApp(uu).use(router).mount("#user");
createApp(App).use(router).mount("#app");
createApp(Logout).use(router).mount("#logout");
createApp(Login).use(router).mount("#login");

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
