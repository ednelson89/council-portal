/* eslint-disable no-console */
const state = [];

const getters = {
  getGames(state) {
    return state;
  }
};

const mutations = {
  setGames(state, inputs) {
    inputs.gameList.forEach(game => {
      state.push(game);
    });
  }
};

export default {
  state,
  getters,
  mutations
};
