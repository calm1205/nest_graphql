import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  providers: [ItemService, ItemResolver],
})
export class ItemsModule {}
