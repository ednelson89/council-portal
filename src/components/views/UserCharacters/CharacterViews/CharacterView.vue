<template>
  <div>
    <DnD5eView v-if="charType === 'D&D5e'"></DnD5eView>
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