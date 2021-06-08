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
};

//
export default { state, getters, mutations };
