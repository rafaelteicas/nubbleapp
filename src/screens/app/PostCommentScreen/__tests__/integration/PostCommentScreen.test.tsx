import React from 'react';

import {renderScreen} from 'test-utils';

import {PostCommentScreen} from '../../PostCommentScreen';

describe('integration: PostCommentScreen', () => {
  it('When ADDING a comment the list is automatically updated', () => {
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
  });
});
