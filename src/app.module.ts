import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import { ItemsModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './typeorm.config';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(typeormConfig),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        debug: true,
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()], // Apollo Sandbox
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
