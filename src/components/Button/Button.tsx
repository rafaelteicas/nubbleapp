import React from 'react';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box backgroundColor="greenPrimary">
      <Text preset="headingMedium" bold style={{color: colors.grayWhite}}>
        {title}
      </Text>
    </Box>
  );
}
