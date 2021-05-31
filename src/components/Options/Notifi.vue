<template>
  <figure @click.stop="toggleNotifi">
    <GSvg
      class="svg-40 fill-black cursor-pointer"
      nameIcon="notifications"
      title="الاشعارات"
    />
  </figure>
</template>

<script>
//
export default {
  name: "Notifi",
  data() {
    return {
      status: false,
    };
  },
  methods: {
    toggleNotifi() {
      this.status = !this.$store.getters.getToggleNotifi;
      this.$store.commit("setToggleNotifi", this.status);
    },
  },
};
</script>

<style></style>
