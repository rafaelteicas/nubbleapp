import React from 'react';

import {Post} from '@domain';

import {useNavigation} from '@react-navigation/native';

import {Box, ProfileAvatar, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateToProfile() {
    navigation.navigate('MyProfileScreen', {
      userId: author.id,
    });
  }

  return (
    <Box mb="s16" flexDirection="row" alignItems="center">
      <TouchableOpacityBox onPress={navigateToProfile}>
        <ProfileAvatar imageUrl={author.profileURL} />
      </TouchableOpacityBox>
      <Text ml="s12" semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}
