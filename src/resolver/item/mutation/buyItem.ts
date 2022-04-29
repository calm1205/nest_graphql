import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { BuyItemService } from '~/service/item/buyItem.service';

@Resolver(() => Item)
export class BuyItem {
  constructor(private readonly usecase: BuyItemService) {}

  @Mutation(() => Item, { description: '商品の購入' })
  async buyItem(@Args('itemId') itemId: string) {
    return await this.usecase.execute(itemId);
  }
}
