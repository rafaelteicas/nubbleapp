import React, {useRef} from 'react';
import {Pressable, TextInput, TextInputProps, TextStyle} from 'react-native';

import {Text, Box, TouchableOpacityBox} from '@components';
import {useAppTheme} from '@hooks';

interface TextMessageProps extends TextInputProps {
  value: string;
  onPressSend: (message: string) => void;
}

export function TextMessage({
  value,
  onPressSend,
  ...textInputProps
}: TextMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<TextInput>(null);
  function focusOnInput() {
    inputRef.current?.focus;
  }
  const sendIsDisabled = value?.trim().length === 0;
  return (
    <Pressable onPress={focusOnInput}>
      <Box
        backgroundColor="gray5"
        paddingHorizontal="s16"
        paddingVertical="s14"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <TextInput
          ref={inputRef}
          value={value}
          style={$textInputStyle}
          placeholderTextColor={colors.gray2}
          {...textInputProps}
        />
        <TouchableOpacityBox
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value)}>
          <Text color={sendIsDisabled ? 'gray2' : 'greenPrimary'} bold>
            Enviar
          </Text>
        </TouchableOpacityBox>
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  marginRight: 24,
};
