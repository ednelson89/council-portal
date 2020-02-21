<template>
  <div>
    <img :src="activeGame.gameMap" id="mapImg" :style="'width: 100%;'" class="imageBorder" />
    <VueDragResize
      v-for="(token, index) in gameTokens"
      :key="index"
      :isActive="true"
      :w="token.width"
      :h="token.height"
      :x="(token.left * (tableWidth)) / token.fieldLength"
      :y="(token.top * (tableHeight)) / token.fieldHeight"
      :parentW="tableWidth "
      :parentH="tableHeight"
      :aspectRatio="true"
      :parentLimitation="true"
      @resizing="resize($event, index)"
      @dragging="resize($event, index)"
      @resizestop="onDragStop($event, index)"
      @dragstop="onDragStop($event, index)"
    >
      <img :src="token.imgSrc" :width="token.width" :height="token.height" />
      <p
        v-if="token.tokenName"
        :width="token.width"
        style="background-color: white"
      >{{ token.tokenName }}</p>
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import { mapGetters } from "vuex";

import {
  getCampaigns,
  updateTokens
} from "@/components/modules/utilities/dataFunctions.js";

export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      gridOn: true,
      tableHeight: 1100,
      tableWidth: 600
    };
  },
  methods: {
    resize(newRect, index) {
      this.gameTokens[index].width = newRect.width;
      this.gameTokens[index].height = newRect.height;
      this.gameTokens[index].top = newRect.top;
      this.gameTokens[index].left = newRect.left;

      let gameTableEl = document.getElementById("mapImg");
      this.tableWidth = gameTableEl.offsetWidth;
      this.tableHeight = gameTableEl.offsetHeight;

      this.gameTokens[index].fieldLength = this.tableWidth;
      this.gameTokens[index].fieldHeight = this.tableHeight;
    },
    onDragStop(newRect, index) {
      this.resize(newRect, index);

      if (!this.deleting) {
        updateTokens(3, this.gameTokens[index], this.activeGame.gameID).then(
          () => {
            this.updateGame();
          }
        );
      } else {
        updateTokens(2, this.gameTokens[index], this.activeGame.gameID).then(
          () => {
            this.updateGame();
            this.$store.commit("setDeletingToken", false);
          }
        );
      }
    },
    updateGame() {
      // eslint-disable-next-line no-console
      console.log("Update Game");
      let gameList = [];
      getCampaigns()
        .then(response => {
          let currGame;
          response.forEach(entry => {
            gameList.push(entry);
            if (entry.gameID === this.activeGame.gameID) {
              currGame = entry;
            }
          });
          return currGame;
        })
        .then(game => {
          this.$store.commit("setActiveGame", game);
          this.$store.commit("setGames", gameList);
          this.$forceUpdate();
        });
    }
  },
  computed: {
    ...mapGetters({
      gameTokens: "getActiveGameTokens",
      activeGame: "getActiveGame",
      deleting: "getDeletingToken"
    })
  },
  mounted() {
    let gameTableEl = document.getElementById("mapImg");
    this.tableWidth = gameTableEl.offsetWidth;
    this.tableHeight = gameTableEl.offsetHeight;

    window.addEventListener("resize", () => {
      this.tableWidth = gameTableEl.offsetWidth;
      this.tableHeight = gameTableEl.offsetHeight;

      this.gameTokens.forEach(token => {
        token.top = (token.top * this.tableHeight) / token.fieldHeight;
        token.left = (token.left * this.tableWidth) / token.fieldLength;
        token.fieldLength = this.tableWidth;
        token.fieldHeight = this.tableHeight;
      });
    });

    setInterval(() => {
      this.updateGame();
    }, 12000);
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
