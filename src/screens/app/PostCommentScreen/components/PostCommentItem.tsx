import React from 'react';

import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';

import {useToastService} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemove: () => void;
}
export function PostCommentItem({
  postComment,
  postAuthorId,
  userId,
  onRemove,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      showToast({message: 'Removido com sucesso!'});
      onRemove();
    },
  });
  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );
  console.log(postComment.author.id);
  console.log(postAuthorId);

  function confirmRemove() {
    Alert.alert('Remover comentario?', 'Voce deseja excluir o comentario?', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {`${postComment.message} \n ${postComment.createdAtRelative}`}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
