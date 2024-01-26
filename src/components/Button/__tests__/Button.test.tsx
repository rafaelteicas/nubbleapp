import React from 'react';
import {StyleSheet} from 'react-native';

import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />);
  const titleElement = screen.getByText(/button title/);
  return {
    titleElement,
  };
}

describe('<Button />', () => {
  it('calls the onPress function when is pressend', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({onPress: mockedOnPress});
    fireEvent.press(titleElement);
    expect(mockedOnPress).toHaveBeenCalled();
  });
  it('does not call onPress function when disabled and pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(titleElement);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});
    const titleStyle = StyleSheet.flatten(titleElement.props.style);
    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });
});
