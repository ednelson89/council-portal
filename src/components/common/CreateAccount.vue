<template>
  <div>
    <h2>Create Account</h2>
    <p>
      Here you can create a user account for a friend. As the Council Portal is generally intended to be a private service,
      accounts can only be made by someone who already has an account.
    </p>
    <hr />
    <form @submit.prevent="create">
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
          <b-button
            type="submit"
            class="cardButton"
            :disabled="userName == activeUserName || (!userName || !passWord)"
          >Create User Account</b-button>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
import { createAccount } from "@/components/modules/utilities/createAccount.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userName: "",
      passWord: ""
    };
  },
  computed: {
    ...mapGetters({
      activeUserName: "getCurrUserName"
    })
  },
  methods: {
    create() {
      let data = { username: this.userName, password: this.passWord };
      createAccount(data).then(() => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<style >
</style>