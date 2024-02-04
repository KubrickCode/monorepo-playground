import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PrismaModule } from './prisma';
import { UserModule } from './user/user.module';
import { typeORMConfig } from './typeorm/typeorm.config';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        debug: true,
        playground: true,
        autoSchemaFile: join(process.cwd(), 'schema.graphql'),
        sortSchema: true,
      }),
    }),
    PrismaModule,
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
  ],
})
export class AppModule {}
