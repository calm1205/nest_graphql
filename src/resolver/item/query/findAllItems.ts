import { Query, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { FindAllItemsService } from '~/service/item/findAllItems.service';

@Resolver(() => Item)
export class FindAllItems {
  constructor(private readonly usecase: FindAllItemsService) {}

  @Query(() => [Item], { description: '商品の全件検索' })
  async findAllItems() {
    return await this.usecase.execute();
  }
}
