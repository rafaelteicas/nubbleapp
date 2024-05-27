import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Box} from '../Box/Box';
import {Button} from '../Button/Button';
import {Screen} from '../Screen/Screen';
import {Text, TextProps} from '../Text/Text';

interface PermissionManagerProps {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  children,
  description,
}: PermissionManagerProps) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <Screen flex={1} canGoBack>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text preset="headingSmall" textAlign="center" color="error">
          {description}
        </Text>
        {isLoading && <ActivityIndicator />}
        {status === 'unavailable' && (
          <Text {...$messageStyle}>
            Esse recurso não está disponível para esse dispositivo
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box>
            {Platform.OS === 'android' && (
              <Text {...$messageStyle}>
                É necessário abrir e fechar o App novamente após alterar as
                configurações
              </Text>
            )}
            <Button
              mt="s16"
              title="Abrir configurações"
              onPress={Linking.openSettings}
            />
          </Box>
        )}
      </Box>
    </Screen>
  );
}

const $messageStyle: TextProps = {
  preset: 'paragraphMedium',
  color: 'error',
  bold: true,
  marginVertical: 's16',
  textAlign: 'center',
};
