import { Field, InputType, Int } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';

@InputType({ description: '商品登録用Input' })
export class ItemInput {
  @Field({ description: '商品名' })
  name: string;

  @Field(() => Int, { description: '価格' })
  price: number;

  @Field({ nullable: true, description: '説明' })
  description?: string;

  @Field(() => ItemStatus, {
    defaultValue: ItemStatus.ON_SALE,
    description: 'ステータス',
  })
  status: ItemStatus;
}
