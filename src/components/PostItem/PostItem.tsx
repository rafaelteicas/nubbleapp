import React from 'react';
import {ListRenderItemInfo} from 'react-native';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostHeader} from './components/PostHeader';
import {PostImage} from './components/PostImage';

type Props = Pick<ListRenderItemInfo<Post>, 'item'>;

export function PostItem({item}: Props) {
  return (
    <Box paddingHorizontal="s24" key={item.id}>
      <PostHeader key={item.id} author={item.author} />
      <PostImage key={item.imageURL} imageURL={item.imageURL} />
      <PostActions
        reactionCount={item.reactionCount}
        favoriteCount={item.favoriteCount}
        commentCount={item.commentCount}
      />
      <PostBottom
        author={item.author}
        text={item.text}
        commentCount={item.commentCount}
      />
    </Box>
  );
}
