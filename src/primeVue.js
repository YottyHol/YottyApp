import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";

export default function main(Vue) {
  Vue.use(PrimeVue);
  Vue.component("menu-bar", Menubar);
}
