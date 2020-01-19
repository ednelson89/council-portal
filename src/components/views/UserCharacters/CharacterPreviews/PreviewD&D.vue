<template>
  <div>
    <div v-if="activeUserChars.length > 0">
      <b-row v-for="(char, index) in activeUserChars" :key="index">
        <b-col>
          <b-card class="b-cards">
            <b-row>
              <b-col cols="4">
                <h3>{{ char.genBlock.charName }}</h3>
                <p>
                  User:
                  <span class="italics">{{char.charUser}}</span>
                </p>
              </b-col>
              <b-col cols="4">
                <p>
                  Race:
                  <span class="italics">{{char.genBlock.charRace}}</span>
                </p>
                <p>
                  Class:
                  <span class="italics">{{char.genBlock.charClass}}</span>
                </p>
                <p>
                  Level:
                  <span class="italics">{{char.genBlock.charLvl}}</span>
                </p>
              </b-col>
              <b-col cols="4">
                <img
                  class="charImg"
                  :src="char.portraitSrc"
                  :alt="'Image of ' + char.genBlock.charName"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3">
                <b-button class="cardButton" @click="viewCharacter(char)">View Character</b-button>
              </b-col>
              <b-col cols="3">
                <b-button
                  :disabled="activeChar !== char.charUser"
                  class="cardButton"
                  @click="deleteCharacter(index)"
                >Delete Character</b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row>
        <b-col>
          <p>There are currently no Dungeons and Dragons 5e characters .</p>
        </b-col>
      </b-row>
    </div>
    <b-modal></b-modal>
  </div>
</template>

<script>
import { postUserCharUpdate } from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    viewCharacter(character) {
      this.$store.commit("setActiveChar", character);
      this.$router.push({ path: "/view-user-character" });
    },
    deleteCharacter(index) {
      var localStore = JSON.parse(localStorage.getItem("UserData"));
      var tempChar = this.activeUserChars[index];
      postUserCharUpdate(localStore, 2, tempChar).then(data => {
        this.activeUser.userChars = data;
        this.$forceUpdate();
      });
      // this.activeUserChars.splice(index, 0);
      // this.$store.commit("deleteUserChar", index);
    }
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser"
    }),
    activeChar() {
      return this.$store.getters.getCurrUserName;
    },
    activeUserChars() {
      var user = this.$store.getters.getActiveUser;
      return user.userChars;
    }
  }
};
</script>

<style scoped>
.charImg {
  width: 100px;
  height: 100px;
}
</style>