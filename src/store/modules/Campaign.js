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
  },
  addGame(state, input) {
    state.push(input);
  },
  updateJournal(state, inputPack) {
    var journal = inputPack.journalEntry;
    var gameId = inputPack.activeGameID;
    var typeUpdate = inputPack.updateType;

    state.forEach(game => {
      if (game.gameID === gameId && typeUpdate === 1) {
        game.journalPosts.unshift(journal);
      } else if (game.gameID === gameId && typeUpdate === 2) {
        game.journalPosts.forEach(gameJournal => {
          if (gameJournal.journalID === journal.journalID) {
            gameJournal = journal;
          }
        });
      } else if (game.gameID === gameId && typeUpdate === 3) {
        game.journalPosts.forEach((journalEntry, index) => {
          if (journalEntry.journalID === journal.journalID) {
            game.journalPosts.splice(index, 1);
          }
        });
      }
    });
  }
};

export default {
  state,
  getters,
  mutations
};
