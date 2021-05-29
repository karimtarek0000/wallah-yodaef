<template>
  <div
    class="
      height-100vh
      d-flex
      flex-direction-column
      align-items-center
      justify-content-center
    "
  >
    <figure class="width-40rem height-30vh">
      <img
        class="resize-img d-block margin-x-auto"
        src="/logo/logo.png"
        alt="logo"
      />
    </figure>
    <!--  -->
    <h1 role="head" class="text-120 text-red-light weight-bold">404</h1>
    <!--  -->
    <p
      role="description"
      class="
        text-22 text-align-center
        weight-bold
        margin-bottom-2rem
        padding-x-1rem
      "
    >
      هذه الصفحة غير موجودة في الموقع ولكن لا داعي للقلق فقط اضغط الزرار ادناه
      وانتقل الى الصفحه الرئيسية
    </p>
    <!--  -->
    <router-link
      class="
        text-20
        bg-red-light
        text-light
        radius-100
        btn__red-light
        margin-top-2rem
        padding-x-2rem padding-y-1rem
      "
      :to="{ name: 'Home' }"
      >اذهب الي الصفحة الرئيسية</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
