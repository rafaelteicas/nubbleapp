import React from 'react';

import {render, fireEvent} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  test('calls the onPress function when is pressend', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = render(
      <Button title="button title" onPress={mockedOnPress} />,
    );
    const titleElement = getByText('button title');
    fireEvent.press(titleElement);
    expect(mockedOnPress).toHaveBeenCalled();
  });
});
