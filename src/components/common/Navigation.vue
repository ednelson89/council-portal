<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    :height="'100vh'"
    :mini-variant.sync="mini"
    permanent
    expand-on-hover
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>USER NAME</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
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
    <div
      v-if="$route.path === '/game-hub' || $route.path === '/journal-view' || $route.path === '/game-wiki' || $route.path === '/game-characters' || $route.path === '/game-calendar'"
    >
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
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", path: "/" },
        { title: "User", icon: "mdi-account", path: "/" },
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
        { title: "Journal", icon: "mdi-feather", path: "/journal-view" },
        { title: "Wiki", icon: "mdi-library-books", path: "/game-wiki" },
        {
          title: "Characters",
          icon: "mdi-account-star-outline",
          path: "/game-characters"
        },
        {
          title: "Calendar",
          icon: "mdi-calendar-blank-multiple",
          path: "/game-calendar"
        }
      ],
      mini: true
    };
  },
  methods: {}
};
</script>

<style scoped>
v-navigation-drawer {
  height: 100vh;
}
</style>
