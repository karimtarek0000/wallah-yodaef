<template>
  <Form
    nameRender="passwordRecovery"
    nameBtn="استرجاع كلمة المرور"
    @dataForm="passwordRecovery"
  >
    <!--  -->
    <p
      role="question"
      class="text-red-light-1 weight-bold text-20 margin-y-2rem"
      slot="par"
    >
      أدخل الكود الذي تم ارساله الى رقم الجوال الخاص بك
    </p>
  </Form>
</template>

<script>
export default {
  name: "PasswordRecovery",
  methods: {
    passwordRecovery(data) {
      console.log(data);
    },
  },
};
</script>

<style></style>
