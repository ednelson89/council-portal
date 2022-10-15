<template>
  <div id="app">
    <v-app
      :style="{
        'background-image':
          'url(' + require('./assets/background_texture.png') + ')',
      }"
    >
      <navigation></navigation>
      <br /><br />
      <br />
      <b-container fluid>
        <b-row align="center" justify="start">
          <b-col
            :md="showSidebar ? 10 : 12"
            xs="12"
            style="padding-top: 15px; padding-bottom: 15px;"
          >
            <div class="main-content" id="main-content">
              <router-view></router-view>
            </div>
          </b-col>
          <b-col xs="12" offset-xs="1" md="2" v-if="showSidebar">
            <div class="side-content">
              <resourceMin></resourceMin>
              <charList></charList>
              <gameButtons></gameButtons>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </v-app>
  </div>
</template>

<script>
import navigation from '@/components/common/Navigation.vue';
import resourceMin from '@/components/views/SideBar/ResourceMin.vue';
import charList from '@/components/views/SideBar/CharacterList.vue';
import gameButtons from '@/components/views/SideBar/GameTableFunctions.vue';
import {
  getCampaigns,
  getUserChars,
} from '@/components/modules/utilities/dataFunctions.js';
import { mapGetters } from 'vuex';

export default {
  components: { navigation, resourceMin, charList, gameButtons },
  data() {
    return {};
  },
  methods: {
    getCampaigns,
    checkStore() {
      try {
        var store = JSON.parse(localStorage.getItem('UserData'));
        var expires = new Date(store.expires);
        var now = new Date();

        if (store.user && now <= expires) {
          return true;
        } else if (store.user && now > expires) {
          localStorage.removeItem('UserData');
          return false;
        } else if (!store.user) {
          return false;
        }
      } catch {
        return false;
      }
    },
    getUserStore() {
      var store = JSON.parse(localStorage.getItem('UserData'));
      return store.user;
    },
  },
  computed: {
    ...mapGetters({
      activeUser: 'getActiveUser',
    }),
    showSidebar() {
      return (
        this.$route.path === '/game-hub' ||
        this.$route.path === '/game-characters' ||
        this.$route.path === '/add-game-character' ||
        this.$route.path === '/edit-game-character' ||
        this.$route.path === '/view-game-character' ||
        this.$route.path === '/game-journal-view' ||
        this.$route.path === '/game-wiki-view' ||
        this.$route.path === '/game-calendar' ||
        this.$route.path === '/game-table'
      );
    },
  },
  created() {
    if (this.checkStore()) {
      // Get Username
      const userData = this.getUserStore();

      // Get GamesList
      var gameList = [];
      this.getCampaigns()
        .then((response) => {
          response.forEach((entry) => {
            gameList.push(entry);
          });
        })
        .then(() => {
          this.$store.commit('setGames', gameList);
        });

      this.$store.commit('setCurrUserName', userData);

      // Get user Characters
      var localStore = JSON.parse(localStorage.getItem('UserData'));
      getUserChars(localStore).then((data) => {
        this.activeUser.userChars = data;

        if (this.$route.path !== '/') {
          this.$router.push({ path: '/' });
        }
      });
    } else {
      localStorage.removeItem('UserData');
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/' });
      }
    }
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d2935;
}
</style>
<style src="./css/main.css"></style>
