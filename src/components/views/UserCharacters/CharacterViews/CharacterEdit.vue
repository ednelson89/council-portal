<template>
  <div>
    <DnD5eEdit v-if="charType === 'D&D5e'"></DnD5eEdit>
    <CoDEdit v-if="charType === 'CoD'"></CoDEdit>
  </div>
</template>

<script>
import DnD5eEdit from "./editModules/EditDnD5e.vue";
import CoDEdit from "./editModules/EditCoD.vue";

export default {
  components: {
    DnD5eEdit,
    CoDEdit
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