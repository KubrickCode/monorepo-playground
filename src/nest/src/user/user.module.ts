import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma';
import { UsersQuery } from './users.query';
import { UserCreateMutation } from './user-create.mutation';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UsersQuery, UserCreateMutation],
})
export class UserModule {}
