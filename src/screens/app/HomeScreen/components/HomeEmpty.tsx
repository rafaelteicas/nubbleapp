import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

type Props = {
  loading: boolean;
  error: boolean | null;
  refetch: () => void;
};

export function HomeEmpty({refetch, error, loading}: Props) {
  let component = (
    <Text preset="paragraphMedium" bold>
      Nao ha publicacoes no seu feed
    </Text>
  );

  if (error) {
    component = (
      <>
        <Text preset="paragraphMedium" mb="s24" bold>
          Nao foi possivel carregar a pagina
        </Text>
        <Button
          padding="s12"
          title="Recarregar"
          preset="outline"
          onPress={refetch}
        />
      </>
    );
  }

  if (loading) {
    component = <ActivityIndicator color={'error'} />;
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
