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
  waitActionDonation: 0,
  waitActionWallet: 0,
  runActionDonation: false,
  runActionWallet: false,
  waitSeconds: 60,
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
  //
  [Type.GET_WAIT_DONATION](state) {
    return state.waitActionDonation;
  },
  //
  [Type.GET_WAIT_WALLET](state) {
    return state.waitActionWallet;
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
  //
  [Type.SET_STATUS_ACTION](state, payload) {
    state[payload.type] = payload.status;
  },
  [Type.SET_WAIT](state, type) {
    //
    const setType =
      type === "runActionDonation" ? "waitActionDonation" : "waitActionWallet";
    //
    let counter = state.waitSeconds;
    // 1) - Set interval wiil be decrement counter to 0
    let handelSetInterval = setInterval(() => {
      if (counter > 0) state[setType] = counter--;
    }, 1000);
    // 2) - If counter equal 0 will be clear interval from memory
    if (counter === 0) clearInterval(handelSetInterval);
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
  //
  [Type.SET_TIME_ACTION]({ commit, state }, type) {
    const setSeconds = state.waitSeconds * 1000;
    //
    setTimeout(
      () => commit(Type.SET_STATUS_ACTION, { type, status: false }),
      setSeconds
    );
    //
    commit(Type.SET_WAIT, type);
  },
};

//
export default { state, getters, mutations, actions };
