import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {images} from '@assets';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Button, Icon, Text} from '@components';

interface Props {
  imageUri?: string;
  width: number;
}

export function Header({imageUri, width}: Props) {
  const {navigate} = useNavigation();
  function navigateToPublishPost() {
    if (imageUri) {
      navigate('PublishPostScreen', {imageUri});
    }
  }

  return (
    <Box>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : images.imagePlaceholder}
        style={[
          {
            width,
            height: width,
          },
          styles.imageBackground,
        ]}>
        {!!imageUri && (
          <Button
            preset="ghost"
            title="Escolher essa"
            mb="s24"
            onPress={navigateToPublishPost}
          />
        )}
      </ImageBackground>
      <Box {...$optionsStyle}>
        <Text preset="headingSmall">Sua galeria</Text>
        <Icon name="camera" />
      </Box>
    </Box>
  );
}

const $optionsStyle: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingVertical: 's16',
};

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
