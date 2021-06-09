import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import axios from "axios";
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
const compo = [GSvg, GImage, BtnPrimary, Form, GoBack];
//
compo.forEach((co) => Vue.component(co.name, co));

///////////////////////////////////////////////
// Router Authorization
router.beforeEach((to, from, next) => {
  //
  const token = localStorage.getItem("tokenUser");
  const exsistAuth = to.matched.some((page) => page.meta.auth);
  //
  if (exsistAuth && token) next({ name: "Home" });
  //
  if (!exsistAuth && !token) {
    next({ name: "Register" });
    store.dispatch(Type.SIGN_OUT);
  }

  //
  document.title = to.meta.title
    ? `الله يضاعف | ${to.meta.title}`
    : "الله يضاعف";

  next();
});

//
new Vue({
  router,
  store,
  // if user reload page or visit site again will auto login
  created() {
    //
    const USER = JSON.parse(localStorage.getItem("tokenUser"));
    //
    if (USER) this.$store.commit(this.$Type.SET_USER_DATA, USER);
    //
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401)
          this.$store.dispatch(this.$Type.SIGN_OUT);
        return Promise.reject(error);
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
