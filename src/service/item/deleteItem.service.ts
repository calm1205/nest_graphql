import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';

@Injectable()
export class DeleteItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async execute(itemId: string): Promise<Result> {
    const item = await this.itemRepository.delete(itemId);
    if (item) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
