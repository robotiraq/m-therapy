import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import { setupI18n } from "./i18n";

const app = createApp(App);
app.use(setupI18n());
app.use(router);
app.mount("#app");
