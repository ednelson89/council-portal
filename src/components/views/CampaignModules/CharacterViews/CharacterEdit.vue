<template>
  <div>
    <DnD5eEdit v-if="activeGameType === 'D&D5e'"></DnD5eEdit>
    <CoDEdit v-if="activeGameType === 'CoD'"></CoDEdit>
    <ChangelingEdit v-if="activeGameType === 'CoDChangeling'"></ChangelingEdit>
  </div>
</template>

<script>
import DnD5eEdit from "./editModules/EditDnD5e.vue";
import CoDEdit from "./editModules/EditCoD.vue";
import ChangelingEdit from "./editModules/EditChangeling.vue";

export default {
  components: {
    DnD5eEdit,
    CoDEdit,
    ChangelingEdit
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