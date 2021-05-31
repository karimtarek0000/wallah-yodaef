import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusModelDonation: {
      status: false,
      icon: "",
      title: null,
      nameBtn: null,
    },
    toggleNotifi: false,
  },
  getters: {
    getToggleNotifi(state) {
      return state.toggleNotifi;
    },
    getStatusModelDonation(state) {
      return state.statusModelDonation;
    },
  },
  mutations: {
    //
    setStatusModelDonation(state, payload) {
      state.statusModelDonation = payload;
    },
    //
    setToggleNotifi(state, payload) {
      state.toggleNotifi = payload;
    },
  },
  modules: {},
});
