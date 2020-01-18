<template>
  <div>
    <b-row>
      <b-col>
        <h2>Sign In</h2>
      </b-col>
    </b-row>
    <form @submit.prevent="logIn">
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Username:
            <input type="text" v-model="userName" class="form-control" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Password:
            <input type="password" v-model="passWord" class="form-control" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" md="6">
          <b-button type="submit" class="cardButton">Log In</b-button>
        </b-col>
      </b-row>
    </form>
    <b-row>
      <b-col xs="12" md="6">
        <b-button class="cardButton">Create an Account</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { postSignInOut } from "@/components/modules/utilities/postSignInOut.js";
import { getCampaigns } from "@/components/modules/utilities/dataFunctions.js";
import { userTable } from "@/data/userTable.js";

export default {
  data() {
    return {
      userName: "",
      passWord: "",
      userTable
    };
  },
  methods: {
    postSignInOut,
    getCampaigns,
    checkStore() {
      var store = JSON.parse(localStorage.getItem("UserData"));
      var expires = new Date(store.expires);
      var now = new Date();

      try {
        if (store.user && now <= expires) {
          return true;
        } else if (store.user && now > expires) {
          localStorage.removeItem("UserData");
          return false;
        } else if (!store.user) {
          return false;
        }
      } catch {
        return false;
      }
    },
    getUserStore() {
      var store = JSON.parse(localStorage.getItem("UserData"));
      return store.user;
    },
    logIn() {
      // Login on 'server'
      var certs = { username: this.userName, password: this.passWord };
      this.postSignInOut(certs, 1).then(() => {
        if (this.checkStore()) {
          // Get username
          const userData = this.getUserStore();
          // Get GamesList
          var gameList = [];
          this.getCampaigns()
            .then(response => {
              response.forEach(entry => {
                gameList.push(entry);
              });
            })
            .then(() => {
              this.$store.commit("setGames", gameList);
            });

          // Get UserTables
          this.userTable.forEach(user => {
            if (user.userName === userData) {
              this.$store.commit("setActiveUser", user);
            }
          });
          this.$store.commit("setCurrUserName", userData);
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>

<style scoped></style>
