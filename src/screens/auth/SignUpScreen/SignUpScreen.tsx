import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
// import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {SignUpSchema, signUpSchema} from './signUpSchema';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: Props) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    values: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  //const {reset} = useResetNavigationSuccess();

  function submitForm({email, fullName, password, username}: SignUpSchema) {
    console.log(email, fullName, password, username);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora e so fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'greenSuccess',
    //   },
    // });
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
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Seu nome completo"
        placeholder="Nome completo"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="Seu email"
        placeholder="email@email.com"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Sua senha"
        placeholder="******"
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Criar conta"
      />
    </Screen>
  );
}
