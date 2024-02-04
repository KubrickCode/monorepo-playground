import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PrismaService } from '../prisma';
import { User } from './user.object';
import { Orm, getRandomOrm } from 'src/utils/get-random-orm';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectRepository(User)
    private readonly typeOrmUserRepository: Repository<User>,
  ) {}

  async get() {
    const orm = getRandomOrm();
    if (orm === Orm.TypeOrm) {
      return await this.typeOrmUserRepository.find({ order: { id: 'asc' } });
    } else {
      return await this.prisma.user.findMany({
        orderBy: {
          id: 'asc',
        },
      });
    }
  }

  async post(name: string) {
    const orm = getRandomOrm();
    if (orm === Orm.TypeOrm) {
      return await this.typeOrmUserRepository.insert({ name });
    } else {
      return await this.prisma.user.create({
        data: {
          name,
        },
      });
    }
  }

  async put(id: number, name: string) {
    const orm = getRandomOrm();
    if (orm === Orm.TypeOrm) {
      return await this.typeOrmUserRepository.upsert(
        { id, name },
        {
          conflictPaths: ['id'],
          skipUpdateIfNoValuesChanged: true,
          upsertType: 'on-conflict-do-update',
        },
      );
    } else {
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
  }

  async delete(id: number) {
    const orm = getRandomOrm();
    if (orm === Orm.TypeOrm) {
      return await this.typeOrmUserRepository.delete(id);
    } else {
      return await this.prisma.user.delete({
        where: {
          id,
        },
      });
    }
  }
}
