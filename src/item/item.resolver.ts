import { Args, Query, Resolver } from '@nestjs/graphql';
import { Items } from '~/entities/item.entity';
import { ItemService } from './item.service';

@Resolver(() => Items)
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query(() => Items)
  async item(@Args('id') id: number): Promise<number> {
    return await this.itemService.findOneById(id);
  }
}
