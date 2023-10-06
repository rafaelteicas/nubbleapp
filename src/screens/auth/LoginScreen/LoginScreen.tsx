import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {RootStackParamList} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: Props) {
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
    Alert.alert(`${email} e ${password}`);
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
        onPress={navigateToSignUpScreen}
        marginTop="s12"
        preset="outline"
        title="Criar conta"
      />
    </Screen>
  );
}
