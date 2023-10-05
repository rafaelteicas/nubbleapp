import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        errorMessage="erro"
        label="Seu nome completo"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <TextInput label="Seu email" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Sua senha"
        placeholder="@"
        boxProps={{mb: 's48'}}
        RightComponent={<Icon name="eyeOn" />}
      />
      <Button marginTop="s48" title="Criar conta" />
    </Screen>
  );
}
