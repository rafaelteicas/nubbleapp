import {apiAdapter} from '@api';
import {Page} from '@types';
import { ImageForUpload } from '@services';

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

export const postService = {
  getList,
  createPost,
};
