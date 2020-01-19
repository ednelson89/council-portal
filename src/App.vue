<template>
  <div id="app">
    <v-app
      :style="{
        'background-image':
          'url(' + require('./assets/background_texture.png') + ')'
      }"
    >
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
import {
  getCampaigns,
  getUserChars
} from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

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
    }
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser"
    })
  },
  created() {
    if (this.checkStore()) {
      // Get Username
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
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }

      // Get user Characters
      var localStore = JSON.parse(localStorage.getItem("UserData"));
      getUserChars(localStore).then(data => {
        this.activeUser.userChars = data;
      });

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
<style src="./css/main.css"></style>
