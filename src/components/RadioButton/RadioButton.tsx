import React from 'react';

import {Box, PressableBox} from '../Box/Box';

export interface RadioButtonProps {
  isSelected: boolean;
  onPress: () => void;
}

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      hitSlop={10}
      justifyContent="center"
      alignItems="center"
      height={20}
      width={20}
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : 'onBackgroundGray2'}
      borderRadius="s12"
      onPress={onPress}>
      <Box
        backgroundColor={isSelected ? 'primary' : undefined}
        width={12}
        height={12}
        borderRadius="s12"
      />
    </PressableBox>
  );
}
