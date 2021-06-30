<template>
  <section
    :class="[
      'd-flex  flex-wrap-wrap',
      { 'justify-content-center': getDonationsShow.length === 0 },
      { 'justify-content-between': getDonationsShow.length !== 0 },
    ]"
  >
    <!--  -->
    <p
      v-if="getDonationsShow.length === 0 && !loading"
      class="text-22 margin-top-4rem user-select"
    >
      لا يوجد بيانات
    </p>
    <!--  -->
    <span
      v-show="loading && getDonationsShow.length === 0"
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
    <template v-if="getDonationsShow !== 0">
      <CardDonation
        v-for="donation in getDonationsShow"
        :key="donation.id"
        :data="donation"
        class="margin-bottom-2rem"
      />
    </template>
  </section>
</template>

<script>
//
import CardDonation from "@/components/CardDonation";
//
export default {
  name: "Home",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    getDonationsShow() {
      return this.$store.getters[this.$Type.GET_DONATIONS_SHOW];
    },
  },
  components: {
    CardDonation,
  },
  async created() {
    //
    await this.$store.dispatch(this.$Type.DONATIONS_SHOW);
    //
    this.loading = false;
    //
    this.$store.commit(this.$Type.SET_DESTROYED_HOME, false);
  },
  destroyed() {
    this.$store.commit(this.$Type.SET_DESTROYED_HOME, true);
  },
};
</script>

<style></style>
