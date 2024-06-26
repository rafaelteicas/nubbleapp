import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {settingsService} from './settingsService';
import {AppColorScheme, SettingsStore, ThemePreference} from './settingsType';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      showOnboarding: true,
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
      setThemePreference: newThemePreference => {
        const updatedAppTheme =
          settingsService.onChangeThemePreference(newThemePreference);
        set({appColor: updatedAppTheme, themePreference: newThemePreference});
      },
      finishOnboarding: () => {
        set({showOnboarding: false});
      },
    }),
    {
      name: '@Settings',
      storage,
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
  'setThemePreference' | 'onSystemChange' | 'finishOnboarding'
> {
  const setThemePreference = useSettingsStore(
    state => state.setThemePreference,
  );
  const onSystemChange = useSettingsStore(state => state.onSystemChange);
  const finishOnboarding = useSettingsStore(state => state.finishOnboarding);

  return {
    setThemePreference,
    onSystemChange,
    finishOnboarding,
  };
}

export function useShowOnboarding() {
  const showOnboarding = useSettingsStore(state => state.showOnboarding);

  return showOnboarding;
}
