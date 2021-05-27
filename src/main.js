import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
//
import GSvg from "./components/share/GSvg";
import GImage from "./components/share/GImage";
import BtnPrimary from "./components/share/BtnPrimary";
import Form from "./components/Form";
//
Vue.config.productionTip = false;
//
Vue.use(Vuelidate);
//
Vue.component("GSvg", GSvg);
Vue.component("GImage", GImage);
Vue.component("BtnPrimary", BtnPrimary);
Vue.component("Form", Form);

//
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
