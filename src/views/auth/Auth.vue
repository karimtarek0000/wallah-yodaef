<template>
  <div class="position-rel height-100 overflow-auto">
    <Alert />
    <!--  -->
    <router-view :key="$route.path" />
  </div>
</template>

<script>
//
import Alert from "@/components/Alert";
//
export default {
  name: "Auth",
  components: {
    Alert,
  },
};
</script>

<style></style>
