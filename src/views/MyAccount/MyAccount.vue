<template>
  <div class="d-flex lg-flex-direction-column">
    <!-- Other user info -->
    <div class="xlg-basis-20 info-profile padding-x-2rem padding-bottom-1rem">
      <!-- Preview image -->
      <PreviewAndEditImage
        @changeImage="dataUser.image = $event"
        imageUser=""
      />
      <!-- User name -->
      <p
        role="name-user"
        class="text-20 text-black weight-bold text-align-center"
      >
        ياسر محمد
      </p>
    </div>
    <!--  -->
    <div class="flex-grow-1">
      <!-- Pages Account and My Account -->
      <router-view :dataUser="dataUser" :image="dataUser.image" />
    </div>
  </div>
</template>

<script>
//
import PreviewAndEditImage from "@/components/PreviewAndEditImage";
//
export default {
  name: "MyAccount",
  data() {
    return {
      dataUser: {
        name: "karim",
        phone: "01123196715",
        password: "9999999999",
        image: null,
      },
    };
  },
  components: {
    PreviewAndEditImage,
  },
};
</script>

<style></style>
