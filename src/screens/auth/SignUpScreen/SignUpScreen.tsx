import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormPasswordInput,
  FormTextInput,
  ActivityIndicator,
} from '@components';

import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';
import {useAsyncValidation} from './useAsyncValidation';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora e so fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'greenSuccess',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {isLoading, signUp} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
  });
  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const {emailValidation, usernameValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  function submitForm(formValues: SignUpSchema) {
    signUp(formValues);
  }
  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
        errorMessage={usernameValidation.errorMessage}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" color="backgroundContrast" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        label="Seu nome"
        placeholder="Nome"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Seu sobrenome"
        placeholder="Sobrenome"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="Seu email"
        placeholder="email@email.com"
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" color="backgroundContrast" />
          ) : undefined
        }
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Sua senha"
        placeholder="******"
      />

      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          emailValidation.notReady ||
          emailValidation.notReady
        }
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Criar conta"
      />
    </Screen>
  );
}
