import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Auth0Plugin } from "./auth";
import PrimeVue from "primevue/config";
import VueRouter from "vue-router";

import "primevue/resources/themes/vela-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/tailwind.css";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { domain, clientId } from "../auth_config.json";

import Menubar from "primevue/menubar";

Vue.component("menu-bar", Menubar);

Vue.use(PrimeVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

library.add(faLink, faUser, faPowerOff);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
