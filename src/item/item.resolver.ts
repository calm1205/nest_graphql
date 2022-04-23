import { Args, Query, Resolver } from '@nestjs/graphql';
import { Item } from '~/entities/item.entity';
import { ItemService } from './item.service';

@Resolver(() => Item)
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query(() => Item)
  async findItemById(@Args('id') id: string) {
    return await this.itemService.findItemById(id);
  }

  @Query(() => [Item])
  async findAllItems() {
    return await this.itemService.findAllItems();
  }
}
