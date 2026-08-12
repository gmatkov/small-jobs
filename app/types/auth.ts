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

export type RegisterResponse = {
  user: User;
};

export type RegisterPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  postalCode: string;
};
