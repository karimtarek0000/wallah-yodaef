import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import * as Type from "./store/Type.js";
//
import GSvg from "./components/share/GSvg";
import GImage from "./components/share/GImage";
import BtnPrimary from "./components/share/BtnPrimary";
import Form from "./components/Form";
import GoBack from "./components/share/GoBack";
//
import "./server/base.js";
//
Vue.config.productionTip = false;
//
Vue.prototype.$Type = Type;
//
Vue.use(Vuelidate);
//
Vue.component("GSvg", GSvg);
Vue.component("GImage", GImage);
Vue.component("BtnPrimary", BtnPrimary);
Vue.component("Form", Form);
Vue.component("GoBack", GoBack);

//
new Vue({
  router,
  store,
  // if user reload page or visit site again will auto login
  created() {
    //
    const USER = JSON.parse(localStorage.getItem("tokenUser"));
    //
    if (USER) {
      this.$store.commit(Type.SET_USER_DATA, USER);
    }
  },
  render: (h) => h(App),
}).$mount("#app");
