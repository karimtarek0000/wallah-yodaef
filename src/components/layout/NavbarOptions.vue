<template>
  <div
    role="options"
    :class="[
      'options d-flex align-items-center  height-60px xlg-height-90px',
      {
        'justify-content-center': $route.meta.head === 'المزيد',
      },
      {
        'justify-content-between': $route.meta.head !== 'المزيد',
      },
    ]"
  >
    <Search v-show="$route.meta.head === 'الرئيسية'" />
    <!--  -->
    <template v-if="renderEl">
      <!--  -->
      <GoBack :showText="false" />
      <!--  -->
      <p role="head" class="text-22 text-black weight-bold margin-start-2rem">
        {{ $route.meta.head }}
      </p>
    </template>
    <!--  -->
    <router-link :to="{ name: 'Home' }" class="height-60px xlg-height-90px">
      <img
        class="resize-img d-block margin-start-auto"
        src="/logo/logo.png"
        alt="logo"
      />
    </router-link>
    <!--  -->
    <Notifi v-show="$route.meta.head === 'الرئيسية'" />
  </div>
</template>

<script>
import Notifi from "@/components/Options/Notifi";
import Search from "@/components/Options/Search";
//
export default {
  name: "NavbarOptions",
  computed: {
    renderEl() {
      return (
        this.$route.meta.head !== "الرئيسية" &&
        this.$route.meta.head !== "المزيد"
      );
    },
  },
  components: {
    Notifi,
    Search,
  },
};
</script>

<style lang="scss"></style>
