import React from 'react';
import {
  FlatList,
  FlatListProps,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {QueryKeys, usePaginatedList} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {Screen} from '@components';

import {EmptyList, EmptyListProps} from './components/EmptyList';

type ItemTConstraints = {
  id: string | number;
};

type Props<ItemT extends ItemTConstraints> = {
  queryKey: QueryKeys;
  renderItem: FlatListProps<ItemT>['renderItem'];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  emptyListProps?: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
  flatListProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
};
export function InfinityScrollList<ItemT extends ItemTConstraints>({
  emptyListProps,
  flatListProps,
  queryKey,
  getList,
  renderItem,
}: Props<ItemT>) {
  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    [queryKey],
    getList,
  );

  const flatListRef = React.useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        ListEmptyComponent={
          <EmptyList
            refetch={refresh}
            error={isError}
            loading={isLoading}
            {...emptyListProps}
          />
        }
        {...flatListProps}
        contentContainerStyle={[
          {flex: list.length === 0 ? 1 : undefined},
          flatListProps?.contentContainerStyle,
        ]}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
