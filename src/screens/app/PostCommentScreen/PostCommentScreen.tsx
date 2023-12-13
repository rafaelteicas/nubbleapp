import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, useUser} from '@domain';

import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId, authorId} = route.params;
  const {bottom} = useAppSafeArea();
  const {id} = useUser();
  const {list, hasNextPage, fetchNextPage} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={id}
        postAuthorId={authorId}
      />
    );
  }
  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListFooterComponent={
          <PostCommentBottom
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
        }
        contentContainerStyle={{paddingBottom: bottom}}
      />
      <PostCommentTextMessage postId={postId} />
    </Screen>
  );
}
