import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AuthStackParamList} from 'src/routes/AuthStack';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <FormTextInput
        name="username"
        control={control}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        name="firstName"
        control={control}
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        name="lastName"
        control={control}
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />
      <FormPasswordInput
        name="password"
        control={control}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's16'}}
      />
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        mt="s48"
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
