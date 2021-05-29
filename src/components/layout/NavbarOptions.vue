<template>
  <div
    role="options"
    class="
      options
      d-flex
      align-items-center
      justify-content-between
      height-60px
      xlg-height-90px
    "
  >
    <!--  -->
    <template v-if="$route.meta.head !== 'الرئيسية'">
      <GoBack :showText="false" />
      <!--  -->
      <p role="head" class="text-22 text-black weight-bold margin-start-2rem">
        {{ $route.meta.head }}
      </p>
    </template>
    <!--  -->
    <router-link :to="{ name: 'Home' }" class="height-60px xlg-height-90px">
      <img
        class="resize-img d-block margin-start-auto"
        src="/logo/logo.png"
        alt="logo"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarOptions",
};
</script>

<style lang="scss"></style>
