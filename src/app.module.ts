import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import graphqlConfig from './graphql.config';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(),
    GraphQLModule.forRootAsync(graphqlConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
