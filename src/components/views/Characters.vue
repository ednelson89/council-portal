<template>
  <div>
    <b-row>
      <b-col>
        <h2>My Characters</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>Here you can view, edit, and reassign all of your characters.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-button class="cardButton" @click="setAppRoute">Add a Character</b-button>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <h3>D&D 5e Characters:</h3>
      </b-col>
    </b-row>
    <DnD5ePreview v-if="hasDND5e"></DnD5ePreview>

    <b-row v-if="!hasChars">
      <b-col>
        <p>Sorry, there are no characters to view for this user.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DnD5ePreview from "@/components/views/UserCharacters/CharacterPreviews/PreviewD&D.vue";

export default {
  components: { DnD5ePreview },
  data() {
    return {};
  },
  methods: {
    setAppRoute() {
      this.$store.commit("setAppRoute", "Characters");
      this.$router.push({ path: "/add-user-character" });
    }
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser"
    }),
    hasChars() {
      return this.activeUser.userChars ? true : false;
    },
    hasDND5e() {
      if (this.activeUser.userChars) {
        return this.activeUser.userChars
          .flatMap(char => {
            return char.system;
          })
          .includes("D&D5e");
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>