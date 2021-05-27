<template>
  <Form nameRender="forget" nameBtn="ارسال" @dataForm="forgetPassword">
    <!--  -->
    <p
      role="question"
      class="text-red-light-1 weight-bold text-20 margin-y-2rem"
      slot="par"
    >
      أدخل رقم الجوال لاسترجاع كلمة السر الخاصة بك
    </p>
  </Form>
</template>

<script>
export default {
  name: "ForgetPassword",
  methods: {
    forgetPassword(data) {
      console.log(data);
    },
  },
};
</script>

<style></style>
