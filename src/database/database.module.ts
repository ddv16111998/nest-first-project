import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/database.config';

@Module({
  exports: [TypeOrmModule.forRootAsync(typeOrmConfig)],
})
export class DatabaseModule {}
