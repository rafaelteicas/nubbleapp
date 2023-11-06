import React from 'react'
import {render, fireEvent, screen} from 'test-utils'
import { Button, ButtonProps } from '@components'
import { StyleSheet } from 'react-native'
import { theme } from '@theme'
import { ReactTestInstance } from 'react-test-renderer'


function renderComponent({ ...props}: Partial<ButtonProps>) {
  render(<Button title="button title" {...props} />)
  
  const titleElement = screen.queryByText('button title');
  const buttonElement = screen.queryByTestId('button');
  const loadingElement = screen.queryByTestId('activity-button');

  return {
    titleElement,
    buttonElement,
    loadingElement
  }
}

describe('<Button />', () => {
  it('Calls onPress function whe button pressed', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({onPress: mockedOnPress});
    fireEvent.press(titleElement as ReactTestInstance);
    expect(mockedOnPress).toHaveBeenCalled();
  });
  it('Does not call calls onPress function whe button is disabled', () => {
    const mockedOnPress = jest.fn();
    const {titleElement} = renderComponent({onPress: mockedOnPress, disabled: true});
    fireEvent.press(titleElement as ReactTestInstance);
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
  test('the title should be gray if button is disabled', () => {
    const {titleElement} = renderComponent({
      disabled: true,
    });
    const titleStyle = StyleSheet.flatten(titleElement?.props.style)
    expect(titleStyle.color).toEqual(theme.colors.gray2)
  })
  describe('when button is loading', () => {
    it('show activity indicator', () => {
      const {loadingElement} = renderComponent({loading: true});
      expect(loadingElement).toBeTruthy()
    })
    it('hides button title', () => {
      const {titleElement} = renderComponent({loading: true});
      expect(titleElement).toBeFalsy();
    })
      it('disables onPress function', () => {
        const mockedOnPress = jest.fn();
        const {buttonElement} = renderComponent({
          loading: true,
          onPress: mockedOnPress,
        });

        fireEvent.press(buttonElement as ReactTestInstance);

        expect(mockedOnPress).not.toHaveBeenCalled();
      });
  })
})
