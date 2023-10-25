import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {Box, Icon, Screen, Text} from '@components';

export function MyProfileScreen() {
  const navigation = useNavigation();
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text preset="paragraphMedium" bold>
          {name}
        </Text>
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
}
