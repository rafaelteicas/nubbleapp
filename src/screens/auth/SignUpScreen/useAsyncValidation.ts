import {useAuthEmailIsAvailable, useAuthUsernameIsAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

interface Props {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
}

interface ReturnValues {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
}

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const userNameQuery = useAuthUsernameIsAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthEmailIsAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: userNameQuery.isUnavailable
        ? 'Username não disponível'
        : undefined,
      notReady: userNameQuery.isUnavailable || userNameQuery.isFetching,
      isFetching: userNameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'Email não disponível'
        : undefined,
      notReady: emailQuery.isUnavailable || emailQuery.isFetching,
      isFetching: emailQuery.isFetching,
    },
  };
}
