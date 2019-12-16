<template>
  <div>
    <b-row>
      <b-col>
        <div v-if="showBooks">
          <p v-if="activeGameType" style="font-weight: bold">Common Resources:</p>
          <div v-if="activeGameType === 'DnD5e'">
            <p v-for="(link, index) in dnd5e.sourceBooks" :key="index">
              <a v-if="link.core" :href="link.link" target="_blank">-{{link.title}}</a>
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import dnd5e from "@/components/modules/Resources/resourcesD&D.js";

export default {
  data() {
    return {
      dnd5e
    };
  },
  computed: {
    activeGameType() {
      return this.$store.getters.getGameType;
    },
    showBooks() {
      return (
        this.$route.path === "/edit-character" ||
        this.$route.path === "/view-character" ||
        this.$route.path === "/game-characters" ||
        this.$route.path === "/journal-view" ||
        this.$route.path === "/game-wiki" ||
        this.$route.path === "/add-character" ||
        this.$route.path === "/game-characters" ||
        this.$route.path === "/game-calendar" ||
        this.$route.path === "/game-hub" ||
        this.$route.path === "/wiki-view"
      );
    }
  }
};
</script>

<style scoped>
</style>