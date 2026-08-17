<script setup lang="ts">
const route = useRoute();

const loginMessages: Record<string, string> = {
  create_ad: 'Prije objave oglasa morate se logirati.',
  general: 'Za pristup ovoj stranici potrebna je prijava.',
};

const alertMessage = computed(() => {
  const messageKey = route.query.message as string;
  if (!messageKey) return null;
  return loginMessages[messageKey] || loginMessages.general;
});

const redirectTo = (route.query.redirect as string) || '/';
</script>
<template>
  <AuthLoginForm :message="alertMessage" :redirect="redirectTo" />
</template>
