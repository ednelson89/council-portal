<template>
  <div>
    <DnD5eEdit v-if="charType === 'D&D5e'"></DnD5eEdit>
  </div>
</template>

<script>
import DnD5eEdit from "./editModules/EditDnD5e.vue";

export default {
  components: {
    DnD5eEdit
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