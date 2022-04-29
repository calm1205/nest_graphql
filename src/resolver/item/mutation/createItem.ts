import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemInput } from '~/item/item.input';
import { CreateItemService } from '~/service/item/createItem.service';

@Resolver(() => Item)
export class CreateItem {
  constructor(private readonly usecase: CreateItemService) {}

  @Mutation(() => Result, { description: '商品登録' })
  async createItem(@Args('item') item: ItemInput) {
    return await this.usecase.execute(item);
  }
}
