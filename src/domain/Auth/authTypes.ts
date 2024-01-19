import {User, UserAPI} from '../User/userTypes';

export interface AuthCredentials {
  user: User;
  token: string;
  refreshToken: string;
  expires_at: string;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
    refreshToken: string;
    expires_at: string;
  };
  user: UserAPI;
}

export interface SingInData {
  username?: string;
  email?: string;
  password?: string;
}

export interface SingUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SingUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParam {
  email: string;
}
