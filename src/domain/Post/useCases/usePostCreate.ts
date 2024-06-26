import {MutationOptions, QueryKeys} from '@infra';
import {ImageForUpload, multimediaService} from '@services';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostCreate(options?: MutationOptions<Post>) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    Post,
    Error,
    {text: string; imageCover: ImageForUpload}
  >({
    mutationFn: ({text, imageCover}) =>
      postService.createPost(text, imageCover),
    onSuccess: post => {
      queryClient.invalidateQueries([QueryKeys.PostList]);
      if (options?.onSuccess) {
        options.onSuccess(post);
      }
    },
    onError: error => {
      console.log(error);
    },
  });

  async function createPost({
    description,
    imageUri,
  }: {
    description: string;
    imageUri: string;
  }) {
    const imageCover = await multimediaService.prepareImageForUpload(imageUri);

    mutate({
      text: description,
      imageCover,
    });
  }

  return {
    isLoading,
    isError,
    createPost,
  };
}
