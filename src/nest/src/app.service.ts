import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async get() {
    return await this.prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async post(name: string) {
    return await this.prisma.user.create({
      data: {
        name,
      },
    });
  }

  async put(id: number, name: string) {
    return await this.prisma.user.upsert({
      where: {
        id,
      },
      create: {
        name,
      },
      update: {
        name,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
