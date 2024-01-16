import {AuthCredentials} from '@domain';

import {storage} from '../storage';

const AUTH_KEY = '@Auth';

async function set(ac: AuthCredentials): Promise<void> {
  await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<AuthCredentials | null> {
  const ac = await storage.getItem<AuthCredentials | null>(AUTH_KEY);
  return ac;
}

async function remove() {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {
  set,
  get,
  remove,
};
