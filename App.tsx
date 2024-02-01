import React, {Component} from 'react';

// import {
//   AuthCredentialsProvider,
//   initializeStorage,
//   mmkvStorage,
// } from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Routes} from '@routes';
import {theme} from '@theme';

import {AuthCredentialsProvider} from './src/services/authCredentials/providers/AuthCredentialsProvider';
import {MMKVStorage} from './src/services/storage/implementation/MMKVStorage';
import {initializeStorage} from './src/services/storage/storage';

const queryClient = new QueryClient();

initializeStorage(MMKVStorage);

export class App extends Component {
  render() {
    return (
      <AuthCredentialsProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <ThemeProvider theme={theme}>
              <Routes />
              <Toast />
            </ThemeProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </AuthCredentialsProvider>
    );
  }
}

export default App;
