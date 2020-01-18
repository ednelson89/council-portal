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

// Actions 1:Add, 2:Update, 3:Delete
var postUserUpdate = function(userCert, actionCode) {
  var message = { cert: userCert, action: actionCode };
  return axios
    .post(process.env.VUE_APP_API_URL + "postCampaignTable", message)
    .then(response => {
      return response.data;
    });
};

export { getCampaigns, postCampaigns, getUsersList, postUserUpdate };
