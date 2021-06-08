<template>
  <!-- Form -->
  <form
    role="my-account"
    class="
      bg-light-1
      d-flex
      flex-direction-column
      align-items-center
      margin-top-2rem
      lg-padding-top-2rem
      width-100
      radius-model
    "
  >
    <!-- Name -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="name"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-20
          text-25
        "
        >الاسم</label
      >
      <input
        readonly
        :value="dataUser.name"
        type="text"
        id="name"
        autocomplete="off"
        :class="'padding-y-1rem  padding-x-2rem xlg-text-18 text-22 weight-bold'"
        placeholder="الاسم"
      />
    </div>
    <!-- Phone -->
    <div
      class="
        d-flex
        xlg-width-60
        md-width-90
        lg-width-70
        sm-width-100
        margin-bottom-2rem
        flex-direction-column
        border-bottom
      "
    >
      <label
        for="tel"
        class="
          text-red-light
          weight-bold
          padding-x-2rem
          margin-bottom-1rem
          xlg-text-20
          text-25
        "
        >رقم الجوال</label
      >
      <input
        readonly
        :value="dataUser.phone"
        type="text"
        id="tel"
        autocomplete="off"
        class="padding-y-1rem padding-x-2rem xlg-text-18 text-22 weight-bold"
        placeholder="رقم الجوال"
      />
    </div>
    <!-- Go to page change account -->
    <router-link
      class="
        text-align-center
        bg-red-light
        btn__red-light
        text-light
        width-276px
        padding-y-1rem
        radius-100
        text-18
        lg-text-22
        margin-y-2rem
      "
      :to="{ name: 'ChangeAccount' }"
      >تعديل الحساب</router-link
    >
  </form>
</template>

<script>
//
export default {
  name: "Account",
  props: {
    dataUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
//
.info-profile {
  @include BreakPoint(lg) {
    background-color: $light;
  }
}
</style>
