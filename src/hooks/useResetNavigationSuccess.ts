import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from 'src/routes/AuthStack';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamList['SuccessScreen']) {
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
