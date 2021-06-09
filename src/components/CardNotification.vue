<template>
  <div
    role="notification"
    class="
      card-donation
      d-flex
      align-items-center
      padding-x-1rem padding-y-2rem
      sm-basis-100
      basis-49
      flex-shrink-0
      border-bottom
      bg-light-1
    "
  >
    <!--  -->
    <GImage
      src-image="logo-2.svg"
      class="svg-50 margin-end-1rem"
      alt="donate"
    />
    <!--  -->
    <div>
      <p
        role="description"
        class="text-20 xlg-text-18 weight-bold text-black"
        v-text="data.data.name"
      />
      <p
        role="description"
        class="text-20 xlg-text-18 weight-bold margin-y-1rem text-black"
        v-text="data.data.data"
      />
      <p role="date" class="text-18 text-gray" v-text="data.date"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNotification",
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style></style>
