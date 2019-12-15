const state = {
  userName: "",
  activeGameID: {},
  activeJournal: "",
  activeCharacter: {}
};

const getters = {
  getCurrUser(state) {
    return state.userName;
  },
  getActiveGame(state) {
    return state.activeGameID;
  },
  getGameSystem() {
    return state.activeGameID.gameSystem;
  },
  getActiveJournal(state) {
    return state.activeJournal;
  },
  getActiveChar(state) {
    return state.activeCharacter;
  },
  getActiveGameCharList() {
    return state.activeGameID.gameChars;
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
  },
  setNewCharacter(state, input) {
    state.activeGameID.gameChars.push(input);
  },
  deleteChar(state, input) {
    state.activeGameID.gameChars.splice(input, 1);
  }
};

export default {
  state,
  mutations,
  getters
};
