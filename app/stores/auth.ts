import { defineStore } from 'pinia';
import { authServices } from '~/services/authServices';
import type { RegisterPayload } from '~/types/auth';
import type { User } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const supabaseUser = useSupabaseUser();
    const supabase = useSupabaseClient();

    const user = computed<User | null>(
      () => supabaseUser.value as unknown as User,
    );
    const isAuthenticated = computed(() => supabaseUser.value !== null);
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    console.log(user, 'supa user');

    async function login(email: string, password: string) {
      isLoading.value = true;
      console.log(email);
      try {
        await authServices.login(email, password);
      } catch (err: any) {
        error.value = err?.statusMessage || 'Prijava neuspjesna';
      } finally {
        isLoading.value = false;
      }
    }

    async function logout() {
      try {
        await authServices.logout();
      } catch (error) {
        console.log('Logout failed', error);
      } finally {
        supabaseUser.value = null;
        console.log(isAuthenticated.value, 'is auth');
        navigateTo('/');
      }
    }

    async function register(payload: RegisterPayload) {
      isLoading.value = true;
      try {
        const response = await authServices.register(payload);
        // user.value = response.user;
        navigateTo('/dashboard');
      } catch (err: any) {
        error.value =
          err?.statusMessage || err?.message || 'Registration failed';
      } finally {
        isLoading.value = false;
      }
    }

    return {
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
      error,
    };
  },
  // {
  //   persist: {
  //     storage: piniaPluginPersistedstate.localStorage(),
  //     paths: ['user'],
  //   },
  // } as any,
);
