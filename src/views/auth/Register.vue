<template>
  <section
    role="register"
    class="
      register
      d-flex
      flex-direction-column
      justify-content-center
      align-items-center
      height-100vh
    "
  >
    <!--  -->
    <figure role="logo" class="height-12rem margin-bottom-4rem">
      <img class="resize-img" src="/logo/logo.png" alt="logo" />
    </figure>
    <!--  -->
    <figure role="image" class="lg-margin-bottom-2rem margin-bottom-1rem">
      <GImage srcImage="other-1.svg" alt="register" />
    </figure>
    <!--  -->
    <div
      role="info"
      class="text-align-center sm-padding-x-1rem margin-bottom-4rem"
    >
      <p
        role="descripition-1"
        class="
          text-22 text-red-light
          weight-bold
          lg-margin-bottom-2rem
          margin-bottom-1rem
        "
      >
        تبرع بكل سهولة
      </p>
      <p role="descripition-2" class="text-20 weight-bold">
        كل ما عليك هو ان تسجل لتستطيع التبرع في أي مشروع تريده بكل سهولة
      </p>
    </div>
    <!--  -->
    <routerLink v-slot="{ navigate }" :to="{ name: 'SignUp' }" custom>
      <button
        role="go-to-sign-up"
        class="
          bg-red-light
          btn__red-light
          radius-100
          width-276px
          text-16
          lg-text-18
          text-light
          height-50px
          margin-bottom-1rem
        "
        @click="navigate"
      >
        انشاء حساب
      </button>
    </routerLink>
    <!--  -->
    <routerLink v-slot="{ navigate }" :to="{ name: 'SignIn' }" custom>
      <button
        role="go-to-sign-in"
        class="
          border-all-red
          text-red-light
          bg-light
          btn__light
          radius-100
          width-276px
          text-16
          lg-text-18
          height-50px
          md-margin-bottom-4rem
        "
        @click="navigate"
      >
        تسجيل الدخول
      </button>
    </routerLink>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style></style>
