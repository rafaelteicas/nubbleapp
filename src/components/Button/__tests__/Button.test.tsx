import React from 'react';
import {StyleSheet} from 'react-native';

import {render, fireEvent, screen} from 'test-utils';

import {theme} from '@theme';

import {Button, ButtonProps} from '../Button';

function renderComponent(props: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />);
  const titleElement = screen.queryByText(/button title/);
  const loadingElement = screen.queryByTestId('activity-indicator');
  const buttonElement = screen.getByTestId('button');

  return {
    titleElement,
    loadingElement,
    buttonElement,
  };
}

test('when button is loading: It shows activity indicator, it hides button title, and disables onPress function', () => {
  const mockedOnPress = jest.fn();
  const {buttonElement, loadingElement, titleElement} = renderComponent({
    loading: true,
    onPress: mockedOnPress,
  });
  fireEvent.press(buttonElement);
  expect(mockedOnPress).not.toHaveBeenCalled();
  expect(loadingElement).toBeTruthy();
  expect(titleElement).toBeFalsy();
});

describe('<Button />', () => {
  it('calls the onPress function when is pressend', () => {
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
    });
    fireEvent.press(titleElement!!);
    expect(mockedOnPress).toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });
  it('does not call onPress function when disabled and pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement, loadingElement} = renderComponent({
      onPress: mockedOnPress,
      disabled: true,
    });
    fireEvent.press(titleElement!!);
    expect(mockedOnPress).not.toHaveBeenCalled();
    expect(loadingElement).toBeFalsy();
  });

  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({disabled: true});
    const titleStyle = StyleSheet.flatten(titleElement!!.props.style);
    expect(titleStyle.color).toEqual(theme.colors.gray2);
  });
});
