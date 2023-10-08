import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: simular a api
  return postListMock;
}

export const postApi = {
  getList,
};
