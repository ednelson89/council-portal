<template>
  <div id="app">
    <v-app :style="{'background-image': 'url(' + require('./assets/background_texture.png') + ')'}">
      <navigation></navigation>
      <v-content>
        <b-container fluid>
          <b-row align="center" justify="start">
            <b-col md="9" offset-md="1" xs="11" offset-xs="1">
              <div class="main-content">
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </div>
            </b-col>
            <b-col xs="11" offset-xs="1" md="2">
              <div class="side-content">
                <p>Right Column</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </v-content>
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
  created() {
    this.$store.commit("setGames", this.gameList);
  }
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