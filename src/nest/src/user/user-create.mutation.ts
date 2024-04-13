import {
  Args,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInputError } from 'apollo-server-express';

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
    if (input.name.length < 2) {
      throw new UserInputError('Name is too short', {
        field: 'name',
      });
    }
    await this.userService.create(input.name);
    return { ok: true };
  }
}
