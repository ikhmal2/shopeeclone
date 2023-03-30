import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store.js";

const app = createApp(App);
// createApp(App).mount("#app");
// createApp(App).use(store);

app.mount("#app");
app.use(store);
