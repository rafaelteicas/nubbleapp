import React from 'react';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text preset="headingLarge">Odsalaaa</Text>
      <Button title="Entrar" />
    </ThemeProvider>
  );
}
