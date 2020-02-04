const state = {
  userName: "",
  activeUser: {},
  activeGameID: {},
  activeJournal: "",
  activeCharacter: {},
  appRoute: ""
};

const getters = {
  getCurrUserName(state) {
    return state.userName;
  },
  getActiveUser(state) {
    return state.activeUser;
  },
  getActiveGame(state) {
    return state.activeGameID;
  },
  getGameType() {
    return state.activeGameID.gameType;
  },
  getActiveJournal(state) {
    return state.activeJournal;
  },
  getActiveChar(state) {
    return state.activeCharacter;
  },
  getActiveGameCharList() {
    return state.activeGameID.gameChars;
  },
  getAppRoute() {
    return state.appRoute;
  }
};

const mutations = {
  setCurrUserName(state, input) {
    state.userName = input;
  },
  setActiveUser(state, input) {
    state.activeUser = input;
  },
  clearActiveUser(state) {
    state.activeUser = {};
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
  setNewGameCharacter(state, input) {
    state.activeGameID.gameChars.push(input);
  },
  setCurrentGameCharacters(state, input) {
    state.activeGameID.gameChars = [];
    // eslint-disable-next-line no-console
    console.log(input);
    input.forEach(element => {
      state.activeGameID.gameChars.push(element);
    });
  },
  setNewUserCharacter(state, input) {
    state.activeUser.userChars.push(input);
  },
  deleteGameChar(state, input) {
    state.activeGameID.gameChars.splice(input, 1);
  },
  deleteUserChar(state, input) {
    state.activeUser.userChars.splice(input, 1);
  },
  setAppRoute(state, input) {
    state.appRoute = input;
  }
};

export default {
  state,
  mutations,
  getters
};
