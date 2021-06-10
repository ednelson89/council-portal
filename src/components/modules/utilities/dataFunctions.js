/* eslint-disable */
import axios from "axios";

// CAMPAIGN FUNCTIONS
var getCampaigns = function() {
  try{
    return axios
    .get(process.env.VUE_APP_API_URL + "getCampaignTable?pass=cob2019")
    .then(result => {
      return result.data;
    });
  }catch(e){
    return axios
    .get(process.env.VUE_APP_API_URL + "getCampaignTable?pass=cob2019")
    .then(result => {
      return result.data;
    });
  }
};

var updateGameSummary = function(gameSummary, activeID){
  var message = {
    data: { data: gameSummary, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateGameSummary", message)
    .then(response => {
      return response.data;
    });
}

var addCampaigns = function(campaignData) {
  var message = { data: campaignData };
  return axios
    .post(process.env.VUE_APP_API_URL + "addCampaigns", message)
    .then(response => {
      return response.data;
    });
};

var updateTokens = function(actionCode, token, activeID) {
  var message = {
    data: { code: actionCode, data: token, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateTokens", message)
    .then(response => {
      return response.data;
    });
};

var updateMap = function(map, activeID) {
  var message = {
    data: { data: map, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateMap", message)
    .then(response => {
      return response.data;
    });
};

// 1 add, 2 delete, 3 update, 4 overwrite
var updateWikis = function(actionCode, wiki, activeID) {
  var message = {
    data: { code: actionCode, data: wiki, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateWikis", message)
    .then(response => {
      return response.data;
    });
};

var updateJournals = function(actionCode, journal, activeID) {
  var message = {
    data: { code: actionCode, data: journal, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateJournals", message)
    .then(response => {
      return response.data;
    });
};

// 1:Add, 2: Delete, 3: Update
var updateGameChar = function(actionCode, updateChar, activeID) {
  var message = {
    data: { code: actionCode, data: updateChar, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateGameCharacters", message)
    .then(response => {
      return response.data;
    });
};
// 1:Add, 2: Delete
var updateGameUsers = function(actionCode, playerName, activeID) {
  var message = {
    data: { code: actionCode, data: playerName, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateGameUsers", message)
    .then(response => {
      return response.data;
    });
};

// USER FUNCTIONS
var getUsersList = function() {
  return axios
    .get(process.env.VUE_APP_API_URL + "getUserNames?pass=cob2019")
    .then(result => {
      return result.data;
    });
};

// Actions 1:Add, 2:Delete, 3:Update
var postUserCharUpdate = function(userCert, actionCode, updateChar) {
  var message = {
    cert: userCert,
    data: { code: actionCode, data: updateChar }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateUserCharacters", message)
    .then(response => {
      return response.data;
    });
};

var getUserChars = function(userCert) {
  var message = {
    cert: userCert
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "getUserCharacters", message)
    .then(response => {
      return response.data;
    });
};

export {
  getCampaigns,
  addCampaigns,
  getUsersList,
  postUserCharUpdate,
  getUserChars,
  updateGameChar,
  updateWikis,
  updateJournals,
  updateGameUsers,
  updateTokens,
  updateMap,
  updateGameSummary
};
