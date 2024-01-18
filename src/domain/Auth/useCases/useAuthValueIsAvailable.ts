import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthUsernameIsAvailable({username, enabled}: Param) {
  const debouncedUsername = useDebounce(username);
  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.isUsernameAvailable, debouncedUsername],
    retry: false,
    queryFn: () => authService.isUsernameAvailable(debouncedUsername),
    staleTime: 2000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isAvailable: data,
    isUnavailable: data === false,
    isFetching: isFetching && isDebouncing,
  };
}
