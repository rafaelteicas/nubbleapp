import React, {useState} from 'react';

import {Box, Icon, Screen, TextInput} from '@components';

export function SearchScreen() {
  const [search, setSearch] = useState<string>();
  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={<Icon name="search" color="gray3" />}
        />
      }>
      <Box />
    </Screen>
  );
}
