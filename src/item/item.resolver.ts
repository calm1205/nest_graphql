import { Args, Query, Resolver } from '@nestjs/graphql';
import { ItemService } from './item.service';

@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query()
  async item(@Args('id') id: number): Promise<number> {
    return await this.itemService.findOneById(id);
  }
}
