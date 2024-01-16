import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage/storage';

import {AuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      saveCredentials: async ac => await set({authCredentials: ac}),
      remove: async () => await set({authCredentials: null}),
      isLoading: false,
    }),
    {
      name: '@Auth',
      storage: storage,
    },
  ),
);
