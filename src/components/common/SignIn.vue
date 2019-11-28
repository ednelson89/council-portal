<template>
  <div>
    <b-row>
      <b-col>
        <h2>Sign In</h2>
      </b-col>
    </b-row>
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
          <input type="text" v-model="passWord" class="form-control" />
        </label>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" md="6">
        <b-button @click="logIn" class="cardButton">Log In</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" md="6">
        <b-button class="cardButton">Create an Account</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { signIn } from "@/components/modules/signIn.js";

export default {
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  methods: {
    signIn,
    checkStore() {
      var store = JSON.parse(localStorage.getItem("UserData"));
      var expires = new Date(store.expires);
      var now = new Date();

      if (store.userName && now < expires) {
        return true;
      } else if (store.userName && now > expires) {
        localStorage.removeItem("UserData");
        return false;
      } else if (!store.userName) {
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
        this.$store.commit("setCurrUser", this.getUserStore());
        this.$router.push({ path: "/" });
      }
    }
  }
};
</script>

<style scoped>
</style>
