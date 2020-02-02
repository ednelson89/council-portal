/* eslint-disable no-console */
const state = [];

const getters = {
  getGames(state) {
    return state;
  }
};

const mutations = {
  setGames(state, inputs) {
    state.splice(0, state.length);
    inputs.forEach(game => {
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
  },
  updateWiki(state, inputPack) {
    var wiki = inputPack.wikiEntry;
    var gameId = inputPack.activeGameID;
    var typeUpdate = inputPack.updateType;

    state.forEach(game => {
      if (game.gameID === gameId && typeUpdate === 1) {
        game.wikiPosts.unshift(wiki);
      } else if (game.gameID === gameId && typeUpdate === 2) {
        game.wikiPosts.forEach(gameWiki => {
          if (gameWiki.wikiID === wiki.wikiID) {
            gameWiki = wiki;
          }
        });
      } else if (game.gameID === gameId && typeUpdate === 3) {
        game.wikiPosts.forEach((wikiEntry, index) => {
          if (wikiEntry.journalID === wiki.journalID) {
            game.wikiPosts.splice(index, 1);
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
