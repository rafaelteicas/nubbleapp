import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

interface Variables {
  email: string;
}

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const mutation = useMutation<string, Error, Variables>({
    mutationFn: variables => authService.requestNewPassword(variables.email),
    retry: false,
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message || 'ERRO');
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    requestNewPassword: (variables: Variables) => mutation.mutate(variables),
  };
}
