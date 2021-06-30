<template>
  <figure
    class="d-flex align-items-center border-all-red radius-100 md-flex-grow-1"
  >
    <GSvg
      class="svg-22 fill-red-light cursor-pointer margin-start-1rem"
      nameIcon="search"
      title="الاشعارات"
    />
    <!--  -->
    <input
      type="text"
      class="text-18 padding-y-1rem padding-x-2rem flex-grow-1"
      v-model="searchData"
      @focus="focus"
      @blur="blur"
      placeholder="ادخل ما تريد البحث عنه..."
    />
    <span
      v-show="searchData"
      @click.stop="resetSearch"
      class="text-25 d-block margin-start-auto margin-end-2rem cursor-pointer"
      >&times;</span
    >
  </figure>
</template>

<script>
import debounce from "lodash.debounce";
//
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    //
    searchData: {
      get() {
        return this.search;
      },
      set(val) {
        this.search = val;
        this.SEARCH(val);
      },
    },
    //
    statusDestroyedHome() {
      return this.$store.state.Pages.destroyedHome;
    },
  },
  methods: {
    SEARCH: debounce(function (val) {
      this.$store.dispatch(this.$Type.SEARCH, val);
    }, 700),
    //
    EMIT(emit) {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) this.$emit(emit);
    },
    //
    focus() {
      this.EMIT("focused");
    },
    //
    blur() {
      this.EMIT("blured");
    },
    //
    resetSearch() {
      this.search = "";
      this.$store.dispatch(this.$Type.SEARCH);
    },
  },
  watch: {
    statusDestroyedHome(n) {
      if (n) this.search = "";
    },
  },
};
</script>

<style></style>
