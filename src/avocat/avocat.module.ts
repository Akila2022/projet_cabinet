import { Module } from '@nestjs/common';
import { AvocatService } from './avocat.service';
import { AvocatController } from './avocat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvocatEntity } from './entities/avocat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AvocatEntity])],
  controllers: [AvocatController],
  providers: [AvocatService]
})
export class AvocatModule {}
