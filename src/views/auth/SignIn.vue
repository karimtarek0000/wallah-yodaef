<template>
  <Form
    nameRender="signIn"
    nameBtn="تسجيل الدخول"
    @dataForm="signIn"
    v-bind="{ statusDisabled, statusAlert }"
  >
    <!--  -->
    <p role="question" class="text-22 xlg-text-16 margin-top-2rem">
      ليس لديك حساب ؟
      <router-link class="text-red-light weight-bold" :to="{ name: 'SignUp' }">
        انشاء حساب</router-link
      >
    </p>
    <!--  -->
  </Form>
</template>

<script>
//
export default {
  name: "SignIn",
  data() {
    return {
      statusDisabled: false,
      statusAlert: false,
    };
  },
  methods: {
    signIn(data) {
      //
      this.statusDisabled = true;
      this.statusAlert = true;
      //
      this.$store
        .dispatch(this.$Type.SIGN_IN, data)
        .then(() => {
          this.statusAlert = false;
          //
          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 700);
        })
        .catch(() => {
          this.statusDisabled = false;
          this.statusAlert = false;
        });
    },
  },
};
</script>

<style></style>
