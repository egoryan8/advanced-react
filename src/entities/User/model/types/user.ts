export interface User {
  username: string;
  id: string;
}

export interface UserSchema {
  authData?: User;
}
