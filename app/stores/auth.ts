import { defineStore } from 'pinia';
import { authServices } from '~/services/authServices';
import type { User } from '~/types/user';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => user.value !== null);
  const isLoading = ref(false);

  async function login(email: string, password: string) {
    isLoading.value = true;
    console.log(email);
    try {
      const response = await authServices.login(email, password);
      user.value = response.user;
      console.log(user.value);
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

  async function register(user: User) {
    
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
});
