<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-show="drawer"
      v-model="drawer"
      fixed
      bottom
      temporary
    >
      <v-list-item v-if="currentUser">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ currentUser }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        v-if="!currentUser"
        @click="$router.push({ path: '/sign-in' })"
      >
        <v-list-item-icon>
          <v-icon>{{ mdiAccount }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Sign In</v-list-item-content>
      </v-list-item>
      <v-list-item v-if="currentUser" link @click="logout">
        <v-list-item-icon>
          <v-icon>{{ mdiLogout }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Log Out</v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        link
        @click="$router.push({ path: '/create-account' })"
        v-if="currentUser !== '' && currentUser !== 'testUser1'"
      >
        <v-list-item-icon>
          <v-icon>{{ mdiAccountPlusOutline }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Create User Account</v-list-item-content>
      </v-list-item>
      <v-list-item link @click="$router.push({ path: '/' })">
        <v-list-item-icon>
          <v-icon>{{ mdiHomeCity }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Home</v-list-item-content>
      </v-list-item>
      <v-list dense v-if="currentUser">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="$router.push({ path: item.path })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <div v-if="showSubMenu">
        <v-list-item>
          <v-list-item-title style="font-weight:bold"
            >Game Links</v-list-item-title
          >
        </v-list-item>

        <v-list dense>
          <v-list-item
            v-for="item in gameItems"
            :key="item.title"
            link
            @click="$router.push({ path: item.path })"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { postSignInOut } from '@/components/modules/utilities/postSignInOut.js';
import {
  mdiAccount,
  mdiLogout,
  mdiAccountPlusOutline,
  mdiHomeCity,
  mdiSwordCross,
  mdiChessRook,
  mdiNotebookMultiple,
  mdiShieldOutline,
  mdiSword,
  mdiFeather,
  mdiLibraryBooks,
  mdiDiceD20Outline,
} from '@mdi/js';

export default {
  data() {
    return {
      mdiAccountPlusOutline,
      mdiHomeCity,
      mdiAccount,
      mdiLogout,
      drawer: true,
      items: [
        { title: 'Campaigns', icon: mdiChessRook, path: '/campaigns' },
        {
          title: 'Characters',
          icon: mdiSwordCross,
          path: '/characters',
        },
        {
          title: 'Game Resources',
          icon: mdiNotebookMultiple,
          path: '/Resources',
        },
      ],
      gameItems: [
        {
          title: 'Game Hub',
          icon: mdiShieldOutline,
          path: '/game-hub',
        },
        {
          title: 'Characters',
          icon: mdiSword,
          path: '/game-characters',
        },
        { title: 'Journal', icon: mdiFeather, path: '/game-journal-view' },
        { title: 'Wiki', icon: mdiLibraryBooks, path: '/game-wiki-view' },
        {
          title: 'Game Table',
          icon: mdiDiceD20Outline,
          path: '/game-table',
        },
      ],
      mini: true,
    };
  },
  methods: {
    postSignInOut,
    logout() {
      var input = '';

      // sign out from the 'server'
      var store = JSON.parse(localStorage.getItem('UserData'));
      var certs = { username: store.user, password: store.uid };
      this.postSignInOut(certs, 2);

      // clear local certs
      localStorage.removeItem('UserData');
      this.$store.commit('setCurrUserName', input);
      this.$store.commit('clearActiveUser');

      // reroute
      if (this.$route.path !== '/') {
        this.$router.push({ path: '/' });
      }
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrUserName;
    },
    showSubMenu() {
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
};
</script>

<style scoped>
v-navigation-drawer {
  height: 100vh;
}
</style>
