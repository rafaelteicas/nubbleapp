import React from 'react';

import {Screen, Text, Button, Icon} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  navigation,
  route,
}: AuthScreenProps<'SuccessScreen'>) {
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
