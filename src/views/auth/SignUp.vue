<template>
  <Form
    nameBtn="انشاء حساب"
    @dataForm="signUp"
    v-bind="{ statusDisabled, statusAlert }"
  >
    <!--  -->
    <p role="qustion" class="text-22 xlg-text-16 margin-top-2rem">
      هل لديك حساب ؟
      <router-link class="text-red-light weight-bold" :to="{ name: 'SignIn' }">
        تسجيل الدخول</router-link
      >
    </p>
    <!--  -->
  </Form>
</template>

<script>
//
export default {
  name: "SignUp",
  data() {
    return {
      statusDisabled: false,
      statusAlert: false,
    };
  },
  methods: {
    signUp(data) {
      //
      this.statusDisabled = true;
      this.statusAlert = true;
      //
      this.$store
        .dispatch(this.$Type.REGISTER, data)
        .then(() => (this.statusAlert = false))
        .catch(() => {
          this.statusDisabled = false;
          this.statusAlert = false;
        });
    },
  },
};
</script>

<style></style>
