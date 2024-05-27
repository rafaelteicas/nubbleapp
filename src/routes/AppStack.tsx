import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SettingsScreen,
  PostCommentScreen,
  ProfileScreen,
  SearchScreen,
  CameraScreen,
  PublishPostScreen,
  DarkModeScreen,
} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    authorId: number;
    showPost?: boolean;
  };
  ProfileScreen: {
    id: number;
  };
  SearchScreen: undefined;
  CameraScreen: undefined;
  PublishPostScreen: {
    imageUri: string;
  };
  DarkModeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList | undefined;
}

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
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
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
    </Stack.Navigator>
  );
}
