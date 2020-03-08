<template>
  <div>
    <b-row>
      <b-col>
        <h2>My Characters</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          Here you can view, edit, and reassign all of your characters. You can only reassign characters to games which you
          have joined or are the GM for.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-button class="cardButton" @click="setAppRoute">Add a Character</b-button>
      </b-col>
    </b-row>
    <hr />
    <b-tabs>
      <b-tab :title="'Dungeons & Dragons 5e'">
        <DnD5ePreview v-if="hasDND5e"></DnD5ePreview>
        <b-row v-if="!hasDND5e">
          <b-col>
            <p>Sorry, there are no characters to view for this system.</p>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Chronicles of Darkness">
        <b-row v-if="!hasCoD">
          <b-col>
            <p>Sorry, there are no characters to view for this system.</p>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUserChars } from "@/components/modules/utilities/dataFunctions.js";
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
    },
    hasCoD() {
      if (this.activeUser.userChars) {
        return this.activeUser.userChars
          .flatMap(char => {
            return char.system;
          })
          .includes("CoD");
      } else {
        return false;
      }
    }
  },
  beforeMount() {
    var localStore = JSON.parse(localStorage.getItem("UserData"));
    getUserChars(localStore)
      .then(data => {
        this.$store.commit("setUserChars", data);
      })
      .then(() => {
        this.$forceUpdate();
      });
  }
};
</script>

<style>
</style>