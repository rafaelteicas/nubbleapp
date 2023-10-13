import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <ProfileAvatar imageUrl={author.profileURL} />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}
