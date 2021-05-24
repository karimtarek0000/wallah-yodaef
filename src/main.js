import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import GSvg from "./components/share/GSvg";
import GImage from "./components/share/GImage";
//
Vue.config.productionTip = false;

//
Vue.component("GSvg", GSvg);
Vue.component("GImage", GImage);

//
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
