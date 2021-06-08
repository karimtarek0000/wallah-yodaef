<template>
  <section
    role="more-info"
    class="
      d-flex
      flex-direction-column
      lg-padding-x-1rem
      xlg-align-items-center
    "
  >
    <router-link
      class="
        text-30 text-black
        md-text-20
        padding-y-2rem
        border-bottom
        weight-bold
        d-flex
        align-items-center
      "
      :to="{ name: 'AboutSite' }"
    >
      <GSvg
        class="svg-20 fill-red-light margin-end-1rem"
        nameIcon="about"
        title="عن الموقع"
      />
      <span>عن الموقع</span>
    </router-link>
    <!--  -->
    <router-link
      class="
        text-30
        md-text-20
        text-black
        padding-y-2rem
        border-bottom
        weight-bold
        d-flex
        align-items-center
      "
      :to="{ name: 'Terms' }"
    >
      <GSvg
        class="svg-20 fill-red-light margin-end-1rem"
        nameIcon="terms"
        title="الشروط و الاحكام "
      />
      <span>الشروط و الاحكام</span>
    </router-link>
    <!--  -->
    <router-link
      class="
        text-30
        md-text-20
        text-black
        padding-y-2rem
        border-bottom
        weight-bold
        d-flex
        align-items-center
      "
      :to="{ name: 'ContactUs' }"
    >
      <GSvg
        class="svg-20 fill-red-light margin-end-1rem"
        nameIcon="contactus"
        title="تواصل معنا"
      />
      <span>تواصل معنا</span>
    </router-link>
    <!-- Exit -->
    <button
      @click="logOut"
      class="
        text-black
        lg-margin-end-auto
        text-30
        md-text-20
        d-flex
        align-items-center
        bg-light-1
        weight-bold
        padding-y-2rem
      "
    >
      <GSvg
        class="svg-20 fill-red-light margin-end-1rem"
        nameIcon="exit"
        title="خروج"
      />
      <span>تسجيل الخروج</span>
    </button>
  </section>
</template>

<script>
export default {
  name: "MoreInfo",
  computed: {
    statusConfirm() {
      return this.$store.getters[this.$Type.GET_STATUS_CONFIRM_ALERT];
    },
  },
  methods: {
    //
    logOut() {
      this.$store.commit(this.$Type.TOGGLE_CONFIRM_ALERT, true);
    },
  },
  watch: {
    "statusConfirm.confirm"(n) {
      if (n) this.$store.dispatch(this.$Type.SIGN_OUT);
    },
  },
};
</script>

<style></style>
