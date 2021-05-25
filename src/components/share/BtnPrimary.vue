<template>
  <button
    class="btn"
    :type="type"
    role="button"
    @click.stop="$emit('submited')"
  >
    {{ nameBtn }}
  </button>
</template>

<script>
export default {
  name: "BtnPrimary",
  props: {
    nameBtn: {
      type: String,
      default: "click",
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style>
.btn {
  /* all: unset; */
}
</style>
