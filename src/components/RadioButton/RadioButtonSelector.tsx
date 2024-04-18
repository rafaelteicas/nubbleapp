import React from 'react';

import {Box} from '../Box/Box';
import {Separator} from '../Separator/Separator';

import {RadioButtonItem} from './RadioButtonItem';

type ItemTConstraint = Record<string, any>;

export type RadioButtonSelector<ItemT extends ItemTConstraint> = {
  items: ItemT[];
  selectedItem?: ItemT;
  onSelect: (item: ItemT) => void;
  labelKey: keyof ItemT;
  descriptionKey: keyof ItemT;
  valueKey: keyof ItemT;
};

export function RadioButtonSelector<ItemT extends ItemTConstraint>({
  items,
  selectedItem,
  labelKey,
  descriptionKey,
  valueKey,
  onSelect,
}: RadioButtonSelector<ItemT>) {
  return (
    <Box>
      {items.map((item, i) => (
        <Box key={item.label}>
          <RadioButtonItem
            {...item}
            label={item[labelKey]}
            description={item[descriptionKey]}
            onPress={() => onSelect(item)}
            isSelected={
              !!selectedItem && selectedItem[valueKey] === item[valueKey]
            }
          />
          {i < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}
