const state = {
  userName: "",
  activeGameID: "",
  activeJournal: "",
  activeCharacter: ""
};

const getters = {
  getCurrUser(state) {
    return state.userName;
  },
  getActiveGame(state) {
    return state.activeGameID;
  },
  getActiveJournal(state) {
    return state.activeJournal;
  },
  getActiveChar(state) {
    return state.activeCharacter;
  }
};

const mutations = {
  setCurrUser(state, input) {
    state.userName = input;
  },
  setActiveGame(state, input) {
    state.activeGameID = input;
  },
  setActiveJournal(state, input) {
    state.activeJournal = input;
  },
  setActiveChar(state, input) {
    state.activeCharacter = input;
  }
};

export default {
  state,
  mutations,
  getters
};
