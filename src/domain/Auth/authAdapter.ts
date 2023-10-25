import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentialsApi: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsApi.auth.token,
    refreshToken: authCredentialsApi.auth.refresh_token,
    tokenExpiresAt: authCredentialsApi.auth.expires_at,
    user: userAdapter.toUser(authCredentialsApi.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
