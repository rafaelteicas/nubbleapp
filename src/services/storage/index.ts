export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage;

export function initializeStorage(impl: Storage) {
  storage = impl;
}

// OPTIONS
export {MMKVStorage} from './implementation/MMKVStorage';
export {asyncStorage} from './implementation/asyncStorage';
