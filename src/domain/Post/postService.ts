import {apiAdapter} from '@api';
import {ImageForUpload} from '@services';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageApi = await postApi.getList({page, per_page: 10});
  return apiAdapter.toPageModel(postPageApi, postAdapter.toPost);
}

async function createPost(
  text: string,
  postImage: ImageForUpload,
): Promise<Post> {
  const postApiData = await postApi.createPost(text, postImage);

  return postAdapter.toPost(postApiData);
}

async function getById(postId: number) {
  const postApiData = await postApi.getById(postId.toString());
  return postAdapter.toPost(postApiData);
}

export const postService = {
  getList,
  createPost,
  getById,
};
