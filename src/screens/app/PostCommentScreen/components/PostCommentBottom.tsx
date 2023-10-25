import React from 'react';

import {Text} from '@components';
import {useAppSafeArea} from '@hooks';

type Props = {
  fetchNextPage: () => void;
  hasNextPage: boolean;
};
export function PostCommentBottom({hasNextPage, fetchNextPage}: Props) {
  const {bottom} = useAppSafeArea();
  if (hasNextPage) {
    return (
      <Text
        onPress={fetchNextPage}
        preset="paragraphSmall"
        bold
        color="primary"
        textAlign="center"
        style={{bottom: bottom}}>
        Ver mais
      </Text>
    );
  } else {
    return null;
  }
}
