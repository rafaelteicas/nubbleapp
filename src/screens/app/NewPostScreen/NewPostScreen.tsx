import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 4;
const NUM_COLUMNS = 4;

export function NewPostScreen() {
  const [selectedImage, setSelectedImage] = useState('');
  const {photoList, fetchNextPage} = useCameraRoll(true, setSelectedImage);

  const flatListRef = useRef<FlatList>(null);

  function onSelectImage(item: string) {
    setSelectedImage(item);
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }

  function renderItem({item}: ListRenderItemInfo<string>) {
    return (
      <Pressable onPress={() => onSelectImage(item)}>
        <Image
          source={{uri: item}}
          style={{width: ITEM_WIDTH, height: ITEM_WIDTH}}
        />
      </Pressable>
    );
  }

  return (
    <Screen canGoBack noPaddingHorizontal title="Novo post">
      <FlatList
        ref={flatListRef}
        data={photoList}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        ListHeaderComponent={
          <Header imageUri={selectedImage} width={SCREEN_WIDTH} />
        }
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.3}
      />
    </Screen>
  );
}
