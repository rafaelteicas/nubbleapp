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

async function isUsernameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailNameAvailable({email});
  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(acAPI);
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp,
  isUsernameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
