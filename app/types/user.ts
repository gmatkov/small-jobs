type UserRole = 'client' | 'provider';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
};
