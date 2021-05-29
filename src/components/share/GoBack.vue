<template>
  <figure @click="goBack" class="d-flex align-items-center cursor-pointer">
    <GSvg
      class="lg-svg-40 svg-30 fill-black"
      nameIcon="angle-right"
      title="back"
    />
    <span v-if="showText" class="weight-bold text-20 text-black">عودة</span>
  </figure>
</template>

<script>
export default {
  name: "GoBack",
  props: {
    showText: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    //
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
//
.arrow-back {
  @include position("lt", $moveT: "36px", $moveL: "-7px");
  //
  @include BreakPoint(xlg) {
    @include position("lt", $moveT: "36px", $moveL: "15px");
  }
}
</style>
