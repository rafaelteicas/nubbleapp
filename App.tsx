import {SafeAreaView, View} from 'react-native';
import React, {Component} from 'react';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaView>
          <View style={{paddingHorizontal: 24}}>
            <Text mb="s8" preset="headingLarge">
              Olá!
            </Text>
            <Text preset="paragraphLarge" mb="s40">
              Digite seu e-mail e senha para entrar
            </Text>
            <TextInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              boxProps={{mb: 's20'}}
            />
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              RightComponent={<Icon name="eyeOn" color="gray2" />}
              boxProps={{mb: 's10'}}
            />
            <Text color="primary" preset="paragraphSmall" bold>
              Esqueci minha senha
            </Text>
            <Button mt="s48" title="Entrar" />
            <Button mt="s12" title="Entrar" preset="outline" />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

export default App;
