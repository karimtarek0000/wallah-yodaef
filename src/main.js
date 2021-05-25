import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import GSvg from "./components/share/GSvg";
import GImage from "./components/share/GImage";
import BtnPrimary from "./components/share/BtnPrimary";
//
Vue.config.productionTip = false;

//
Vue.component("GSvg", GSvg);
Vue.component("GImage", GImage);
Vue.component("BtnPrimary", BtnPrimary);

//
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
