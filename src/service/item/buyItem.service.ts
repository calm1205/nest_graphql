import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '~/entities/item.entity';
import { ItemStatus } from '~/enum/item-status.enum';

@Injectable()
export class BuyItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async execute(itemId: string): Promise<Item> {
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
}
