import {User, UserAPI} from '@domain';

export type AuthCredentials = {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
};

export type FieldIsAvailableAPI = {
  message: string;
  isAvailable: boolean;
};

export type AuthCredentialsAPI = {
  auth: {
    type: string;
    token: string;
    refresh_token: string;
    expires_at: string;
  };
  user: UserAPI;
};

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
