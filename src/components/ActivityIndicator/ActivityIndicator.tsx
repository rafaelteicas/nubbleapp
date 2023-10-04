import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';

interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color: ThemeColors;
}

export function ActivityIndicator({
  color,
  ...rnActivityIndicatorProps
}: ActivityIndicatorProps) {
  return <RNActivityIndicator color={color} {...rnActivityIndicatorProps} />;
}
