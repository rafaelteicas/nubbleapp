import React from 'react';
import {Icon} from '../../../components/Icon/Icon';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
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
      <Button
        onPress={navigateToSignUpScreen}
        mt="s12"
        title="Criar uma conta"
        preset="outline"
      />
    </Screen>
  );
}
