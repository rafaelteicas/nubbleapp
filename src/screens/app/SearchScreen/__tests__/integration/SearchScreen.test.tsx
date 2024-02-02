import React from 'react';

import {authCredentialsStorage} from '@services';
import {mockUtils, server, userMocked} from '@test';
import {act} from 'react-test-renderer';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.mateusAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  jest.useFakeTimers();
  server.close();
});

describe('integration: SearchScreen', () => {
  it('Search Flow', async () => {
    // 1) Navigate to Search Screen
    renderScreen(<AppStack initialRouteName="SearchScreen" />);

    // 2) Find input and type username
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');
    act(() => jest.runAllTimers());

    // 3) Find 2 users as per the MSW mock
    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    // 4) And navigate to Profile Screen
    fireEvent.press(user1);

    // 5) Expect to be at profile screen with user 1 loaded
    const user1FullName = await screen.findByText(userMocked.user1.full_name);
    expect(user1FullName).toBeTruthy();

    // 6) Press the back button to navigate back to Search Screen
    const backButton = screen.getByTestId(/screen-back-button/i);
    fireEvent.press(backButton);

    // 7) Clean search input
    const inputTextAfterBack = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputTextAfterBack, '');
    act(() => jest.runAllTimers());

    // 8) Make the search history section appears
    const searchHistoryTitle = screen.getByText(/buscas recentes/i);
    expect(searchHistoryTitle).toBeTruthy();

    // 9) The user1 was the saved in the search history
    const user1AfterBack = screen.queryByText(userMocked.user1.username);
    expect(user1AfterBack).toBeTruthy();

    // 10) The user2 must not appear on Search Screen
    const user2AfterBack = screen.queryByText(userMocked.user2.username);
    expect(user2AfterBack).toBeFalsy();

    // 11) Remove user1
    const trashIcon = screen.getByTestId('trash');
    fireEvent.press(trashIcon);

    // 12) Make sure user1 was removed
    const user1AfterRemoved = screen.queryByText(userMocked.user1.username);
    expect(user1AfterRemoved).toBeFalsy();
  });
});
