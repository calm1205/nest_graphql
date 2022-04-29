import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '~/entities/item.entity';

@Injectable()
export class FindAllItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async execute(): Promise<Item[]> {
    return await this.itemRepository.find();
  }
}
