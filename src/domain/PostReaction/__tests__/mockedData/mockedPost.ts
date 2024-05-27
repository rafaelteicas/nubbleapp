import {Post, PostReactionBase} from '@domain';

const postWithoutLike: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 8,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://example.com',
    userName: 'mariajulia',
  },
  reactions: [],
};

const postWithoutLikeResponse: PostReactionBase = {
  id: 4,
  postId: postWithoutLike.id,
  emojiType: 'like',
  userId: 1,
  createdAt: '',
  updatedAt: '',
  isChecked: true,
};

const postWithLike: Post = {
  ...postWithoutLike,
  reactions: [
    {
      emojiType: 'like',
      postId: postWithoutLike.id,
    },
  ],
};

const postWithLikeResponse: PostReactionBase = {
  ...postWithoutLikeResponse,
  isChecked: false,
};

export const mockedPostWithoutLike = {
  post: postWithoutLike,
  response: postWithoutLikeResponse,
};

export const mockedPostWithLike = {
  post: postWithLike,
  response: postWithLikeResponse,
};
