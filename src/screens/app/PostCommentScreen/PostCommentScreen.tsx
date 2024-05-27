import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {PostComment, usePostCommentList, usePostGetById} from '@domain';
import {useAuthCredentials} from '@services';

import {Box, PostItem, Screen} from '@components';
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
  const showPost = route.params.showPost || false;
  const {list, hasNextPage, fetchNextPage} = usePostCommentList(postId);
  const {userId} = useAuthCredentials();

  const {post} = usePostGetById(postId, showPost);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={userId}
        postAuthorId={authorId}
      />
    );
  }
  return (
    <Screen
      noPaddingHorizontal
      flex={1}
      title={showPost ? 'Post' : 'Comentários'}
      paddingHorizontal="s24"
      canGoBack>
      <Box flex={1}>
        <FlatList
          data={list}
          renderItem={renderItem}
          ListHeaderComponent={
            post && <PostItem hideCommentAction post={post} />
          }
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
          contentContainerStyle={{paddingBottom: bottom}}
        />
      </Box>

      <PostCommentTextMessage postId={postId} />
    </Screen>
  );
}
