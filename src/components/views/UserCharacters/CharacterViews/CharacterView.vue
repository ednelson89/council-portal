<template>
  <div>
    <DnD5eView v-if="charType === 'D&D5e'"></DnD5eView>
    <CoDView v-if="charType === 'CoD'"></CoDView>
    <ChangelingView v-if="charType === 'CoDChangeling'"></ChangelingView>
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
