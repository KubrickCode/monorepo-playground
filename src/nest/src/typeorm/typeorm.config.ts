import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/user/user.object';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [User],
  synchronize: false,
};
