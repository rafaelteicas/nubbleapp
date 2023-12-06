import React from 'react';

import {PostComment} from '@domain';

import {Box, Text} from '@components';

type Props = {
  postComment: PostComment;
};

export function PostCommentItem({postComment}: Props) {
  return (
    <Box>
      <Text>{postComment.message}</Text>
    </Box>
  );
}
