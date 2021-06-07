import axios from "axios";
import * as Type from "../Type.js";

//
const state = {
  aboutSite: null,
  terms: null,
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
};

export default { state, actions, mutations, getters };
