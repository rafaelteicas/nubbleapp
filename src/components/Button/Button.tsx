import React from 'react';

import {ButtonPreset, buttonPresets} from './buttonPresets';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { Text } from '../Text/Text';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title?: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  loading,
  disabled = false,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Text
          bold
          preset="paragraphMedium"
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
