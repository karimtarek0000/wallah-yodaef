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
          position-rel
          overflow-x
        "
      >
        <!-- Pages -->
        <router-view />
        <!-- Notification -->
        <transition name="slideLeft">
          <AllNotification v-if="getStatusToggleNotifi" />
        </transition>
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
import AllNotification from "@/components/AllNotification";
import * as Type from "@/store/Type.js";

//
export default {
  name: "Index",
  data() {
    return {
      status: false,
    };
  },
  computed: {
    getStatusToggleNotifi() {
      return this.$store.getters[Type.GET_TOGGLE_NOTIFI];
    },
  },
  components: {
    Navbar,
    NavbarOptions,
    Model,
    AllNotification,
  },
};
</script>
<style></style>
