const state = {
  userName: "",
  activeUser: { userChars: [] },
  activeGameID: {},
  activeJournal: "",
  activeCharacter: {},
  appRoute: "",
  deletingToken: false
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
  getActiveGameWikiList(state) {
    return state.activeGameID.wikiPosts;
  },
  getDeletingToken(state) {
    return state.deletingToken;
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
  getActiveGameTokens() {
    return state.activeGameID.gameTokens;
  },
  getAppRoute() {
    return state.appRoute;
  }
};

const mutations = {
  setDeletingToken(state, input) {
    state.deletingToken = input;
  },
  setCurrUserName(state, input) {
    state.userName = input;
  },
  setActiveUser(state, input) {
    state.activeUser = input;
  },
  setUserChars(state, input) {
    state.activeUser.userChars = [];
    input.forEach(element => {
      state.activeUser.userChars.push(element);
    });
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

    input.forEach(element => {
      state.activeGameID.gameChars.push(element);
    });
  },
  setCurrentGameTokens(state, input) {
    state.activeGameID.gameTokens = [];

    input.forEach(element => {
      state.activeGameID.gameTokens.push(element);
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
  },
  updateWiki(state, input) {
    state.activeGameID.wikiPosts = input.reverse();
  },
  updateJournals(state, input) {
    state.activeGameID.journalPosts = input.reverse();
  }
};

export default {
  state,
  mutations,
  getters
};
