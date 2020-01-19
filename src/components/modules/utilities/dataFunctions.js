/* eslint-disable */
import axios from "axios";

var getCampaigns = function() {
  return axios
    .get(process.env.VUE_APP_API_URL + "getCampaignTable")
    .then(result => {
      return result.data;
    });
};

var postCampaigns = function(campaignData, userCert) {
  var message = { data: campaignData, cert: userCert };
  return axios
    .post(process.env.VUE_APP_API_URL + "postCampaignTable", message)
    .then(response => {
      return response.data;
    });
};

var getUsersList = function() {
  return axios
    .get(process.env.VUE_APP_API_URL + "getUserNames")
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
  postCampaigns,
  getUsersList,
  postUserCharUpdate,
  getUserChars
};
