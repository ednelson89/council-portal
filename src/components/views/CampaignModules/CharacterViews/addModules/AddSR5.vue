<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col xs="12" md="3">
        <label>
          Character Name:
          <input v-model="tempChar.genBlock.charName" class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{ tempChar.charUser }}</span>
        </p>
        <hr />
        <b-button
          @click="addNewChar"
          class="cardButton"
          style="margin-top:10px;"
          :disabled="loading"
        >
          {{ !loading ? 'Save New Character' : 'Loading...' }}
          <b-spinner label="Loading..." v-if="loading"></b-spinner>
        </b-button>
      </b-col>
      <b-col xs="12" md="9">
        <b-card class="b-cards">
          <b-row>
            <b-col xs="12" md="3">
              <!-- general content -->
              <label>
                Age:
                <input class="form-control" v-model="tempChar.genBlock.age" />
              </label>
              <label>
                Ethnicity:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.ethnicity"
                />
              </label>
              <label>
                Metatype:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.metatype"
                />
              </label>
              <label>
                Sex:
                <input class="form-control" v-model="tempChar.genBlock.sex" />
              </label>
              <label>
                Height:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.height"
                />
              </label>
              <label>
                Weight:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.weight"
                />
              </label>
            </b-col>
            <b-col xs="12" md="3">
              <label>
                Street Cred:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.streetCred"
                />
              </label>
              <label>
                Notoriety:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.notoriety"
                />
              </label>
              <label>
                Public Awareness:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.publicAwareness"
                />
              </label>
              <label>
                Karma:
                <input class="form-control" v-model="tempChar.genBlock.karma" />
              </label>
              <label>
                Total Karma:
                <input
                  class="form-control"
                  v-model="tempChar.genBlock.totalKarma"
                />
              </label>
              <label>
                Miscellanious:
                <input class="form-control" v-model="tempChar.genBlock.misc" />
              </label>
            </b-col>
            <b-col cols class="skillCols">
              <img
                class="charImg"
                style="margin: 25px 0px;"
                :src="tempChar.portraitSrc"
                :alt="'Image of ' + tempChar.genBlock.charName"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6"></b-col>
            <b-col>
              <label>
                Image Source URL:
                <input v-model="tempChar.portraitSrc" class="form-control" />
              </label>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-tabs no-key-nav content-class="mt-3"> </b-tabs>
  </div>
</template>

<script>
import { charSR5 } from '@/components/modules/CharacterObjects/characterSR5.js';
import { mapGetters } from 'vuex';
import { updateGameChar } from '@/components/modules/utilities/dataFunctions.js';

export default {
  data() {
    return {
      loading: false,
      tempChar: charSR5(),
      tempNotes: '',
      tempBackstory: '',
      // Attack Table
      attack: {},
      attacksTableFields: [],
      // Equipment Table
      tempEquipment: {},
      equipmentTableFields: [],
    };
  },
  computed: {
    ...mapGetters({
      appRoute: 'getAppRoute',
    }),
    activeGame() {
      return this.$store.getters.getActiveGame;
    },
    activeUser() {
      return this.$store.getters.getCurrUserName;
    },
  },
  methods: {
    saveBackstory() {
      this.tempChar.backstory = [];
      var stringArray = document
        .getElementById('charBackstoryList')
        .value.split('\n');
      stringArray.forEach((element) => {
        this.tempChar.backstory.push(element);
      });
    },
    saveNotes() {
      this.tempChar.notes = [];
      var stringArray = document
        .getElementById('charNotesList')
        .value.split('\n');
      stringArray.forEach((element) => {
        this.tempChar.notes.push(element);
      });
    },
    // Navigation Method
    addNewChar() {
      this.loading = true;
      this.tempChar.charUser = this.activeUser;
      updateGameChar(1, this.tempChar, this.activeGame.gameID).then(() => {
        this.loading = false;
        this.$router.push({ path: '/game-characters' });
      });
    },
    // The following are the methods for interacting with b-tables
  },
};
</script>

<style scoped>
label {
  text-align: left;
  display: inline-block !important;
}
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
}
.charImg {
  width: 175px;
}
.sectionLabel {
  text-align: center !important;
  font-weight: bold;
  text-decoration: underline;
}
.skillLabel {
  text-align: center !important;
  font-weight: bold;
}
.skillCols {
  background-color: #fff;
  background-size: 100% 100%;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.score {
  text-align: center !important;
}
</style>
