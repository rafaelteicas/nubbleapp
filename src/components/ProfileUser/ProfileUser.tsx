import React from 'react';
import {Pressable} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text} from '@components';

type Props = {user: Pick<User, 'username' | 'profileUrl' | 'id'>};

export function ProfileUser({user}: Props) {
  const navigation = useNavigation();
  function navigateToProfile() {
    navigation.navigate('ProfileScreen', {
      id: user.id,
    });
  }
  return (
    <Pressable onPress={navigateToProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text ml="s12" preset="paragraphMedium" bold>
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
