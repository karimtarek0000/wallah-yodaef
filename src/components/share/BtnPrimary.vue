<template>
  <button
    class="
      d-flex
      justify-content-center
      align-items-center
      btn
      bg-red-light
      text-light
      radius-100
      btn__red-light
    "
    :type="type"
    role="button"
    @click.stop="$emit('submited')"
  >
    <slot />
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

<style></style>
