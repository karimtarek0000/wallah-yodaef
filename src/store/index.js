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
  },
  getters: {
    getStatusModelDonation(state) {
      return state.statusModelDonation;
    },
  },
  mutations: {
    setStatusModelDonation(state, payload) {
      state.statusModelDonation = payload;
    },
  },
  modules: {},
});
