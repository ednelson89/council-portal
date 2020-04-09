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
        <b-button class="cardButton" @click="$router.go(-1)">Go Back</b-button>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <addDnD5e v-if="activeGame.gameType === 'D&D5e'"></addDnD5e>
        <addCoD v-if="activeGame.gameType === 'CoD'"></addCoD>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import addDnD5e from "./addModules/AddDnD5e.vue";
import addCoD from "./addModules/AddCoD.vue";

export default {
  components: {
    addDnD5e,
    addCoD
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