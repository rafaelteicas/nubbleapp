import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, usePostCommentRemove} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

import {postCommentService} from '../../../../domain/PostComment/postCommentService';

type Props = {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
};

export function PostCommentItem({
  postComment,
  postAuthorId,
  userId,
  onRemoveComment,
}: Props) {
  const {mutate} = usePostCommentRemove({onSuccess: onRemoveComment});
  const isAllowedToDelete = postCommentService.isAllowedToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate(postComment.id),
      },
      {
        text: 'Cancelar',
        onPress: () => {},
      },
    ]);
  }
  return (
    <Pressable disabled={!isAllowedToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" mb="s16">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
