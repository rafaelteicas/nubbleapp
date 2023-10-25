import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {signOut, isLoading} = useAuthSignOut();
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings</Text>
      <Button
        loading={isLoading}
        preset="primary"
        title="Sair"
        onPress={signOut}
      />
    </Screen>
  );
}
