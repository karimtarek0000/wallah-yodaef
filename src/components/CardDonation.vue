<template>
  <div role="donation" class="card-donation d-flex align-items-center">
    <GImage src-image="other-2.svg" alt="other" />
    <div class="card-donation__info margin-start-1rem">
      <p role="description" class="margin-bottom-1rem text-16 weight-bold">
        مشروع اكفل قرية فقيرة
      </p>
      <div role="other-info" class="d-flex align-items-center">
        <GSvg class="svg-20 fill-gray" nameIcon="location" title="location" />
        <p role="location" class="text-14">الرياض - السعودية</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDonation",
};
</script>

<style></style>
