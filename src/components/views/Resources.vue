<template>
  <div>
    <b-row>
      <b-col>
        <h2>Game Resources</h2>
        <p>Below, you'll find resources for all of the games commonly played by the council.</p>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <b-tabs content-class="mt-3">
          <b-tab title="Dungeons and Dragons 5e" active>
            <dnd5eView></dnd5eView>
          </b-tab>
          <b-tab title="Chronicles of Darkness">
            <codView></codView>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import dnd5eView from "./ResourcesModules/dndResources.vue";
import codView from "./ResourcesModules/codResources.vue";

export default {
  components: {
    dnd5eView,
    codView
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>