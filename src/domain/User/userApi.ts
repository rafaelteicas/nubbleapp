import {api} from '@api';

const PATH = 'users';

export async function getById(userId: string) {
  const response = await api.get(`${PATH}/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};
