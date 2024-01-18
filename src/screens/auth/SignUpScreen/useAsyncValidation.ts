import {useAuthUsernameIsAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

interface Props {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
}

export function useAsyncValidation({watch, getFieldState}: Props) {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const userNameQuery = useAuthUsernameIsAvailable({
    username,
    enabled: usernameIsValid,
  });

  return {
    errorMessage: userNameQuery.isUnavailable
      ? 'Username não disponível'
      : undefined,
    notReady: userNameQuery.isUnavailable || userNameQuery.isFetching,
    isFetching: userNameQuery.isFetching,
  };
}
