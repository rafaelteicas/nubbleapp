import {AuthCredentials, authService} from '@domain';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => void;
  remove: () => void;
};

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  remove,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const status = responseError.response.status;
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          remove();
          return Promise.reject();
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );

        saveCredentials(newAuthCredentials);
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );
  return () => api.interceptors.response.eject(interceptor);
}
