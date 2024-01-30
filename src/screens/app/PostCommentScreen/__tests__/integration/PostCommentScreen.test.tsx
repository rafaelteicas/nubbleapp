import React from 'react';

import {server} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

jest.useFakeTimers();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
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
    expect(comments.length).toBe(2);
  });
});
