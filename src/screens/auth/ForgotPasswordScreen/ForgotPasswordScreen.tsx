import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {Screen, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: `Enviamos as instruções ${'\n'}para seu e-mail`,
  description:
    'Você receberá um e-mail com instruções para recuperar sua senha.',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {showToast} = useToastService();
  const {isLoading, mutate} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParams),
    onError: message => showToast({message, type: 'error'}),
  });
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    values: {
      email: '',
    },
    mode: 'onChange',
  });
  function SubmitProps(values: ForgotPasswordSchema) {
    mutate(values.email);
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        label="Email"
        name="email"
        placeholder="email@email.com"
        boxProps={{mb: 's40'}}
      />
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(SubmitProps)}
      />
    </Screen>
  );
}
