export default defineNuxtRouteMiddleware((to, from) => {
  const supabaseUser = useSupabaseUser();
  if (!supabaseUser.value) {
    const reason = (to.meta.authReason as string) || 'general';
    return navigateTo({
      path: '/login',
      query: {
        message: reason,
        redirect: to.fullPath,
      },
    });
  }
});
