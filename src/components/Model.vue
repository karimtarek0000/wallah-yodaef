<template>
  <div
    v-show="statusModel.status"
    @click="close"
    ref="donation"
    class="
      model-donation
      overflow-hidden
      width-100
      height-100
      position-abs
      bg-black-alpha
    "
  >
    <!--  -->
    <transition name="slideUp">
      <div
        v-show="statusModel.status"
        @click.stop=""
        class="
          model-donation__wrapper
          radius-model
          lg-width-100
          xlg-width-50vw
          height-50vh
          position-abs
          bg-light
        "
      >
        <!-- Icon -->
        <figure
          class="
            model-donation__icon
            radius-circle
            width-15rem
            height-15rem
            bg-red-light
            position-abs
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <GSvg
            class="svg-80 fill-light"
            :nameIcon="statusModel.icon"
            :title="statusModel.icon"
          />
        </figure>
        <!-- Form -->
        <form
          @submit.prevent="s"
          class="
            d-flex
            flex-direction-column
            justify-content-center
            align-items-center
            height-100
            lg-width-60
            sm-width-90
            margin-x-auto
          "
        >
          <label
            for="donation"
            class="text-20 lg-text-25 weight-bold margin-top-2rem"
            >{{ statusModel.title }}</label
          >
          <figure
            class="
              d-flex
              align-items-center
              border-all-red-light
              padding-x-2rem padding-y-1rem
              radius-100
              text-16
              lg-text-22
              weight-bold
              text-red-light
              margin-y-2rem
            "
          >
            <input
              type="text"
              id="donation"
              v-model.number="amount"
              autocomplete="off"
              placeholder="المبلغ"
              ref="donationInput"
            />
            <span class="model-donation__currancy position-rel"
              >ريال سعودي</span
            >
          </figure>
          <!--  -->
          <BtnPrimary
            class="
              bg-red-light
              btn__red-light
              lg-width-100
              xlg-width-50
              text-light
              padding-y-1rem
              radius-100
              text-18
              lg-text-22
            "
            type="submit"
            :nameBtn="statusModel.nameBtn"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModelDonation",
  data() {
    return {
      amount: null,
    };
  },
  methods: {
    //
    close() {
      this.amount = null;
      this.$store.commit(
        "setStatusModelDonation",
        Object.assign(this.statusModel, { status: false })
      );
    },
    //
    escapeClose(e) {
      if (e.key === "Escape") this.close();
    },
    s() {
      console.log("form");
    },
  },
  computed: {
    //
    statusModel() {
      return this.$store.getters.getStatusModelDonation;
    },
  },
  watch: {
    statusModel(n) {
      if (n) {
        this.$nextTick(() => {
          setTimeout(() => this.$refs.donationInput.focus(), 500);
        });
      }
    },
  },
  mounted() {
    //
    this.$refs.donation.addEventListener("keydown", this.escapeClose);
    //
    this.$once("hook:destroyed", () => {
      this.$refs.donation.removeEventListener("keydown", this.escapeClose);
    });
  },
};
</script>

<style lang="scss">
//
.model-donation {
  //
  &__wrapper {
    @include position("centerX");
    @include position("bottom", $moveB: 0);

    //
    @include BreakPoint(xlg) {
      max-width: 50vw;
    }
  }

  //
  &__icon {
    @include position("centerX");
    @include position("top", $moveT: "-7.5rem");
    border: 0.5rem solid $light;
  }

  //
  &__currancy {
    //
    &::after {
      content: "";
      position: absolute;
      right: -10px;
      height: 90%;
      width: 1px;
      background-color: lighten($red-light, 50%);
      @include position("centerY");
    }
  }
}

//
.slideUp-enter-active {
  animation: slideUp 0.8s cubic-bezier(0.01, 0.44, 0.48, 1.01) forwards;
  will-change: animation;
}

//
@keyframes slideUp {
  0% {
    transform: translateY(100%) translateX(-50%);
  }
  100% {
    transform: translateY(0) translateX(-50%);
  }
}
</style>
