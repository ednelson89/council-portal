/* eslint-disable */
import { password } from "@/data/passwordTable.js";
import axios from "axios";

// Action Codes: 1:login, 2:logout, 3:add
var postSignInOut = function(userCert, actionCode) {
  return axios({
    method: "post",
    url: process.env.VUE_APP_API_URL + "postSignInOut",
    data: { cert: userCert, action: actionCode }
  })
    .then(response => {
      if (response.data) {
        setStore(response.data);
        return true;
      } else {
        return false;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

function setStore(userData) {
  var user = userData;

  localStorage.setItem("UserData", JSON.stringify(user));
}

export { postSignInOut };
