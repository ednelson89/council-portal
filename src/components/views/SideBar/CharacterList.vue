<template>
  <div>
    <b-row>
      <b-col>
        <div v-if="inGame">
          <div>
            <p>Players:</p>
            <ul>
              <li v-for="(player, index) in activeGame.gamePlayers" :key="index">{{player}}</li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import dnd5e from "@/components/modules/Resources/resourcesD&D.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dnd5e
    };
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame"
    }),
    activeGameType() {
      return this.$store.getters.getGameType;
    },
    inGame() {
      return (
        this.$route.path === "/game-hub" ||
        this.$route.path === "/game-characters" ||
        this.$route.path === "/add-game-character" ||
        this.$route.path === "/edit-game-character" ||
        this.$route.path === "/view-game-character" ||
        this.$route.path === "/game-journal-view" ||
        this.$route.path === "/game-wiki-view" ||
        this.$route.path === "/game-calendar"
      );
    }
  }
};
</script>

<style scoped>
li {
  text-align: left !important;
}
</style>