<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    :height="'100vh'"
    :mini-variant.sync="mini"
    permanent
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link :to="item.path">{{ item.title }}</router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", path: "/" },
        { title: "Campaigns", icon: "mdi-account", path: "/campaigns" },
        {
          title: "Characters",
          icon: "mdi-account-group-outline",
          path: "/characters"
        }
      ],
      mini: true
    };
  }
};
</script>

<style scoped>
v-navigation-drawer {
  height: 100vh;
}
</style>
