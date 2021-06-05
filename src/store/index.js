import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as Type from "./Type.js";

Vue.use(Vuex);

export default new Vuex.Store({
  namespace: true,
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
    //
    [Type.GET_TOGGLE_NOTIFI](state) {
      return state.toggleNotifi;
    },
    //
    [Type.GET_STATUS_MODEL_DONATION](state) {
      return state.statusModelDonation;
    },
    //
    [Type.GET_ALERT](state) {
      return state.alert;
    },
  },
  mutations: {
    //
    [Type.SET_STATUS_MODEL_DONATION](state, payload) {
      state.statusModelDonation = payload;
    },
    //
    [Type.SET_TOGGLE_NOTIFI](state, payload) {
      state.toggleNotifi = payload;
    },
    //
    [Type.SET_ALERT](state, payload) {
      state.alert = payload;
    },
  },
  actions: {
    //
    async [Type.REGISTER]({ commit }, payload) {
      try {
        const data = await axios.post("/register", payload);
        //
        commit(Type.SET_ALERT, {
          status: true,
          text: "تم التسجيل بنجاح",
        });
        //
        return Promise.resolve(data);
      } catch (err) {
        //
        commit(Type.SET_ALERT, {
          status: true,
          text: err.response.data.error.replace(".", ""),
        });
        //
        return Promise.reject(err);
      }
    },
    //
    [Type.SIGN_IN](context, payload) {
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
