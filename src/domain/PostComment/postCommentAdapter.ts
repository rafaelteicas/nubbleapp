import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    created_at: postCommentApi.created_at,
    author: {
      id: postCommentApi.user.id,
      name: postCommentApi.user.full_name,
      userName: postCommentApi.user.username,
      profileURL: postCommentApi.user.profile_url,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
