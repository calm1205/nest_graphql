import { registerEnumType } from '@nestjs/graphql';

export enum ItemStatus {
  ON_SALE = 'ON_SALE',
  SOLDOUT = 'SOLDOUT',
}

registerEnumType(ItemStatus, {
  name: 'ItemStatus',
  description: 'item status',
});
