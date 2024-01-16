import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

export function toAuthCredentials(
  authCredentialsApi: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentialsApi.auth.token,
    user: userAdapter.toUser(authCredentialsApi.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
