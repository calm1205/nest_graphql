import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemService } from '~/item/item.service';

@Resolver(() => Item)
export class DeleteItem {
  constructor(private readonly itemService: ItemService) {}

  @Mutation(() => Result, { description: '商品の削除' })
  async deleteItem(@Args('itemId') itemId: string) {
    return await this.itemService.deleteItem(itemId);
  }
}
