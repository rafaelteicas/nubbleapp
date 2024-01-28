import {waitFor} from '@testing-library/react-native';
import {renderHook} from 'test-utils';

import {authService} from '../../authService';
import {useAuthSignIn} from '../useAuthSignIn';

import {mockedAuthCredentials} from './mockedData/mocks';

const mockedSaveCredentials = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    useAuthCredentials: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    const mockedOnSuccess = jest.fn();
    jest
      .spyOn(authService, 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentials);
    const {result} = renderHook(() =>
      useAuthSignIn({onSuccess: mockedOnSuccess}),
    );
    result.current.signIn({email: 'lucas@coffstack,com', password: '123'});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockedSaveCredentials).toHaveBeenCalledWith(mockedAuthCredentials);
    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentials);
  });
  it('calls the onError function with a message if sign-in fails', async () => {
    const mockedOnError = jest.fn();
    jest
      .spyOn(authService, 'signIn')
      .mockRejectedValue(new Error('Invalid user'));
    const {result} = renderHook(() => useAuthSignIn({onError: mockedOnError}));
    result.current.signIn({email: 'lucas@coffstack,com', password: '123'});
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
