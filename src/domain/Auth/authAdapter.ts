import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

export function toAuthCredentials(
  authCredentialsApi: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsApi.auth.token,
    user: userAdapter.toUser(authCredentialsApi.user),
    refreshToken: authCredentialsApi.auth.refreshToken,
    expires_at: authCredentialsApi.auth.expires_at,
  };
}

export const authAdapter = {
  toAuthCredentials,
};
