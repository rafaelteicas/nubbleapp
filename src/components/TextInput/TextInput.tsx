import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const $textInputContainer: BoxProps = {
    borderRadius: 's12',
    padding: 's16',
    flexDirection: 'row',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderWidth: errorMessage ? 2 : 1,
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" bold mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray4}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {RightComponent && <Box>{RightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
