<template>
  <div
    class="
      home
      height-100
      d-flex
      lg-flex-direction-column
      test
      lg-align-items-center
    "
  >
    <!-- Navbar -->
    <Navbar />
    <!-- Pages -->
    <div class="padding-1rem width-100 overflow-hidden height-100">
      <!-- Navbar Options -->
      <NavbarOptions />
      <!--  -->
      <div
        class="
          bg-light-1
          margin-top-2rem
          radius-card
          overflow-auto
          max-height-88
          min-height-88
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
<style></style>
