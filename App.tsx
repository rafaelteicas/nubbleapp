import React from 'react';

import {AuthCredentialsProvider, MMKVStorage, ToastProvider} from '@services';
import {initializeStorage} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();

initializeStorage(MMKVStorage);

export default function App() {
  return (
    <AuthCredentialsProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <Router />
              <Toast />
            </QueryClientProvider>
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </AuthCredentialsProvider>
  );
}
