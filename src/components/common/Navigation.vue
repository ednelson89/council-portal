<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    :height="'100vh'"
    :mini-variant.sync="mini"
    permanent
    expand-on-hover
  >
    <v-list-item v-if="currentUser">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>{{currentUser}}</v-list-item-title>
    </v-list-item>
    <v-list-item v-if="!currentUser" @click="$router.push({path:'/sign-in'})">
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-content>Sign In</v-list-item-content>
    </v-list-item>
    <v-list-item v-if="currentUser" link @click="logout">
      <v-list-item-icon>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>
      <v-list-item-content>Log Out</v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item
      link
      @click="$router.push({path: '/create-account'})"
      v-if="currentUser !== '' || currentUser !== 'testUser1'"
    >
      <v-list-item-icon>
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>Create User Account</v-list-item-content>
    </v-list-item>
    <v-list-item link @click="$router.push({path: '/'})">
      <v-list-item-icon>
        <v-icon>mdi-home-city</v-icon>
      </v-list-item-icon>
      <v-list-item-content>Home</v-list-item-content>
    </v-list-item>
    <v-list dense v-if="currentUser">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="$router.push({path: item.path })"
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
        <v-list-item-title style="font-weight:bold">Game Links</v-list-item-title>
      </v-list-item>

      <v-list dense>
        <v-list-item
          v-for="item in gameItems"
          :key="item.title"
          link
          @click="$router.push({path: item.path })"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { postSignInOut } from "@/components/modules/utilities/postSignInOut.js";

export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Campaigns", icon: "mdi-chess-rook", path: "/campaigns" },
        {
          title: "Characters",
          icon: "mdi-sword-cross",
          path: "/characters"
        },
        {
          title: "Game Resources",
          icon: "mdi-notebook-multiple",
          path: "/Resources"
        }
      ],
      gameItems: [
        {
          title: "Game Hub",
          icon: "mdi-shield-edit-outline",
          path: "/game-hub"
        },
        {
          title: "Characters",
          icon: "mdi-sword",
          path: "/game-characters"
        },
        { title: "Journal", icon: "mdi-feather", path: "/game-journal-view" },
        { title: "Wiki", icon: "mdi-library-books", path: "/game-wiki-view" }
      ],
      mini: true
    };
  },
  methods: {
    postSignInOut,
    logout() {
      var input = "";

      // sign out from the 'server'
      var store = JSON.parse(localStorage.getItem("UserData"));
      var certs = { username: store.user, password: store.uid };
      this.postSignInOut(certs, 2);

      // clear local certs
      localStorage.removeItem("UserData");
      this.$store.commit("setCurrUserName", input);
      this.$store.commit("clearActiveUser");

      // reroute
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrUserName;
    },
    showSubMenu() {
      return (
        this.$route.path === "/game-hub" ||
        this.$route.path === "/game-characters" ||
        this.$route.path === "/add-game-character" ||
        this.$route.path === "/edit-game-character" ||
        this.$route.path === "/view-game-character" ||
        this.$route.path === "/game-journal-view" ||
        this.$route.path === "/game-wiki-view" ||
        this.$route.path === "/game-calendar"
      );
    }
  }
};
</script>

<style scoped>
v-navigation-drawer {
  height: 100vh;
}
</style>
