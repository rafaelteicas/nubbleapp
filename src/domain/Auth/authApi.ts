import {api} from '@api';

import {AuthCredentialsAPI} from './authTypes';

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

export const authApi = {
  signIn,
  signOut,
};
