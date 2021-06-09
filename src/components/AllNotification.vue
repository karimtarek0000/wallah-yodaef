<template>
  <div
    role="all-notification"
    :class="[
      'all-notification shadow-all-notifi position-abs bg-light-1 height-100 max-height-100 overflow-auto',
      {
        'd-flex justify-content-center align-items-center':
          getNotifi.length === 0,
      },
    ]"
  >
    <template v-if="getNotifi.length !== 0">
      <CardNotification
        v-for="notifi in getNotifi"
        :key="notifi.id"
        :data="notifi"
      />
    </template>
    <p v-else role="description" class="text-18">لا يوجد اشعارات</p>
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
      this.$store.commit(this.$Type.SET_TOGGLE_NOTIFI, false);
    },
  },
  computed: {
    //
    getNotifi() {
      return this.$store.getters[this.$Type.GET_NOTIFI].notifi;
    },
    //
    getCountNotifi() {
      return this.$store.getters[this.$Type.GET_NOTIFI].count
        .unread_notifications;
    },
  },
  mounted() {
    window.addEventListener("click", this.closeNotifi);
  },
  destroyed() {
    window.removeEventListener("click", this.closeNotifi);
  },
  async created() {
    //
    await this.$store.dispatch(this.$Type.NOTIFI);
    //
    if (this.getCountNotifi !== 0)
      this.$store.dispatch(this.$Type.COUNT_NOTIFI);
  },
};
</script>

<style lang="scss">
//
.all-notification {
  width: 35%;
  @include position("rt", $moveR: 0, $moveT: 0);
  @include scrollBar(2px, $gray, $red-light);
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
