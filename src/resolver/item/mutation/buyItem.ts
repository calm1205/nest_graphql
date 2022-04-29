import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { ItemService } from '~/item/item.service';

@Resolver(() => Item)
export class BuyItem {
  constructor(private readonly itemService: ItemService) {}

  @Mutation(() => Item, { description: '商品の購入' })
  async buyItem(@Args('itemId') itemId: string) {
    return await this.itemService.buyItem(itemId);
  }
}
