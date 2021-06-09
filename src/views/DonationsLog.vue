<template>
  <section
    :class="[
      'd-flex  flex-wrap-wrap',
      { 'justify-content-center': getDonationsRecordes.length === 0 },
      { 'justify-content-between': getDonationsRecordes.length !== 0 },
    ]"
  >
    <!--  -->
    <p
      v-if="getDonationsRecordes.length === 0 && !loading"
      class="text-22 margin-top-4rem user-select"
    >
      لا يوجد بيانات
    </p>
    <!--  -->
    <span
      v-show="loading && getDonationsRecordes.length === 0"
      class="
        d-block
        width-3rem
        height-3rem
        radius-circle
        border-loading-2
        margin-end-1rem margin-top-4rem
        loading
      "
    ></span>
    <!--  -->
    <template v-if="getDonationsRecordes.length !== 0">
      <CardDonate
        v-for="donation in getDonationsRecordes"
        :key="donation.id"
        :data="donation"
      />
    </template>
  </section>
</template>

<script>
//
import CardDonate from "@/components/CardDonate";
//
export default {
  name: "DonationsLog",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    getDonationsRecordes() {
      return this.$store.getters[this.$Type.GET_DONATIONS_RECORDES];
    },
  },
  components: {
    CardDonate,
  },
  async created() {
    await this.$store.dispatch(this.$Type.DONATIONS_RECORDS);
    this.loading = false;
  },
};
</script>

<style></style>
