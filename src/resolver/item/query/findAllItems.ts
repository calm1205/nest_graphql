import { Query, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { ItemService } from '~/item/item.service';

@Resolver(() => Item)
export class FindAllItems {
  constructor(private readonly itemService: ItemService) {}

  @Query(() => [Item], { description: '商品の全件検索' })
  async findAllItems() {
    return await this.itemService.findAllItems();
  }
}
