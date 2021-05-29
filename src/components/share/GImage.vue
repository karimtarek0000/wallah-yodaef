<template>
  <img v-if="typeImg === 'file'" :src="`/img/${srcImage}`" :alt="alt" />
  <img v-else :src="srcImage" :alt="alt" />
</template>

<script>
export default {
  name: "GImage",
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    typeImg: {
      type: String,
      default: "file",
    },
  },
};
</script>

<style></style>
