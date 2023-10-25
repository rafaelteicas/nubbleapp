import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" size={24} />
        <Icon name="bell" size={24} />
        <Icon name="chat" size={24} />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  paddingHorizontal: 's24',
  paddingBottom: 's24',
  justifyContent: 'space-between',
  flexDirection: 'row',
};
