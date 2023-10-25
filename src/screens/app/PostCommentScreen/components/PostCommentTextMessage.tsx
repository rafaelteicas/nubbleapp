import React, {useState} from 'react';

import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

type Props = {
  postId: number;
};

export function PostCommentTextMessage({postId}: Props) {
  const [comment, setComment] = useState<string>('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      Keyboard.dismiss();
      setComment('');
    },
  });

  return (
    <TextMessage
      placeholder="Digite um comentario"
      onPress={createComment}
      value={comment}
      onChangeText={setComment}
    />
  );
}
