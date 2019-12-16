<template>
  <div>
    <b-row>
      <b-col>
        <h2>Campaign Characters</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Here you can view and edit the characters in the game.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-button class="cardButton" @click="$router.push({path: '/add-character'})">Add a Character</b-button>
      </b-col>
    </b-row>
    <hr />
    <dn-d5e-preview v-if="activeGame.gameType === 'D&D5e'"></dn-d5e-preview>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DnD5ePreview from "./CharacterPreviews/PreviewD&D.vue";

export default {
  components: {
    DnD5ePreview
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