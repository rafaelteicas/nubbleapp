import React, {useState} from 'react';

import {Icon} from '../Icon/Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setIsSecureTextEntry(current => !current);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          color="gray2"
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
}
