import React, {useState} from 'react';
import {Dimensions, Image} from 'react-native';

import {usePostCreate} from '@domain';
import {useToastService} from '@services';

import {Button, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

const IMAGE_WIDTH = Dimensions.get('window').width / 2;

export function PublishPostScreen({
  route,
  navigation,
}: AppScreenProps<'PublishPostScreen'>) {
  const [description, setDescription] = useState('');

  const {showToast} = useToastService();

  const imageUri = route.params.imageUri;

  const {createPost, isLoading} = usePostCreate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {
        screen: 'HomeScreen',
      });
      showToast({message: 'Foto enviada com sucesso!', type: 'success'});
    },
  });

  function publishPost() {
    createPost({
      description,
      imageUri,
    });
  }

  return (
    <Screen scrollable canGoBack title="Novo Post">
      <Image
        source={{uri: imageUri}}
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
      <Button
        onPress={publishPost}
        mt="s56"
        title="Publicar Post"
        loading={isLoading}
        disabled={description.length < 1}
      />
    </Screen>
  );
}
