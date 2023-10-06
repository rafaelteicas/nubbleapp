import React from 'react';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    values: {
      email: '',
    },
    mode: 'onChange',
  });
  function SubmitProps() {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Você receberá um e-mail com instruções para recuperar sua senha.',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
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
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(SubmitProps)}
      />
    </Screen>
  );
}
