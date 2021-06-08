<template>
  <section class="d-flex justify-content-between flex-wrap-wrap">
    <CardDonation
      v-for="donation in getDonationsShow"
      :key="donation.id"
      :data="donation"
      class="margin-bottom-2rem"
    />
  </section>
</template>

<script>
//
import CardDonation from "@/components/CardDonation";
//
export default {
  name: "Home",
  computed: {
    getDonationsShow() {
      return this.$store.getters[this.$Type.GET_DONATIONS_SHOW];
    },
  },
  components: {
    CardDonation,
  },
  created() {
    this.$store.dispatch(this.$Type.DONATIONS_SHOW);
  },
};
</script>

<style></style>
