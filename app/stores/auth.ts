import { defineStore } from 'pinia';
import { authServices } from '~/services/authServices';
import type { RegisterPayload } from '~/types/auth';
import type { User } from '~/types/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => user.value !== null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  async function login(email: string, password: string) {
    isLoading.value = true;
    console.log(email);
    try {
      const response = await authServices.login(email, password);
      user.value = response.user;
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
      user.value = null;
      navigateTo('/');
    }
  }

  async function register(payload: RegisterPayload) {
    isLoading.value = true;
    try {
      const response = await authServices.register(payload);
      user.value = response.user;
      navigateTo('/dashboard');
    } catch (err: any) {
      error.value = err?.statusMessage || err?.message || 'Registration failed';
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
});
