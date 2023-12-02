import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

type Props = {
  loading: boolean;
  error: boolean | null;
  refetch: () => void;
};
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <>
      <Text bold mb="s16">
        Não há publicações no seu feed
      </Text>
      <Button title="Recarregar" onPress={refetch} />
    </>
  );
  if (loading) {
    component = <ActivityIndicator color={'primary'} />;
  }
  if (error) {
    component = (
      <>
        <Text bold mb="s16">
          Não foi possível carregar o feed{' '}
        </Text>
        <Button title="Recarregar" onPress={refetch} />
      </>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
