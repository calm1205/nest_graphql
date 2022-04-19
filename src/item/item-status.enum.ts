import { registerEnumType } from '@nestjs/graphql';

export enum ItemStatus {
  ON_SALE,
  SOLDOUT,
}

registerEnumType(ItemStatus, {
  name: 'ItemStatus',
  description: 'item status',
});
