<template>
  <div class="busHome" ref="busHome">
    <homeHeader ref="homeHeader"></homeHeader>
    <cheaper></cheaper>
    <famousRec></famousRec>
    <guessLike></guessLike>
    <newStore></newStore>
    <rightBar
      class="rightBar"
      @hot="hot"
      @cheap="cheap"
      @recommand="recommand"
      @guess="guess"
      @newStore='newStore'
      @top='top'
    ></rightBar>
  </div>
</template>

<script>
import homeHeader from "./homeHeader/homeHeader";
import cheaper from "./cheaper";
import famousRec from "./famousRec";
import guessLike from "./guessLike";
import newStore from "./newStore";
import rightBar from "./rightBar";
export default {
  components: {
    homeHeader,
    cheaper,
    famousRec,
    guessLike,
    newStore,
    rightBar,
  },
  data() {
    return {
      busHome: 0,
    };
  },
  methods: {
    hot() {
      window.scroll(0, 210);
        // window.scroll(0, this.$refs.homeHeader.clientHeight);
        // console.log(this.$refs.homeHeader.clientHeight);
    },
    cheap() {
      window.scroll(0, 450);
    },
    recommand() {
      window.scroll(0, 610);
    },
    guess() {
      window.scroll(0, 870);
    },
    newStore() {
      window.scroll(0, 1140);
    },
    top() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style scoped>
.rightBar {
  position: fixed;
  top: 30%;
  left: 78%;
}
.busHome{
    height:100%
}
</style>