import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {Box, BoxProps, ScreenHeader} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  scrollable,
  canGoBack,
  children,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const {colors} = useAppTheme();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && <ScreenHeader canGoBack={canGoBack} title={title} />}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
