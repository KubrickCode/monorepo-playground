import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get() {
    return await this.appService.get();
  }

  @Post()
  async post(@Body('name') name: string) {
    return await this.appService.post(name);
  }

  @Put(':id')
  async put(@Param('id') id: string, @Body('name') name: string) {
    return await this.appService.put(Number(id), name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.appService.delete(Number(id));
  }
}
