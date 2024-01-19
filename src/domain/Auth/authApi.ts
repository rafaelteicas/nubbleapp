import {api} from '@api';

import {UserAPI} from '../User/userTypes';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SingUpDataAPI,
} from './authTypes';

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params: params,
    },
  );
  return response.data;
}

async function isEmailNameAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params: params,
    },
  );
  return response.data;
}

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get('auth/profile/logout');
  return response.data;
}

async function signUp(data: SingUpDataAPI): Promise<UserAPI> {
  const response = await api.post('auth/profile/logout', data);
  return response.data;
}

async function forgotPassword(
  params: ForgotPasswordParam,
): Promise<{message: string}> {
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post('auth/refresh-token', {refreshToken: token});
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailNameAvailable,
  forgotPassword,
  refreshToken,
};
