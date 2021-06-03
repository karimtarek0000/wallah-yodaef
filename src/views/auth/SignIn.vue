<template>
  <Form nameRender="signIn" nameBtn="تسجيل الدخول" @dataForm="signIn">
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
export default {
  name: "SignIn",
  methods: {
    signIn(data) {
      this.$store.dispatch("signIn", data);
    },
  },
};
</script>

<style></style>
