<template>
  <div>
    <DnD5eView v-if="activeGameType === 'D&D5e'"></DnD5eView>
    <CoDView v-if="activeGameType === 'CoD'"></CoDView>
    <ChangelingView v-if="activeGameType === 'CoDChangeling'"></ChangelingView>
    <SR5View v-if="activeGameType === 'SR5'"></SR5View>
  </div>
</template>

<script>
import DnD5eView from './viewModules/ViewDnD5e.vue';
import CoDView from './viewModules/ViewCoD.vue';
import ChangelingView from './viewModules/ViewChangeling.vue';
import SR5View from './viewModules/ViewSR5.vue';

export default {
  components: {
    DnD5eView,
    CoDView,
    ChangelingView,
    SR5View,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    activeGameType() {
      return this.$store.getters.getGameType;
    },
  },
};
</script>

<style scoped>
.charImg {
  width: 100px;
  height: 100px;
}
</style>
