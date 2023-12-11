import React from 'react';
import {Dimensions} from 'react-native';

import {Toast, ToastType} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

interface Props {
  toast: Toast;
}

export function ToastContent({toast}: Props) {
  const type: ToastType = toast.type ? toast.type : 'success';
  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text preset="paragraphMedium" bold ml="s16" style={{flexShrink: 1}}>
        {toast.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    name: 'checkRound',
    color: 'success',
  },
  error: {
    name: 'errorRound',
    color: 'error',
  },
};

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  borderRadius: 's16',
  padding: 's16',
  flexDirection: 'row',
  maxWidth: MAX_WIDTH,
};
