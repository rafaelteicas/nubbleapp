import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';

export function SettingsScreen() {
  const {isLoading, signOut} = useAuthSignOut();
  return (
    <Screen canGoBack>
      <Text>Settings</Text>
      <Button loading={isLoading} title="Sair" onPress={signOut} />
    </Screen>
  );
}
