import React from 'react';

import {render, screen} from 'test-utils';

import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnChange = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );
    const inputElement = screen.getByPlaceholderText(/password/);
    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });
});
