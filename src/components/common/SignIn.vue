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
          <b-button type="submit" class="cardButton">
            {{ !loading ? "Log In" : "Loading..." }}
            <b-spinner label="Loading..." v-if="loading"></b-spinner>
          </b-button>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { postSignInOut } from "@/components/modules/utilities/postSignInOut.js";
import {
  getCampaigns,
  getUserChars,
} from "@/components/modules/utilities/dataFunctions.js";

export default {
  data() {
    return {
      userName: "",
      passWord: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser",
    }),
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
      this.loading = true;
      this.postSignInOut(certs, 1)
        .then((response) => {
          if (response === true) {
            if (this.checkStore()) {
              // Get username
              const userData = this.getUserStore();
              // Get GamesList
              var gameList = [];
              this.getCampaigns()
                .then((response) => {
                  response.forEach((entry) => {
                    gameList.push(entry);
                  });
                  this.$store.commit("setGames", gameList);                  
                })
              this.$store.commit("setCurrUserName", userData);

              // Get user Characters
              var localStore = JSON.parse(localStorage.getItem("UserData"));
              getUserChars(localStore).then((data) => {
                this.activeUser.userChars = data;

                this.loading = false;
                this.$router.push({ path: "/" });
              });
            }
          } else {
            this.loading = false;
            alert("Login Failed");
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped></style>
