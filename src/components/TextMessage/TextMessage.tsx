import React, {useRef} from 'react';

import {Pressable, TextInput} from 'react-native';

import {Box, Text, TextInputProps} from '@components';
import {useAppTheme} from '@hooks';

export interface TextMessage extends Partial<TextInputProps> {
  value: string;
  onPress: (message: string) => void;
}

export function TextMessage({value, onPress, ...textInputProps}: TextMessage) {
  const {colors} = useAppTheme();
  const inputRef = useRef<TextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Box
      backgroundColor="gray5"
      borderRadius="s16"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="s16"
      paddingVertical="s12">
      <TextInput
        ref={focusInput}
        style={{padding: 0}}
        autoCapitalize="none"
        placeholderTextColor={colors.gray2}
        {...textInputProps}
      />
      <Pressable onPress={() => onPress(value)}>
        <Text
          preset="paragraphSmall"
          bold
          color={sendIsDisabled ? 'gray1' : 'primary'}>
          Enviar
        </Text>
      </Pressable>
    </Box>
  );
}
