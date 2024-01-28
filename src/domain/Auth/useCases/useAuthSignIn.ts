import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';

import {mockedAuthCredentials} from './__tests__/mockedData/mocks';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: variables =>
      authService.signIn(variables.email, variables.password),
    retry: false,
    onSuccess: authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
      // authService.updateToken(authCredentials.token);
      // saveCredentials(authCredentials);
      saveCredentials(mockedAuthCredentials);
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message || 'ERRO');
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
