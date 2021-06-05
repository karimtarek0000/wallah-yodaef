import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    alert: {
      status: false,
      text: null,
    },
  },
  getters: {
    getToggleNotifi(state) {
      return state.toggleNotifi;
    },
    getStatusModelDonation(state) {
      return state.statusModelDonation;
    },
    getAlert(state) {
      return state.alert;
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
    setAlert(state, payload) {
      state.alert = payload;
    },
  },
  actions: {
    //
    async register({ commit }, payload) {
      try {
        const data = await axios.post("/register", payload);
        //
        commit("setAlert", {
          status: true,
          text: "تم التسجيل بنجاح",
        });
        //
        return Promise.resolve(data);
      } catch (err) {
        //
        commit("setAlert", {
          status: true,
          text: err.response.data.error.replace(".", ""),
        });
        //
        return Promise.reject(err);
      }
    },
    //
    signIn(context, payload) {
      return axios
        .post("/login", payload)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.response.data.error.replace(".", ""));
        });
    },
  },
});
