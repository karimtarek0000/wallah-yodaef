import axios from "axios";
import * as Type from "../Type.js";

//
const state = {
  aboutSite: null,
  terms: null,
  donations: [],
  donationsRecordes: [],
  wallet: null,
  //
  dataModel: null,
};

//
const getters = {
  //
  [Type.GET_ABOUT_SITE](state) {
    return state.aboutSite;
  },
  //
  [Type.GET_TERMS](state) {
    return state.terms;
  },
  //
  [Type.GET_DONATIONS_SHOW](state) {
    return state.donations;
  },
  //
  [Type.GET_DATA_MODEL](state) {
    return state.dataModel;
  },
  //
  [Type.GET_DONATIONS_RECORDES](state) {
    return state.donationsRecordes;
  },
  //
  [Type.GET_CASH_WALLET](state) {
    return state.wallet;
  },
};

//
const mutations = {
  //
  [Type.SET_ABOUT_SITE](state, payload) {
    state.aboutSite = payload;
  },
  //
  [Type.SET_TERMS](state, payload) {
    state.terms = payload;
  },
  //
  [Type.SET_DONATIONS_SHOW](state, payload) {
    state.donations = payload;
  },
  //
  [Type.SET_DATA_MODEL](state, payload) {
    state.dataModel = payload;
  },
  //
  [Type.SET_DONATIONS_RECORDES](state, payload) {
    state.donationsRecordes = payload;
  },
  //
  [Type.SET_CASH_WALLET](state, payload) {
    state.wallet = payload;
  },
};

//
const actions = {
  //
  async [Type.ABOUT_SITE]({ commit }) {
    const { data } = await axios.get("/about_app");
    commit(Type.SET_ABOUT_SITE, data.content);
  },
  //
  async [Type.TERMS]({ commit }) {
    const { data } = await axios.get("/terms");
    commit(Type.SET_TERMS, data.content);
  },
  //
  async [Type.DONATIONS_SHOW]({ commit }) {
    const { data } = await axios.get("/charity_show");
    commit(Type.SET_DONATIONS_SHOW, data);
  },
  //
  async [Type.DONATE]({ commit, getters }, donate) {
    try {
      //
      const data = await Object.assign(
        {},
        { charity_id: getters[Type.GET_DATA_MODEL].id, to_be_paid: donate }
      );
      //
      await axios.post("/charity_donate", data);
      //
      commit(Type.SET_DATA_MODEL, null);
      //
      return Promise.resolve(true);
    } catch {
      return Promise.reject(false);
    }
  },
  //
  async [Type.DONATIONS_RECORDS]({ commit }) {
    //
    const { data } = await axios.get("/donate_records");
    //
    commit(Type.SET_DONATIONS_RECORDES, data);
  },
  //
  async [Type.GET_WALLET]({ commit }) {
    const { data } = await axios.get("/get_wallet");
    //
    commit(Type.SET_CASH_WALLET, +data.app_cash);
  },
  //
  async [Type.SET_WALLET]({ commit }, amount) {
    try {
      await axios.post("/update_wallet", { app_cash: amount, cash: amount });
      //
      commit(Type.SET_DATA_MODEL, null);
      //
      return Promise.resolve(true);
    } catch {
      return Promise.reject(true);
    }
  },
  //
  // eslint-disable-next-line no-unused-vars
  async [Type.CONTACT_US]({ commit }, data) {
    try {
      await axios.post("/contact_us", data);
      return Promise.resolve(true);
    } catch {
      return Promise.reject(false);
    }
  },
  //
  async [Type.SEARCH]({ commit }, search) {
    try {
      let data = null;
      if (search) {
        data = await axios.post("/charity_search", { name: search });
      } else {
        data = await axios.post("/charity_search");
      }
      //
      const refData = data.data.map((cur) => {
        return {
          id: cur.id,
          address: cur.address,
          name: cur.name,
        };
      });
      //
      commit(Type.SET_DONATIONS_SHOW, refData);
    } catch {
      commit(Type.SET_DONATIONS_SHOW, []);
    }
  },
};

//
export default { state, actions, mutations, getters };
