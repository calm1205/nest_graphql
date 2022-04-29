import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemStatus } from './item-status.enum';
import { ItemInput } from './item.input';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async findItemById(itemId: string): Promise<Item> {
    const item = await this.itemRepository.findOne({ id: itemId });
    if (!item) throw new NotFoundException();
    return item;
  }

  async findAllItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async createItem(input: ItemInput): Promise<Result> {
    const item = await this.itemRepository.save(input);
    if (item) {
      return { success: true };
    } else {
      return { success: false };
    }
  }

  async buyItem(itemId: string): Promise<Item> {
    const item = await this.itemRepository.findOne(itemId);
    if (item.status === ItemStatus.SOLDOUT) {
      throw new Error('その商品は既に購入済みです。');
    } else {
      await this.itemRepository.update(itemId, {
        status: ItemStatus.SOLDOUT,
      });
    }
    return item;
  }

  async deleteItem(itemId: string): Promise<Result> {
    const item = await this.itemRepository.delete(itemId);
    if (item) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
