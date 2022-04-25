import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, MaxLength, Min } from 'class-validator';
import { ItemStatus } from './item-status.enum';

@InputType({ description: '商品登録用Input' })
export class ItemInput {
  @Field({ description: '商品名' })
  @IsNotEmpty({ message: '商品名は必須です。' })
  @MaxLength(40, { message: '商品名は40以下で入力してください。' })
  name: string;

  @Field(() => Int, { description: '価格' })
  @Min(1)
  price: number;

  @Field({ nullable: true, description: '説明' })
  @MaxLength(255)
  description?: string;

  @Field(() => ItemStatus, { description: 'ステータス' })
  @IsEnum(ItemStatus)
  status: ItemStatus;
}
