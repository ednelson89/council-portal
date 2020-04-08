<template>
  <div>
    <DnD5eView v-if="charType === 'D&D5e'"></DnD5eView>
    <CoDView v-if="charType === 'CoD'"> </CoDView>
  </div>
</template>

<script>
import DnD5eView from "./viewModules/ViewDnD5e.vue";
import CoDView from "./viewModules/ViewCoD.vue";

export default {
  components: {
    DnD5eView,
    CoDView
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    charType() {
      return this.$store.getters.getActiveChar.system;
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
