import { Module } from '@nestjs/common';
import { CabinetService } from './cabinet.service';
import { CabinetController } from './cabinet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabinetEntity } from './entities/cabinet.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CabinetEntity])],
  controllers: [CabinetController],
  providers: [CabinetService]
})
export class CabinetModule {}
