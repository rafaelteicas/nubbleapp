import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {error, loading, postList, refresh, fetchNextPage} = usePostList();

  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList?.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        ListEmptyComponent={
          <HomeEmpty loading={loading} refetch={refresh} error={error} />
        }
      />
    </Screen>
  );
}

const $screen: ViewStyle = {
  paddingHorizontal: 0,
  paddingBottom: 0,
  paddingTop: 0,
  flex: 1,
};
