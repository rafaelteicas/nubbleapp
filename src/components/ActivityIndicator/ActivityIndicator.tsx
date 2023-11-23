import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color, ...activityIndicatorProps}: Props) {
  const {colors} = useTheme<Theme>();
  return (
    <RNActivityIndicator color={colors[color]} {...activityIndicatorProps} />
  );
}
