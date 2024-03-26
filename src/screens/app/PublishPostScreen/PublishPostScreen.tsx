import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('window').width / 2;

export function PublishPostScreen({
  route,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{uri: route.params.imageUri}}
        style={{
          alignSelf: 'center',
          width: IMAGE_WIDTH,
          height: IMAGE_WIDTH,
          marginTop: 20,
        }}
      />
      <Text preset="headingSmall" mt="s32" mb="s10">
        Escreva uma legenda
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Digite aqui"
        containerProps={{borderWidth: 0}}
      />
      <Button mt="s56" title="Publicar Post" />
    </Screen>
  );
}
