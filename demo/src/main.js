import { createApp } from "vue";
import App from "./App.vue";
import { ProviderPlugin } from "vue-providers";

createApp(App).use(ProviderPlugin).mount("#app");
