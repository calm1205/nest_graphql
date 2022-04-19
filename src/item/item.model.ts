import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ItemStatus } from './item-status.enum';

@ObjectType({ description: 'item' })
export class Item {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  price: number;

  @Field({ nullable: true })
  description: string;

  @Field((type) => ItemStatus)
  status: ItemStatus;
}
