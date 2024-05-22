import { useMutation, useQueryClient} from '@tanstack/react-query';
import {postCommentService} from '../postCommentService';
import { QueryKeys, MutationOptions } from '@infra';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();
  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries([QueryKeys.PostCommentList, postId]);
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'ERRO');
      }
    },
  });
  // return useMutation<number, string>(
  //   postCommentId => postCommentService.remove(postCommentId),
  //   options,
  // );

  return {
    mutate: mutation.mutate,
  };
}
