/* eslint-disable no-console */
const state = {
  user: {}
};

const getters = {
  getUserTable(state) {
    return state.user;
  },
  getUserChars(state) {
    return state.user.userChars;
  }
};

const mutations = {
  setUserTable(state, input) {
    state.user = input;
  }
};

export default {
  state,
  getters,
  mutations
};
