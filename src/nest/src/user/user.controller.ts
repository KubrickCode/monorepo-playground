import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async get() {
    return await this.userService.getAll();
  }

  @Post()
  async post(@Body('name') name: string) {
    return await this.userService.create(name);
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body('name') name: string) {
    return await this.userService.update(Number(id), name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(Number(id));
  }
}
