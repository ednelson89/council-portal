<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <h3>{{ char.genBlock.charName }}</h3>
        <p>
          User:
          <span class="italics">{{char.charUser}}</span>
        </p>
        <b-button
          @click="$router.back()"
          class="cardButton"
          style="margin-top:10px;"
        >Back to Characters</b-button>
      </b-col>
      <b-col cols="9">
        <b-card class="b-cards">
          <b-row>
            <b-col cols="3">
              <p>
                Race:
                <span class="italics">{{char.genBlock.charRace}}</span>
              </p>
              <p>
                Class:
                <span class="italics">{{char.genBlock.charClass}}</span>
              </p>
              <p>
                Class Level:
                <span class="italics">{{char.genBlock.charClassLvl}}</span>
              </p>
              <p>
                Background:
                <span class="italics">{{char.genBlock.charBackground}}</span>
              </p>
            </b-col>
            <b-col cols="3">
              <p>
                Character Level:
                <span class="italics">{{char.genBlock.charLvl}}</span>
              </p>
              <p>
                Subclass:
                <span class="italics">{{char.genBlock.charSub}}</span>
              </p>
              <p>
                Experience:
                <span class="italics">{{char.genBlock.charXP}}</span>
              </p>
              <p>
                Alignment:
                <span class="italics">{{char.genBlock.charAlign}}</span>
              </p>
            </b-col>
            <b-col cols>
              <img
                class="charImg"
                :src="char.portraitSrc"
                :alt="'Image of ' + char.genBlock.charName"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <!-- Stat Block -->
    <b-row>
      <b-col
        class="skillCols"
        cols="2"
        :style="{'background-image': 'url(' + require('./assets/StatCard.jpg') + ')'}"
      >
        <p class="skillLabel">Strength:</p>
        <p class="score">{{char.statsBlock.str}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.strMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.strSave}}</p>
      </b-col>
      <b-col class="skillCols" cols="2">
        <p class="skillLabel">Dexterity:</p>
        <p class="score">{{char.statsBlock.dex}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.dexMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.dexSave}}</p>
      </b-col>
      <b-col class="skillCols" cols="2">
        <p class="skillLabel">Constitution:</p>
        <p class="score">{{char.statsBlock.con}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.conMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.conSave}}</p>
      </b-col>
      <b-col class="skillCols" cols="2">
        <p class="skillLabel">Intelligence:</p>
        <p class="score">{{char.statsBlock.int}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.intMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.intSave}}</p>
      </b-col>
      <b-col class="skillCols" cols="2">
        <p class="skillLabel">Wisdom:</p>
        <p class="score">{{char.statsBlock.wis}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.wisMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.wisSave}}</p>
      </b-col>
      <b-col class="skillCols" cols="2">
        <p class="skillLabel">Charisma:</p>
        <p class="score">{{char.statsBlock.cha}}</p>
        <p class="skillLabel">Mod:</p>
        <p class="score">{{char.statsBlock.chaMod}}</p>
        <p class="skillLabel">Save:</p>
        <p class="score">{{char.statsBlock.chaSave}}</p>
      </b-col>
    </b-row>
    <hr />
    <!-- Skills Block -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    }
  }
};
</script>

<style scoped>
.charImg {
  width: 150px;
  height: 150px;
}
.skillLabel {
  text-align: center !important;
  font-weight: bold;
}
.skillCols {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.score {
  text-align: center !important;
}
</style>