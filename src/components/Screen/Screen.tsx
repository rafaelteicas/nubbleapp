import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({canGoBack, children}: ScreenProps) {
  const {top} = useAppSafeArea();
  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box flexDirection="row" mb="s24">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
