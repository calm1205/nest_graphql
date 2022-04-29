import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { ItemService } from '~/item/item.service';

@Resolver(() => Item)
export class FindItemById {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => Item, { description: '商品のid検索' })
  async findItemById(@Args('itemId', ParseUUIDPipe) itemId: string) {
    return await this.itemService.findItemById(itemId);
  }
}
