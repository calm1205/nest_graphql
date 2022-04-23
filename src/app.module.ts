import { Module } from '@nestjs/common';
import { ItemsModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GQLModule } from './graphql.module';

@Module({
  imports: [TypeOrmModule.forRoot(), GQLModule, ItemsModule],
})
export class AppModule {}
