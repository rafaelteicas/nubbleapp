import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss;
    },
  });
  const [message, setMessage] = useState('');
  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      placeholder="Adicione um comentário"
      onPressSend={createComment}
    />
  );
}
