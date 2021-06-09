import axios from "axios";
import * as Type from "../Type.js";

//
const state = {
  statusModelDonation: {
    status: false,
    icon: "",
    title: null,
    nameBtn: null,
    type: null,
  },
  statusConfirmAlert: {
    status: false,
    confirm: false,
  },
  toggleNotifi: false,
  alert: {
    status: false,
    text: null,
  },
  notification: {
    count: {
      unread_notifications: 0,
      read_notifications: 0,
    },
    notifi: [],
  },
};

//
const getters = {
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
  //
  [Type.GET_STATUS_CONFIRM_ALERT](state) {
    return state.statusConfirmAlert;
  },
  //
  [Type.GET_NOTIFI](state) {
    return state.notification;
  },
};

//
const mutations = {
  //
  [Type.SET_STATUS_MODEL_DONATION](state, payload) {
    state.statusModelDonation = payload;
  },
  //
  [Type.TOGGLE_CONFIRM_ALERT](state, payload) {
    state.statusConfirmAlert.status = payload;
  },
  //
  [Type.SET_CONFIRM_ALERT](state, payload) {
    state.statusConfirmAlert.confirm = payload;
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
  [Type.SET_DATA_NOTIFI](state, payload) {
    state.notification[payload.type] = payload.data;
  },
};

//
const actions = {
  //
  async [Type.COUNT_NOTIFI]({ commit }) {
    const { data } = await axios.get("/count_notifications");
    //
    commit(Type.SET_DATA_NOTIFI, { type: "count", data });
  },
  //
  async [Type.NOTIFI]({ commit }) {
    const { data } = await axios.get("/notifications");
    //
    const newData = data.map((cur) => {
      return { data: cur.data, date: cur.donation_date };
    });
    //
    commit(Type.SET_DATA_NOTIFI, { type: "notifi", data: newData });
  },
};

//
export default { state, getters, mutations, actions };
