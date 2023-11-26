import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../routes/Routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
