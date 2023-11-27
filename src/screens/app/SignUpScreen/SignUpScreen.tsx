/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Controller, useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpFormType) {
    console.log(formValues);

    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <FormTextInput
        name="username"
        control={control}
        rules={{required: 'O username é obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        name="fullName"
        control={control}
        rules={{required: 'O nome é obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        name="email"
        control={control}
        rules={{
          required: 'O email é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />
      <FormPasswordInput
        name="password"
        control={control}
        rules={{
          required: 'A senha é obrigatória',
          minLength: {
            value: 8,
            message: 'O mínimo é 8',
          },
        }}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's16'}}
      />
      <Button
        disabled={!formState.isValid}
        mt="s48"
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
