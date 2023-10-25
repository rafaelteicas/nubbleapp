import {api} from '@api';

import {UserAPI} from './userTypes';

async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`users/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};
