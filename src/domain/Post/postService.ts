import {postApi} from './postApi';

async function getList() {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
