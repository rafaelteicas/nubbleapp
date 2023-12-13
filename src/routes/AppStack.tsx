import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, PostCommentScreen, ProfileScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    authorId: number;
  };
  ProfileScreen: {
    id: number;
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
        component={AppTabNavigator}
        key="AppTabNavigator"
      />
      <Stack.Screen
        name="PostCommentScreen"
        component={PostCommentScreen}
        key="PostCommentScreen"
      />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
