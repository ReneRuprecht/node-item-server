import { randomUUID } from 'crypto';
import { Item } from '../item';

export const findAllItems = (): Item[] => {
  const item1: Item = {
    id: randomUUID(),
    name: 'item1',
    regularPrice: 1.0,
    discountPrice: 0.5,
    description: 'desc1',
  };
  const items = [item1];
  return items;
};
