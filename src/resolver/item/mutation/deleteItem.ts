import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { DeleteItemService } from '~/service/item/deleteItem.service';

@Resolver(() => Item)
export class DeleteItem {
  constructor(private readonly usecase: DeleteItemService) {}

  @Mutation(() => Result, { description: '商品の削除' })
  async deleteItem(@Args('itemId') itemId: string) {
    return await this.usecase.execute(itemId);
  }
}
