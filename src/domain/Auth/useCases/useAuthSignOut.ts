import {useAuthCredentials, useSearchHistoryService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const {remove} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      remove();
      clearUserList();
    },
  });
  return {
    isLoading: mutation.isLoading,
    signOut: () => mutation.mutate(),
  };
}
