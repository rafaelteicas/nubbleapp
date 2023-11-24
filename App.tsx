import React, {Component} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUpScreen} from './src/screens/app/SignUpScreen/SignUpScreen';

export class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <SignUpScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}

export default App;
