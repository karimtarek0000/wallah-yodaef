<template>
  <div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style></style>
