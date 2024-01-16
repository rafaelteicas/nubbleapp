import React, {Component} from 'react';

import {AuthCredentialsProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Routes} from './src/routes/Routes';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();

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
