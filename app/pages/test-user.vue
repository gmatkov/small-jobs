<script lang="ts" setup>
const user = useSupabaseUser();
</script>

<template>
  <diV>
    <pre>{{ user }}</pre>
  </diV>
</template>
