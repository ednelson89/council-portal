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
    <b-row>
      <b-col cols="6">
        <label>
          Select a System:
          <select id="gameCreateSystem" class="form-control" v-model="pickedSystem">
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
    <hr />
    <b-row>
      <b-col>
        <addDnD5e v-if="pickedSystem === 'D&D5e'"></addDnD5e>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import addDnD5e from "./addModules/AddDnD5e.vue";

export default {
  components: {
    addDnD5e
  },
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
      pickedSystem: ""
    };
  },
  computed: {}
};
</script>

<style>
</style>