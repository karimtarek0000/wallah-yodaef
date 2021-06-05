<template>
  <transition name="alert">
    <div
      v-if="getInfoAlert.status"
      class="
        alert
        position-abs
        d-block
        text-18
        radius-10
        padding-2rem
        text-light text-align-center
        bg-red-light
      "
    >
      <p v-text="getInfoAlert.text" />
    </div>
  </transition>
</template>

<script>
//
import * as Type from "@/store/Type.js";
//
export default {
  name: "Alert",
  computed: {
    getInfoAlert() {
      return this.$store.getters[Type.GET_ALERT];
    },
  },
  watch: {
    "getInfoAlert.status"(value) {
      if (value) {
        setTimeout(() => {
          this.$store.commit(Type.SET_ALERT, {
            status: false,
            text: null,
          });
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss">
.alert {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.alert-enter-active {
  animation: alertSlideIn 0.5s ease-in-out forwards;
}
.alert-leave-active {
  animation: alertSlideOut 0.5s ease-in-out both;
}

.alert-enter-active,
.alert-leave-active {
  will-change: animation;
}

@keyframes alertSlideIn {
  0% {
    top: -50px;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
}
@keyframes alertSlideOut {
  0% {
    top: 20px;
    opacity: 1;
  }
  100% {
    top: -50px;
    opacity: 0;
  }
}
</style>
