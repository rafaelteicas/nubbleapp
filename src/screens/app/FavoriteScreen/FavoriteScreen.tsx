import React from 'react';
import {Dimensions, Image, ListRenderItemInfo, Pressable} from 'react-native';

import {PostReaction, postReactionService} from '@domain';
import {QueryKeys} from '@infra';
import {useNavigation} from '@react-navigation/native';

import {InfinityScrollList, Screen, Text} from '@components';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24 * 2;
const ITEM_MARGIN = 16;

const ITEM_WIDTH = (SCREEN_WIDTH - SCREEN_PADDING - ITEM_MARGIN) / 2;

export function FavoriteScreen() {
  const navigation = useNavigation();

  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('PostCommentScreen', {
            postId: item.postId,
            authorId: item.author.id,
            showPost: true,
          })
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
        <Text mt="s4" semiBold>
          {item.author.username}
        </Text>
      </Pressable>
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollList
        renderItem={renderItem}
        queryKey={QueryKeys.FavoriteList}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {
            columnGap: ITEM_MARGIN,
          },
          contentContainerStyle: {
            rowGap: SCREEN_PADDING / 2,
          },
        }}
        emptyListProps={{
          emptyMessage: 'Não há favoritos',
          errorMessage: 'Não foi possível carregar os favoritos',
        }}
      />
    </Screen>
  );
}
