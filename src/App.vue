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
              <p>Right Column</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </v-app>
  </div>
</template>

<script>
import navigation from "@/components/common/Navigation.vue";
import games from "@/data/campaignList.js";

export default {
  components: { navigation },
  data() {
    return {
      gameList: games
    };
  },
  methods: {
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
    this.$store.commit("setGames", this.gameList);

    if (this.checkStore()) {
      this.$store.commit("setCurrUser", this.getUserStore());
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