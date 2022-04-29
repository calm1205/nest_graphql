import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '~/entities/item.entity';

@Injectable()
export class FindItemByIdService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async execute(itemId: string): Promise<Item> {
    const item = await this.itemRepository.findOne({ id: itemId });
    if (!item) throw new NotFoundException();
    return item;
  }
}
