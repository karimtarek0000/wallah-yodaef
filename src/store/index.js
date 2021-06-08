import Vue from "vue";
import Vuex from "vuex";
//
import Auth from "./Auth/auth.js";
import Pages from "./Pages/pages.js";
import Other from "./Other/other.js";

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
  //
  modules: {
    Auth,
    Pages,
    Other,
  },
});
