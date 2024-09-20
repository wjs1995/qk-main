import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ImportAntd from "@/plugins/Antd";

createApp(App).use(store).use(router).use(ImportAntd).mount("#app");
