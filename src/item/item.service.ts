import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Item } from '~/entities/item.entity';

@Injectable()
export class ItemService {
  async findItemById(id: string): Promise<Item> {
    return await getRepository(Item).findOne(id);
  }

  async findAllItems(): Promise<Item[]> {
    return await getRepository(Item).find();
  }
}
