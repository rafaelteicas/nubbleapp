import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;
export function ScreenHeader({title, canGoBack}: Props) {
  const navigation = useNavigation();
  return (
    <Box flexDirection="row" marginBottom="s24" justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox flexDirection="row" onPress={navigation.goBack}>
          <Icon name="arrowLeft" color="primary" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && (
        <Text preset="headingSmall" bold>
          {title}
        </Text>
      )}
      {title && <Box width={20} height={20} />}
    </Box>
  );
}
