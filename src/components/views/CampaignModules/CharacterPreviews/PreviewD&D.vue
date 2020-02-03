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
                <b-row>
                  <b-col cols="4">
                    <b-button class="cardButton" @click="viewCharacter(char)">View Character</b-button>
                  </b-col>
                  <b-col cols="4">
                    <b-button
                      :disabled="activeChar !== char.charUser"
                      class="cardButton"
                      @click="deleteCharacterModal(index)"
                    >Delete Character</b-button>
                  </b-col>
                </b-row>
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
                  class="charImg b-cards"
                  :src="char.portraitSrc"
                  :alt="'Image of ' + char.genBlock.charName"
                />
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
    <b-modal ref="deleteModal" hide-header hide-footer>
      <div>
        <b-row>
          <b-col>
            <p>Are you sure you want to delete this character?</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button class="cardButton" @click="deleteCharacter(1)">Yes</b-button>
          </b-col>
          <b-col>
            <b-button class="cardButton" @click="deleteCharacter(2)">No</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delIndex: null
    };
  },
  methods: {
    viewCharacter(character) {
      this.$store.commit("setActiveChar", character);
      this.$router.push({ path: "/view-game-character" });
    },
    deleteCharacterModal(index) {
      this.$refs["deleteModal"].show();
      this.delIndex = index;
    },
    deleteCharacter(actionCode) {
      if (actionCode === 1) {
        this.activeGame.splice(this.delIndex, 0);
        this.$store.commit("deleteGameChar", this.delIndex);
        this.$refs["deleteModal"].hide();
        this.delIndex = null;
      } else if (actionCode === 2) {
        this.$refs["deleteModal"].hide();
        this.delIndex = null;
      }
    }
  },
  computed: {
    activeGame() {
      return this.$store.getters.getActiveGameCharList;
    },
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
  width: 200px;
  border-radius: 8px;
  border: 2px ridge #ddd;
  border-radius: 4px;
  padding: 5px;
}
</style>