import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Item } from '~/entities/item.entity';
import { ItemStatus } from '~/item/item-status.enum';

export default class CreateItem implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data = [...Array(10)].map((_, i) => {
      return {
        name: `item_${i}`,
        price: 3000,
        description: 'this is item description.',
        status: ItemStatus.ON_SALE,
      } as Item;
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into('items')
      .values(data)
      .execute();
  }
}
