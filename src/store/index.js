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
    dataUser: null,
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
    //
    [Type.SET_DATA_USER](state, payload) {
      //
      const { id, name, phone, token } = payload;
      //
      state.dataUser = { id, name, phone };
      //
      localStorage.setItem(
        "tokenUser",
        JSON.stringify({ token, id, name, phone })
      );
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
    [Type.SIGN_IN]({ commit }, payload) {
      return axios
        .post("/login", {
          ...payload,
          fcm_token:
            "fdMVmHPiNyE:APA91bGMFftB8ZkeFuV4DTwig046JkvvwIbn1tFKxZx4CGO516Z7jqAqrvTOwcBwLQ9_paSUCLV6z0p-EOoM9xj2EleckAXOnHHQ8Vn8xikniFXFExD92NrjN2mLY-alKBD5p7DG5hS1",
        })
        .then(({ data }) => {
          //
          const { id, name, phone, token } = data;
          //
          commit(Type.SET_ALERT, {
            status: true,
            text: "تم تسجيل الدخول",
          });
          //
          commit(Type.SET_DATA_USER, { id, name, phone, token });
          //
          return Promise.resolve(true);
        })
        .catch((err) => {
          //
          commit(Type.SET_ALERT, {
            status: true,
            text: err.response.data.error.replace(".", ""),
          });
          //
          return Promise.reject(err);
        });
    },
  },
});
