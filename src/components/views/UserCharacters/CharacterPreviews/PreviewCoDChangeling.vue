<template>
  <div>
    <div v-if="activeUser.userChars.length > 0 ">
      <b-row v-for="(char, index) in activeUser.userChars" :key="index">
        <b-col v-if="char.charUser === activeChar && char.system === 'CoDChangeling'">
          <b-card class="b-cards">
            <b-row>
              <b-col cols="4">
                <h3>{{ char.genBlock.charName }}</h3>
                <p>
                  User:
                  <span class="italics">{{char.charUser}}</span>
                </p>
                <b-row>
                  <b-col cols="5">
                    <b-button class="cardButton" @click="viewCharacter(char)">View Character</b-button>
                  </b-col>
                  <b-col cols="5">
                    <b-button
                      :disabled="activeChar !== char.charUser"
                      class="cardButton"
                      @click="deleteCharacterModal(index)"
                    >Delete Character</b-button>
                  </b-col>
                  <b-col cols="5">
                    <b-button
                      :disabled="activeChar !== char.charUser"
                      class="cardButton"
                      @click="assignToGame(index)"
                    >Assign Character</b-button>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="4">
                <p>System: Changeling the Lost, 2nd edt.</p>
                <p>
                  Chronicle:
                  <span class="italics">{{char.genBlock.chronicle}}</span>
                </p>
                <p>
                  Seeming:
                  <span class="italics">{{char.genBlock.seeming}}</span>
                </p>
                <p>
                  Kith:
                  <span class="italics">{{char.genBlock.kith}}</span>
                </p>
                <p>
                  Court:
                  <span class="italics">{{char.genBlock.court}}</span>
                </p>
              </b-col>
              <b-col cols="4">
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
          <p>There are currently no Dungeons and Dragons 5e characters .</p>
        </b-col>
      </b-row>
    </div>
    <b-modal ref="deleteModal" hide-header hide-footer>
      <div>
        <b-row>
          <b-col>
            <p>
              Are you sure you want to delete this character (
              <span
                style="font-weight:bold"
              >{{ charName }}</span> )?
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="cardButton" @click="deleteCharacter(1)" :disabled="loading">
              {{ !loading ? "Yes" : "Loading..." }}
              <b-spinner label="Loading..." v-if="loading"></b-spinner>
            </b-button>
          </b-col>
          <b-col>
            <b-button class="cardButton" @click="deleteCharacter(2)">No</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <b-modal ref="assignModal" hide-header hide-footer>
      <div>
        <b-row>
          <b-col>
            <p>
              To which game would you like to assign this character (
              <span
                style="font-weight:bold"
              >{{ charName }}</span> )?
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <select id="gameAssign" v-model="gameSelection" class="form-control">
              <option
                v-for="(game, index) in gameList"
                :key="index"
                :value="game.gameID"
                style="color: black;"
                :class="!game.gamePlayers.includes(currUser) && game.gameGM !== currUser ? 'disOption' : ''"
                :disabled="!game.gamePlayers.includes(currUser) && game.gameGM !== currUser"
              >{{game.gameName}}</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="cardButton" @click="assignCharacter(1)" :disabled="loading">
              {{ !loading ? "Yes" : "Loading..." }}
              <b-spinner label="Loading..." v-if="loading"></b-spinner>
            </b-button>
          </b-col>
          <b-col>
            <b-button class="cardButton" @click="assignCharacter(2)">No</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  postUserCharUpdate,
  updateGameChar
} from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      delIndex: null,
      gameSelection: null,
      assignIndex: null,
      loading: false,
      charName: ""
    };
  },
  methods: {
    viewCharacter(character) {
      this.$store.commit("setActiveChar", character);
      this.$router.push({ path: "/view-user-character" });
    },
    deleteCharacterModal(index) {
      this.delIndex = index;
      this.charName = this.activeUserChars[this.delIndex].genBlock.charName;

      this.$refs["deleteModal"].show();
    },
    deleteCharacter(actionCode) {
      if (actionCode === 1) {
        this.loading = true;
        var localStore = JSON.parse(localStorage.getItem("UserData"));
        var tempChar = this.activeUserChars[this.delIndex];
        postUserCharUpdate(localStore, 2, tempChar).then(data => {
          this.activeUser.userChars = data;
          this.$forceUpdate();
          this.loading = false;
          this.$refs["deleteModal"].hide();
        });
      } else {
        this.$refs["deleteModal"].hide();
      }
      this.delIndex = null;
      this.charName = "";
    },
    assignToGame(index) {
      this.assignIndex = index;
      this.charName = this.activeUserChars[this.assignIndex].genBlock.charName;

      this.$refs["assignModal"].show();
    },
    assignCharacter(actionCode) {
      if (actionCode === 1) {
        this.loading = true;
        var tempChar = this.activeUserChars[this.assignIndex];
        updateGameChar(1, tempChar, this.gameSelection).then(() => {
          this.delIndex = this.assignIndex;
          this.deleteCharacter(1);

          var localStore = JSON.parse(localStorage.getItem("UserData"));
          postUserCharUpdate(localStore, 2, tempChar)
            .then(data => {
              this.activeUser.userChars = data;
            })
            .then(() => {
              this.$refs["assignModal"].hide();
              this.assignIndex = null;
              this.delIndex = null;
              this.gameSelection = null;
              this.loading = false;
              this.charName = "";
              this.$forceUpdate();
            });
        });
      } else if (actionCode === 2) {
        this.$refs["assignModal"].hide();
        this.assignIndex = null;
        this.charName = "";
        this.gameSelection = null;
        this.$forceUpdate();
      }
    }
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser",
      currUser: "getCurrUserName"
    }),
    activeChar() {
      return this.$store.getters.getCurrUserName;
    },
    activeUserChars() {
      var user = this.$store.getters.getActiveUser;
      return user.userChars;
    },
    gameList() {
      return this.$store.getters.getGames;
    }
  }
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
.disOption {
  color: rgb(92, 87, 87) !important;
}
</style>