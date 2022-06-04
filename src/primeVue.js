import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import Card from "primevue/card";

export default function main(Vue) {
  Vue.use(PrimeVue);
  Vue.use(Card);
  Vue.component("menu-bar", Menubar);
  Vue.component("card-co", Card);
}
