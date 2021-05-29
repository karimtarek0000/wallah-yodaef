<template>
  <section
    role="my-account"
    class="d-flex position-rel lg-flex-direction-column"
  >
    <!-- Other user info -->
    <div class="xlg-basis-20 info-profile padding-x-2rem padding-bottom-1rem">
      <!-- Preview image -->
      <PreviewAndEditImage
        @changeImage="dataUser.image = $event"
        imageUser=""
        :type="type"
      />
      <!-- User name -->
      <p
        role="name-user"
        class="text-20 text-black weight-bold text-align-center"
      >
        ياسر محمد
      </p>
    </div>
    <!-- Form -->
    <FormEditAndReadOnly
      :userInfo="dataUser"
      :userImage="dataUser.image"
      @change="type = true"
    />
  </section>
</template>

<script>
import PreviewAndEditImage from "@/components/PreviewAndEditImage";
import FormEditAndReadOnly from "@/components/FormEditAndReadOnly";
//
export default {
  name: "MyAccount",
  data() {
    return {
      type: false,
      dataUser: {
        name: "karim",
        phone: "01123196715",
        oldPassword: "9999999999",
        image: null,
      },
    };
  },
  components: {
    PreviewAndEditImage,
    FormEditAndReadOnly,
  },
};
</script>

<style lang="scss">
.info-profile {
  @include BreakPoint(lg) {
    background-color: $light;
  }
}
</style>
