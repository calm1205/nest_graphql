import { ParseUUIDPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { FindItemByIdService } from '~/service/item/findItemById.service';

@Resolver(() => Item)
export class FindItemById {
  constructor(private readonly usecase: FindItemByIdService) {}

  @Query(() => Item, { description: '商品のid検索' })
  async findItemById(@Args('itemId', ParseUUIDPipe) itemId: string) {
    return await this.usecase.execute(itemId);
  }
}
