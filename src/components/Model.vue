<template>
  <div
    v-show="statusModel.status"
    @click="close"
    ref="drop"
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
          @submit.prevent="submitData"
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
            class="
              text-20
              lg-text-25
              weight-bold
              text-align-center
              margin-top-2rem
            "
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
          <p v-if="messageNoMony" class="text-16">
            <span
              v-text="messageNoMony"
              class="margin-y-1rem margin-end-1rem"
            />
          </p>
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
            :disabled="!amount"
            :nameBtn="!textBtn ? statusModel.nameBtn : textBtn"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import * as Type from "@/store/Type.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModelDonation",
  data() {
    return {
      amount: null,
      textBtn: null,
      messageNoMony: null,
    };
  },
  methods: {
    ...mapActions({
      GET_WALLET: Type.GET_WALLET,
      DONATE: Type.DONATE,
      SET_WALLET: Type.SET_WALLET,
      COUNT_NOTIFI: Type.COUNT_NOTIFI,
    }),
    //
    close() {
      this.amount = null;
      this.$store.commit(
        this.$Type.SET_STATUS_MODEL_DONATION,
        Object.assign(this.statusModel, { status: false })
      );
    },
    //
    escapeClose(e) {
      if (e.key === "Escape") this.close();
    },
    //
    async donate() {
      // 1) - GET CASH WALLET
      await this.GET_WALLET();
      // 2) - IF AMOUNT LETH THAN OR EQAL GETWALLET WILL RUN ALL ACTIONS
      if (this.amount <= this.getWallet) {
        //
        this.DONATE(this.amount).then(() => {
          this.textBtn = "تم التبرع";
          this.messageNoMony = null;
          this.amount = null;
          //
          setTimeout(() => {
            this.textBtn = "تاكيد";
            this.close();
            this.COUNT_NOTIFI();
          }, 500);
        });
      } else {
        this.messageNoMony = "القيمه المدخله اكبر من الرصيد";
      }
    },
    //
    wallet() {
      //
      this.SET_WALLET(this.amount).then(() => {
        this.textBtn = "تم الشحن";
        this.amount = null;
        //
        setTimeout(() => {
          this.textBtn = "شحن الرصيد";
          this.GET_WALLET();
          this.close();
        }, 500);
      });
    },
    //
    submitData() {
      if (this.amount && !isNaN(this.amount)) {
        // DONATE
        if (this.statusModel.type === "donate") this.donate();
        // WALLET
        if (this.statusModel.type === "wallet") this.wallet();
      }
    },
  },
  computed: {
    ...mapGetters({
      statusModel: Type.GET_STATUS_MODEL_DONATION,
      getWallet: Type.GET_CASH_WALLET,
    }),
  },
  watch: {
    statusModel(n) {
      if (n) {
        this.$nextTick(() => {
          setTimeout(() => this.$refs.donationInput.focus(), 500);
        });
      }
    },
    "statusModel.status"(n) {
      if (!n) this.messageNoMony = null;
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
//
.model-donation {
  z-index: 9999;
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
  backface-visibility: hidden;
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
