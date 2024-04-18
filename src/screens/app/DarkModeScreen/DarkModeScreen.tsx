import React from 'react';

import {
  ThemePreference,
  useSettingsService,
  useThemePreference,
} from '@services';

import {RadioButtonSelector, Screen, Text} from '@components';

type Options = {
  label: string;
  themePreference: ThemePreference;
  description?: string;
};

const items: Options[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistema',
    themePreference: 'system',
    description: 'A aparência será a mesma que você configurou no sistema',
  },
];

export function DarkModeScreen() {
  const themePreference = useThemePreference();
  const {setThemePreference} = useSettingsService();

  const selectedItem = items.find(
    item => item.themePreference === themePreference,
  );

  function setSelectedItem(item: Options) {
    setThemePreference(item.themePreference);
  }

  return (
    <Screen title="Modo escruto">
      <Text semiBold>Olá</Text>
      <RadioButtonSelector
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
        items={items}
        labelKey="label"
        descriptionKey="description"
        valueKey="themePreference"
      />
    </Screen>
  );
}
