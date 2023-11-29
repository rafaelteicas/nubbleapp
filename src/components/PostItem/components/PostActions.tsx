import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'favoriteCount' | 'commentCount' | 'reactionCount'>;
export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
        marked
        onPress={() => {}}
      />
      <Item
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
        onPress={() => {}}
      />
      <Item
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
        onPress={() => {}}
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
}

function Item({icon, text, marked, onPress}: ItemProps) {
  return (
    <TouchableOpacityBox
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
