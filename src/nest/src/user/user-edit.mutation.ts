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
export class UserEditInput {
  @Field()
  id: number;

  @Field()
  name: string;
}

@ObjectType()
class UserEditResult {
  @Field(() => User)
  user: User;
}

@Resolver()
export class UserEditMutation {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => [UserEditResult], { name: 'userEdit' })
  async edit(@Args('input') input: UserEditInput) {
    const user = await this.userService.put(input.id, input.name);
    return { user };
  }
}
