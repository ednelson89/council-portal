/* eslint-disable */

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{ activeGame.gameName }} Wiki</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p style="font-style: italic">
          Here you can read, add, and edit wiki entries. To add an image or link, simply copy and paste the url
          <span
            style="font-weight: bold;"
          >on it's own line</span> ,
          preceeded by either 'img-' or 'link-'.
        </p>
        <p
          style="font-style: italic; font-weight:bold;"
        >(ex. 'img-http://www.imagesource.com/imageidnumber')</p>
        <p
          style="font-style: italic; font-weight:bold;"
        >(ex. 'link-http://www.link-source.com/linkID')</p>
        <p
          style="font-style: italic"
          v-if="activeGame.gameGM === currUser"
        >If you are the game master, you can also rearrange the entries by dragging and dropping them with your mouse.</p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/game-hub">Back to Game</router-link>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col xs="12" md="6" offset-md="6">
        <b-button class="cardButton" @click="addEntryModalOpen">Add a Wiki Entry</b-button>
      </b-col>
    </b-row>
    <div v-if="wikiList.length >= 1">
      <draggable
        v-model="wikiList"
        :disabled="activeGame.gameGM !== currUser"
        group="wikis"
        @start="drag=true"
        @end="drag=false"
        ghost-class="ghost"
      >
        <b-row v-for="(wiki, index) in wikiList" :key="index">
          <b-col cols="12">
            <b-card class="b-cards">
              <h3>{{ wiki.wikiTitle }}</h3>
              <p style="font-style:italic;">Date Created: {{ wiki.wikiDate }}</p>
              <p style="font-style:italic;">Author: {{ wiki.wikiAuthor }}</p>
              <p>
                {{ wiki.wikiContent[0].substring(0, 600) }}
                <span
                  v-if="wiki.wikiContent[0].length > 600"
                >...</span>
              </p>

              <b-button @click="showwikiEntry(index)" class="cardButton cardOption">Read Wiki Entry</b-button>
              <b-button @click="editWikiModalOpen(index)" class="cardButton cardOption">Edit Entry</b-button>
              <b-button
                @click="deleteEntry(index)"
                class="cardButton cardOption"
                :disabled="loading"
              >
                {{ !loading ? "Delete Entry" : "Loading..." }}
                <b-spinner label="Loading..." v-if="loading"></b-spinner>
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </draggable>
    </div>
    <!--Add Modal -->
    <b-modal
      ref="addWikiModal"
      id="addWikiModal"
      hide-header
      hide-footer
      no-close-on-backdrop
      size="xl"
    >
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Title:
            <input class="form-control" type="text" v-model="activeWiki.wikiTitle" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <label>
            Text:
            <b-form-textarea
              class="form-control"
              id="wikiTextArea"
              @change="toArray"
              placeholder="..."
              rows="3"
              max-rows="10"
            ></b-form-textarea>
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" md="6">
          <b-button class="cardButton" @click="savewikiEntry" :disabled="loading">
            {{ !loading ? "Save New Entry" : "Loading..." }}
            <b-spinner label="Loading..." v-if="loading"></b-spinner>
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" md="6">
          <b-button class="cardButton" @click="cancelAdd">Cancel</b-button>
        </b-col>
      </b-row>
    </b-modal>
    <!--Edit Modal -->
    <b-modal
      ref="editWikiModal"
      id="editWikiModal"
      hide-header
      hide-footer
      no-close-on-backdrop
      size="xl"
    >
      <b-row>
        <b-col>
          <b-alert show style="color:#000">
            *Note: Editing is done in real time to your journal, so there is no
            need to save.
          </b-alert>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Title:
            <input class="form-control" type="text" v-model="activeWiki.wikiTitle" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <label>
            Text:
            <b-form-textarea
              class="form-control"
              id="wikiTextArea"
              v-model="tempWikiContent"
              @input="toArray"
              placeholder="..."
              rows="3"
              max-rows="10"
            ></b-form-textarea>
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button class="cardButton" @click="closeEdit" :disabled="loading">
            {{ !loading ? "Close" : "Loading..." }}
            <b-spinner label="Loading..." v-if="loading"></b-spinner>
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
    <!--Read Modal -->
    <b-modal ref="showWikiModal" id="showWikiModal" hide-header hide-footer size="xl">
      <b-row>
        <b-col>
          <h3>{{ activeWiki.wikiTitle }}</h3>
          <p style="font-style:italic;">Date Created: {{ activeWiki.wikiDate }}</p>
          <p style="font-style:italic;">Author: {{ activeWiki.wikiAuthor }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-for="(para, index) in activeWiki.wikiContent" :key="index">
            <br v-if="!para" />
            <p v-else-if="para.includes('img-')">
              <img :src="para.substring(4)" style="width: 50% " />
            </p>
            <a
              v-else-if="para.includes('link-')"
              :href="para.substring(5)"
              style="width: 50% "
              target="_blank"
            >{{para.substring(5)}}</a>
            <p v-else>{{para}}</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button class="cardButton" @click="closeShow">Close</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getCampaigns,
  updateWikis
} from "@/components/modules/utilities/dataFunctions.js";
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      tempWikiContent: "",
      activeWiki: {},
      loading: false
    };
  },
  methods: {
    toArray() {
      this.activeWiki.wikiContent = [];
      var stringArray = document
        .getElementById("wikiTextArea")
        .value.split("\n");
      stringArray.forEach(element => {
        this.activeWiki.wikiContent.push(element);
      });
    },
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
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;

      return today;
    },
    cancelAdd() {
      this.$refs["addWikiModal"].hide();
      this.activeWiki = {};
      this.tempWikiContent = "";
    },
    closeEdit() {
      this.loading = true;
      updateWikis(3, this.activeWiki, this.activeGame.gameID)
        .then(() => {
          this.updateGame();
        })
        .then(() => {
          this.$refs["editWikiModal"].hide();
          this.activeWiki = {};
          this.tempWikiContent = "";
          this.loading = false;
          this.$forceUpdate();
        });
    },
    closeShow() {
      this.$refs["showWikiModal"].hide();
      this.activeWiki = {};
    },
    savewikiEntry() {
      this.loading = true;
      updateWikis(1, this.activeWiki, this.activeGame.gameID)
        .then(() => {
          this.updateGame();
        })
        .then(() => {
          this.$refs["addWikiModal"].hide();
          this.activeWiki = {};
          this.tempWikiContent = "";
          this.loading = false;
          this.$forceUpdate();
        });
    },
    addEntryModalOpen() {
      this.activeWiki = {
        wikiID: this.generateID(),
        wikiTitle: "",
        wikiDate: this.getDate(),
        wikiContent: [""],
        wikiAuthor: this.$store.getters.getCurrUserName
      };
      this.$refs["addWikiModal"].show();
    },
    editWikiModalOpen(index) {
      this.$refs["editWikiModal"].show();
      this.activeWiki = this.wikiList[index];
      this.activeWiki.wikiContent.forEach(journal => {
        this.tempWikiContent += journal + "\n";
      });
    },
    showwikiEntry(index) {
      this.$refs["showWikiModal"].show();
      this.activeWiki = this.wikiList[index];
    },
    deleteEntry(index) {
      this.$swal({
        text: "Are you sure you wish to delete this entry?",
        confirmButtonText: "Delete",
        icon: "info",
        buttons: true,
        dangerMode: true
      }).then(result => {
        if (result) {
          this.loading = true;
          updateWikis(2, this.wikiList[index], this.activeGame.gameID)
            .then(() => {
              this.updateGame();
            })
            .then(() => {
              this.loading = false;
              this.activeWiki = {};
              this.tempWikiContent = "";
              this.$forceUpdate();
            });
        }
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
          game.wikiPosts = game.wikiPosts.reverse();
          this.$store.commit("setActiveGame", game);
          this.$store.commit("setGames", gameList);
          this.$forceUpdate();
        });
    }
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame",
      currUser: "getCurrUserName"
    }),
    wikiList: {
      get() {
        return this.activeGame.wikiPosts;
      },
      set(value) {
        this.$store.commit("updateWiki", value);
        this.loading = true;
        updateWikis(4, this.wikiList, this.activeGame.gameID)
          .then(() => {
            this.updateGame();
          })
          .then(() => {
            this.activeWiki = {};
            this.tempWikiContent = "";
            this.loading = false;
            this.$forceUpdate();
          });
      }
    }
  },
  beforeMount() {
    this.updateGame();
  }
};
</script>

<style scoped>
.cardOption {
  margin: 30px;
}
.b-cards {
  margin: 0 10px;
}
.cardButton {
  margin: 10px 10px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
