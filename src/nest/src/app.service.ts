import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.user.findMany();
  }

  async post(name: string) {
    return await this.prisma.user.create({
      data: {
        name,
      },
    });
  }
}
