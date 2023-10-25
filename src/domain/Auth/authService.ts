import axios from 'axios';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';

export async function signIn(email: string, password: string) {
  try {
    const authCredentialsApi = await authApi.signIn({email, password});
    return authAdapter.toAuthCredentials(authCredentialsApi);
  } catch (error) {
    throw new Error();
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

function updateToken(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  axios.defaults.headers.common.Authorization = null;
}

async function isUsernameAvailable(username: string): Promise<boolean> {
  const response = await authApi.isUsernameAvailable({username});
  return response.isAvailable;
}

async function isEmailAvailable(email: string): Promise<boolean> {
  const response = await authApi.isEmailAvailable({email});
  return response.isAvailable;
}

async function forgotPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword(email);
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
  signUp,
  updateToken,
  removeToken,
  isUsernameAvailable,
  isEmailAvailable,
  forgotPassword,
  authenticateByRefreshToken,
};
