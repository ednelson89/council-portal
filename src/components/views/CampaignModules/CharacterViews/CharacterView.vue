<template>
  <div>
    <DnD5eView v-if="activeGameType === 'DnD5e'"></DnD5eView>
  </div>
</template>

<script>
import DnD5eView from "./viewModules/ViewDnD5e.vue";

export default {
  components: {
    DnD5eView
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    activeGameType() {
      return this.$store.getters.getGameSystem;
    }
  }
};
</script>

<style scoped>
.charImg {
  width: 100px;
  height: 100px;
}
</style>