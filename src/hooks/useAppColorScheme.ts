import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {useAppColor, useSettingsService} from '@services';

export function useAppColorScheme() {
  const {onSystemChange} = useSettingsService();
  const appColor = useAppColor();

  useEffect(() => {
    onSystemChange(Appearance.getColorScheme());
  }, [onSystemChange]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(preferences =>
      onSystemChange(preferences.colorScheme),
    );

    return () => {
      subscription.remove();
    };
  }, [onSystemChange]);

  return {
    appColor,
  };
}
