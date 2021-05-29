<template>
  <section class="d-flex justify-content-between flex-wrap-wrap">
    <CardDonate v-for="index in 6" :key="index" />
  </section>
</template>

<script>
//
import CardDonate from "@/components/CardDonate";
//
export default {
  name: "Donation",
  components: {
    CardDonate,
  },
};
</script>

<style></style>
