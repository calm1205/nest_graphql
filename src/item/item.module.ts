import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '~/entities/item.entity';
import { ItemService } from './item.service';
import ItemResolver from '~/resolver/item';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [...ItemResolver, ItemService],
})
export class ItemsModule {}
