import {api} from '@api';

import {AxiosRequestConfig} from 'axios';

import {UserAPI} from '../User/userTypes';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  SignInData,
  SignUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn({
  email,
  password,
}: SignInData): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post('auth/register', data);
  return response.data;
}

async function isUsernameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get('auth/validate-username', {params});
  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get('auth/validate-email', {params});
  return response.data;
}

async function forgotPassword(email: string): Promise<{message: string}> {
  const response = await api.get('auth/forgot-password', {params: email});
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;
  return url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isEmailAvailable,
  isUsernameAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
