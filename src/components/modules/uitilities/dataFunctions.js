import axios from "axios";

var getCampaigns = function() {
  return axios
    .get(process.env.VUE_APP_API_URL + "getCampaignTable")
    .then(result => {
      console.log(result.data);
      return result.data;
    });
};

export { getCampaigns };
