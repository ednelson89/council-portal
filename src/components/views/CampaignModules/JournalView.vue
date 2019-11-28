/* eslint-disable */

<template>
  <div>
    <b-row>
      <b-col cols="12">
        <h2>{{activeGame.gameName}} Journals</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p style="font-style: italic">Here you can read, add, and edit journal entries.</p>
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
      <b-row v-for="(journal, index) in journalList" :key="index">
        <b-col cols="12">
          <b-card class="b-cards">
            <h3>{{journal.journalTitle}}</h3>
            <p style="font-style:italic;">{{journal.journalDate}}</p>
            <p>
              {{journal.journalContent[0].substring(0,600) }}
              <span
                v-if="journal.journalContent[0].length > 600"
              >...</span>
            </p>

            <b-button
              @click="showJournalEntry(index)"
              class="cardButton cardOption"
            >Read Journal Entry</b-button>
            <b-button @click="editJournalModalOpen(index)" class="cardButton cardOption">Edit Entry</b-button>
            <b-button @click="deleteEntry(index)" class="cardButton cardOption">Delete Entry</b-button>
          </b-card>
        </b-col>
      </b-row>
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
          <b-button class="cardButton" @click="saveJournalEntry">Save Entry</b-button>
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
          <b-button class="cardButton" @click="closeEdit">Close</b-button>
        </b-col>
      </b-row>
    </b-modal>
    <!--Edit Modal -->
    <b-modal ref="showJournalModal" id="showJournalModal" hide-header hide-footer size="xl">
      <b-row>
        <b-col>
          <h3>{{activeJournal.journalTitle}}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p v-for="(para, index) in activeJournal.journalContent" :key="index">{{para}}</p>
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
      journalList: [],
      tempJournalContent: "",
      activeJournal: {}
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
    saveEditedContent() {
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
      var input = {
        journalEntry: this.activeJournal,
        activeGameID: this.activeGame.gameID,
        updateType: 2
      };
      this.$store.commit("updateJournal", input);

      this.$refs["editJournalModal"].hide();
      this.activeJournal = {};
      this.tempJournalContent = "";
      this.$forceUpdate();
    },
    closeShow() {
      this.$refs["showJournalModal"].hide();
      this.activeJournal = {};
    },
    saveJournalEntry() {
      var input = {
        journalEntry: this.activeJournal,
        activeGameID: this.activeGame.gameID,
        updateType: 1
      };
      this.$store.commit("updateJournal", input);

      this.$refs["addJournalModal"].hide();
      this.activeJournal = {};
      this.tempJournalContent = "";
      this.$forceUpdate();
    },
    addEntryModalOpen() {
      this.activeJournal = {
        journalID: this.generateID(),
        journalTitle: "",
        journalDate: this.getDate(),
        journalContent: [""],
        journalAuthor: ""
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
      var input = {
        journalEntry: this.journalList[index],
        activeGameID: this.activeGame.gameID,
        updateType: 3
      };
      this.$store.commit("updateJournal", input);
    }
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame"
    })
  },
  created() {
    this.activeGame.journalPosts.forEach(journal => {
      this.journalList.push(journal);
    });
  },
  mounted() {
    this.journalList = this.activeGame.journalPosts;
  }
};
</script>

<style scoped>
.cardOption {
  margin: 30px;
}
</style>
