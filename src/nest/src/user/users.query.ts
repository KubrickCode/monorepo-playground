import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.object';
import { UserService } from './user.service';

@Resolver()
export class UsersQuery {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async get() {
    return await this.userService.get();
  }
}
