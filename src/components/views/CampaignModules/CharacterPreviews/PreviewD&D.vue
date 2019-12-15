<template>
  <div>
    <div v-if="activeGame.length > 0">
      <b-row v-for="(char, index) in activeGame" :key="index">
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
          <p>There are currently no characters in the campaign.</p>
        </b-col>
      </b-row>
    </div>
    <b-modal></b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewCharacter(character) {
      this.$store.commit("setActiveChar", character);
      this.$router.push({ path: "/view-character" });
    },
    deleteCharacter(index) {
      this.activeGame.splice(index, 0);
      this.$store.commit("deleteChar", index);
    }
  },
  computed: {
    activeGame() {
      return this.$store.getters.getActiveGameCharList;
    },
    activeChar() {
      return this.$store.getters.getCurrUser;
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