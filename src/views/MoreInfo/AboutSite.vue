<template>
  <section
    role="about-site"
    class="
      d-flex
      flex-direction-column
      align-items-center
      justify-content-center
    "
  >
    <figure role="image" class="height-60px xlg-height-90px margin-y-4rem">
      <img
        class="resize-img d-block margin-start-auto"
        src="/logo/logo.png"
        alt="logo"
      />
    </figure>
    <p
      role="description"
      class="text-20 padding-x-2rem text-align-center weight-bold"
      v-text="getPar"
    />
    <figure role="image" class="height-60px xlg-height-90px margin-y-4rem">
      <img
        class="resize-img d-block margin-start-auto"
        src="/logo/company.png"
        alt="logo"
      />
    </figure>
  </section>
</template>

<script>
export default {
  name: "AboutApp",
  computed: {
    getPar() {
      return this.$store.getters[this.$Type.GET_ABOUT_SITE];
    },
  },
  created() {
    this.$store.dispatch(this.$Type.ABOUT_SITE);
  },
};
</script>

<style></style>
