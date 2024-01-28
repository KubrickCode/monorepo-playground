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
export class UserDeleteInput {
  @Field()
  id: number;
}

@ObjectType()
class UserDeleteResult {
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserDeleteMutation {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => [UserDeleteResult], { name: 'userDelete' })
  async delete(@Args('input') input: UserDeleteInput) {
    const user = await this.userService.delete(input.id);
    return { user };
  }
}
