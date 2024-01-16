import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SingUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const response = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(response);
  } catch (e) {
    throw new Error('E-mail ou senha inválidos');
  }
}

async function signOut() {
  return authApi.signOut();
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function signUp(signUpSchema: SingUpData): Promise<void> {
  authApi.signUp(signUpSchema);
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp,
};
