import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Params<T extends {length: number}> {
  value: T;
  enabled: boolean;
  queryKey: QueryKeys;
  isAvailableFunc: (value: T) => Promise<boolean>;
}

export function useAuthIsValueAvailable<T extends {length: number}>({
  value,
  enabled,
  queryKey,
  isAvailableFunc,
}: Params<T>) {
  const debouncedValue = useDebounce(value, 1500);
  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFunc(debouncedValue),
    retry: false,
    staleTime: 2000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebounced = debouncedValue !== value;

  return {
    isFetching: isFetching || isDebounced,
    isAvailable: !!data,
    isUnavailable: data === false,
  };
}

export function useAuthIsEmailAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    enabled,
    value: email,
    queryKey: QueryKeys.IsEmailAvailable,
    isAvailableFunc: authService.isEmailAvailable,
  });
}

export function useAuthIsUsernameAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    enabled,
    value: username,
    queryKey: QueryKeys.IsUsernameAvailable,
    isAvailableFunc: authService.isUsernameAvailable,
  });
}
