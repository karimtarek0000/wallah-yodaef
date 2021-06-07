<template>
  <section
    role="terms"
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
      class="text-20 padding-x-2rem weight-bold text-align-center"
      v-text="getPar"
    />
  </section>
</template>

<script>
export default {
  name: "Terms",
  computed: {
    getPar() {
      return this.$store.getters[this.$Type.GET_TERMS];
    },
  },
  created() {
    this.$store.dispatch(this.$Type.TERMS);
  },
};
</script>

<style></style>
