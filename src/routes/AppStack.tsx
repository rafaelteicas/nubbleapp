import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, PostCommentScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppTabNavigator">
      <Stack.Screen
        name="AppTabNavigator"
        children={AppTabNavigator}
        key="AppTabNavigator"
      />
      <Stack.Screen
        name="PostCommentScreen"
        children={PostCommentScreen}
        key="PostCommentScreen"
      />
      <Stack.Screen name="SettingsScreen" children={SettingsScreen} />
    </Stack.Navigator>
  );
}
