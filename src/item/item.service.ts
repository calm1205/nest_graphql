import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  async findOneById(id: number) {
    return id;
  }
}
