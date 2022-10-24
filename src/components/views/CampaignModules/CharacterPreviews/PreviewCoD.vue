<template>
  <div>
    <div v-if="activeGame.length > 0">
      <b-row v-for="(char, index) in activeGame" :key="index">
        <b-col>
          <b-card class="b-cards">
            <b-row>
              <b-col xs="12" md="4">
                <h3>{{ char.genBlock.charName }}</h3>
                <p>
                  User:
                  <span class="italics">{{ char.charUser }}</span>
                </p>
                <b-row>
                  <b-col xs="12" md="5">
                    <b-button class="cardButton" @click="viewCharacter(char)"
                      >View Character</b-button
                    >
                  </b-col>
                  <b-col xs="12" md="5">
                    <b-button
                      :disabled="activeChar !== char.charUser"
                      class="cardButton"
                      @click="deleteCharacterModal(index)"
                      >Delete Character</b-button
                    >
                  </b-col>

                  <b-col xs="12" md="5">
                    <b-button
                      :disabled="activeChar !== char.charUser"
                      class="cardButton"
                      @click="unassignModal(index)"
                      >Un-Assign Character</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
              <b-col xs="12" md="4">
                <p>System: Chronicles of Darkness</p>
                <p>
                  Chronicle:
                  <span class="italics">{{ char.genBlock.chronicle }}</span>
                </p>
                <p>
                  Faction:
                  <span class="italics">{{ char.genBlock.faction }}</span>
                </p>
                <p>
                  Concept:
                  <span class="italics">{{ char.genBlock.concept }}</span>
                </p>
              </b-col>
              <b-col xs="12" md="4">
                <img
                  class="charImg b-cards"
                  :src="char.portraitSrc"
                  :alt="'Image of ' + char.genBlock.charName"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row>
        <b-col>
          <p>
            There are currently no Chronicles of Darkness characters in the
            campaign.
          </p>
        </b-col>
      </b-row>
    </div>
    <b-modal ref="deleteModal" hide-header hide-footer>
      <div>
        <b-row>
          <b-col>
            <p>
              Are you sure you want to delete this character (
              <span style="font-weight:bold">{{ charName }}</span> )?
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              class="cardButton"
              @click="deleteCharacter(1)"
              :disabled="loading"
            >
              {{ !loading ? 'Yes' : 'Loading...' }}
              <b-spinner label="Loading..." v-if="loading"></b-spinner>
            </b-button>
          </b-col>
          <b-col>
            <b-button class="cardButton" @click="deleteCharacter(2)"
              >No</b-button
            >
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <b-modal ref="unassignModal" hide-header hide-footer>
      <div>
        <b-row>
          <b-col>
            <p>
              Are you sure you would like to unassign this character (
              <span style="font-weight:bold">{{ charName }}</span> )? This will
              remove the character from the game and return them to your
              un-assigned character bank.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              class="cardButton"
              @click="unassign(1)"
              :disabled="loading"
            >
              {{ !loading ? 'Yes' : 'Loading...' }}
              <b-spinner label="Loading..." v-if="loading"></b-spinner>
            </b-button>
          </b-col>
          <b-col>
            <b-button class="cardButton" @click="unassign(2)">No</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  getCampaigns,
  updateGameChar,
  postUserCharUpdate,
} from '@/components/modules/utilities/dataFunctions.js';
export default {
  data() {
    return {
      delIndex: null,
      loading: false,
      charName: '',
    };
  },
  methods: {
    viewCharacter(character) {
      this.$store.commit('setActiveChar', character);
      this.$router.push({ path: '/view-game-character' });
    },
    deleteCharacterModal(index) {
      this.delIndex = index;
      this.charName = this.currGame.gameChars[this.delIndex].genBlock.charName;

      this.$refs['deleteModal'].show();
      this.$forceUpdate();
    },
    unassignModal(index) {
      this.delIndex = index;
      this.charName = this.currGame.gameChars[this.delIndex].genBlock.charName;

      this.$refs['unassignModal'].show();
      this.$forceUpdate();
    },
    unassign(code) {
      if (code === 1) {
        this.loading = true;
        var localStore = JSON.parse(localStorage.getItem('UserData'));

        this.$store.commit(
          'setNewUserCharacter',
          this.currGame.gameChars[this.delIndex]
        );
        // Add char to User
        postUserCharUpdate(
          localStore,
          1,
          this.currGame.gameChars[this.delIndex]
        ).then(() => {
          // Delete from game
          updateGameChar(
            2,
            this.currGame.gameChars[this.delIndex],
            this.currGame.gameID
          )
            .then(() => {
              // update Game
              this.updateGame();
            })
            .then(() => {
              this.$refs['unassignModal'].hide();

              this.delIndex = null;
              this.loading = false;
              this.charName = '';
              this.$forceUpdate();
            });
        });
      } else if (code === 2) {
        this.$refs['unassignModal'].hide();
        this.delIndex = null;
        this.charName = '';
      }
    },
    deleteCharacter(actionCode) {
      if (actionCode === 1) {
        this.loading = true;
        updateGameChar(
          2,
          this.currGame.gameChars[this.delIndex],
          this.currGame.gameID
        )
          .then(async () => {
            await this.updateGame();
          })
          .then(() => {
            this.$forceUpdate();

            this.$refs['deleteModal'].hide();
            this.loading = false;
            this.delIndex = null;
            this.charName = '';
          });
      } else if (actionCode === 2) {
        this.$refs['deleteModal'].hide();
        this.delIndex = null;
        this.charName = '';
      }
      this.$forceUpdate();
    },
    updateGame() {
      let gameList = [];
      getCampaigns()
        .then((response) => {
          let currGame;
          response.forEach((entry) => {
            gameList.push(entry);
            if (entry.gameID === this.currGame.gameID) {
              currGame = entry;
            }
          });

          this.$store.commit('setActiveGame', currGame);
          this.$store.commit('setGames', gameList);
          return currGame;
        })
        .then(() => {
          this.$forceUpdate();
        });
    },
  },
  computed: {
    activeGame() {
      return this.$store.getters.getActiveGameCharList;
    },
    activeChar() {
      return this.$store.getters.getCurrUserName;
    },
    activeUserChars() {
      var user = this.$store.getters.getActiveUser;
      return user.userChars;
    },
    currGame() {
      return this.$store.getters.getActiveGame;
    },
  },
  beforeMount() {
    this.updateGame();
  },
};
</script>

<style scoped>
.charImg {
  width: 200px;
  border-radius: 8px;
  border: 2px ridge #ddd;
  border-radius: 4px;
  padding: 5px;
}

button {
  margin-top: 5px;
}
</style>
