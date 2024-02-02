import {PageAPI, api} from '@api';

import {UserAPI} from './userTypes';

export const USER_PATH = 'users';

export async function getById(userId: string) {
  const response = await api.get(`${USER_PATH}/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${USER_PATH}`, {
    params: {search},
  });
  return response.data;
}

export const userApi = {
  getById,
  getList,
};
