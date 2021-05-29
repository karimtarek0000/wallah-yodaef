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
      <div class="bg-light-1 margin-top-2rem radius-card overflow-auto wrapper">
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
//
.wrapper {
  min-height: calc(100vh - 110px);
  max-height: calc(100vh - 110px);

  @include BreakPoint(md) {
    min-height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
  }

  @include BreakPoint(lg) {
    min-height: calc(100vh - 150px);
    max-height: calc(100vh - 150px);
  }

  @include BreakPoint(sm) {
    min-height: calc(100vh - 130px);
    max-height: calc(100vh - 130px);
  }
}
</style>
