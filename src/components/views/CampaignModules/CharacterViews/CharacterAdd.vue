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
        <addChangeling
          v-if="activeGame.gameType === 'CoDChangeling'"
        ></addChangeling>
        <addSR5 v-if="activeGame.gameType === 'SR5'"></addSR5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import addDnD5e from './addModules/AddDnD5e.vue';
import addCoD from './addModules/AddCoD.vue';
import addChangeling from './addModules/AddCoDChangeling.vue';
import addSR5 from './addModules/AddSR5.vue';

export default {
  components: {
    addDnD5e,
    addCoD,
    addChangeling,
    addSR5,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      activeGame: 'getActiveGame',
    }),
  },
};
</script>

<style></style>
