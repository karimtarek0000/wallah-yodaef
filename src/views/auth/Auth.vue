<template>
  <div class="position-rel">
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
