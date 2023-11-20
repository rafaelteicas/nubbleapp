import React from 'react';

import {mockedPostComment, resetInMemoryResponse, server} from '@test';
import {act, fireEvent, renderScreen, screen, waitFor, waitForElementToBeRemoved} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';
import { authCredentialsStorage } from '@services';
import { Alert, AlertButton } from 'react-native';

beforeAll(() => {
  server.listen()
  jest.useFakeTimers()
});

afterEach(() => {
  server.resetHandlers()
  resetInMemoryResponse()
});

afterAll(() => { server.close(); jest.resetAllMocks();  jest.useRealTimers()}
);

describe('integration: PostCommentScreen', () => {
  test('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            authorId: 1,
          },
        }}
      />,
    );

    const comment = await screen.findByText(/comentário aleatório/i);

    expect(comment).toBeTruthy();

    // Achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentario/)
    // Digitar o comentario
    fireEvent.changeText(inputText, 'Novo comentario')
    // Clicar em enviar
    fireEvent.press(screen.getByText(/enviar/i))
    // Espera: a lista atualizar
    const newComment = await screen.findByText(/Novo comentario/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id')

    expect(comments.length).toBe(3)
  });
  test('When DELETING a comment the list is automatically updated a toast message is displayed', async () => {
    jest.spyOn(authCredentialsStorage, 'get').mockResolvedValue(mockedPostComment.mateusAuthCredentials)
    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest.spyOn(Alert, 'alert').mockImplementation((title, message, buttons) => {
      if (buttons && buttons[0]) {
        mockedConfirm = buttons[0].onPress;
      }
    })
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            postId: 1,
            authorId: 1,
          },
        }}
      />,
    );

    // Esperar carregar
    // Identificar o comentario
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );
    expect(comment).toBeTruthy()

    // Identificar o comentario que sera deletado
    fireEvent(comment, 'longPress')
    expect(mockedAlert).toHaveBeenCalled();
    // Pressiona em confirmar no alert
    mockedConfirm && mockedConfirm()

    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
      exact: false
    }))
    const comments = await screen.findAllByTestId('post-comment-id');

    expect(comments.length).toBe(1);

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
