import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnBoardingStack} from './OnBoardingStack';
import {Stacks, useRouter} from './useRouter';

function LoadingScreen() {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      justifyContent="center"
      alignItems="center">
      <ActivityIndicator size="large" />
    </Box>
  );
}
const stacks: Record<Stacks, React.ReactElement> = {
  Loading: <LoadingScreen />,
  App: <AppStack />,
  Auth: <AuthStack />,
  Onboarding: <OnBoardingStack />,
};

export function Routes() {
  const stack = useRouter();

  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}
