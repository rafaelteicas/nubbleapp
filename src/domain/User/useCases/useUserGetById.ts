import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  // const [user, setUser] = useState<User | null>(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<boolean | null>(null);

  const {data, isLoading, isFetching, isError, refetch} = useQuery({
    queryKey: [QueryKeys.UseUserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30,
  });

  // const getUserById = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const _user = await userService.getById(id);
  //     setUser(_user);
  //   } catch (err) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   getUserById();
  // }, [getUserById]);

  return {
    user: data,
    isLoading,
    isFetching,
    isError,
    refetch,
  };
}
