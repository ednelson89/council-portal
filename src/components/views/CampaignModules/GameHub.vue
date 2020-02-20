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
    <b-row>
      <b-col cols="4" offset="8">
        <b-button
          class="cardButton"
          @click="$refs['joinGameModal'].show()"
        >{{!inGame ? "Join Game" : "Leave Game"}}</b-button>
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
          <router-link tag="b-button" class="cardButton" to="/game-journal-view">Read More</router-link>
        </b-col>
      </b-row>
    </b-card>
    <b-card v-else>
      <b-row>
        <b-col>
          <p style="font-style: italic;">No current Journal Entries</p>
          <router-link tag="b-button" class="cardButton" to="/game-journal-view">Game Journals</router-link>
        </b-col>
      </b-row>
    </b-card>
    <b-modal ref="joinGameModal" id="joinGameModal" hide-header hide-footer size="lg">
      <b-row v-if="!inGame">
        <b-col>Are you sure you'd like to join this game?</b-col>
      </b-row>
      <b-row v-else>
        <b-col>Are you sure you'd like to leave this game?</b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-button class="cardButton" @click="joinModalAction" :disabled="loading">
            {{ !loading ? "Yes" : "Loading..." }}
            <b-spinner label="Loading..." v-if="loading"></b-spinner>
          </b-button>
        </b-col>
        <b-col cols="6">
          <b-button class="cardButton" @click="closeModal">No</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getCampaigns,
  updateGameUsers
} from "@/components/modules/utilities/dataFunctions.js";

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    closeModal() {
      this.$refs["joinGameModal"].hide();
      this.loading = false;
    },
    updateGame() {
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
          this.$forceUpdate();
        });
    },
    joinModalAction() {
      this.loading = true;
      if (!this.inGame) {
        updateGameUsers(1, this.currUser, this.activeGame.gameID).then(() => {
          this.loading = false;
          this.updateGame();
          this.$refs["joinGameModal"].hide();
        });
      } else {
        updateGameUsers(2, this.currUser, this.activeGame.gameID).then(() => {
          this.loading = false;
          this.updateGame();
          this.$refs["joinGameModal"].hide();
        });
      }
    }
  },
  computed: {
    ...mapGetters({
      gameList: "getGames",
      activeGame: "getActiveGame",
      currUser: "getCurrUserName"
    }),
    recentJournal() {
      return this.activeGame.journalPosts[
        this.activeGame.journalPosts.length - 1
      ];
    },
    inGame() {
      return this.activeGame.gamePlayers.includes(this.currUser);
    }
  },
  beforeMount() {
    this.updateGame();
  }
};
</script>

<style scoped>
</style>
