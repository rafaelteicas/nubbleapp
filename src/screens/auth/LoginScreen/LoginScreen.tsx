import React from 'react';

import {useAuthSignIn} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {showToast} = useToastService();
  const {isLoading, signIn} = useAuthSignIn({
    onError: (message: string) => showToast({message, type: 'error'}),
  });
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    values: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotSignUpScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function SubmitForm({email, password}: LoginSchema) {
    signIn({email, password});
    // Alert.alert(`${email} e ${password}`);
  }

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Ola
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        onPress={navigateToForgotSignUpScreen}>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(SubmitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        loading={isLoading}
        onPress={navigateToSignUpScreen}
        marginTop="s12"
        preset="outline"
        title="Criar conta"
      />
    </Screen>
  );
}
