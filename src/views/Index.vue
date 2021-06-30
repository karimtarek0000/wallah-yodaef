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
        ref="wrapper"
        :class="[
          'bg-light-1 margin-top-2rem radius-card max-height-88 min-height-88 position-rel overflow-x wrapper',
          { 'overflow-hidden': getToggleNotifi },
          { 'overflow-auto': !getToggleNotifi },
        ]"
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
    <!--  -->
    <ConfirmAlert />
    <!--  -->
    <Alert type="wait" />
  </div>
</template>

<script>
//
import Navbar from "@/components/layout/Navbar";
import NavbarOptions from "@/components/layout/NavbarOptions";
import Model from "@/components/Model";
import ConfirmAlert from "@/components/ConfirmAlert";
import AllNotification from "@/components/AllNotification";
import Alert from "@/components/Alert";

//
export default {
  name: "Index",
  data() {
    return {
      status: false,
    };
  },
  computed: {
    //
    getStatusToggleNotifi() {
      return this.$store.getters[this.$Type.GET_TOGGLE_NOTIFI];
    },
    //
    getToggleNotifi() {
      return this.$store.getters[this.$Type.GET_TOGGLE_NOTIFI];
    },
    //
    statusRunActionDonation() {
      return this.$store.state.Other.runActionDonation;
    },
    //
    statusRunActionWallet() {
      return this.$store.state.Other.runActionWallet;
    },
  },
  components: {
    Navbar,
    NavbarOptions,
    Model,
    ConfirmAlert,
    AllNotification,
    Alert,
  },
  watch: {
    //
    getToggleNotifi(n) {
      if (n) this.$refs.wrapper.scrollTop = 0;
    },
    //
    statusRunActionDonation(n) {
      if (n)
        this.$store.dispatch(this.$Type.SET_TIME_ACTION, "runActionDonation");
    },
    statusRunActionWallet(n) {
      if (n)
        this.$store.dispatch(this.$Type.SET_TIME_ACTION, "runActionWallet");
    },
  },
};
</script>
<style></style>
