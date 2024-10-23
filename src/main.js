import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
loadFonts();
const app = createApp(App);
app.config.devtools = true; // Make sure this is set to true
app.use(router);
app.use(vuetify);

app.mount("#app");
