import { Body, Controller, Get, Post } from '@nestjs/common';
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
    console.log(name);
    return await this.appService.post(name);
  }
}
