import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;
export function PostBottom({author, commentCount, text}: Props) {
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text mt="s4" preset="paragraphSmall" bold color="primary">
        {getCommentText(commentCount)}
      </Text>
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 1) {
    return 'ver comentário';
  }
  if (commentCount > 1) {
    return `ver ${commentCount} comentários`;
  }
  return null;
}
