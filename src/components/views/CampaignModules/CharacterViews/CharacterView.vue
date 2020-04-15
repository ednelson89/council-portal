<template>
  <div>
    <DnD5eView v-if="activeGameType === 'D&D5e'"></DnD5eView>
    <CoDView v-if="activeGameType === 'CoD'"></CoDView>
    <ChangelingView v-if="activeGameType === 'CoDChangeling'"></ChangelingView>
  </div>
</template>

<script>
import DnD5eView from "./viewModules/ViewDnD5e.vue";
import CoDView from "./viewModules/ViewCoD.vue";
import ChangelingView from "./viewModules/ViewChangeling.vue";

export default {
  components: {
    DnD5eView,
    CoDView,
    ChangelingView
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    activeGameType() {
      return this.$store.getters.getGameType;
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