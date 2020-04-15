<template>
  <div>
    <b-row>
      <b-col>
        <h2>Campaign Characters</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Here you can view and edit the characters in the game. To add a character, you must have joined the game or be the game's GM.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-button class="cardButton" @click="setAppRoute" :disabled="!inGame">Add a Character</b-button>
      </b-col>
    </b-row>
    <hr />
    <dn-d5e-preview v-if="activeGame.gameType === 'D&D5e'"></dn-d5e-preview>
    <CoDPreview v-if="activeGame.gameType === 'CoD'"></CoDPreview>
    <ChangelingPreview v-if="activeGame.gameType === 'CoDChangeling'"></ChangelingPreview>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DnD5ePreview from "@/components/views/CampaignModules/CharacterPreviews/PreviewD&D.vue";
import CoDPreview from "@/components/views/CampaignModules/CharacterPreviews/PreviewCoD.vue";
import ChangelingPreview from "@/components/views/CampaignModules/CharacterPreviews/PreviewCoDChangeling.vue";
import { getCampaigns } from "@/components/modules/utilities/dataFunctions.js";

export default {
  components: {
    DnD5ePreview,
    CoDPreview,
    ChangelingPreview
  },
  data() {
    return {};
  },
  methods: {
    setAppRoute() {
      this.$store.commit("setAppRoute", "Campaigns");
      this.$router.push({ path: "/add-game-character" });
    }
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame",
      activeChars: "getActiveGameCharList",
      currUser: "getCurrUserName"
    }),
    inGame() {
      return (
        this.activeGame.gamePlayers.includes(this.currUser) ||
        this.activeGame.gameGM === this.currUser
      );
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

<style>
</style>