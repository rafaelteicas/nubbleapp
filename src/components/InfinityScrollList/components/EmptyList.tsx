import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

export type EmptyListProps = {
  loading: boolean;
  error: boolean | null;
  refetch: () => void;
  emptyMessage?: string;
  errorMessage?: string;
};

export function EmptyList({
  loading,
  error,
  emptyMessage = 'Não há publicações no seu feed',
  errorMessage = 'Não foi possível carregar',
  refetch,
}: EmptyListProps) {
  let component = (
    <>
      <Text bold mb="s16">
        {emptyMessage}
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
          {errorMessage}
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
