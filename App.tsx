import React from 'react';

import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Router />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
