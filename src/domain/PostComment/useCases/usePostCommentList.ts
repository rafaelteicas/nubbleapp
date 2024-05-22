import {postCommentService} from '../postCommentService';
import { usePaginatedList, QueryKeys } from '@infra';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }
  return usePaginatedList([QueryKeys.PostCommentList, postId], getList);
}
