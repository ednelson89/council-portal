<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{activeGame.gameName}}</h2>
        <p>
          <span style="font-weight: bold">Game Master:</span>
          <span style="font-style: italic">{{activeGame.gameGM}}</span>
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
        <p
          style="font-style: italic; "
          v-for="(desc, index) in activeGame.gameDesc"
          :key="index"
        >{{desc}}</p>
      </b-col>
    </b-row>
    <hr />
    <b-card v-if="recentJournal">
      <b-row>
        <b-col cols="12">
          <h3>Most Recent Adventure Log:</h3>
        </b-col>
        <b-col cols="6">
          <p style="font-weight: bold; margin-bottom: 0;">{{recentJournal.journalTitle}}</p>

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
          <p>{{recentJournal.journalContent[0].substring(0,400)}}</p>
        </b-col>
        <b-col cols="4">
          <router-link tag="b-button" class="cardButton" to="/journal-view">Read More</router-link>
        </b-col>
      </b-row>
    </b-card>
    <b-card v-else>
      <b-row>
        <b-col>
          <p style="font-style: italic;">No current Journal Entries</p>
          <router-link tag="b-button" class="cardButton" to="/journal-view">Game Journals</router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCampaigns } from "@/components/modules/utilities/dataFunctions.js";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      gameList: "getGames",
      activeGame: "getActiveGame"
    }),
    recentJournal() {
      return this.activeGame.journalPosts[0];
    }
  },
  beforeMount() {
    let gameList = [];
    getCampaigns()
      .then(response => {
        let currGame;
        response.forEach(entry => {
          gameList.push(entry);
          if (entry.gameID === this.activeGame.gameID) {
            currGame = entry;
          }
        });
        return currGame;
      })
      .then(game => {
        this.$store.commit("setActiveGame", game);
        this.$store.commit("setGames", gameList);
      });
  }
};
</script>

<style scoped>
</style>
