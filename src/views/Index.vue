<template>
  <div
    class="
      home
      d-flex
      lg-flex-direction-column lg-align-items-center
      height-100vh
    "
  >
    <!-- Navbar -->
    <Navbar />
    <!-- Pages -->
    <div class="padding-1rem width-100 overflow-hidden">
      <!-- Navbar Options -->
      <NavbarOptions />
      <!--  -->
      <div
        class="
          bg-light-1
          padding-1rem
          margin-top-2rem
          radius-card
          overflow-auto
          wrapper
        "
      >
        <router-view />
      </div>
    </div>
    <!-- Model  -->
    <Model />
  </div>
</template>

<script>
//
import Navbar from "@/components/layout/Navbar";
import NavbarOptions from "@/components/layout/NavbarOptions";
import Model from "@/components/Model";
//
export default {
  name: "Index",
  components: {
    Navbar,
    NavbarOptions,
    Model,
  },
};
</script>
<style lang="scss">
.wrapper {
  @include scrollBar(5px, $gray, $red-light);
  max-height: 85vh;
  min-height: 85vh;
  //
  @include BreakPoint(lg) {
    max-height: calc(100vh - 19rem);
    min-height: calc(100vh - 19rem);
  }
}
</style>
