import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OnboardingScreen} from '@screens';

export type OnboardingStackParamList = {
  OnBoardingScreen: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export function OnBoardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
