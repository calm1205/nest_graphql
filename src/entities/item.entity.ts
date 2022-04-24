import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ItemStatus } from 'src/item/item-status.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'items' })
@ObjectType({ description: '商品' })
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id' })
  id: string;

  @Column()
  @Field({ description: '品名' })
  name: string;

  @Column()
  @Field(() => Int, { description: '価格' })
  price: number;

  @Column()
  @Field({ nullable: true, description: '説明' })
  description: string;

  @Column({ default: ItemStatus.ON_SALE })
  @Field(() => ItemStatus, { description: 'ステータス' })
  status: ItemStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date;
}
