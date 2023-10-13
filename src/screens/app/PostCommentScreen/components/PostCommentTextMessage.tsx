import React, {useState} from 'react';

import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

type Props = {
  postId: number;
  onAddComment: () => void;
};

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [comment, setComment] = useState<string>('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      Keyboard.dismiss();
      setComment('');
      onAddComment();
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
