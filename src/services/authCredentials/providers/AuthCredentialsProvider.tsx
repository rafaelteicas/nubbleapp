import React, {createContext, useEffect, useState} from 'react';

import {api} from '@api';
import {AuthCredentials, authApi, authService} from '@domain';

import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsTypes';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  remove: async () => {},
});

export function AuthCredentialsProvider({children}: React.PropsWithChildren) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        const status = responseError.response.status;
        const failedRequest = responseError.config;
        const hasNotRefreshToken = !authCredentials?.refreshToken;
        const isRefreshTokenRequest =
          authApi.isRefreshTokenRequest(failedRequest);

        if (status === 401) {
          if (
            hasNotRefreshToken ||
            isRefreshTokenRequest ||
            failedRequest.sent
          ) {
            remove();
            return Promise.reject();
          }

          failedRequest.sent = true;

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            );

          saveCredentials(newAuthCredentials);
          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
          return api(failedRequest);
        }
      },
    );
    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (e) {
      // TODO: handle Error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function remove(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, saveCredentials, isLoading, remove}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
