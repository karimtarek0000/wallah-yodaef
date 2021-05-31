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
      <p role="description" class="text-20 xlg-text-19 weight-bold text-black">
        مشروع بناء مسجد في حي شارع بن الوليد
      </p>
      <p role="date" class="text-18 text-gray">20 June</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNotification",
};
</script>

<style></style>
