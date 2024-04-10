import {
  Args,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';

@InputType()
export class UserCreateInput {
  @Field()
  name: string;
}

@ObjectType()
class UserCreateResult {
  @Field(() => Boolean)
  ok: boolean;
}

@Resolver()
export class UserCreateMutation {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserCreateResult, { name: 'userCreate' })
  async create(@Args('input') input: UserCreateInput) {
    await this.userService.create(input.name);
    return { ok: true };
  }
}
