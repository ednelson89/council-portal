<template>
  <div>
    <b-row>
      <b-col>
        <h3>Add a Character</h3>
        <p>Here you can add a character for the game.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-button class="cardButton" @click="$router.push({path: '/game-characters'})">Go Back</b-button>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <addDnD5e v-if="activeGame.gameType === 'D&D5e'"></addDnD5e>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import addDnD5e from "./addModules/AddDnD5e.vue";

export default {
  components: {
    addDnD5e
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      activeGame: "getActiveGame"
    })
  }
};
</script>

<style>
</style>