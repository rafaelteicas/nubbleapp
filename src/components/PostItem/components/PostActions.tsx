import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconName, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>;
export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    // TODO: Implement favorite post
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        text={reactionCount}
        icon={{default: 'heartFill', marked: 'heartFill'}}
        onPress={likePost}
      />
      <Item
        marked={false}
        text={commentCount}
        icon={{default: 'comment', marked: 'comment'}}
        onPress={navigateToComments}
      />
      <Item
        marked={false}
        text={favoriteCount}
        icon={{default: 'bookMark', marked: 'bookMarkFill'}}
        onPress={favoritePost}
      />
    </Box>
  );
}

interface ItemProps {
  text: number;
  marked: boolean;
  icon: {
    default: IconName;
    marked: IconName;
  };
  onPress: () => void;
}
function Item({icon, marked, text, onPress}: ItemProps) {
  return (
    <TouchableOpacityBox
      marginRight="s16"
      flexDirection="row"
      alignItems="center"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
