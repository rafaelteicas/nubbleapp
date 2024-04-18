import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

import {postCommentService} from '../../../../domain/PostComment/postCommentService';

type Props = {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
};

export function PostCommentItem({
  postId,
  postComment,
  postAuthorId,
  userId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({message: 'Comentário deletado', position: 'top'});
    },
  });
  const isAllowedToDelete = postCommentService.isAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        onPress: () => {},
      },
    ]);
  }
  return (
    <Pressable
      testID="post-comment-id"
      disabled={!isAllowedToDelete}
      onLongPress={confirmRemove}>
      <Box flexDirection="row" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
