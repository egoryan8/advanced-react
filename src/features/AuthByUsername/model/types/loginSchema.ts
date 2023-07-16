export interface LoginSchema {
  username: string;
  password: string;
  error?: string;
  isLoading: boolean;
}
