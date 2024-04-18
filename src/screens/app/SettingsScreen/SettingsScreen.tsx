import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Separator} from '@components';
import {AppScreenProps} from '@routes';

import {MenuItem, MenuItemProps} from './components/MenuItem';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSignOut();

  const items: MenuItemProps[] = [
    {
      label: 'Termos de uso',
      onPress: () => {},
    },
    {
      label: 'Políticas de privacidade',
      onPress: () => {},
    },
    {
      label: 'Modo escuro',
      onPress: () => navigation.navigate('DarkModeScreen'),
    },
  ];

  function renderItem({item}: ListRenderItemInfo<MenuItemProps>) {
    return <MenuItem {...item} />;
  }

  return (
    <Screen title="Configurações" canGoBack>
      <FlatList
        data={items}
        bounces={false}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={
          <Button mt="s48" loading={isLoading} title="Sair" onPress={signOut} />
        }
      />
    </Screen>
  );
}
