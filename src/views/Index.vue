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
          min-height-90vh
        "
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
//
import Navbar from "@/components/layout/Navbar";
import NavbarOptions from "@/components/layout/NavbarOptions";
export default {
  name: "Index",
  components: {
    Navbar,
    NavbarOptions,
  },
};
</script>
