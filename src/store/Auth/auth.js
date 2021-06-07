import axios from "axios";
import * as Type from "../Type.js";
//
const state = {
  dataUser: null,
  expireToken: null,
};

//
const mutations = {
  //
  [Type.SET_USER_DATA](state, payload) {
    const { id, name, createdAt, token } = payload;
    //
    state.dataUser = payload;
    //
    localStorage.setItem(
      "tokenUser",
      JSON.stringify({ token, id, createdAt, name })
    );
  },
  //
  [Type.CLEAR_USER_DATA]() {
    //
    localStorage.removeItem("tokenUser");
    //
    location.reload();
  },
};

//
const actions = {
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
  async [Type.SIGN_IN]({ commit }, payload) {
    try {
      //
      const { data } = await axios.post("/login", {
        ...payload,
        fcm_token:
          "fdMVmHPiNyE:APA91bGMFftB8ZkeFuV4DTwig046JkvvwIbn1tFKxZx4CGO516Z7jqAqrvTOwcBwLQ9_paSUCLV6z0p-EOoM9xj2EleckAXOnHHQ8Vn8xikniFXFExD92NrjN2mLY-alKBD5p7DG5hS1",
      });

      //
      const { id, name, token } = data;
      const createdAt = new Date().getTime();
      //
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      //
      commit(Type.SET_ALERT, {
        status: true,
        text: "تم تسجيل الدخول",
      });

      //
      commit(Type.SET_USER_DATA, { id, name, createdAt, token });

      //
      return Promise.resolve(true);
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
  [Type.SIGN_OUT]({ commit }) {
    commit(Type.CLEAR_USER_DATA);
  },
};

//
export default { state, mutations, actions };
