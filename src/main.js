import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Userfront from "@userfront/toolkit/vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { md3 } from "vuetify/blueprints";

const vuetify = createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

Userfront.init("demo1234");

const app = createApp(App).use(router);
app.use(vuetify);
app.use(Userfront);
app.mount("#app");
