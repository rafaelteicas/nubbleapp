import React, {useEffect} from 'react';

import {settingsService} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {useAppColorScheme} from '@hooks';
import {Routes} from '@routes';
import {darkTheme, theme} from '@theme';

import {AuthCredentialsProvider} from './src/services/authCredentials/providers/AuthCredentialsProvider';
import {MMKVStorage} from './src/services/storage/implementation/MMKVStorage';
import {initializeStorage} from './src/services/storage/storage';

const queryClient = new QueryClient();

initializeStorage(MMKVStorage);

export function App(): JSX.Element {
  const {appColor} = useAppColorScheme();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            <Routes />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
