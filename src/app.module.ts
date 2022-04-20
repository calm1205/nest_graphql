import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
import graphqlConfig from './config/graphql.config';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(typeormConfig),
    GraphQLModule.forRootAsync(graphqlConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
