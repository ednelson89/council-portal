<template>
  <div>
    <b-row id="baseTemp">
      <b-col style="padding:2px; margin:0px 15px;">
        <h2
          v-if="windowWidth < 700"
          style="font-size:22px; font-weight:bold; padding:2px; margin:0px;"
        >
          Game Table
        </h2>
        <p v-if="windowWidth < 700">
          Welcome to the game table. This feature is only available if your
          screen width is at least 1200px.
        </p>
        <tableBase v-if="windowWidth >= 700"> </tableBase>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import tableBase from "./TableModules/TableBase.vue";

export default {
  components: { tableBase },
  data() {
    return {
      windowWidth: 0
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style></style>
