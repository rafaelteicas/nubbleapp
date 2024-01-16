import {api} from '@api';

import {UserAPI} from '../User/userTypes';

import {AuthCredentialsAPI, SingUpDataAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get('profile/logout');
  return response.data;
}

async function signUp(data: SingUpDataAPI): Promise<UserAPI> {
  const response = await api.post('profile/logout', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
