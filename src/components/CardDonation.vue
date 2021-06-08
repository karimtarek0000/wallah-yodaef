<template>
  <div
    role="donation"
    class="
      card-donation
      d-flex
      align-items-center
      padding-x-1rem padding-y-2rem
      sm-basis-100
      lg-basis-49
      basis-32
      flex-shrink-0
      border-bottom
    "
  >
    <!--  -->
    <GImage src-image="other-2.svg" alt="other" />
    <!--  -->
    <div class="card-donation__info margin-start-1rem flex-grow-1">
      <p
        role="description"
        class="margin-bottom-1rem flex-shrink-0 md-text-20 text-16 weight-bold"
        v-text="data.name"
      />
      <div role="other-info" class="d-flex flex-shrink-0 align-items-center">
        <GSvg
          class="svg-20 margin-end-5px fill-gray"
          nameIcon="location"
          title="location"
        />
        <p role="location" class="md-text-18 text-14" v-text="data.address" />
      </div>
    </div>
    <!--  -->
    <BtnPrimary
      @submited="openModel"
      class="flex-shrink-0 padding-x-2rem padding-y-1rem"
      nameBtn="تبرع الان"
    />
  </div>
</template>

<script>
export default {
  name: "CardDonation",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModel() {
      // 1) - OPEN MODEL
      this.$store.commit(this.$Type.SET_STATUS_MODEL_DONATION, {
        status: true,
        icon: "balance",
        title: "أدخل المبلغ الذي تريد التبرع به",
        nameBtn: "تاكيد",
        type: "donate",
      });
      // 2) - SEND DATA TO VUEX
      this.$store.commit(this.$Type.SET_DATA_MODEL, this.data);
    },
  },
};
</script>

<style></style>
