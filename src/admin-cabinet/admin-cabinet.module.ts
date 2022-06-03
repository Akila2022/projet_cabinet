import { Module } from '@nestjs/common';
import { AdminCabinetService } from './admin-cabinet.service';
import { AdminCabinetController } from './admin-cabinet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminCabinetEntity } from './entities/admin-cabinet.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AdminCabinetEntity])],
  controllers: [AdminCabinetController],
  providers: [AdminCabinetService]
})
export class AdminCabinetModule {}
