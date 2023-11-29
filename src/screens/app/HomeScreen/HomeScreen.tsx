import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, ViewStyle} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[] | null>(null);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}

const $screen: ViewStyle = {
  paddingHorizontal: 0,
  paddingBottom: 0,
  paddingTop: 0,
};
