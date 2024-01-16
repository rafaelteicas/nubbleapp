import {useContext} from 'react';

import {AuthCredentialsService} from './authCredentialsTypes';
import {AuthCredentialsContext} from './providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }
  return context;
}

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       saveCredentials: async ac => await set({authCredentials: ac}),
//       remove: async () => await set({authCredentials: null}),
//       isLoading: false,
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
