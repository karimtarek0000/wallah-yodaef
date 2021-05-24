<template>
  <nav
    role="navbar"
    class="
      navbar
      xlg-basis-90px
      flex-shrink-0
      shadow
      position-rel
      lg-margin-top-auto
      align-self-center
      overflow-hidden
    "
  >
    <!--  -->
    <ul class="text-align-center d-lg-flex align-items-center bg-light-1">
      <!--  -->
      <routerLink
        v-for="item in allItems"
        :key="item.namePath"
        v-slot="{ isExactActive, isActive, navigate }"
        :to="{ name: item.namePath }"
        :exact="item.namePath == 'Home'"
        custom
      >
        <li
          :class="[
            isExactActive && 'router-exact-active',
            isActive && 'router-active',
            'cursor-pointer lg-padding-x-2rem lg-padding-y-1rem xlg-padding-y-2rem text-16 weight-bold',
          ]"
          @click="navigate"
        >
          <GSvg
            class="svg-30 fill-gray"
            :nameIcon="item.icon"
            :title="item.name"
          />

          <span v-if="item.name" class="d-block">{{ item.name }}</span>
        </li>
      </routerLink>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      allItems: [
        {
          icon: "home",
          name: "الرئيسية",
          namePath: "Home",
        },
        {
          icon: "paper",
          name: "سجل التبرعات",
          namePath: "Donation",
        },
        {
          icon: "wallet",
          name: "المحفظة",
          namePath: "Wallet",
        },
        {
          icon: "profile",
          name: "حسابي",
          namePath: "MyAccount",
        },
        {
          icon: "menu",
          namePath: "MoreInfo",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
//
.navbar {
  height: fit-content;

  //
  @include BreakPoint(lg) {
    order: 1;
  }
}
//
.router-exact-active,
.router-active {
  color: $red-light;
  background-color: lighten($gray, 20%);
  transition: all 0.5s ease;

  //
  svg {
    fill: $red-light;
    transition: fill 0.5s ease;
  }
}

//
.shadow {
  box-shadow: -4px 0px 5px #9292922e;
}
</style>
