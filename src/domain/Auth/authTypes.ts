import {User, UserAPI} from '../User/userTypes';

export interface AuthCredentials {
  user: User;
  token: string;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
  };
  user: UserAPI;
}

export interface SingInData {
  username?: string;
  email?: string;
  password?: string;
}
