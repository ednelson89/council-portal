<template>
  <div>
    <b-row>
      <b-col cols="12">
        <br />
        <h2>My Campaigns</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <p>
          Here you'll find a list of all the campaigns you're in. You can also
          create campaigns here.
        </p>
      </b-col>
      <b-col cols="4">
        <router-link tag="b-button" class="cardButton" to="/new-campaigns"
          >Create a Game</router-link
        >
      </b-col>
    </b-row>
    <hr style="width:90%" />
    <div>
      <b-row>
        <b-col>
          <b-tabs no-key-nav content-class="mt-3">
            <b-tab title="My Campaigns" active>
              <div>
                <b-row>
                  <b-col
                    xs="12"
                    md="6"
                    v-for="(game, index) in gameList.filter(
                      (record) =>
                        record.gameGM === this.currUser ||
                        record.gamePlayers.includes(this.currUser)
                    )"
                    :key="index"
                  >
                    <b-card
                      :title="game.gameName.substring(0, 30)"
                      style="margin:10px"
                      class="b-cards"
                    >
                      <b-card-text>
                        Description: {{ game.gameDesc[0].substring(0, 200) }}
                        <span v-if="game.gameDesc[0].length > 200">...</span>
                      </b-card-text>
                      <b-card-text>GM: {{ game.gameGM }}</b-card-text>
                      <b-card-text
                        >Date Created: {{ game.gameDate }}</b-card-text
                      >
                      <b-button @click="viewGame(game)" class="cardButton"
                        >Enter Game</b-button
                      >
                    </b-card>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
            <b-tab title="All Campaigns">
              <div>
                <b-row>
                  <b-col
                    xs="12"
                    md="6"
                    v-for="(game, index) in gameList"
                    :key="index"
                  >
                    <b-card
                      :title="game.gameName.substring(0, 30)"
                      style="margin:10px"
                      class="b-cards"
                    >
                      <b-card-text>
                        Description: {{ game.gameDesc[0].substring(0, 200) }}
                        <span v-if="game.gameDesc[0].length > 200">...</span>
                      </b-card-text>
                      <b-card-text>GM: {{ game.gameGM }}</b-card-text>
                      <b-card-text
                        >Date Created: {{ game.gameDate }}</b-card-text
                      >
                      <b-button @click="viewGame(game)" class="cardButton"
                        >Enter Game</b-button
                      >
                    </b-card>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getCampaigns } from '@/components/modules/utilities/dataFunctions.js';

export default {
  data() {
    return {};
  },
  methods: {
    viewGame(game) {
      this.$store.commit('setActiveGame', game);
      this.$router.push({ path: '/game-hub' });
    },
  },
  computed: {
    ...mapGetters({
      gameList: 'getGames',
      currUser: 'getCurrUserName',
    }),
  },
  beforeMount() {
    let gameList = [];
    getCampaigns()
      .then((response) => {
        response.forEach((entry) => {
          gameList.push(entry);
        });
      })
      .then(() => {
        this.$store.commit('setGames', gameList);
      });
  },
};
</script>

<style scoped></style>
