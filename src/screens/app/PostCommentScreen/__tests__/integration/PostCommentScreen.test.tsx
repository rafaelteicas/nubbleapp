import React from 'react';
import {Alert, AlertButton} from 'react-native';

import {authCredentialsStorage} from '@services';
import {mockedPostComment, resetInMemoryResponse, server} from '@test';
import {
  act,
  fireEvent,
  renderScreen,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});
afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
});
afterAll(() => {
  server.close();
  jest.resetAllMocks();
  jest.useRealTimers();
});

describe('integration: PostCommentScreen', () => {
  it('When ADDING a comment the list is automatically updated', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            authorId: 1,
            postId: 1,
          },
        }}
      />,
    );

    // Achar o campo de Input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    // Digitar a mensagem
    fireEvent.changeText(inputText, 'novo comentário');

    // Clicar em enviar
    fireEvent.press(screen.getByText('Enviar'));

    // Espera: A lista ser atualizada
    const newComment = await screen.findByText(/novo comentário/i);
    expect(newComment).toBeTruthy();

    const comments = await screen.findAllByTestId('post-comment-id');
    expect(comments.length).toBe(3);
  });
  it('When DELETING a comment the list is automatically updated', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.mateusAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((title, message, buttons) => {
        if (buttons && buttons[0]) {
          mockedConfirm = buttons[0].onPress;
        }
      });
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: 'PostCommentScreen',
          key: 'PostCommentScreen',
          params: {
            authorId: 1,
            postId: 1,
          },
        }}
      />,
    );

    // Esperar a lista carregar
    // Identificar o comentário que será deletado
    const comment = await screen.findByText(
      mockedPostComment.mateusPostCommentAPI.message,
      {exact: false},
    );
    expect(comment).toBeTruthy();

    // LongPress no comentário
    fireEvent(comment, 'longPress');

    expect(mockedAlert).toHaveBeenCalled();
    // Pressionar em "confirmar" no alert

    mockedConfirm && mockedConfirm();

    await waitForElementToBeRemoved(() =>
      screen.getByText(mockedPostComment.mateusPostCommentAPI.message, {
        exact: false,
      }),
    );
    // Verificar se a lista foi deletada
    const comments = await screen.findAllByTestId('post-comment-id');
    expect(comments.length).toBe(1);

    await waitFor(() =>
      expect(screen.getByTestId('toast-message')).toBeTruthy(),
    );

    act(() => jest.runAllTimers());

    expect(screen.queryByTestId('toast-message')).toBeNull();
  });
});
