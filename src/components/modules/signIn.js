/* eslint-disable */
import { password } from "@/data/passwordTable.js";

var signIn = function(userName, pass) {
  let uName = userName;
  let passcode = pass;

  password.forEach(record => {
    if (record.user === uName) {
      if (record.password === passcode) {
        setStore("User", uName, 3);
        return uName;
      } else {
        return "Incorrect Password";
      }
    } else {
      return "No Such Username";
    }
  });
};

function setStore(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();

  var user = {
    userName: cvalue,
    expires: d
  };

  localStorage.setItem("UserData", JSON.stringify(user));
}

export { signIn };
