import React from 'react';
import {Image} from 'react-native';

import {useCameraRoll} from '@services';

import {Screen, Text} from '@components';

export function NewPostScreen() {
  const {list} = useCameraRoll();
  return (
    <Screen scrollable>
      <Text>NewPostScreen</Text>
      {list?.map(link => (
        <Image
          key={link}
          source={{uri: link}}
          style={{width: 100, height: 100}}
        />
      ))}
    </Screen>
  );
}
