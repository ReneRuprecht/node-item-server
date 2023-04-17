import { UUID } from 'crypto';

export type Item = {
  id: UUID;
  name: string;
  regularPrice: number;
  discountPrice: number;
  description?: string;
};
