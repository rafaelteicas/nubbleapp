import React from 'react';

import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';
import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';


type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;
export function PostBottom({author, commentCount, text, id}: Props) {
  const {navigate} = useNavigation();
  function navigateToPostCommentScreen() {
    navigate('PostCommentScreen', {
      postId: id,
      authorId: author.id,
    });
  }
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <Text
        mt="s4"
        preset="paragraphSmall"
        bold
        color="primary"
        onPress={navigateToPostCommentScreen}>
        {getCommentText(commentCount)}
      </Text>
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 1) {
    return 'ver comentário';
  }
  if (commentCount > 1) {
    return `ver ${commentCount} comentários`;
  }
  return null;
}
