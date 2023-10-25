import React from 'react';

import {RefreshControl, ScrollView} from 'react-native';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({route}: AppScreenProps<'MyProfileScreen'>) {
  const userId = route.params.userId;
  const {user, isLoading, isError, isFetching, refetch} =
    useUserGetById(userId);

  return (
    <Screen canGoBack>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }>
        {isLoading && <ActivityIndicator color="primary" />}
        {isError && (
          <Text preset="headingMedium" bold color="primary">
            Erro ao carregar o perfil
          </Text>
        )}
        <Box alignItems="center">
          <ProfileAvatar
            size={64}
            borderRadius={24}
            imageUrl={user?.profileUrl}
          />
          <Text preset="headingMedium" bold>
            {user?.fullName}
          </Text>
          <Text color="gray1" preset="paragraphLarge">
            {user?.username}
          </Text>
        </Box>
      </ScrollView>
    </Screen>
  );
}
