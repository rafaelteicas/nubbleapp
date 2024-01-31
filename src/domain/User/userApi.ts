import {PageAPI, api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

export async function getById(userId: string) {
  const response = await api.get(`${PATH}/${userId}`);
  return response.data;
}

async function getList(search: string): Promise<PageAPI<UserAPI>> {
  const response = await api.get<PageAPI<UserAPI>>(`${PATH}`, {
    params: {search},
  });
  return response.data;
}

export const userApi = {
  getById,
  getList,
};
