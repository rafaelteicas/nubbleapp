import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../Box/Box';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      onPress={() => console.log('Clicou')}
      backgroundColor="error"
      height={54}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...touchableOpacityProps}>
      <Text preset="headingMedium" bold style={{color: 'white'}}>
        {loading ? <ActivityIndicator /> : title}
      </Text>
    </TouchableOpacityBox>
  );
}
