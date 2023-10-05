import React from 'react';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Ola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha
      </Text>
      <TextInput
        errorMessage="Erro"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" />}
      />
      <Text color="primary" preset="paragraphSmall" bold>
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button marginTop="s12" preset="outline" title="Criar conta" />
    </Screen>
  );
}
