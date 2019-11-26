<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{currentGame.gameName}}</h2>
        <p>
          <span style="font-weight: bold">Game Master:</span>
          <span style="font-style: italic">{{currentGame.gameGM}}</span>
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p
          style="font-style: italic"
        >You can use the expanded options on the navigation menu to navigate between menus within the game.</p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/campaigns">Go Back</router-link>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <h3>Game Summary:</h3>
        <p style="font-style: italic; ">{{currentGame.gameDesc}}</p>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="12">
        <h3>Most Recent Adventure Log:</h3>
        <p style="font-weight: bold; margin-bottom: 0;">{{recentJournal.journalTitle}}</p>
      </b-col>
      <b-col cols="6">
        <p>
          Date Created:
          <span style="font-style: italic;">{{recentJournal.journalDate}}</span>
        </p>
      </b-col>
      <b-col cols="6">
        <p>
          Author:
          <span style="font-style: italic;">{{recentJournal.journalAuthor}}</span>
        </p>
      </b-col>
      <b-col cols="12">
        <p>{{recentJournal.journalContent.substring(0,400)}}</p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/journal-view">Read More</router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currentGame: ""
    };
  },
  methods: {
    setLocalGame() {
      this.gameList.forEach(game => {
        if (game.gameID === this.activeGame) {
          this.currentGame = game;
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      gameList: "getGames",
      activeGame: "getActiveGame"
    }),
    recentJournal() {
      var journal = this.currentGame.journalPosts;
      var jLength = journal.length;

      return journal[jLength - 1];
    }
  },
  mounted() {
    this.setLocalGame();
  }
};
</script>

<style scoped>
</style>