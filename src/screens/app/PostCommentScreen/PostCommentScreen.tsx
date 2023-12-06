import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList} from '@domain';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {list} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <Box>
        <Text>{item.message}</Text>
      </Box>
    );
  }
  return (
    <Screen title="Comentários" canGoBack>
      <FlatList data={list} renderItem={renderItem} />
    </Screen>
  );
}
