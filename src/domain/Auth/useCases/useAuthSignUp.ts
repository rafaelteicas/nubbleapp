import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {SingUpData} from '../authTypes';

export function useAuthSignUp(options?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SingUpData>({
    mutationFn: variables => authService.signUp(variables),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess;
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function signUp(signUpData: SingUpData) {
    mutation.mutate(signUpData);
  }

  return {
    signUp,
    isLoading: mutation.isLoading,
  };
}
