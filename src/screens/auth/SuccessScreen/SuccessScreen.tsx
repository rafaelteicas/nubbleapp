import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Text, Button, Icon} from '@components';
import {RootStackParamList} from '@routes';

type Props = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation, route}: Props) {
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" mb="s16" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        {route.params.description}
      </Text>
      <Button title="Voltar ao incio" onPress={navigation.goBack} />
    </Screen>
  );
}
