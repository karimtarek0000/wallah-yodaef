import axios from "axios";
import * as Type from "../Type.js";
//
const state = {
  dataUser: null,
  expireToken: null,
  profileUser: null,
  //
  initLoading: {
    loadingStatus: false,
    loadingText: null,
  },
};

//
const getters = {
  //
  [Type.GET_PROFILE_USER](state) {
    return state.profileUser;
  },
  //
  [Type.GET_INIT_LOADING](state) {
    return state.initLoading;
  },
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
  //
  [Type.SET_PROFILE_USER](state, payload) {
    state.profileUser = payload;
  },
  //
  [Type.SET_INIT_LOADING](state, payload) {
    state.initLoading = payload;
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
  //
  async [Type.PROFILE_USER]({ commit }) {
    const {
      data: {
        name,
        image,
        phone,
        read_notifications: readNotifi,
        unread_notifications: unreadNotifi,
      },
    } = await axios.get("/user_profile");
    //
    const profileUser = await Object.assign(
      {},
      { name, image, phone, readNotifi, unreadNotifi }
    );
    //
    commit(Type.SET_PROFILE_USER, profileUser);
  },
  //
  async [Type.UPDATE_IMAGE]({ commit }, image) {
    try {
      const formData = new FormData();
      formData.append("image", image, image.name);
      //
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: true,
        loadingText: "يتم الان رفع الصوره",
      });
      await axios.post("/update_image", formData);
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: false,
        loadingText: "تم رفع الصوره",
      });
      //
      return Promise.resolve(true);
    } catch {
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: false,
        loadingText: "حدث خطا",
      });
      return Promise.reject(false);
    }
  },
  //
  async [Type.UPDATE_PROFILE]({ commit }, newDataUser) {
    try {
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: true,
        loadingText: "يتم التحديث",
      });
      await axios.post("/update_profile", newDataUser);
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: false,
        loadingText: "تم التحديث",
      });
      //
      return Promise.resolve(true);
    } catch {
      commit(Type.SET_INIT_LOADING, {
        loadingStatus: false,
        loadingText: "حدث خطا",
      });
      return Promise.reject(false);
    }
  },
};

//
export default { state, getters, mutations, actions };
