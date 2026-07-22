import type { LoginResponse, LogoutResponse } from '~/types/auth';

export const authServices = {
  async login(email: string, password: string): Promise<LoginResponse> {
    return await $fetch<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: {
        email,
        password,
      },
      credentials: 'include',
    });
  },

  async logout(): Promise<LogoutResponse> {
    return await $fetch<LogoutResponse>('/api/auth/logout');
  },
};
