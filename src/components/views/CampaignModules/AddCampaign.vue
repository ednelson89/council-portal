<template>
  <div>
    <b-row>
      <b-col cols="12">
        <br />
        <h2>Create a Campaign</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p>Here you can create campaigns. Select the system from the list below to get started.</p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/campaigns">Go Back</router-link>
      </b-col>
    </b-row>
    <hr style="width:90%" />
    <!-- Form Start -->
    <b-row>
      <b-col cols="6">
        <label>
          Select a System:
          <select
            id="gameCreateSystem"
            class="form-control"
            v-model="gameModel.gameType"
          >
            <option value selected>Select</option>
            <option
              v-for="system in systemTypes"
              :value="system.value"
              :key="system.id"
            >{{system.text}}</option>
          </select>
        </label>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <label>
          Game Name:
          <input
            type="text"
            placeholder="Input Game Name"
            v-model="gameModel.gameName"
            class="form-control"
          />
        </label>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <label>
          Game Summary:
          <b-form-textarea
            id="gameCreateSummaryTextArea"
            v-model="gameModel.gameDesc"
            placeholder="..."
            rows="3"
            max-rows="10"
          ></b-form-textarea>
        </label>
      </b-col>
    </b-row>
    <!-- Buttons -->
    <b-row>
      <b-col cols="6">
        <b-button class="cardButton" @click="addGame()" :disabled="!gameModel.gameName">Add Game</b-button>
      </b-col>
      <b-col cols="6">
        <router-link tag="b-button" class="cardButton" to="/campaigns" @click="clearModel">Cancel</router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemTypes: [
        { value: "D&D5e", text: "Dungeons & Dragons 5e" },
        { value: "D&D4e", text: "Dungeons & Dragons 4e" },
        { value: "D&D2e", text: "Dungeons & Dragons 2e" },
        { value: "CoDMortal", text: "Chronicles of Darkness, Mortals" },
        { value: "CoDHunter", text: "Chronicles of Darkness, Hunters" },
        { value: "CoDMage", text: "Chronicles of Darkness, Mage" },
        { value: "CoDVamp", text: "Chronicles of Darkness, Vampire" },
        { value: "CoDGeist", text: "Chronicles of Darkness, Geist" },
        { value: "CoDWere", text: "Chronicles of Darkness, Werewolves" }
      ],
      gameModel: {
        gameID: "",
        gameName: "",
        gameDesc: "",
        gameGM: "",
        gameDate: "",
        gameType: "",
        gameCharList: [{ charID: "" }],
        journalPosts: [
          {
            journalTitle: "",
            journalDate: "",
            journalContent: "",
            journalAuthor: ""
          }
        ]
      }
    };
  },
  methods: {
    getDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;

      return today;
    },
    addGame() {
      this.gameModel.gameDate = this.getDate();
      this.$store.commit("addGame", this.gameModel);
      this.$router.push({ path: "/campaigns" });
    },
    clearModel() {
      this.gameModel.gameType = "";
      this.gameModel.gameName = "";
      this.gameModel.gameDesc = "";
    }
  },
  mounted() {
    this.clearModel();
  }
};
</script>

<style scoped>
</style>