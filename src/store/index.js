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
  actions: {
    //
    // async register(context, payload) {
    //   try {
    //     const data = await axios.post(
    //       "https://cors-anywhere.herokuapp.com/http://www.donates.algalya.com/api/register",
    //       payload
    //     );
    //     //
    //     console.log(data);
    //   } catch (err) {
    //     //
    //     console.log(err.response.data.error);
    //   }
    // },
    //
    register(context, payload) {
      axios
        .post("/register", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //
    signIn(context, payload) {
      return axios
        .post("/login", payload)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
  },
});
