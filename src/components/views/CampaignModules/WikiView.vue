/* eslint-disable */

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{activeGame.gameName}} Wiki</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p style="font-style: italic">Here you can read, add, and edit wiki entries.</p>
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
      <b-row v-for="(wiki, index) in wikiList" :key="index">
        <b-col cols="12">
          <b-card class="b-cards">
            <h3>{{wiki.wikiTitle}}</h3>
            <p style="font-style:italic;">Date Created: {{wiki.wikiDate}}</p>
            <p style="font-style:italic;">Author: {{wiki.wikiAuthor}}</p>
            <p>
              {{wiki.wikiContent[0].substring(0,600) }}
              <span
                v-if="wiki.wikiContent[0].length > 600"
              >...</span>
            </p>

            <b-button @click="showwikiEntry(index)" class="cardButton cardOption">Read Wiki Entry</b-button>
            <b-button @click="editWikiModalOpen(index)" class="cardButton cardOption">Edit Entry</b-button>
            <b-button @click="deleteEntry(index)" class="cardButton cardOption">Delete Entry</b-button>
          </b-card>
        </b-col>
      </b-row>
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
          <b-button class="cardButton" @click="savewikiEntry">Save Entry</b-button>
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
          <b-alert
            show
            style="color:#000"
          >*Note: Editing is done in real time to your journal, so there is no need to save.</b-alert>
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
              v-model="tempwikiContent"
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
          <b-button class="cardButton" @click="closeEdit">Close</b-button>
        </b-col>
      </b-row>
    </b-modal>
    <!--Read Modal -->
    <b-modal ref="showWikiModal" id="showWikiModal" hide-header hide-footer size="xl">
      <b-row>
        <b-col>
          <h3>{{activeWiki.wikiTitle}}</h3>
          <p style="font-style:italic;">Date Created: {{activeWiki.wikiDate}}</p>
          <p style="font-style:italic;">Author: {{activeWiki.wikiAuthor}}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p v-for="(para, index) in activeWiki.wikiContent" :key="index">{{para}}</p>
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

export default {
  data() {
    return {
      wikiList: [],
      tempwikiContent: "",
      activeWiki: {}
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
    saveEditedContent() {
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
      this.tempwikiContent = "";
    },
    closeEdit() {
      var input = {
        wikiEntry: this.activeWiki,
        activeGameID: this.activeGame.gameID,
        updateType: 2
      };
      this.$store.commit("updateWiki", input);

      this.$refs["editWikiModal"].hide();
      this.activeWiki = {};
      this.tempwikiContent = "";
      this.$forceUpdate();
    },
    closeShow() {
      this.$refs["showWikiModal"].hide();
      this.activeWiki = {};
    },
    savewikiEntry() {
      var input = {
        wikiEntry: this.activeWiki,
        activeGameID: this.activeGame.gameID,
        updateType: 1
      };
      this.$store.commit("updateWiki", input);

      this.$refs["addWikiModal"].hide();
      this.activeWiki = {};
      this.tempwikiContent = "";
      this.$forceUpdate();
    },
    addEntryModalOpen() {
      this.activeWiki = {
        wikiID: this.generateID(),
        wikiTitle: "",
        wikiDate: this.getDate(),
        wikiContent: [""],
        wikiAuthor: this.$store.getters.getCurrUser
      };
      this.$refs["addWikiModal"].show();
    },
    editWikiModalOpen(index) {
      this.$refs["editWikiModal"].show();
      this.activeWiki = this.wikiList[index];
      this.activeWiki.wikiContent.forEach(journal => {
        this.tempwikiContent += journal + "\n";
      });
    },
    showwikiEntry(index) {
      this.$refs["showWikiModal"].show();
      this.activeWiki = this.wikiList[index];
    },
    deleteEntry(index) {
      this.activeGame.wikiPosts.splice(index, 1);
    }
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame"
    })
  },
  created() {
    this.activeGame.wikiPosts.forEach(wiki => {
      this.wikiList.push(wiki);
    });
  },
  mounted() {
    this.wikiList = this.activeGame.wikiPosts;
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
</style>
