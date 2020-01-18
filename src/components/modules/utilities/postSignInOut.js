/* eslint-disable */
import { password } from "@/data/passwordTable.js";
import axios from "axios";

// Action Codes: 1:login, 2:logout, 3:add
var postSignInOut = function(userCert, actionCode) {
  return axios({
    method: "post",
    url: process.env.VUE_APP_API_URL + "postSignInOut",
    data: { cert: userCert, action: actionCode }
  }).then(response => {
    setStore(response.data);
    return response.data;
  });
};

function setStore(userData) {
  var user = userData;

  localStorage.setItem("UserData", JSON.stringify(user));
}

export { postSignInOut };
