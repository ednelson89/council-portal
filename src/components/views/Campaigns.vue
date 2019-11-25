<template>
  <div>
    <b-row>
      <b-col cols="12">
        <br />
        <h2>My Campaigns</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p>Here you'll find a list of all the campaigns you're in. You can also create campaigns here.</p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/createGame">Create a Game</router-link>
      </b-col>
    </b-row>
    <hr style="width:90%" />
    <div>
      <b-row>
        <b-col cols="6" v-for="(game, index) in gameList" :key="index">
          <b-card :title="game.gameName" style="margin:10px" class="b-cards">
            <b-card-text>Description: {{game.gameDesc}}</b-card-text>
            <b-card-text>GM: {{game.gameGM}}</b-card-text>
            <b-card-text>Date Created: {{game.gameDate}}</b-card-text>
            <b-button href="#" class="cardButton">Enter Game</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      gameList: "getGames"
    })
  }
};
</script>

<style scoped>
</style>