import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {User} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, PressableBox, PressableBoxProps} from '../Box/Box';
import {
  ProfileAvatar,
  ProfileAvatarProps,
} from '../ProfileAvatar/ProfileAvatar';
import {Text} from '../Text/Text';

type Props = {
  user: Pick<User, 'username' | 'profileUrl' | 'id'>;
  avatarProps?: Omit<ProfileAvatarProps, 'imageURL'>;
  RightComponent?: React.ReactElement;
} & PressableBoxProps;

export function ProfileUser({
  user,
  onPress,
  avatarProps,
  RightComponent,
  ...pressableBoxProps
}: Props) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }
    navigation.navigate('ProfileScreen', {id: user.id});
  }
  return (
    <PressableBox
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      mb="s16"
      onPress={handleOnPress}
      {...pressableBoxProps}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar {...avatarProps} imageURL={user.profileUrl} />
        <Text ml="s12" preset="paragraphMedium" bold>
          {user.username}
        </Text>
      </Box>
      {RightComponent}
    </PressableBox>
  );
}
