import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import { TextInput, TextInputProps } from '../TextInput/TextInput';


export function FormTextInput<FormTypes extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormTypes>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    />
  );
}
