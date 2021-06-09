<template>
  <figure @click.stop="toggleNotifi" class="notifi position-rel">
    <GSvg
      class="svg-40 fill-black cursor-pointer"
      nameIcon="notifications"
      title="الاشعارات"
    />
    <!--  -->
    <span
      v-show="getUnReadNotifi > 0"
      class="
        notifi__count
        position-abs
        text-light text-16
        d-flex
        align-items-center
        justify-content-center
      "
      v-text="getUnReadNotifi"
    />
  </figure>
</template>

<script>
export default {
  name: "Notifi",
  data() {
    return {
      status: false,
    };
  },
  computed: {
    getUnReadNotifi() {
      return this.$store.getters[this.$Type.GET_NOTIFI].count
        .unread_notifications;
    },
  },
  methods: {
    toggleNotifi() {
      this.status = !this.$store.getters[this.$Type.GET_TOGGLE_NOTIFI];
      this.$store.commit(this.$Type.SET_TOGGLE_NOTIFI, this.status);
    },
  },
  created() {
    this.$store.dispatch(this.$Type.COUNT_NOTIFI);
  },
};
</script>

<style lang="scss">
//
.notifi {
  //
  &__count {
    width: 22px;
    height: 22px;
    background-color: $red-light;
    top: -1px;
    left: 17px;
    border-radius: 50%;
    pointer-events: none;

    //
    @include BreakPoint(sm) {
      top: -5px;
      left: 13px;
    }
  }
}
</style>
