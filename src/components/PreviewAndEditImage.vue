<template>
  <div
    class="
      upload-view
      d-flex
      flex-direction-column
      justify-content-center
      align-items-center
      padding-y-1rem
    "
  >
    <div>
      <div class="position-rel">
        <!--  -->
        <figure
          class="
            height-13rem
            width-13rem
            radius-circle
            overflow-hidden
            border-light-1
          "
        >
          <!-- Show image from api -->
          <template v-if="type">
            <img ref="image" src="/img/test.jpg" class="resize-img" />
          </template>
          <!-- Show image when user selected image -->
          <template v-else>
            <img class="resize-img" src="/img/test.jpg" />
          </template>
        </figure>
        <!--  -->
        <label
          v-if="type"
          for="file"
          class="
            d-flex
            align-items-center
            justify-content-center
            upload
            position-abs
            bg-light-1
            width-5rem
            height-5rem
            radius-circle
            cursor-pointer
            shadow-upload
          "
        >
          <GSvg class="svg-20 fill-red-light" nameIcon="add" title="add" />
        </label>
        <!--  -->
        <input
          @change="uploadImage"
          accept="image/*"
          class="d-none"
          id="file"
          type="file"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewAndEditImage",
  props: {
    imageUser: {
      type: String,
      required: false,
    },
    type: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    uploadImage(e) {
      const dateImage = e.target.files[0];
      this.$refs.image.src = URL.createObjectURL(dateImage);
      //
      this.$emit("changeImage", dateImage);
    },
  },
};
</script>

<style lang="scss">
.upload {
  @include position("lb", $moveB: 0px, $moveL: 0px);
}
</style>
