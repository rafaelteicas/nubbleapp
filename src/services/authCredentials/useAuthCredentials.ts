import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsTypes';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  saveCredentials: async ac => await set({authCredentials: ac}),
  remove: async () => await set({authCredentials: null}),
  isLoading: false,
}));
