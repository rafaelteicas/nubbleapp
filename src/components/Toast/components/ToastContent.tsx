import React from 'react';

import {Dimensions} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

type Props = {
  toast: Toast;
};

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'success';

  return (
    <Box top={100} style={[{[position]: 100}, $shadowProps]} {...$boxStyle}>
      <Icon {...mapToIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapToIcon: Record<ToastType, IconProps> = {
  success: {
    name: 'checkRound',
    color: 'success',
  },
  error: {
    name: 'checkRound',
    color: 'error',
  },
};

const $boxStyle: BoxProps = {
  padding: 's16',
  position: 'absolute',
  backgroundColor: 'background',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  alignItems: 'center',
  alignSelf: 'center',
  maxWidth: MAX_WIDTH,
};
