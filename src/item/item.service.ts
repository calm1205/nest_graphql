import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemInput } from './item.input';

@Injectable()
export class ItemService {
  async findItemById(id: string): Promise<Item> {
    return await getRepository(Item).findOne(id);
  }

  async findAllItems(): Promise<Item[]> {
    return await getRepository(Item).find();
  }

  async createItem(input: ItemInput): Promise<Result> {
    const itemRespository = getRepository(Item);
    const item = await itemRespository.save(input);
    if (item) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
