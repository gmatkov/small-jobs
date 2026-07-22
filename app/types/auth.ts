import type { User } from './user';

export type LoginResponse = {
  user: User;
};

export type LogoutResponse = {
  success: boolean;
  message: string;
};

export type CurrentUserResponse = {
  user: User | null;
};
