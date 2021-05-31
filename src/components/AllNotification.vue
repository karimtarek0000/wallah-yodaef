<template>
  <div
    role="all-notification"
    class="
      all-notification
      shadow-all-notifi
      position-abs
      d-block
      bg-light-1
      height-100
      max-height-100
      overflow-auto
    "
  >
    <CardNotification v-for="index in 12" :key="index" />
  </div>
</template>

<script>
//
import CardNotification from "@/components/CardNotification";
//
export default {
  name: "AllNotification",
  components: {
    CardNotification,
  },
  methods: {
    closeNotifi() {
      this.$store.commit("setToggleNotifi", false);
    },
  },
  mounted() {
    window.addEventListener("click", this.closeNotifi);
  },
  destroyed() {
    window.removeEventListener("click", this.closeNotifi);
  },
};
</script>

<style lang="scss">
//
.all-notification {
  width: 35%;
  @include position("rt", $moveR: 0, $moveT: 0);

  @include BreakPoint(lg) {
    width: 100%;
  }
}

//
.slideLeft-enter-active {
  animation: slideLeftIn 0.5s ease-in-out forwards;
  will-change: animation;
}

//
.slideLeft-leave-to {
  animation: slideLeftOut 0.5s ease-in-out forwards;
  will-change: animation;
}

@keyframes slideLeftIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes slideLeftOut {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
