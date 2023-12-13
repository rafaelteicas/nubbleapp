import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.id;
  const {user, isError, isLoading, isFetching, refetch} =
    useUserGetById(userId);
  return (
    <Screen canGoBack flex={1}>
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }>
        {isLoading && <ActivityIndicator />}
        {isError && <Text> error ao carregar perfil do usuário</Text>}
        {user && (
          <Box alignItems="center">
            <ProfileAvatar
              imageURL={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        )}
      </ScrollView>
    </Screen>
  );
}
