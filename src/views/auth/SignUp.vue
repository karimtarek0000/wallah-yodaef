<template>
  <Form nameBtn="انشاء حساب" @dataForm="signUp">
    <!--  -->
    <p role="qustion" class="text-22 xlg-text-16 margin-top-2rem">
      هل لديك حساب ؟
      <router-link class="text-red-light weight-bold" :to="{ name: 'SignIn' }">
        تسجيل الدخول</router-link
      >
    </p>
  </Form>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    signUp(data) {
      console.log(data);
    },
  },
};
</script>

<style></style>
