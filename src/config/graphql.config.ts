import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

export default {
  driver: ApolloDriver,
  useFactory: () => ({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    debug: true,
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()], // Apollo Sandbox
  }),
} as ApolloDriverConfig;
