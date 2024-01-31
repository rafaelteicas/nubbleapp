import {setupServer} from 'msw/node';

import {
  postCommentHandlers,
  resetInMemoryResponse,
} from './PostComment/postCommentHandlers';

export const server = setupServer(...postCommentHandlers);
export {mockedData as mockedPostComment} from './PostComment/mocks';
export {resetInMemoryResponse};
