import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number, enabled: boolean) {
  const {data, isLoading, isFetching, isError, refetch} = useQuery({
    queryKey: [QueryKeys.UseUserGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30,
    enabled,
  });

  return {
    post: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
