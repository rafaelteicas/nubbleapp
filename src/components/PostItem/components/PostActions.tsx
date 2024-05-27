import React from 'react';

import {Post, useReactToPost} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};
export function PostActions({post, hideCommentAction}: Props) {
  const navigation = useNavigation();
  const likeReactions = useReactToPost({
    post,
    postReactionType: 'like',
  });
  const favoriteReactions = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComments() {
    navigation.navigate('PostCommentScreen', {
      postId: post.id,
      authorId: post.author.id,
    });
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={likeReactions.reactionCount}
        marked={likeReactions.hasReacted}
        onPress={likeReactions.reactToPost}
      />
      <Item
        disabled={hideCommentAction}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={post.commentCount}
        onPress={navigateToComments}
      />
      <Item
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        marked={favoriteReactions.hasReacted}
        text={favoriteReactions.reactionCount}
        onPress={favoriteReactions.reactToPost}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked?: boolean;
  disabled?: boolean;
}

function Item({icon, text, marked, onPress, disabled}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disabled}
      alignItems="center"
      flexDirection="row"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'marked' : undefined}
        size={20}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" ml="s4" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
