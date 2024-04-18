import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService';
import {AppColorScheme, SettingsStore, ThemePreference} from './settingsType';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      appColor: 'light',
      themePreference: 'system',
      onSystemChange: color => {
        const updatedAppTheme = settingsService.onSystemChange(
          color,
          get().themePreference,
        );
        if (updatedAppTheme) {
          set({appColor: updatedAppTheme});
        }
      },
      setThemePreference: () => {
        const currentThemePreference = get().themePreference;
        const updatedAppTheme = settingsService.onChangeThemePreference(
          currentThemePreference,
        );
        set({appColor: updatedAppTheme});
      },
    }),
    {
      name: '@SettingsStore',
      storage: storage,
    },
  ),
);

export function useAppColor(): AppColorScheme {
  const userList = useSettingsStore(state => state.appColor);
  return userList;
}

export function useThemePreference(): ThemePreference {
  const userList = useSettingsStore(state => state.themePreference);
  return userList;
}

export function useSettingsService(): Pick<
  SettingsStore,
  'setThemePreference' | 'onSystemChange'
> {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );
  const onSystemChange = useSettingsStore(state => state.onSystemChange);

  return {
    setThemePreference,
    onSystemChange,
  };
}
