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
import * as Type from "@/store/Type.js";
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
      this.status = !this.$store.getters[Type.GET_TOGGLE_NOTIFI];
      this.$store.commit(Type.SET_TOGGLE_NOTIFI, this.status);
    },
  },
};
</script>

<style></style>
