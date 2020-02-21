<template>
  <div>
    <b-row id="baseTemp">
      <b-col style="padding:2px; margin:0px 15px;">
        <h2
          v-if="windowWidth < 700"
          style="font-size:22px; font-weight:bold; padding:2px; margin:0px;"
        >Game Table</h2>

        <p v-if="windowWidth < 700">
          Welcome to the table! Here, you can play with others on a digital
          battlemap, or load images to show your group. The shared positioning may not
          be perfectly accurate, but it should be fairly close.
        </p>
        <p v-if="windowWidth < 700">
          You can change the map and add/remove tokens from the board by
          following the steps below. The board will automatically update every
          12 seconds.
        </p>
        <tableBase v-if="windowWidth >= 700"></tableBase>
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
