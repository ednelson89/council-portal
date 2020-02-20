<template>
  <div>
    <img
      :src="mapSrc"
      id="mapImg"
      :style="' width: ' + (tableWidth - 50) + 'px !important; '"
      class="imageBorder"
    />
    <VueDragResize
      v-for="(token, index) in gameTokens"
      :key="index"
      :isActive="true"
      :w="token.width"
      :h="token.height"
      :x="token.left"
      :y="token.top"
      :parentW="tableWidth - 25"
      :parentH="tableHeight - 25"
      :aspectRatio="true"
      :parentLimitation="true"
      @resizing="resize($event, index)"
      @dragging="resize($event, index)"
    >
      <img :src="token.imgSrc" :width="token.width" :height="token.height" />
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import { mapGetters } from "vuex";

export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      gridOn: true,
      tableHeight: 1100,
      tableWidth: 600,
      mapSrc:
        "https://i.pinimg.com/originals/c4/23/58/c423582e6bbf4369636aaaad417703ab.jpg"
    };
  },
  methods: {
    resize(newRect, index) {
      this.gameTokens[index].width = newRect.width;
      this.gameTokens[index].height = newRect.height;
      this.gameTokens[index].top = newRect.top;
      this.gameTokens[index].left = newRect.left;

      let gameTableEl = document.getElementById("main-content");
      this.tableWidth = gameTableEl.offsetWidth;
      this.tableHeight = gameTableEl.offsetHeight;
    }
  },
  computed: {
    ...mapGetters({
      gameTokens: "getActiveGameTokens"
    })
  },
  mounted() {
    let gameTableEl = document.getElementById("main-content");
    this.tableWidth = gameTableEl.offsetWidth;
    this.tableHeight = gameTableEl.offsetHeight;

    window.addEventListener("resize", () => {
      this.tableWidth = gameTableEl.offsetWidth;
      this.tableHeight = gameTableEl.offsetHeight;
    });
  }
};
</script>

<style>
.imageBorder {
  border: 4px solid black;
  /*
  border: 25px solid #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
    */
}
</style>
