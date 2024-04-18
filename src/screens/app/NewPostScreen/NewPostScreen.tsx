import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

import {useMultimediaGetPhotos, usePermission} from '@services';

import {PermissionManager, Screen} from '@components';

import {Header} from './components/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 4;
const NUM_COLUMNS = 4;

export function NewPostScreen() {
  const permission = usePermission('camera');
  const [selectedImage, setSelectedImage] = useState<string>();
  const {photoList, fetchNextPage} = useMultimediaGetPhotos(
    permission.status === 'granted',
    setSelectedImage,
  );

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
    <PermissionManager
      permissionName={'camera'}
      description="Permita o nubble acessar as imagens da sua galeria!">
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
    </PermissionManager>
  );
}
