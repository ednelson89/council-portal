/* eslint-disable */
import axios from "axios";

// CAMPAIGN FUNCTIONS
var getCampaigns = function() {
  return axios
    .get(process.env.VUE_APP_API_URL + "getCampaignTable?pass=cob2019")
    .then(result => {
      return result.data;
    });
};

var addCampaigns = function(campaignData) {
  var message = { data: campaignData };
  return axios
    .post(process.env.VUE_APP_API_URL + "addCampaigns", message)
    .then(response => {
      return response.data;
    });
};

// 1:Add, 2: Delete, 3: Update
var updateGameChar = function(userCert, actionCode, updateChar, activeID) {
  var message = {
    cert: userCert,
    data: { code: actionCode, data: updateChar, gameID: activeID }
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "updateUserCharacters", message)
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
  updateGameChar
};
