import React, {Component} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Routes} from './src/routes/Routes';
import {theme} from './src/theme/theme';

export class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
