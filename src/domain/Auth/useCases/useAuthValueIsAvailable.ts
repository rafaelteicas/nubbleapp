import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  value: string;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFunc: (value: string) => Promise<boolean>;
}

function useAuthValueIsAvailable({
  value,
  enabled,
  queryKey,
  isAvailableFunc,
}: Param) {
  const debouncedValue = useDebounce(value);
  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    retry: false,
    queryFn: () => isAvailableFunc(debouncedValue),
    staleTime: 2000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching && isDebouncing,
  };
}

export function useAuthUsernameIsAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthValueIsAvailable({
    value: username,
    enabled,
    queryKey: QueryKeys.isUsernameAvailable,
    isAvailableFunc: authService.isUsernameAvailable,
  });
}

export function useAuthEmailIsAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthValueIsAvailable({
    value: email,
    enabled,
    queryKey: QueryKeys.isEmailAvailable,
    isAvailableFunc: authService.isEmailAvailable,
  });
}
