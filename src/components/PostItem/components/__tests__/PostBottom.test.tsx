import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './mockedData/mockedPost';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);
    const commentLinkElement = screen.queryByText(/comentário/);
    expect(commentLinkElement).toBeNull();
  });
  it('navigates to PostCommentScreen when the comment link is pressed', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);
    const commentLinkElement = screen.getByText(/comentário/);
    fireEvent.press(commentLinkElement);
    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      authorId: mockedPost.author.id,
    });
  });
  it('should shows ver comentario if has just one comment', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);
    const commentLinkElement = screen.getByText(/ver comentário/);
    expect(commentLinkElement).toBeTruthy();
  });
});
