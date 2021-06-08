<template>
  <section
    :class="[
      'd-flex  flex-wrap-wrap',
      { 'justify-content-center': !getDonationsRecordes },
      { 'justify-content-between': getDonationsRecordes },
    ]"
  >
    <!--  -->
    <p v-if="!getDonationsRecordes" class="text-22 margin-top-4rem user-select">
      لا يوجد بيانات
    </p>
    <!--  -->
    <CardDonate
      v-else
      v-for="donation in getDonationsRecordes"
      :key="donation.id"
      :data="donation"
    />
  </section>
</template>

<script>
//
import CardDonate from "@/components/CardDonate";
//
export default {
  name: "DonationsLog",
  computed: {
    getDonationsRecordes() {
      return this.$store.getters[this.$Type.GET_DONATIONS_RECORDES];
    },
  },
  components: {
    CardDonate,
  },
  created() {
    this.$store.dispatch(this.$Type.DONATIONS_RECORDS);
  },
};
</script>

<style></style>
