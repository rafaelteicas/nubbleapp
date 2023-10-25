import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isError, isLoading, isFetching, refetch} = useQuery({
    queryKey: [useUserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 10,
  });

  return {
    user: data,
    isError,
    isLoading,
    isFetching,
    refetch,
  };
}
