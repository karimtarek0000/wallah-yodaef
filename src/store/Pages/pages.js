import axios from "axios";
import * as Type from "../Type.js";

//
const state = {
  aboutSite: null,
  terms: null,
  donations: null,
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
};

//
export default { state, actions, mutations, getters };
