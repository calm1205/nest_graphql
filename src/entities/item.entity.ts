import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ItemStatus } from 'src/item/item-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'items' })
export class Items {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @Column()
  @Field({ description: '品名' })
  name: string;

  @Column()
  @Field({ description: '価格' })
  price: number;

  @Column()
  @Field({ nullable: true, description: '説明' })
  description: string;

  @Column()
  @Field(() => ItemStatus, { description: 'ステータス' })
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
