import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator, Screen, Text, Button, Box} from '@components';

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
    <Screen flex={1} justifyContent="center" alignItems="center">
      <Text preset="headingSmall" textAlign="center" color="error">
        {description}
      </Text>
      {isLoading && <ActivityIndicator />}
      {status === 'never_ask_again' && (
        <Box>
          {Platform.OS === 'android' && (
            <Text
              preset="paragraphMedium"
              color="error"
              bold
              marginVertical="s16"
              textAlign="center">
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
    </Screen>
  );
}
