import {TextInput, TextInputProps} from '@components';
import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export function FormTextInput<FormTypes extends FieldValues>({
  control,
  name,
  rules,
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
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
