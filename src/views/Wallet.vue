<template>
  <section
    role="wallet"
    class="
      d-flex
      flex-direction-column
      justify-content-center
      align-items-center
      weight-bold
    "
  >
    <p
      role="title"
      class="
        text-22 text-align-center text-black
        padding-y-4rem padding-x-2rem
        border-bottom
      "
    >
      يمكنك شحن المحفظة بأي مبلغ تريد للتبرع في جميع المشاريع
    </p>
    <p role="description" class="text-20 user-select text-black margin-y-4rem">
      رصيدك الحالى
    </p>
    <!--  -->
    <figure
      class="
        d-flex
        flex-direction-column
        align-items-center
        justify-content-center
        width-20rem
        height-20rem
        radius-circle
        border-all-red-light-2
        weight-bold
        text-red-light
        user-select
      "
    >
      <span role="amount" class="text-40">3000</span>
      <span role="currancy" class="text-20">ريال سعودي</span>
    </figure>
    <!--  -->
    <!--  -->
    <BtnPrimary
      @submited="test"
      class="
        flex-shrink-0
        padding-x-2rem padding-y-1rem
        xlg-text-20
        lg-text-22
        width-276px
        margin-top-2rem
      "
      nameBtn="شحن الرصيد"
    />
  </section>
</template>

<script>
export default {
  name: "Wallet",
  methods: {
    test() {
      this.$store.commit("setStatusModelDonation", {
        status: true,
        icon: "hand",
        title: "أدخل المبلغ الذي تريد شحنه في المحفظة",
        nameBtn: "شحن الرصيد",
      });
    },
  },
};
</script>

<style></style>
