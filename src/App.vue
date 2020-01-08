<template>
  <div id="app">
    <v-app :style="{'background-image': 'url(' + require('./assets/background_texture.png') + ')'}">
      <navigation></navigation>
      <b-container fluid>
        <b-row align="center" justify="start">
          <b-col
            md="9"
            offset-md="1"
            xs="11"
            offset-xs="1"
            style="padding-top: 15px; padding-bottom: 15px;"
          >
            <div class="main-content">
              <router-view></router-view>
            </div>
          </b-col>
          <b-col xs="11" offset-xs="1" md="2" style="padding-top: 15px; padding-bottom: 15px;">
            <div class="side-content">
              <resourceMin></resourceMin>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </v-app>
  </div>
</template>

<script>
import navigation from "@/components/common/Navigation.vue";
import resourceMin from "@/components/views/SideBar/ResourceMin.vue";
import { userTable } from "@/data/userTable.js";
import { getCampaigns } from "@/components/modules/utilities/dataFunctions.js";

export default {
  components: { navigation, resourceMin },
  data() {
    return {
      userTable
    };
  },
  methods: {
    getCampaigns,
    checkStore() {
      try {
        var store = JSON.parse(localStorage.getItem("UserData"));
        var expires = new Date(store.expires);
        var now = new Date();

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
    }
  },
  created() {
    if (this.checkStore()) {
      const userData = this.getUserStore();

      var gameList = this.getCampaigns();
      this.$store.commit("setGames", gameList);

      this.userTable.forEach(user => {
        if (user.userName === userData) {
          this.$store.commit("setActiveUser", user);
        }
      });
      this.$store.commit("setCurrUserName", userData);
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
      this.$forceUpdate();
    } else {
      localStorage.removeItem("UserData");
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
    }
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d2935;
}
</style>
<style src="./css/main.css">
</style>