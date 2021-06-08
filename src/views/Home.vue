<template>
  <section
    :class="[
      'd-flex  flex-wrap-wrap',
      { 'justify-content-center': !getDonationsShow },
      { 'justify-content-between': getDonationsShow },
    ]"
  >
    <!--  -->
    <p v-if="!getDonationsShow" class="text-22 margin-top-4rem user-select">
      لا يوجد بيانات
    </p>
    <!--  -->
    <CardDonation
      v-else
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
