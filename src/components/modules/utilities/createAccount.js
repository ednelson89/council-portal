import axios from "axios";

var createAccount = function(userData) {
  var message = {
    data: userData
  };
  return axios
    .post(process.env.VUE_APP_API_URL + "createUserAccount", message)
    .then(response => {
      return response.data;
    });
};

export { createAccount };
