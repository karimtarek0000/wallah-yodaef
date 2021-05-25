<template>
  <div role="options" class="options height-9rem">
    <!--  -->
    <router-link :to="{ name: 'Home' }" class="height-9rem">
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
