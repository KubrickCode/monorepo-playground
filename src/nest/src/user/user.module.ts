import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma';
import { UsersQuery } from './users.query';
import { UserCreateMutation } from './user-create.mutation';
import { UserEditMutation } from './user-edit.mutation';
import { UserDeleteMutation } from './user-delete.mutation';
import { User } from './user.object';

@Module({
  imports: [PrismaModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    UsersQuery,
    UserCreateMutation,
    UserEditMutation,
    UserDeleteMutation,
  ],
})
export class UserModule {}
