<template>
  <div
    role="card-donate"
    class="
      card-donation
      d-flex
      align-items-center
      padding-x-1rem padding-y-2rem
      sm-basis-100
      basis-49
      flex-shrink-0
      border-bottom
    "
  >
    <!--  -->
    <GImage src-image="logo-2.svg" class="margin-end-1rem" alt="donate" />
    <!--  -->
    <div>
      <p
        role="description"
        class="text-20 xlg-text-19 weight-bold text-black"
        v-text="data.charity"
      />
      <p class="text-18 margin-top-2rem weight-bold">
        <span class="text-red-light">المبلغ المستلم:</span>
        <span class="d-inline-block margin-x-1rem" v-text="data.cash" />
        <span>ريال</span>
      </p>
      <p class="text-18 margin-top-1rem weight-bold">
        <span class="text-red-light">المبلغ المتبقي:</span>
        <span class="d-inline-block margin-x-1rem" v-text="data.to_be_paid" />
        <span>ريال</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDonate",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
