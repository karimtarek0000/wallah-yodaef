<template>
  <div class="d-flex lg-flex-direction-column">
    <!-- Other user info -->
    <div class="xlg-basis-20 info-profile padding-x-2rem padding-bottom-1rem">
      <!-- Preview image -->
      <PreviewAndEditImage @changeImage="changeImage" :imageUser="image" />
      <!-- User name -->
      <p
        role="name-user"
        class="text-20 text-black weight-bold text-align-center"
      >
        {{ dataUser.name }}
      </p>
    </div>
    <!--  -->
    <div class="flex-grow-1">
      <!-- Pages Account and My Account -->
      <router-view
        v-bind="{ dataUser, image: newImage }"
        @dataChanged="sendNewData"
        @imageChanged="sendNewImage"
        @allDataChanged="sendAllData"
      />
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
        name: null,
        phone: null,
      },
      image: "",
      //
      newImage: "",
    };
  },
  methods: {
    //
    changeImage(file) {
      this.newImage = file;
    },
    //
    sendNewData() {
      this.$store
        .dispatch(this.$Type.UPDATE_PROFILE, this.dataUser)
        .then(() => {
          setTimeout(() => {
            this.$store.dispatch(this.$Type.SIGN_OUT);
          }, 500);
        })
        .catch(() => setTimeout(() => location.reload(), 500));
    },
    //
    sendNewImage() {
      //
      this.$store
        .dispatch(this.$Type.UPDATE_IMAGE, this.newImage)
        .then(() => setTimeout(() => location.reload(), 500))
        .catch(() => setTimeout(() => location.reload(), 500));
    },
    //
    async sendAllData() {
      //
      await this.$store.dispatch(this.$Type.UPDATE_IMAGE, this.newImage);
      await this.$store.dispatch(this.$Type.UPDATE_PROFILE, this.dataUser);
      //
      setTimeout(() => this.$store.dispatch(this.$Type.SIGN_OUT), 500);
    },
  },
  computed: {
    getProfileUser() {
      return this.$store.getters[this.$Type.GET_PROFILE_USER];
    },
  },
  components: {
    PreviewAndEditImage,
  },
  async created() {
    if (this.getProfileUser === null)
      await this.$store.dispatch(this.$Type.PROFILE_USER);
    this.dataUser.name = this.getProfileUser.name;
    this.dataUser.phone = this.getProfileUser.phone;
    this.image = this.getProfileUser.image;
  },
};
</script>

<style></style>
