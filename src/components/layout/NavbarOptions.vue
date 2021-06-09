<template>
  <div
    role="options"
    :class="[
      'options d-flex align-items-center  height-60px xlg-height-90px',
      {
        'justify-content-center': ifHeadMore,
      },
      {
        'justify-content-between': !ifHeadMore,
      },
    ]"
  >
    <!--  -->
    <Search
      :class="{ 'order-0': ifHeadHome }"
      @focused="hide = false"
      @blured="hide = true"
      v-show="ifHeadHome"
    />
    <!--  -->
    <template v-if="!ifHeadHome && !ifHeadMore">
      <!--  -->
      <GoBack :showText="false" />
      <!--  -->
      <p
        role="head"
        class="text-22 text-black weight-bold margin-start-2rem"
        v-text="getHead"
      />
    </template>
    <!--  -->
    <router-link
      v-show="hide"
      :to="{ name: 'Home' }"
      :class="['height-60px xlg-height-90px', { 'order--1': ifHeadHome }]"
    >
      <img
        class="resize-img d-block margin-x-1rem"
        src="/logo/logo.png"
        alt="logo"
      />
    </router-link>
    <!--  -->
    <Notifi class="xlg-margin-start-auto" v-show="ifHeadHome && hide" />
  </div>
</template>

<script>
import Notifi from "@/components/Options/Notifi";
import Search from "@/components/Options/Search";
//
export default {
  name: "NavbarOptions",
  data() {
    return {
      hide: true,
    };
  },
  computed: {
    getHead() {
      return this.$route.meta.head;
    },
    ifHeadHome() {
      return this.$route.meta.head === "الرئيسية";
    },
    ifHeadMore() {
      return this.$route.meta.head === "المزيد";
    },
  },
  components: {
    Notifi,
    Search,
  },
};
</script>

<style lang="scss">
.order {
  //
  &--1 {
    order: -1;
  }
  //
  &-0 {
    order: 0;
  }
}
</style>
