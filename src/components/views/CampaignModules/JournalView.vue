/* eslint-disable */

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{ activeGame.gameName }} Journals</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p style="font-style: italic">
          Here you can read, add, and edit journal entries. To add an image or link, simply copy and paste the url
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
        <b-button class="cardButton" @click="addEntryModalOpen">Add a Journal Entry</b-button>
      </b-col>
    </b-row>
    <div v-if="journalList.length >= 1">
      <draggable
        v-model="journalList"
        :disabled="activeGame.gameGM !== currUser"
        group="journals"
        @start="drag=true"
        @end="drag=false"
        ghost-class="ghost"
      >
        <b-row v-for="(journal, index) in journalList" :key="index">
          <b-col cols="12">
            <b-card class="b-cards">
              <h3>{{ journal.journalTitle }}</h3>
              <p style="font-style:italic;">Date Created: {{ journal.journalDate }}</p>
              <p style="font-style:italic;">Author: {{ journal.journalAuthor }}</p>
              <p>
                {{ journal.journalContent[0].substring(0, 600) }}
                <span
                  v-if="journal.journalContent[0].length > 600"
                >...</span>
              </p>

              <b-button
                @click="showJournalEntry(index)"
                class="cardButton cardOption"
              >Read Journal Entry</b-button>
              <b-button
                @click="editJournalModalOpen(index)"
                class="cardButton cardOption"
              >Edit Entry</b-button>
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
      ref="addJournalModal"
      id="addJournalModal"
      hide-header
      hide-footer
      no-close-on-backdrop
      size="xl"
    >
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Title:
            <input class="form-control" type="text" v-model="activeJournal.journalTitle" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <label>
            Text:
            <b-form-textarea
              class="form-control"
              id="journalTextArea"
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
          <b-button class="cardButton" @click="saveJournalEntry" :disabled="loading">
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
      ref="editJournalModal"
      id="editJournalModal"
      hide-header
      hide-footer
      no-close-on-backdrop
      size="xl"
    >
      <b-row>
        <b-col xs="12" md="6">
          <label>
            Title:
            <input class="form-control" type="text" v-model="activeJournal.journalTitle" />
          </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <label>
            Text:
            <b-form-textarea
              class="form-control"
              id="journalTextArea"
              v-model="tempJournalContent"
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
    <b-modal ref="showJournalModal" id="showJournalModal" hide-header hide-footer size="xl">
      <b-row>
        <b-col>
          <h3>{{ activeJournal.journalTitle }}</h3>
          <p style="font-style:italic;">Date Created: {{ activeJournal.journalDate }}</p>
          <p style="font-style:italic;">Author: {{ activeJournal.journalAuthor }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-for="(para, index) in activeJournal.journalContent" :key="index">
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
  updateJournals
} from "@/components/modules/utilities/dataFunctions.js";
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      tempJournalContent: "",
      activeJournal: {},
      loading: false
    };
  },
  methods: {
    toArray() {
      this.activeJournal.journalContent = [];
      var stringArray = document
        .getElementById("journalTextArea")
        .value.split("\n");
      stringArray.forEach(element => {
        this.activeJournal.journalContent.push(element);
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
      this.$refs["addJournalModal"].hide();
      this.activeJournal = {};
      this.tempJournalContent = "";
    },
    closeEdit() {
      this.loading = true;
      updateJournals(3, this.activeJournal, this.activeGame.gameID)
        .then(() => {
          return this.updateGame();
        })
        .then(() => {
          this.$refs["editJournalModal"].hide();
          this.activeJournal = {};
          this.tempJournalContent = "";
          this.loading = false;
          this.$forceUpdate();
        });
    },
    closeShow() {
      this.$refs["showJournalModal"].hide();
      this.activeJournal = {};
    },
    saveJournalEntry() {
      this.loading = true;
      updateJournals(1, this.activeJournal, this.activeGame.gameID)
        .then(() => {
          return this.updateGame();
        })
        .then(() => {
          this.$refs["addJournalModal"].hide();
          this.activeJournal = {};
          this.tempJournalContent = "";
          this.loading = false;
          this.$forceUpdate();
        });
    },
    addEntryModalOpen() {
      this.activeJournal = {
        journalID: this.generateID(),
        journalTitle: "",
        journalDate: this.getDate(),
        journalContent: [""],
        journalAuthor: this.$store.getters.getCurrUserName
      };
      this.$refs["addJournalModal"].show();
    },
    editJournalModalOpen(index) {
      this.$refs["editJournalModal"].show();
      this.activeJournal = this.journalList[index];
      this.activeJournal.journalContent.forEach(journal => {
        this.tempJournalContent += journal + "\n";
      });
    },
    showJournalEntry(index) {
      this.$refs["showJournalModal"].show();
      this.activeJournal = this.journalList[index];
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
          updateJournals(2, this.journalList[index], this.activeGame.gameID)
            .then(() => {
              return this.updateGame();
            })
            .then(() => {
              this.loading = false;
              this.activeJournal = {};
              this.tempJournalContent = "";
              this.$forceUpdate();
            });
        }
      });
    },
    updateGame() {
      let gameList = [];
      return getCampaigns()
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
          game.journalPosts = game.journalPosts.reverse();
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
    journalList: {
      get() {
        return this.activeGame.journalPosts;
      },
      set(value) {
        this.$store.commit("updateJournals", value);
        this.loading = true;
        updateJournals(4, this.journalList, this.activeGame.gameID)
          .then(() => {
            return this.updateGame();
          })
          .then(() => {
            this.activeJournal = {};
            this.tempJournalContent = "";
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
