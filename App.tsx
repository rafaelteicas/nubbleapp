import {SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <Text preset="headingLarge">Ola</Text>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

export default App;
