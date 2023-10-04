import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ThemeColors} from '../../theme/theme';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

const ButtonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'grayWhite',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
  secondary: {
    container: {
      backgroundColor: 'carrotSecondary',
    },
    content: 'grayWhite',
  },
};

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      height={54}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...ButtonPresets[preset].container}
      {...touchableOpacityProps}>
      <Text preset="headingMedium" bold color={ButtonPresets[preset].content}>
        {loading ? (
          <ActivityIndicator color={ButtonPresets[preset].content} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacityBox>
  );
}
