import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '~/common/types/result.type';
import { Item } from '~/entities/item.entity';
import { ItemInput } from '~/input/item.input';

@Injectable()
export class CreateItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async execute(input: ItemInput): Promise<Result> {
    const item = await this.itemRepository.save(input);
    if (item) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
