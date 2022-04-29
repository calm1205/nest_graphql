import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '~/entities/item.entity';
import ItemResolver from '~/resolver/item';
import ItemService from '~/service/item';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [...ItemResolver, ...ItemService],
})
export class ItemsModule {}
