<template>
  <div>
    <b-row>
      <b-col>
        <div v-if="playing">
          <p style="font-weight:bold; margin-right:5px;">Game Board Tools:</p>
          <p style="margin-right:5px;">
            You can change the map and add/remove tokens from the board by following the steps below.
            The board will automatically update every 20 seconds.
          </p>

          <b-button
            class="cardButton"
            style="margin-bottom:10px; margin-right:5px;"
            @click="$refs['addTokenModal'].show()"
          >Add Tokens</b-button>

          <b-button
            class="cardButton"
            style="margin-bottom:10px; margin-right:5px;"
            @click="!deleting ? $store.commit('setDeletingToken', true) : $store.commit('setDeletingToken', false)"
          >{{!deleting ? 'Delete a Token': 'Deleting, Click Again to Cancel'}}</b-button>
          <p style="font-style:italic; margin-right:5px;">The next token you move will be deleted.</p>

          <label>
            Change the map:
            <input
              type="text"
              style="margin-right:15px;"
              class="form-control"
              placeholder="Image URL"
              v-model="gameMap"
            />
            <b-button
              class="cardButton"
              style="margin:10px; margin-right:5px;"
              @click="changeMap"
              :disabled="loading"
            >
              {{ !loading ? "Save Map" : "Loading..." }}
              <b-spinner label="Loading..." v-if="loading"></b-spinner>
            </b-button>
          </label>
        </div>
      </b-col>
    </b-row>
    <!--Token Modal -->
    <b-modal
      ref="addTokenModal"
      id="addTokenModal"
      hide-header
      cancel-title="Cancel"
      ok-title="Add Token"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      size="lg"
      @cancel="tempTokenReset()"
      @ok="addTokens"
    >
      <b-row>
        <b-col>
          <h3>Create Tokens</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label style=" width:20%;">
            Player token?
            <input
              type="checkbox"
              class="form-control"
              v-model="tempToken.playerToken"
            />
          </label>
        </b-col>
        <b-col>
          <label>
            How many?
            <input type="number" class="form-control" v-model="tokenNum" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label style="width:100%">
            Please provide a name for this token ( mutiples will be automatically numbered):
            <input
              type="text"
              class="form-control"
              style="width:100%"
              v-model="tempToken.tokenName"
            />
          </label>
          <label style="width:100%">
            Please provide the url for the image you would like to use on this token:
            <input
              type="text"
              class="form-control"
              style="width:100%"
              v-model="tempToken.imgSrc"
            />
          </label>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dnd5e from "@/components/modules/Resources/resourcesD&D.js";
import { mobToken } from "@/components/modules/TableObjects/mobToken.js";
import {
  getCampaigns,
  updateTokens,
  updateMap
} from "@/components/modules/utilities/dataFunctions.js";

export default {
  data() {
    return {
      dnd5e,
      loading: false,
      tokenNum: 1,
      tempToken: mobToken(),
      gameMap: ""
    };
  },
  methods: {
    generateID() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      );
    },
    tempTokenReset() {
      this.tempToken = null;
      this.tempToken = mobToken();
    },
    async addTokens() {
      this.loading = true;
      for (var i = 0; i < this.tokenNum; i++) {
        // eslint-disable-next-line no-console
        console.log(this.tempToken.tokenID);
        this.tempToken.tokenID = this.generateID();
        if (this.tokenNum > 1) {
          this.tempToken.tokenName = this.tempToken.tokenName + (i + 1);
        }

        await updateTokens(1, this.tempToken, this.activeGame.gameID)
          .then(() => {
            this.updateGame();
          })
          .then(() => {
            this.$forceUpdate();
            this.loading = false;
          });
      }
    },
    changeMap() {
      this.loading = true;
      updateMap(this.gameMap, this.activeGame.gameID)
        .then(() => {
          this.updateGame();
          this.loading = false;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);

          this.loading = false;
        });
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
    }
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame",
      deleting: "getDeletingToken"
    }),
    activeGameType() {
      return this.$store.getters.getGameType;
    },
    playing() {
      return this.$route.path === "/game-table";
    }
  }
};
</script>

<style scoped>
</style>