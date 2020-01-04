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
import { signIn } from "@/components/modules/signIn.js";
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
    signIn,
    checkStore() {
      var store = JSON.parse(localStorage.getItem("UserData"));
      var expires = new Date(store.expires);
      var now = new Date();

      try {
        if (store.userName && now <= expires) {
          return true;
        } else if (store.userName && now > expires) {
          localStorage.removeItem("UserData");
          return false;
        } else if (!store.userName) {
          return false;
        }
      } catch {
        return false;
      }
    },
    getUserStore() {
      var store = JSON.parse(localStorage.getItem("UserData"));
      return store.userName;
    },
    logIn() {
      this.signIn(this.userName, this.passWord);
      if (this.checkStore()) {
        const userData = this.getUserStore();
        this.userTable.forEach(user => {
          if (user.userName === userData) {
            this.$store.commit("setActiveUser", user);
          }
        });
        this.$store.commit("setCurrUserName", userData);
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

<style scoped>
</style>
