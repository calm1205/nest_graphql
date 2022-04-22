import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Items } from '~/entities/item.entity';
import { ItemStatus } from '~/item/item-status.enum';

export default class CreateItem implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data: Items[] = [...Array(10)].map((i) => {
      return {
        id: '',
        name: `item_${i}`,
        price: 3000,
        description: 'this is item description.',
        status: ItemStatus.ON_SALE,
        createdAt: '',
        updatedAt: '',
      };
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into(Items)
      .values(data)
      .execute();
  }
}
