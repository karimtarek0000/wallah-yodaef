<template>
  <section class="d-flex justify-content-between flex-wrap-wrap">
    <CardDonation v-for="index in 3" :key="index" class="margin-bottom-2rem" />
  </section>
</template>

<script>
//
import CardDonation from "@/components/CardDonation";
//
export default {
  name: "Home",
  components: {
    CardDonation,
  },
};
</script>

<style></style>
