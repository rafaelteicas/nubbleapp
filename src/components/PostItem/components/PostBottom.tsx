import React from 'react';

import {Post} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {Box, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;
export function PostBottom({author, text, commentCount, id}: Props) {
  const navigation = useNavigation();
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      <TouchableOpacityBox
        onPress={() =>
          navigation.navigate('PostCommentScreen', {
            postId: id,
          })
        }>
        <Text mt="s12" mb="s24" preset="paragraphSmall" color="primary" bold>
          {getCommentText(commentCount)}
        </Text>
      </TouchableOpacityBox>
    </Box>
  );
}
function getCommentText(commentCount: number): string | null {
  switch (commentCount) {
    case 0:
      return null;
    case 1:
      return 'ver comentario';
    default:
      return `ver ${commentCount} comentarios`;
  }
}
