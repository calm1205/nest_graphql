import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemInput } from './item.input';
import { ItemService } from './item.service';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item, { description: '商品のid検索' })
  async findItemById(@Args('itemId', ParseUUIDPipe) itemId: string) {
    return await this.itemService.findItemById(itemId);
  }

  @Query(() => [Item], { description: '商品の全件検索' })
  async findAllItems() {
    return await this.itemService.findAllItems();
  }

  @Mutation(() => Result, { description: '商品登録' })
  async createItem(@Args('item') item: ItemInput) {
    return await this.itemService.createItem(item);
  }

  @Mutation(() => Item, { description: '商品の購入' })
  async buyItem(@Args('itemId') itemId: string) {
    return await this.itemService.buyItem(itemId);
  }

  @Mutation(() => Result, { description: '商品の削除' })
  async deleteItem(@Args('itemId') itemId: string) {
    return await this.itemService.deleteItem(itemId);
  }
}
