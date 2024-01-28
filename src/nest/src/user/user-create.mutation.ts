import {
  Args,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { User } from './user.object';
import { UserService } from './user.service';

@InputType()
export class UserCreateInput {
  @Field()
  name: string;
}

@ObjectType()
class UserCreateResult {
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserCreateMutation {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => [UserCreateResult], { name: 'userCreate' })
  async create(@Args('input') input: UserCreateInput) {
    const user = await this.userService.post(input.name);
    return { user };
  }
}
