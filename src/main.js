import { createApp } from "vue";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; // uvozi se css za Toast
import "./assets/style.css"; // ovo mora dabude ispod Toast importa
import App from "./App.vue";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
