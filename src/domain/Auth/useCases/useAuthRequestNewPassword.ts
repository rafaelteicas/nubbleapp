import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const {mutate, isLoading} = useMutation<string, Error, string>({
    mutationFn: email => authService.forgotPassword(email),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
  });

  return {
    mutate,
    isLoading,
  };
}
