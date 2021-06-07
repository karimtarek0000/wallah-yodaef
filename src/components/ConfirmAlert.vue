<template>
  <div
    v-show="statusConfirmAlert.status"
    @click="close"
    ref="drop"
    class="
      confirm-alert
      overflow-hidden
      width-100
      height-100
      position-abs
      bg-black-alpha
      text-22
    "
  >
    <transition name="alert">
      <div
        v-show="statusConfirmAlert.status"
        class="
          confirm-alert__wrapper
          position-abs
          bg-light
          padding-x-4rem padding-y-1rem
          radius-10
        "
      >
        <span>هل تريد الخروج ؟</span>
        <div class="d-flex margin-top-2rem">
          <!--  -->
          <button
            @click="status = true"
            type="button"
            class="bg-red-light basis-50 sm-text-22 text-20 text-light"
          >
            تاكيد
          </button>
          <!--  -->
          <button
            @click="status = false"
            type="button"
            class="padding-x-2rem basis-50 sm-text-22 text-20"
          >
            الغاء
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ConfirmAlert",
  data() {
    return {
      status: null,
    };
  },
  computed: {
    statusConfirmAlert() {
      return this.$store.getters[this.$Type.GET_STATUS_CONFIRM_ALERT];
    },
  },
  methods: {
    //
    close() {
      this.$store.commit(this.$Type.TOGGLE_CONFIRM_ALERT, false);
    },
    //
    escapeClose(e) {
      if (e.key === "Escape") this.close();
    },
  },
  watch: {
    status(v) {
      //
      if (v) {
        this.$store.commit(this.$Type.SET_CONFIRM_ALERT, true);
        this.close();
      }
      //
      if (!v) {
        this.$store.commit(this.$Type.SET_CONFIRM_ALERT, false);
        this.close();
      }
    },
  },
  mounted() {
    //
    this.$refs.drop.addEventListener("keydown", this.escapeClose);
    //
    this.$once("hook:destroyed", () => {
      this.$refs.drop.removeEventListener("keydown", this.escapeClose);
    });
  },
};
</script>

<style lang="scss">
.confirm-alert {
  //
  &__wrapper {
    @include position("centerX");
    @include position("top", $moveT: 20px);
  }
}
</style>
