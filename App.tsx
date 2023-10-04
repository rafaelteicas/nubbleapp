import React from 'react';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box margin="s32" gap="s32">
        <Text preset="headingLarge">Odsalaaa</Text>
        <Button title="Entrar" />
        <Button loading title="Entrar" />
        <Button loading preset="outline" title="Entrar" />
        <Button preset="secondary" title="Entrar" />
      </Box>
    </ThemeProvider>
  );
}
