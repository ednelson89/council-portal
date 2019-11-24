<template>
  <div id="app">
    <v-app>
      <navigation></navigation>
      <v-content>
        <v-container fluid>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import navigation from "@/components/common/Navigation.vue";
export default {
  components: { navigation }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
